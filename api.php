<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
date_default_timezone_set('UTC');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['status' => 'ok']);
    exit();
}

$env_file = __DIR__ . '/.env';
if (file_exists($env_file)) {
    $lines = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            if (!empty($key)) putenv("$key=$value");
        }
    }
}

define('DB_HOST', 'localhost');
define('DB_USER', 'excelmed_morismarketing');
define('DB_PASSWORD', 'Sirgeorge.12');
define('DB_NAME', 'excelmed_morismarketing');
define('JWT_SECRET', 'your_secret_key_here_change_in_production');

class Database {
    private static $instance = null;
    private $connection;

    private function __construct() {
        $this->connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        if ($this->connection->connect_error) {
            throw new Exception('Database connection failed: ' . $this->connection->connect_error);
        }
        $this->connection->set_charset('utf8mb4');
    }

    public static function getInstance() {
        if (self::$instance === null) self::$instance = new self();
        return self::$instance;
    }

    public function getConnection() {
        return $this->connection;
    }

    public function fetchAll($query, $params = []) {
        $stmt = $this->connection->prepare($query);
        if (!$stmt) throw new Exception('Prepare failed: ' . $this->connection->error);
        if (!empty($params)) {
            $types = str_repeat('s', count($params));
            $stmt->bind_param($types, ...$params);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $data = $result->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $data;
    }

    public function fetchOne($query, $params = []) {
        $stmt = $this->connection->prepare($query);
        if (!$stmt) throw new Exception('Prepare failed: ' . $this->connection->error);
        if (!empty($params)) {
            $types = str_repeat('s', count($params));
            $stmt->bind_param($types, ...$params);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $data = $result->fetch_assoc();
        $stmt->close();
        return $data;
    }

    public function insert($query, $params = []) {
        $stmt = $this->connection->prepare($query);
        if (!$stmt) throw new Exception('Prepare failed: ' . $this->connection->error);
        if (!empty($params)) {
            $types = str_repeat('s', count($params));
            $stmt->bind_param($types, ...$params);
        }
        $stmt->execute();
        $id = $stmt->insert_id;
        $stmt->close();
        return $id;
    }

    public function execute($query, $params = []) {
        $stmt = $this->connection->prepare($query);
        if (!$stmt) throw new Exception('Prepare failed: ' . $this->connection->error);
        if (!empty($params)) {
            $types = str_repeat('s', count($params));
            $stmt->bind_param($types, ...$params);
        }
        $result = $stmt->execute();
        $stmt->close();
        return $result;
    }
}

class AuthMiddleware {
    public static function verify() {
        $headers = getallheaders();
        if (!isset($headers['Authorization'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Missing authorization header']);
            exit();
        }
        $auth_header = $headers['Authorization'];
        if (!preg_match('/^Bearer\s+(.+)$/i', $auth_header, $matches)) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid authorization header format']);
            exit();
        }
        $token = $matches[1];
        try {
            $decoded = self::verifyToken($token);
            $_REQUEST['user_id'] = $decoded['user_id'];
            $_REQUEST['user_email'] = $decoded['email'];
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid token: ' . $e->getMessage()]);
            exit();
        }
    }

    public static function generateToken($user_id, $email) {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode([
            'user_id' => $user_id,
            'email' => $email,
            'iat' => time(),
            'exp' => time() + (86400 * 7)
        ]);
        $header_encoded = self::base64UrlEncode($header);
        $payload_encoded = self::base64UrlEncode($payload);
        $signature = hash_hmac('sha256', "$header_encoded.$payload_encoded", JWT_SECRET, true);
        $signature_encoded = self::base64UrlEncode($signature);
        return "$header_encoded.$payload_encoded.$signature_encoded";
    }

    public static function verifyToken($token) {
        $parts = explode('.', $token);
        if (count($parts) !== 3) throw new Exception('Invalid token format');
        list($header_encoded, $payload_encoded, $signature_encoded) = $parts;
        $signature = hash_hmac('sha256', "$header_encoded.$payload_encoded", JWT_SECRET, true);
        if (self::base64UrlEncode($signature) !== $signature_encoded) throw new Exception('Invalid signature');
        $payload = json_decode(self::base64UrlDecode($payload_encoded), true);
        if (isset($payload['exp']) && $payload['exp'] < time()) throw new Exception('Token expired');
        return $payload;
    }

    private static function base64UrlEncode($data) {
        return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($data));
    }

    private static function base64UrlDecode($data) {
        $b64 = str_replace(['-', '_'], ['+', '/'], $data);
        $b64 .= str_repeat('=', 4 - strlen($b64) % 4);
        return base64_decode($b64);
    }
}

class Auth {
    public static function hashPassword($password) {
        return password_hash($password, PASSWORD_BCRYPT, ['cost' => 10]);
    }
    public static function verifyPassword($password, $hash) {
        return password_verify($password, $hash);
    }
    public static function getCurrentUser() {
        if (isset($_REQUEST['user_id'])) {
            return ['id' => $_REQUEST['user_id'], 'email' => $_REQUEST['user_email'] ?? null];
        }
        return null;
    }
    public static function isAuthenticated() {
        return isset($_REQUEST['user_id']);
    }
}

class AuthHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function login() {
        try {
            $raw_input = file_get_contents('php://input');
            $input = json_decode($raw_input, true);
            if (!is_array($input) || !isset($input['email']) || !isset($input['password'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Email and password are required']);
                return;
            }
            $email = trim($input['email']);
            $password = $input['password'];
            $user = $this->db->fetchOne(
                'SELECT id, email, password_hash, name FROM users WHERE email = ? AND status = ?',
                [$email, 'active']
            );
            if (!$user || !password_verify($password, $user['password_hash'])) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid credentials']);
                return;
            }
            $token = AuthMiddleware::generateToken($user['id'], $user['email']);
            $this->db->execute('UPDATE users SET last_login = NOW() WHERE id = ?', [$user['id']]);
            http_response_code(200);
            echo json_encode([
                'token' => $token,
                'user' => ['id' => $user['id'], 'email' => $user['email'], 'name' => $user['name']]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function logout() {
        http_response_code(200);
        echo json_encode(['message' => 'Logged out successfully']);
    }

    public function verify() {
        try {
            AuthMiddleware::verify();
            $user = $this->db->fetchOne(
                'SELECT id, email, name FROM users WHERE id = ?',
                [$_REQUEST['user_id']]
            );
            if (!$user) {
                http_response_code(401);
                echo json_encode(['error' => 'User not found']);
                return;
            }
            http_response_code(200);
            echo json_encode(['user' => $user, 'valid' => true]);
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class LeadHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function create() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!is_array($input) || !isset($input['name']) || !isset($input['email'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Name and email are required']);
                return;
            }
            $existing = $this->db->fetchOne('SELECT id FROM leads WHERE email = ?', [$input['email']]);
            if ($existing) {
                http_response_code(409);
                echo json_encode(['error' => 'Lead with this email already exists']);
                return;
            }
            $id = $this->db->insert(
                'INSERT INTO leads (name, email, phone, company, status, source, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
                [$input['name'], $input['email'], $input['phone'] ?? null, $input['company'] ?? null, 'new', $input['source'] ?? 'web']
            );
            http_response_code(201);
            echo json_encode(['message' => 'Lead created successfully', 'lead_id' => $id]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function getAll() {
        try {
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;
            $status = isset($_GET['status']) ? trim($_GET['status']) : null;

            if ($limit === 1 && !$status) {
                $count = $this->db->fetchOne('SELECT COUNT(*) as count FROM leads');
                http_response_code(200);
                echo json_encode(['count' => (int)$count['count'], 'leads' => []]);
                return;
            }

            $query = 'SELECT * FROM leads';
            $params = [];
            if ($status) {
                $query .= ' WHERE status = ?';
                $params[] = $status;
            }
            $query .= ' ORDER BY created_at DESC LIMIT ?';
            $params[] = $limit;

            $leads = $this->db->fetchAll($query, $params);
            $count = $this->db->fetchOne('SELECT COUNT(*) as count FROM leads');

            http_response_code(200);
            echo json_encode(['leads' => $leads, 'count' => (int)$count['count']]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function getById($id) {
        try {
            $lead = $this->db->fetchOne('SELECT * FROM leads WHERE id = ?', [(int)$id]);
            if (!$lead) { http_response_code(404); echo json_encode(['error' => 'Lead not found']); return; }
            echo json_encode($lead);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function update($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $fields = [];
            $params = [];
            foreach ($input as $key => $value) {
                if (in_array($key, ['name', 'email', 'phone', 'company', 'status', 'source'])) {
                    $fields[] = "$key = ?";
                    $params[] = $value;
                }
            }
            if (empty($fields)) {
                http_response_code(400);
                echo json_encode(['error' => 'No fields to update']);
                return;
            }
            $params[] = (int)$id;
            $types = str_repeat('s', count($fields)) . 'i';
            $this->db->execute(
                "UPDATE leads SET " . implode(', ', $fields) . " WHERE id = ?",
                $params
            );
            http_response_code(200);
            echo json_encode(['message' => 'Lead updated successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function delete($id) {
        try {
            $result = $this->db->execute('DELETE FROM leads WHERE id = ?', [(int)$id]);
            if ($result) {
                http_response_code(200);
                echo json_encode(['message' => 'Lead deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Lead not found']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class CustomerHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function getAll() {
        try {
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;
            $status = isset($_GET['status']) ? trim($_GET['status']) : null;

            if ($limit === 1 && !$status) {
                $count = $this->db->fetchOne('SELECT COUNT(*) as count FROM customers');
                http_response_code(200);
                echo json_encode(['count' => (int)$count['count'], 'customers' => []]);
                return;
            }

            $query = 'SELECT * FROM customers';
            $params = [];
            if ($status) {
                $query .= ' WHERE status = ?';
                $params[] = $status;
            }
            $query .= ' ORDER BY created_at DESC LIMIT ?';
            $params[] = $limit;

            $customers = $this->db->fetchAll($query, $params);
            $count = $this->db->fetchOne('SELECT COUNT(*) as count FROM customers');

            http_response_code(200);
            echo json_encode(['customers' => $customers, 'count' => (int)$count['count']]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function getById($id) {
        try {
            $customer = $this->db->fetchOne('SELECT * FROM customers WHERE id = ?', [(int)$id]);
            if (!$customer) { http_response_code(404); echo json_encode(['error' => 'Customer not found']); return; }
            echo json_encode($customer);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function convertLead($lead_id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $lead = $this->db->fetchOne('SELECT * FROM leads WHERE id = ?', [(int)$lead_id]);
            if (!$lead) { http_response_code(404); echo json_encode(['error' => 'Lead not found']); return; }

            $existing = $this->db->fetchOne('SELECT id FROM customers WHERE email = ?', [$lead['email']]);
            if ($existing) { http_response_code(409); echo json_encode(['error' => 'Lead already converted to customer']); return; }

            $customer_id = $this->db->insert(
                'INSERT INTO customers (name, email, phone, company, status, lead_id, converted_at, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())',
                [$lead['name'], $lead['email'], $lead['phone'] ?? null, $lead['company'] ?? null, 'active', (int)$lead_id]
            );
            $this->db->execute('UPDATE leads SET status = ? WHERE id = ?', ['converted', (int)$lead_id]);

            http_response_code(201);
            echo json_encode(['message' => 'Lead converted to customer successfully', 'customer_id' => $customer_id]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class CampaignHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function getAll() {
        try {
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50;

            if ($limit === 1) {
                $count = $this->db->fetchOne('SELECT COUNT(*) as count FROM campaigns');
                http_response_code(200);
                echo json_encode(['count' => (int)$count['count'], 'campaigns' => []]);
                return;
            }

            $campaigns = $this->db->fetchAll('SELECT * FROM campaigns ORDER BY created_at DESC LIMIT ?', [$limit]);
            $count = $this->db->fetchOne('SELECT COUNT(*) as count FROM campaigns');

            http_response_code(200);
            echo json_encode(['campaigns' => $campaigns, 'count' => (int)$count['count']]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function getById($id) {
        try {
            $campaign = $this->db->fetchOne('SELECT * FROM campaigns WHERE id = ?', [(int)$id]);
            if (!$campaign) { http_response_code(404); echo json_encode(['error' => 'Campaign not found']); return; }
            echo json_encode($campaign);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function create() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!is_array($input) || !isset($input['name']) || !isset($input['subject'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Name and subject are required']);
                return;
            }
            $id = $this->db->insert(
                'INSERT INTO campaigns (name, subject, template, schedule, status, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
                [$input['name'], $input['subject'], $input['template'] ?? null, $input['schedule'] ?? null, 'draft', (int)($_REQUEST['user_id'] ?? 0)]
            );
            http_response_code(201);
            echo json_encode(['message' => 'Campaign created successfully', 'campaign_id' => $id]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function update($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $fields = [];
            $params = [];
            foreach ($input as $key => $value) {
                if (in_array($key, ['name', 'subject', 'template', 'schedule', 'status'])) {
                    $fields[] = "$key = ?";
                    $params[] = $value;
                }
            }
            if (empty($fields)) {
                http_response_code(400);
                echo json_encode(['error' => 'No fields to update']);
                return;
            }
            $params[] = (int)$id;
            $types = str_repeat('s', count($fields)) . 'i';
            $this->db->execute("UPDATE campaigns SET " . implode(', ', $fields) . " WHERE id = ?", $params);
            http_response_code(200);
            echo json_encode(['message' => 'Campaign updated successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function send($id) {
        try {
            $campaign = $this->db->fetchOne('SELECT * FROM campaigns WHERE id = ?', [(int)$id]);
            if (!$campaign) { http_response_code(404); echo json_encode(['error' => 'Campaign not found']); return; }
            $this->db->execute(
                'UPDATE campaigns SET status = ?, sent_at = NOW(), sent_count = (SELECT COUNT(*) FROM leads WHERE status = ?) WHERE id = ?',
                ['sent', 'active', (int)$id]
            );
            http_response_code(200);
            echo json_encode(['message' => 'Campaign sent successfully', 'sent_to' => $campaign['recipients_count'] ?? 0]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class ProductHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function getAll() {
        try {
            $products = $this->db->fetchAll('SELECT * FROM products ORDER BY created_at DESC');
            http_response_code(200);
            echo json_encode(['products' => $products]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function getById($id) {
        try {
            $product = $this->db->fetchOne('SELECT * FROM products WHERE id = ?', [(int)$id]);
            if (!$product) { http_response_code(404); echo json_encode(['error' => 'Product not found']); return; }
            echo json_encode($product);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function create() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!is_array($input) || !isset($input['name'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Product name is required']);
                return;
            }

            $id = $this->db->insert(
                'INSERT INTO products (name, description, category, price, stock, status, sku, image_url, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
                [
                    $input['name'],
                    $input['description'] ?? null,
                    $input['category'] ?? null,
                    (float)($input['price'] ?? 0),
                    (int)($input['stock'] ?? 0),
                    'active',
                    $input['sku'] ?? null,
                    $input['image_url'] ?? null
                ]
            );
            http_response_code(201);
            echo json_encode(['message' => 'Product created successfully', 'product_id' => $id]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function update($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $fields = [];
            $params = [];
            foreach ($input as $key => $value) {
                if (in_array($key, ['name', 'description', 'category', 'price', 'stock', 'status', 'sku', 'image_url'])) {
                    $fields[] = "$key = ?";
                    $params[] = $value;
                }
            }
            if (empty($fields)) {
                http_response_code(400);
                echo json_encode(['error' => 'No fields to update']);
                return;
            }
            $params[] = (int)$id;
            $this->db->execute(
                "UPDATE products SET " . implode(', ', $fields) . ", updated_at = NOW() WHERE id = ?",
                $params
            );
            http_response_code(200);
            echo json_encode(['message' => 'Product updated successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function delete($id) {
        try {
            $result = $this->db->execute('DELETE FROM products WHERE id = ?', [(int)$id]);
            if ($result) {
                http_response_code(200);
                echo json_encode(['message' => 'Product deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Product not found']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class TrackingHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function trackPixel() {
        try {
            $raw_input = file_get_contents('php://input');
            $input = json_decode($raw_input, true);

            if (!is_array($input) || !isset($input['page_url'])) {
                http_response_code(400);
                echo json_encode(['error' => 'page_url is required']);
                return;
            }

            $this->db->insert(
                'INSERT INTO tracking_pixels (lead_id, page_url, referrer_url, ip_address, user_agent, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
                [
                    (int)($input['lead_id'] ?? 0),
                    $input['page_url'],
                    $input['referrer_url'] ?? null,
                    $_SERVER['REMOTE_ADDR'] ?? null,
                    $_SERVER['HTTP_USER_AGENT'] ?? null
                ]
            );
            http_response_code(200);
            echo json_encode(['message' => 'Tracked successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function getStats() {
        try {
            $stats = $this->db->fetchAll(
                'SELECT DATE(created_at) as date, COUNT(*) as total_visits, COUNT(DISTINCT lead_id) as unique_leads
                 FROM tracking_pixels
                 GROUP BY DATE(created_at)
                 ORDER BY date DESC
                 LIMIT 30'
            );
            echo json_encode($stats);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class UploadHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function upload() {
        try {
            if (!isset($_FILES['file'])) {
                http_response_code(400);
                echo json_encode(['error' => 'No file provided']);
                return;
            }
            $file = $_FILES['file'];
            $upload_type = $_POST['type'] ?? 'documents';
            $allowed_types = ['products', 'campaigns', 'documents'];
            if (!in_array($upload_type, $allowed_types)) {
                http_response_code(400);
                echo json_encode(['error' => 'Invalid upload type']);
                return;
            }
            if ($file['error'] !== UPLOAD_ERR_OK) {
                http_response_code(400);
                echo json_encode(['error' => 'File upload error']);
                return;
            }
            $max_size = 10 * 1024 * 1024;
            if ($file['size'] > $max_size) {
                http_response_code(400);
                echo json_encode(['error' => 'File size exceeds 10MB limit']);
                return;
            }
            $allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf', 'doc', 'docx'];
            $file_ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            if (!in_array($file_ext, $allowed_extensions)) {
                http_response_code(400);
                echo json_encode(['error' => 'File type not allowed']);
                return;
            }
            $upload_dir = __DIR__ . '/uploads/' . $upload_type;
            if (!is_dir($upload_dir)) mkdir($upload_dir, 0755, true);
            $timestamp = time();
            $random_str = substr(md5(rand()), 0, 8);
            $filename = $timestamp . '_' . $random_str . '.' . $file_ext;
            $filepath = $upload_dir . '/' . $filename;
            if (!move_uploaded_file($file['tmp_name'], $filepath)) {
                http_response_code(500);
                echo json_encode(['error' => 'Failed to save file']);
                return;
            }
            $file_url = '/uploads/' . $upload_type . '/' . $filename;
            $this->db->insert(
                'INSERT INTO file_uploads (filename, original_name, file_type, file_path, file_url, file_size, mime_type, uploaded_by, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())',
                [$filename, $file['name'], $upload_type, $filepath, $file_url, $file['size'], $file['type'], $_REQUEST['user_id'] ?? null]
            );
            http_response_code(200);
            echo json_encode([
                'success' => true, 'message' => 'File uploaded successfully',
                'filename' => $filename, 'url' => $file_url,
                'size' => $file['size'], 'type' => $upload_type
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Upload failed', 'message' => $e->getMessage()]);
        }
    }

    public function getAll() {
        try {
            $type = isset($_GET['type']) ? trim($_GET['type']) : null;
            $query = 'SELECT * FROM file_uploads';
            $params = [];
            if ($type && in_array($type, ['products', 'campaigns', 'documents'])) {
                $query .= ' WHERE file_type = ?';
                $params[] = $type;
            }
            $query .= ' ORDER BY created_at DESC';
            $files = $this->db->fetchAll($query, $params);
            http_response_code(200);
            echo json_encode(['files' => $files]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function delete($id) {
        try {
            $file = $this->db->fetchOne('SELECT * FROM file_uploads WHERE id = ?', [(int)$id]);
            if (!$file) { http_response_code(404); echo json_encode(['error' => 'File not found']); return; }
            $filepath = $file['file_path'];
            if (file_exists($filepath)) unlink($filepath);
            $this->db->execute('DELETE FROM file_uploads WHERE id = ?', [(int)$id]);
            http_response_code(200);
            echo json_encode(['message' => 'File deleted successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

class AnalyticsHandler {
    private $db;
    public function __construct() { $this->db = Database::getInstance(); }

    public function getAnalytics() {
        try {
            $total_leads = $this->db->fetchOne('SELECT COUNT(*) as count FROM leads');
            $total_customers = $this->db->fetchOne('SELECT COUNT(*) as count FROM customers');
            $total_campaigns = $this->db->fetchOne('SELECT COUNT(*) as count FROM campaigns');
            $conversion_rate = 0;
            if (($total_leads['count'] ?? 0) > 0) {
                $conversion_rate = round((($total_customers['count'] ?? 0) / $total_leads['count']) * 100, 2);
            }
            $recent_leads = $this->db->fetchOne(
                'SELECT COUNT(*) as count FROM leads WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)'
            );
            $recent_conversions = $this->db->fetchOne(
                'SELECT COUNT(*) as count FROM customers WHERE converted_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)'
            );

            http_response_code(200);
            echo json_encode([
                'total_leads' => (int)($total_leads['count'] ?? 0),
                'total_customers' => (int)($total_customers['count'] ?? 0),
                'total_campaigns' => (int)($total_campaigns['count'] ?? 0),
                'conversion_rate' => $conversion_rate,
                'avg_lead_score' => 0,
                'recent_leads' => (int)($recent_leads['count'] ?? 0),
                'recent_conversions' => (int)($recent_conversions['count'] ?? 0)
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}

$request_uri = $_SERVER['REQUEST_URI'];
if (strpos($request_uri, '?') !== false) $request_uri = substr($request_uri, 0, strpos($request_uri, '?'));
$route = $request_uri;
if (strpos($route, '/api.php') === 0) $route = substr($route, 8);
elseif (strpos($route, '/api/') === 0) $route = substr($route, 4);
if (empty($route)) $route = '/';
elseif ($route[0] !== '/') $route = '/' . $route;
$method = $_SERVER['REQUEST_METHOD'];

error_log(sprintf('[api] %s %s -> %s', $method, $_SERVER['REQUEST_URI'] ?? '', $route));

try {
    if ($route === '/auth/login' && $method === 'POST') {
        (new AuthHandler())->login();
    } elseif ($route === '/auth/logout' && $method === 'POST') {
        (new AuthHandler())->logout();
    } elseif ($route === '/auth/verify' && $method === 'GET') {
        (new AuthHandler())->verify();
    } elseif ($route === '/leads' && $method === 'POST') {
        (new LeadHandler())->create();
    } elseif ($route === '/tracking/pixel' && $method === 'POST') {
        (new TrackingHandler())->trackPixel();
    } elseif ($route === '/products' && $method === 'GET') {
        (new ProductHandler())->getAll();
    } elseif (preg_match('/^\/products\/(\d+)$/', $route, $matches) && $method === 'GET') {
        (new ProductHandler())->getById($matches[1]);
    } elseif (preg_match('/^\/tracking\/stats$/', $route) && $method === 'GET') {
        AuthMiddleware::verify();
        (new TrackingHandler())->getStats();
    } else {
        AuthMiddleware::verify();

        if ($route === '/leads' && $method === 'GET') {
            (new LeadHandler())->getAll();
        } elseif (preg_match('/^\/leads\/(\d+)$/', $route, $matches)) {
            $h = new LeadHandler();
            if ($method === 'GET') $h->getById($matches[1]);
            elseif ($method === 'PUT') $h->update($matches[1]);
            elseif ($method === 'DELETE') $h->delete($matches[1]);
        } elseif ($route === '/customers' && $method === 'GET') {
            (new CustomerHandler())->getAll();
        } elseif (preg_match('/^\/customers\/(\d+)$/', $route, $matches) && $method === 'GET') {
            (new CustomerHandler())->getById($matches[1]);
        } elseif (preg_match('/^\/customers\/(\d+)\/convert$/', $route, $matches) && $method === 'POST') {
            (new CustomerHandler())->convertLead($matches[1]);
        } elseif ($route === '/campaigns' && $method === 'GET') {
            (new CampaignHandler())->getAll();
        } elseif ($route === '/campaigns' && $method === 'POST') {
            (new CampaignHandler())->create();
        } elseif (preg_match('/^\/campaigns\/(\d+)$/', $route, $matches)) {
            $h = new CampaignHandler();
            if ($method === 'GET') $h->getById($matches[1]);
            elseif ($method === 'PUT') $h->update($matches[1]);
        } elseif (preg_match('/^\/campaigns\/(\d+)\/send$/', $route, $matches) && $method === 'POST') {
            (new CampaignHandler())->send($matches[1]);
        } elseif ($route === '/products' && $method === 'POST') {
            (new ProductHandler())->create();
        } elseif (preg_match('/^\/products\/(\d+)$/', $route, $matches)) {
            $h = new ProductHandler();
            if ($method === 'PUT') $h->update($matches[1]);
            elseif ($method === 'DELETE') $h->delete($matches[1]);
        } elseif ($route === '/upload' && $method === 'POST') {
            (new UploadHandler())->upload();
        } elseif ($route === '/uploads' && $method === 'GET') {
            (new UploadHandler())->getAll();
        } elseif (preg_match('/^\/uploads\/(\d+)$/', $route, $matches) && $method === 'DELETE') {
            (new UploadHandler())->delete($matches[1]);
        } elseif ($route === '/analytics' && $method === 'GET') {
            (new AnalyticsHandler())->getAnalytics();
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
        }
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error', 'message' => $e->getMessage()]);
}

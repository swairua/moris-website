<?php
/**
 * Authentication Handler
 */

class AuthHandler {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    /**
     * Admin login
     */
    public function login() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);

            if (!isset($input['email']) || !isset($input['password'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Email and password are required']);
                return;
            }

            $email = trim($input['email']);
            $password = $input['password'];

            // Get user from database
            $result = $this->db->query(
                'SELECT id, email, password_hash, name FROM users WHERE email = ? AND status = ?',
                [$email, 'active']
            );
            $user = $result->fetch_assoc();
            $result->close();

            if (!$user) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid credentials']);
                return;
            }

            // Verify password
            if (!password_verify($password, $user['password_hash'])) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid credentials']);
                return;
            }

            // Generate JWT token
            $token = AuthMiddleware::generateToken($user['id'], $user['email']);

            http_response_code(200);
            echo json_encode([
                'token' => $token,
                'user' => [
                    'id' => $user['id'],
                    'email' => $user['email'],
                    'name' => $user['name']
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    /**
     * Logout (client-side token deletion)
     */
    public function logout() {
        http_response_code(200);
        echo json_encode(['message' => 'Logged out successfully']);
    }

    /**
     * Verify token
     */
    public function verify() {
        try {
            AuthMiddleware::verify();
            
            $user_id = $_REQUEST['user_id'];
            $email = $_REQUEST['user_email'];

            // Get user details
            $result = $this->db->query(
                'SELECT id, email, name FROM users WHERE id = ?',
                [$user_id]
            );
            $user = $result->fetch_assoc();
            $result->close();

            if (!$user) {
                http_response_code(401);
                echo json_encode(['error' => 'User not found']);
                return;
            }

            http_response_code(200);
            echo json_encode([
                'user' => $user,
                'valid' => true
            ]);
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}
?>

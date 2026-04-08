<?php
/**
 * Moris Enterprises Marketing Automation API
 * Main router for all API endpoints
 */

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load configuration
require_once __DIR__ . '/config.php';

// Load database class
require_once __DIR__ . '/models/Database.php';

// Load middleware
require_once __DIR__ . '/middleware/AuthMiddleware.php';

// Load handlers
require_once __DIR__ . '/handlers/LeadHandler.php';
require_once __DIR__ . '/handlers/CustomerHandler.php';
require_once __DIR__ . '/handlers/CampaignHandler.php';
require_once __DIR__ . '/handlers/AuthHandler.php';
require_once __DIR__ . '/handlers/ProductHandler.php';
require_once __DIR__ . '/handlers/TrackingHandler.php';

// Parse URL
$request_uri = $_SERVER['REQUEST_URI'];
$base_path = '/api';

// Remove query string
if (strpos($request_uri, '?') !== false) {
    $request_uri = substr($request_uri, 0, strpos($request_uri, '?'));
}

// Remove base path
if (strpos($request_uri, $base_path) === 0) {
    $route = substr($request_uri, strlen($base_path));
} else {
    $route = $request_uri;
}

// Ensure route starts with /
if (!empty($route) && $route[0] !== '/') {
    $route = '/' . $route;
}

$method = $_SERVER['REQUEST_METHOD'];

// Route handling
try {
    // Auth routes (public)
    if ($route === '/auth/login' && $method === 'POST') {
        $handler = new AuthHandler();
        $handler->login();
    } elseif ($route === '/auth/logout' && $method === 'POST') {
        $handler = new AuthHandler();
        $handler->logout();
    } elseif ($route === '/auth/verify' && $method === 'GET') {
        $handler = new AuthHandler();
        $handler->verify();
    }
    // Public lead creation
    elseif ($route === '/leads' && $method === 'POST') {
        $handler = new LeadHandler();
        $handler->create();
    }
    // Protected routes
    else {
        // Verify authentication for protected routes
        AuthMiddleware::verify();

        // Lead routes (protected)
        if ($route === '/leads' && $method === 'GET') {
            $handler = new LeadHandler();
            $handler->getAll();
        } elseif (preg_match('/^\/leads\/(\d+)$/', $route, $matches)) {
            $id = $matches[1];
            if ($method === 'GET') {
                $handler = new LeadHandler();
                $handler->getById($id);
            } elseif ($method === 'PUT') {
                $handler = new LeadHandler();
                $handler->update($id);
            } elseif ($method === 'DELETE') {
                $handler = new LeadHandler();
                $handler->delete($id);
            }
        }
        // Customer routes
        elseif ($route === '/customers' && $method === 'GET') {
            $handler = new CustomerHandler();
            $handler->getAll();
        } elseif (preg_match('/^\/customers\/(\d+)$/', $route, $matches)) {
            $id = $matches[1];
            if ($method === 'GET') {
                $handler = new CustomerHandler();
                $handler->getById($id);
            }
        } elseif (preg_match('/^\/customers\/(\d+)\/convert$/', $route, $matches)) {
            $lead_id = $matches[1];
            if ($method === 'POST') {
                $handler = new CustomerHandler();
                $handler->convertLead($lead_id);
            }
        }
        // Campaign routes
        elseif ($route === '/campaigns' && $method === 'GET') {
            $handler = new CampaignHandler();
            $handler->getAll();
        } elseif ($route === '/campaigns' && $method === 'POST') {
            $handler = new CampaignHandler();
            $handler->create();
        } elseif (preg_match('/^\/campaigns\/(\d+)$/', $route, $matches)) {
            $id = $matches[1];
            if ($method === 'GET') {
                $handler = new CampaignHandler();
                $handler->getById($id);
            } elseif ($method === 'PUT') {
                $handler = new CampaignHandler();
                $handler->update($id);
            }
        } elseif (preg_match('/^\/campaigns\/(\d+)\/send$/', $route, $matches)) {
            $id = $matches[1];
            if ($method === 'POST') {
                $handler = new CampaignHandler();
                $handler->send($id);
            }
        }
        // Product routes
        elseif ($route === '/products' && $method === 'GET') {
            $handler = new ProductHandler();
            $handler->getAll();
        } elseif ($route === '/products' && $method === 'POST') {
            $handler = new ProductHandler();
            $handler->create();
        } elseif (preg_match('/^\/products\/(\d+)$/', $route, $matches)) {
            $id = $matches[1];
            if ($method === 'GET') {
                $handler = new ProductHandler();
                $handler->getById($id);
            } elseif ($method === 'PUT') {
                $handler = new ProductHandler();
                $handler->update($id);
            } elseif ($method === 'DELETE') {
                $handler = new ProductHandler();
                $handler->delete($id);
            }
        }
        // Analytics routes
        elseif ($route === '/analytics' && $method === 'GET') {
            $handler = new \stdClass();
            echo json_encode([
                'total_leads' => 0,
                'conversion_rate' => 0,
                'avg_lead_score' => 0,
                'pipeline_value' => 0
            ]);
        }
        // Tracking routes
        elseif ($route === '/tracking/pixel' && $method === 'POST') {
            $handler = new TrackingHandler();
            $handler->trackPixel();
        } elseif ($route === '/tracking/stats' && $method === 'GET') {
            $handler = new TrackingHandler();
            $handler->getStats();
        }
        else {
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
        }
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error',
        'message' => $e->getMessage()
    ]);
}
?>

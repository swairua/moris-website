<?php
/**
 * Moris Entreprises — Automatic Sitemap Generator
 *
 * Scans the website directory structure, finds all prerendered HTML pages,
 * and generates split XML sitemaps with proper priorities, lastmod dates,
 * and changefreq values. Updates robots.txt with sitemap locations.
 *
 * Usage:
 *   CLI (cron): php /path/to/sitemap-generator.php
 *   Web:        https://morisentreprises.com/sitemap-generator.php?generate
 *   Status:     https://morisentreprises.com/sitemap-generator.php
 *
 * Cron schedule (daily at 2 AM):
 *   0 2 * * * php /var/www/html/sitemap-generator.php
 *
 * Requirements: PHP 7.4+
 */

// ─── Configuration ───────────────────────────────────────────────────────────

define('SITE_URL', 'https://morisentreprises.com');

// Auto-detect SITE_ROOT: prefer dist/ if it contains prerendered pages (local dev),
// otherwise use __DIR__ (shared server where dist/* is deployed to web root)
$autoRoot = __DIR__;
$distDir = __DIR__ . '/dist';
if (is_dir($distDir) && is_file($distDir . '/index.html')) {
    $autoRoot = $distDir;
}
define('SITE_ROOT', $autoRoot);
define('OUTPUT_DIR', __DIR__);
define('LOG_FILE', __DIR__ . '/sitemap-generator.log');

// Priority and changefreq rules keyed by URL depth patterns
define('PRIORITY_HOME', '1.0');
define('PRIORITY_CATEGORY', '0.9');
define('PRIORITY_PRODUCT', '0.8');
define('PRIORITY_DEFAULT', '0.8');

define('FREQ_HOME', 'daily');
define('FREQ_CATEGORY', 'weekly');
define('FREQ_PRODUCT', 'monthly');
define('FREQ_DEFAULT', 'monthly');

// Directories and file patterns to exclude (relative paths from root)
const EXCLUDED_DIRS = ['api', 'admin', 'uploads', 'assets', 'node_modules', '.git'];
const EXCLUDED_FILES = ['api.php', 'sitemap-generator.php', 'sitemap.xml',
    'sitemap-pages.xml', 'sitemap-products.xml', 'sitemap-gallery.xml'];

// ─── Logger ──────────────────────────────────────────────────────────────────

class Logger
{
    private string $logFile;

    public function __construct(string $logFile)
    {
        $this->logFile = $logFile;
    }

    public function info(string $message): void
    {
        $this->write('INFO', $message);
    }

    public function error(string $message): void
    {
        $this->write('ERROR', $message);
    }

    public function warn(string $message): void
    {
        $this->write('WARN', $message);
    }

    private function write(string $level, string $message): void
    {
        $timestamp = date('Y-m-d H:i:s');
        $line = "[{$timestamp}] [{$level}] {$message}" . PHP_EOL;
        file_put_contents($this->logFile, $line, FILE_APPEND | LOCK_EX);
    }
}

// ─── Directory Scanner ───────────────────────────────────────────────────────

class DirectoryScanner
{
    private Logger $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    /**
     * Recursively scan $rootDir and return all index.html files,
     * excluding blocked directories and non-page assets.
     *
     * @return array[] Each entry: ['path' => string, 'url' => string, 'mtime' => int]
     */
    public function scan(string $rootDir): array
    {
        $pages = [];
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($rootDir, RecursiveDirectoryIterator::SKIP_DOTS),
            RecursiveIteratorIterator::SELF_FIRST
        );

        $rootReal = realpath($rootDir);

        foreach ($iterator as $fileInfo) {
            /** @var SplFileInfo $fileInfo */

            // Only process index.html files
            if ($fileInfo->isFile() && $fileInfo->getFilename() === 'index.html') {
                $fullPath = $fileInfo->getRealPath();
                $relativePath = $this->getRelativePath($fullPath, $rootReal);

                // Build the URL path (strip trailing /index.html)
                $urlPath = $this->relativeToUrl($relativePath);

                // Skip excluded directories
                if ($this->isExcluded($urlPath)) {
                    $this->logger->info("Skipped excluded: {$urlPath}");
                    continue;
                }

                $pages[] = [
                    'path'  => $fullPath,
                    'url'   => $urlPath,
                    'mtime' => $fileInfo->getMTime(),
                ];
            }
        }

        $this->logger->info("Scanned {$rootDir} — found " . count($pages) . ' pages');

        return $pages;
    }

    /**
     * Compute relative path from root to file
     */
    private function getRelativePath(string $fullPath, string $rootReal): string
    {
        $prefix = rtrim($rootReal, '/\\');
        if (strpos($fullPath, $prefix) === 0) {
            $relative = substr($fullPath, strlen($prefix));
            return ltrim(str_replace('\\', '/', $relative), '/');
        }
        return basename(dirname($fullPath));
    }

    /**
     * Convert a filesystem relative path like "products/water-analysis/index.html"
     * into a URL path like "/products/water-analysis"
     */
    private function relativeToUrl(string $relativePath): string
    {
        // Remove leading directory prefix if present
        $parts = explode('/', $relativePath);

        // Find "index.html" and take everything before it
        $urlParts = [];
        foreach ($parts as $part) {
            if ($part === 'index.html') {
                break;
            }
            $urlParts[] = $part;
        }

        $urlPath = '/' . implode('/', $urlParts);
        if ($urlPath === '/index' || $urlPath === '') {
            $urlPath = '/';
        }
        return $urlPath;
    }

    /**
     * Check if a URL path should be excluded from the sitemap
     */
    private function isExcluded(string $urlPath): bool
    {
        $path = ltrim($urlPath, '/');

        // Exclude empty root (homepage) — we want to include it
        if ($urlPath === '/') {
            return false;
        }

        // Check against excluded directories
        foreach (EXCLUDED_DIRS as $dir) {
            if (strpos($path, $dir . '/') === 0 || $path === $dir) {
                return true;
            }
        }

        // Check against excluded files
        foreach (EXCLUDED_FILES as $file) {
            if ($path === $file || strpos($path, $file . '/') === 0) {
                return true;
            }
        }

        return false;
    }
}

// ─── Sitemap Sheet ───────────────────────────────────────────────────────────

class SitemapSheet
{
    private string $siteUrl;
    private Logger $logger;

    public function __construct(Logger $logger)
    {
        $this->siteUrl = rtrim(SITE_URL, '/');
        $this->logger = $logger;
    }

    /**
     * Generate a complete <urlset> XML string for a set of pages
     *
     * @param array[] $pages Each entry: ['url' => string, 'mtime' => int]
     * @param array $defaults ['priority' => string, 'changefreq' => string]
     */
    public function generate(array $pages, array $defaults = []): string
    {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $xml .= '<?xml-stylesheet type="text/xsl" href="' . $this->siteUrl . '/sitemap.xsl"?>' . PHP_EOL;
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

        foreach ($pages as $page) {
            $urlPath = $page['url'];
            // Ensure trailing slash for all URLs except root
            if ($urlPath !== '/') {
                $urlPath = rtrim($urlPath, '/') . '/';
            }
            $loc = $this->escape($this->siteUrl . $urlPath);
            $lastmod = date('Y-m-d', $page['mtime']);

            list($priority, $changefreq) = $this->getSeoParams($page['url'], $defaults);

            $xml .= "  <url>" . PHP_EOL;
            $xml .= "    <loc>{$loc}</loc>" . PHP_EOL;
            $xml .= "    <lastmod>{$lastmod}</lastmod>" . PHP_EOL;
            $xml .= "    <changefreq>{$changefreq}</changefreq>" . PHP_EOL;
            $xml .= "    <priority>{$priority}</priority>" . PHP_EOL;
            $xml .= "  </url>" . PHP_EOL;
        }

        $xml .= '</urlset>' . PHP_EOL;

        $this->logger->info("Generated sheet with " . count($pages) . " URLs");

        return $xml;
    }

    /**
     * Determine SEO priority and changefreq based on URL depth
     */
    private function getSeoParams(string $url, array $defaults): array
    {
        $priority = $defaults['priority'] ?? PRIORITY_DEFAULT;
        $changefreq = $defaults['changefreq'] ?? FREQ_DEFAULT;

        // Homepage
        if ($url === '/') {
            return [PRIORITY_HOME, FREQ_HOME];
        }

        // Product category (1 level deep under /products/)
        if (preg_match('#^/products/[^/]+$#', $url)) {
            return [PRIORITY_CATEGORY, FREQ_CATEGORY];
        }

        // Product detail (2+ levels deep under /products/)
        if (preg_match('#^/products/[^/]+/.+#', $url)) {
            return [PRIORITY_PRODUCT, FREQ_PRODUCT];
        }

        return [$priority, $changefreq];
    }

    /**
     * Escape special XML characters
     */
    private function escape(string $value): string
    {
        return htmlspecialchars($value, ENT_XML1 | ENT_QUOTES, 'UTF-8');
    }
}

// ─── Sitemap Index ───────────────────────────────────────────────────────────

class SitemapIndex
{
    private string $siteUrl;
    private Logger $logger;

    public function __construct(Logger $logger)
    {
        $this->siteUrl = rtrim(SITE_URL, '/');
        $this->logger = $logger;
    }

    /**
     * Generate a <sitemapindex> XML string pointing to the given sheet files
     *
     * @param string[] $sheets Array of filenames (e.g. ['sitemap-pages.xml'])
     */
    public function generate(array $sheets): string
    {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $xml .= '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;

        foreach ($sheets as $sheet) {
            $loc = $this->escape($this->siteUrl . '/' . $sheet);
            $lastmod = date('Y-m-d\TH:i:sP');
            $xml .= "  <sitemap>" . PHP_EOL;
            $xml .= "    <loc>{$loc}</loc>" . PHP_EOL;
            $xml .= "    <lastmod>{$lastmod}</lastmod>" . PHP_EOL;
            $xml .= "  </sitemap>" . PHP_EOL;
        }

        $xml .= '</sitemapindex>' . PHP_EOL;

        $this->logger->info("Generated sitemap index with " . count($sheets) . " sheets");

        return $xml;
    }

    private function escape(string $value): string
    {
        return htmlspecialchars($value, ENT_XML1 | ENT_QUOTES, 'UTF-8');
    }
}

// ─── Sitemap Generator (Orchestrator) ────────────────────────────────────────

class SitemapGenerator
{
    private Logger $logger;
    private DirectoryScanner $scanner;
    private SitemapSheet $sheet;
    private SitemapIndex $index;

    public function __construct()
    {
        $this->logger = new Logger(LOG_FILE);
        $this->scanner = new DirectoryScanner($this->logger);
        $this->sheet = new SitemapSheet($this->logger);
        $this->index = new SitemapIndex($this->logger);
    }

    /**
     * Run the full sitemap generation workflow.
     *
     * @return array{success: bool, message: string, stats: array}
     */
    public function run(): array
    {
        $startTime = microtime(true);
        $this->logger->info('=== Sitemap generation started ===');

        try {
            // Step 1: Scan directory for all index.html pages
            $allPages = $this->scanner->scan(SITE_ROOT);

            if (empty($allPages)) {
                $this->logger->warn('No pages found during scan');
                return [
                    'success' => false,
                    'message' => 'No pages found to generate sitemap',
                    'stats'   => [],
                ];
            }

            // Step 2: Categorize pages
            $categorized = $this->categorize($allPages);
            $sheetFiles = [];
            $stats = [];

            // Step 3: Generate each sheet
            foreach ($categorized as $category => $data) {
                $filename = $data['filename'];
                $pages = $data['pages'];
                $defaults = $data['defaults'] ?? [];

                if (empty($pages)) {
                    continue;
                }

                $xml = $this->sheet->generate($pages, $defaults);
                $filePath = OUTPUT_DIR . '/' . $filename;
                file_put_contents($filePath, $xml);
                $sheetFiles[] = $filename;

                $stats[$category] = count($pages);
                $this->logger->info("Wrote {$filename} (" . count($pages) . " URLs)");
            }

            // Step 4: Generate sitemap index
            if (!empty($sheetFiles)) {
                $indexXml = $this->index->generate($sheetFiles);
                $indexPath = OUTPUT_DIR . '/sitemap.xml';
                file_put_contents($indexPath, $indexXml);
                $this->logger->info("Wrote sitemap.xml (index)");
            }

            // Step 5: Update robots.txt
            $this->updateRobotsTxt($sheetFiles);

            // Step 6: Clean up old log file (keep under 1MB)
            $this->trimLog();

            $elapsed = round(microtime(true) - $startTime, 2);
            $total = count($allPages);
            $this->logger->info("=== Sitemap generation completed in {$elapsed}s — {$total} URLs ===");

            return [
                'success' => true,
                'message' => "Generated sitemaps for {$total} URLs in {$elapsed}s",
                'stats'   => $stats,
            ];
        } catch (Throwable $e) {
            $this->logger->error('Fatal: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => $e->getMessage(),
                'stats'   => [],
            ];
        }
    }

    /**
     * Categorize pages into sitemap sheets
     *
     * @return array<string, array{filename: string, pages: array, defaults?: array}>
     */
    private function categorize(array $pages): array
    {
        $categorized = [
            'pages' => [
                'filename' => 'sitemap-pages.xml',
                'pages'    => [],
                'defaults' => ['priority' => PRIORITY_DEFAULT, 'changefreq' => FREQ_DEFAULT],
            ],
            'products' => [
                'filename' => 'sitemap-products.xml',
                'pages'    => [],
                'defaults' => ['priority' => PRIORITY_PRODUCT, 'changefreq' => FREQ_PRODUCT],
            ],
            'gallery' => [
                'filename' => 'sitemap-gallery.xml',
                'pages'    => [],
                'defaults' => ['priority' => PRIORITY_DEFAULT, 'changefreq' => FREQ_DEFAULT],
            ],
        ];

        foreach ($pages as $page) {
            $url = $page['url'];

            if (strpos($url, '/products/') === 0) {
                $categorized['products']['pages'][] = $page;
            } elseif (strpos($url, '/gallery') === 0) {
                $categorized['gallery']['pages'][] = $page;
            } else {
                $categorized['pages']['pages'][] = $page;
            }
        }

        // Remove empty categories
        foreach ($categorized as $key => $data) {
            if (empty($data['pages'])) {
                unset($categorized[$key]);
            }
        }

        return $categorized;
    }

    /**
     * Update robots.txt with sitemap references
     */
    private function updateRobotsTxt(array $sheetFiles): void
    {
        $robotsPath = OUTPUT_DIR . '/robots.txt';

        // Read existing robots.txt
        $content = '';
        if (file_exists($robotsPath)) {
            $content = file_get_contents($robotsPath);
        }

        if ($content === false) {
            $this->logger->warn('Could not read robots.txt');
            return;
        }

        // Remove any existing Sitemap lines
        $lines = explode("\n", $content);
        $cleanLines = [];
        foreach ($lines as $line) {
            $trimmed = trim($line);
            if (preg_match('/^Sitemap:\s+/i', $trimmed)) {
                continue;
            }
            $cleanLines[] = $line;
        }

        // Append new Sitemap lines
        $cleanLines[] = '';
        $cleanLines[] = '# Generated by sitemap-generator.php on ' . date('Y-m-d H:i:s');

        // Main index
        $cleanLines[] = 'Sitemap: ' . SITE_URL . '/sitemap.xml';

        // Individual sheets (except the main index itself)
        foreach ($sheetFiles as $filename) {
            if ($filename !== 'sitemap.xml') {
                $cleanLines[] = 'Sitemap: ' . SITE_URL . '/' . $filename;
            }
        }

        $cleanLines[] = '';

        $newContent = implode("\n", $cleanLines);
        file_put_contents($robotsPath, $newContent);

        $this->logger->info('Updated robots.txt with ' . count($sheetFiles) . ' sitemap references');
    }

    /**
     * Trim log file to keep under ~1MB
     */
    private function trimLog(): void
    {
        if (!file_exists(LOG_FILE)) {
            return;
        }
        $size = filesize(LOG_FILE);
        if ($size > 1048576) {
            $lines = file(LOG_FILE, FILE_IGNORE_NEW_LINES);
            $lines = array_slice($lines, -(int)(count($lines) * 0.5));
            file_put_contents(LOG_FILE, implode("\n", $lines) . "\n");
            $this->logger->info('Trimmed log file to ' . count($lines) . ' lines');
        }
    }
}

// ─── Execution ───────────────────────────────────────────────────────────────

/**
 * Determine if running from CLI or web, and whether to generate or show status
 */
function main(): void
{
    $generator = new SitemapGenerator();

    $isCli = (php_sapi_name() === 'cli');
    $shouldGenerate = false;

    if ($isCli) {
        // CLI mode (cron): always generate
        $shouldGenerate = true;
    } else {
        // Web mode: check for ?generate parameter
        $shouldGenerate = isset($_GET['generate']);
    }

    if ($shouldGenerate) {
        $result = $generator->run();

        if ($isCli) {
            // CLI output — silent on success, noisy on failure
            if ($result['success']) {
                echo $result['message'] . PHP_EOL;
                if (!empty($result['stats'])) {
                    foreach ($result['stats'] as $sheet => $count) {
                        echo "  {$sheet}: {$count} URLs" . PHP_EOL;
                    }
                }
            } else {
                fprintf(STDERR, "ERROR: %s\n", $result['message']);
                exit(1);
            }
        } else {
            // Web output — JSON
            header('Content-Type: application/json');
            http_response_code($result['success'] ? 200 : 500);
            echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }
    } else {
        // Status mode: show current sitemap stats
        $stats = getSitemapStats();
        if ($isCli) {
            echo "Sitemap Status:" . PHP_EOL;
            foreach ($stats as $key => $value) {
                if (is_array($value)) {
                    echo "  {$key}:" . PHP_EOL;
                    foreach ($value as $k => $v) {
                        $vStr = is_array($v) ? json_encode($v) : $v;
                        echo "    {$k}: {$vStr}" . PHP_EOL;
                    }
                } else {
                    echo "  {$key}: {$value}" . PHP_EOL;
                }
            }
        } else {
            header('Content-Type: application/json');
            echo json_encode($stats, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }
    }
}

/**
 * Get current sitemap file status
 *
 * @return array<string, mixed>
 */
function getSitemapStats(): array
{
    $stats = [
        'site'       => SITE_URL,
        'status'     => 'ok',
        'generator'  => basename(__FILE__),
        'generated'  => null,
        'sitemaps'   => [],
    ];

    $files = ['sitemap.xml', 'sitemap-pages.xml', 'sitemap-products.xml', 'sitemap-gallery.xml'];
    foreach ($files as $file) {
        $path = OUTPUT_DIR . '/' . $file;
        if (file_exists($path)) {
            $stats['sitemaps'][$file] = [
                'exists'   => true,
                'size'     => filesize($path),
                'modified' => date('Y-m-d H:i:s', filemtime($path)),
            ];
        } else {
            $stats['sitemaps'][$file] = ['exists' => false];
        }
    }

    // Read last log line for generated timestamp
    if (file_exists(LOG_FILE)) {
        $lines = file(LOG_FILE, FILE_IGNORE_NEW_LINES);
        for ($i = count($lines) - 1; $i >= 0; $i--) {
            if (preg_match('/^\[(.+?)\]\s+\[INFO\]\s+===\s+Sitemap generation completed/', $lines[$i], $m)) {
                $stats['generated'] = $m[1];
                break;
            }
        }
    }

    return $stats;
}

main();

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "../dist");
const indexHtmlPath = path.join(distDir, "index.html");

const API_BASE_URL = "https://morisentreprises.com/api.php";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const categoryRouteMap = {
  "medical": {
    path: "/medical",
    title: "Medical Equipment | Professional Healthcare Solutions Kenya",
    description: "High-quality medical instruments and equipment from Moris Enterprises for healthcare facilities in Kenya.",
    keywords: "medical equipment, healthcare instruments, medical devices, Kenya supplier",
  },
  "microbiology": {
    path: "/microbiology",
    title: "Microbiology & Biotechnology Culture Media | Laboratory Agar & Broths Kenya",
    description: "Comprehensive microbiology supplies including 100+ culture media, agars, broths, and fermentation media. Wagtech microbiological testing kits.",
    keywords: "culture media, agar, microbiology supplies, laboratory media, fermentation media, Kenya",
  },
  "glassware": {
    path: "/glassware",
    title: "Laboratory Glassware | Borosilicate Glass Beakers & Equipment Kenya",
    description: "Premium borosilicate laboratory glassware including beakers, flasks, pipettes, and test tubes for reliable lab operations.",
    keywords: "laboratory glassware, borosilicate glass, beakers, flasks, pipettes, test tubes, Kenya",
  },
  "chemicals": {
    path: "/chemicals",
    title: "Laboratory Chemicals | Quality Reagents & Supplies Kenya Supplier",
    description: "Premium laboratory chemicals and reagents for research and testing. Professional-grade chemical supplies from Moris Enterprises.",
    keywords: "laboratory chemicals, reagents, chemical supplies, lab reagents Kenya",
  },
  "water": {
    path: "/water",
    title: "Water Testing Equipment & Palintest | Water Quality Analysis Kenya",
    description: "Official distributor of Palintest water analysis equipment, HACH instruments, and comprehensive water testing solutions.",
    keywords: "water testing, Palintest, HACH, water quality equipment, water analysis, photometer, Kenya",
  },
  "testing": {
    path: "/testing",
    title: "Material & Laboratory Testing Equipment | Quality Control Solutions Kenya",
    description: "Advanced laboratory and material testing equipment for beverage, packaging, and quality testing in Kenya.",
    keywords: "laboratory testing, material testing, quality control, testing equipment, QA/QC, Kenya",
  },
  "safety": {
    path: "/safety",
    title: "Personal Protection Equipment (PPE) | Safety Products Kenya",
    description: "ISO certified personal protection equipment and safety products for laboratories and industries.",
    keywords: "PPE, personal protective equipment, safety products, protective gear, ISO certified, Kenya",
  },
  "wastewater": {
    path: "/wastewater",
    title: "Wastewater & Pool Filtration Systems | Water Treatment Solutions Kenya",
    description: "Professional wastewater filtration, pool filtration, and water treatment systems for industrial and residential applications.",
    keywords: "wastewater filtration, pool filtration, water treatment, filtration systems, water quality, Kenya",
  },
  "palintest": {
    path: "/palintest",
    title: "Palintest Water Testing Equipment & Photometers | Official Distributor Kenya",
    description: "Official distributor of Palintest water testing equipment in Kenya. 300+ SKUs including Lumiso photometers, Kemio analyzers, 40+ tablet tests, COD tube tests, Wagtech microbiological kits, Delagua kits & more. Authorized Palintest UK partner with full technical support. Buy Palintest in Kenya with fast delivery.",
    keywords: "Palintest, Palintest Kenya, Palintest distributor, Palintest water testing, Palintest photometer, buy Palintest Kenya, Palintest price Kenya, Palintest distributor Nairobi, Lumiso, Kemio, Wagtech, Palintest tablet tests, Palintest tube tests, COD testing, Delagua, water testing equipment, water quality analysis, official Palintest distributor, Nairobi, Palintest reagents, DPD tablets, water analysis Kenya",
  },
  "labequipment": {
    path: "/labequipment",
    title: "Laboratory Equipment & Filtration Systems | Industrial Water Treatment Kenya",
    description: "Advanced laboratory equipment including water filtration systems, deionized water systems, UV sterilizers, and water quality meters.",
    keywords: "laboratory equipment, water filtration, deionized water, UV sterilizers, water quality, Kenya",
  },
  "automobile": {
    path: "/automobile",
    title: "KOMU Coils Springs & Suspension Components | Professional Auto Parts Kenya",
    description: "Premium KOMU Coils Springs and suspension components for automotive service centers. Professional-grade coil springs, shock absorbers, and suspension parts in Kenya.",
    keywords: "KOMU Coils Springs, KOMU Coils, suspension coils, coil springs Kenya, auto parts Kenya, shock absorbers, automobile supplies",
  },
  "chromatography": {
    path: "/chromatography",
    title: "Chromatography & Analytical Consumables | Vials, Filters, SPE Columns Kenya",
    description: "Premium chromatography consumables including vials, syringe filters, SPE columns, and sample preparation products for GC, LC, and analytical testing.",
    keywords: "chromatography consumables, vials, syringe filters, SPE column, autosampler vials, analytical supplies, Kenya",
  },
  "qualitycontrol": {
    path: "/qualitycontrol",
    title: "Equipment & Quality Control Instruments | Thermometers, pH Meters, Refractometers Kenya",
    description: "Professional quality control equipment including digital thermometers, water quality meters, pH meters, ORP meters, and refractometers.",
    keywords: "thermometer, pH meter, ORP meter, TDS meter, water quality equipment, quality control instruments, Kenya",
  },
  "hach": {
    path: "/hach",
    title: "HACH Water Testing Instruments & Spectrophotometers | Authorized Distributor Kenya",
    description: "Authorized distributor of HACH water analysis instruments in Kenya including DR3900 spectrophotometers, COD analyzers, pocket colorimeters, HQ series meters, and water quality testing reagents.",
    keywords: "HACH, HACH instruments, water testing, spectrophotometer, COD analyzer, water quality instruments, DR3900, DR6000, turbidity meter, Kenya",
  },
  "filtration": {
    path: "/filtration",
    title: "Filtration Products & Materials | Syringe Filters, Membranes, SPE Columns Kenya",
    description: "Complete filtration solutions including syringe filters, membrane filters, filter papers, vacuum filtration systems, and SPE columns.",
    keywords: "filtration, syringe filters, membrane filters, filter papers, vacuum filtration, SPE columns, Kenya",
  },
  "materialtesting": {
    path: "/materialtesting",
    title: "Laboratory Material Testing Equipment | Analysis Instruments Kenya",
    description: "Comprehensive laboratory and material testing equipment including autoclaves, microscopes, analyzers, and centrifuges.",
    keywords: "laboratory equipment, testing instruments, material testing, autoclave, microscope, centrifuge, Kenya",
  },
};

function loadPagesRegistry() {
  const registryPath = path.join(__dirname, "../src/data/pages-registry.json");
  try {
    if (fs.existsSync(registryPath)) {
      const registryData = fs.readFileSync(registryPath, "utf-8");
      return JSON.parse(registryData);
    }
  } catch (err) {
    console.warn(`[registry] Could not load pages-registry.json: ${err.message}`);
  }
  return null;
}

const staticRoutes = [
  {
    path: "/",
    title: "Moris Enterprises | Laboratory Chemicals & Medical Equipment Supplier in Kenya",
    description: "Leading supplier of laboratory chemicals, medical instruments, biotechnology equipment, and diagnostic tools in Kenya. Quality products since 2010. Free quotation via WhatsApp.",
    keywords: "laboratory chemicals, medical equipment, biotechnology, laboratory reagents, diagnostic tools, Kenya, supplier",
  },
  {
    path: "/gallery",
    title: "Gallery | Moris Enterprises",
    description: "View our laboratory and facilities at Moris Enterprises. Professional equipment setup and quality standards.",
    keywords: "laboratory gallery, equipment showcase, facility tour",
  },
];

async function fetchProductsFromAPI() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const response = await fetch(`${API_BASE_URL}/products`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data.products || [];
  } catch (err) {
    console.warn(`[api] Could not fetch products from API: ${err.message}. Using fallback data.`);
    return null;
  }
}

function buildRoutes(apiProducts) {
  const routes = [...staticRoutes];

  // Load and add registry pages (Wave 1, 2, 3)
  const registryPages = loadPagesRegistry();
  if (registryPages && registryPages.length > 0) {
    console.log(`[registry] Registering ${registryPages.length} pages from pages-registry.json`);
    for (const page of registryPages) {
      if (page.status !== "deleted") {
        routes.push({
          path: page.route,
          title: page.title,
          description: page.metaDescription,
          keywords: page.keywords.join(", "),
        });
      }
    }
  } else {
    console.log("[registry] No pages-registry.json found. Using legacy category routes.");
    // Fallback: Add legacy category routes
    for (const key of Object.keys(categoryRouteMap)) {
      routes.push(categoryRouteMap[key]);
    }
  }

  // Add product detail routes from API
  if (apiProducts && apiProducts.length > 0) {
    console.log(`[api] Generating prerender routes for ${apiProducts.length} API products`);
    for (const product of apiProducts) {
      const slug = slugify(product.name);
      const categoryKey = slugify(product.category || "uncategorized");
      const routePath = `/${slug}`;
      routes.push({
        path: routePath,
        title: `${product.name} | Professional Supplies Kenya`,
        description: product.description
          ? product.description.substring(0, 160)
          : `${product.name} - quality product available from Moris Enterprises. Contact us for pricing and availability.`,
        keywords: `${product.name}, ${product.category || "laboratory supplies"}, Moris Enterprises, Kenya supplier`,
      });
    }
  } else if (!registryPages) {
    // Fallback: hardcoded automobile products (only if no registry)
    const fallbackProducts = [
      { id: "komu-coils-blue", name: "KOMU Coils Springs - Blue", title: "KOMU Blue Suspension Coil Springs | Premium Auto Parts Kenya", description: "KOMU Blue suspension coil springs - premium-grade automotive suspension components. High tensile strength, corrosion-resistant finish.", keywords: "KOMU blue coils, KOMU blue springs, suspension coils, coil springs Kenya" },
      { id: "komu-coils-yellow", name: "KOMU Coils Springs - Yellow", title: "KOMU Yellow Heavy-Duty Suspension Springs | Commercial Vehicle Parts", description: "KOMU Yellow suspension springs - premium coil springs for enhanced vehicle suspension. Superior load-bearing capacity for commercial vehicles.", keywords: "KOMU yellow coils, KOMU yellow springs, heavy-duty suspension, KOMU automotive" },
      { id: "komu-coils-dark-blue", name: "KOMU Coils Springs - Dark Blue", title: "KOMU Dark Blue Heavy-Duty Coil Springs | Professional Auto Parts", description: "KOMU Dark Blue coil springs - heavy-duty suspension components for reliable vehicle performance.", keywords: "KOMU dark blue coils, KOMU dark blue springs, heavy-duty springs, automotive suspension Kenya" },
      { id: "komu-coils-orange-red", name: "KOMU Coils Springs - Orange/Red", title: "KOMU Orange-Red Heavy-Duty Suspension Springs | Truck Parts Kenya", description: "KOMU Orange-Red suspension coil springs - high-performance springs for heavy-duty automotive applications.", keywords: "KOMU orange red coils, KOMU red springs, truck suspension, heavy-duty automotive" },
      { id: "komu-coils-standard", name: "KOMU Coils Springs - Standard", title: "KOMU Standard Suspension Coil Springs | Reliable Auto Repair Parts", description: "KOMU Standard suspension coil springs - reliable automotive springs for routine vehicle maintenance.", keywords: "KOMU standard coils, KOMU standard springs, reliable suspension, auto repair springs Kenya" },
      { id: "komu-coils-premium", name: "KOMU Coils Springs - Premium Suspension", title: "KOMU Premium Suspension Coil Springs | Top-Tier Auto Parts Kenya", description: "KOMU Premium suspension springs - top-tier coil springs for complete vehicle suspension overhaul.", keywords: "KOMU premium coils, KOMU premium springs, premium suspension, high-performance springs Kenya" },
      { id: "automotive-shock-absorbers", name: "Automotive Shock Absorbers", title: "Professional Shock Absorbers | KOMU Suspension System Components Kenya", description: "Professional-grade shock absorbers designed for optimal vehicle suspension control. Compatible with KOMU suspension systems.", keywords: "shock absorbers, suspension shock absorbers, KOMU compatible, shock absorber Kenya" },
    ];
    for (const p of fallbackProducts) {
      routes.push({
        path: `/${p.id}`,
        title: p.title,
        description: p.description,
        keywords: p.keywords,
      });
    }
  }

  return routes;
}

function generateSitemap(routes) {
  const currentDate = new Date().toISOString().split("T")[0];
  const lines = [`<?xml version="1.0" encoding="UTF-8"?>`];
  lines.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

  for (const route of routes) {
    let changefreq = "monthly";
    let priority = "0.8";

    if (route.path === "/") {
      changefreq = "daily";
      priority = "1.0";
    } else if (route.path.startsWith("/products/")) {
      const parts = route.path.replace("/products/", "").split("/");
      if (parts.length === 1) {
        changefreq = "weekly";
        priority = "0.9";
      } else {
        changefreq = "monthly";
        priority = "0.8";
      }
    }

    // Ensure trailing slash for all URLs except root
    const locPath = route.path === "/" ? "/" : route.path.replace(/\/?$/, "/");

    lines.push(`  <url>`);
    lines.push(`    <loc>https://morisentreprises.com${locPath}</loc>`);
    lines.push(`    <lastmod>${currentDate}</lastmod>`);
    lines.push(`    <changefreq>${changefreq}</changefreq>`);
    lines.push(`    <priority>${priority}</priority>`);
    lines.push(`  </url>`);
  }

  lines.push(`</urlset>`);
  return lines.join("\n");
}

function updateMetaTags(html, metadata) {
  html = html.replace(/<title>(.*?)<\/title>/, `<title>${metadata.title}</title>`);
  html = html.replace(/(<meta name="description" content=")([^"]*)/, `$1${metadata.description}`);
  html = html.replace(/(<meta name="title" content=")([^"]*)/, `$1${metadata.title}`);
  html = html.replace(/(<meta name="keywords" content=")([^"]*)/, `$1${metadata.keywords}`);
  html = html.replace(/(<meta property="og:title" content=")([^"]*)/, `$1${metadata.title}`);
  html = html.replace(/(<meta property="og:description" content=")([^"]*)/, `$1${metadata.description}`);
  html = html.replace(/(<meta property="og:image" content=")([^"]*)/, `$1${metadata.image || "https://morisentreprises.com/src/assets/logo.png"}`);
  html = html.replace(/(<link rel="canonical" href=")([^"]*)/, `$1${metadata.canonical}`);
  html = html.replace(/(<meta property="og:url" content=")([^"]*)/, `$1${metadata.canonical}`);
  html = html.replace(/(<meta name="twitter:title" content=")([^"]*)/, `$1${metadata.title}`);
  html = html.replace(/(<meta name="twitter:description" content=")([^"]*)/, `$1${metadata.description}`);
  html = html.replace(/(<meta name="twitter:image" content=")([^"]*)/, `$1${metadata.image || "https://morisentreprises.com/src/assets/logo.png"}`);
  return html;
}

async function prerender() {
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`Error: ${indexHtmlPath} not found. Run 'npm run build' first.`);
    process.exit(1);
  }

  const apiProducts = await fetchProductsFromAPI();
  const routes = buildRoutes(apiProducts);
  const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  for (const route of routes) {
    try {
      let html = updateMetaTags(baseHtml, {
        title: route.title,
        description: route.description,
        keywords: route.keywords,
        image: route.image,
        canonical: `https://morisentreprises.com${route.path}`,
      });

      const routeDir = path.join(distDir, route.path);
      if (route.path !== "/") {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      const outputPath = route.path === "/" ? indexHtmlPath : path.join(routeDir, "index.html");
      fs.writeFileSync(outputPath, html);
      console.log(`Prerendered: ${route.path}`);
    } catch (error) {
      console.error(`Error prerendering ${route.path}: ${error.message}`);
    }
  }

  // Generate sitemap
  try {
    const sitemapContent = generateSitemap(routes);
    fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapContent);
    console.log(`Generated sitemap.xml with ${routes.length} URLs`);
  } catch (error) {
    console.error(`Error generating sitemap: ${error.message}`);
  }

  // -------------------------------------------------------
  // Post-build: copy self-contained api.php, clean up modular PHP files,
  // ensure uploads directory exists
  // -------------------------------------------------------
  try {
    const rootApiPhp = path.join(__dirname, "../api.php");
    const distApiPhp = path.join(distDir, "api.php");
    if (fs.existsSync(rootApiPhp)) {
      fs.copyFileSync(rootApiPhp, distApiPhp);
      console.log("[deploy] Copied api.php → dist/api.php");
    }

    // Remove modular PHP files left behind by public/ copy (no longer needed)
    const modularFiles = [
      "config.php", "Database.php", "AuthMiddleware.php", "Auth.php",
      "AuthHandler.php", "Campaign.php", "CampaignHandler.php",
      "Customer.php", "CustomerHandler.php", "EmailService.php",
      "Lead.php", "LeadHandler.php", "LeadScorer.php", "Logger.php",
      "ProductHandler.php", "TrackingHandler.php", "TrackingPixel.php",
      "setup-admin.php", ".env.example", "migrations.sql", "placeholder.svg",
    ];
    for (const file of modularFiles) {
      const fp = path.join(distDir, file);
      if (fs.existsSync(fp)) {
        fs.unlinkSync(fp);
      }
    }

    // Remove modular directories
    const modularDirs = ["api", "handlers", "models"];
    for (const dir of modularDirs) {
      const dp = path.join(distDir, dir);
      if (fs.existsSync(dp)) {
        fs.rmSync(dp, { recursive: true, force: true });
      }
    }

    // Ensure uploads subdirectories exist
    const uploadDirs = ["products", "campaigns", "documents"];
    for (const sub of uploadDirs) {
      const ud = path.join(distDir, "uploads", sub);
      if (!fs.existsSync(ud)) {
        fs.mkdirSync(ud, { recursive: true });
      }
    }

    // Copy sitemap-generator.php to dist
    const sitemapGen = path.join(__dirname, "../sitemap-generator.php");
    const distSitemapGen = path.join(distDir, "sitemap-generator.php");
    if (fs.existsSync(sitemapGen)) {
      fs.copyFileSync(sitemapGen, distSitemapGen);
      console.log("[deploy] Copied sitemap-generator.php → dist/sitemap-generator.php");
    }

    console.log("[deploy] Cleaned up modular PHP files, uploads ready.");
  } catch (error) {
    console.error(`[deploy] Warning: ${error.message}`);
  }

  console.log(`\nPrerendering complete! Generated ${routes.length} static pages.`);
}

const __root = path.resolve(__dirname, "..");

prerender().catch((error) => {
  console.error("Fatal error during prerendering:", error);
  process.exit(1);
});

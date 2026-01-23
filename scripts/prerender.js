import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "../dist");
const indexHtmlPath = path.join(distDir, "index.html");

// Routes to prerender with their metadata
const routesToPrerender = [
  {
    path: "/",
    title: "Moris Enterprises | Laboratory Chemicals & Medical Equipment Supplier in Kenya",
    description:
      "Leading supplier of laboratory chemicals, medical instruments, biotechnology equipment, and diagnostic tools in Kenya. Quality products since 2010. Free quotation via WhatsApp.",
    keywords:
      "laboratory chemicals, medical equipment, biotechnology, laboratory reagents, diagnostic tools, Kenya, supplier",
  },
  {
    path: "/products/automobile-supplies",
    title:
      "KOMU Coils Springs & Suspension Components | Professional Auto Parts Kenya",
    description:
      "Premium KOMU Coils Springs and suspension components for automotive service centers. Professional-grade coil springs, shock absorbers, and suspension parts in Kenya. Get competitive quotations for high-quality auto suspension components.",
    keywords:
      "KOMU Coils Springs, KOMU Coils, KOMU, suspension coils, suspension springs, coils, car coils, coil springs, KOMU suspension components, coil springs Kenya, auto parts Kenya, shock absorbers, vehicle suspension, automobile supplies",
  },
  {
    path: "/gallery",
    title: "Gallery | Moris Enterprises",
    description:
      "View our laboratory and facilities at Moris Enterprises. Professional equipment setup and quality standards.",
    keywords: "laboratory gallery, equipment showcase, facility tour",
  },
  {
    path: "/products/medical-equipment",
    title: "Medical Equipment | Professional Healthcare Solutions Kenya",
    description:
      "High-quality medical instruments and equipment from Moris Enterprises for healthcare facilities in Kenya.",
    keywords:
      "medical equipment, healthcare instruments, medical devices, Kenya supplier",
  },
  {
    path: "/products/laboratory-chemicals",
    title:
      "Laboratory Chemicals | Quality Reagents & Supplies Kenya Supplier",
    description:
      "Premium laboratory chemicals and reagents for research and testing. Professional-grade chemical supplies from Moris Enterprises.",
    keywords:
      "laboratory chemicals, reagents, chemical supplies, lab reagents Kenya",
  },
];

async function prerender() {
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`❌ Error: ${indexHtmlPath} not found. Run 'npm run build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  for (const route of routesToPrerender) {
    try {
      let html = baseHtml;

      // Update meta tags for this route
      html = updateMetaTags(html, {
        title: route.title,
        description: route.description,
        keywords: route.keywords,
        canonical: `https://morisenterprises.com${route.path}`,
      });

      // Create directory structure if needed
      const routeDir = path.join(distDir, route.path);
      if (route.path !== "/") {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      // Write the HTML file
      const outputPath =
        route.path === "/"
          ? indexHtmlPath
          : path.join(routeDir, "index.html");

      fs.writeFileSync(outputPath, html);
      console.log(`✅ Prerendered: ${route.path}`);
    } catch (error) {
      console.error(`❌ Error prerendering ${route.path}:`, error.message);
    }
  }

  console.log(`\n✨ Prerendering complete! Generated ${routesToPrerender.length} static pages.`);
}

function updateMetaTags(html, metadata) {
  // Update title tag
  html = html.replace(
    /<title>(.*?)<\/title>/,
    `<title>${metadata.title}</title>`
  );

  // Update description meta tag
  html = html.replace(
    /(<meta name="description" content=")([^"]*)/,
    `$1${metadata.description}`
  );

  // Update title meta tag
  html = html.replace(
    /(<meta name="title" content=")([^"]*)/,
    `$1${metadata.title}`
  );

  // Update keywords meta tag
  html = html.replace(
    /(<meta name="keywords" content=")([^"]*)/,
    `$1${metadata.keywords}`
  );

  // Update og:title
  html = html.replace(
    /(<meta property="og:title" content=")([^"]*)/,
    `$1${metadata.title}`
  );

  // Update og:description
  html = html.replace(
    /(<meta property="og:description" content=")([^"]*)/,
    `$1${metadata.description}`
  );

  // Update canonical
  html = html.replace(
    /(<link rel="canonical" href=")([^"]*)/,
    `$1${metadata.canonical}`
  );

  // Update og:url
  html = html.replace(
    /(<meta property="og:url" content=")([^"]*)/,
    `$1${metadata.canonical}`
  );

  // Update twitter tags
  html = html.replace(
    /(<meta name="twitter:title" content=")([^"]*)/,
    `$1${metadata.title}`
  );

  html = html.replace(
    /(<meta name="twitter:description" content=")([^"]*)/,
    `$1${metadata.description}`
  );

  return html;
}

prerender().catch((error) => {
  console.error("Fatal error during prerendering:", error);
  process.exit(1);
});

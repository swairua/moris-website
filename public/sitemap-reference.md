# Sitemap Reference Documentation

Generated: 2024
Build Process: `npm run build` (includes prerendering and sitemap generation)

## Sitemap Configuration

### Generation Script
- Location: `scripts/prerender.js`
- Output: `dist/sitemap.xml` (generated during build)
- Format: XML sitemap with priority and changefreq

### Route Priority Levels

#### Priority 1.0 (Highest)
- `/` - Homepage

#### Priority 0.9 (High - Featured Products)
- `/palintest` - Official Palintest distributor (FEATURED)

#### Priority 0.85 (Standard Category Pages)
- `/medical-equipment`
- `/microbiology-biotechnology`
- `/glassware`
- `/laboratory-chemicals`
- `/chromatography-consumables`
- `/equipment-quality-control`
- `/water-analysis`
- `/laboratory-testing`
- `/safety-products`
- `/waste-water-filtration`
- `/lab-equipment`
- `/filtration`
- `/laboratory-material-testing`
- `/automobile-supplies`

#### Priority 0.75 (Product Detail Pages)
- `/automobile-supplies/{productId}` (50 products included)

#### Priority 0.7 (Secondary Pages)
- `/gallery`

### Change Frequency Settings
- Homepage: `weekly` (most frequently updated content)
- Palintest: `weekly` (featured product)
- Product categories: `weekly`
- Detail pages: `monthly`
- Gallery: `monthly`

### Total URLs in Sitemap
- 1 homepage
- 16 product category pages
- 50+ automobile product detail pages
- 1 gallery page
- **Total: 68+ URLs**

## Included Product Categories

### Product Categories (16 Main Routes)
1. Medical Equipment
2. Microbiology & Biotechnology
3. Glassware
4. Laboratory Chemicals
5. Chromatography Consumables
6. Equipment & Quality Control
7. Water Analysis (includes Palintest)
8. Laboratory Testing
9. Safety Products
10. Waste Water Filtration
11. Palintest Kits (Featured)
12. Lab Equipment
13. Filtration
14. Laboratory Material Testing
15. Automobile Supplies
16. Gallery

### Dynamic Product Detail Pages
- Automobile Supplies: 7 categories with 50+ products
  - KOMU Coils Springs (6 variants)
  - Automotive Shock Absorbers
  - Related products and variants

## URL Structure

### Product Categories
Format: `/[category-name]`
Example: `/water-analysis`, `/palintest`, `/laboratory-chemicals`

### Product Details
Format: `/[category-name]/[product-id]`
Example: `/automobile-supplies/komu-coils-blue`

### Special Pages
- Homepage: `/`
- Gallery: `/gallery`

## Schema & Metadata

### All URLs Include
- Title meta tag (50-70 characters)
- Description meta tag (150-160 characters)
- Keywords meta tag
- Canonical URL
- Breadcrumb schema (JSON-LD)
- Open Graph tags (og:title, og:description, og:url, og:type)
- Twitter Card tags

### Featured Pages Have Enhanced Schema
- Palintest: AggregateOffer + BreadcrumbList + FAQ
- Water Analysis: AggregateOffer + BreadcrumbList + FAQ
- Homepage: LocalBusiness + Organization + ContactPoint + FAQPage

## Build & Deployment

### Generate Sitemap
```bash
npm run build
```

This command:
1. Builds the React application (Vite)
2. Runs prerender script (`scripts/prerender.js`)
3. Generates `dist/sitemap.xml` with all routes
4. Creates prerendered HTML files for each route

### Verify Sitemap
After build, check `dist/sitemap.xml`:
```bash
cat dist/sitemap.xml
```

## Robots.txt Configuration

Location: `public/robots.txt`

### Allowed Paths
- All product category routes (`/medical-equipment`, etc.)
- All product detail routes
- `/gallery`
- Legacy `/products/*` paths (redirects handled by client-side routing)

### Crawl Rules
- Googlebot: Crawl-delay 0, Request-rate 100/1h
- Bingbot: Crawl-delay 1, Request-rate 30/1h

### Sitemap Declaration
```
Sitemap: https://morisentreprises.com/sitemap.xml
```

## SEO Notes

### Canonical URLs
All pages have proper canonical tags pointing to their respective routes (e.g., `https://morisentreprises.com/palintest`)

### Mobile Friendliness
- Responsive meta viewport: `width=device-width, initial-scale=1.0`
- Mobile-optimized CSS using Tailwind
- Touch targets: 48px minimum

### Performance Optimization
- Images lazy-loaded with `OptimizedImage` component
- Preload critical assets (logo, hero images)
- DNS prefetch for Google Fonts

### Content Markup
- All pages use `usePageMeta` hook for dynamic meta tags
- JSON-LD schema for rich snippets
- BreadcrumbList on all category and detail pages
- FAQ schema on information-heavy pages

## Maintenance

### When Adding New Products
1. Add to `scripts/prerender.js` `routesToPrerender` array
2. Include metadata (title, description, keywords)
3. Run `npm run build` to regenerate sitemap
4. Verify new routes in generated `dist/sitemap.xml`

### When Changing Routes
1. Update route in `src/App.tsx`
2. Update redirect routes for backward compatibility
3. Update navigation links in `src/components/Navigation.tsx`
4. Update `scripts/prerender.js` with new routes
5. Update `public/robots.txt` if needed
6. Rebuild and verify sitemap

### Monitoring
- Monitor `dist/sitemap.xml` size (current: well under 50MB limit)
- Check Google Search Console for crawl errors
- Monitor Core Web Vitals
- Track keyword rankings (especially Palintest)

import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

interface Product {
  name: string;
  description: string;
  image?: string;
  specs?: string[];
  link?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SpecRow {
  feature: string;
  [key: string]: string;
}

interface BrandPageTemplateProps {
  brandName: string;
  tagline: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  logoUrl?: string;
  breadcrumbs: BreadcrumbItem[];
  productCategories: { [category: string]: Product[] };
  aboutSection: {
    title: string;
    content: string;
    whyChoose?: string[];
  };
  specs?: SpecRow[];
  relatedBrands?: Array<{ name: string; link: string }>;
  relatedLinks: Array<{ label: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  cta?: string;
}

export const BrandPageTemplate = ({
  brandName,
  tagline,
  description,
  metaDescription,
  keywords,
  h1,
  logoUrl,
  breadcrumbs,
  productCategories,
  aboutSection,
  specs,
  relatedBrands,
  relatedLinks,
  faqs,
  cta = "Request a Quote",
}: BrandPageTemplateProps) => {
  // Use page meta hook for SEO
  usePageMeta({
    title: h1,
    description: metaDescription,
    keywords: keywords.join(", "),
    type: "product",
    canonical: `https://morisentreprises.com${breadcrumbs[breadcrumbs.length - 1]?.url || "/"}`,
    breadcrumbs,
    faqs,
    image: logoUrl,
  });

  const renderProductGrid = (categoryProducts: Product[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categoryProducts.map((product, index) => (
        <Card
          key={index}
          className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
          )}
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground flex-1">
            {product.description}
          </p>
          {product.specs && product.specs.length > 0 && (
            <ul className="text-xs text-muted-foreground mt-2 mb-3">
              {product.specs.slice(0, 2).map((spec, i) => (
                <li key={i}>• {spec}</li>
              ))}
            </ul>
          )}
          <Button
            onClick={() => openProductQuotation(product.name)}
            className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Quote via WhatsApp
          </Button>
        </Card>
      ))}
    </div>
  );

  return (
    <ProductPageLayout title={h1} description={description} faqs={faqs}>
      {/* Brand Logo & Tagline */}
      {logoUrl && (
        <div className="text-center mb-12">
          <img
            src={logoUrl}
            alt={brandName}
            className="h-20 mx-auto mb-4 object-contain"
          />
          <p className="text-xl text-muted-foreground font-medium">{tagline}</p>
        </div>
      )}

      {/* About Section */}
      <div className="prose prose-lg max-w-none mb-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          {aboutSection.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {aboutSection.content}
        </p>

        {aboutSection.whyChoose && aboutSection.whyChoose.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Why Choose {brandName}?
            </h3>
            <ul className="space-y-3">
              {aboutSection.whyChoose.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Product Categories */}
      <div className="space-y-12 mb-16">
        <h2 className="text-3xl font-display font-bold text-foreground">
          {brandName} Products
        </h2>
        {Object.entries(productCategories).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-bold text-foreground mb-6">{category}</h3>
            {renderProductGrid(items)}
          </div>
        ))}
      </div>

      {/* Specifications Comparison Table */}
      {specs && specs.length > 0 && (
        <div className="mb-16 overflow-x-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Product Specifications
          </h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary/10 border-b-2 border-primary/20">
                {Object.keys(specs[0]).map((header) => (
                  <th
                    key={header}
                    className="p-3 text-left font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-secondary/30 hover:bg-secondary/10 transition-colors"
                >
                  {Object.values(row).map((cell: any, i) => (
                    <td key={i} className="p-3 text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Related Brands */}
      {relatedBrands && relatedBrands.length > 0 && (
        <div className="mb-16 p-6 bg-secondary/20 rounded-xl border border-secondary/30">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Related Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedBrands.map((brand, index) => (
              <a
                key={index}
                href={brand.link}
                className="p-4 bg-background rounded-lg border border-secondary/30 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <p className="text-foreground font-medium hover:text-primary">
                  {brand.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Related Links Section */}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Related Products & Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </ProductPageLayout>
  );
};

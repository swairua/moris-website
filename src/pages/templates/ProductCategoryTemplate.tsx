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

interface PageSection {
  type: "description" | "applications" | "brands" | "benefits" | "comparison";
  title: string;
  content?: string;
  items?: Array<{ name: string; link?: string } | { q: string; a: string }>;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ProductCategoryTemplateProps {
  title: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  breadcrumbs: BreadcrumbItem[];
  productCategories?: { [category: string]: Product[] };
  products?: Product[];
  sections: PageSection[];
  relatedLinks: Array<{ label: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  cta?: string;
}

export const ProductCategoryTemplate = ({
  title,
  description,
  metaDescription,
  keywords,
  h1,
  breadcrumbs,
  productCategories,
  products,
  sections,
  relatedLinks,
  faqs,
  cta = "Request a Quote",
}: ProductCategoryTemplateProps) => {
  // Use page meta hook for SEO
  usePageMeta({
    title,
    description: metaDescription,
    keywords: keywords.join(", "),
    type: "product",
    canonical: `https://morisentreprises.com${breadcrumbs[breadcrumbs.length - 1]?.url || "/"}`,
    breadcrumbs,
    faqs,
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
      {/* Product Categories or Flat List */}
      {productCategories ? (
        <div className="space-y-12">
          {Object.entries(productCategories).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                {category}
              </h2>
              {renderProductGrid(items)}
            </div>
          ))}
        </div>
      ) : products ? (
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Available Products
          </h2>
          {renderProductGrid(products)}
        </div>
      ) : null}

      {/* Content Sections */}
      <div className="mt-16 space-y-12">
        {sections.map((section, index) => (
          <div key={index}>
            {section.type === "description" && (
              <div className="prose prose-lg max-w-none">
                {section.title && (
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                )}
                {section.content && (
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            )}

            {section.type === "applications" && (
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items &&
                    section.items.map((item: any, i) => (
                      <div
                        key={i}
                        className="p-4 bg-secondary/20 rounded-lg border border-secondary/30"
                      >
                        <p className="text-foreground font-medium">{item.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {section.type === "brands" && (
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items &&
                    section.items.map((item: any, i) => (
                      <div
                        key={i}
                        className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:shadow-md transition-all"
                      >
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-primary font-medium hover:underline"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.name}</p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {section.type === "benefits" && (
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items &&
                    section.items.map((item: any, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Related Links Section */}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="mt-16 p-6 bg-secondary/20 rounded-xl border border-secondary/30">
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

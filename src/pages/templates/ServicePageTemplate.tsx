import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Phone, CheckCircle } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServicePageTemplateProps {
  serviceName: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  breadcrumbs: BreadcrumbItem[];
  overview: {
    title: string;
    content: string;
  };
  benefits?: string[];
  process?: ProcessStep[];
  applicableTo?: string[];
  relatedServices: Array<{ name: string; link: string }>;
  relatedProducts: Array<{ name: string; link: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  cta?: string;
}

export const ServicePageTemplate = ({
  serviceName,
  description,
  metaDescription,
  keywords,
  h1,
  breadcrumbs,
  overview,
  benefits,
  process,
  applicableTo,
  relatedServices,
  relatedProducts,
  faqs,
  cta = "Schedule a Consultation",
}: ServicePageTemplateProps) => {
  // Use page meta hook for SEO
  usePageMeta({
    title: h1,
    description: metaDescription,
    keywords: keywords.join(", "),
    type: "product",
    canonical: `https://morisentreprises.com${breadcrumbs[breadcrumbs.length - 1]?.url || "/"}`,
    breadcrumbs,
    faqs,
  });

  const scrollToContact = () => {
    window.location.href = "/?contact=true";
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <ProductPageLayout title={h1} description={description} faqs={faqs}>
      {/* Overview Section */}
      <div className="prose prose-lg max-w-none mb-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          {overview.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {overview.content}
        </p>
      </div>

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Process Steps */}
      {process && process.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Applicable To Section */}
      {applicableTo && applicableTo.length > 0 && (
        <div className="mb-16 p-8 bg-secondary/20 rounded-xl border border-secondary/30">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Suitable For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applicableTo.map((sector, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg border border-secondary/30"
              >
                <p className="text-foreground font-medium">• {sector}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="p-4 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <p className="text-foreground font-medium hover:text-primary">
                  {service.name} →
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedProducts.map((product, index) => (
              <a
                key={index}
                href={product.link}
                className="p-4 bg-secondary/20 rounded-lg border border-secondary/30 hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <p className="text-foreground font-medium hover:text-primary">
                  {product.name} →
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Contact our team to discuss your needs and learn how we can help with{" "}
          {serviceName.toLowerCase()}.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          <Phone className="mr-2 h-5 w-5" />
          {cta}
        </Button>
      </div>
    </ProductPageLayout>
  );
};

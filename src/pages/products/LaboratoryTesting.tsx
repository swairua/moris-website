import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Beverage Testing Equipment",
  "Packaging Testing Equipment",
  "Quality Testing Equipment",
  "Material Strength Testers",
  "Texture Analyzers",
  "Viscosity Meters",
  "Compression Testing Machines",
  "Tensile Testing Equipment",
];

const LaboratoryTesting = () => {
  return (
    <ProductPageLayout
      title="Laboratory and Material Testing"
      description="Professional testing equipment for beverage, packaging, and quality testing. Comprehensive solutions for material analysis and quality control across industries."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              {product}
            </h3>
            <p className="text-muted-foreground">
              Advanced testing equipment for accurate material and quality analysis.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Material Testing Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Our range of laboratory and material testing equipment includes specialized tools for beverage, 
          packaging, and quality testing. We provide comprehensive solutions for material analysis, 
          strength testing, and quality control to ensure your products meet industry standards and 
          regulatory requirements.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default LaboratoryTesting;

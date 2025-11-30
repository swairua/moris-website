import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "Beverage Testing Equipment",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F54700a0afce24d8da089947a629fd4e5?format=webp&width=800",
  },
  {
    name: "Packaging Testing Equipment",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F390636224eb3470ebf882a5542bf5887?format=webp&width=800",
  },
  {
    name: "Quality Testing Equipment",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F08c9c9f6ecce4a3e8247c69ce66443f7?format=webp&width=800",
  },
  {
    name: "Material Strength Testers",
  },
  {
    name: "Texture Analyzers",
  },
  {
    name: "Viscosity Meters",
  },
  {
    name: "Compression Testing Machines",
  },
  {
    name: "Tensile Testing Equipment",
  },
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

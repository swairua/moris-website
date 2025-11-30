import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Borosilicate Glass Beakers",
  "Volumetric Flasks",
  "Burettes and Pipettes",
  "Test Tubes and Culture Tubes",
  "Measuring Cylinders",
  "Conical Flasks",
  "Petri Dishes",
  "Watch Glasses",
  "Funnels and Separating Funnels",
  "Laboratory Bottles",
];

const Glassware = () => {
  return (
    <ProductPageLayout
      title="Glassware"
      description="Premium laboratory glassware made from high-quality borosilicate glass with low coefficient of expansion for resistance to heat and exceptional resistance to chemical attack."
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
              Precision-crafted borosilicate glass for reliable laboratory operations.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Premium Laboratory Glassware
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Our laboratory glassware products are an important part of scientific laboratories wherever 
          the highest quality is required. Made from premium borosilicate glass with a low coefficient 
          of expansion, our glassware offers superior resistance to heat and exceptional resistance to 
          chemical attack, ensuring long-lasting performance in demanding laboratory environments.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default Glassware;

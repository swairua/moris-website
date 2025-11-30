import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Palintest Photometers",
  "Pool and Spa Test Kits",
  "Water Quality Test Tablets",
  "Digital Pool Testers",
  "Chlorine Test Kits",
  "pH Test Equipment",
  "Combined Parameter Test Kits",
  "Reagent Refills and Accessories",
];

const PalintestKits = () => {
  return (
    <ProductPageLayout
      title="Palintest Kits"
      description="Authorized distributor of Palintest water testing products. Comprehensive range of photometers, test kits, and reagents for accurate water analysis in various applications."
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
              Trusted Palintest solutions for reliable water quality testing.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Palintest Water Testing Excellence
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          As an authorized distributor of Palintest products, we offer a complete range of water testing 
          solutions known for their accuracy and reliability. Palintest's innovative photometers and 
          test kits are trusted worldwide for pool, spa, drinking water, and environmental water testing, 
          providing fast and accurate results for critical water quality parameters.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default PalintestKits;

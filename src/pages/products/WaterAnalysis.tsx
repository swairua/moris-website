import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Water Testing Kits",
  "Water Testing Kit Reagents",
  "Water Waste and Boiler Reagents",
  "Milwaukee Equipment",
  "Lovibond Tintometer",
  "Delagua Water Testing Kits",
  "Hach Equipment",
  "Palintest Products",
  "Hanna Equipment",
  "pH Meters and Controllers",
  "Dissolved Oxygen Meters",
  "Conductivity Meters",
];

const WaterAnalysis = () => {
  return (
    <ProductPageLayout
      title="Water Analysis Instruments and Water Treatment"
      description="Master distributor of leading water testing equipment brands including Milwaukee, Lovibond, Delagua, Hach, Palintest, and Hanna. Complete solutions for water quality analysis and treatment."
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
              Professional water analysis instruments and treatment solutions.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Comprehensive Water Analysis Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We supply water testing kits, water testing kit reagents, water waste and boiler reagents. 
          As a Master Distributor of Milwaukee Equipment, Lovibond Tintometer, Delagua water Testing kits, 
          Hach, Palintest, and Hanna Equipment, we provide comprehensive solutions for all types of water 
          analysis and treatment requirements across various industries.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default WaterAnalysis;

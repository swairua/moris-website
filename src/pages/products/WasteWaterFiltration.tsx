import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Waste Water Testing Equipment",
  "Pool Water Testing Kits",
  "Spa Water Analysis Systems",
  "Filtration Equipment",
  "Water Treatment Chemicals",
  "pH and Chlorine Testers",
  "Turbidity Meters",
  "Multi-parameter Water Testers",
];

const WasteWaterFiltration = () => {
  return (
    <ProductPageLayout
      title="Waste Water, Pool and Spa Filtration"
      description="Comprehensive water testing equipment and reagents offering analysis solutions for all types of water systems and industries including waste water, pools, and spas."
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
              Professional water testing and treatment solutions for various applications.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Complete Water Management Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We are suppliers of water testing equipment and reagents offering analysis solutions for 
          all types of water systems and industries. Our comprehensive range includes products for 
          waste water management, pool maintenance, and spa water quality control, ensuring safe and 
          clean water in all applications.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default WasteWaterFiltration;

import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Atomic Absorption Spectrophotometer",
  "Flame Photometer",
  "UV-Vis Spectrophotometer",
  "Photo Colorimeter",
  "Melting Point Apparatus",
  "Water and Soil Analysis Kit",
  "Laboratory Balances",
  "Laboratory Centrifuges",
  "Homogenizers",
  "Laboratory Furnaces",
  "Laboratory Incubators",
  "Autoclaves",
];

const LabEquipment = () => {
  return (
    <ProductPageLayout
      title="Lab Equipment"
      description="Wide range of sophisticated laboratory equipment including spectrophotometers, balances, centrifuges, and analytical instruments for comprehensive laboratory operations."
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
              Professional-grade laboratory equipment for precise scientific analysis.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Advanced Laboratory Equipment
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Our product range includes a wide variety of laboratory equipment including atomic absorption 
          spectrophotometer, flame photometer, UV-Vis spectrophotometer, photo colorimeter, melting point 
          apparatus, and water and soil analysis kits. We also supply essential laboratory equipment such 
          as autoclaves, laboratory balances, centrifuges, homogenizers, furnaces, and incubators to support 
          comprehensive laboratory operations.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default LabEquipment;

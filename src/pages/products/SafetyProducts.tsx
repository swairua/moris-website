import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Laboratory Coats and Aprons",
  "Safety Goggles and Face Shields",
  "Gloves (Nitrile, Latex, and Chemical Resistant)",
  "Respirators and Face Masks",
  "Safety Shoes and Boots",
  "Ear Protection",
  "Head Protection - Hard Hats",
  "First Aid Kits",
  "Safety Signage",
  "Spill Control Products",
];

const SafetyProducts = () => {
  return (
    <ProductPageLayout
      title="Safety Products"
      description="Complete range of personal protective equipment (PPE) under one roof. ISO certified products manufactured using innovative designs with the latest technology to ensure workplace safety."
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
              ISO certified safety equipment for comprehensive workplace protection.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Comprehensive Safety Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We believe in providing personnel protective equipment under one roof. Our products are 
          certified and manufactured by ISO certified factories using innovative designs with the 
          latest technology. We offer a complete range of Personal Protective Equipment to ensure 
          the safety of your workforce in laboratory and industrial environments.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default SafetyProducts;

import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Pipette Tips",
  "Hematology Analyzer (5 Parts)",
  "Nucleic Acid Extractor",
  "Microwave Digestion System",
  "BOD Refrigerated Incubator (ICB-E Series)",
  "Nucleic Acid Extractor (Automatic, NAE-0132)",
  "Medical Diagnostic Equipment",
  "Laboratory Diagnostic Tools",
  "Clinical Analysis Systems",
];

const MedicalEquipment = () => {
  return (
    <ProductPageLayout
      title="Medical Equipment"
      description="Our comprehensive range of medical equipment includes cutting-edge diagnostic tools and laboratory instruments designed for accuracy and reliability in healthcare settings."
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
              Professional-grade medical equipment for accurate diagnostics and analysis.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Quality Medical Equipment
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We provide a comprehensive selection of medical equipment designed to meet the demanding needs 
          of modern healthcare facilities. Our products combine precision, reliability, and ease of use 
          to support accurate diagnostics and efficient laboratory workflows.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default MedicalEquipment;

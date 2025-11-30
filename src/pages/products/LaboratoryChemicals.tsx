import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Biochemicals",
  "Fine Chemicals",
  "Enzyme Substrates",
  "Antibiotics",
  "Buffers",
  "Stains and Indicators",
  "Bio Chemicals",
  "Ion Pair Reagents",
  "Speciality Chemicals",
  "Standard Solutions",
  "Acids HPLC/AR Grade",
  "Laboratory Testing Kits",
];

const LaboratoryChemicals = () => {
  return (
    <ProductPageLayout
      title="Laboratory Chemicals and Reagents"
      description="Comprehensive range of high-purity laboratory chemicals and reagents including biochemicals, fine chemicals, enzyme substrates, and analytical-grade acids for research and industrial applications."
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
              High-purity chemicals and reagents for accurate laboratory analysis.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Quality Laboratory Chemicals
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We supply a comprehensive range of biochemicals, fine chemicals, enzyme substrates, antibiotics, 
          buffers, stains-indicators, bio chemicals, ion pair reagents, speciality chemicals, standard 
          solutions, and acids in HPLC/AR grades. Our products meet the highest quality standards and 
          are suitable for research, quality control, and industrial applications.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default LaboratoryChemicals;

import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  "Prepared Media - Ready Prepared Plates",
  "Dehydrated Culture Media",
  "Biological Media Bases",
  "Media Supplements",
  "Sterile Dehydrated Culture Media",
  "Biotechnology & Fermentation Products",
  "Microbiological Testing Kits",
  "Cell Culture Consumables",
];

const MicrobiologyBiotechnology = () => {
  return (
    <ProductPageLayout
      title="Microbiology and Biotechnology"
      description="Complete range of microbiological and biotechnology products including prepared media, culture media, and fermentation supplies for research and industrial applications."
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
              High-quality products for microbiological research and biotechnology applications.
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Advanced Microbiology Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Our microbiology and biotechnology products are designed to support cutting-edge research 
          and industrial applications. We provide sterile, high-quality media and consumables that 
          meet international standards for microbiological testing and fermentation processes.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default MicrobiologyBiotechnology;

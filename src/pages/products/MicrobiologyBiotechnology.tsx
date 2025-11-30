import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "Prepared Media - Ready Prepared Plates",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fc839e507c1e8418c98acca577d0b51c4?format=webp&width=800",
  },
  {
    name: "Dehydrated Culture Media",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F9b2a2b4dae7e432d93b58eea5dbcb71f?format=webp&width=800",
  },
  {
    name: "Biological Media Bases",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fa199b5022322425f97f470a748c2093c?format=webp&width=800",
  },
  {
    name: "Media Supplements",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F2d8d32b4bbfd48919bba9543e3f60ad3?format=webp&width=800",
  },
  {
    name: "Sterile Dehydrated Culture Media",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F830aa4526716406ba629c834e4a1bd9f?format=webp&width=800",
  },
  {
    name: "Biotechnology & Fermentation Products",
  },
  {
    name: "Microbiological Testing Kits",
  },
  {
    name: "Cell Culture Consumables",
  },
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

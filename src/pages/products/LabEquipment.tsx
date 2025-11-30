import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";

const products = [
  {
    name: "Hydraulic Testing Equipment",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fb497f80a0afe4ec396063b5fa03d3b87?format=webp&width=800",
  },
  {
    name: "Industrial Motor Components",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F3d0d08c9b0d14f32bc16dee8955a88d9?format=webp&width=800",
  },
  {
    name: "Mechanical Testing Station",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fcd82b34f7afa4b95af8af8a026ccfbe1?format=webp&width=800",
  },
  {
    name: "Fluid Systems Training Kit",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Ff8cbabb6e8414dbb94a1755955798060?format=webp&width=800",
  },
  {
    name: "Precision Laboratory Setup",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F93e4949a810d4862a35ee41d94366e98?format=webp&width=800",
  },
  {
    name: "Industrial Machine Systems",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F9f8ceb98d8a54b1db7d56cbd81d46e44?format=webp&width=800",
  },
  {
    name: "Pneumatic Systems Trainer",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F0d3cbf08c0e942c6bc33ac05cbea6a60?format=webp&width=800",
  },
  {
    name: "Hydraulic Fluid Systems",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fa30999669320416d8073b1c9fc27e62a?format=webp&width=800",
  },
  {
    name: "Mechanical Precision Balance",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fc0370d7300404e53a9f37cdc71ec7593?format=webp&width=800",
  },
  {
    name: "Industrial Testing Apparatus",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F7cfebb89d2ab4bb38760a06c034e1123?format=webp&width=800",
  },
  {
    name: "CNC Precision Machine",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fe3f563f415e94998a0e955847bf7156f?format=webp&width=800",
  },
  {
    name: "Hydraulic Power Systems",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fc19c6bb1bf2b4a848f30d2021edd4e29?format=webp&width=800",
  },
  {
    name: "Robotic Training System",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fb3a142c0b1454af7b45fb1c88be99701?format=webp&width=800",
  },
  {
    name: "Fluid Pump Testing Kit",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F894e941cb15e48c6a0ce9cd8c829f1f4?format=webp&width=800",
  },
  {
    name: "Material Testing System",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F6a018df4749d44689e83ebfa225a9300?format=webp&width=800",
  },
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
            className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              product.image ? "overflow-hidden" : "p-6"
            }`}
          >
            {product.image && (
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className={product.image ? "p-6" : ""}>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground">
                Professional-grade laboratory equipment for precise scientific analysis.
              </p>
            </div>
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

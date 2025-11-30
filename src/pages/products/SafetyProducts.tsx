import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const products = [
  {
    name: "Complete PPE Kit",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fddb43e85526a43be99203887e2c4499b?format=webp&width=800",
  },
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

const openWhatsApp = (productName: string) => {
  const phoneNumber = "254733137332";
  const message = encodeURIComponent(
    `Hello! I'm interested in getting a quotation for: ${productName}. Please provide details and pricing.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const SafetyProducts = () => {
  return (
    <ProductPageLayout
      title="Safety Products"
      description="Complete range of personal protective equipment (PPE) under one roof. ISO certified products manufactured using innovative designs with the latest technology to ensure workplace safety."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const productName = typeof product === "string" ? product : product.name;
          const productImage = typeof product === "object" ? product.image : undefined;

          return (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                productImage ? "overflow-hidden" : "p-6"
              }`}
            >
              {productImage && (
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={productImage ? "p-6 flex flex-col h-full" : "p-6 flex flex-col h-full"}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {productName}
                </h3>
                <p className="text-muted-foreground flex-1">
                  ISO certified safety equipment for comprehensive workplace protection.
                </p>
                <Button
                  onClick={() => openWhatsApp(productName)}
                  className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Request Quotation via WhatsApp
                </Button>
              </div>
            </Card>
          );
        })}
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

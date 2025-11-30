import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const products = [
  {
    name: "Kemio Analyzer",
    description: "Advanced water disinfection analyzer for rapid testing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2Fe9262b3c0b304adda46e7cba438946aa?format=webp&width=800"
  },
  {
    name: "Palintest Photometer 7500",
    description: "Professional photometer for multi-parameter water analysis",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F028cb3ebfdf7495d9fbe3661838c78ac?format=webp&width=800"
  },
  {
    name: "pH and Water Quality Probe",
    description: "Handheld probe meter for accurate pH and temperature measurement",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F5af16a6886c2451facd55788fcf1ca30?format=webp&width=800"
  },
  {
    name: "Conductivity Meter",
    description: "Portable meter for measuring water conductivity and salinity",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F09f3766d8c6d4c8aae0a964edbc49056?format=webp&width=800"
  },
  {
    name: "Portable Water Testing Meter",
    description: "Handheld meter for on-site water quality testing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F560a42f0d4d84eb5b1885f44408fd557?format=webp&width=800"
  },
  {
    name: "Digital pH Meter",
    description: "Precision pH measurement instrument with digital display",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F39226670924b4c558769b05e4b6fca83?format=webp&width=800"
  },
  {
    name: "Water Testing Kit Reagents",
    description: "Complete set of reagents for comprehensive water testing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F38b6d050ded6479297134ee9e75bcf43?format=webp&width=800"
  },
  {
    name: "Milwaukee Equipment",
    description: "Professional water analysis equipment by Milwaukee",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F456bfa1942604bb4a5f9700472082050?format=webp&width=800"
  },
  {
    name: "Lovibond Tintometer",
    description: "Lovibond color comparison system for water testing",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F624752a65683445d8205bb42c5dc9cc0?format=webp&width=800"
  },
  {
    name: "Delagua Water Testing Kits",
    description: "Delagua comprehensive water quality testing kits",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2Fdd86e04e4c6449558cd19a9b2a61b50a?format=webp&width=800"
  },
  {
    name: "Hach Equipment",
    description: "Hach water testing and analytical instruments",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2Fa10e70dcb9ca44e3ace4a17d746de985?format=webp&width=800"
  },
  {
    name: "Palintest Products",
    description: "Palintest full range of water testing solutions",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2Fae4068e7774b4554bf1362d4c5f4efe8?format=webp&width=800"
  },
  {
    name: "Hanna Equipment",
    description: "Hanna high-precision water quality instruments",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F608e0cf7ff65415ebc5a48d1714fef41?format=webp&width=800"
  },
  {
    name: "Dissolved Oxygen Meters",
    description: "Professional DO meter for dissolved oxygen measurement",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2Ff050915400c4405994e7c461d8a26949?format=webp&width=800"
  },
  {
    name: "Water Waste and Boiler Reagents",
    description: "Specialized reagents for waste water and boiler treatment",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0fd8d9ea35ed431fafa410b8025ca861%2F6daf7faceb05464fb8bee3ac571ae57d?format=webp&width=800"
  },
];

const openWhatsApp = (productName: string) => {
  const phoneNumber = "254733137332";
  const message = encodeURIComponent(
    `Hello! I'm interested in getting a quotation for: ${productName}. Please provide details and pricing.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

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
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
          >
            {product.image && (
              <div className="w-full h-48 bg-muted overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground flex-1">
                {product.description || "Professional water analysis instruments and treatment solutions."}
              </p>
              <Button
                onClick={() => openWhatsApp(product.name)}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Quotation via WhatsApp
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 prose prose-lg max-w-none bg-secondary/50 p-8 rounded-lg">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Comprehensive Water Analysis Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We supply water testing kits, water testing kit reagents, water waste and boiler reagents. 
          As a Master Distributor of Milwaukee Equipment, Lovibond Tintometer, Delagua water Testing kits, 
          Hach, Palintest, and Hanna Equipment, we provide comprehensive solutions for all types of water 
          analysis and treatment requirements across various industries.
        </p>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Water Analysis Services:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>pH and acidity measurement</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Dissolved oxygen analysis</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Conductivity and salinity testing</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Multi-parameter water analysis</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Boiler and waste water treatment</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3">✓</span>
            <span>Color and turbidity assessment</span>
          </li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default WaterAnalysis;

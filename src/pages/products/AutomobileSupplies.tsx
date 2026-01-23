import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const products = [
  {
    name: "KOMU Coils Springs - Blue",
    description: "High-quality suspension coils springs in blue finish. Professional-grade automobile suspension components for reliable vehicle performance.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2F8564aa54272b435f8016c3550366fdc1?format=webp&width=800",
  },
  {
    name: "KOMU Coils Springs - Yellow",
    description: "Premium suspension coil springs in vibrant yellow finish. Engineered for optimal vehicle suspension and stability.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2Fcc3a9f9a91fc4250a63e8a11a65028bd?format=webp&width=800",
  },
  {
    name: "KOMU Coils Springs - Dark Blue",
    description: "Durable dark blue coils springs designed for superior suspension performance. Ideal for automotive service centers and repairs.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2F278e671287c74a3db3a9a7e0e1513949?format=webp&width=800",
  },
  {
    name: "KOMU Coils Springs - Orange/Red",
    description: "High-performance suspension coil springs in orange-red finish. Built for heavy-duty automotive applications.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2Fa138c58dc0d44e1c80507118fe1a6ae8?format=webp&width=800",
  },
  {
    name: "KOMU Coils Springs - Standard",
    description: "Standard suspension coils springs for everyday automotive maintenance and repair. Reliable and durable performance.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2Ff89232996c3b4494b45abcf5e8d2d4b4?format=webp&width=800",
  },
  {
    name: "KOMU Coils Springs - Premium Suspension",
    description: "Premium grade suspension components for complete vehicle suspension overhaul. Maximum durability and performance.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2F26872f98e1bc469c95cbe083f66457f9?format=webp&width=800",
  },
  {
    name: "Automotive Shock Absorbers",
    description: "Professional-grade shock absorbers designed for optimal vehicle suspension control and stability.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F03ba6d13283e4f6e88691a5c602fc9e3%2Ffad79b65501a4b4b95e1a64b6e08a0e5?format=webp&width=800",
  },
];


const AutomobileSupplies = () => {
  usePageMeta({
    title: "KOMU Coils Springs & Suspension Components | Professional Auto Parts Kenya",
    description: "Premium KOMU Coils Springs and suspension components for automotive service centers. Professional-grade coil springs, shock absorbers, and suspension parts in Kenya. Get competitive quotations for high-quality auto suspension components.",
    keywords: "KOMU Coils Springs, KOMU Coils, suspension coils, suspension springs, KOMU suspension components, coil springs Kenya, auto parts Kenya, shock absorbers, vehicle suspension",
    type: "article",
    canonical: "https://morisenterprises.com/products/automobile-supplies",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "KOMU Coils Springs", url: "/products/automobile-supplies" },
    ],
  });

  return (
    <ProductPageLayout
      title="Automobile Supplies"
      description="Our comprehensive range of KOMU Coils Springs and professional-grade suspension components designed for automotive service centers and vehicle maintenance."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative w-full h-48 bg-muted overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {product.description}
              </p>
              <Button
                onClick={() => openProductQuotation(product.name)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Quotation via WhatsApp
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Premium KOMU Coils Springs & Suspension Components
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We provide a comprehensive selection of KOMU Coils Springs and professional-grade suspension equipment designed 
          to meet the demanding needs of modern automotive service centers. Our products combine precision engineering, 
          reliability, and durability to support accurate diagnostics and efficient vehicle maintenance workflows.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Whether you need suspension coils for routine maintenance or premium-grade components for heavy-duty applications, 
          our team is ready to assist you with competitive pricing and professional service. Contact us via WhatsApp for 
          quick quotations and product information.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default AutomobileSupplies;

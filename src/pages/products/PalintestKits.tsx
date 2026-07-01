import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";
import { OptimizedImage } from "@/components/OptimizedImage";

const products = [
  {
    name: "Palintest Photometers",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Ffad345ebf2ca45dc907dc570e1a1cf8c?format=webp&width=800",
  },
  {
    name: "Kemio Disinfection Analyzer",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F88407a93652f40a0bd04311262195b73?format=webp&width=800",
  },
  {
    name: "Pooltest 6 Photometer",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F40220d1cc2f94c1ebd04a7350507cfd2?format=webp&width=800",
  },
  {
    name: "Pool and Spa Test Kit",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Fb2e31861251847f9b2a50e4465593e4e?format=webp&width=800",
  },
  {
    name: "Portable Test Case",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F19112d4badcd4e1c8aa68c9e030da16d?format=webp&width=800",
  },
  {
    name: "Water Quality Analyzer",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F482f32063dd7487c87b74cebd9d535d4?format=webp&width=800",
  },
  {
    name: "Micro 800 COINC Meter",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F01298927f76d443b83b63458aae9d4e3?format=webp&width=800",
  },
  {
    name: "Digital Test Tablet Reader",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F772cfa081d3a4412af24372d982b0a66?format=webp&width=800",
  },
  {
    name: "Complete Test Kit System",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Febe0a5b3737c484e94878973cee301c8?format=webp&width=800",
  },
  {
    name: "Test Tablet Dispenser",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2F25e8d389706b414e8dbe75da15aaf52e?format=webp&width=800",
  },
  {
    name: "Potaest Go Kit",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8a4218e21c624724bb59cc87fa693142%2Feb74fb27c1b74e0aa6dbe2b8031556c7?format=webp&width=800",
  },
];


const PalintestKits = () => {
  usePageMeta({
    title: "Palintest Authorized Distributor Kenya | Water Testing Kits & Photometers",
    description: "Moris Enterprises is Kenya's leading authorized Palintest distributor. Premium water testing kits, photometers, and reagents for accurate water quality analysis in pools, spas, drinking water, and industrial applications.",
    keywords: "Palintest Kenya, Palintest distributor, water testing kits, photometers, water quality analysis, drinking water testing, pool testing, environmental water testing",
    type: "product",
    canonical: "https://morisentreprises.com/palintest",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Palintest Kits", url: "/palintest" },
    ],
    faqs: [
      {
        question: "Is Moris Enterprises an authorized Palintest distributor?",
        answer: "Yes, Moris Enterprises is an official authorized distributor of Palintest products in Kenya. We guarantee authentic products with full manufacturer support and warranty."
      },
      {
        question: "What Palintest products are available?",
        answer: "We stock the complete Palintest range including Photometers, Kemio Analyzers, Pooltest systems, drinking water testing kits, wastewater analysis equipment, and test tablets and reagents."
      },
      {
        question: "Which industries use Palintest products?",
        answer: "Palintest solutions are used by municipal water treatment facilities, swimming pool operators, spa facilities, environmental consultants, food and beverage industry, pharmaceutical companies, and water quality laboratories across Kenya."
      },
      {
        question: "Can I get technical support and training?",
        answer: "Yes, we provide technical support, product training, and consultation services. Our team can help select the right testing solution for your specific needs. Contact us for details."
      },
      {
        question: "How quickly can you deliver Palintest products?",
        answer: "We provide fast delivery throughout Kenya. Contact us via WhatsApp at +254 733 137 332 to check stock availability and get delivery quotes."
      }
    ]
  });

  return (
    <ProductPageLayout
      title="Palintest Kits"
      description="Authorized distributor of Palintest water testing products. Comprehensive range of photometers, test kits, and reagents for accurate water analysis in various applications."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
              product.image ? "overflow-hidden" : "p-6"
            }`}
          >
            {product.image && (
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <OptimizedImage
                  src={product.image}
                  alt={`Palintest ${product.name} - Water quality testing equipment`}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
            )}
            <div className={product.image ? "p-6 flex flex-col h-full" : "p-6 flex flex-col h-full"}>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground flex-1">
                Trusted Palintest solutions for reliable water quality testing.
              </p>
              <Button
                onClick={() => openProductQuotation(product.name)}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Quotation via WhatsApp
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">
          Palintest: Premium Water Quality Testing Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Why Choose Palintest?</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Globally trusted brand with 60+ years of water testing expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Rapid testing methods - results in seconds, not hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Portable, user-friendly equipment suitable for field and lab use</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Certified accuracy and compliance with international standards</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Palintest Services</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Complete product supply and inventory management</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Technical support and equipment troubleshooting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Training and certification for operator qualification</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>Calibration services and maintenance programs</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3">Applications We Support</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As an authorized distributor of Palintest products in Kenya, Moris Enterprises serves diverse sectors
          requiring reliable water testing. Our solutions are deployed in municipal water treatment, competitive
          and recreational swimming pools, spa facilities, wastewater treatment plants, environmental monitoring
          programs, and industrial quality control operations.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Palintest's innovative photometers and rapid test systems provide accurate, repeatable results for critical
          water quality parameters including disinfectant residuals, pH, alkalinity, turbidity, and over 100 other
          parameters. Whether you need portable field kits or stationary laboratory analyzers, our Palintest range
          combines ease-of-use with laboratory-grade accuracy.
        </p>
      </div>
    </ProductPageLayout>
  );
};

export default PalintestKits;

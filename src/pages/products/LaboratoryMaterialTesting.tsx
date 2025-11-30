import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const productCategories = {
  "Sterilization & Safety": [
    "Table Top Portable Type Lab Steam Autoclave Sterilizer",
    "18L or 24L Medical Lab Autoclave Type Sterilization Machine",
    "Laminar Flow Cabinet",
    "Fume Hood",
    "Ultrasonic Cleaner",
  ],
  "Diagnostic Instruments": [
    "Binocular LCD Display Digital Video Microscope",
    "Blood Analyzer Auto Hematology Analyzer",
    "Chemistry Analyzer Chemistry Machine",
  ],
  "Heating & Temperature Control": [
    "Ceramic Fiber Muffle Furnace",
    "Magnetic Stirrer",
    "LCD Digital Magnetic Stirrer",
    "Heating Mantle",
    "Hot Plate",
    "DHP4-550 LCD Glass Ceramic Hotplate with Timer",
    "Water Baths",
    "DUC-10 High Precision Chiller",
    "DCP-20 Low-Temperature Cooling Circulator Series",
  ],
  "Mixing & Stirring Equipment": [
    "Laboratory Shaker",
    "SK-O180-C Remote-Controlled Smart Destaining Shaker",
    "Vortex Mixer",
    "MX-S+ Digital Vortex Mixer",
    "MX-Pro Infrared Digital Vortex Mixer",
    "OS-T400-Plus Overhead Stirrer",
    "OS-T40-Plus/OS-T60-Plus Overhead Stirrer",
    "DMS4 LCD Glass Ceramic Magnetic Stirrer with Timer",
    "DMS5 LCD Magnetic Stirrer with Timer",
    "Mixer",
  ],
  "Sample Preparation & Processing": [
    "Ball Mill",
    "Grinder",
    "Gel Loading Tips",
    "Homogenizer",
    "Water Distiller",
  ],
  "Centrifugation Equipment": [
    "High-speed Micro Centrifuge",
    "DG1616R High Speed Refrigerated Centrifuge",
    "DM0306 Low Speed Centrifuge",
  ],
  "Pipetting & Liquid Handling": [
    "Mini TopPette Pipette",
    "HiPette-LTS Light Feel Manual Adjustable Color Pipette",
    "HiPette Fully Autoclavable Manual 8-Channel Adjustable Colorful Pipette",
    "Automated Pipette System",
  ],
  "Titration & Analysis Equipment": [
    "dTrite-Pro Electronic Titration",
    "Vacuum Pump and Filtration",
  ],
  "Filtration & Purification": [
    "Vacuum Pump (Oil-Free)",
    "Stainless Steel Manifold Set (3 Branch)",
    "Stainless Steel Manifold Set (6 Branch)",
    "Water Distiller",
  ],
  "Analytical Lab Equipment": [
    "Spectrophotometer",
    "Electrochemistry Equipment",
  ],
  "Physics Lab Equipment": [
    "Physics Lab Equipment",
    "Mechanical Engineering Equipment",
  ],
  "Chemistry Lab Equipment": [
    "Chemistry Lab Equipment",
    "Lab Glassware",
  ],
  "Biology Lab Equipment": [
    "Biology Lab Equipment",
    "Microscope",
    "Hospital And Medical Lab Equipment",
  ],
  "Educational Equipment": [
    "Laboratory Appliances",
    "Maths Lab Equipment",
    "Educational Laboratory Equipment",
    "TVET Lab Equipment",
  ],
  "Product Display Categories": [
    "Liquid Handling",
    "Thermal Control",
    "Stirring & Heating",
    "Distilling",
    "Centrifuges",
    "Shaker & Mixing",
    "PCR",
    "Electrophoresis",
    "Spectrophotometer",
  ],
};


const LaboratoryMaterialTesting = () => {
  usePageMeta({
    title: "Laboratory Material Testing Equipment | Analysis Instruments Kenya",
    description: "Comprehensive laboratory and material testing equipment including autoclaves, microscopes, analyzers, centrifuges, and specialized instruments for research, clinical, and industrial applications.",
    keywords: "laboratory equipment, testing instruments, material testing, autoclave, microscope, centrifuge, analyzer, Kenya",
    type: "article",
    canonical: "https://morisenterprises.com/products/laboratory-material-testing",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Laboratory Material Testing", url: "/products/laboratory-material-testing" },
    ],
  });

  return (
    <ProductPageLayout
      title="Laboratory &amp; Material Testing Equipment"
      description="Complete range of laboratory and material testing instruments for research, clinical diagnostics, quality control, and educational applications including autoclaves, microscopes, analyzers, and specialized testing equipment."
    >
      {/* Product Categories */}
      <div className="space-y-12">
        {Object.entries(productCategories).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    Professional laboratory and testing equipment for accurate results.
                  </p>
                  <Button
                    onClick={() => openProductQuotation(product)}
                    className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Quote via WhatsApp
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Description */}
      <div className="mt-16 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Comprehensive Laboratory &amp; Material Testing Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Moris Enterprises supplies a comprehensive range of laboratory and material testing equipment for research institutions, clinical laboratories, educational facilities, and industrial quality control. From basic laboratory appliances to advanced analytical instruments, we provide solutions for every testing need.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Equipment Categories:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>Sterilization:</strong> Autoclaves and sterilization systems for laboratory and medical use</li>
          <li><strong>Analysis & Diagnostics:</strong> Hematology analyzers, chemistry analyzers, and diagnostic instruments</li>
          <li><strong>Separation & Preparation:</strong> Centrifuges, homogenizers, and sample preparation equipment</li>
          <li><strong>Temperature Control:</strong> Water baths, heating mantles, hot plates, and cooling systems</li>
          <li><strong>Mixing & Stirring:</strong> Magnetic stirrers, vortex mixers, overhead stirrers, and shakers</li>
          <li><strong>Liquid Handling:</strong> Pipettes and automated pipetting systems</li>
          <li><strong>Microscopy:</strong> Digital microscopes and inspection equipment</li>
          <li><strong>Specialized Testing:</strong> Vacuum filtration, distillation, and other specialized systems</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Key Features of Our Equipment:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ Precision engineering for accurate results</li>
          <li>✓ Digital controls and LCD displays</li>
          <li>✓ Temperature and speed control capabilities</li>
          <li>✓ Durable construction for long-term use</li>
          <li>✓ Easy-to-use interfaces</li>
          <li>✓ Safety features and compliance standards</li>
          <li>✓ Technical support and after-sales service</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Applications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Clinical laboratory diagnostics and testing</li>
          <li>Medical device sterilization and validation</li>
          <li>Pharmaceutical research and development</li>
          <li>Quality control in manufacturing</li>
          <li>Food and beverage testing</li>
          <li>Environmental analysis and monitoring</li>
          <li>Educational institutions and training</li>
          <li>Research and development laboratories</li>
          <li>TVET (Technical and Vocational) training centers</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Product Display Categories:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Liquid Handling Systems</li>
          <li>Thermal Control Equipment</li>
          <li>Stirring & Heating Solutions</li>
          <li>Distillation Systems</li>
          <li>Centrifugation Equipment</li>
          <li>Shaker & Mixing Systems</li>
          <li>PCR & Molecular Biology</li>
          <li>Electrophoresis Systems</li>
          <li>Spectrophotometer Instruments</li>
          <li>Electrochemistry Equipment</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default LaboratoryMaterialTesting;

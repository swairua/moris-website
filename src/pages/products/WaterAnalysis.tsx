import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const productCategories = {
  "HACH Laboratory Instruments": [
    { name: "HACH DR3900 Laboratory VIS Spectrophotometer", description: "Benchtop visible spectrophotometer for laboratory water analysis." },
    { name: "HACH DR6000 UV Visible Spectrophotometer", description: "Advanced UV-Vis spectrophotometer for comprehensive water testing." },
    { name: "HACH DR1900 Portable Spectrophotometer", description: "Portable spectrophotometer for field water quality testing." },
    { name: "HACH DR1010 COD Rapid Determination Instrument", description: "Rapid COD analyzer for quick determination of organic content." },
    { name: "HACH HT200S COD High Temperature Dissolver", description: "High-temperature digester for COD sample preparation." },
    { name: "HACH DRB200 Heating Digester", description: "Heating block digester for wastewater analysis." },
    { name: "HACH DR300 Chlorine Dioxide Pocket Colorimeter", description: "Portable colorimeter for chlorine dioxide measurement." },
    { name: "HACH DR300 Pocket Ozone Colorimeter", description: "Handheld colorimeter for ozone residual testing." },
  ],
  "Portable Laboratory Equipment": [
    { name: "Portable Colorimeter", description: "Compact colorimeter for on-site water quality measurements." },
    { name: "COD Reactor", description: "Portable reactor system for COD sample digestion." },
    { name: "COD Analyzer", description: "Field-deployable analyzer for chemical oxygen demand testing." },
    { name: "Turbidity Meter", description: "Portable turbidity measurement device for water clarity testing." },
    { name: "Portable DO Meter", description: "Handheld dissolved oxygen meter for water quality assessment." },
  ],
  "Bench Top Instruments": [
    { name: "Bench Top pH Meter", description: "Laboratory pH meter for accurate hydrogen ion concentration measurement." },
    { name: "Bench Top Conductivity Meter", description: "Benchtop conductivity meter for dissolved solids analysis." },
  ],
  "Portable Water Quality Meters": [
    { name: "Portable pH Meter (Pen Type)", description: "Handheld pen-type pH meter for quick field pH testing." },
    { name: "Pen Type Conductivity Meter", description: "Portable conductivity measurement device." },
    { name: "Pen Type TDS Meter", description: "Handheld total dissolved solids meter." },
    { name: "Pen Type ORP Meter", description: "Portable oxidation-reduction potential meter." },
    { name: "Salinity Meter", description: "Specialized meter for salt concentration measurement." },
    { name: "Online Meter", description: "Continuous water quality monitoring instrument." },
    { name: "Total Nitrogen Detection Meter", description: "Meter for total nitrogen measurement in water." },
  ],
  "Multi-Parameter Water Quality Testers": [
    { name: "3 in 1 Water Tester Multi-parameter pH Monitor (TDS/PH/Temp)", description: "Three-parameter tester for pH, TDS, and temperature." },
    { name: "3 in 1 Multi-parameter PH Monitor", description: "Triple-parameter water quality monitor." },
    { name: "Soil 4in1 4in1 Soil Meter", description: "Soil analysis meter with four measurement parameters." },
    { name: "Soil 4in1 4in1 Plant Earth Soil PH Moisture Light Soil Meter Thermometer", description: "Comprehensive soil tester measuring pH, moisture, light, and temperature." },
    { name: "ORP-169E Digital Pen Type ORP Meter Water Control Tester Waterproof Display Temperature", description: "Waterproof ORP meter with temperature compensation." },
    { name: "TDS Meter Aquarium Pool Water Tester Wine Urine LCD Pen Monitor", description: "Versatile TDS meter for multiple liquid applications." },
    { name: "5 in 1 Meter SALT/EC/TDS/S.G./TEMP With LCD Display", description: "Five-parameter meter measuring salinity, conductivity, TDS, specific gravity, and temperature." },
    { name: "Portable pH Meter 7 in 1 Smart (pH/TDS/EC/ORP/Salinity/S.G/Temperature)", description: "Advanced seven-parameter smart meter for comprehensive analysis." },
    { name: "Portable pH Meter 7 in 1 Smart (pH/TDS/EC/)", description: "Smart meter with seven measurement capabilities." },
    { name: "2 In 1 Water Quality Meter LCD Backlight Display (CL/Temp)", description: "Dual-parameter meter for chlorine and temperature with backlit display." },
    { name: "4 In 1 Water Meter (CL/ORP/H2/TEMP) Residual Chlorine Meter", description: "Four-parameter meter including chlorine, ORP, hydrogen, and temperature." },
    { name: "4 In 1 Portable Meter", description: "Compact four-parameter water quality analyzer." },
    { name: "5 in 1 Water Quality Meter (PH/CL/ORP/H2/TEMP) Chlorine Tester", description: "Five-parameter comprehensive water tester with chlorine detection." },
    { name: "5 in 1 Water Quality Meter", description: "Versatile five-parameter water quality measurement device." },
    { name: "2 in 1 PH & Residual Chlorine Test Chlorine Detector Water", description: "Dual-function meter for pH and chlorine testing." },
  ],
  "Electrodes & Sensors": [
    { name: "pH Electrode", description: "Replacement pH electrode for compatible meter systems." },
    { name: "Conductivity Electrode", description: "Conductivity sensor for water quality measurements." },
    { name: "ORP Electrode", description: "Oxidation-reduction potential electrode for analysis." },
    { name: "DO Electrode", description: "Dissolved oxygen sensor for water quality testing." },
  ],
  "Master Distributor Brands": [
    { name: "Milwaukee Water Testing Equipment", description: "Official distributor of Milwaukee brand water testing instruments." },
    { name: "Lovibond Water Testing Equipment", description: "Authorized distributor of Lovibond water analysis systems." },
    { name: "Delagua Water Analysis Solutions", description: "Distributor of Delagua water quality testing solutions." },
    { name: "Hach Water Testing Systems", description: "Authorized HACH water testing equipment and instruments." },
    { name: "Hanna Instruments Water Quality", description: "Distributor of Hanna Instruments water quality solutions." },
  ],
};


const WaterAnalysis = () => {
  usePageMeta({
    title: "Water Testing Equipment & Analysis | Water Quality Solutions Kenya",
    description: "Comprehensive water testing and analysis solutions featuring HACH instruments, portable meters, multi-parameter testers, and professional-grade equipment for drinking water, wastewater, and industrial applications in Kenya.",
    keywords: "water testing, water quality equipment, water analysis, HACH, COD analyzer, turbidity meter, portable meter, water testing Kenya, Nairobi",
    type: "article",
    canonical: "https://morisentreprises.com/water",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Water Analysis", url: "/water" },
    ],
  });

  return (
    <ProductPageLayout
      title="Water Analysis &amp; Testing Equipment"
      description="Comprehensive water testing and analysis solutions featuring HACH instruments, portable meters, multi-parameter testers, and professional-grade equipment for drinking water, wastewater, and industrial applications."
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
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {product.description}
                  </p>
                  <Button
                    onClick={() => openProductQuotation(product.name)}
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
          Professional Water Analysis &amp; Testing Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We supply a comprehensive range of water testing and analysis equipment in Kenya, featuring HACH instruments alongside multi-parameter testers, portable meters, electrodes, sensors, and laboratory equipment. Our solutions serve drinking water utilities, wastewater treatment facilities, industrial processes, and environmental monitoring applications.
        </p>

        {/* Palintest Promo Banner */}
        <div className="mt-8 mb-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                🏆 Official Palintest Distributor
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are the official authorized distributor of Palintest UK in Kenya. Browse our complete range of Palintest photometers, test tablets, tube tests, and microbiological kits on the dedicated Palintest page.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button
                onClick={() => window.location.href = "/palintest"}
                className="bg-primary hover:bg-primary-dark text-primary-foreground whitespace-nowrap"
              >
                View All Palintest Products →
              </Button>
              <Button
                onClick={() => window.location.href = "/palintest/tablet-tests"}
                className="bg-primary/90 hover:bg-primary text-primary-foreground whitespace-nowrap"
              >
                Palintest Tablet Tests (40+ Parameters) →
              </Button>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Why Choose Our Water Analysis Products:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ HACH laboratory spectrophotometers and analyzers</li>
          <li>✓ 200+ test parameters available</li>
          <li>✓ Rapid results (1-10 minutes for most tests)</li>
          <li>✓ Compliant with international water quality standards</li>
          <li>✓ Full technical support and training available</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Application Areas:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Drinking water quality assurance and compliance</li>
          <li>Wastewater and effluent testing</li>
          <li>Industrial process water monitoring</li>
          <li>Swimming pool and spa water management</li>
          <li>Environmental and surface water testing</li>
          <li>Food and beverage industry QC</li>
          <li>Pharmaceutical manufacturing</li>
          <li>Laboratory research and analysis</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Test Parameters Include:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>pH, Temperature, Conductivity, TDS</li>
          <li>Chlorine (Free, Total, Combined)</li>
          <li>Alkalinity, Hardness, Calcium, Magnesium</li>
          <li>Ammonia, Nitrate, Nitrite, Phosphate</li>
          <li>Iron, Manganese, Copper, Chromium</li>
          <li>Fluoride, Chloride, Cyanide</li>
          <li>COD, BOD, Turbidity</li>
          <li>Coliform bacteria and pathogens</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default WaterAnalysis;

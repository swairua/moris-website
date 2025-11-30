import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const productCategories = {
  "Palintest Photometers": [
    "Lumiso Expert Photometer (Water Testing & Analysis)",
    "Lumiso Pooltest Expert",
    "Lumiso Pooltest 9",
    "Lumiso Pooltest 6",
    "Lumiso Pooltest 3",
    "Lumiso Ammonia",
    "Lumiso Chlorine",
    "Lumiso Chlorine Dioxide",
  ],
  "Palintest Tablet Tests (250 Tablets)": [
    "AP188 - Alkalinity Total (0-500 mg/L)",
    "Aluminium (0-0.5 mg/L)",
    "AP166 - Ammonia",
    "AP060 - Calcium Hardness (0-500 mg/L)",
    "AP252 - Chloride (0-500 mg/L)",
    "AP268 - Chlorine HR (0-250 mg/L)",
    "AP162 - Chlorine F, C & T (Liquid) (0-5 mg/L)",
    "AP031 - Chlorine Free (0-5 mg/L)",
    "AP011 - Chlorine Free & Total (0-10 mg/L)",
    "AP033 - Chlorine Free (XF) (0-10 mg/L)",
    "AP013 - Chlorine Total (0-5 mg/L)",
    "AP041 - Chromium (VI) (0-1 mg/L)",
    "AP295 - Colour (10-500 mg/L)",
    "PM269 - Copper Free (0-5 mg/L)",
    "AP187 - Copper Free and Total (0-5 mg/L)",
    "AP186 - Cyanuric Acid (0-200 mg/L)",
    "AP179 - Fluoride (0-1.5 mg/L)",
    "AP254L - Hardness Total (0-300 mg/L)",
    "AP105 - Hydrogen Peroxide HR (0-100 mg/L)",
    "AP104 - Iron HR (0-10 mg/L)",
    "AP156 - Iron LR (0-1 mg/L)",
    "AP155 - Iron MR (0-5 mg/L)",
    "AP292 - Magnesium (0-50 mg/L)",
    "AP193 - Manganese HR (0-5 mg/L)",
    "AP174 - Manganese LR (0-0.03 mg/L)",
    "AP173L - Nickel (0-10 mg/L)",
    "AP284 - Nitrate (0-1 mg/L)",
    "AP109 - Nitrite (0-1500 mg/L)",
    "AP260 - Ozone (0-3 mg/L)",
    "AP056 - Phosphate/12P (0-12 mg/L)",
    "AP177 - pH-Phenol Red (6.5-8.4)",
    "AP130 - Potassium (0-12 mg/L)",
  ],
  "Palintest Tube Tests": [
    "PL400 - Ammonia/100N Tubetest Nessler (0-100 mg/L)",
    "PL425 - Ammonia/50N Tubetest Nessler (0-50 mg/L)",
    "PL424 - Bromine Total (0-10 mg/L)",
    "PL453, PL463, PL468 - COD/150 (0-150 mg/L)",
    "PL450, PL460, PL461 - COD/2000 (0-2000 mg/L)",
    "PL454, PL464, PL465 - COD/20000 (0-20000 mg/L)",
    "PL456, PL466, PL467 - COD/400 (0-400 mg/L)",
    "PL452, PL462 - COD Mn (0-10 mg/L)",
  ],
  "Palintest Microbiological Testing Kits": [
    "Wagtech Potatech+",
    "Wagtech Potalab+",
    "Wagtech Potakit",
    "Wagtech Potacheck",
    "Wagtech Potatest Classic",
  ],
  "HACH Laboratory Instruments": [
    "HACH DR3900 Laboratory VIS Spectrophotometer",
    "HACH DR6000 UV Visible Spectrophotometer",
    "HACH DR1900 Portable Spectrophotometer",
    "HACH DR1010 COD Rapid Determination Instrument",
    "HACH HT200S COD High Temperature Dissolver",
    "HACH DRB200 Heating Digester",
    "HACH DR300 Chlorine Dioxide Pocket Colorimeter",
    "HACH DR300 Pocket Ozone Colorimeter",
  ],
  "Portable Laboratory Equipment": [
    "Portable Colorimeter",
    "COD Reactor",
    "COD Analyzer",
    "Turbidity Meter",
    "Portable DO Meter",
  ],
  "Bench Top Instruments": [
    "Bench Top pH Meter",
    "Bench Top Conductivity Meter",
  ],
  "Portable Water Quality Meters": [
    "Portable pH Meter (Pen Type)",
    "Pen Type Conductivity Meter",
    "Pen Type TDS Meter",
    "Pen Type ORP Meter",
    "Salinity Meter",
    "Online Meter",
    "Total Nitrogen Detection Meter",
  ],
  "Multi-Parameter Water Quality Testers": [
    "3 in 1 Water Tester Multi-parameter pH Monitor (TDS/PH/Temp)",
    "3 in 1 Multi-parameter PH Monitor",
    "Soil 4in1 4in1 Soil Meter",
    "Soil 4in1 4in1 Plant Earth Soil PH Moisture Light Soil Meter Thermometer",
    "ORP-169E Digital Pen Type ORP Meter Water Control Tester Waterproof Display Temperature",
    "TDS Meter Aquarium Pool Water Tester Wine Urine LCD Pen Monitor",
    "5 in 1 Meter SALT/EC/TDS/S.G./TEMP With LCD Display",
    "Portable pH Meter 7 in 1 Smart (pH/TDS/EC/ORP/Salinity/S.G/Temperature)",
    "Portable pH Meter 7 in 1 Smart (pH/TDS/EC/)",
    "2 In 1 Water Quality Meter LCD Backlight Display (CL/Temp)",
    "4 In 1 Water Meter (CL/ORP/H2/TEMP) Residual Chlorine Meter",
    "4 In 1 Portable Meter",
    "5 in 1 Water Quality Meter (PH/CL/ORP/H2/TEMP) Chlorine Tester",
    "5 in 1 Water Quality Meter",
    "2 in 1 PH & Residual Chlorine Test Chlorine Detector Water",
  ],
  "Electrodes & Sensors": [
    "pH Electrode",
    "Conductivity Electrode",
    "ORP Electrode",
    "DO Electrode",
  ],
  "Master Distributor Brands": [
    "Milwaukee Water Testing Equipment",
    "Lovibond Water Testing Equipment",
    "Delagua Water Analysis Solutions",
    "Hach Water Testing Systems",
    "Palintest UK Products",
    "Hanna Instruments Water Quality",
  ],
};


const WaterAnalysis = () => {
  usePageMeta({
    title: "Water Testing Equipment & Palintest | Water Quality Analysis Kenya",
    description: "Official distributor of Palintest water analysis equipment, HACH instruments, and comprehensive water testing solutions including photometers, reagents, meters, and microbiological kits.",
    keywords: "water testing, Palintest, HACH, water quality equipment, water analysis, photometer, COD analyzer, turbidity meter, Kenya",
    type: "article",
    canonical: "https://morisenterprises.com/products/water-analysis",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Water Analysis", url: "/products/water-analysis" },
    ],
  });

  return (
    <ProductPageLayout
      title="Water Analysis &amp; Testing Equipment"
      description="Comprehensive water testing and analysis solutions featuring Palintest photometers, HACH instruments, portable meters, and professional-grade equipment for drinking water, wastewater, and industrial applications."
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
                    Professional water testing and quality analysis equipment.
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
          Professional Water Analysis &amp; Testing Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As authorized distributors of Palintest UK and HACH instruments, we supply the most comprehensive range of water testing and analysis equipment in Kenya. Our solutions serve drinking water utilities, wastewater treatment facilities, industrial processes, and environmental monitoring applications.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Why Choose Our Water Analysis Products:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ Official distributor of Palintest UK equipment and reagents</li>
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

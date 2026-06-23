import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const productCategories = {
  "SPECTROPHOTOMETERS": [
    { name: "HACH DR3900 Laboratory VIS Spectrophotometer", description: "Benchtop visible spectrophotometer for comprehensive laboratory water analysis with advanced data management." },
    { name: "HACH DR6000 UV Visible Spectrophotometer", description: "Advanced UV-Vis spectrophotometer with full spectrum scanning for precise water quality analysis." },
    { name: "HACH DR1900 Portable Spectrophotometer", description: "Rugged portable spectrophotometer for field water quality testing with multiple wavelength options." },
  ],
  "COD & WASTEWATER ANALYSIS": [
    { name: "HACH DR1010 COD Rapid Determination Instrument", description: "Rapid COD analyzer for quick determination of chemical oxygen demand in wastewater." },
    { name: "HACH HT200S COD High Temperature Dissolver", description: "High-temperature digestion system for COD sample preparation." },
    { name: "HACH DRB200 Heating Digester", description: "Professional heating block digester for COD and total phosphorus sample digestion." },
    { name: "HACH COD Reagent Vials (Low Range 0-150 mg/L)", description: "Pre-dispensed COD reagent vials for low-range chemical oxygen demand testing." },
    { name: "HACH COD Reagent Vials (High Range 0-1500 mg/L)", description: "Pre-dispensed COD reagent vials for high-range organic content determination." },
  ],
  "POCKET COLORIMETERS": [
    { name: "HACH DR300 Chlorine Dioxide Pocket Colorimeter", description: "Portable colorimeter for chlorine dioxide measurement in water treatment." },
    { name: "HACH DR300 Pocket Ozone Colorimeter", description: "Handheld colorimeter for ozone residual testing in water." },
    { name: "HACH DR300 Pocket Chlorine Colorimeter", description: "Compact colorimeter for free and total chlorine measurement." },
    { name: "HACH Pocket Colorimeter II for Chlorine", description: "Advanced pocket colorimeter for precise chlorine analysis in field applications." },
  ],
  "TURBIDITY METERS": [
    { name: "HACH 2100Q Portable Turbidity Meter", description: "Portable turbidity meter with LED light source for field water clarity measurement." },
    { name: "HACH 2100N Laboratory Turbidity Meter", description: "Benchtop turbidimeter for high-accuracy laboratory water clarity analysis." },
    { name: "HACH 2100AN Laboratory Turbidity Meter", description: "Advanced benchtop turbidimeter with EPA compliance for regulatory testing." },
    { name: "HACH TU5200 Laser Turbidity Meter", description: "High-precision laser turbidity meter for ultra-low turbidity measurement." },
  ],
  "HQ SERIES PORTABLE METERS": [
    { name: "HACH HQ40D Portable Multi-Parameter Meter", description: "Dual-input portable meter for simultaneous pH, conductivity, DO, and ORP measurement." },
    { name: "HACH HQ30D Portable Single-Input Meter", description: "Single-input portable meter for dedicated pH, conductivity, or DO measurement." },
    { name: "HACH HQ2200 Portable pH/ORP Meter", description: "Advanced portable pH/ORP meter with IntelliCAL probe technology." },
    { name: "HACH HQ4100 Portable Multi-Parameter Meter", description: "Professional multi-parameter meter with digital probe connectivity." },
  ],
  "SENSORS & ELECTRODES": [
    { name: "HACH IntelliCAL PHC101 pH Electrode", description: "Digital pH electrode with temperature compensation for accurate measurement." },
    { name: "HACH IntelliCAL CDC401 Conductivity Electrode", description: "Digital conductivity sensor with 4-electrode cell technology." },
    { name: "HACH IntelliCAL LDO101 Dissolved Oxygen Sensor", description: "Luminescent dissolved oxygen sensor with fast stabilization." },
    { name: "HACH IntelliCAL ORP Electrode", description: "Digital ORP electrode for oxidation-reduction potential measurement." },
    { name: "HACH IntelliCAL ISE Ammonia Electrode", description: "Ion-selective electrode for ammonia detection in water samples." },
  ],
  "REAGENTS & TEST KITS": [
    { name: "HACH FerroVer Iron Reagent Powder Pillows", description: "Pre-measured iron reagent powder pillows for colorimetric iron determination." },
    { name: "HACH NitraVer 5 Nitrate Reagent", description: "Nitrate reagent powder pillows for cadmium reduction method analysis." },
    { name: "HACH PhosVer 3 Phosphate Reagent", description: "Phosphate reagent powder pillows for ascorbic acid method testing." },
    { name: "HACH Ammonia Salicylate Reagent Set", description: "Complete reagent set for ammonia testing using the salicylate method." },
    { name: "HACH Chlorine Free/Total DPD Reagent Powder Pillows", description: "DPD reagent pillows for free and total chlorine measurement." },
    { name: "HACH Sulfide Reagent Set", description: "Reagent set for sulfide determination in water samples." },
    { name: "HACH Hardness Reagent Set", description: "Complete titration reagents for total hardness measurement." },
  ],
  "STANDARDS & CALIBRATION SOLUTIONS": [
    { name: "HACH Turbidity Standards (StablCal)", description: "Certified stable turbidity calibration standards for EPA compliance." },
    { name: "HACH pH Buffer Solutions (4.00, 7.00, 10.00)", description: "NIST-traceable pH buffer solutions for accurate meter calibration." },
    { name: "HACH Conductivity Standards", description: "Certified conductivity calibration standards for meter verification." },
    { name: "HACH COD Standard Solution", description: "Certified COD standard solution for COD analyzer validation." },
    { name: "HACH ORP Standard Solution", description: "ORP calibration standard solution for meter verification." },
  ],
  "LABORATORY INSTRUMENTS": [
    { name: "HACH DRB200 Dual-Block Digester", description: "Professional dual-block digester for COD and TOC sample preparation." },
    { name: "HACH HQ440D Benchtop Multi-Parameter Meter", description: "Benchtop multi-parameter meter with color touchscreen for lab use." },
    { name: "HACH TL2310 Benchtop Turbidity Meter", description: "EPA-compliant benchtop turbidity meter for laboratory water analysis." },
    { name: "HACH DR900 Portable Colorimeter", description: "Multi-wavelength portable colorimeter for 90+ test parameters." },
  ],
};

const HachInstruments = () => {
  usePageMeta({
    title: "HACH Water Testing Instruments & Spectrophotometers | Authorized Distributor Kenya",
    description: "Authorized distributor of HACH water analysis instruments in Kenya including DR3900 spectrophotometers, COD analyzers, pocket colorimeters, HQ series meters, and water quality testing reagents.",
    keywords: "HACH, HACH instruments, water testing, spectrophotometer, COD analyzer, water quality instruments, DR3900, DR6000, turbidity meter, Kenya",
    type: "article",
    canonical: "https://morisentreprises.com/products/hach-instruments",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "HACH Instruments", url: "/products/hach-instruments" },
    ],
  });

  return (
    <ProductPageLayout
      title="HACH Water Testing Instruments &amp; Equipment"
      description="Authorized distributor of HACH water analysis solutions in Kenya. Complete range of spectrophotometers, COD analyzers, turbidity meters, portable meters, sensors, and reagents for professional water quality testing."
    >
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

      <div className="mt-16 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          About HACH Water Quality Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As an authorized distributor of HACH instruments in Kenya, Moris Enterprises supplies the full range of HACH water quality testing and analysis equipment. From advanced spectrophotometers and COD analyzers to portable meters and testing reagents, our HACH product line serves water utilities, laboratories, industrial facilities, and environmental monitoring organizations across the region.
        </p>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Why Choose HACH Instruments:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ Authorized distributor — genuine HACH equipment and consumables</li>
          <li>✓ Comprehensive product range — from portable field meters to advanced laboratory analyzers</li>
          <li>✓ US EPA-approved methods for regulatory compliance testing</li>
          <li>✓ IntelliCAL digital probe technology for Plug-and-Play operation</li>
          <li>✓ Full reagent and standards support for all test parameters</li>
          <li>✓ Technical training and after-sales support provided</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Applications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Drinking water quality monitoring and compliance</li>
          <li>Wastewater treatment plant process control</li>
          <li>Environmental and surface water testing</li>
          <li>Industrial process water analysis</li>
          <li>Food and beverage industry water QC</li>
          <li>Pharmaceutical and laboratory research</li>
          <li>Boiler and cooling water management</li>
          <li>Swimming pool and recreational water testing</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Key Test Parameters:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>pH, ORP, Conductivity, TDS, Salinity</li>
          <li>Dissolved Oxygen (DO) and BOD</li>
          <li>Chemical Oxygen Demand (COD)</li>
          <li>Turbidity and Suspended Solids</li>
          <li>Chlorine (Free, Total, Combined)</li>
          <li>Chlorine Dioxide and Ozone</li>
          <li>Ammonia, Nitrate, Nitrite, Phosphate</li>
          <li>Iron, Manganese, Copper, Sulfide</li>
          <li>Alkalinity, Hardness, Calcium, Magnesium</li>
          <li>Color, Odor, Temperature</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default HachInstruments;

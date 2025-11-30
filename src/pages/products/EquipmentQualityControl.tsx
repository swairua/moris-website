import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const productCategories = {
  "THERMOMETERS": [
    "Digital Infrared Thermometer Non-Contact (-50~400°C)",
    "High Precision Digital Thermometer With K-Type Thermocouple Single Sensors Data-Hold LCD Display",
    "Industry Digital Non-Contact Infrared Thermometer",
    "Digital Thermometer Hygrometer Electronic LCD Temperature Humidity Meter",
    "YH-B300B Deep Fry Thermometer Candy Sugar Frying Thermometer (300mm Probe Length)",
    "LCD Display Long Probe Food Thermometer",
    "Waterproof Thermometer Wall Temperature Measurement (Max Min Value Display)",
    "Digital Thermometer/Hygrometer Humidity Meter",
    "Digital Thermometer for Freezer",
    "Digital Min-Max Indoor and Outdoor Thermometer (-50~70°C)",
    "Digital Thermometer Probe Fridge Freezer Thermometer",
    "HTC-2 Electronic Temperature Humidity Meter Digital ThermoHygrometer",
    "Glass Thermometer with Hook (-20-110°C)",
    "Stick On Thermometer (0-30°C)",
    "Electronic Veterinary Thermometer",
    "Indoor/Outdoor Dual Digital Display Thermometer",
    "Electronic Digital Temperature Humidity Meter Thermometer Hygrometer",
  ],
  "ORP & WATER QUALITY ANALYZERS": [
    "ORP-169F Waterproof ORP Meter High Quality ORP Meter Water Quality Tester",
    "ORP-169E Digital Pen Type ORP Meter Water Control Tester Waterproof Display Temperature",
    "Portable pH/mV/Temperature Meter",
    "Portable Digital Water Meter TDS Tester (0-1999mg/L / ppm)",
    "Waterproof TDS and Temperature Meter",
    "Temperature Meter with Backlight",
    "Universal pH Paper Strips (pH 0-14)",
  ],
  "MULTI-PARAMETER WATER TESTERS": [
    "3 in 1 Water Tester Multi-parameter pH Monitor (TDS/PH/Temp)",
    "3 in 1 Multi-parameter PH Monitor",
    "2 In 1 Water Quality Meter (CL/Temp) with LCD Backlight Display",
    "4 In 1 Water Meter (CL/ORP/H2/TEMP) Residual Chlorine Meter",
    "4 In 1 Portable Meter",
    "5 in 1 Water Quality Meter (PH/CL/ORP/H2/TEMP) Chlorine Tester",
    "5 in 1 Water Quality Meter",
    "5 in 1 Meter (SALT/EC/TDS/S.G./TEMP) With LCD Display",
    "2 in 1 PH & Residual Chlorine Test Chlorine Detector Water",
  ],
  "SOIL & ENVIRONMENTAL METERS": [
    "Soil 4in1 Soil Meter",
    "Soil 4in1 Plant Earth Soil PH Moisture Light Soil Meter Thermometer",
    "TDS Meter Aquarium Pool Water Tester Wine Urine LCD Pen Monitor",
  ],
  "PORTABLE SMART METERS": [
    "Portable pH Meter 7 in 1 Smart (pH/TDS/EC/ORP/Salinity/S.G/Temperature)",
    "Portable pH Meter 7 in 1 Smart (pH/TDS/EC/)",
    "Salinity Meter",
  ],
  "REFRACTOMETERS": [
    "DR-101 Brix Refractometer (0.0-50.0% Brix / Refractive Index 1.3330-1.4200nD)",
    "DR-701 Coffee Sugar Meter (0-50% Brix / TDS 0-25%) Digital Refractometer",
    "DBS-50 Brix Refractometer (0-50% Brix / 0-28% Salinity)",
    "DR-402 Beer Refractometer (0-50% Brix / 1.000-1.130 SG)",
    "DR-301 Honey Brix Refractometer (0-90% Brix)",
    "DR-202 Sea Water Salinity Refractometer (0-100‰ Salinity / 0-57‰ Chlorinity / 1.000-1.070 Specific Gravity)",
    "DR-102 High Range Refractometer (0.0-90.0% Brix / Refractive Index 1.3330-1.5177nD)",
  ],
};

const openWhatsApp = (productName: string) => {
  const phoneNumber = "254733137332";
  const message = encodeURIComponent(
    `Hello! I'm interested in getting a quotation for: ${productName}. Please provide details and pricing.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const EquipmentQualityControl = () => {
  usePageMeta({
    title: "Equipment & Quality Control Instruments | Thermometers, pH Meters, Refractometers Kenya",
    description: "Professional quality control equipment including digital thermometers, water quality meters, pH meters, ORP meters, TDS meters, and refractometers for laboratory and industrial testing.",
    keywords: "thermometer, pH meter, ORP meter, TDS meter, water quality equipment, quality control instruments, refractometer, Kenya",
    type: "article",
    canonical: "https://morisenterprises.com/products/equipment-quality-control",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Equipment & Quality Control", url: "/products/equipment-quality-control" },
    ],
  });

  return (
    <ProductPageLayout
      title="Equipment &amp; Quality Control Instruments"
      description="Complete range of precision instruments for quality control and laboratory testing including thermometers, pH meters, water quality analyzers, and refractometers."
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
                    Precision quality control equipment for accurate laboratory measurements.
                  </p>
                  <Button
                    onClick={() => openWhatsApp(product)}
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
          Professional Quality Control &amp; Testing Equipment
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Moris Enterprises supplies precision instruments and equipment for quality control, laboratory testing, and environmental monitoring. Our range includes digital thermometers, water quality meters, pH analyzers, and specialized testing equipment for diverse applications.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Product Range Includes:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>Digital Thermometers:</strong> Contact and non-contact temperature measurement devices for various applications</li>
          <li><strong>Water Quality Meters:</strong> Multi-parameter analyzers for pH, TDS, EC, ORP, salinity, and temperature</li>
          <li><strong>Portable Meters:</strong> Handheld pen-type meters for field testing and on-site analysis</li>
          <li><strong>Refractometers:</strong> Precision instruments for sugar, salt, and specific gravity measurement</li>
          <li><strong>Electrodes:</strong> Replacement pH, conductivity, and ORP electrodes for meter systems</li>
          <li><strong>Laboratory Meters:</strong> Benchtop instruments for precise laboratory analysis</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Equipment Features:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ Digital LCD displays with backlight</li>
          <li>✓ Waterproof and corrosion-resistant construction</li>
          <li>✓ Wide measurement ranges for diverse applications</li>
          <li>✓ Auto-calibration and temperature compensation</li>
          <li>✓ Fast response time and high accuracy</li>
          <li>✓ Portable and easy-to-use designs</li>
          <li>✓ Data-hold function for readings</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Applications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Water treatment and purification monitoring</li>
          <li>Food and beverage quality control</li>
          <li>Pharmaceutical and chemical manufacturing</li>
          <li>Environmental testing and monitoring</li>
          <li>Laboratory research and analysis</li>
          <li>Industrial process control</li>
          <li>Agriculture and soil analysis</li>
          <li>Aquaculture and pond management</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default EquipmentQualityControl;

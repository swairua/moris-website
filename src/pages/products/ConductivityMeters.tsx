import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const conductivityProducts = {
  "Conductivity Meters": [
    { name: "Benchtop Conductivity Meter", description: "Professional benchtop conductivity meter for laboratory water quality analysis." },
    { name: "Portable Conductivity Meter", description: "Handheld portable conductivity meter for field water testing." },
    { name: "Digital Conductivity Pen Meter", description: "Compact pen-type conductivity meter for quick on-site measurements." },
  ],
  "TDS & Multi-Parameter Meters": [
    { name: "TDS (Total Dissolved Solids) Meter", description: "TDS meter for measuring total dissolved solids in water samples." },
    { name: "3-in-1 Water Tester (pH/TDS/Temp)", description: "Multi-parameter meter measuring pH, TDS, and temperature." },
    { name: "7-in-1 Smart Water Meter (pH/EC/TDS/ORP/Salinity)", description: "Advanced portable meter with seven measurement parameters." },
  ],
  "Sensors & Accessories": [
    { name: "Conductivity Electrode/Probe", description: "Replacement conductivity electrode for compatible meters." },
    { name: "Calibration Solutions (1413, 12880 µS/cm)", description: "Conductivity calibration solutions for meter verification." },
    { name: "Carrying Case & Protective Pouch", description: "Durable carrying case for portable meter protection." },
  ],
};

export default function ConductivityMeters() {
  return (
    <ProductCategoryTemplate
      title="Conductivity Meters - Water Testing Equipment Kenya"
      h1="Conductivity & TDS Meters"
      description="Portable conductivity meters, TDS meters, and water quality analyzers for environmental testing and laboratory applications."
      metaDescription="Portable conductivity meters, TDS meters, and water quality analyzers for environmental testing and laboratory applications."
      keywords={["conductivity meter", "TDS meter", "water testing", "electrical conductivity"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Conductivity Meters", url: "/conductivity-meters" },
      ]}
      productCategories={conductivityProducts}
      sections={[
        {
          type: "description",
          title: "About Conductivity & TDS Meters",
          content: "Conductivity meters measure the electrical conductivity of water, which indicates the total dissolved solids (TDS) or dissolved ionic compounds. TDS is a key water quality parameter showing mineralization level. Both portable and benchtop conductivity meters are essential for drinking water testing, wastewater analysis, industrial processes, and environmental monitoring.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Drinking water quality testing" },
            { name: "Pool and spa water testing" },
            { name: "Aquarium water monitoring" },
            { name: "Wastewater analysis" },
            { name: "Irrigation water quality" },
            { name: "Industrial process control" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "Quick measurements (instant results)" },
            { name: "Portable options for fieldwork" },
            { name: "High accuracy (±2% typically)" },
            { name: "Temperature compensation" },
            { name: "User-friendly digital display" },
          ],
        },
        {
          type: "brands",
          title: "Available Brands",
          items: [
            { name: "Hanna Instruments", link: "/hanna-instruments" },
            { name: "OHAUS", link: "/ohaus" },
            { name: "Thermo Fisher Scientific", link: "/thermo-fisher" },
          ],
        },
      ]}
      relatedLinks={[
        { label: "Water Analysis Equipment", url: "/water" },
        { label: "pH Meters", url: "/ph-meters" },
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Quality Control", url: "/qualitycontrol" },
      ]}
      faqs={[
        {
          question: "What's the difference between conductivity and TDS?",
          answer: "Conductivity (µS/cm) measures electrical conductivity. TDS (ppm) estimates total dissolved solids based on conductivity. Most water meters show both values.",
        },
        {
          question: "How do I calibrate a conductivity meter?",
          answer: "Use calibration solutions of known conductivity (typically 1413 or 12880 µS/cm). Two-point calibration improves accuracy. We provide calibration services.",
        },
        {
          question: "Is conductivity the same as salinity?",
          answer: "Related but different. Salinity measures salt concentration. Conductivity measures all dissolved ions. Salinity is a subset of conductivity measurement.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

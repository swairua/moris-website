import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const phMeterProducts = {
  "Benchtop pH Meters": [
    { name: "Laboratory pH Meter with Electrode", description: "Professional benchtop pH meter for precise laboratory measurements." },
    { name: "Digital pH/Temperature Meter", description: "Dual-parameter meter measuring both pH and temperature simultaneously." },
  ],
  "Portable pH Meters": [
    { name: "Pen-Type Portable pH Meter", description: "Handheld portable pH meter ideal for field water testing and on-site analysis." },
    { name: "Pocket pH Meter (pH 0-14)", description: "Compact pocket-sized pH meter for quick pH testing." },
  ],
  "Electrodes & Accessories": [
    { name: "pH Electrode Glass Bulb", description: "Replacement pH electrode for compatible meter systems." },
    { name: "Reference Electrode", description: "Reference electrode for dual-electrode pH measurements." },
    { name: "Buffer Solutions (pH 4, 7, 10)", description: "Calibration buffer solutions for pH meter calibration." },
  ],
};

export default function PHMeters() {
  return (
    <ProductCategoryTemplate
      title="pH Meters - Water Quality Testing Equipment Kenya"
      h1="pH Meters & Electrodes"
      description="Portable and benchtop pH meters, electrodes, and sensors for water testing, laboratory analysis, and environmental monitoring."
      metaDescription="Portable and benchtop pH meters, electrodes, and sensors for water testing, laboratory analysis, and environmental monitoring."
      keywords={["pH meter", "pH electrode", "water quality", "testing"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "pH Meters", url: "/ph-meters" },
      ]}
      productCategories={phMeterProducts}
      sections={[
        {
          type: "description",
          title: "About pH Meters",
          content: "pH meters measure the acidity or alkalinity of a solution on a scale from 0 (most acidic) to 14 (most alkaline), with 7 being neutral. They use glass electrodes that sense hydrogen ion concentration. pH measurement is essential in water quality testing, laboratory analysis, food processing, and environmental monitoring.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Drinking water quality testing" },
            { name: "Wastewater analysis" },
            { name: "Soil pH testing" },
            { name: "Laboratory research" },
            { name: "Food and beverage production" },
            { name: "Environmental monitoring" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "Accurate readings (±0.1 pH units typically)" },
            { name: "Quick response time (seconds)" },
            { name: "Portable and benchtop options" },
            { name: "Durable electrodes for repeated use" },
            { name: "Temperature compensation available" },
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
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Conductivity Meters", url: "/conductivity-meters" },
        { label: "Quality Control", url: "/qualitycontrol" },
      ]}
      faqs={[
        {
          question: "How often should I calibrate my pH meter?",
          answer: "Calibrate before use with buffer solutions (pH 7 is minimum). Multi-point calibration (pH 4, 7, 10) improves accuracy. We provide calibration services.",
        },
        {
          question: "Why is my pH electrode not responding?",
          answer: "Common issues: dry electrode, contamination, or age. Store electrodes in distilled water. Electrode life is typically 1-2 years with proper care.",
        },
        {
          question: "What's the difference between a glass electrode and other types?",
          answer: "Glass electrodes are most common and versatile. Combination electrodes have both measuring and reference electrodes in one unit, simplifying measurements.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

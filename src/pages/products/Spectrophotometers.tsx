import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const spectrometerProducts = {
  "Single Beam Spectrophotometers": [
    { name: "Hanna HI 80100 Portable UV-Vis Spectrophotometer", description: "Portable UV-Vis spectrophotometer for laboratory and field water analysis." },
    { name: "OHAUS V-1200 Benchtop Spectrophotometer", description: "Benchtop single-beam UV-Vis instrument with high precision and accuracy." },
    { name: "Libra S22 Visible Spectrophotometer", description: "Cost-effective single-beam visible spectrophotometer for routine testing." },
  ],
  "Double Beam Spectrophotometers": [
    { name: "Hanna HI 80101 Double-Beam UV-Vis Spectrophotometer", description: "Double-beam UV-Vis with superior accuracy and wavelength range (200-1000 nm)." },
    { name: "OHAUS V-2000 Double-Beam Spectrophotometer", description: "Advanced double-beam instrument for precision analytical work." },
  ],
  "Portable Spectrophotometers": [
    { name: "HACH DR1900 Portable Spectrophotometer", description: "Rugged portable spectrophotometer designed for field water quality testing." },
    { name: "Portable Colorimeter Spectral Analyzer", description: "Compact portable colorimeter for on-site spectral measurements." },
  ],
};

export default function Spectrophotometers() {
  return (
    <ProductCategoryTemplate
      title="Spectrophotometers - Laboratory Analysis Equipment Kenya"
      h1="Spectrophotometers & UV-Vis Instruments"
      description="UV-Vis spectrophotometers for precise chemical analysis. 10+ brands supplied in Kenya. Portable and benchtop instruments for labs, pharma, and research."
      metaDescription="UV-Vis spectrophotometers for precise chemical analysis. 10+ brands supplied in Kenya. Portable and benchtop instruments for labs, pharma, and research."
      keywords={["spectrophotometer", "UV-Vis", "analytical instruments", "laboratory equipment", "Kenya"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Spectrophotometers", url: "/spectrophotometers" },
      ]}
      productCategories={spectrometerProducts}
      sections={[
        {
          type: "description",
          title: "What is a Spectrophotometer?",
          content: "A spectrophotometer is a fundamental instrument in analytical chemistry that measures light absorption at specific wavelengths. It quantifies how much light of a particular wavelength passes through a sample, enabling precise determination of concentration and composition. Spectrophotometers are essential in pharmaceutical testing, water quality analysis, food testing, and research laboratories.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Chemical Analysis" },
            { name: "Pharmaceutical Testing" },
            { name: "Water Quality Analysis" },
            { name: "Food & Beverage Testing" },
            { name: "Environmental Monitoring" },
            { name: "Research & Academia" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "High precision and accuracy (±0.5% typically)" },
            { name: "Wide wavelength range (visible and UV)" },
            { name: "Fast measurement and results" },
            { name: "Portable and benchtop options available" },
            { name: "Compatible with standard cuvettes" },
          ],
        },
        {
          type: "brands",
          title: "Available Brands",
          items: [
            { name: "Hanna Instruments", link: "/hanna-instruments" },
            { name: "OHAUS", link: "/ohaus" },
            { name: "HACH", link: "/hach" },
          ],
        },
      ]}
      relatedLinks={[
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Water Analysis", url: "/water" },
        { label: "Colorimeters", url: "/colorimeters" },
        { label: "Quality Control Instruments", url: "/qualitycontrol" },
      ]}
      faqs={[
        {
          question: "What's the difference between single-beam and double-beam spectrophotometers?",
          answer: "Single-beam instruments pass all light through the sample, making them portable and affordable but less accurate. Double-beam instruments split light into sample and reference beams simultaneously, providing superior accuracy and baseline correction, ideal for precise analytical work.",
        },
        {
          question: "Can I use a spectrophotometer for both visible and UV measurements?",
          answer: "Some spectrophotometers are designed for visible light only (400-700 nm), while UV-Vis instruments handle both UV (200-400 nm) and visible ranges. Check the specification before purchase.",
        },
        {
          question: "How often should I calibrate my spectrophotometer?",
          answer: "Calibration should be performed daily before use and after every 10-15 measurements for optimal accuracy. We offer professional calibration services.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

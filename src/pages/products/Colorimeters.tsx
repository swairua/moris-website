import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const coloriMeterProducts = {
  "Benchtop Colorimeters": [
    { name: "Laboratory Colorimeter (visible spectrum)", description: "Professional benchtop colorimeter for precise color and absorbance measurements." },
    { name: "Spectrophotometric Colorimeter", description: "Advanced colorimeter with spectral analysis capabilities." },
  ],
  "Portable Colorimeters": [
    { name: "HACH Pocket Colorimeter", description: "Handheld pocket colorimeter for field chlorine and color analysis." },
    { name: "Portable Chlorine Colorimeter", description: "Dedicated portable colorimeter for chlorine testing in water systems." },
    { name: "Portable Color & Turbidity Meter", description: "Multi-parameter portable meter for color and turbidity measurements." },
  ],
  "Testing Kits & Reagents": [
    { name: "Color Measurement Cuvettes", description: "Optical cuvettes for colorimeter measurements." },
    { name: "Reagent Tablets (Chlorine, pH, Iron, etc.)", description: "Chemical reagent tablets for colorimetric water testing." },
    { name: "Color Standard Solutions", description: "Calibration standards for colorimeter verification." },
  ],
};

export default function Colorimeters() {
  return (
    <ProductCategoryTemplate
      title="Colorimeters - Spectral Analysis Lab Equipment Kenya"
      h1="Colorimeters & Photometers"
      description="Portable and benchtop colorimeters for water testing, chemical analysis, and quality control applications."
      metaDescription="Portable and benchtop colorimeters for water testing, chemical analysis, and quality control applications."
      keywords={["colorimeter", "spectral analysis", "photometer", "water testing"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Colorimeters", url: "/colorimeters" },
      ]}
      productCategories={coloriMeterProducts}
      sections={[
        {
          type: "description",
          title: "About Colorimeters",
          content: "Colorimeters measure the intensity and wavelength of light transmitted through or reflected from a sample. They are essential for water quality testing, particularly for chlorine residual, color assessment, and chemical parameter analysis. Colorimeters work with reagent tablets that create color changes proportional to analyte concentration.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Chlorine residual testing" },
            { name: "Water color and turbidity" },
            { name: "Chemical concentration measurement" },
            { name: "Quality control in food & beverage" },
            { name: "Environmental water monitoring" },
            { name: "Laboratory analysis" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "Simple, quick color-based testing" },
            { name: "Portable options for field use" },
            { name: "High accuracy (±3-5% typically)" },
            { name: "Reagent tablets reduce chemical waste" },
            { name: "Portable models require no power" },
          ],
        },
        {
          type: "brands",
          title: "Available Brands",
          items: [
            { name: "HACH", link: "/hach" },
            { name: "Hanna Instruments", link: "/hanna-instruments" },
            { name: "Palintest (via our Palintest page)", link: "/palintest" },
          ],
        },
      ]}
      relatedLinks={[
        { label: "Water Analysis Equipment", url: "/water" },
        { label: "Spectrophotometers", url: "/spectrophotometers" },
        { label: "Quality Control", url: "/qualitycontrol" },
        { label: "Laboratory Equipment", url: "/labequipment" },
      ]}
      faqs={[
        {
          question: "What's the difference between a colorimeter and spectrophotometer?",
          answer: "Colorimeters use fixed wavelengths and color-based testing with reagents. Spectrophotometers scan across a spectrum for precise absorbance measurement. Colorimeters are simpler and more portable.",
        },
        {
          question: "How do colorimeter reagent tablets work?",
          answer: "Tablets contain chemical reagents that react with the target analyte to produce a color change. The color intensity is proportional to concentration, which the colorimeter measures.",
        },
        {
          question: "How often should I calibrate my colorimeter?",
          answer: "Check calibration weekly with color standards. Full calibration monthly is recommended. We offer professional calibration services.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

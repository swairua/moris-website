import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const microscopeProducts = {
  "Optical Microscopes": [
    { name: "Monocular Light Microscope (40x-1000x)", description: "Basic monocular microscope for educational and routine laboratory work." },
    { name: "Binocular Light Microscope (40x-1000x)", description: "Ergonomic binocular microscope for extended observation sessions." },
    { name: "Trinocular Microscope with Camera Port", description: "Professional trinocular microscope with camera adapter for documentation." },
  ],
  "Digital Microscopes": [
    { name: "USB Digital Microscope (1080p)", description: "Portable digital microscope with USB connection for computer imaging." },
    { name: "Digital Microscope with LCD Screen", description: "Standalone digital microscope with built-in LCD display and storage." },
  ],
  "Specialized Microscopes": [
    { name: "Stereo Dissecting Microscope", description: "Low-magnification stereoscopic microscope for specimen dissection and examination." },
    { name: "Phase Contrast Microscope", description: "Phase contrast microscope for observing living cells and transparent specimens." },
  ],
};

export default function Microscopes() {
  return (
    <ProductCategoryTemplate
      title="Microscopes - Light & Digital Microscopes Kenya"
      h1="Microscopes & Imaging Systems"
      description="Optical microscopes, digital microscopes, and imaging systems for laboratory and educational use. Professional-grade instruments."
      metaDescription="Optical microscopes, digital microscopes, and imaging systems for laboratory and educational use. Professional-grade instruments."
      keywords={["microscope", "optical microscope", "digital microscope", "laboratory", "imaging"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Microscopes", url: "/microscopes" },
      ]}
      productCategories={microscopeProducts}
      sections={[
        {
          type: "description",
          title: "About Microscopes",
          content: "Microscopes are fundamental instruments for observing specimens at magnification levels invisible to the naked eye. They are essential in microbiology, pathology, materials science, and education. Modern microscopes combine precision optics with digital imaging, allowing both visual observation and electronic documentation of findings.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Microbiology & bacteria identification" },
            { name: "Pathology & medical diagnostics" },
            { name: "Educational & research use" },
            { name: "Material & surface analysis" },
            { name: "Quality control inspection" },
            { name: "Archaeological specimen examination" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "High magnification (up to 1000x or higher)" },
            { name: "Clear, high-contrast imaging" },
            { name: "Digital capture and storage" },
            { name: "Durable optics for years of use" },
            { name: "Easy-to-use controls" },
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
        { label: "Microbiology Equipment", url: "/microbiology" },
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Medical Equipment", url: "/medical" },
        { label: "Quality Control", url: "/qualitycontrol" },
      ]}
      faqs={[
        {
          question: "What's the difference between monocular, binocular, and trinocular microscopes?",
          answer: "Monocular has one eyepiece, binocular has two (better depth perception and comfort), and trinocular has two eyepieces plus a camera port. Choose based on duration of use and documentation needs.",
        },
        {
          question: "What magnification should I choose?",
          answer: "Most applications use 40x-1000x magnification. Lower powers (40x-100x) for initial observation, higher powers for detailed analysis. Digital microscopes may have variable magnification.",
        },
        {
          question: "Can I attach a camera to my optical microscope?",
          answer: "Yes, if your microscope has a trinocular head or C-mount adapter. We offer compatible camera solutions for most models.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

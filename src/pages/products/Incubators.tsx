import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const incubatorProducts = {
  "Benchtop Incubators": [
    { name: "Small Benchtop Incubator (50L)", description: "Compact benchtop incubator for small-scale microbiology and cell culture." },
    { name: "Standard Benchtop Incubator (100L)", description: "Standard benchtop incubator with stable temperature control for routine applications." },
    { name: "Large Benchtop Incubator (150L)", description: "Larger benchtop incubator for high-volume culture applications." },
  ],
  "Specialized Incubators": [
    { name: "CO2 Incubator for Cell Culture", description: "Temperature and CO2-controlled incubator for mammalian cell culture." },
    { name: "Shaking Incubator", description: "Incubator with orbital or linear shaking for bacterial and cell suspension culture." },
  ],
  "Laboratory Ovens": [
    { name: "Drying Oven", description: "Precision oven for drying samples, media, and glassware at controlled temperatures." },
    { name: "Heating Oven", description: "Laboratory oven for sterilization and heating applications." },
  ],
};

export default function Incubators() {
  return (
    <ProductCategoryTemplate
      title="Incubators - Microbiology Culture Equipment Kenya"
      h1="Laboratory Incubators & Ovens"
      description="Laboratory incubators and culture ovens for microbiology, cell culture, and bacterial growth applications."
      metaDescription="Laboratory incubators and culture ovens for microbiology, cell culture, and bacterial growth applications."
      keywords={["incubator", "culture incubator", "microbiology", "bacterial growth"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Incubators", url: "/incubators" },
      ]}
      productCategories={incubatorProducts}
      sections={[
        {
          type: "description",
          title: "About Incubators",
          content: "Laboratory incubators provide precise environmental control (temperature, humidity, gas composition) for optimal growth of microorganisms and cells. They are essential in microbiology, cell biology, and pharmaceutical research. Modern incubators offer digital controls, alarms, and data logging capabilities for reliable and reproducible results.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Bacterial culture and growth" },
            { name: "Mammalian cell culture" },
            { name: "Fungal and yeast growth" },
            { name: "Sample incubation for diagnostics" },
            { name: "Anaerobic culture conditions" },
            { name: "Fermentation and biotechnology" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "Precise temperature stability (±1°C)" },
            { name: "Wide temperature range (ambient to 70°C)" },
            { name: "Optional CO2 and humidity control" },
            { name: "Stainless steel interior (easy cleaning)" },
            { name: "Digital display and data logging" },
          ],
        },
        {
          type: "brands",
          title: "Available Brands",
          items: [
            { name: "Memmert", link: "/memmert" },
            { name: "Hanna Instruments", link: "/hanna-instruments" },
            { name: "Thermo Fisher Scientific", link: "/thermo-fisher" },
          ],
        },
      ]}
      relatedLinks={[
        { label: "Microbiology Equipment", url: "/microbiology" },
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Medical Equipment", url: "/medical" },
        { label: "PCR Machines", url: "/pcr-machines" },
      ]}
      faqs={[
        {
          question: "What's the ideal temperature for bacterial culture?",
          answer: "Most bacteria grow optimally at 37°C (body temperature). However, some species prefer lower (25-30°C) or higher (50-65°C) temperatures. Check culture media requirements.",
        },
        {
          question: "Do I need a CO2 incubator for all cell culture?",
          answer: "CO2 incubators are essential for mammalian cell culture to maintain pH. Bacterial cultures typically don't require CO2 control.",
        },
        {
          question: "How often should I clean and maintain my incubator?",
          answer: "Regular cleaning (monthly) prevents contamination. We offer maintenance services and can perform sterility validation testing.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

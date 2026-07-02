import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const pcrProducts = {
  "Thermal Cyclers": [
    { name: "Standard Thermal Cycler 96-well", description: "Standard benchtop thermal cycler for PCR amplification with 96-well block capacity." },
    { name: "High-Speed Thermal Cycler", description: "Advanced thermal cycler with rapid ramp rates for faster PCR cycles." },
    { name: "Portable Mini Thermal Cycler", description: "Compact portable thermal cycler ideal for field work and small laboratories." },
  ],
  "Real-Time PCR Systems": [
    { name: "Real-Time qPCR System", description: "Quantitative PCR system with real-time monitoring and fluorescence detection." },
    { name: "Digital PCR System", description: "Advanced digital PCR for absolute quantification of nucleic acids." },
  ],
  "Accessories & Consumables": [
    { name: "PCR Tubes & Plates", description: "High-quality polypropylene PCR tubes and 96-well plates." },
    { name: "PCR Master Mix Reagents", description: "Optimized PCR master mixes for reliable DNA amplification." },
    { name: "Thermal Cycling Oil", description: "Mineral oil for improved heat transfer in thermal cyclers." },
  ],
};

export default function PCRMachines() {
  return (
    <ProductCategoryTemplate
      title="PCR Machines - DNA Amplification Equipment Kenya"
      h1="PCR Machines & Thermal Cyclers"
      description="Thermal cycler and PCR machines for DNA amplification and molecular biology. Suitable for universities, hospitals, and research laboratories."
      metaDescription="Thermal cycler and PCR machines for DNA amplification and molecular biology. Suitable for universities, hospitals, and research laboratories."
      keywords={["PCR machines", "thermal cycler", "DNA amplification", "molecular biology", "laboratory equipment"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "PCR Machines", url: "/pcr-machines" },
      ]}
      productCategories={pcrProducts}
      sections={[
        {
          type: "description",
          title: "About PCR & Thermal Cyclers",
          content: "Polymerase Chain Reaction (PCR) is a molecular biology technique that amplifies specific DNA sequences exponentially, making it possible to study genes and detect pathogens. Thermal cyclers (thermocyclers) are essential instruments that automate the repetitive temperature cycling required for PCR. They precisely control temperature changes through denaturation, annealing, and extension phases.",
        },
        {
          type: "applications",
          title: "Common Applications",
          items: [
            { name: "Gene expression analysis" },
            { name: "Pathogen detection & diagnostics" },
            { name: "DNA sequencing preparation" },
            { name: "Forensic DNA analysis" },
            { name: "Viral load quantification" },
            { name: "Quality control in biotech" },
          ],
        },
        {
          type: "benefits",
          title: "Benefits of Modern Thermal Cyclers",
          items: [
            { name: "Programmable temperature profiles" },
            { name: "Rapid heating/cooling cycles" },
            { name: "High temperature uniformity" },
            { name: "LCD display & intuitive controls" },
            { name: "Built-in safety features" },
          ],
        },
        {
          type: "brands",
          title: "Available Brands",
          items: [
            { name: "Hanna Instruments", link: "/hanna-instruments" },
            { name: "Thermo Fisher Scientific", link: "/thermo-fisher" },
            { name: "OHAUS", link: "/ohaus" },
          ],
        },
      ]}
      relatedLinks={[
        { label: "Microbiology Equipment", url: "/microbiology" },
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Incubators", url: "/incubators" },
        { label: "Medical Equipment", url: "/medical" },
      ]}
      faqs={[
        {
          question: "How many cycles does a typical PCR reaction require?",
          answer: "Most PCR reactions require 25-35 cycles, with each cycle consisting of three steps: denaturation (94-95°C), annealing (50-65°C), and extension (72°C). Total time is usually 1.5-2.5 hours.",
        },
        {
          question: "What's the difference between standard PCR and real-time qPCR?",
          answer: "Standard PCR only detects the final product. Real-time qPCR monitors amplification in real-time using fluorescent probes, allowing quantification of DNA amount and detection of intermediate cycles.",
        },
        {
          question: "Can I use different well plate configurations on a single thermal cycler?",
          answer: "Some thermal cyclers support multiple block types (96-well, 384-well). Verify compatibility with your device before purchase. We offer various block configurations.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

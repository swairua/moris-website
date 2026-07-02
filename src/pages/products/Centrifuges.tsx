import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const centrifugeProducts = {
  "Microcentrifuges": [
    { name: "Benchtop Microcentrifuge 12,000 rpm", description: "Compact microcentrifuge for small sample volumes and routine use." },
    { name: "High-Speed Microcentrifuge 14,000 rpm", description: "Advanced microcentrifuge with improved separation efficiency." },
  ],
  "Clinical Centrifuges": [
    { name: "Benchtop Clinical Centrifuge 3,000 rpm", description: "Standard clinical centrifuge for blood and serum separation." },
    { name: "Low-Speed Clinical Centrifuge 2,500 rpm", description: "Low-speed centrifuge for cell and tissue separation." },
  ],
  "High-Speed Centrifuges": [
    { name: "Ultracentrifuge 25,000 rpm", description: "High-speed ultracentrifuge for advanced separation techniques." },
    { name: "Refrigerated Centrifuge 16,000 rpm", description: "Temperature-controlled centrifuge for heat-sensitive samples." },
  ],
};

export default function Centrifuges() {
  return (
    <ProductCategoryTemplate
      title="Centrifuges - Laboratory Centrifugation Equipment"
      h1="Centrifuges for Sample Preparation"
      description="Microcentrifuges, clinical centrifuges, and high-speed centrifuges for sample separation and preparation in laboratories."
      metaDescription="Microcentrifuges, clinical centrifuges, and high-speed centrifuges for sample separation and preparation in laboratories."
      keywords={["centrifuge", "microcentrifuge", "laboratory centrifuge", "sample separation"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Centrifuges", url: "/centrifuges" },
      ]}
      productCategories={centrifugeProducts}
      sections={[
        {
          type: "description",
          title: "About Centrifuges",
          content: "Centrifuges use centrifugal force to separate substances of different densities. They are essential for sample preparation in clinical diagnostics, research, and quality control. High-speed rotation applies centrifugal force, causing denser particles to settle to the bottom while lighter components remain at the top.",
        },
        {
          type: "applications",
          title: "Applications",
          items: [
            { name: "Blood and serum separation" },
            { name: "Cell separation and washing" },
            { name: "DNA/RNA isolation" },
            { name: "Protein precipitation" },
            { name: "Particle removal from liquids" },
            { name: "Research and diagnostics" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "Efficient separation with minimal time" },
            { name: "Wide range of speeds (1,000-25,000+ rpm)" },
            { name: "Temperature control available (refrigerated)" },
            { name: "Durable rotors for repeated use" },
            { name: "Compact design saves space" },
          ],
        },
        {
          type: "brands",
          title: "Available Brands",
          items: [
            { name: "OHAUS", link: "/ohaus" },
            { name: "Hanna Instruments", link: "/hanna-instruments" },
            { name: "Thermo Fisher Scientific", link: "/thermo-fisher" },
          ],
        },
      ]}
      relatedLinks={[
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Medical Equipment", url: "/medical" },
        { label: "Microbiology Equipment", url: "/microbiology" },
        { label: "Quality Control", url: "/qualitycontrol" },
      ]}
      faqs={[
        {
          question: "What speed centrifuge do I need for my application?",
          answer: "Microcentrifuges (10,000-15,000 rpm) for small samples, clinical centrifuges (3,000-6,000 rpm) for blood work, and ultracentrifuges (25,000+ rpm) for specialized separation. Consult protocol requirements.",
        },
        {
          question: "Is a refrigerated centrifuge necessary?",
          answer: "Refrigerated centrifuges preserve heat-sensitive samples (proteins, enzymes, cells). Standard centrifuges work for most applications but generate heat during operation.",
        },
        {
          question: "How do I maintain my centrifuge for longevity?",
          answer: "Regular rotor inspection, proper loading (balanced buckets), and adherence to maximum speed limits extend centrifuge life. We offer maintenance and calibration services.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

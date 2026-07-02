import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const balanceProducts = {
  "Analytical Balances": [
    { name: "OHAUS Analytical Balance (0.0001g precision)", description: "High-precision analytical balance with 0.1mg readability for accurate weighing." },
    { name: "Semi-Micro Balance (0.001g precision)", description: "Semi-micro balance for weighing small samples with excellent accuracy." },
    { name: "Precision Balance (0.01g precision)", description: "Precision balance suitable for most laboratory weighing applications." },
  ],
  "Portable Laboratory Scales": [
    { name: "Portable Digital Scale (0.1g precision)", description: "Compact digital scale ideal for field work and portable laboratories." },
    { name: "Portable Precision Balance", description: "Rugged portable balance for harsh environments and fieldwork." },
  ],
  "Accessories": [
    { name: "Weighing Boats & Papers", description: "Disposable weighing vessels for accurate sample measurement." },
    { name: "Balance Calibration Weights", description: "Certified calibration weights for balance verification and maintenance." },
    { name: "Balance Draft Shields", description: "Protective enclosures to minimize air currents and improve accuracy." },
  ],
};

export default function AnalyticalBalances() {
  return (
    <ProductCategoryTemplate
      title="Analytical Balances - Precision Weighing Kenya"
      h1="Analytical & Precision Balances"
      description="High-precision analytical balances and laboratory scales for accurate weighing in pharmaceutical, chemical, and research laboratories."
      metaDescription="High-precision analytical balances and laboratory scales for accurate weighing in pharmaceutical, chemical, and research laboratories."
      keywords={["analytical balance", "precision balance", "laboratory scale", "weighing"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Analytical Balances", url: "/analytical-balances" },
      ]}
      productCategories={balanceProducts}
      sections={[
        {
          type: "description",
          title: "About Analytical Balances",
          content: "Analytical balances are precision instruments essential for accurate weighing in pharmaceutical, chemical, and research laboratories. They measure mass to high precision (typically 0.1mg or better) using electromagnetic force restoration technology. Proper use and maintenance are critical for reliable results in quality control, formulation, and research applications.",
        },
        {
          type: "applications",
          title: "Common Uses",
          items: [
            { name: "Pharmaceutical formulation & QA" },
            { name: "Chemical reagent preparation" },
            { name: "Research sample weighing" },
            { name: "Food and beverage testing" },
            { name: "Precious metal weighing" },
            { name: "Laboratory protocol compliance" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "High precision (0.1mg to 0.01mg)" },
            { name: "Stable readings in seconds" },
            { name: "Internal and external calibration" },
            { name: "Digital display with tare function" },
            { name: "Durable construction for years of use" },
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
        { label: "Quality Control", url: "/qualitycontrol" },
        { label: "Chemical Reagents", url: "/chemicals" },
        { label: "Laboratory Installation", url: "/laboratory-installation" },
      ]}
      faqs={[
        {
          question: "What's the difference between analytical, semi-micro, and precision balances?",
          answer: "Analytical balances have 0.1mg readability, semi-micro have 0.001g, and precision balances have 0.01g. Choose based on sample size and required accuracy.",
        },
        {
          question: "How often should I calibrate my analytical balance?",
          answer: "Daily calibration before use is recommended for accurate results. We provide professional calibration and certification services.",
        },
        {
          question: "Why are my balance readings inconsistent?",
          answer: "Common causes: air drafts, improper sample placement, dirty pan, or out-of-calibration status. Use a draft shield and ensure the balance sits on a stable surface.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

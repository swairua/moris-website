import { ProductCategoryTemplate } from "../templates/ProductCategoryTemplate";

const autoclaveProd = {
  "Benchtop Autoclaves": [
    { name: "18L Benchtop Steam Sterilizer", description: "Compact benchtop autoclave for small laboratory and dental office use." },
    { name: "24L Benchtop Autoclave", description: "Mid-size benchtop autoclave with larger capacity for standard laboratory needs." },
    { name: "35L Benchtop High-Pressure Autoclave", description: "Professional-grade benchtop autoclave with enhanced sterilization performance." },
  ],
  "Floor-Standing Autoclaves": [
    { name: "50L Vertical Autoclave", description: "Floor-standing autoclave for hospitals and large laboratories." },
    { name: "75L Horizontal Autoclave", description: "High-capacity horizontal autoclave for bulk sterilization." },
  ],
  "Accessories & Supplies": [
    { name: "Sterilization Indicator Tape", description: "Chemical indicator tape for visual confirmation of sterilization." },
    { name: "Sterilization Bags & Pouches", description: "Specialized bags for steam sterilization of medical instruments." },
    { name: "Autoclave Baskets & Trays", description: "Stainless steel baskets for organizing items during sterilization." },
  ],
};

export default function Autoclaves() {
  return (
    <ProductCategoryTemplate
      title="Autoclaves - Sterilization Equipment for Labs Kenya"
      h1="Autoclaves & Sterilizers"
      description="Benchtop and laboratory autoclaves for steam sterilization of medical instruments, laboratory glassware, and media."
      metaDescription="Benchtop and laboratory autoclaves for steam sterilization of medical instruments, laboratory glassware, and media."
      keywords={["autoclave", "sterilization", "steam sterilizer", "laboratory equipment"]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Equipment", url: "#" },
        { name: "Autoclaves", url: "/autoclaves" },
      ]}
      productCategories={autoclaveProd}
      sections={[
        {
          type: "description",
          title: "About Autoclaves",
          content: "Autoclaves are essential sterilization equipment that use high-pressure steam to eliminate microorganisms from instruments, glassware, and media. They are critical in medical facilities, laboratories, and research institutions to prevent cross-contamination and ensure safety. Steam sterilization at 121°C and 15+ psi effectively destroys bacteria, viruses, and spores.",
        },
        {
          type: "applications",
          title: "Common Uses",
          items: [
            { name: "Medical instrument sterilization" },
            { name: "Laboratory glassware sterilization" },
            { name: "Culture media sterilization" },
            { name: "Surgical tool preparation" },
            { name: "Waste decontamination" },
            { name: "Biosafety compliance" },
          ],
        },
        {
          type: "benefits",
          title: "Key Benefits",
          items: [
            { name: "Effective against all microorganisms" },
            { name: "Rapid sterilization cycles (15-30 minutes)" },
            { name: "Safe for most materials (metal, glass, plastics)" },
            { name: "Environmentally friendly method" },
            { name: "Cost-effective sterilization solution" },
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
        { label: "Safety Products", url: "/safety" },
        { label: "Laboratory Equipment", url: "/labequipment" },
        { label: "Medical Equipment", url: "/medical" },
        { label: "Laboratory Installation", url: "/laboratory-installation" },
      ]}
      faqs={[
        {
          question: "What temperature and pressure are used in steam sterilization?",
          answer: "Standard steam sterilization occurs at 121°C (250°F) and 15 psi (100 kPa) for 15-30 minutes, depending on load size and density. Some autoclaves operate at higher temperatures (132°C) for faster cycles.",
        },
        {
          question: "How do I know if my autoclave is working properly?",
          answer: "Use chemical indicator strips or spore tests regularly. We provide calibration services and can perform validation testing to ensure your autoclave meets sterilization standards.",
        },
        {
          question: "Can all materials be autoclaved?",
          answer: "Most metals, glass, and certain plastics withstand autoclaving. Avoid plastics with low melting points, rubber items, and paper products unless specifically designed for autoclaving.",
        },
      ]}
      cta="Request a Quotation"
    />
  );
}

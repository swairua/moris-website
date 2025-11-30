import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const productCategories = {
  "Vials & Caps": [
    "2 ML Screw Top Vials ND9 (9-425) with Screw Caps",
    "Micro Insert",
    "1mL Shell Vial with Microvials PE Plug",
    "Headspace vials & caps",
    "EPA VOC TOC vials & caps",
    "COD vials & caps",
    "PFAS suitable vials",
  ],
  "Filtration Products": [
    "Syringe filters (25mm, 47mm)",
    "0.22μm syringe filters",
    "0.45μm syringe filters",
    "PTFE Hydrophilic Syringe Filter",
    "PTFE Hydrophobic Syringe Filter",
    "Nylon Syringe Filter",
    "MCE Syringe Filter",
    "PES (Polyethersulfone) Syringe Filter Sterile",
    "PVDF Hydrophilic Syringe Filter",
    "Syringeless Filter Vial Captiva Filter Vials",
    "Filter membrane",
    "Vacuum Filter",
  ],
  "Sample Preparation": [
    "SPE column (Solid Phase Extraction)",
    "SPE Cartridge",
    "Micro-Insert",
    "Autosampler Vials Cap & Septa",
    "Turbidimeter Sample Cell Vials (20 mL, 30 mL)",
  ],
  "Laboratory Consumables": [
    "Serological pipettes",
    "Pipette Tips",
    "Rainin tips",
    "Gel Loading Tips",
    "Petri dish",
    "Inoculation loop",
    "Cell Strainer & Spreader & Scraper",
    "Centrifuge Tubes & Bottles",
    "ELISA Plate & Deep Well Plate",
    "PCR Tubes & Strips & Plate",
  ],
};

const openWhatsApp = (productName: string) => {
  const phoneNumber = "254733137332";
  const message = encodeURIComponent(
    `Hello! I'm interested in getting a quotation for: ${productName}. Please provide details and pricing.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const ChromatographyConsumables = () => {
  usePageMeta({
    title: "Chromatography & Analytical Consumables | Vials, Filters, SPE Columns Kenya",
    description: "Premium chromatography and analytical laboratory consumables including vials, syringe filters, SPE columns, autosampler vials, and sample preparation products for GC, LC, and analytical testing.",
    keywords: "chromatography consumables, vials, syringe filters, SPE column, autosampler vials, laboratory consumables, analytical supplies, Kenya",
    type: "article",
    canonical: "https://morisenterprises.com/products/chromatography-consumables",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Chromatography & Analytical", url: "/products/chromatography-consumables" },
    ],
  });

  return (
    <ProductPageLayout
      title="Chromatography &amp; Analytical Consumables"
      description="Complete range of chromatography and analytical consumables for GC, LC, and other separation techniques including vials, filters, sample preparation columns, and laboratory supplies."
    >
      {/* Product Categories */}
      <div className="space-y-12">
        {Object.entries(productCategories).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    High-quality chromatography products for accurate analytical results.
                  </p>
                  <Button
                    onClick={() => openWhatsApp(product)}
                    className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Quote via WhatsApp
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Description */}
      <div className="mt-16 prose prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Professional Chromatography & Analytical Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We supply the highest quality chromatography and analytical consumables for laboratory professionals. Our products are essential for accurate results in gas chromatography (GC), liquid chromatography (LC), and other analytical techniques.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Product Range Includes:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>Vials & Caps:</strong> Standard and specialty vials for headspace, VOC, COD, and PFAS analysis</li>
          <li><strong>Syringe Filters:</strong> Multiple materials (PTFE, Nylon, MCE, PES, PVDF) for different applications</li>
          <li><strong>Sample Preparation:</strong> SPE columns, cartridges, and micro-inserts for sample extraction</li>
          <li><strong>Autosampler Products:</strong> Vials, caps, and septa for automated sample analysis</li>
          <li><strong>Filtration Systems:</strong> Complete vacuum filtration setups and filter membranes</li>
          <li><strong>Laboratory Consumables:</strong> Pipette tips, petri dishes, centrifuge tubes, PCR plates</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Product Specifications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ Pharmaceutical grade quality</li>
          <li>✓ Compatible with all major analytical instruments</li>
          <li>✓ Pre-sterilized and ready-to-use options available</li>
          <li>✓ Multiple filter materials for different analytes</li>
          <li>✓ Consistent performance and batch quality</li>
          <li>✓ EPA, USP, and international compliance</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Applications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>Environmental analysis and monitoring</li>
          <li>Water quality testing (VOC, COD, PFAS)</li>
          <li>Pharmaceutical and drug testing</li>
          <li>Food and beverage analysis</li>
          <li>Clinical and biomedical research</li>
          <li>Industrial quality control</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default ChromatographyConsumables;

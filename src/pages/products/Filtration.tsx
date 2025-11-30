import { ProductPageLayout } from "@/components/ProductPageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { openProductQuotation } from "@/lib/whatsapp";

const productCategories = {
  "Filter Papers & Materials": [
    "Chemical Analysis Filter Paper",
    "Glass Microfiber Filters",
    "Filter papers - all grades and brands",
    "pH Indicator Paper",
    "Test Strips kits",
    "Washable Artificial Leather Paper",
    "Thimble Filters",
    "Cellulose Extraction Thimbles",
  ],
  "Syringe Filtration": [
    "Syringe Filters (multiple sizes)",
    "PTFE Hydrophilic Filters",
    "PTFE Hydrophobic Filters",
    "Nylon Syringe Filters",
    "MCE Syringe Filters",
    "PES (Polyethersulfone) Syringe Filters",
    "PVDF Hydrophilic Filters",
  ],
  "Membrane Filters": [
    "Membrane filters (multiple types)",
    "Filter membranes",
    "Nucleopore membranes",
    "Nylon membranes",
    "Cellulose acetate membranes",
  ],
  "Filtration Systems": [
    "Vacuum pump (oil-free)",
    "Stainless steel Manifold set (3 branch)",
    "Stainless steel Manifold set (6 branch)",
    "Vacuum filtration apparatus",
    "SPE Cartridge systems",
    "Bottle-Top-Dispensers",
    "QuEChERS filtration kits",
  ],
  "Sample Preparation": [
    "Cuvettes",
    "SPE Cartridge",
    "Filter Bags",
    "Filter Capsules",
    "Glass Distiller Reactor",
    "Handheld Crimper & Decappers",
  ],
  "Specialized Filtration": [
    "Respirators",
    "Vial & caps & septa",
    "ELISA Plate",
  ],
};


const Filtration = () => {
  usePageMeta({
    title: "Filtration Products & Materials | Syringe Filters, Membranes, SPE Columns Kenya",
    description: "Complete filtration solutions including syringe filters, membrane filters, filter papers, vacuum filtration systems, and sample preparation products for analytical and laboratory applications.",
    keywords: "filtration, syringe filters, membrane filters, filter papers, vacuum filtration, SPE columns, sample preparation, Kenya",
    type: "article",
    canonical: "https://morisenterprises.com/products/filtration",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/#services" },
      { name: "Filtration", url: "/products/filtration" },
    ],
  });

  return (
    <ProductPageLayout
      title="Filtration Products &amp; Systems"
      description="Comprehensive filtration solutions for analytical chemistry, sample preparation, and laboratory applications including syringe filters, membranes, filter papers, and complete vacuum filtration systems."
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
                    High-quality filtration products for accurate sample preparation and analysis.
                  </p>
                  <Button
                    onClick={() => openProductQuotation(product)}
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
          Professional Filtration Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Moris Enterprises supplies complete filtration products and systems for analytical chemistry, environmental testing, pharmaceutical quality control, and research laboratories. Our extensive product range covers syringe filtration, vacuum filtration, membrane separation, and sample preparation.
        </p>
        
        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Our Product Range Includes:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>Syringe Filters:</strong> Multiple materials (PTFE, Nylon, MCE, PES, PVDF) for different analytes and applications</li>
          <li><strong>Membrane Filters:</strong> Polycarbonate, nylon, cellulose acetate, and specialty membranes</li>
          <li><strong>Filter Papers:</strong> Chemical analysis papers, glass microfiber, and specialty grades</li>
          <li><strong>Vacuum Filtration Systems:</strong> Complete setups with oil-free pumps and manifolds</li>
          <li><strong>SPE & Sample Prep:</strong> Solid phase extraction cartridges and QuEChERS kits</li>
          <li><strong>Specialized Products:</strong> Cuvettes, filter bags, capsules, and laboratory consumables</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Filter Material Selection Guide:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li><strong>PTFE:</strong> Hydrophobic for organic solvents, hydrophilic for aqueous solutions</li>
          <li><strong>Nylon:</strong> Excellent for aqueous samples, solvent resistant</li>
          <li><strong>MCE:</strong> For microbiological applications and particle removal</li>
          <li><strong>PES:</strong> High flow rates, low protein binding</li>
          <li><strong>PVDF:</strong> Chemical resistant, suitable for aggressive solvents</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Applications:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>High-performance liquid chromatography (HPLC) sample preparation</li>
          <li>Gas chromatography (GC) sample filtration</li>
          <li>Environmental water and soil testing</li>
          <li>Pharmaceutical quality control and testing</li>
          <li>Food and beverage analysis</li>
          <li>Microbiological analysis and sterilization</li>
          <li>Clinical laboratory diagnostics</li>
          <li>Industrial process water testing</li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-foreground mt-6 mb-3">
          Quality Assurance:
        </h3>
        <ul className="text-muted-foreground space-y-2">
          <li>✓ ISO 9001 certified manufacturing</li>
          <li>✓ Pharmaceutical grade purity</li>
          <li>✓ Low extractables and low protein binding</li>
          <li>✓ Sterile options available</li>
          <li>✓ Consistent batch-to-batch performance</li>
          <li>✓ Compatible with all major analytical instruments</li>
        </ul>
      </div>
    </ProductPageLayout>
  );
};

export default Filtration;

import { usePageMeta } from "@/hooks/use-page-meta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Beaker, Clock, TrendingUp, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { openProductQuotation } from "@/lib/whatsapp";

const testCategories = {
  "Disinfection & Oxidation": [
    { name: "DPD1 Free Chlorine Tests", range: "0-5 mg/L Cl2", count: "250 tests", method: "Photometric DPD1" },
    { name: "DPD3 Total Chlorine Tests", range: "0-5 mg/L Cl2", count: "250 tests", method: "Photometric DPD3" },
    { name: "DPD1&DPD3 Combined Tests", range: "0-5 mg/L Cl2", count: "250 tests", method: "Dual method" },
    { name: "DPD Extended Range Tests", range: "0-10 mg/L Cl2", count: "250 tests", method: "Extended range" },
    { name: "High Range Chlorine Tests", range: "0-250 mg/L Cl2", count: "250 tests", method: "Industrial use" },
    { name: "Ozone Tests", range: "0-3 mg/L O3", count: "250 tests", method: "Photometric" },
    { name: "Bromine Tests", range: "0-10 mg/L Br2", count: "250 tests", method: "Photometric" },
  ],
  "Nutrient Parameters": [
    { name: "Ammonia Tests", range: "0-1.0 mg/L N", count: "250 tests", method: "Photometric" },
    { name: "Nitrate Tests (Nitratest)", range: "0-20 mg/L NO3", count: "200 tests", method: "Photometric" },
    { name: "Nitrite Tests (Nitricol)", range: "0-5 mg/L NO2", count: "250 tests", method: "Photometric" },
    { name: "Phosphate Tests (Low Range)", range: "0-4 mg/L PO4", count: "200 tests", method: "Photometric" },
  ],
  "Hardness & Alkalinity": [
    { name: "Total Hardness Tests", range: "0-500 mg/L CaCO3", count: "250 tests", method: "Photometric" },
    { name: "Calcium Hardness Tests", range: "0-500 mg/L CaCO3", count: "250 tests", method: "Photometric" },
    { name: "Total Alkalinity Tests", range: "0-500 mg/L CaCO3", count: "250 tests", method: "AlkaPhot" },
    { name: "Magnesium Tests (Magnecol)", range: "0-100 mg/L Mg", count: "250 tests", method: "Photometric" },
  ],
  "Heavy Metals & Trace Elements": [
    { name: "Iron Low Range", range: "0-1 mg/L Fe", count: "250 tests", method: "Photometric" },
    { name: "Iron Mid Range", range: "0-5 mg/L Fe", count: "250 tests", method: "Photometric" },
    { name: "Iron High Range", range: "0-10 mg/L Fe", count: "250 tests", method: "Photometric" },
    { name: "Manganese Tests (Low)", range: "0-0.03 mg/L Mn", count: "250 tests", method: "Photometric" },
    { name: "Manganese Tests (High)", range: "0-5 mg/L Mn", count: "250 tests", method: "Photometric" },
    { name: "Copper Tests (Total)", range: "0-5 mg/L Cu", count: "250 tests", method: "Coppercol" },
    { name: "Copper Tests (Free)", range: "0-5 mg/L Cu", count: "250 tests", method: "Free copper" },
    { name: "Zinc Tests", range: "0-4 mg/L Zn", count: "250 tests", method: "Photometric" },
    { name: "Aluminium Tests", range: "0-0.5 mg/L Al", count: "250 tests", method: "Photometric" },
    { name: "Nickel Tests", range: "0-10 mg/L Ni", count: "200 tests", method: "Nickeltest" },
  ],
  "pH & Stability": [
    { name: "pH Tests (Phenol Red)", range: "pH 6.8-8.4", count: "250 tests", method: "Phenol Red" },
    { name: "Cyanuric Acid (Stabilizer)", range: "0-200 mg/L CNA", count: "250 tests", method: "Photometric" },
  ],
  "Other Parameters": [
    { name: "Hydrogen Peroxide (Low)", range: "0-2 mg/L H2O2", count: "250 tests", method: "Photometric" },
    { name: "Hydrogen Peroxide (High)", range: "0-100 mg/L H2O2", count: "250 tests", method: "Photometric" },
    { name: "Fluoride Tests", range: "0-1.5 mg/L F", count: "200 tests", method: "Photometric" },
    { name: "Chloride Tests", range: "0-50,000 mg/L NaCl", count: "250 tests", method: "Photometric" },
    { name: "Sulfate Tests", range: "0-200 mg/L SO4", count: "250 tests", method: "Photometric" },
    { name: "Urea Tests", range: "0-5 mg/L Urea", count: "250 tests", method: "Photometric" },
  ],
};

const TabletTests = () => {
  const navigate = useNavigate();

  usePageMeta({
    title: "Palintest Tablet Tests Kenya — 40+ Water Quality Parameters | DPD, Nutrient, Metals",
    description: "Complete range of Palintest tablet tests for water analysis. 40+ parameters including DPD chlorine tests, COD, heavy metals, nutrients, hardness. Fast results, 250-test packs. Kenya distributor.",
    keywords: "Palintest tablet tests, DPD chlorine test, water test tablets Kenya, Palintest tests, buy tablet tests Kenya, water quality parameters",
    type: "article",
    canonical: "https://morisentreprises.com/palintest/tablet-tests",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Palintest", url: "/palintest" },
      { name: "Tablet Tests", url: "/palintest/tablet-tests" },
    ],
    author: "Moris Entreprises Laboratory Equipment Team",
    publishedDate: "2024-01-22",
    modifiedDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    const tabletTestsSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Palintest Tablet Tests Complete Guide — 40+ Water Quality Parameters",
      "description": "Comprehensive guide to Palintest tablet tests covering chlorine, nutrients, metals, hardness, and pH testing",
      "url": "https://morisentreprises.com/palintest/tablet-tests",
      "author": {
        "@type": "Organization",
        "name": "Moris Entreprises Laboratory Equipment Team"
      },
      "datePublished": "2024-01-22",
      "dateModified": new Date().toISOString().split("T")[0],
      "image": "https://morisentreprises.com/palintest-tablets.jpg"
    };

    let script = document.querySelector("script[data-tablet-tests]");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-tablet-tests", "");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(tabletTestsSchema);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate("/palintest")}
          className="flex items-center text-primary hover:text-primary-dark font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Palintest Products
        </button>
        <h1 className="text-4xl font-display font-bold text-foreground mb-3">
          Palintest Tablet Tests — 40+ Water Quality Parameters
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Palintest tablet tests offer fast, accurate water quality analysis with 40+ individual parameters. From chlorine and pH to heavy metals and nutrients, our complete tablet test range provides professional testing solutions for utilities, laboratories, and facilities across Kenya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 bg-white border-t-4 border-primary">
            <Beaker className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-semibold text-sm mb-1">40+ Parameters</h3>
            <p className="text-xs text-muted-foreground">Comprehensive testing coverage</p>
          </Card>
          <Card className="p-4 bg-white border-t-4 border-blue-500">
            <Clock className="h-6 w-6 text-blue-500 mb-2" />
            <h3 className="font-semibold text-sm mb-1">1-10 Minutes</h3>
            <p className="text-xs text-muted-foreground">Rapid results for fast decisions</p>
          </Card>
          <Card className="p-4 bg-white border-t-4 border-green-500">
            <TrendingUp className="h-6 w-6 text-green-500 mb-2" />
            <h3 className="font-semibold text-sm mb-1">250+ Tests/Pack</h3>
            <p className="text-xs text-muted-foreground">Cost-effective bulk testing</p>
          </Card>
          <Card className="p-4 bg-white border-t-4 border-orange-500">
            <MessageCircle className="h-6 w-6 text-orange-500 mb-2" />
            <h3 className="font-semibold text-sm mb-1">24/7 Support</h3>
            <p className="text-xs text-muted-foreground">Quick WhatsApp assistance</p>
          </Card>
        </div>

        {Object.entries(testCategories).map(([category, items]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((test, idx) => (
                <Card key={idx} className="p-4 hover:shadow-md transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-2">{test.name}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <span className="text-muted-foreground">Range:</span>
                      <p className="font-medium">{test.range}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tests:</span>
                      <p className="font-medium">{test.count}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Method: {test.method}</p>
                  <Button
                    onClick={() => openProductQuotation(test.name)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
                    size="sm"
                  >
                    <MessageCircle className="mr-2 h-3 w-3" />
                    Request Quotation
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Understanding Palintest Tablet Test Methods
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">DPD Method (Chlorine Testing)</h3>
              <p className="text-muted-foreground">
                DPD (N,N-diethyl-p-phenylenediamine) is the standard photometric method for chlorine testing. DPD1 measures free chlorine, DPD3 measures total chlorine (free + combined). We stock DPD tests in ranges from 0-5 mg/L up to 0-250 mg/L for various applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Heavy Metal Testing</h3>
              <p className="text-muted-foreground">
                Palintest tablets detect iron, manganese, copper, zinc, aluminium, and nickel in multiple concentration ranges. Essential for detecting contamination in drinking water, industrial water, and effluent streams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Nutrient Parameter Testing</h3>
              <p className="text-muted-foreground">
                Test for nitrogen compounds (ammonia, nitrate, nitrite) and phosphate to assess nutrient levels and eutrophication risk in water bodies. Critical for environmental monitoring and wastewater treatment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Hardness & Alkalinity</h3>
              <p className="text-muted-foreground">
                Measure water hardness (calcium/magnesium) and alkalinity (buffering capacity) using photometric tablet tests. Essential for pool management, boiler water treatment, and drinking water quality assessment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 rounded-xl p-8 border border-primary/20 mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Testing Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Drinking Water</h3>
              <p className="text-sm text-muted-foreground">
                Chlorine residual verification, pH monitoring, metals testing for regulatory compliance
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Wastewater Treatment</h3>
              <p className="text-sm text-muted-foreground">
                COD analysis, nutrient monitoring, metals detection in effluent discharge
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Swimming Pools & Spas</h3>
              <p className="text-sm text-muted-foreground">
                Free/total chlorine, pH, cyanuric acid stabilizer monitoring for water safety
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Industrial Water</h3>
              <p className="text-sm text-muted-foreground">
                Boiler water treatment, cooling water monitoring, process quality control
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Environmental Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Surface water testing, nutrient assessment, metals contamination detection
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Food & Beverage</h3>
              <p className="text-sm text-muted-foreground">
                Water quality assurance, contamination screening, sanitation verification
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Get Your Tablet Tests Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Looking for specific Palintest tablet tests? We have the complete range in stock with competitive pricing and fast delivery across Kenya. Contact us via WhatsApp for quotations on single packs or bulk orders.
          </p>
          <Button
            onClick={() => openProductQuotation("Palintest Tablet Tests")}
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium text-lg px-8 py-6"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Request Quotation via WhatsApp
          </Button>
        </section>
      </div>
    </div>
  );
};

export default TabletTests;

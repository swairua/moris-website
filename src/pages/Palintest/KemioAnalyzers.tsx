import { usePageMeta } from "@/hooks/use-page-meta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Shield, Gauge, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { openProductQuotation } from "@/lib/whatsapp";

const kemioProducts = [
  {
    name: "Kemio Disinfection Analyzer",
    description: "Advanced portable analyzer for precise measurement of disinfection parameters in water treatment applications.",
    features: [
      "Peracetic acid measurement (PAA)",
      "Low and high range sensors available",
      "Rapid portable analysis",
      "Field-deployable technology"
    ],
    sensorPacks: [
      { name: "KEM21PAA - Peracetic Acid Sensors (100 pack)", range: "Standard range" },
      { name: "KEM21PAH - High Range PAA Sensors (100 pack)", range: "High temp, high range" },
      { name: "KEM21PAL - Low Range PAA Sensors (100 pack)", range: "Low range detection" }
    ]
  },
  {
    name: "Kemio Heavy Metal Analyzer",
    description: "Professional-grade portable analyzer for detecting and measuring heavy metals in water samples with rapid results.",
    features: [
      "Lead detection",
      "Copper measurement",
      "Iron detection",
      "Portable design for field testing"
    ],
    sensorPacks: [
      { name: "Kemio Heavy Metal Sensor Packs", range: "Lead, Copper, Iron" }
    ]
  }
];

const KemioAnalyzers = () => {
  const navigate = useNavigate();

  usePageMeta({
    title: "Kemio Analyzers Kenya — Water Testing Equipment | Disinfection & Heavy Metal Detection",
    description: "Professional Kemio Disinfection and Heavy Metal Analyzers. Peracetic acid testing, lead detection, copper measurement. Portable water quality analyzers for Kenya.",
    keywords: "Kemio analyzer, Kemio disinfection, heavy metal analyzer, peracetic acid testing, Palintest Kenya",
    type: "article",
    canonical: "https://morisentreprises.com/palintest/kemio-analyzers",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Palintest", url: "/palintest" },
      { name: "Kemio Analyzers", url: "/palintest/kemio-analyzers" },
    ],
    author: "Moris Entreprises Laboratory Equipment Team",
    publishedDate: "2024-01-25",
    modifiedDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    const kemioSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Kemio Portable Water Analyzers",
      "description": "Professional Kemio disinfection and heavy metal analyzers for water testing",
      "url": "https://morisentreprises.com/palintest/kemio-analyzers",
      "hasPart": [
        {
          "@type": "Product",
          "name": "Kemio Disinfection Analyzer",
          "description": "Portable analyzer for disinfection parameter measurement including peracetic acid",
          "brand": { "@type": "Brand", "name": "Palintest" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Kemio Heavy Metal Analyzer",
          "description": "Professional analyzer for heavy metal detection in water",
          "brand": { "@type": "Brand", "name": "Palintest" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    };

    let script = document.querySelector("script[data-kemio]");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-kemio", "");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(kemioSchema);
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
          Kemio Portable Water Analyzers
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Palintest Kemio analyzers provide rapid, portable testing for critical water parameters including disinfection chemicals and heavy metals. Ideal for drinking water utilities, treatment facilities, and environmental monitoring across Kenya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-white border-l-4 border-primary">
            <Zap className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">Rapid Results</h3>
            <p className="text-sm text-muted-foreground">
              Fast portable testing for quick decision-making in water treatment operations
            </p>
          </Card>
          <Card className="p-6 bg-white border-l-4 border-blue-500">
            <Gauge className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Precise Measurement</h3>
            <p className="text-sm text-muted-foreground">
              Accurate analysis for disinfection optimization and contamination detection
            </p>
          </Card>
          <Card className="p-6 bg-white border-l-4 border-green-500">
            <Shield className="h-8 w-8 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Professional Grade</h3>
            <p className="text-sm text-muted-foreground">
              Trusted by utilities and facilities for regulatory compliance
            </p>
          </Card>
        </div>

        {kemioProducts.map((product, idx) => (
          <section key={idx} className="mb-14">
            <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                {product.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start">
                      <Zap className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => openProductQuotation(product.name)}
                className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Request {product.name} Quotation
              </Button>
            </div>

            {product.sensorPacks.length > 0 && (
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Replacement Sensor Packs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.sensorPacks.map((sensor, sidx) => (
                    <Card key={sidx} className="p-6 hover:shadow-lg transition-all duration-300">
                      <h4 className="font-semibold text-foreground mb-2">{sensor.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{sensor.range}</p>
                      <Button
                        onClick={() => openProductQuotation(sensor.name)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium text-sm"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Request Quotation
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Kemio Technology & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Disinfection Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Kemio Disinfection Analyzer measures peracetic acid (PAA) and other disinfectants with high precision. Essential for water treatment facilities optimizing disinfection without overdosing, protecting water quality while ensuring safety.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Heavy Metal Detection</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Kemio Heavy Metal Analyzer rapidly detects contamination from lead, copper, iron, and other metals. Critical for identifying contamination sources and assessing drinking water safety in facilities across Kenya.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Portable Field Testing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Both Kemio analyzers are designed for field deployment, eliminating sample transportation delays. Get results on-site for rapid decision-making and operational adjustments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Sensor Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Replacement sensor packs available in multiple configurations ensure consistent testing capability. Each sensor pack contains multiple tests for cost-effective long-term operation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 rounded-xl p-8 border border-primary/20 mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Recommended for These Applications
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>Drinking water utilities monitoring disinfection residuals and safety</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>Wastewater treatment plants optimizing oxidation processes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>Industrial water systems detecting metal contamination</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>Environmental monitoring programs assessing water quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>Laboratory rapid screening before detailed analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              <span>Facility maintenance ensuring water safety compliance</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Get Kemio Analyzers & Sensors
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Interested in Kemio Disinfection or Heavy Metal Analyzers? We have units and replacement sensor packs in stock with competitive pricing and technical support. Contact us via WhatsApp for quotations.
          </p>
          <Button
            onClick={() => openProductQuotation("Kemio Analyzers & Sensors")}
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

export default KemioAnalyzers;

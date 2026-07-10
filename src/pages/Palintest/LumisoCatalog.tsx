import { usePageMeta } from "@/hooks/use-page-meta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, BarChart3, Zap, Shield, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { openProductQuotation } from "@/lib/whatsapp";

const lumisoProducts = {
  "Professional Photometers": [
    {
      name: "Lumiso Expert Photometer",
      description: "Advanced photometer for comprehensive water testing and quality analysis with expert-level accuracy.",
      specs: "50+ parameters, portable design, rapid results (1-10 min), IP67 water-resistant"
    },
    {
      name: "Lumiso Ammonia",
      description: "Specialized photometer for ammonia detection in water samples.",
      specs: "Ammonia range 0-1.0 mg/L N, dedicated sensor, portable"
    },
    {
      name: "Lumiso Chlorine",
      description: "Dedicated photometer for free and total chlorine measurement.",
      specs: "Chlorine range 0-5 mg/L, rapid results, ideal for pools and utilities"
    },
    {
      name: "Lumiso Chlorine Dioxide",
      description: "Photometer designed for chlorine dioxide analysis in water treatment.",
      specs: "ClO2 measurement, treatment plant compatible, accurate results"
    },
    {
      name: "Lumiso Ozone",
      description: "Photometer for ozone measurement in water treatment applications.",
      specs: "Ozone range 0-3 mg/L, disinfection monitoring, portable"
    }
  ],
  "Pool Testing Photometers": [
    {
      name: "Lumiso Pooltest Expert",
      description: "Professional photometer designed specifically for swimming pool water quality testing.",
      specs: "Chlorine, pH, alkalinity, stabilizer, 9+ parameters, pool-optimized"
    },
    {
      name: "Lumiso Pooltest 9",
      description: "Versatile pool testing photometer with nine measurement parameters.",
      specs: "9 parameters, color chart display, professional-grade accuracy"
    },
    {
      name: "Lumiso Pooltest 6",
      description: "Practical pool testing system with six key measurement parameters.",
      specs: "6 parameters, essential pool parameters, cost-effective"
    },
    {
      name: "Lumiso Pooltest 3",
      description: "Essential pool testing photometer with three core measurements.",
      specs: "Chlorine, pH, alkalinity, basic pool testing"
    }
  ],
  "Complete Lumiso Kits": [
    {
      name: "LUM7210 - Lumiso Expert Benchtop Kit",
      description: "Professional benchtop kit for the Lumiso Expert photometer system.",
      specs: "Complete setup, accessories, calibration tools, laboratory-ready"
    },
    {
      name: "LMPXUK - Lumiso Pooltest Expert Benchtop Kit",
      description: "Benchtop kit for the Lumiso Pooltest Expert photometer with accessories.",
      specs: "Full pool testing suite, bench-mounted, comprehensive accessories"
    },
    {
      name: "LMP006 - Hard Kit, Lumiso Pooltest 6",
      description: "Complete hardware kit for the Lumiso Pooltest 6 photometer system.",
      specs: "6-parameter pool testing, portable case, ready to deploy"
    },
    {
      name: "LMP004 - Hard Kit, Lumiso Pooltest 4",
      description: "Complete hardware kit for the Lumiso Pooltest 4 photometer system.",
      specs: "Portable, field-ready, durable carrying case"
    },
    {
      name: "LMP003 - Hard Kit, Lumiso Pooltest 3",
      description: "Complete hardware kit for the Lumiso Pooltest 3 photometer system.",
      specs: "Compact, portable, essential parameters kit"
    }
  ]
};

const LumisoCatalog = () => {
  const navigate = useNavigate();

  usePageMeta({
    title: "Lumiso Photometers Kenya — Water Testing Equipment | Official Distributor",
    description: "Professional Lumiso photometers for water testing in Kenya. Lumiso Expert, Pooltest, Chlorine, Ammonia analyzers. Advanced portable water quality testing equipment.",
    keywords: "Lumiso photometer, Lumiso Expert, Lumiso Pooltest, water testing photometer, Palintest Kenya, buy Lumiso Kenya, photometer price Kenya",
    type: "article",
    canonical: "https://morisentreprises.com/palintest/lumiso-photometers",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Palintest", url: "/palintest" },
      { name: "Lumiso Photometers", url: "/palintest/lumiso-photometers" },
    ],
    author: "Moris Entreprises Laboratory Equipment Team",
    publishedDate: "2024-01-20",
    modifiedDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    const lumisoCollectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Lumiso Photometers Professional Water Testing Equipment",
      "description": "Complete range of Lumiso photometers for water testing including Expert, Pooltest, and specialized analyzers",
      "url": "https://morisentreprises.com/palintest/lumiso-photometers",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://morisentreprises.com" },
          { "@type": "ListItem", "position": 2, "name": "Palintest", "item": "https://morisentreprises.com/palintest" },
          { "@type": "ListItem", "position": 3, "name": "Lumiso Photometers", "item": "https://morisentreprises.com/palintest/lumiso-photometers" }
        ]
      },
      "hasPart": [
        {
          "@type": "Product",
          "name": "Lumiso Expert Photometer",
          "description": "Advanced photometer for comprehensive water testing with 50+ parameters",
          "brand": { "@type": "Brand", "name": "Palintest" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Lumiso Pooltest Expert",
          "description": "Professional pool testing photometer for swimming pool water quality",
          "brand": { "@type": "Brand", "name": "Palintest" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Lumiso Chlorine Photometer",
          "description": "Dedicated photometer for free and total chlorine measurement",
          "brand": { "@type": "Brand", "name": "Palintest" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "KES",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    };

    let script = document.querySelector("script[data-lumiso-collection]");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-lumiso-collection", "");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(lumisoCollectionSchema);
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
          Lumiso Professional Photometers
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Palintest Lumiso photometers offer advanced water testing capabilities with rapid, accurate results. From the comprehensive Lumiso Expert to specialized pool testing and disinfection monitoring, we offer complete Lumiso solutions for Kenya's water quality professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-white border-l-4 border-primary">
            <BarChart3 className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">50+ Parameters</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive testing capabilities with Lumiso Expert for all major water quality parameters
            </p>
          </Card>
          <Card className="p-6 bg-white border-l-4 border-blue-500">
            <Zap className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Rapid Results</h3>
            <p className="text-sm text-muted-foreground">
              Results in 1-10 minutes for most tablet tests and direct measurements
            </p>
          </Card>
          <Card className="p-6 bg-white border-l-4 border-green-500">
            <Shield className="h-8 w-8 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Professional Grade</h3>
            <p className="text-sm text-muted-foreground">
              Laboratory-accurate results for utilities, labs, and professional facilities
            </p>
          </Card>
        </div>

        {Object.entries(lumisoProducts).map(([category, items]) => (
          <section key={category} className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((product, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2" itemProp="name">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3" itemProp="description">
                    {product.description}
                  </p>
                  <div className="bg-slate-50 rounded p-3 mb-4 text-xs text-muted-foreground">
                    <strong>Specifications:</strong> {product.specs}
                  </div>
                  <div className="hidden" itemProp="brand">
                    <meta itemProp="name" content="Palintest" />
                  </div>
                  <Button
                    onClick={() => openProductQuotation(product.name)}
                    className="w-full mt-auto bg-green-500 hover:bg-green-600 text-white font-medium"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Request Quotation
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-white rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Why Choose Lumiso Photometers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Advanced Technology</h3>
              <p className="text-muted-foreground">
                Palintest Lumiso photometers feature optical measurement technology with digital displays for precise, repeatable results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Portable Design</h3>
              <p className="text-muted-foreground">
                Lightweight and compact for field testing, with IP67 water-resistant rating for durability in challenging environments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Wide Parameter Range</h3>
              <p className="text-muted-foreground">
                From specialized single-parameter analyzers to the Expert model with 50+ parameters, find the right Lumiso for your needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Reliable Performance</h3>
              <p className="text-muted-foreground">
                Used by water utilities, laboratories, and facilities across Kenya for consistent, accurate water quality monitoring.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Get a Quotation Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Interested in a specific Lumiso photometer? We provide competitive pricing, technical specifications, and fast delivery across Kenya. Contact us via WhatsApp for immediate quotations.
          </p>
          <Button
            onClick={() => openProductQuotation("Lumiso Photometers")}
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

export default LumisoCatalog;

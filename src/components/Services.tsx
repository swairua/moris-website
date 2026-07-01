import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Microscope,
  Beaker,
  TestTube,
  Scale,
  Droplet,
  FlaskConical,
  Shield,
  Boxes,
  Waves,
  Filter,
  HeartPulse,
  GlassWater,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: TestTube,
    title: "Microbiology and Biotechnology",
    description: "Prepared Media, Ready Prepared Plates, dehydrated culture media, biological media bases, media supplements, sterile dehydrated culture media.",
    route: "/microbiology-biotechnology"
  },
  {
    icon: Beaker,
    title: "Laboratory and Industrial Chemicals",
    description: "Biochemicals, fine chemicals, enzyme substrates, antibiotics, buffers, stains-indicators, Bio Chemicals, Ion pair reagents, speciality chemicals.",
    route: "/laboratory-chemicals"
  },
  {
    icon: Microscope,
    title: "Laboratory Equipment",
    description: "Atomic absorption spectrophotometer, flame photometer, UV-Vis spectrophotometer, photo colorimeter, melting point apparatus.",
    route: "/lab-equipment"
  },
  {
    icon: Scale,
    title: "Electrical Balances & Scales",
    description: "High-performance with up to 0.01mg readability and capacities up to 220g. AutoCal™ Internal Calibration system ensures accuracy.",
    route: "/laboratory-testing"
  },
  {
    icon: Droplet,
    title: "Water Testing Equipment",
    description: "Water testing kits, reagents, water waste and boiler reagents. Master Distributor of Milwaukee, Lovibond, Delagua, Hach, Palintest, Hanna Equipment.",
    route: "/water-analysis"
  },
  {
    icon: FlaskConical,
    title: "Material Testing",
    description: "Beverage, Packaging and quality testing equipment for comprehensive material analysis and quality control.",
    route: "/laboratory-testing"
  },
  {
    icon: Shield,
    title: "Personal Protection Equipment",
    description: "Complete PPE solutions under one roof. ISO certified products manufactured using innovative designs with latest technology.",
    route: "/safety-products"
  },
  {
    icon: Boxes,
    title: "Glassware",
    description: "Borosilicate glass with low coefficient of expansion, for heat resistance, and high resistance to chemical attack.",
    route: "/glassware"
  },
  {
    icon: GlassWater,
    title: "Water Science",
    description: "Water Filter Cartridges, Filtration Systems, Deionized Water & Systems, Laboratory Water Filters, UV Sterilizers, Water Quality Meters.",
    route: "/waste-water-filtration"
  },
  {
    icon: Waves,
    title: "Waste Water & Pool Filtration",
    description: "Water testing equipment and reagents offering analysis solutions for all types of water systems and industries.",
    route: "/waste-water-filtration"
  },
  {
    icon: FlaskConical,
    title: "Quality Control Equipment",
    description: "Clean benches, balances, moisture analyzers, spectrophotometers and stability chambers for QA/QC studies.",
    route: "/laboratory-testing"
  },
  {
    icon: Filter,
    title: "Filtration Equipment",
    description: "Glass microfiber lab filters with fine capillary structure for absorbing significantly larger quantities of water.",
    route: "/waste-water-filtration"
  },
  {
    icon: HeartPulse,
    title: "Medical Equipment",
    description: "Pipette Tips, Hematology Analyzer, Nucleic Acid Extractor, Microwave Digestion System, BOD Refrigerated Incubator.",
    route: "/medical-equipment"
  }
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Premium Products &amp; Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We help you with all the solutions you may require for the industry with prompt service at any point in time. Customer centricity is our motto.
          </p>
        </div>

        {/* Featured Palintest Section */}
        <div className="mb-12">
          <Card
            onClick={() => navigate("/palintest")}
            className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <Droplet className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Official Distributor
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-emerald-900 mb-2">
                  Palintest Water Testing Solutions
                </h3>
                <p className="text-emerald-800 leading-relaxed mb-4">
                  Premium water testing kits, professional photometers, and advanced analyzers for drinking water, pools, spas, and environmental testing. Complete solutions from Kenya's official Palintest distributor with expert technical support.
                </p>
                <Button
                  onClick={() => navigate("/palintest")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                >
                  Explore Palintest
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <h3 className="text-2xl font-display font-bold text-foreground mb-8">
          Other Products &amp; Services
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li key={index} role="listitem">
                <Card
                  onClick={() => navigate(service.route)}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

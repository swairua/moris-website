import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Inject ContactPoint schema for customer support visibility
    const contactPointSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+254-733-137-332",
      email: "info@morisentreprises.com",
      areaServed: "KE",
      availableLanguage: ["en"]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(contactPointSchema);
    document.head.appendChild(script);
  }, []);

  usePageMeta({
    title: "Moris Entreprises | Laboratory Chemicals, Equipment & Medical Supplies Kenya | Palintest Partner",
    description: "Premier supplier of laboratory chemicals, medical equipment, biotechnology supplies & diagnostic instruments in Kenya. Official Palintest distributor for water testing solutions, photometers, and test kits. Microbiology media, chromatography consumables, water testing equipment, quality control instruments. Get quotes via WhatsApp. Fast delivery.",
    keywords: "laboratory chemicals, medical equipment, biotechnology equipment, laboratory reagents, diagnostic tools, Kenya, supplier, laboratory instruments, quality chemicals, medical supplies, chromatography consumables, water testing equipment, microbiology media, quality control equipment, Palintest, water testing, photometers, water analysis, water quality, Nairobi",
    type: "website",
    canonical: "https://morisentreprises.com/",
    breadcrumbs: [
      { name: "Home", url: "https://morisentreprises.com/" },
    ],
    services: [
      {
        name: "Laboratory Chemicals Supply",
        description: "High-quality laboratory and industrial chemicals including biochemicals, fine chemicals, enzyme substrates, antibiotics, buffers, and specialty chemicals for research and testing.",
        areaServed: ["Kenya"]
      },
      {
        name: "Laboratory Equipment",
        description: "Professional laboratory instruments including spectrophotometers, atomic absorption spectrometers, flame photometers, and quality control equipment.",
        areaServed: ["Kenya"]
      },
      {
        name: "Water Testing & Analysis",
        description: "Complete water testing solutions including Palintest kits, photometers, reagents, and professional water quality analysis equipment from leading manufacturers.",
        areaServed: ["Kenya"]
      },
      {
        name: "Biotechnology & Microbiology Supplies",
        description: "Microbiology media, prepared culture plates, biological media bases, and biotechnology supplies for research institutions and laboratories.",
        areaServed: ["Kenya"]
      },
      {
        name: "Medical Equipment Supply",
        description: "Professional medical equipment and instruments for healthcare facilities including analyzers, extractors, and diagnostic instruments.",
        areaServed: ["Kenya"]
      },
      {
        name: "Filtration & Water Treatment",
        description: "Advanced filtration systems, water filters, deionized water systems, UV sterilizers, and wastewater treatment solutions.",
        areaServed: ["Kenya"]
      }
    ],
    faqs: [
      {
        question: "What laboratory equipment does Moris Entreprises supply?",
        answer: "Moris Entreprises supplies a comprehensive range of laboratory chemicals, equipment, and medical supplies including chromatography consumables, water testing equipment, microbiology media, quality control instruments, filtration systems, and Palintest water analysis products."
      },
      {
        question: "Are you an official Palintest distributor?",
        answer: "Yes, Moris Entreprises is an official Palintest distributor in Kenya, offering complete Palintest water testing kits, photometers, and reagents for water quality analysis."
      },
      {
        question: "What areas of Kenya do you serve?",
        answer: "We serve customers throughout Kenya with headquarters in Nairobi. We provide delivery services and can fulfill orders from research institutions, healthcare facilities, manufacturing industries, and laboratories across the country."
      },
      {
        question: "How can I request a quotation?",
        answer: "You can request a quotation by contacting us via WhatsApp at +254 733 137 332, email at info@morisentreprises.com, or using our online contact form. We provide competitive pricing and fast response times."
      },
      {
        question: "How long has Moris Entreprises been in business?",
        answer: "Moris Entreprises was established in 2010 and has over 14 years of experience in supplying laboratory chemicals, equipment, and medical supplies in Kenya."
      }
    ],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Partners />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta({
    title: "Moris Enterprises | Laboratory Chemicals & Medical Equipment Supplier Kenya",
    description: "Leading supplier of laboratory chemicals, medical instruments, biotechnology equipment & diagnostic tools in Kenya since 2010. Get free quotations via WhatsApp. Quality products & professional services.",
    keywords: "laboratory chemicals, medical equipment, biotechnology, laboratory reagents, diagnostic tools, Kenya, supplier, laboratory instruments, quality chemicals, medical supplies",
    type: "website",
    canonical: "https://morisenterprises.com/",
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

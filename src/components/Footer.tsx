import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productCategories = [
    { name: "Palintest Water Testing", path: "/palintest" },
    { name: "Medical Equipment", path: "/medical-equipment" },
    { name: "Laboratory Chemicals", path: "/laboratory-chemicals" },
    { name: "Microbiology & Biotechnology", path: "/microbiology-biotechnology" },
    { name: "Water Analysis", path: "/water-analysis" },
    { name: "Glassware", path: "/glassware" },
    { name: "Lab Equipment", path: "/lab-equipment" },
    { name: "Filtration", path: "/filtration" },
    { name: "Safety Products", path: "/safety-products" },
    { name: "Automobile Supplies", path: "/automobile-supplies" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <OptimizedImage
                src={logo}
                alt="Moris Entreprises - Laboratory Chemicals & Medical Equipment Supplier"
                className="h-16 w-16"
                width={64}
                height={64}
              />
              <span className="text-2xl font-display font-bold">Moris Entreprises</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Leading supplier of laboratory chemicals, medical instruments, and biotechnology equipment since 2010.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.slice(0, 5).map((category) => (
                <li key={category.path}>
                  <button
                    onClick={() => navigate(category.path)}
                    className="text-background/80 hover:text-background transition-colors text-left"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">More Products</h3>
            <ul className="space-y-2">
              {productCategories.slice(5).map((category) => (
                <li key={category.path}>
                  <button
                    onClick={() => navigate(category.path)}
                    className="text-background/80 hover:text-background transition-colors text-left text-sm"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/80 text-sm">Juja road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-background/80 text-sm">
                  <p>+254 733 137 332</p>
                  <p>+254 741 404 094</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-background/80 text-sm">
                  <p>info@morisentreprises.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-center flex-1 text-background/60">
              © {new Date().getFullYear()} Moris One Entreprises. All rights reserved.
            </p>
            <a
              href="/admin/login"
              className="text-xs text-background/40 hover:text-background/60 transition-colors ml-4"
              title="Admin Portal"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

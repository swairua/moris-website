import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }, 100);
  };

  const productCategories = [
    { name: "Medical Equipment", path: "/products/medical-equipment" },
    { name: "Microbiology and Biotechnology", path: "/products/microbiology-biotechnology" },
    { name: "Glassware", path: "/products/glassware" },
    { name: "Laboratory Chemicals and Reagents", path: "/products/laboratory-chemicals" },
    { name: "Water Analysis Instruments and Water Treatment", path: "/products/water-analysis" },
    { name: "Laboratory and Material Testing", path: "/products/laboratory-testing" },
    { name: "Safety Products", path: "/products/safety-products" },
    { name: "Waste Water, Pool and Spa Filtration", path: "/products/waste-water-filtration" },
    { name: "Palintest Kits", path: "/products/palintest-kits" },
    { name: "Lab Equipment", path: "/products/lab-equipment" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-3 animate-fade-in cursor-pointer"
          >
            <img src={logo} alt="Moris Enterprises" className="h-14 w-14" />
            <span className="text-xl font-display font-bold text-foreground">
              Moris Enterprises
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                Our Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-background border-border z-[100]">
                {productCategories.map((category) => (
                  <DropdownMenuItem
                    key={category.path}
                    onClick={() => navigate(category.path)}
                    className="cursor-pointer text-foreground hover:text-primary hover:bg-accent"
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Services
              </button>
              
              {/* Mobile Products Menu */}
              <div className="border-t border-border pt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Our Products</p>
                {productCategories.map((category) => (
                  <button
                    key={category.path}
                    onClick={() => {
                      navigate(category.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors py-2 pl-4"
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-primary-foreground w-full"
              >
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

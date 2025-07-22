import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-brand/10 z-50 shadow-legal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Akumric Law House Logo" className="h-8 w-auto" />
            <div className="text-xl font-bold text-brand">
              Akumric Law House
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-brand hover:text-brand-light transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-brand hover:text-brand-light transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-brand hover:text-brand-light transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-brand hover:text-brand-light transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-brand hover:text-brand-light transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+211920077727" className="flex items-center text-brand hover:text-brand-light transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +211 920 077 727
            </a>
            <Button
              variant="consultation"
              onClick={() => scrollToSection("booking")}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand" />
            ) : (
              <Menu className="h-6 w-6 text-brand" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-brand hover:text-brand-light w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-brand hover:text-brand-light w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-brand hover:text-brand-light w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block px-3 py-2 text-brand hover:text-brand-light w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="block px-3 py-2 text-brand hover:text-brand-light w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2 border-t border-border">
                <a href="tel:+211920077727" className="flex items-center text-brand mb-3">
                  <Phone className="h-4 w-4 mr-2" />
                  +211 920 077 727
                </a>
                <Button
                  variant="consultation"
                  className="w-full"
                  onClick={() => scrollToSection("booking")}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
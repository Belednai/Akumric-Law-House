import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';

// Import the services list for dropdown
import { services } from "./ServicesSection";

// Create URL-friendly slugs for each service
const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-brand/10 z-50 shadow-legal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src={logo} alt="Akumric Law House Logo" className="h-8 w-auto" />
            <div className="text-xl font-bold text-brand">
              Akumric Law House
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            <Link
              to="/"
              className={`text-brand hover:text-brand-light transition-colors ${
                isActive('/') ? 'font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-brand hover:text-brand-light transition-colors ${
                isActive('/about') ? 'font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            {/* Practice Expertise Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center text-brand hover:text-brand-light transition-colors ${
                  isActive('/services') || location.pathname.startsWith('/practice-areas') ? 'font-semibold' : ''
                }`}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Practice Expertise <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-border rounded-lg shadow-lg z-50 animate-fade-in">
                  <ul className="py-2">
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <Link
                          to={`/practice-areas/${createSlug(service.title)}`}
                          className="block px-4 py-2 hover:bg-brand/10 text-sm text-brand transition-colors"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/history"
              className={`text-brand hover:text-brand-light transition-colors ${
                isActive('/history') ? 'font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              History
            </Link>
            <Link
              to="/blog"
              className={`text-brand hover:text-brand-light transition-colors ${
                isActive('/blog') ? 'font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/team"
              className={`text-brand hover:text-brand-light transition-colors ${
                isActive('/team') || location.pathname.startsWith('/team/') ? 'font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`text-brand hover:text-brand-light transition-colors ${
                isActive('/contact') ? 'font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+211920077727" className="flex items-center text-brand hover:text-brand-light transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +211 920 077 727
            </a>
            <Button variant="consultation" asChild>
              <Link to="/contact">
                Book Consultation
              </Link>
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
              <Link
                to="/"
                className={`block px-3 py-2 text-brand hover:text-brand-light w-full text-left ${
                  isActive('/') ? 'font-semibold bg-brand/5' : ''
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-brand hover:text-brand-light w-full text-left ${
                  isActive('/about') ? 'font-semibold bg-brand/5' : ''
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              {/* Mobile Practice Expertise Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`flex items-center w-full px-3 py-2 text-brand hover:text-brand-light text-left ${
                    isActive('/services') || location.pathname.startsWith('/practice-areas') ? 'font-semibold bg-brand/5' : ''
                  }`}
                >
                  Practice Expertise <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isMobileDropdownOpen && (
                  <ul className="pl-6 pb-2">
                    <li>
                      <Link
                        to="/services"
                        className="block py-1 text-brand/80 hover:text-brand text-sm"
                        onClick={closeMenu}
                      >
                        All Practice Areas
                      </Link>
                    </li>
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <Link
                          to={`/practice-areas/${createSlug(service.title)}`}
                          className="block py-1 text-brand/80 hover:text-brand text-sm"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Link
                to="/history"
                className={`block px-3 py-2 text-brand hover:text-brand-light w-full text-left ${
                  isActive('/history') ? 'font-semibold bg-brand/5' : ''
                }`}
                onClick={closeMenu}
              >
                History
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 text-brand hover:text-brand-light w-full text-left ${
                  isActive('/blog') ? 'font-semibold bg-brand/5' : ''
                }`}
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                to="/team"
                className={`block px-3 py-2 text-brand hover:text-brand-light w-full text-left ${
                  isActive('/team') || location.pathname.startsWith('/team/') ? 'font-semibold bg-brand/5' : ''
                }`}
                onClick={closeMenu}
              >
                Team
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-brand hover:text-brand-light w-full text-left ${
                  isActive('/contact') ? 'font-semibold bg-brand/5' : ''
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="px-3 py-2 border-t border-border">
                <a href="tel:+211920077727" className="flex items-center text-brand mb-3">
                  <Phone className="h-4 w-4 mr-2" />
                  +211 920 077 727
                </a>
                <Button variant="consultation" className="w-full" asChild>
                  <Link to="/contact">
                    Book Consultation
                  </Link>
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
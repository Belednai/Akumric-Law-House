import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
    { name: "Book Consultation", href: "#booking" }
  ];

  const legalServices = [
    "Civil & Criminal Litigation",
    "Business Law",
    "Land Disputes",
    "Immigration Law",
    "Family Law",
    "Contract Drafting",
    "Legal Consultancy",
    "NGO Compliance"
  ];

  return (
    <footer className="bg-brand-gradient text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Akumric Law House Logo" className="h-8 w-auto" />
              <div className="text-xl font-bold text-white">
                Akumric Law House
              </div>
            </div>
            <p className="text-white/80 mb-6">
              A leading law firm in South Sudan, providing comprehensive legal services with integrity and excellence since 1987.
            </p>
            <div className="space-y-4">
              <a href="tel:+211920077727" className="flex items-center text-white/90 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +211 920 077 727
              </a>
              <a href="mailto:inquiry@akumriclawhouse.com" className="flex items-center text-white/90 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                inquiry@akumriclawhouse.com
              </a>
              <div className="flex items-start text-white/90">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Juba Town, Airport Road<br />Next to Trinity Energy<br />South Sudan</span>
              </div>
              <div className="flex items-center text-white/90">
                <Clock className="h-4 w-4 mr-2" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal Services</h3>
            <ul className="space-y-2">
              {legalServices.map((service, index) => (
                <li key={index} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/211920077727"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="h-5 w-5 text-white" />
              </a>
            </div>
            <Button
              variant="outline"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-white text-brand hover:bg-white/90"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <div>
              © {new Date().getFullYear()} Akumric Law House. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="hidden md:inline">|</span>
              <a href="https://www.belednai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Developed by Belednai Technology</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
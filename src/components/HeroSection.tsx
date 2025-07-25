import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Gavel, Landmark, Shield } from "lucide-react";
import backImage from '../assets/back.jpg';
import rechAkumricImage from '../assets/Rech Akumric.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backImage}
          alt="Akumric Law House Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/30 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Legal Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 transform -rotate-12">
            <Scale className="w-16 h-16 text-white animate-float" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 transform rotate-6">
            <Landmark className="w-12 h-12 text-white animate-float" />
          </div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-left ml-6 lg:ml-12">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span className="text-gold font-medium text-sm tracking-wide">Since 1987</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gold">Delivering</span><br />
                <span className="text-white">Standardized</span><br />
                <span className="text-white">Legal Services</span>
              </h1>
              
              <div className="flex items-center gap-3 text-lg md:text-xl font-semibold text-gold">
                <Gavel className="w-6 h-6" />
                <span>AKUMRIC LAW HOUSE</span>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              <span className="text-gold font-semibold">In South Sudan & Beyond</span> - 
              Representing individuals, corporations, and institutions with excellence and integrity. 
              Your trusted partner for comprehensive legal solutions.
            </p>

            {/* Statistics */}
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">38+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">1000+</div>
                <div className="text-sm text-white/80">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">12+</div>
                <div className="text-sm text-white/80">Practice Areas</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-brand font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/contact';
                }}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white bg-transparent hover:bg-white hover:text-brand font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/services';
                }}
              >
                Our Expertise
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm text-white/80 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span>Available 24/7</span>
              </div>
              <a 
                href="tel:+211920077727" 
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>+211 920 077 727</span>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle professional frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-xl blur-sm"></div>
              
              {/* Main image container */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img
                  src={rechAkumricImage}
                  alt="Rech Akumric - Managing Partner"
                  className="w-64 md:w-72 lg:w-80 h-auto object-cover rounded-xl shadow-2xl mix-blend-multiply"
                  style={{ 
                    transform: 'scaleX(-1)',
                    filter: 'contrast(1.1) brightness(1.05)',
                    background: 'transparent'
                  }}
                />
                
                {/* Professional title overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-sm rounded-lg p-2.5">
                  <div className="text-gold font-semibold text-base">Rech Akumric</div>
                  <div className="text-white/90 text-xs">Managing Partner & Senior Advocate</div>
                </div>
              </div>

              {/* Minimal decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold/30 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
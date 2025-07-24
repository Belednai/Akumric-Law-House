import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Gavel, Landmark, Shield } from "lucide-react";
import backImage from '../assets/back.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backImage}
          alt="Akumric Law House Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-dark/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gold/10 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-white/3 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gold/5 rounded-full blur-xl animate-bounce"></div>
        
        {/* Legal Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 transform -rotate-12">
            <Scale className="w-16 h-16 text-white animate-float" />
          </div>
          <div className="absolute top-1/3 right-1/4 transform rotate-12">
            <Gavel className="w-14 h-14 text-gold animate-float-delayed" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 transform rotate-6">
            <Landmark className="w-12 h-12 text-white animate-float" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 transform -rotate-6">
            <Shield className="w-18 h-18 text-gold animate-float-delayed" />
          </div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-4 py-8">
        {/* Main Heading */}
        <div className="mb-6">
          <div className="text-lg md:text-xl font-semibold text-gold mb-2 tracking-wide">
            AKUMRIC LAW HOUSE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight drop-shadow-lg">
            Justice.{" "}
            <span className="text-gold">Integrity.</span>{" "}
            <br className="hidden md:block" />
            Advocacy.
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 font-medium text-white/90 max-w-3xl leading-relaxed drop-shadow">
          Representing individuals, corporations, and institutions with excellence across South Sudan. 
          Your trusted partner for comprehensive legal solutions.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 mb-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-gold drop-shadow">15+</div>
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-gold drop-shadow">1000+</div>
            <div className="text-sm text-white/80">Cases Won</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-gold drop-shadow">12</div>
            <div className="text-sm text-white/80">Practice Areas</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button 
            size="lg"
            className="bg-gold hover:bg-gold-dark text-brand font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            Practice Expertise
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            <span>Available 24/7</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <a 
            href="tel:+211920077727" 
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>+211 920 077 727</span>
          </a>
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
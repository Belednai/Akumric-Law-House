import React from 'react';
import heroImage from '../assets/hero-legal-bg.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[70vh] bg-brand text-white px-4 py-16 md:py-24 overflow-hidden">
      {/* Brand gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="South Sudan skyline or courtroom"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-brand-gradient opacity-60 mix-blend-multiply" />
        {/* Legal icons overlay */}
        <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-20 text-white text-6xl pointer-events-none">
          <i className="fas fa-balance-scale mx-4 my-2"></i>
          <i className="fas fa-gavel mx-4 my-2"></i>
          <i className="fas fa-landmark mx-4 my-2"></i>
          <i className="fas fa-users mx-4 my-2"></i>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow">Akumric Law House</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow">Justice. Integrity. Advocacy.</h1>
        <p className="text-lg md:text-xl mb-8 font-medium text-white/90">Representing individuals, corporations, and institutions with excellence across South Sudan.</p>
        <a 
          href="#booking" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block bg-white text-brand font-semibold px-6 py-3 rounded shadow hover:bg-brand-light hover:text-white transition-colors duration-200"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
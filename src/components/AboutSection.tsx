import React from 'react';
import reechImage from '../assets/reech md.png';
import aminImage from '../assets/Amin.jpg';
import wolImage from '../assets/Wol Deng.png';

const leaders = [
  {
    name: 'Adv. Reech M. D. Malual-Akumric',
    title: 'Managing Partner, Head of PR and ADR',
    image: reechImage,
  },
  {
    name: 'Adv. Amin M. Malual-Akumric',
    title: 'Senior Partner, Head of Contracts',
    image: aminImage,
  },
  {
    name: 'Adv. Wol D. A. Chan',
    title: 'Head of Litigation and Practice',
    image: wolImage,
  },
];

const values = [
  {
    icon: 'fas fa-handshake',
    title: 'Trust',
    description: 'Ethical, transparent, and client-focused legal practice since 1987.'
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Experience',
    description: 'Multi-generational expertise in South Sudanese and regional law.'
  },
  {
    icon: 'fas fa-globe-africa',
    title: 'Local Understanding',
    description: 'Deep roots in Juba and a profound grasp of local and regional legal needs.'
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-brand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">About Akumric Law House</h2>
          <p className="text-lg md:text-xl mb-4">
            Founded in 1987 by Justice Mareu D. Malual-Akumric, Akumric Law House is a leading law firm in Juba, South Sudan, with a legacy of excellence spanning generations. Our firm is managed by the 2nd and 3rd generation of the Malual-Akumric family, upholding a tradition of justice, integrity, and advocacy.
          </p>
          <p className="text-base text-brand/80 mb-2">
            We provide specialized legal services to individuals, corporations, government, and non-profit organizations across a wide range of fields, including oil and gas, commercial law, taxation, employment, alternative dispute resolution, and litigation. Our team’s deep local knowledge and regional influence in Eastern Africa position us as trusted advisors for complex legal matters.
          </p>
          <p className="text-base text-brand/80">
            Akumric Law House is recognized for its ethical practice, client care, and commitment to delivering pragmatic legal solutions that shape the future of South Sudan.
          </p>
        </div>
        {/* Meet Our Leaders */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-brand mb-6">Meet Our Leaders</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="flex flex-col items-center bg-brand/5 rounded-lg p-4 shadow-md w-full sm:w-64">
                <div className="w-40 h-48 relative mb-3">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full rounded-lg object-cover object-[center_15%]" 
                  />
                  <div className="absolute inset-0 rounded-lg border-4 border-brand"></div>
                </div>
                <div className="font-bold text-brand text-lg mb-1">{leader.name}</div>
                <div className="text-brand text-sm font-medium text-center">{leader.title}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto bg-brand-gradient rounded-xl p-4">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white/80 rounded-lg p-6 shadow transition-all hover:bg-white hover:text-brand hover:shadow-lg"
            >
              <i className={`${value.icon} text-brand text-4xl mb-3`}></i>
              <div className="font-semibold text-brand text-lg mb-1">{value.title}</div>
              <div className="text-brand/80 text-center text-sm">{value.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
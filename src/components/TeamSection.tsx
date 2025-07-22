import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone } from "lucide-react";
import reechImage from '../assets/Rech Akumric.png';
import aminImage from '../assets/Amin.jpg';
import wolImage from '../assets/Wol Deng.png';
import bolImage from '../assets/Bol.jpg';

const teamMembers = [
  {
    name: "Adv. Reech M. D. Malual-Akumric",
    title: "Managing Partner, Head of PR and ADR",
    image: reechImage,
    education: "LLB, LLM (UoJ), LP; PhD (in progress), Parul University, India",
    specialties: ["Employment Law", "Oil & Gas", "Media Law", "Constitutional Law", "PR & Litigation"],
    languages: ["English", "Arabic", "Dinka"],
    barMembership: "South Sudan Bar Association, East Africa Law Society",
    experience: "15+ years",
    email: "akumriclawhouse@gmail.com",
    bio: "Reech is a multi-award-winning lawyer, journalist, and author with over 15 years of experience in legal practice and media. He is a fellow of the US Institute of Peace, a Young African Leader, and has served as Deputy Spokesperson of the South Sudan Bar Association."
  },
  {
    name: "Adv. Amin M. Malual-Akumric",
    title: "Senior Partner, Head of Contracts",
    image: aminImage,
    education: "LLB (Nileen University), LP",
    specialties: ["Contracts", "Procurement Law", "Civil & Criminal Litigation"],
    languages: ["English", "Arabic"],
    barMembership: "South Sudan Bar Association",
    experience: "15+ years",
    email: "akumriclawhouse@gmail.com",
    bio: "Amin has practiced law for over fifteen years, specializing in contracts, procurement, and litigation. He manages the Malakia branch and is a second-generation lawyer of the Akumric family."
  },
  {
    name: "Adv. Wol D. A. Chan",
    title: "Head of Litigation and Practice",
    image: wolImage,
    education: "LLB, LLM (Juba & Lucknow), LP",
    specialties: ["Criminal Litigation", "Taxation", "Civil Litigation"],
    languages: ["English", "Arabic"],
    barMembership: "South Sudan Bar Association (Central Committee)",
    experience: "12+ years",
    email: "akumriclawhouse@gmail.com",
    bio: "Wol is a criminal litigation expert with over 12 years of experience in Africa and India. He is a commissioner for oaths and currently sits on the Central Committee of the South Sudan Bar Association."
  },
  {
    name: "Adv. Bol Madut Ayii",
    title: "Head of Oil and Gas",
    image: bolImage,
    education: "LLB, LLM (Juba & Nairobi), LP",
    specialties: ["Oil & Gas", "Labour Law", "Legal Drafting", "Civil & Criminal Litigation"],
    languages: ["English", "Arabic"],
    barMembership: "South Sudan Bar Association",
    experience: "7+ years",
    email: "akumriclawhouse@gmail.com",
    bio: "Bol is a career in-house counsel with expertise in oil and gas, labor, and litigation. He has been practicing law since 2017."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Our Legal Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced attorneys who combine deep legal expertise with cultural understanding 
            to serve our clients effectively across South Sudan.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-brand-gradient">
              <CardContent className="p-0">
                <div className="md:flex">
                  {/* Photo */}
                  <div className="w-full md:w-1/3 relative">
                    <div className="aspect-[3/4] md:aspect-auto md:h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover object-[center_15%] md:object-center border-b-4 md:border-b-0 md:border-r-4 border-brand"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-brand mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand font-medium mb-4">
                      {member.title}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Education */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-brand mb-1">Education</h4>
                      <p className="text-xs text-muted-foreground">{member.education}</p>
                    </div>

                    {/* Experience & Bar */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-brand mb-1">Experience</h4>
                        <p className="text-xs text-muted-foreground">{member.experience}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand mb-1">Bar Membership</h4>
                        <p className="text-xs text-muted-foreground">{member.barMembership}</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="text-sm font-semibold text-brand mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-brand/10">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-brand hover:text-brand-light transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:text-brand-light transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a consultation with one of our experienced attorneys today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+211920077727"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-light transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent-dark transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
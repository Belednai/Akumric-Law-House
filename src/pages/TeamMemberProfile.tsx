import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import reechImage from '../assets/Rech Akumric.png';
import aminImage from '../assets/Amin.jpg';
import wolImage from '../assets/Wol Deng.png';
import bolImage from '../assets/Bol.jpg';

const teamMembers = [
  {
    id: "reech-akumric",
    name: "Adv. Reech M. D. Malual-Akumric",
    title: "Managing Partner, Head of PR and ADR",
    image: reechImage,
    education: "LLB, LLM (UoJ), LP; PhD (in progress), Parul University, India",
    specialties: ["Employment Law", "Oil & Gas", "Media Law", "Constitutional Law", "PR & Litigation"],
    languages: ["English", "Arabic", "Dinka"],
    barMembership: "South Sudan Bar Association, East Africa Law Society",
    experience: "15+ years",
    email: "reech@akumriclawhouse.com",
    phone: "+211 920 077 727",
    linkedin: "https://linkedin.com/in/reech-akumric",
    bio: "Reech is a multi-award-winning lawyer, journalist, and author with over 15 years of experience in legal practice and media. He is a fellow of the US Institute of Peace, a Young African Leader, and has served as Deputy Spokesperson of the South Sudan Bar Association.",
    detailedBio: `Reech M. D. Malual-Akumric is a distinguished legal practitioner with over 15 years of comprehensive experience in law, journalism, and public relations. As the Managing Partner of Akumric Law House, he leads with a vision of excellence and integrity in legal service delivery across South Sudan.

    His academic journey includes an LLB and LLM from the University of Juba, with a PhD currently in progress at Parul University, India. This strong educational foundation, combined with his practical experience, positions him as a leading voice in South Sudanese jurisprudence.

    Beyond his legal practice, Reech is recognized as a fellow of the US Institute of Peace and has been honored as a Young African Leader. His dual expertise in law and media has made him a sought-after commentator on legal and political matters affecting South Sudan and the broader East African region.`,
    achievements: [
      "Fellow of the US Institute of Peace",
      "Young African Leader Award",
      "Deputy Spokesperson, South Sudan Bar Association",
      "Published author on constitutional law matters",
      "Media law expert and practicing journalist"
    ],
    practiceAreas: [
      {
        area: "Employment Law",
        description: "Comprehensive advisory services on labor disputes, employment contracts, and workplace compliance."
      },
      {
        area: "Oil & Gas Law",
        description: "Specialized legal services for extractive industries, including regulatory compliance and contract negotiation."
      },
      {
        area: "Media Law",
        description: "Expert guidance on media regulations, press freedom, and communications law."
      },
      {
        area: "Constitutional Law",
        description: "Deep expertise in constitutional matters and public interest litigation."
      }
    ]
  },
  {
    id: "amin-akumric",
    name: "Adv. Amin M. Malual-Akumric",
    title: "Senior Partner, Head of Contracts",
    image: aminImage,
    education: "LLB (Nileen University), LP",
    specialties: ["Contracts", "Procurement Law", "Civil & Criminal Litigation"],
    languages: ["English", "Arabic"],
    barMembership: "South Sudan Bar Association",
    experience: "15+ years",
    email: "amin@akumriclawhouse.com",
    phone: "+211 920 077 727",
    linkedin: "https://linkedin.com/in/amin-akumric",
    bio: "Amin has practiced law for over fifteen years, specializing in contracts, procurement, and litigation. He manages the Malakia branch and is a second-generation lawyer of the Akumric family.",
    detailedBio: `Amin M. Malual-Akumric brings over fifteen years of dedicated legal practice to his role as Senior Partner and Head of Contracts at Akumric Law House. As a second-generation lawyer from the distinguished Akumric legal family, he carries forward a tradition of legal excellence and client service that spans decades.

    His educational foundation from Nileen University, combined with extensive practical experience, has made him a respected authority in contract law and procurement matters. Amin's expertise is particularly valued in complex commercial transactions and large-scale procurement processes.

    Based at the firm's Malakia branch, Amin has built a reputation for meticulous attention to detail and strategic thinking in contract negotiation and drafting. His litigation experience in both civil and criminal matters provides clients with comprehensive legal representation when disputes arise.`,
    achievements: [
      "Second-generation lawyer of the Akumric family",
      "Manager of Malakia branch operations",
      "15+ years of specialized contract law practice",
      "Expert in large-scale procurement processes",
      "Extensive civil and criminal litigation experience"
    ],
    practiceAreas: [
      {
        area: "Contract Law",
        description: "Expert drafting, review, and negotiation of complex commercial and civil contracts."
      },
      {
        area: "Procurement Law",
        description: "Specialized guidance on public and private procurement processes and compliance."
      },
      {
        area: "Civil Litigation",
        description: "Comprehensive representation in civil disputes and commercial litigation."
      },
      {
        area: "Criminal Litigation",
        description: "Defense representation in criminal matters with focus on white-collar crimes."
      }
    ]
  },
  {
    id: "wol-chan",
    name: "Adv. Wol D. A. Chan",
    title: "Head of Litigation and Practice",
    image: wolImage,
    education: "LLB, LLM (Juba & Lucknow), LP",
    specialties: ["Criminal Litigation", "Taxation", "Civil Litigation"],
    languages: ["English", "Arabic"],
    barMembership: "South Sudan Bar Association (Central Committee)",
    experience: "12+ years",
    email: "wol@akumriclawhouse.com",
    phone: "+211 920 077 727",
    linkedin: "https://linkedin.com/in/wol-chan",
    bio: "Wol is a criminal litigation expert with over 12 years of experience in Africa and India. He is a commissioner for oaths and currently sits on the Central Committee of the South Sudan Bar Association.",
    detailedBio: `Wol D. A. Chan serves as the Head of Litigation and Practice at Akumric Law House, bringing over 12 years of diverse legal experience gained across Africa and India. His unique international perspective, combined with deep local knowledge, makes him an invaluable asset to the firm's litigation practice.

    His academic credentials include both LLB and LLM degrees obtained from prestigious institutions in Juba and Lucknow, India. This international educational background has equipped him with a broad understanding of different legal systems and approaches to litigation.

    As a commissioner for oaths and member of the Central Committee of the South Sudan Bar Association, Wol plays a significant role in shaping the legal profession in South Sudan. His expertise in criminal litigation is particularly renowned, and his approach to taxation matters has helped numerous clients navigate complex tax disputes.`,
    achievements: [
      "Commissioner for Oaths",
      "Central Committee member, South Sudan Bar Association",
      "12+ years international legal experience",
      "Criminal litigation specialist",
      "Tax law and dispute resolution expert"
    ],
    practiceAreas: [
      {
        area: "Criminal Litigation",
        description: "Expert defense representation in all types of criminal matters before South Sudanese courts."
      },
      {
        area: "Taxation Law",
        description: "Comprehensive tax advisory services and dispute resolution for individuals and businesses."
      },
      {
        area: "Civil Litigation",
        description: "Strategic litigation services for complex civil disputes and commercial matters."
      },
      {
        area: "Professional Ethics",
        description: "Guidance on legal profession standards and ethics compliance."
      }
    ]
  },
  {
    id: "bol-ayii",
    name: "Adv. Bol Madut Ayii",
    title: "Head of Oil and Gas",
    image: bolImage,
    education: "LLB, LLM (Juba & Nairobi), LP",
    specialties: ["Oil & Gas", "Labour Law", "Legal Drafting", "Civil & Criminal Litigation"],
    languages: ["English", "Arabic"],
    barMembership: "South Sudan Bar Association",
    experience: "7+ years",
    email: "bol@akumriclawhouse.com",
    phone: "+211 920 077 727",
    linkedin: "https://linkedin.com/in/bol-ayii",
    bio: "Bol is a career in-house counsel with expertise in oil and gas, labor, and litigation. He has been practicing law since 2017.",
    detailedBio: `Bol Madut Ayii serves as the Head of Oil and Gas at Akumric Law House, bringing specialized expertise in one of South Sudan's most critical economic sectors. Since beginning his legal career in 2017, Bol has focused intensively on the complex regulatory and commercial aspects of the extractive industries.

    His educational background includes both LLB and LLM degrees from respected institutions in Juba and Nairobi, providing him with a solid foundation in both domestic and regional legal frameworks relevant to the oil and gas sector.

    As a career in-house counsel before joining Akumric Law House, Bol has unique insights into the operational and legal challenges faced by companies in the extractive industries. His experience spans regulatory compliance, contract negotiation, labor relations within the sector, and dispute resolution.`,
    achievements: [
      "Specialized Head of Oil and Gas practice",
      "Career in-house counsel experience",
      "Expert in extractive industry regulations",
      "7+ years focused practice since 2017",
      "Regional legal education and perspective"
    ],
    practiceAreas: [
      {
        area: "Oil & Gas Law",
        description: "Comprehensive legal services for oil and gas companies, including regulatory compliance and contract negotiation."
      },
      {
        area: "Labour Law",
        description: "Employment law services with particular focus on extractive industry labor relations."
      },
      {
        area: "Legal Drafting",
        description: "Expert drafting of complex commercial agreements and regulatory documents."
      },
      {
        area: "Regulatory Compliance",
        description: "Guidance on navigating complex regulatory frameworks in the extractive industries."
      }
    ]
  }
];

const TeamMemberProfile = () => {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-brand mb-4">Team Member Not Found</h1>
          <Link to="/" className="text-brand hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] relative max-w-sm mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%] rounded-lg border-4 border-white/20"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-white/90 mb-4">{member.title}</p>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">{member.bio}</p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-brand mb-4">About</h2>
                  <div className="prose prose-gray max-w-none">
                    {member.detailedBio.split('\n\n    ').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practice Areas */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-brand mb-4">Practice Areas</h2>
                  <div className="space-y-4">
                    {member.practiceAreas.map((area, index) => (
                      <div key={index} className="border-l-4 border-brand pl-4">
                        <h3 className="font-semibold text-brand mb-2">{area.area}</h3>
                        <p className="text-muted-foreground text-sm">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-brand mb-4">Key Achievements</h2>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact Information */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">Email</p>
                      <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-brand transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">Phone</p>
                      <a href={`tel:${member.phone}`} className="text-muted-foreground hover:text-brand transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">LinkedIn</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition-colors">
                        View Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand mb-4">Professional Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">Education</p>
                      <p className="text-muted-foreground text-sm">{member.education}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">Experience</p>
                      <p className="text-muted-foreground text-sm">{member.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">Bar Membership</p>
                      <p className="text-muted-foreground text-sm">{member.barMembership}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand mb-1">Languages</p>
                      <div className="flex flex-wrap gap-2">
                        {member.languages.map((language, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-brand text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Ready to discuss your legal needs with {member.name.split(' ')[1]}?
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white text-brand hover:bg-white/90"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMemberProfile; 
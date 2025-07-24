import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Gavel, 
  Scale, 
  FileText, 
  Users, 
  Briefcase, 
  Landmark, 
  Banknote, 
  Globe, 
  Newspaper, 
  Handshake, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

// Create URL-friendly slugs for each service
const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

export const services = [
  {
    icon: Gavel,
    title: "Alternative Dispute Resolution",
    description: "Expert mediation, negotiation, and arbitration services to resolve disputes efficiently outside of court.",
    features: ["Mediation", "Negotiation", "Arbitration"]
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Comprehensive representation in civil matters, protecting your rights and interests in all courts.",
    features: ["Court Representation", "Dispute Resolution", "Appeals"]
  },
  {
    icon: ShieldCheck,
    title: "Criminal Litigation",
    description: "Defending clients in criminal cases with integrity and deep knowledge of South Sudanese law.",
    features: ["Defense", "Bail Applications", "Appeals"]
  },
  {
    icon: Briefcase,
    title: "Commercial Advisory",
    description: "Business law services including contracts, transactions, and regulatory compliance for companies.",
    features: ["Business Formation", "Contract Review", "Regulatory Compliance"]
  },
  {
    icon: FileText,
    title: "Legal Drafting",
    description: "Drafting of legal opinions, contracts, bills, and constitutions for individuals and organizations.",
    features: ["Contracts", "Legal Opinions", "Bills & Constitutions"]
  },
  {
    icon: Users,
    title: "Employment & Labour Advisory",
    description: "Guidance on employment law, workplace disputes, and labor rights for employers and employees.",
    features: ["Employment Contracts", "Labor Disputes", "Workplace Policies"]
  },
  {
    icon: Banknote,
    title: "Tax Advisory",
    description: "Tax planning, compliance, and dispute resolution for businesses and individuals.",
    features: ["Tax Planning", "Compliance", "Dispute Resolution"]
  },
  {
    icon: Globe,
    title: "Humanitarian & Public Law",
    description: "Legal support for NGOs, humanitarian organizations, and public interest litigation.",
    features: ["NGO Support", "Public Interest Cases", "Legal Advocacy"]
  },
  {
    icon: Landmark,
    title: "Banking Law Advisory",
    description: "Advising on banking regulations, finance transactions, and compliance for financial institutions.",
    features: ["Regulatory Advice", "Finance Transactions", "Compliance"]
  },
  {
    icon: Newspaper,
    title: "Media Law Advisory",
    description: "Legal counsel for media organizations, journalists, and communications professionals.",
    features: ["Media Compliance", "Defamation", "Broadcast Law"]
  },
  {
    icon: Handshake,
    title: "Public Relations & Lobby",
    description: "Strategic PR, government relations, and lobbying for clients in complex regulatory environments.",
    features: ["Government Relations", "Lobbying", "PR Strategy"]
  },
  {
    icon: Scale,
    title: "Oil & Gas",
    description: "Specialized legal services for oil, gas, and extractive industries, including contracts and compliance.",
    features: ["Contract Drafting", "Regulatory Compliance", "Industry Advisory"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Practice Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to meet the diverse needs of individuals, 
            businesses, and organizations operating in South Sudan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={`/practice-areas/${createSlug(service.title)}`}
              className="group block"
            >
              <Card className="h-full hover:shadow-gold hover:border-brand/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="pb-4">
                  <service.icon className="h-10 w-10 text-brand mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg text-brand group-hover:text-brand-light transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-brand hover:text-white hover:bg-brand group-hover:bg-brand group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-secondary rounded-lg">
          <h3 className="text-2xl font-bold text-brand mb-4">
            Need Legal Assistance?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see the specific service you need? Our experienced legal team can handle 
            a wide range of legal matters. Contact us for a consultation.
          </p>
          <Button variant="consultation" asChild>
            <Link to="/contact">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
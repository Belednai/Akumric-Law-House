import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Users, Award, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/components/ServicesSection";

// Create URL-friendly slugs for each service
const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Extended service data with additional details
const serviceDetails = {
  "alternative-dispute-resolution": {
    overview: "Our Alternative Dispute Resolution (ADR) services provide efficient, cost-effective solutions to legal disputes outside of traditional court proceedings. We specialize in mediation, arbitration, and negotiation to help parties reach mutually beneficial agreements.",
    whyChoose: [
      "Faster resolution than traditional litigation",
      "Cost-effective dispute resolution",
      "Confidential proceedings",
      "Preserved business relationships",
      "Expert mediators and arbitrators"
    ],
    approach: "We take a collaborative approach to dispute resolution, focusing on understanding all parties' interests and finding creative solutions that work for everyone involved.",
    experience: "Over 15 years of experience in resolving complex commercial, employment, and civil disputes through ADR mechanisms.",
    caseTypes: [
      "Commercial disputes",
      "Employment conflicts",
      "Contract disagreements",
      "Partnership disputes",
      "International arbitration"
    ]
  },
  "civil-litigation": {
    overview: "Our civil litigation team provides comprehensive representation in all types of civil matters, from contract disputes to personal injury claims. We are committed to protecting our clients' rights and achieving favorable outcomes.",
    whyChoose: [
      "Experienced trial attorneys",
      "Comprehensive case preparation",
      "Strategic litigation approach",
      "Proven track record of success",
      "Client-focused representation"
    ],
    approach: "We combine thorough preparation with strategic thinking to build strong cases. Our approach includes detailed case analysis, evidence gathering, and aggressive advocacy.",
    experience: "Successfully handled over 500 civil litigation cases with a high success rate in South Sudanese courts.",
    caseTypes: [
      "Contract disputes",
      "Personal injury claims",
      "Property disputes",
      "Business litigation",
      "Tort claims"
    ]
  },
  "criminal-litigation": {
    overview: "Our criminal defense team provides aggressive representation for individuals facing criminal charges. We understand the stakes and work tirelessly to protect our clients' rights and freedom.",
    whyChoose: [
      "Experienced criminal defense attorneys",
      "24/7 availability for urgent matters",
      "Thorough case investigation",
      "Strong courtroom advocacy",
      "Confidential client consultation"
    ],
    approach: "We meticulously examine every aspect of the case, challenge evidence when appropriate, and build strong defense strategies tailored to each client's unique situation.",
    experience: "Defended clients in over 300 criminal cases with successful outcomes in acquittals, reduced charges, and favorable plea agreements.",
    caseTypes: [
      "White-collar crimes",
      "Assault and battery",
      "Theft and fraud",
      "Drug-related offenses",
      "Traffic violations"
    ]
  },
  "commercial-advisory": {
    overview: "We provide comprehensive business law services to help companies navigate complex regulatory environments, from startup formation to major transactions and ongoing compliance.",
    whyChoose: [
      "Deep understanding of South Sudanese business law",
      "Proactive legal advice",
      "Industry-specific expertise",
      "Scalable legal solutions",
      "Long-term partnership approach"
    ],
    approach: "We work closely with businesses to understand their goals and provide practical legal solutions that support growth while managing risk.",
    experience: "Advised over 200 businesses across various industries, from startups to multinational corporations operating in South Sudan.",
    caseTypes: [
      "Business formation and structuring",
      "Mergers and acquisitions",
      "Commercial contracts",
      "Regulatory compliance",
      "Corporate governance"
    ]
  }
};

const PracticeArea = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the service based on the slug
  const service = services.find(s => createSlug(s.title) === slug);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const details = serviceDetails[slug as keyof typeof serviceDetails] || {
    overview: `${service.description} Our experienced team provides comprehensive legal services in this area.`,
    whyChoose: [
      "Experienced legal team",
      "Proven track record",
      "Client-focused approach",
      "Cost-effective solutions",
      "Timely service delivery"
    ],
    approach: "We take a strategic and client-focused approach to deliver the best possible outcomes for our clients.",
    experience: "Years of experience serving clients in this practice area with successful results.",
    caseTypes: service.features
  };

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 py-16 md:py-24 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Practice Areas
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/10 rounded-lg mr-4">
                  <IconComponent className="h-12 w-12 text-gold" />
                </div>
                <div>
                  <Badge className="bg-gold text-brand mb-2">Practice Area</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {details.overview}
              </p>
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-brand font-semibold"
                asChild
              >
                <Link to="/contact">
                  Get Legal Help Now
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Team?</h3>
              <ul className="space-y-3">
                {details.whyChoose.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{reason}</span>
                  </li>
                ))}
              </ul>
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
              
              {/* Our Approach */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-brand">Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {details.approach}
                  </p>
                </CardContent>
              </Card>

              {/* Case Types */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-brand">Types of Cases We Handle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.caseTypes.map((caseType, index) => (
                      <div key={index} className="flex items-center p-4 bg-secondary rounded-lg">
                        <CheckCircle className="h-5 w-5 text-brand mr-3" />
                        <span className="font-medium">{caseType}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-brand flex items-center">
                    <Award className="h-6 w-6 mr-2" />
                    Our Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {details.experience}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact CTA */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand">Need Legal Assistance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Get expert legal advice for your {service.title.toLowerCase()} matter.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link to="/contact">
                        Schedule Consultation
                      </Link>
                    </Button>
                    <a
                      href="tel:+211920077727"
                      className="flex items-center justify-center w-full px-4 py-2 border border-brand text-brand hover:bg-brand hover:text-white transition-colors rounded-md"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href="mailto:akumriclawhouse@gmail.com"
                      className="flex items-center justify-center w-full px-4 py-2 border border-brand text-brand hover:bg-brand hover:text-white transition-colors rounded-md"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand">Related Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {services
                      .filter(s => s.title !== service.title)
                      .slice(0, 4)
                      .map((relatedService) => (
                        <Link
                          key={relatedService.title}
                          to={`/practice-areas/${createSlug(relatedService.title)}`}
                          className="block p-3 hover:bg-secondary rounded-lg transition-colors"
                        >
                          <div className="flex items-center">
                            <relatedService.icon className="h-5 w-5 text-brand mr-3" />
                            <span className="text-sm font-medium">{relatedService.title}</span>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to="/services"
                      className="text-brand hover:text-brand-light text-sm font-medium"
                    >
                      View All Practice Areas →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Team Members */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Meet our experienced attorneys who specialize in this practice area.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/team">
                      View Our Team
                    </Link>
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

export default PracticeArea; 
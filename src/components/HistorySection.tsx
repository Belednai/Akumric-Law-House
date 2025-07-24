import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, Building } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Akumric Law House was established with a vision to provide excellent legal services across South Sudan.",
    icon: Building,
    category: "Founding"
  },
  {
    year: "2012",
    title: "First Major Case Victory",
    description: "Won landmark constitutional law case that set precedent for future civil rights litigation.",
    icon: Award,
    category: "Achievement"
  },
  {
    year: "2015",
    title: "Team Expansion",
    description: "Expanded to include specialized departments for Oil & Gas, Employment Law, and Media Law.",
    icon: Users,
    category: "Growth"
  },
  {
    year: "2018",
    title: "Malakia Branch Opening",
    description: "Opened second office in Malakia to better serve clients across different regions.",
    icon: Building,
    category: "Expansion"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented modern case management systems and enhanced client service delivery.",
    icon: Award,
    category: "Innovation"
  },
  {
    year: "2022",
    title: "Regional Recognition",
    description: "Became member of East Africa Law Society, expanding our regional legal network.",
    icon: Award,
    category: "Recognition"
  },
  {
    year: "2024",
    title: "Excellence in Service",
    description: "Celebrated over 1000 successful cases across diverse practice areas.",
    icon: Award,
    category: "Milestone"
  }
];

const values = [
  {
    title: "Justice",
    description: "We believe in upholding justice and fairness in all our legal endeavors, ensuring equal representation for all clients.",
    icon: "⚖️"
  },
  {
    title: "Integrity",
    description: "Our practice is built on unwavering integrity, transparency, and ethical conduct in all professional relationships.",
    icon: "🛡️"
  },
  {
    title: "Advocacy",
    description: "We are passionate advocates for our clients' rights, combining legal expertise with cultural understanding.",
    icon: "📢"
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every case, continuously improving our skills and knowledge to serve our clients better.",
    icon: "⭐"
  }
];

const HistorySection = () => {
  return (
    <section id="history" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Our Heritage
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our establishment, Akumric Law House has been at the forefront of legal excellence in South Sudan, 
            building a legacy of justice, integrity, and unwavering commitment to our clients.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-brand mb-6">Our Story</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Akumric Law House was founded on the principles of justice, integrity, and advocacy - values that 
                      continue to guide our practice today. What began as a small legal practice has grown into one of 
                      South Sudan's most respected law firms.
                    </p>
                    <p className="leading-relaxed">
                      Our journey is rooted in the Akumric family's commitment to legal excellence, with multiple generations 
                      of lawyers contributing to the rich legal heritage of South Sudan. We have witnessed and participated 
                      in the country's legal evolution, adapting our practice to meet the changing needs of our clients.
                    </p>
                    <p className="leading-relaxed">
                      Today, we serve individuals, corporations, NGOs, and government institutions, providing comprehensive 
                      legal solutions across diverse practice areas while maintaining our founding commitment to justice and integrity.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">15+</div>
                      <div className="text-sm text-muted-foreground">Years of Service</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">1000+</div>
                      <div className="text-sm text-muted-foreground">Cases Handled</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">12</div>
                      <div className="text-sm text-muted-foreground">Practice Areas</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">2</div>
                      <div className="text-sm text-muted-foreground">Office Locations</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand/20"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-brand rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-gold transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <milestone.icon className="h-5 w-5 text-brand" />
                          <Badge variant="outline" className="text-xs">
                            {milestone.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-brand" />
                          <span className="text-sm font-semibold text-brand">{milestone.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-brand mb-2">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-brand text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-gold hover:border-brand/50 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-lg font-bold text-brand mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legacy CTA */}
        <div className="text-center mt-16 p-8 bg-brand rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">
            Building on Our Legacy
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            As we continue to grow and evolve, our commitment to justice, integrity, and advocacy remains unwavering. 
            Let us be part of your legal journey.
          </p>
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-block bg-white text-brand font-semibold px-6 py-3 rounded shadow hover:bg-white/90 transition-colors duration-200"
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 
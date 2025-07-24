import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Users, Building, Scale, ShieldCheck, Megaphone, Star } from "lucide-react";

const milestones = [
  {
    year: "1987",
    title: "Founding in Khartoum, Sudan",
    description: "Justice Mareu D. Malual-Akumric establishes the law chamber, laying the foundation for a legacy of legal excellence.",
    icon: Building,
    category: "Founding"
  },
  {
    year: "1990-2003",
    title: "Public Service & Judiciary",
    description: "Justice Mareu serves as Director of Public Prosecution, State Minister, and later as President of the High Court of South Sudan.",
    icon: Award,
    category: "Leadership"
  },
  {
    year: "2003-2020",
    title: "Judicial Leadership",
    description: "Justice Mareu leads the judiciary, culminating in his role as President of the High Court until 2020.",
    icon: Award,
    category: "Judiciary"
  },
  {
    year: "2010s",
    title: "Generational Transition",
    description: "The 2nd and 3rd generation of the Malual-Akumric family take the helm, expanding the firm's reach and expertise.",
    icon: Users,
    category: "Legacy"
  },
  {
    year: "2018-Present",
    title: "Regional Influence & Growth",
    description: "ALH becomes a leading law firm in South Sudan and East Africa, serving major corporations, NGOs, and international organizations.",
    icon: Award,
    category: "Recognition"
  }
];

const values = [
  {
    title: "Justice",
    description: "We believe in upholding justice and fairness in all our legal endeavors, ensuring equal representation for all clients.",
    icon: Scale
  },
  {
    title: "Integrity",
    description: "Our practice is built on unwavering integrity, transparency, and ethical conduct in all professional relationships.",
    icon: ShieldCheck
  },
  {
    title: "Advocacy",
    description: "We are passionate advocates for our clients' rights, combining legal expertise with cultural understanding.",
    icon: Megaphone
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every case, continuously improving our skills and knowledge to serve our clients better.",
    icon: Star
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
            Akumric Law House (ALH) was founded in 1987 by Justice Mareu D. Malual-Akumric in Khartoum, Sudan. The firm’s legacy is rooted in decades of legal excellence, public service, and leadership in South Sudan’s legal community. Today, ALH is managed by the 2nd and 3rd generation of the Malual-Akumric family, continuing a tradition of legal service, advocacy, and innovation. The firm has played a pivotal role in shaping the legal landscape of South Sudan, advising on landmark cases, legislative drafting, and supporting both public and private sector clients.
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
                      Akumric Law House (ALH) began its journey in 1987, founded by Justice Mareu D. Malual-Akumric. Over the years, the firm has grown under the stewardship of the Malual-Akumric family, with a strong commitment to justice, integrity, and advocacy. Justice Mareu’s distinguished career included serving as Director of Public Prosecution, State Minister, and President of the High Court of South Sudan until 2020.
                    </p>
                    <p className="leading-relaxed">
                      Today, ALH is recognized as a leading law firm in South Sudan and the East African region, providing specialized legal services to major corporations, NGOs, and international organizations. The firm’s expertise spans oil and gas, commercial law, employment, taxation, media, and more, serving clients across diverse sectors.
                    </p>
                    <p className="leading-relaxed">
                      With a team of highly qualified partners and associates, ALH is known for its integrity, professionalism, and commitment to delivering pragmatic legal solutions tailored to client needs.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">1987</div>
                      <div className="text-sm text-muted-foreground">Year Founded</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">3</div>
                      <div className="text-sm text-muted-foreground">Generations of Lawyers</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">12+</div>
                      <div className="text-sm text-muted-foreground">Practice Areas</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-brand mb-1">1000+</div>
                      <div className="text-sm text-muted-foreground">Cases Handled</div>
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
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-gold hover:border-brand/50 transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-10 w-10 text-gold" />
                    </div>
                    <h4 className="text-lg font-bold text-brand mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
          <a
            href="/contact"
            className="inline-block bg-white text-brand font-semibold px-6 py-3 rounded shadow hover:bg-white/90 transition-colors duration-200"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Rebecca Akot",
      title: "NGO Director",
      company: "Hope Foundation South Sudan",
      content: "Juba Legal Partners guided us through the complex NGO registration process with exceptional professionalism. Their understanding of both local requirements and international standards was invaluable.",
      rating: 5,
      case: "NGO Registration & Compliance"
    },
    {
      name: "Michael Taban",
      title: "Business Owner",
      company: "Taban Trading Company",
      content: "When we faced a complicated land dispute, Juba Legal Partners resolved it efficiently by combining their knowledge of customary law with modern legal procedures. Outstanding service!",
      rating: 5,
      case: "Commercial Land Dispute"
    },
    {
      name: "Grace Ajok Deng",
      title: "Private Individual",
      company: "Family Matter",
      content: "The team handled my immigration case with such care and attention. They kept me informed throughout the process and achieved the best possible outcome for my family.",
      rating: 5,
      case: "Immigration & Family Reunification"
    },
    {
      name: "James Mayak",
      title: "CEO",
      company: "South Sudan Mining Ltd",
      content: "Professional, knowledgeable, and results-driven. Juba Legal Partners helped us navigate the regulatory landscape and establish our operations successfully in South Sudan.",
      rating: 5,
      case: "Corporate Law & Regulatory Compliance"
    },
    {
      name: "Mary Nyawira",
      title: "Property Owner",
      company: "Real Estate Investment",
      content: "I was facing a complex inheritance dispute involving both customary and statutory law. The team's expertise in both areas led to a fair resolution for all parties involved.",
      rating: 5,
      case: "Inheritance & Property Rights"
    }
  ];

  const featuredCase = {
    title: "Landmark Land Rights Case",
    description: "Successfully represented a community of 500+ families in establishing customary land rights, resulting in formal recognition of their ancestral territory and compensation for development impacts.",
    outcome: "Community received formal land titles and $2.5M compensation",
    duration: "18-month legal process",
    impact: "Set precedent for customary land rights in South Sudan"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our clients about their experiences working with Akumric Law House and the successful outcomes we've achieved together.
          </p>
          <blockquote className="italic text-brand mt-6 max-w-2xl mx-auto">
            "Akumric Law House is an exceptional law chamber that serves their clients with special attention being vested professional services that ethically oriented with the Republic of South Sudan and in coordination with other lawyers and law firms within the country and or else outside the Republic of South Sudan."
            <span className="block mt-2 text-brand font-semibold">— Client Tribute</span>
          </blockquote>
        </div>
        {/* Client Logo Wall */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {[
            'Gourmet Services Co. ltd',
            'Specialist services Ltd',
            'Easy Services Co. Ltd (ESICO)',
            'Trinity Energy',
            'UNESCO-South Sudan',
            'UNDP- South Sudan',
            'Defy Hate Now - East Africa',
            'Yo\'Care South Sudan',
            'Screen of Rights',
            'Rak Media',
            'MGurush',
          ].map((client, idx) => (
            <div key={idx} className="bg-brand/5 rounded px-4 py-2 text-brand text-xs font-semibold shadow-sm">
              {client}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Rotating Testimonials */}
          <div className="relative">
            <Card className="shadow-deep border-brand/10 bg-brand-gradient text-white">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-white mb-4" />
                
                <div className="mb-6">
                  <div className="flex mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-4">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="border-l-2 border-white/20 pl-4">
                    <div className="font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-white/80">
                      {testimonials[currentTestimonial].title}
                    </div>
                    <div className="text-sm text-white/90">
                      {testimonials[currentTestimonial].company}
                    </div>
                    <div className="text-xs text-white/70 mt-1">
                      Case: {testimonials[currentTestimonial].case}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-white" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentTestimonial(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === currentTestimonial ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
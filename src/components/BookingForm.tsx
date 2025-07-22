import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Send, Calendar, Phone, MessageSquare, Video, Mail } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    caseType: "",
    description: "",
    consultationMethod: "in-person"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Booked Successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        caseType: "",
        description: "",
        consultationMethod: "in-person"
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const caseTypes = [
    "Civil Litigation",
    "Criminal Defense", 
    "Business Law",
    "Land Disputes",
    "Immigration",
    "Family Law",
    "Contract Drafting",
    "Legal Consultancy",
    "NGO Compliance",
    "Other"
  ];

  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Book Your Consultation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get expert legal advice tailored to your specific situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-accent/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="h-5 w-5 text-accent mr-2" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Available 24/7 for urgent matters</p>
                  <a href="tel:+211920077727" className="text-accent font-semibold hover:text-accent-dark">
                    +211 920 077 727
                  </a>
                  <br />
                  <a href="tel:+211918193218" className="text-accent font-semibold hover:text-accent-dark">
                    +211 918 193 218
                  </a>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-primary">
                    <MessageSquare className="h-5 w-5 text-accent mr-2" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Quick legal questions</p>
                  <a 
                    href="https://wa.me/211920077727" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:text-accent-dark"
                  >
                    Chat: +211 920 077 727
                  </a>
                  <br />
                  <a 
                    href="https://wa.me/211918193218" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:text-accent-dark"
                  >
                    Chat: +211 918 193 218
                  </a>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-primary">
                    <Mail className="h-5 w-5 text-accent mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:akumriclawhouse@gmail.com" className="text-accent font-semibold hover:text-accent-dark">
                    akumriclawhouse@gmail.com
                  </a>
                  <br />
                  <a href="mailto:rmalual@gmail.com" className="text-accent font-semibold hover:text-accent-dark">
                    rmalual@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-primary">
                    <Calendar className="h-5 w-5 text-accent mr-2" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-2">
                    2nd Floor, Chan House,<br />
                    Opp. University of Juba, Atlabara Campus<br />
                    Juba, South Sudan
                  </div>
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=Chan+House,+Juba,+South+Sudan&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="md:col-span-2">
              <Card className="shadow-deep">
                <CardHeader>
                  <CardTitle className="text-primary">Schedule Your Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="caseType">Case Type *</Label>
                        <Select value={formData.caseType} onValueChange={(value) => handleInputChange("caseType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select case type" />
                          </SelectTrigger>
                          <SelectContent>
                            {caseTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Brief Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Please provide a brief description of your legal matter..."
                        required
                        className="mt-1 min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label className="text-base font-medium">Preferred Consultation Method</Label>
                      <RadioGroup
                        value={formData.consultationMethod}
                        onValueChange={(value) => handleInputChange("consultationMethod", value)}
                        className="mt-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="in-person" />
                          <Label htmlFor="in-person" className="flex items-center cursor-pointer">
                            <Calendar className="h-4 w-4 mr-2 text-accent" />
                            In-Person (Juba Office)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone" />
                          <Label htmlFor="phone" className="flex items-center cursor-pointer">
                            <Phone className="h-4 w-4 mr-2 text-accent" />
                            Phone Call
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="whatsapp" />
                          <Label htmlFor="whatsapp" className="flex items-center cursor-pointer">
                            <MessageSquare className="h-4 w-4 mr-2 text-accent" />
                            WhatsApp Call
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="zoom" id="zoom" />
                          <Label htmlFor="zoom" className="flex items-center cursor-pointer">
                            <Video className="h-4 w-4 mr-2 text-accent" />
                            Video Call (Zoom)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      type="submit"
                      variant="consultation"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Booking..."
                      ) : (
                        <>
                          Book Consultation
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours to confirm your appointment.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
import { useState } from "react";
import { MessageSquare, X, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FloatingHelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 30 minutes during business hours.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-brand hover:bg-brand-light text-white shadow-gold hover:shadow-deep transition-all duration-300 hover:scale-110"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Mini Help Card */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-deep border-brand/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-brand">Need Legal Help?</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Get immediate assistance or send us a quick message.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <a
                  href="tel:+211920077727"
                  className="flex flex-col items-center p-3 bg-secondary rounded-lg hover:bg-brand/10 transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand mb-1" />
                  <span className="text-xs text-brand">Call</span>
                </a>
                <a
                  href="https://wa.me/211920077727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-secondary rounded-lg hover:bg-brand/10 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-brand mb-1" />
                  <span className="text-xs text-brand">WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className="flex flex-col items-center p-3 bg-secondary rounded-lg hover:bg-brand/10 transition-colors"
                >
                  <Calendar className="h-4 w-4 text-brand mb-1" />
                  <span className="text-xs text-brand">Book</span>
                </button>
              </div>

              {/* Quick Message Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="text-sm"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="text-sm"
                />
                <Textarea
                  placeholder="Your legal question..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="text-sm min-h-[80px]"
                />
                <Button type="submit" variant="legal" className="w-full">
                  Send Message
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-3">
                We respond within 30 minutes during business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingHelpButton;
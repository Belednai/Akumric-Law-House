import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HistorySection from "@/components/HistorySection";
import BlogSection from "@/components/BlogSection";
import BookingForm from "@/components/BookingForm";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingHelpButton from "@/components/FloatingHelpButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HistorySection />
      <BlogSection />
      <TestimonialsSection />
      <TeamSection />
      <BookingForm />
      <Footer />
      <FloatingHelpButton />
    </div>
  );
};

export default Index;

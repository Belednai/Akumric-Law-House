import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 
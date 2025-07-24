import Header from "@/components/Header";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default Team; 
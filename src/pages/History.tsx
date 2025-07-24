import Header from "@/components/Header";
import HistorySection from "@/components/HistorySection";
import Footer from "@/components/Footer";

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HistorySection />
      </div>
      <Footer />
    </div>
  );
};

export default History; 
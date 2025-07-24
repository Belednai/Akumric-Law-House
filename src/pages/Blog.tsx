import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blog; 
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemesSection from "@/components/MemesSection";
import Footer from "@/components/Footer";
import PfpButton from "@/components/PfpButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MemesSection />
      <Footer />
      <PfpButton />
    </div>
  );
};

export default Index;

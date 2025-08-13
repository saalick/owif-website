import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import CommunitySection from "@/components/CommunitySection";
import MemeGallery from "@/components/MemeGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <MemeGallery />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

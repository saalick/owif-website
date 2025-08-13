import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import MemeGallery from "@/components/MemeGallery";
import Footer from "@/components/Footer";
import ApiKeyInput from "@/components/ApiKeyInput";
import { useRunware } from "@/hooks/useRunware";

const Index = () => {
  const { apiKey, setApiKey, isServiceReady } = useRunware();

  return (
    <div className="min-h-screen">
      <ApiKeyInput 
        apiKey={apiKey} 
        setApiKey={setApiKey} 
        isServiceReady={isServiceReady} 
      />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <MemeGallery />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

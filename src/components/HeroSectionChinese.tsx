import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import PfpButton from "@/components/PfpButton";
import dogWithHat from "@/assets/dog-with-hat.jpg";

const HeroSectionChinese = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80 px-4 relative overflow-hidden pt-16">
      {/* Enhanced animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full float parallax-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rotate-45 rotate-slow"></div>
      <div className="absolute top-1/2 left-1/6 w-16 h-16 border-2 border-primary/20 rounded-full bounce-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-primary/5 wiggle"></div>
      <div className="absolute top-1/6 right-1/6 w-12 h-12 bg-accent/15 float" style={{animationDelay: '3s'}}></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Main hero content */}
        <div className="mb-8 sm:mb-12 bounce-in">
          <img 
            src={dogWithHat} 
            alt="OWIF - 只有老帽子的狗" 
            className="w-48 sm:w-64 md:w-80 lg:w-96 mx-auto rounded-3xl mb-6 sm:mb-8 hover-lift hover-glow shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 slide-in-up">
          <span className="text-gradient neon-text wiggle">$OWIF</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 sm:mb-12 fade-in-up stagger-1 px-4">
          <span className="font-bold text-primary">只有老帽子</span> 的传奇模因币
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center scale-in stagger-2">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full hover-lift glow"
          >
            <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            加入电报群
          </Button>
          
          <PfpButton />
        </div>
        
        <div className="mt-8 sm:mt-12 fade-in-up stagger-3">
          <p className="text-sm sm:text-base text-muted-foreground italic">
            当新帽子变旧时，我们保持老帽子的活力
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionChinese;
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rotate-45 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-40 w-20 h-8 bg-secondary/25 skew-x-12 wiggle"></div>
      <div className="absolute bottom-20 right-40 w-14 h-14 bg-primary/15 rotate-12 animate-pulse"></div>
      
      <div className="text-center space-y-8 px-4 max-w-6xl mx-auto z-10">
        <Badge variant="secondary" className="text-lg px-6 py-2 animate-pulse glow-cyan">
          NO CAP FR FR SIGMA OLF HAT ENERGY 
        </Badge>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/400/400?random=1" 
                alt="OWIF Hero Dog with Hat" 
                className="rounded-2xl shadow-2xl glow-cyan max-w-full h-auto wiggle hover:scale-105 transition-transform duration-300"
                style={{ maxHeight: '400px' }}
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce glow-cyan"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rotate-45 animate-pulse"></div>
            </div>
          </div>
          
          {/* Hero Text */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-tight">
              $OWIF
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
              Only <span className="text-primary wiggle inline-block">Olf</span> Hat Wif Infinite Rizz
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Bro this aint just a hat its a whole <strong>VIBE CHECK</strong> fr! 
              New hats are mid but <strong>olf hat supremacy</strong> hits different bestie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button size="lg" className="text-xl px-8 py-6 glow hover:scale-105 transition-transform">
                APE IN NOW OR STAY POOR
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-8 py-6 hover:scale-105 transition-transform">
                CHART GO BRRRR
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-lg text-muted-foreground mb-4">Contract Address (trust me bro):</p>
          <div className="bg-card p-4 rounded-lg border-2 border-primary/20 max-w-md mx-auto">
            <code className="text-sm font-mono break-all">SOON™ (maybe idk lol)</code>
            <Button variant="ghost" size="sm" className="ml-2">COPY PASTA</Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">scroll down for peak brainrot content</p>
      </div>
    </section>
  );
};

export default HeroSection;
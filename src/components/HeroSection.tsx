import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import dogWithHat from "@/assets/dog-with-hat.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-16">
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Token Symbol */}
          <div className="mb-8">
            <span className="text-3xl font-black text-primary tracking-wider">
              $OWIF
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl font-black mb-6">
            <span className="text-foreground">ONLY</span>
            <span className="text-primary">OLF</span>
            <span className="text-foreground">HAT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Wif Dogs Only Olf Hat - When new hats get old, we keep the olf hat vibes alive! 🎩
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-bold rounded-full transition-all duration-300"
            >
              <ArrowRight className="mr-2 h-6 w-6" />
              DEXSCREENER
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-6 text-lg font-bold rounded-full transition-all duration-300"
            >
              <Users className="mr-2 h-6 w-6" />
              Join Telegram
            </Button>
          </div>

          {/* Contract Address */}
          <div className="mt-16">
            <div className="text-sm text-muted-foreground mb-2">Solana Contract Address:</div>
            <code className="text-foreground font-mono text-lg break-all bg-secondary/20 px-4 py-2 rounded-lg">
              2wnXhHCZ8Y1cRVVykgHJ2VU8oExJo3goRGPLEgfC3jEK
            </code>
          </div>
        </div>
      </div>

      {/* Dog Images on sides */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-80">
        <img 
          src={dogWithHat} 
          alt="Dog with hat" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-80">
        <img 
          src={dogWithHat} 
          alt="Dog with hat" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-primary/40 rounded-full"></div>
      <div className="absolute top-40 right-32 w-8 h-8 bg-accent/50 rotate-45"></div>
      <div className="absolute bottom-40 left-40 w-16 h-16 border-2 border-primary/50 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-muted/60"></div>
    </section>
  );
};

export default HeroSection;
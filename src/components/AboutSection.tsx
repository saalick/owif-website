import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-secondary/30 to-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Why $OWIF tho?
          </h2>
          <p className="text-xl text-muted-foreground">
            Because this aint just a coin its a whole LIFESTYLE bestie 💯
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/80 backdrop-blur hover:scale-105 transition-transform duration-300 border-primary/20">
            <CardContent className="p-8 text-center">
              <img 
                src="https://picsum.photos/200/200?random=2" 
                alt="Wise Old Dog" 
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover wiggle glow-cyan"
              />
              <h3 className="text-2xl font-bold mb-4">OLF = PURE SIGMA</h3>
              <p className="text-muted-foreground">
                While yall chasing new hats we out here with that VINTAGE RIZZ. 
                Olf energy different fr - this that generational wealth mindset.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur hover:scale-105 transition-transform duration-300 border-primary/20">
            <CardContent className="p-8 text-center">
              <img 
                src="https://picsum.photos/200/200?random=3" 
                alt="The Real Hat" 
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover bounce-slow glow"
              />
              <h3 className="text-2xl font-bold mb-4">THAT HAT HITS DIFFERENT</h3>
              <p className="text-muted-foreground">
                New trends are MID but this hat? This hat got that AURA. 
                OG status unlocked - only real ones understand the assignment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur hover:scale-105 transition-transform duration-300 border-primary/20">
            <CardContent className="p-8 text-center">
              <img 
                src="https://picsum.photos/200/200?random=4" 
                alt="To The Moon" 
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover animate-pulse glow-cyan"
              />
              <h3 className="text-2xl font-bold mb-4">MOONSHOT LOCKED IN</h3>
              <p className="text-muted-foreground">
                Powered by pure COPIUM and fueled by degeneracy. 
                Olf energy so strong we skipping moon and going straight to PLUTO.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-4">The $OWIF Brainrot Bible</h3>
            <div className="text-lg space-y-4 max-w-3xl mx-auto">
              <p>
                "We hold these vibes to be absolutely BUSSIN: that all olf dogs got that RIZZ, 
                that they were blessed by the universe with unmatched AURA, 
                and the divine right to rock the most FIRE hat in existence no cap."
              </p>
              <p className="text-primary font-semibold">
                - The OG Sigma Doggos, 2024 (real)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
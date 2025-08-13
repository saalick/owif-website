import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-accent/30 to-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Why $OWIF? 🤔
          </h2>
          <p className="text-xl text-muted-foreground">
            Because every old dog deserves their day... and their hat!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/80 backdrop-blur hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4 wiggle">👴</div>
              <h3 className="text-2xl font-bold mb-4">OLF = GOLD</h3>
              <p className="text-muted-foreground">
                In a world of new hats, we honor the wisdom of the olf. 
                Vintage vibes, classic gains. Age before beauty, frens.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4 bounce-slow">🎩</div>
              <h3 className="text-2xl font-bold mb-4">THE REAL HAT</h3>
              <p className="text-muted-foreground">
                While others chase new trends, we stick with the hat that started it all. 
                Authentic, timeless, and worn by the goodest olf bois.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4 animate-pulse">🚀</div>
              <h3 className="text-2xl font-bold mb-4">TO THE MOON</h3>
              <p className="text-muted-foreground">
                Powered by nostalgia and fueled by memes. 
                When you're this olf, moon is just the beginning.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-4">The $OWIF Manifesto 📜</h3>
            <div className="text-lg space-y-4 max-w-3xl mx-auto">
              <p>
                "We hold these truths to be self-evident: that all olf dogs are created equal, 
                that they are endowed by their Creator with certain unalienable Rights, 
                that among these are Life, Liberty, and the pursuit of the Original Hat."
              </p>
              <p className="text-primary font-semibold">
                - The Founding Doggos, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
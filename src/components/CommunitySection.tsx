import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  const socialLinks = [
    { name: "Twitter/X", followers: "10K", description: "Daily brainrot injection" },
    { name: "Telegram", members: "5K", description: "War room for degens 24/7" },
    { name: "Discord", members: "3K", description: "Pure chaos coordination HQ" },
    { name: "Reddit", subscribers: "2K", description: "Olf DD and shitpost sanctuary" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Join The Chaos
          </h2>
          <p className="text-xl text-muted-foreground">
            Link up with the most unhinged olf hat degens on the internet
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto group-hover:wiggle glow"></div>
                <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{social.followers || social.members || social.subscribers}</div>
                <p className="text-sm text-muted-foreground">{social.description}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Diamond Paws Club</h3>
                <p className="text-lg mb-4">
                  The most unhinged olf holders get PREMIUM perks:
                </p>
                <ul className="space-y-2">
                  <li>Alpha leaks before everyone else</li>
                  <li>VIP degen den access</li>
                  <li>FIRE meme contest rewards</li>
                  <li>Exclusive chaos coordination events</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">The Chaos Council</h3>
                <p className="text-lg">
                  Democracy but make it UNHINGED. Every olf voice gets heard. 
                  Together we build the most FIRE hat empire in crypto history.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/30 rounded-2xl p-8 text-center relative overflow-hidden border border-primary/20">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://picsum.photos/600/400?random=6" 
                  alt="Community Pack" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary rounded-full mb-4 mx-auto animate-pulse glow"></div>
                <h3 className="text-3xl font-bold mb-4">Witness The Chaos</h3>
                <p className="text-lg mb-6">
                  Join thousands of absolute UNITS who understand olf energy different. 
                  This aint just a token bestie, this a whole LIFESTYLE revolution.
                </p>
                <Button size="lg" className="glow">
                  JOIN THE MADNESS
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">20K+</div>
                <div className="text-sm text-muted-foreground">Certified Degens</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Fire Memes</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Chaos Mode</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Sigma Energy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
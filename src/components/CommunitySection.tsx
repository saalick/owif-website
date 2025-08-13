import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  const socialLinks = [
    { name: "Twitter", icon: "🐦", followers: "10K", description: "Daily olf memes" },
    { name: "Telegram", icon: "✈️", members: "5K", description: "Olf discussions 24/7" },
    { name: "Discord", icon: "🎮", members: "3K", description: "Gaming with the olf gang" },
    { name: "Reddit", icon: "🤖", subscribers: "2K", description: "Olf stories & DD" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Join the Olf Pack 🐕‍🦺
          </h2>
          <p className="text-xl text-muted-foreground">
            Where legends gather and memes are born
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:wiggle">{social.icon}</div>
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
                <h3 className="text-2xl font-bold mb-4">💎 Diamond Paws</h3>
                <p className="text-lg mb-4">
                  Our most loyal olf holders get exclusive perks:
                </p>
                <ul className="space-y-2">
                  <li>🎁 Early access to olf hat NFTs</li>
                  <li>🎯 VIP channel access</li>
                  <li>🏆 Monthly olf meme contests</li>
                  <li>🎪 Exclusive community events</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">🏛️ The Olf Council</h3>
                <p className="text-lg">
                  Community-driven decisions. Every olf voice matters. 
                  Together we decide the future of our beloved hat empire.
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
                <div className="text-6xl mb-4 animate-pulse">🎩</div>
                <h3 className="text-3xl font-bold mb-4">Be Part of History</h3>
                <p className="text-lg mb-6">
                  Join thousands of olf believers who know that age brings wisdom, 
                  and wisdom brings gains. This isn't just a token, it's a movement.
                </p>
                <Button size="lg" className="glow">
                  🚀 Join the Revolution
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">20K+</div>
                <div className="text-sm text-muted-foreground">Olf Believers</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Memes Created</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Olf Energy</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Olf Wisdom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
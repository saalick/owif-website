import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Zap, TrendingUp } from "lucide-react";

const MemesSection = () => {
  const memes = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      title: "OG Dogwifhat Vibes",
      likes: 420
    },
    {
      id: 2, 
      url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
      title: "Based Dog Energy",
      likes: 690
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop", 
      title: "Moon Mission Ready",
      likes: 1337
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
      title: "Diamond Paws",
      likes: 2100
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop",
      title: "Wen Lambo?",
      likes: 888
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      title: "HODL Mode Activated",
      likes: 1234
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full float opacity-30"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rotate-45 float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-primary/30 rounded-full rotate-slow opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 wiggle">
            <span className="text-gradient">FIRE MEMES</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            The most legendary dogwifhat content that broke the internet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memes.map((meme, index) => (
            <Card 
              key={meme.id} 
              className="bg-card hover:bg-card/80 transition-all duration-300 hover-lift overflow-hidden group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={meme.url} 
                    alt={meme.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{meme.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-white/80">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{meme.likes}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-200"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Viral stats section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto border border-primary/20 glow-cyan">
            <h3 className="text-3xl font-black mb-6 text-gradient">COMMUNITY STATS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2 pulse-glow">42K</div>
                <div className="text-sm text-muted-foreground">MEMES POSTED</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2 pulse-glow">1.2M</div>
                <div className="text-sm text-muted-foreground">TOTAL LIKES</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2 pulse-glow">69K</div>
                <div className="text-sm text-muted-foreground">SHARES</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2 pulse-glow">420</div>
                <div className="text-sm text-muted-foreground">VIRAL HITS</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full hover-lift transition-all duration-300 pulse-glow"
              >
                <Zap className="mr-2 h-5 w-5" />
                Join the Chaos
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full hover-lift transition-all duration-300"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                View Trending
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemesSection;
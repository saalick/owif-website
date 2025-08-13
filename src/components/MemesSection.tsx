import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Zap, TrendingUp } from "lucide-react";

import meme1 from "@/assets/meme-1.jpg";
import meme2 from "@/assets/meme-2.jpg";
import meme3 from "@/assets/meme-3.jpg";
import meme4 from "@/assets/meme-4.jpg";
import meme5 from "@/assets/meme-5.jpg";
import meme6 from "@/assets/meme-6.jpg";

const MemesSection = () => {
  const memes = [
    {
      id: 1,
      url: meme1,
      title: "OG Dogwifhat Vibes",
      likes: 420
    },
    {
      id: 2, 
      url: meme2,
      title: "Based Dog Energy",
      likes: 690
    },
    {
      id: 3,
      url: meme3, 
      title: "Moon Mission Ready",
      likes: 1337
    },
    {
      id: 4,
      url: meme4,
      title: "Diamond Paws",
      likes: 2100
    },
    {
      id: 5,
      url: meme5,
      title: "Wen Lambo?",
      likes: 888
    },
    {
      id: 6,
      url: meme6,
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

      </div>
    </section>
  );
};

export default MemesSection;
import { Card, CardContent } from "@/components/ui/card";

import meme1 from "@/assets/meme-1.jpg";
import meme2 from "@/assets/meme-2.jpg";
import meme3 from "@/assets/meme-3.jpg";
import meme4 from "@/assets/meme-4.jpg";
import meme5 from "@/assets/meme-5.jpg";
import meme6 from "@/assets/meme-6.jpg";

const MemesSection = () => {
  const memes = [
    { id: 1, url: meme1 },
    { id: 2, url: meme2 },
    { id: 3, url: meme3 },
    { id: 4, url: meme4 },
    { id: 5, url: meme5 },
    { id: 6, url: meme6 }
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
              className="overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <img 
                  src={meme.url} 
                  alt={`OWIF Meme ${meme.id}`}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MemesSection;
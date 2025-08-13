import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MemeGallery = () => {
  const placeholderImages = [
    "https://picsum.photos/512/512?random=10",
    "https://picsum.photos/512/512?random=11", 
    "https://picsum.photos/512/512?random=12",
    "https://picsum.photos/512/512?random=13",
    "https://picsum.photos/512/512?random=14"
  ];

  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const nextMeme = () => {
    setCurrentMemeIndex((prev) => (prev + 1) % placeholderImages.length);
  };

  const prevMeme = () => {
    setCurrentMemeIndex((prev) => (prev - 1 + placeholderImages.length) % placeholderImages.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Olf Meme Gallery 🎭
          </h2>
          <p className="text-xl text-muted-foreground">
            The finest collection of olf hat memes in the crypto space
          </p>
        </div>

        <Card className="bg-card/90 backdrop-blur border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="relative">
              <img
                src={placeholderImages[currentMemeIndex]}
                alt={`Olf Meme ${currentMemeIndex + 1}`}
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 glow-cyan"
              />
              
              <div className="flex justify-between items-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={prevMeme}
                  disabled={placeholderImages.length <= 1}
                >
                  ← Previous Meme
                </Button>
                
                <div className="flex space-x-2">
                  {placeholderImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                          index === currentMemeIndex ? 'bg-primary' : 'bg-muted'
                        }`}
                        onClick={() => setCurrentMemeIndex(index)}
                      />
                    ))}
                  </div>
                  
                <Button 
                  variant="outline" 
                  onClick={nextMeme}
                  disabled={placeholderImages.length <= 1}
                >
                  Next Meme →
                </Button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Meme {currentMemeIndex + 1} of {placeholderImages.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="bg-primary/10 border-primary/30 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Submit Your Olf Memes! 📝</h3>
              <p className="text-muted-foreground mb-4">
                Got a fire olf hat meme? Share it with the community and earn $OWIF rewards!
              </p>
              <Button className="glow">
                🎨 Submit Meme
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;
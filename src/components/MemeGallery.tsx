import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRunware } from "@/hooks/useRunware";

const MemeGallery = () => {
  const { generateImage, isGenerating } = useRunware();
  const [memeImages, setMemeImages] = useState<string[]>([]);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const memePrompts = [
    "A dog wearing a vintage hat pointing at a chart that says 'olf coin to the moon', boardroom meeting style, business meme format",
    "Two dogs arguing, one with a new hat saying 'new is better', another with old hat saying 'olf is gold', meme format, funny expressions",
    "A distinguished old dog in a suit and fedora hat holding a briefcase full of golden coins, 'this is fine' meme style",
    "A group of dogs in hats celebrating around a rocket ship, party confetti, 'stonks' meme energy, cartoon style",
    "An old wise dog teaching young puppies about crypto, classroom setting, chalkboard with '$OWIF' written on it, teacher meme format"
  ];

  useEffect(() => {
    const generateMemes = async () => {
      const images = [];
      for (let i = 0; i < memePrompts.length; i++) {
        const imageUrl = await generateImage({
          positivePrompt: memePrompts[i],
          width: 512,
          height: 512,
        }, `meme-${i}`);
        if (imageUrl) {
          images.push(imageUrl);
        }
      }
      setMemeImages(images);
    };

    generateMemes();
  }, [generateImage]);

  const nextMeme = () => {
    setCurrentMemeIndex((prev) => (prev + 1) % memeImages.length);
  };

  const prevMeme = () => {
    setCurrentMemeIndex((prev) => (prev - 1 + memeImages.length) % memeImages.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Olf Meme Gallery 🎭
          </h2>
          <p className="text-xl text-muted-foreground">
            The finest collection of olf hat memes in the crypto space
          </p>
        </div>

        {memeImages.length > 0 ? (
          <Card className="bg-card/90 backdrop-blur border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="relative">
                <img
                  src={memeImages[currentMemeIndex]}
                  alt={`Olf Meme ${currentMemeIndex + 1}`}
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                
                <div className="flex justify-between items-center mt-6">
                  <Button 
                    variant="outline" 
                    onClick={prevMeme}
                    disabled={memeImages.length <= 1}
                  >
                    ← Previous Meme
                  </Button>
                  
                  <div className="flex space-x-2">
                    {memeImages.map((_, index) => (
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
                    disabled={memeImages.length <= 1}
                  >
                    Next Meme →
                  </Button>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    Meme {currentMemeIndex + 1} of {memeImages.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center">
            <div className="text-6xl animate-spin mb-4">🎭</div>
            <p className="text-lg text-muted-foreground">
              {isGenerating ? "Generating epic memes..." : "Loading meme gallery..."}
            </p>
          </div>
        )}

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
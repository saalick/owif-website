import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import dogWithHat from "@/assets/dog-with-hat.jpg";

const PfpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* PFP Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 w-14 h-14 rounded-full p-0 overflow-hidden hover-lift hover-glow border-2 border-primary/50 bg-transparent"
        variant="ghost"
      >
        <img 
          src={dogWithHat}
          alt="OWIF Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </Button>

      {/* Full Screen Modal with Iframe */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-full h-full w-full p-0 border-0 bg-background">
          {/* Close Button */}
          <Button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-destructive/20 hover:bg-destructive/30 text-destructive border border-destructive/50"
            variant="ghost"
            size="icon"
          >
            <X className="h-5 w-5" />
          </Button>
          
          {/* Iframe */}
          <iframe
            src="https://hat-on-my-face.vercel.app/"
            className="w-full h-full border-0"
            title="Hat on My Face"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PfpButton;
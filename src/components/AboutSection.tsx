import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import dogImage3 from "@/assets/dog-image-3.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-2xl font-bold text-primary mb-4 block">$WIF</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            WHERE IT ALL BEGAN
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-foreground mb-6">
              The Dogwifhat memecoin was born with one single mission: to
              conquer social media, one hat at a time. Getting involved is easy - secure a
              bag of $WIF then update your PFP to the iconic Dogwifhat image or your own
              unique hat creation. That's it - you're officially on the team and ready for
              battle. Welcome to the cult young soldier.
            </p>
            <p className="text-xl text-primary font-bold">
              **Your mission = hat up more recruits like your life depends on it**
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-bold rounded-full"
          >
            <Users className="mr-2 h-6 w-6" />
            View Community Members
          </Button>
        </div>

        <div className="text-center">
          <div className="max-w-md mx-auto">
            <img 
              src={dogImage3} 
              alt="OWIF Dog with Hat" 
              className="w-full rounded-2xl mb-4"
            />
            <p className="text-muted-foreground italic">OWIF - Only Olf Hat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
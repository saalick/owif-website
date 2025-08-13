import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-primary/20 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full glow"></div>
              <span className="text-2xl font-bold text-gradient">$OWIF</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Where olf dogs keep that ENERGY and never lose the AURA. 
              Join the chaos that respects the OG vibes fr.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">Telegram</Button>
              <Button variant="outline" size="sm">Discord</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">APE IN NOW</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chart Go BRRRR</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">The Numbers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chaos Plan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Brainrot Bible</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Check</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Meme Kit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">DM Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">
              © 2024 $OWIF. All vibes reserved. Made with pure CHAOS by the olf degeneracy.
            </p>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span>Contract: Coming Soon...</span>
              <Button variant="ghost" size="sm">Copy</Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              "In chaos we trust, in olf we believe, in degeneracy we prosper." - Ancient Sigma Wisdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
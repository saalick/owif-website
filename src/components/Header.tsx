import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary px-4 py-3">
      <nav className="flex items-center justify-center space-x-8">
        <a 
          href="#" 
          className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity"
        >
          TELEGRAM
        </a>
        <a 
          href="#" 
          className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity"
        >
          TWITTER
        </a>
        <a 
          href="#" 
          className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity"
        >
          SOLSCAN
        </a>
        <a 
          href="#" 
          className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity"
        >
          DEXSCREENER
        </a>
        <a 
          href="#" 
          className="text-sm font-medium text-primary-foreground hover:opacity-80 transition-opacity"
        >
          DEXTOOLS
        </a>
      </nav>
    </header>
  );
};

export default Header;
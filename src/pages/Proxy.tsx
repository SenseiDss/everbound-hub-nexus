import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Proxy = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Navigation />
      
      <div className="text-center animate-fade-in px-4">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get Wave
        </h1>
        
        <Button variant="hero" size="lg" asChild>
          <a 
            href="https://getwave.gg/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit Wave
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Proxy;

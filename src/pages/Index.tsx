import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Navigation />
      
      <div className="text-center animate-fade-in px-4">
        <h1 
          className="text-8xl md:text-9xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          style={{
            filter: "drop-shadow(0 0 40px hsl(263 70% 60% / 0.6)) drop-shadow(0 0 80px hsl(263 70% 60% / 0.4))"
          }}
        >
          Everbound
        </h1>
        
        <Button variant="hero" size="lg" asChild className="mb-4">
          <Link to="/proxy">Access</Link>
        </Button>
        
        <p className="text-muted-foreground text-sm mt-4">Made by Dss</p>
      </div>
    </div>
  );
};

export default Index;

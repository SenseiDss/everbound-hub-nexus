import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Have questions or need support? Reach out on Discord!
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg hover:shadow-[0_0_30px_hsl(263_70%_60%/0.3)] transition-all duration-300">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Discord Contact</h2>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-xl font-mono bg-secondary px-6 py-3 rounded-md border border-border">
                senseidss
              </div>
              
              <Button 
                variant="hero"
                size="lg"
                asChild
                className="gap-2"
              >
                <a 
                  href="https://discord.com/channels/@me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Open Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

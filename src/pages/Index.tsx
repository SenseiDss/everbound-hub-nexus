import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Access",
      description: "Browse the web securely with encrypted connections and privacy protection."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast speeds with our optimized proxy infrastructure."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays private. We don't log or track your browsing activity."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access content from anywhere with our worldwide server network."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
            Everbound
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Your Gateway to Unrestricted Web Access
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            Experience the internet without limits. Fast, secure, and reliable proxy services designed for everyone.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/proxy">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/fixes">View Fixes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Everbound?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Built with cutting-edge technology to provide you with the best proxy experience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:shadow-[0_0_30px_hsl(263_70%_60%/0.3)] transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-card border border-border rounded-lg p-12 shadow-lg hover:shadow-[0_0_40px_hsl(263_70%_60%/0.4)] transition-all duration-300">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who trust Everbound for their proxy needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/proxy">Access Proxy</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

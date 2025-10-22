import Navigation from "@/components/Navigation";

const Proxy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Proxy Services
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Access the web freely and securely with Everbound proxies.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <p className="text-muted-foreground text-center py-12">
              Content coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Proxy;

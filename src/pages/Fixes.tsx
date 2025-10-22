import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

const Fixes = () => {
  const fixes = [
    {
      issue: "Proxy Not Loading",
      solution: "Clear your browser cache and cookies, then try reloading the page. Make sure you're using a supported browser (Chrome, Firefox, or Edge).",
      category: "Connection"
    },
    {
      issue: "SSL Certificate Error",
      solution: "This usually happens when the proxy certificate isn't trusted. Try accessing the site in incognito/private mode or add an exception for the certificate.",
      category: "Security"
    },
    {
      issue: "Slow Connection Speed",
      solution: "Try switching to a different proxy server location. If the issue persists, check your internet connection and disable any VPN services that might conflict.",
      category: "Performance"
    },
    {
      issue: "Wave Proxy Connection Failed",
      solution: "Ensure you have the latest version of Wave. Clear your DNS cache by running 'ipconfig /flushdns' in Command Prompt (Windows) or 'sudo dscacheutil -flushcache' in Terminal (Mac).",
      category: "Wave Specific"
    },
    {
      issue: "Site Blocked or Inaccessible",
      solution: "Some sites may have advanced proxy detection. Try using a different proxy endpoint or contact support for alternative access methods.",
      category: "Access"
    },
    {
      issue: "Login Issues Through Proxy",
      solution: "Disable browser extensions that might interfere with authentication. Make sure cookies are enabled and try using the proxy in a fresh browser session.",
      category: "Authentication"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Common Fixes
            </h1>
            <p className="text-xl text-muted-foreground">
              Solutions to the most common Wave proxy issues
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {fixes.map((fix, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:shadow-[0_0_20px_hsl(263_70%_60%/0.2)] transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 text-xl mb-2">
                        <AlertCircle className="w-5 h-5 text-primary" />
                        {fix.issue}
                      </CardTitle>
                      <CardDescription className="text-xs font-semibold text-accent">
                        {fix.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/90 leading-relaxed">
                      {fix.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Still Having Issues?</h3>
            <p className="text-muted-foreground mb-6">
              If none of these solutions work, reach out on Discord for personalized support.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:shadow-[0_0_30px_hsl(263_70%_60%/0.8)] transition-all duration-300 hover:scale-105 font-medium"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fixes;

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

const Fixes = () => {
  const fixes = [
    {
      issue: "Wave crashes upon injection",
      solution: "• Ensure you have an active subscription. Wave will not work without one.\n• Ensure your antivirus is disabled and, ideally, the %localappdata%\\wave is whitelisted.\n• Re-launch Wave and join the game again\n• Reinstall both Wave and Roblox",
      category: "Injection"
    },
    {
      issue: '"Failed to read" - registry error',
      solution: "Launch Roblox with administrative permissions (right click -> run as administrator)",
      category: "Registry"
    },
    {
      issue: "Authentication Error",
      solution: "This is due to account sharing, changing hardware, or switching devices entirely. The issue will resolve itself within 72 hours.",
      category: "Authentication"
    },
    {
      issue: "The SSL connection could not be established",
      solution: "• Launch Wave with a VPN\n• Install https://1.1.1.1 and launch Cloudflare Warp (if you do not have a VPN)\n• Go into your tray (up arrow in the bottom right of your taskbar) and ensure Warp is enabled (not 1.1.1.1 by itself)\n• Launch Wave",
      category: "Connection"
    },
    {
      issue: "Every username is taken | unable to register",
      solution: "• Try logging in using the username/email and password you attempted to register with\n• If you're launching Wave from the bootstrapper, then instead re-launch from %localappdata%\\wave\\Wave.exe\n• Launch Wave with a VPN\n• Install https://1.1.1.1 and launch Cloudflare Warp (if you do not have a VPN)\n• Go into your tray (up arrow in the bottom right of your taskbar) and ensure Warp is enabled (not 1.1.1.1)\n• Launch Wave",
      category: "Registration"
    },
    {
      issue: "The filename, directory name, or volume label syntax is incorrect",
      solution: 'Press Win + R, type "regedit" and set HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders\\Desktop to %USERPROFILE%\\Desktop',
      category: "System"
    },
    {
      issue: "Wave not injecting",
      solution: "This issue is almost always caused by antivirus interference.\n\nEnsure the following are installed:\n• https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.33-windows-x64-installer\n• https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/\n\n• Disable any shaders or similar.\n• Ensure your Wave and ROBLOX installations are up to date.\n\nIf all of the above have been checked and Wave does not inject, you can attempt a manual injection by pressing Win + R, pasting in %localappdata%\\Wave\\bin\\ROBLOX_VERSION_HERE and running ClientManager.exe\n\nPath example: %localappdata%\\wave\\bin\\version-c1ac69007bdc4e48",
      category: "Injection"
    },
    {
      issue: "Verification Email | No Email?",
      solution: "Contrary to what the software says, Wave does not send a verification email when registering. You can log in immediately using the same details you attempted to register with.",
      category: "Registration"
    },
    {
      issue: "Under maintenance",
      solution: "Refer to the status channel in Wave's community server (discord.gg/WJN7vkZz5u). If Wave is currently live, simply reinstall it.",
      category: "Status"
    },
    {
      issue: "Failed to migrate folder",
      solution: "• Ensure no files in the original folder are open in another application.\n• You can restart your computer to be sure.",
      category: "System"
    },
    {
      issue: "Version mismatch",
      solution: "• Confirm Wave is updated for the latest version of Roblox.\n• Download Fishstrap here: https://github.com/fishstrap/fishstrap/releases/\n• Head to Fishstrap's deployment tab and set the channel to 'production'\n• Also set the automatic channel change action to 'Never change'.",
      category: "Updates"
    },
    {
      issue: "Failed to start the client manager…",
      solution: "• Disable Windows Defender along with Tamper Protection. Ideally, whitelist %localappdata%\\wave\\\n• Reinstall Wave after following the previous step.",
      category: "Client"
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
                    <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
                      {fix.solution}
                    </div>
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

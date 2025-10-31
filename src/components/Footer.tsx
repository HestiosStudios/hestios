import { Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter/X", url: "#" },
    { icon: Youtube, label: "YouTube", url: "#" },
    { icon: MessageCircle, label: "Discord", url: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-xl font-bold text-white">H</span>
              </div>
              <span className="text-2xl font-bold text-foreground">HESTIOS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting innovative and immersive gaming experiences that push the boundaries of storytelling and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Studio</h4>
            <ul className="space-y-2">
              <li>
                <a href="/games" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Our Games
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hestios Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

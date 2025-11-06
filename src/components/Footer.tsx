import { Youtube, Instagram, Music2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@hestios_studios" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/hestios_studios" },
    { icon: Music2, label: "TikTok", url: "https://www.tiktok.com/@hestios_studios" },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      label: "X", 
      url: "https://x.com/hestios_studios" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.66.136 0 .275-.004.415-.012-.11.417-.169.836-.169 1.252 0 3.149 2.696 5.833 5.955 5.833 3.26 0 5.955-2.684 5.955-5.833 0-.416-.059-.835-.169-1.252.14.008.279.012.415.012 2.67 0 5.568-.924 6.383-3.66.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
        </svg>
      ), 
      label: "Bluesky", 
      url: "https://bsky.app/profile/hestios-studios.bsky.social" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/company/105388827" 
    },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="Hestios Logo" className="w-full h-full object-contain" />
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
                <a href="/services" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  About Us
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
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
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

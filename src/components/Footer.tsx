import { Youtube, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

// Official Steam icon SVG
const SteamIcon = () => (
  <svg viewBox="0 0 256 259" className="w-5 h-5" fill="currentColor">
    <path d="M127.779 0C60.21 0 5.2 52.105.492 118.479l68.67 28.36c5.833-3.996 12.873-6.343 20.476-6.343 1.368 0 2.716.071 4.04.203l30.627-44.384v-.622c0-27.774 22.596-50.371 50.37-50.371 27.774 0 50.371 22.597 50.371 50.37 0 27.775-22.597 50.372-50.37 50.372h-1.168l-43.676 31.161c.088 1.103.137 2.217.137 3.343 0 20.845-16.926 37.77-37.77 37.77-18.243 0-33.444-12.95-36.944-30.158L3.212 164.78C18.827 218.248 68.092 258.068 127.779 258.068c70.721 0 128.067-57.345 128.067-128.068C255.846 57.345 198.501 0 127.779 0z"/>
    <path d="M80.907 208.107l-15.504-6.408c2.735 5.71 7.304 10.568 13.232 13.652 12.845 6.683 28.675 1.666 35.359-11.178 3.24-6.226 3.617-13.12 1.064-19.41-2.554-6.292-7.468-11.07-13.845-14.378-6.29-3.27-12.986-3.735-19.107-1.89l16.016 6.625c9.476 4.931 13.148 16.498 8.214 25.873-4.936 9.373-16.503 13.048-25.874 8.117l.445-.003zm123.87-112.415c0-18.513-15.057-33.571-33.571-33.571-18.513 0-33.57 15.058-33.57 33.57 0 18.514 15.057 33.572 33.57 33.572 18.514 0 33.57-15.058 33.57-33.571zm-58.912-.02c0-13.969 11.36-25.33 25.33-25.33s25.33 11.361 25.33 25.33c0 13.97-11.36 25.33-25.33 25.33s-25.33-11.36-25.33-25.33z"/>
  </svg>
);

// Official Bluesky butterfly icon
const BlueskyIcon = () => (
  <svg viewBox="0 0 568 501" className="w-5 h-5" fill="currentColor">
    <path d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 388.29C285.169 377.407 284 368.845 284 368.845C284 368.845 282.831 377.407 280.369 388.29C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0533 296.954 15.7778 224.501C9.94445 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"/>
  </svg>
);

// TikTok icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// X (Twitter) icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@hestios_studios" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/hestios_studios" },
    { icon: TikTokIcon, label: "TikTok", url: "https://www.tiktok.com/@hestios_studios" },
    { icon: XIcon, label: "X", url: "https://x.com/hestios_studios" },
    { icon: BlueskyIcon, label: "Bluesky", url: "https://bsky.app/profile/hestios-studios.bsky.social" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/105388827" },
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
                    <Icon />
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

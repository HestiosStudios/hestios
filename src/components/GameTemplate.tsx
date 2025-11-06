import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface GameInfo {
  label: string;
  value: string | ReactNode;
}

interface GameTemplateProps {
  title: string;
  subtitle?: string;
  headerImage: string;
  headerImageAlt: string;
  content: ReactNode;
  gameInfo: GameInfo[];
  ctaButtons?: ReactNode;
}

const GameTemplate = ({
  title,
  subtitle,
  headerImage,
  headerImageAlt,
  content,
  gameInfo,
  ctaButtons,
}: GameTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Header */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={headerImage}
            alt={headerImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{title}</h1>
              {subtitle && (
                <p className="text-xl md:text-2xl text-accent font-medium">{subtitle}</p>
              )}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {content}
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {ctaButtons && (
                <Card className="p-6 bg-card border-border shadow-card sticky top-24">
                  <div className="space-y-4">
                    {ctaButtons}
                  </div>
                </Card>
              )}

              <Card className="p-6 bg-card border-border shadow-card sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-6">Game Info</h3>
                <dl className="space-y-4">
                  {gameInfo.map((info, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <dt className="text-sm text-muted-foreground mb-1">{info.label}</dt>
                      <dd className="text-foreground font-medium">{info.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GameTemplate;

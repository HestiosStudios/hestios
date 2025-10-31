import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Gamepad2, Code, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Innovative gameplay mechanics and immersive storytelling",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Cutting-edge technology and optimized performance",
    },
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Unique art direction and memorable experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroCarousel />

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-gradient mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine passion, creativity, and technical expertise to create unforgettable gaming experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-intense">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to collaborate or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-3 bg-gradient-accent text-accent-foreground rounded-lg font-semibold hover:shadow-glow transition-smooth"
              >
                Our Services
              </a>
              <a
                href="/careers"
                className="px-8 py-3 bg-card text-foreground border border-border rounded-lg font-semibold hover:border-accent transition-smooth"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

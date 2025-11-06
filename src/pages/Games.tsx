import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ivayamiVertical from "@/assets/ivayami-vertical.png";

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-gradient mb-6">Our Games</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the worlds we're creating - where every game tells a unique story and delivers an unforgettable experience.
            </p>
          </div>
        </section>

        {/* Ivayami - Featured Game */}
        <section className="container mx-auto px-6 py-12">
          <Card className="overflow-hidden bg-card border-border shadow-intense animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <img
                  src={ivayamiVertical}
                  alt="Ivayami"
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-accent text-accent-foreground text-sm font-bold rounded-lg shadow-glow">
                    IN DEVELOPMENT
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Ivayami
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A mysterious fantasy adventure that takes you through ancient ruins and sacred spaces. 
                  Uncover the secrets of a forgotten civilization as you navigate through atmospheric 
                  environments filled with wonder and danger.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">▸</span>
                      Immersive narrative-driven gameplay
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">▸</span>
                      Stunning atmospheric visuals
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">▸</span>
                      Puzzle-solving and exploration
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">▸</span>
                      Original soundtrack and sound design
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-border bg-background/80 hover:border-accent transition-smooth"
                  >
                    <a
                      href="https://store.steampowered.com/app/3337980"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>Wishlist on Steam</span>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-.69.09-1.36.26-2l4.46 1.85c.14-.19.3-.36.48-.51l-.01-4.78c.49-.11 1-.17 1.51-.17 4.41 0 8 3.59 8 8s-3.59 8-8 8zm-5.44-9.39l3.09 1.28c.09-.43.29-.82.57-1.13l.01-3.32C8.61 8.04 7.56 9.57 6.56 11.61zm9.11-3.28c-1.19 0-2.15.96-2.15 2.15 0 1.19.96 2.15 2.15 2.15 1.19 0 2.15-.96 2.15-2.15 0-1.19-.96-2.15-2.15-2.15z"/>
                      </svg>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-border hover:border-accent transition-smooth"
                  >
                    <a href="/games/ivayami">More About</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Development Updates */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Development Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "World Building",
                description: "Creating atmospheric environments that tell their own stories",
              },
              {
                title: "Character Design",
                description: "Developing memorable characters with depth and purpose",
              },
              {
                title: "Sound & Music",
                description: "Crafting an immersive audio experience that enhances gameplay",
              },
            ].map((insight, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{insight.title}</h3>
                <p className="text-muted-foreground">{insight.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Projects */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-dark rounded-2xl p-12 text-center shadow-intense">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              More Games Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ivayami is just the beginning. We're working on exciting new projects that will push the boundaries of interactive storytelling.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              Stay Updated
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Games;

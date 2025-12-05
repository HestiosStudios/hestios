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
              <a href="/games/ivayami" className="relative h-[400px] lg:h-auto overflow-hidden block cursor-pointer">
                <img
                  src={ivayamiVertical}
                  alt="Ivayami - Click to learn more"
                  className="w-full h-full object-cover object-bottom transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-accent text-foreground text-sm font-bold rounded-lg shadow-glow">
                    IN DEVELOPMENT
                  </span>
                </div>
              </a>

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
                    className="border-border bg-muted/50 hover:bg-muted hover:border-accent transition-smooth"
                  >
                    <a
                      href="https://store.steampowered.com/app/3337980"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground"
                    >
                      <span>Wishlist on Steam</span>
                      <svg className="w-5 h-5" viewBox="0 0 256 259" fill="currentColor">
                        <path d="M127.779 0C60.21 0 5.2 52.105.492 118.479l68.67 28.36c5.833-3.996 12.873-6.343 20.476-6.343 1.368 0 2.716.071 4.04.203l30.627-44.384v-.622c0-27.774 22.596-50.371 50.37-50.371 27.774 0 50.371 22.597 50.371 50.37 0 27.775-22.597 50.372-50.37 50.372h-1.168l-43.676 31.161c.088 1.103.137 2.217.137 3.343 0 20.845-16.926 37.77-37.77 37.77-18.243 0-33.444-12.95-36.944-30.158L3.212 164.78C18.827 218.248 68.092 258.068 127.779 258.068c70.721 0 128.067-57.345 128.067-128.068C255.846 57.345 198.501 0 127.779 0z"/>
                        <path d="M80.907 208.107l-15.504-6.408c2.735 5.71 7.304 10.568 13.232 13.652 12.845 6.683 28.675 1.666 35.359-11.178 3.24-6.226 3.617-13.12 1.064-19.41-2.554-6.292-7.468-11.07-13.845-14.378-6.29-3.27-12.986-3.735-19.107-1.89l16.016 6.625c9.476 4.931 13.148 16.498 8.214 25.873-4.936 9.373-16.503 13.048-25.874 8.117l.445-.003zm123.87-112.415c0-18.513-15.057-33.571-33.571-33.571-18.513 0-33.57 15.058-33.57 33.57 0 18.514 15.057 33.572 33.57 33.572 18.514 0 33.57-15.058 33.57-33.571zm-58.912-.02c0-13.969 11.36-25.33 25.33-25.33s25.33 11.361 25.33 25.33c0 13.97-11.36 25.33-25.33 25.33s-25.33-11.36-25.33-25.33z"/>
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

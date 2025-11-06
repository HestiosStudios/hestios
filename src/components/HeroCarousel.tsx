import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMain from "@/assets/hero-main.png";
import heroIvayami from "@/assets/hero-ivayami.png";
import heroJourney from "@/assets/hero-journey.png";

interface Slide {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const slides: Slide[] = [
  {
    title: "Crafting Immersive Worlds",
    description: "Where creativity meets innovation in game development",
    image: heroMain,
  },
  {
    title: "Ivayami",
    description: "Our debut title - A journey into mystery and discovery",
    image: heroIvayami,
    link: "/games/ivayami",
  },
  {
    title: "Join Our Journey",
    description: "We're building something special. Be part of it.",
    image: heroJourney,
    link: "/careers",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center space-y-8 animate-fade-in-up">
        <h1 className="text-gradient max-w-4xl mx-auto">
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          {slide.description}
        </p>

        {slide.link && (
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-smooth"
            >
              <a href={slide.link}>Learn More</a>
            </Button>
          </div>
        )}

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 pt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-smooth ${
                index === currentSlide ? "bg-accent" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const whatWeDoSection = document.getElementById('what-we-do');
          whatWeDoSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to What We Do section"
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </button>
    </section>
  );
};

export default HeroCarousel;

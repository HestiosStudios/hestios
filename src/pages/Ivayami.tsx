import GameTemplate from "@/components/GameTemplate";
import { Button } from "@/components/ui/button";
import heroIvayami from "@/assets/hero-ivayami.png";

const Ivayami = () => {
  const gameInfo = [
    { label: "Genre", value: "Adventure, Mystery, Puzzle" },
    { label: "Platform", value: "PC (Steam)" },
    { label: "Release Date", value: "TBA" },
    { label: "Developer", value: "Hestios Studio" },
    { label: "Status", value: <span className="text-accent font-bold">In Development</span> },
  ];

  const ctaButtons = (
    <Button
      asChild
      size="lg"
      className="w-full bg-gradient-accent text-foreground hover:opacity-90 transition-smooth"
    >
      <a
        href="https://store.steampowered.com/app/3337980"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        <span>Wishlist on Steam</span>
        <svg className="w-5 h-5" viewBox="0 0 256 259" fill="currentColor">
          <path d="M127.779 0C60.21 0 5.2 52.105.492 118.479l68.67 28.36c5.833-3.996 12.873-6.343 20.476-6.343 1.368 0 2.716.071 4.04.203l30.627-44.384v-.622c0-27.774 22.596-50.371 50.37-50.371 27.774 0 50.371 22.597 50.371 50.37 0 27.775-22.597 50.372-50.37 50.372h-1.168l-43.676 31.161c.088 1.103.137 2.217.137 3.343 0 20.845-16.926 37.77-37.77 37.77-18.243 0-33.444-12.95-36.944-30.158L3.212 164.78C18.827 218.248 68.092 258.068 127.779 258.068c70.721 0 128.067-57.345 128.067-128.068C255.846 57.345 198.501 0 127.779 0z"/>
          <path d="M80.907 208.107l-15.504-6.408c2.735 5.71 7.304 10.568 13.232 13.652 12.845 6.683 28.675 1.666 35.359-11.178 3.24-6.226 3.617-13.12 1.064-19.41-2.554-6.292-7.468-11.07-13.845-14.378-6.29-3.27-12.986-3.735-19.107-1.89l16.016 6.625c9.476 4.931 13.148 16.498 8.214 25.873-4.936 9.373-16.503 13.048-25.874 8.117l.445-.003zm123.87-112.415c0-18.513-15.057-33.571-33.571-33.571-18.513 0-33.57 15.058-33.57 33.57 0 18.514 15.057 33.572 33.57 33.572 18.514 0 33.57-15.058 33.57-33.571zm-58.912-.02c0-13.969 11.36-25.33 25.33-25.33s25.33 11.361 25.33 25.33c0 13.97-11.36 25.33-25.33 25.33s-25.33-11.36-25.33-25.33z"/>
        </svg>
      </a>
    </Button>
  );

  const content = (
    <div className="prose prose-invert max-w-none">
      <section className="mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ivayami is a mysterious fantasy adventure that takes you through ancient ruins and sacred spaces. 
          Uncover the secrets of a forgotten civilization as you navigate through atmospheric environments 
          filled with wonder and danger.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">The Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In a world shrouded in mist and forgotten by time, you awaken in the ruins of an ancient temple. 
          With only a lantern to guide your way, you must piece together the fragments of a lost civilization 
          while evading the shadows that lurk in the darkness.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ivayami weaves a narrative of discovery, loss, and redemption. Every corner holds a clue, 
          every artifact tells a story, and every choice shapes your journey through this hauntingly 
          beautiful world.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-accent mr-3 mt-1">▸</span>
            <span><strong className="text-foreground">Atmospheric Exploration:</strong> Navigate through beautifully crafted environments filled with secrets and mysteries</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 mt-1">▸</span>
            <span><strong className="text-foreground">Puzzle Solving:</strong> Unravel intricate puzzles that blend seamlessly with the narrative</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 mt-1">▸</span>
            <span><strong className="text-foreground">Narrative-Driven Gameplay:</strong> Experience a compelling story told through environmental storytelling and discovered artifacts</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 mt-1">▸</span>
            <span><strong className="text-foreground">Immersive Audio:</strong> An original soundtrack and detailed sound design enhance every moment</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 mt-1">▸</span>
            <span><strong className="text-foreground">Stunning Visuals:</strong> Hand-crafted environments that bring the mysterious world to life</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Development Journey</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Ivayami represents our debut project at Hestios Studio. Every aspect of the game—from its 
          art direction to its gameplay mechanics—has been carefully crafted to create an experience 
          that respects the player's intelligence and rewards exploration.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We're taking our time to ensure that Ivayami delivers on its promise of atmosphere, mystery, 
          and meaningful gameplay. Follow our development journey and be part of bringing this world to life.
        </p>
      </section>
    </div>
  );

  return (
    <GameTemplate
      title="Ivayami"
      subtitle="Cradle of Fog"
      headerImage={heroIvayami}
      headerImageAlt="Ivayami game hero"
      content={content}
      gameInfo={gameInfo}
      ctaButtons={ctaButtons}
    />
  );
};

export default Ivayami;

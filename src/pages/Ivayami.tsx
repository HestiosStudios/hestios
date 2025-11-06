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
    <>
      <Button
        asChild
        size="lg"
        className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-smooth"
      >
        <a
          href="https://store.steampowered.com/app/3337980"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
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
        className="w-full border-border hover:border-accent transition-smooth"
      >
        <a href="/games">Back to Games</a>
      </Button>
    </>
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

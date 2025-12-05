import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import creativeDirector from "@/assets/creative-director.png";
import technicalLead from "@/assets/technical-lead.png";
import artDirector from "@/assets/art-director.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To create innovative gaming experiences that captivate players and push the boundaries of interactive storytelling.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become a recognized indie studio known for unique, high-quality games that resonate with players worldwide.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Creativity, passion, player-first design, technical excellence, and a commitment to meaningful gaming experiences.",
    },
  ];

  const team = [
    {
      name: "Creative Director",
      role: "Vision & Design",
      description: "Leading the creative direction and ensuring every project stays true to our artistic vision.",
      image: creativeDirector,
    },
    {
      name: "Technical Lead",
      role: "Engineering & Systems",
      description: "Building robust systems and optimizing performance to deliver smooth, engaging gameplay.",
      image: technicalLead,
    },
    {
      name: "Art Director",
      role: "Visual Identity",
      description: "Crafting unique visual styles that bring our game worlds to life with memorable aesthetics.",
      image: artDirector,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-gradient mb-6">About Hestios</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are an independent game studio driven by a passion for creating immersive, 
              innovative gaming experiences. Founded by a team of industry veterans and creative 
              visionaries, we believe in the power of games to tell meaningful stories and create 
              lasting memories.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-smooth">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Studio Story */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-dark border-border shadow-intense">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hestios was born from a shared dream: to create games that matter. We came together 
                  as a group of passionate developers, artists, and storytellers who believed that 
                  independent studios could push the boundaries of what's possible in gaming.
                </p>
                <p>
                  Our approach is simple yet ambitious - we focus on quality over quantity, creativity 
                  over convention, and player experience above all else. Every project we undertake is 
                  a labor of love, meticulously crafted to deliver something truly special.
                </p>
                <p>
                  With Ivayami, our debut title, we're setting the foundation for what Hestios 
                  represents: atmospheric worlds, meaningful narratives, and gameplay that respects 
                  and rewards player investment. This is just the beginning of our journey.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of talented individuals united by a passion for game development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-accent">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-intense">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision.
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-3 bg-gradient-accent text-foreground rounded-lg font-semibold hover:shadow-glow transition-smooth"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Rocket, Coffee } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Careers = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Remote-Friendly",
      description: "Work from anywhere while collaborating with our talented team.",
    },
    {
      icon: Users,
      title: "Creative Culture",
      description: "Join a team that values innovation, creativity, and collaboration.",
    },
    {
      icon: Rocket,
      title: "Growth Opportunities",
      description: "Develop your skills and grow alongside the studio.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "We believe in sustainable development and healthy work practices.",
    },
  ];

  const idealCandidates = [
    "Game Developers (Unity/Unreal)",
    "3D Artists & Animators",
    "UI/UX Designers",
    "Sound Designers & Composers",
    "Narrative Designers",
    "QA Testers",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-gradient mb-6">Work With Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our passionate team and help us create the next generation of indie games. 
              We're looking for creative minds who share our vision and values.
            </p>
          </div>
        </section>

        {/* Current Status Alert */}
        <section className="container mx-auto px-6 py-8">
          <Alert className="bg-card border-accent max-w-3xl mx-auto">
            <AlertDescription className="text-center text-muted-foreground">
              <strong className="text-foreground">Note:</strong> We are currently focusing on 
              internal development and not actively reviewing applications. However, we encourage 
              talented individuals to check back soon for future opportunities!
            </AlertDescription>
          </Alert>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join Hestios?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a creative, supportive environment where your work truly matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-smooth">
                  <benefit.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* What We're Looking For */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-dark border-border shadow-intense">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Who We're Looking For
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                We're always interested in connecting with passionate developers, artists, and designers 
                who love creating games. Here are some roles we typically look for:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {idealCandidates.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border border-border hover:border-accent transition-smooth"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Hiring Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When we're actively hiring, here's what you can expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Application", desc: "Submit your portfolio and resume" },
              { step: "02", title: "Review", desc: "We review your work and experience" },
              { step: "03", title: "Interview", desc: "Chat with the team about the role" },
              { step: "04", title: "Offer", desc: "Welcome to the team!" },
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-accent text-accent-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blocked Form Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border shadow-intense opacity-75">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Express Your Interest</h2>
              <p className="text-muted-foreground text-center mb-8">
                Application submissions are currently paused
              </p>

              <div className="space-y-6 relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center z-10 p-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <Briefcase className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Applications Currently Closed</h3>
                    <p className="text-muted-foreground max-w-sm">
                      We're not accepting applications at this time, but we'll announce when positions open up. 
                      Follow us on social media to stay updated!
                    </p>
                  </div>
                </div>

                {/* Disabled form fields (for visual purposes) */}
                <div className="space-y-4 pointer-events-none">
                  <div className="h-10 bg-muted rounded-md" />
                  <div className="h-10 bg-muted rounded-md" />
                  <div className="h-32 bg-muted rounded-md" />
                  <Button disabled className="w-full" size="lg">
                    Submit Application
                  </Button>
                </div>
              </div>
            </Card>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Want to stay informed about future opportunities?
              </p>
              <Button
                size="lg"
                className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-smooth"
              >
                Follow Our Updates
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;

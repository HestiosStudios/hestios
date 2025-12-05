import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Palette, Cpu, Users } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Game Development",
      description: "Full-cycle game development from concept to launch, including gameplay programming, system architecture, and technical optimization.",
    },
    {
      icon: Palette,
      title: "Design Consulting",
      description: "Expert guidance on game design, UX/UI, narrative design, and creating engaging player experiences that resonate.",
    },
    {
      icon: Cpu,
      title: "Technical Solutions",
      description: "Custom tools development, performance optimization, and technical problem-solving for game projects of any scale.",
    },
    {
      icon: Users,
      title: "Co-Development",
      description: "Partner with us to bring your vision to life. We work alongside your team to deliver exceptional results.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={servicesBg}
              alt="Services"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          </div>
          
          <div className="relative container mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-gradient mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive game development services to help bring your creative vision to life.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality, creativity, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and goals" },
              { step: "02", title: "Planning", desc: "Strategic roadmap and timeline" },
              { step: "03", title: "Development", desc: "Bringing ideas to life with expertise" },
              { step: "04", title: "Delivery", desc: "Launch and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-accent text-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border shadow-intense">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Get In Touch</h2>
              <p className="text-muted-foreground text-center mb-8">
                Have a project in mind? Let's discuss how we can help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-smooth"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

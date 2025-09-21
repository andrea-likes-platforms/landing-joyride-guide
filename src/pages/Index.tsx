import Layout from "@/components/Layout";
import NavigationCard from "@/components/NavigationCard";
import { Button } from "@/components/ui/button";
import { Database, Settings, Users, BookOpen, Zap, Shield, Rocket, Star, Sparkles } from "lucide-react";
import themeParkHero from "@/assets/theme-park-hero.jpg";
import rollercoasterAccent from "@/assets/rollercoaster-accent.jpg";

const Index = () => {
  const navigationCards = [
    {
      title: "Introduction",
      description: "Learn the fundamentals of platform engineering and how to get started with building internal platforms.",
      href: "/content?section=introduction",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Architecture",
      description: "Explore platform architecture patterns, design principles, and best practices for scalable systems.",
      href: "/content?section=architecture", 
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Adoption",
      description: "Strategies for platform adoption, change management, and building developer engagement.",
      href: "/content?section=adoption",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Tools & Automation",
      description: "Discover tools, frameworks, and automation strategies that power modern platform engineering.",
      href: "/content?section=tools",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Security & Compliance",
      description: "Platform security best practices, compliance frameworks, and governance strategies.",
      href: "/content?section=security",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Configuration",
      description: "Platform configuration management, environment setup, and operational procedures.",
      href: "/content?section=configuration",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Theme Park Background */}
        <div 
          className="relative text-center mb-16 max-w-6xl mx-auto rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${themeParkHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '600px'
          }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-full py-20 px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              🎢 Platform Engineering Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl drop-shadow-lg">
              Welcome aboard the most exciting platform engineering adventure! 
              Build amazing internal platforms with tools, patterns, and practices that actually work.
            </p>
            
            {/* Three Fun Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Explore Tools
              </Button>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Inspired
              </Button>
            </div>
            
            <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={index}
              title={card.title}
              description={card.description}
              href={card.href}
              icon={card.icon}
            />
          ))}
        </div>

        {/* Footer section */}
        <div className="text-center mt-16 py-8 border-t border-border">
          <p className="text-muted-foreground">
            Building better platforms together. Start with any section above to begin your journey.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

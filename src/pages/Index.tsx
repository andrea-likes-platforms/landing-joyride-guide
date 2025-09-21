import Layout from "@/components/Layout";
import NavigationCard from "@/components/NavigationCard";
import { Database, Settings, Users, BookOpen, Zap, Shield } from "lucide-react";

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
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Platform Engineering Toolkit
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive collection of tools, patterns, and best practices for building and maintaining 
            internal developer platforms. Navigate through essential topics to accelerate your platform journey.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
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

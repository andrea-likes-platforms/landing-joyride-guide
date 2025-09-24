import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Layers, Palette, Briefcase, DollarSign, Map, MessageSquare, UserPlus, ArrowRight } from "lucide-react";

const StartingAndProgressing = () => {
  const articles = [
    {
      slug: "architecture-for-flow",
      title: "Architecture for flow",
      description: "Guidance in designing adaptive, socio-technical systems. A combination of tools (wardley mapping, Domain Driven Design & Team Topologies), that complement each other in a structured way.",
      audience: "System Architects, Platform Engineers",
      type: "Book",
      readTime: "Workshop tool",
      icon: <Layers className="w-6 h-6" />
    },
    {
      slug: "pe-maturity-model",
      title: "PE Maturity model (by CNCF)",
      description: "A framework for reflection and for identifying opportunities for improvement in any organization leveraging platforms",
      audience: "Platform Leaders, CTOs",
      type: "Maturity model",
      readTime: "Assessment framework",
      icon: <Target className="w-6 h-6" />
    },
    {
      slug: "platform-tooling-landscape",
      title: "Platform tooling landscape",
      description: "Comprehensive overview of the tools and technologies that make up a modern platform engineering ecosystem.",
      audience: "Platform Engineers, DevOps Teams",
      type: "Guide",
      readTime: "15 min read",
      icon: <Palette className="w-6 h-6" />
    },
    {
      slug: "pe-kickoff-approach",
      title: "Platform Engineering Kickoff approach",
      description: "Step-by-step methodology for initiating and launching your platform engineering transformation journey.",
      audience: "Platform Leaders, Engineering Managers",
      type: "Methodology",
      readTime: "Workshop guide",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      slug: "pe-engagement-canvas",
      title: "PE Engagement Canvas",
      description: "Visual framework for understanding and planning stakeholder engagement in platform engineering initiatives.",
      audience: "Product Managers, Platform Leaders",
      type: "Canvas",
      readTime: "Interactive tool",
      icon: <Users className="w-6 h-6" />
    },
    {
      slug: "pe-enablement-services-canvas",
      title: "PE enablement services canvas",
      description: "Map and design the services your platform will provide to enable development teams effectively.",
      audience: "Platform Engineers, Service Designers",
      type: "Canvas",
      readTime: "Planning tool",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      slug: "platform-funding-design",
      title: "Platform funding design",
      description: "Strategic approaches to securing sustainable funding and business case development for platform initiatives.",
      audience: "Platform Leaders, Finance Teams",
      type: "Framework",
      readTime: "Business guide",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      slug: "user-needs-mapping",
      title: "User Needs Mapping",
      description: "Systematic approach to understanding and documenting the needs of developers and teams using your platform.",
      audience: "Product Managers, UX Designers",
      type: "Method",
      readTime: "Research tool",
      icon: <Map className="w-6 h-6" />
    },
    {
      slug: "storytelling-levels",
      title: "Story telling on different levels",
      description: "Effective communication strategies for platform engineering across organizational levels and stakeholders.",
      audience: "Platform Leaders, Communication Teams",
      type: "Guide",
      readTime: "Communication framework",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      slug: "find-sponsors-core-team",
      title: "Find sponsors and core team",
      description: "Strategies for identifying, engaging, and building relationships with key sponsors and assembling your core platform team.",
      audience: "Platform Leaders, HR Partners",
      type: "Strategy",
      readTime: "Team building guide",
      icon: <UserPlus className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            🚀 Starting And Progressing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get inspired by real-world examples and learn how to advance your platform engineering maturity. 
            Discover success stories and progression strategies.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {article.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {article.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{article.audience}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                  asChild
                >
                  <a href={`/${article.slug}`}>
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="text-center mt-16 py-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Continue your platform engineering journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="/where-to-start">← Where To Start</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/">← Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StartingAndProgressing;
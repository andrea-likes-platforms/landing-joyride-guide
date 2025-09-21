import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, MapPin, ArrowRight } from "lucide-react";

const WhatAndWhy = () => {
  const articles = [
    {
      slug: "introduction-to-platform-engineering",
      title: "Introduction to platform engineering",
      description: "Learn the fundamentals of platform engineering and understand how it transforms software delivery teams.",
      audience: "Developers, Engineering Managers",
      type: "Article",
      readTime: "8 min read",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      slug: "creating-platform-as-value-system",
      title: "Creating a platform as a system of value",
      description: "Discover how to build platforms that deliver measurable business value and drive organizational success.",
      audience: "CTOs, Platform Leaders",
      type: "Workshop",
      readTime: "45 min workshop",
      icon: <Users className="w-6 h-6" />
    },
    {
      slug: "platform-engineering-tool-map",
      title: "The Platform Engineering Tool Map",
      description: "Navigate the complex landscape of platform engineering tools with our comprehensive visual guide.",
      audience: "Platform Engineers, DevOps Teams",
      type: "Canvas",
      readTime: "Interactive guide",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            🎢 What And Why
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Start your platform engineering journey by understanding the fundamentals. 
            These resources will help you grasp what platform engineering is and why it matters for your organization.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{article.audience}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                  asChild
                >
                  <a href={`/article/${article.slug}`}>
                    Read {article.type}
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
            Ready to dive deeper into platform engineering?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="/where-to-start">Where To Start →</a>
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

export default WhatAndWhy;
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Layers, Palette, Briefcase, DollarSign, Map, MessageSquare, UserPlus, ArrowRight } from "lucide-react";

const StartingAndProgressing = () => {
  const tiles = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Topic ${index + 1}`,
    description: "Coming soon",
    icon: <BookOpen className="w-6 h-6" />
  }));

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

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiles.map((tile, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {tile.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tile.id}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                  {tile.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {tile.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                  disabled
                >
                  Coming Soon
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
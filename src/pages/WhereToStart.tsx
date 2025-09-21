import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const WhereToStart = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            🎯 Where To Start
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to begin your platform engineering implementation? 
            Here's your roadmap to getting started with the right tools and approaches.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Card */}
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/20">
              <Star className="w-12 h-12 text-secondary" />
            </div>
            <CardTitle className="text-2xl mb-4">Content Coming Soon!</CardTitle>
            <CardDescription className="text-lg">
              We're crafting amazing content about where to start your platform engineering journey. 
              This section will include practical guides, tool recommendations, and step-by-step tutorials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="outline" asChild>
                <a href="/what-and-why">← What And Why</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/starting-and-progressing">Starting And Progressing →</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WhereToStart;
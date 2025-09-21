import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const StartingAndProgressing = () => {
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

        {/* Coming Soon Card */}
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="mx-auto mb-4 p-4 rounded-full bg-accent/20">
              <Sparkles className="w-12 h-12 text-accent" />
            </div>
            <CardTitle className="text-2xl mb-4">Content Coming Soon!</CardTitle>
            <CardDescription className="text-lg">
              We're preparing inspiring content about starting and progressing in platform engineering. 
              This section will feature case studies, maturity models, and progression frameworks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="outline" asChild>
                <a href="/where-to-start">← Where To Start</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StartingAndProgressing;
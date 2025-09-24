import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

const PEEngagementCanvas = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" className="mb-8" asChild>
          <a href="/starting-and-progressing">← Back to Starting And Progressing</a>
        </Button>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge>Canvas</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            PE Engagement Canvas
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Product Managers, Platform Leaders</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Interactive tool</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Visual framework for understanding and planning stakeholder engagement in platform engineering initiatives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/20">
                <Users className="w-12 h-12 text-secondary" />
              </div>
              <CardTitle className="text-2xl mb-4">Content Coming Soon!</CardTitle>
              <CardDescription className="text-lg">
                We're creating interactive content about the PE Engagement Canvas. 
                This will include templates, examples, and facilitation guides.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <a href="/starting-and-progressing">← Back to Starting And Progressing</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PEEngagementCanvas;
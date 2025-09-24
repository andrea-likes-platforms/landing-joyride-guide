import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Map } from "lucide-react";

const UserNeedsMapping = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" className="mb-8" asChild>
          <a href="/starting-and-progressing">← Back to Starting And Progressing</a>
        </Button>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge>Method</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            User Needs Mapping
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Product Managers, UX Designers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Research tool</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Systematic approach to understanding and documenting the needs of developers and teams using your platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/20">
                <Map className="w-12 h-12 text-secondary" />
              </div>
              <CardTitle className="text-2xl mb-4">Content Coming Soon!</CardTitle>
              <CardDescription className="text-lg">
                We're creating content about user needs mapping methodologies. 
                This will include research frameworks, interview guides, and analysis templates.
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

export default UserNeedsMapping;
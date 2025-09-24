import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Target, ArrowRight } from "lucide-react";

const PEMaturityModel = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <Button variant="ghost" className="mb-8" asChild>
          <a href="/starting-and-progressing">
            ← Back to Starting And Progressing
          </a>
        </Button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge>Maturity Model</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            PE Maturity Model (by CNCF)
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Platform Leaders, CTOs</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Assessment framework</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            A framework for reflection and for identifying opportunities for improvement in any organization leveraging platforms
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">About the Model</h2>
            <p className="text-muted-foreground mb-6">
              The Platform Engineering Maturity Model, developed by the Cloud Native Computing Foundation (CNCF), provides organizations with a structured approach to assess their current platform engineering capabilities and identify areas for improvement.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Areas</h2>
            <p className="text-muted-foreground mb-4">
              The maturity model evaluates organizations across several key dimensions:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li><strong>Platform Strategy:</strong> Alignment with business objectives and clear vision</li>
              <li><strong>Developer Experience:</strong> Self-service capabilities and tooling</li>
              <li><strong>Platform Operations:</strong> Reliability, observability, and automation</li>
              <li><strong>Platform Evolution:</strong> Continuous improvement and adaptation</li>
              <li><strong>Organizational Alignment:</strong> Culture, skills, and governance</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-foreground">Maturity Levels</h2>
            <p className="text-muted-foreground mb-6">
              Organizations progress through different maturity levels, each representing increased sophistication and capability in platform engineering practices. Use this model to benchmark your current state and plan your evolution journey.
            </p>
          </div>

          {/* Resource */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                CNCF Platform Engineering Maturity Model
              </CardTitle>
              <CardDescription>
                Access the complete maturity model and assessment framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href="https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/#model-table" target="_blank" rel="noopener noreferrer">
                  View Maturity Model
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <a href="/architecture-for-flow">← Previous: Architecture for Flow</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/starting-and-progressing">← Back to Starting And Progressing</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PEMaturityModel;
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Play, ArrowRight } from "lucide-react";

const ArchitectureForFlow = () => {
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
            <Badge>Book</Badge>
            <Badge>Structure/Classification</Badge>
            <Badge>Workshop Tool</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Architecture for Flow
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>System Architects, Platform Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Workshop tool</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Guidance in designing adaptive, socio-technical systems. A combination of tools (wardley mapping, Domain Driven Design & Team Topologies), that complement each other in a structured way.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
            <p className="text-muted-foreground mb-6">
              Architecture for Flow provides a comprehensive framework for designing systems that enable smooth, efficient workflows across your organization. This approach combines three powerful methodologies to create adaptive, socio-technical systems that evolve with your business needs.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Components</h2>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li><strong>Wardley Mapping:</strong> Strategic tool for understanding your landscape and evolution</li>
              <li><strong>Domain Driven Design:</strong> Modeling approach for complex business domains</li>
              <li><strong>Team Topologies:</strong> Organizational patterns for effective team structures</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-foreground">Benefits</h2>
            <p className="text-muted-foreground mb-6">
              By combining these methodologies in a structured way, Architecture for Flow helps organizations create systems that are not only technically sound but also organizationally aligned, enabling better flow of value from conception to delivery.
            </p>
          </div>

          {/* Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Canvas & Resources
                </CardTitle>
                <CardDescription>
                  Access the Architecture for Flow canvas and additional resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href="https://susannekaiser.net/architecture-for-flow-canvas/" target="_blank" rel="noopener noreferrer">
                    Visit Canvas
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Video Introduction
                </CardTitle>
                <CardDescription>
                  Watch the introduction video to understand the concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://youtu.be/Mm0ctgk-uIM?feature=shared" target="_blank" rel="noopener noreferrer">
                    Watch Video
                    <Play className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <a href="/starting-and-progressing">← Back to Starting And Progressing</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/pe-maturity-model">Next: PE Maturity Model →</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArchitectureForFlow;
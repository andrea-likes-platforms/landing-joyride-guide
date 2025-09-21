import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users } from "lucide-react";

const ArticleView = () => {
  const { slug } = useParams();

  const articles = {
    "introduction-to-platform-engineering": {
      title: "Introduction to platform engineering",
      audience: "Developers, Engineering Managers",
      type: "Article",
      readTime: "8 min read",
      content: `
        <h2>What is Platform Engineering?</h2>
        <p>Platform engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud-native era.</p>
        
        <h2>Why Platform Engineering Matters</h2>
        <p>As organizations scale their software delivery, they face increasing complexity in managing infrastructure, tooling, and workflows. Platform engineering addresses this by:</p>
        <ul>
          <li>Reducing cognitive load on development teams</li>
          <li>Standardizing workflows and best practices</li>
          <li>Enabling faster time-to-market</li>
          <li>Improving security and compliance</li>
        </ul>

        <h2>Key Components</h2>
        <p>A successful platform typically includes:</p>
        <ul>
          <li><strong>Developer Portal:</strong> Central hub for documentation and services</li>
          <li><strong>Self-Service Infrastructure:</strong> Automated provisioning and management</li>
          <li><strong>CI/CD Pipelines:</strong> Standardized deployment workflows</li>
          <li><strong>Observability:</strong> Monitoring and logging capabilities</li>
        </ul>

        <h2>Getting Started</h2>
        <p>Begin your platform engineering journey by understanding your organization's specific needs and pain points. Focus on solving real problems rather than building technology for its own sake.</p>
      `
    },
    "creating-platform-as-value-system": {
      title: "Creating a platform as a system of value",
      audience: "CTOs, Platform Leaders", 
      type: "Workshop",
      readTime: "45 min workshop",
      content: `
        <h2>Workshop: Building Value-Driven Platforms</h2>
        <p>This interactive workshop guides you through creating platforms that deliver measurable business value.</p>
        
        <h2>Part 1: Value Identification (15 minutes)</h2>
        <p>Identify the core value propositions your platform should deliver:</p>
        <ul>
          <li>Developer productivity gains</li>
          <li>Operational efficiency improvements</li>
          <li>Security and compliance benefits</li>
          <li>Cost optimization opportunities</li>
        </ul>

        <h2>Part 2: Metrics Definition (15 minutes)</h2>
        <p>Define measurable outcomes for your platform:</p>
        <ul>
          <li>Deployment frequency</li>
          <li>Lead time for changes</li>
          <li>Mean time to recovery</li>
          <li>Developer satisfaction scores</li>
        </ul>

        <h2>Part 3: Implementation Strategy (15 minutes)</h2>
        <p>Create a roadmap that prioritizes value delivery:</p>
        <ul>
          <li>Quick wins and early adopters</li>
          <li>Incremental feature rollout</li>
          <li>Feedback loops and iteration</li>
          <li>Success measurement and communication</li>
        </ul>
      `
    },
    "platform-engineering-tool-map": {
      title: "The Platform Engineering Tool Map",
      audience: "Platform Engineers, DevOps Teams",
      type: "Canvas",
      readTime: "Interactive guide",
      content: `
        <h2>Platform Engineering Tool Landscape</h2>
        <p>Navigate the complex ecosystem of platform engineering tools with this comprehensive guide.</p>
        
        <h2>Infrastructure as Code</h2>
        <ul>
          <li><strong>Terraform:</strong> Multi-cloud infrastructure provisioning</li>
          <li><strong>Pulumi:</strong> Infrastructure as code with programming languages</li>
          <li><strong>AWS CDK:</strong> Cloud Development Kit for AWS</li>
        </ul>

        <h2>Container Orchestration</h2>
        <ul>
          <li><strong>Kubernetes:</strong> Container orchestration platform</li>
          <li><strong>Docker:</strong> Containerization technology</li>
          <li><strong>Helm:</strong> Kubernetes package manager</li>
        </ul>

        <h2>CI/CD Tools</h2>
        <ul>
          <li><strong>GitLab CI/CD:</strong> Integrated DevOps platform</li>
          <li><strong>GitHub Actions:</strong> Workflow automation</li>
          <li><strong>Jenkins:</strong> Open-source automation server</li>
        </ul>

        <h2>Observability</h2>
        <ul>
          <li><strong>Prometheus:</strong> Monitoring and alerting</li>
          <li><strong>Grafana:</strong> Visualization and dashboards</li>
          <li><strong>Jaeger:</strong> Distributed tracing</li>
        </ul>

        <h2>Developer Portals</h2>
        <ul>
          <li><strong>Backstage:</strong> Developer portal framework</li>
          <li><strong>Port:</strong> Developer portal platform</li>
          <li><strong>Cortex:</strong> Internal developer portal</li>
        </ul>
      `
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/what-and-why">← Back to What And Why</a>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-6" asChild>
            <a href="/what-and-why">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to What And Why
            </a>
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">{article.type}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center text-muted-foreground">
            <Users className="w-4 h-4 mr-2" />
            <span>For: {article.audience}</span>
          </div>
        </div>

        {/* Content */}
        <Card>
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">
            Continue your platform engineering journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="/what-and-why">← More Articles</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/where-to-start">Where To Start →</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleView;
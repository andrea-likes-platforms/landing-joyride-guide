import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentSection {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  resources?: {
    title: string;
    url: string;
    description: string;
  }[];
  tags?: string[];
}

const contentSections: Record<string, ContentSection> = {
  introduction: {
    id: "introduction",
    title: "Platform Engineering Introduction",
    subtitle: "Understanding the fundamentals of platform engineering",
    content: [
      "Platform engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud-native era.",
      "The goal is to optimize developer experience and accelerate product teams' ability to deliver customer value. Platform engineering reduces cognitive load on developers by providing golden paths for common tasks.",
      "Key principles include treating the platform as a product, focusing on developer experience, enabling self-service capabilities, and maintaining reliability and security at scale.",
      "Platform teams act as enablers, providing infrastructure, tools, and workflows that abstract away complexity while maintaining flexibility and control for development teams."
    ],
    tags: ["fundamentals", "overview", "principles"],
    resources: [
      {
        title: "Platform Engineering Community",
        url: "https://platformengineering.org",
        description: "Central hub for platform engineering resources and community"
      }
    ]
  },
  architecture: {
    id: "architecture",
    title: "Platform Architecture",
    subtitle: "Design patterns and architectural principles for platforms",
    content: [
      "Platform architecture should follow modular design principles with clear separation of concerns. Core components typically include infrastructure management, CI/CD pipelines, observability, and developer tooling.",
      "The architecture should be built on cloud-native technologies and embrace microservices patterns where appropriate. APIs should be the primary interface for platform services.",
      "Consider implementing a service mesh for communication, container orchestration with Kubernetes, and infrastructure as code for reproducible environments.",
      "Security should be built-in from the ground up, with zero-trust principles, automated security scanning, and compliance monitoring integrated into the platform."
    ],
    tags: ["architecture", "design-patterns", "cloud-native"],
    resources: [
      {
        title: "CNCF Landscape",
        url: "https://landscape.cncf.io",
        description: "Comprehensive overview of cloud-native technologies"
      }
    ]
  },
  adoption: {
    id: "adoption",
    title: "Platform Adoption Strategy",
    subtitle: "Successfully driving platform adoption across engineering teams",
    content: [
      "Successful platform adoption requires understanding your users (developers) and their pain points. Start by conducting user research and mapping current developer workflows.",
      "Begin with high-impact, low-effort improvements that provide immediate value. This builds trust and momentum for larger platform initiatives.",
      "Implement feedback loops and metrics to track adoption and success. Developer satisfaction surveys, usage analytics, and time-to-market metrics are essential.",
      "Provide excellent documentation, training, and support. Consider embedding platform engineers with product teams during initial adoption phases."
    ],
    tags: ["adoption", "change-management", "user-research"],
    resources: [
      {
        title: "Developer Experience Guidelines",
        url: "https://dx.tips",
        description: "Best practices for improving developer experience"
      }
    ]
  },
  tools: {
    id: "tools",
    title: "Tools & Automation",
    subtitle: "Essential tools and automation strategies for platform engineering",
    content: [
      "Infrastructure as Code (IaC) tools like Terraform, Pulumi, or AWS CDK are fundamental for reproducible and version-controlled infrastructure management.",
      "CI/CD platforms such as GitLab CI, GitHub Actions, or Jenkins provide automated testing and deployment capabilities. Consider GitOps approaches with ArgoCD or Flux.",
      "Container orchestration with Kubernetes, along with tools like Helm for package management and Kustomize for configuration management.",
      "Observability stack including metrics (Prometheus), logging (ELK stack), and tracing (Jaeger) for comprehensive system monitoring and debugging."
    ],
    tags: ["tools", "automation", "devops", "kubernetes"],
    resources: [
      {
        title: "CNCF Projects",
        url: "https://cncf.io/projects",
        description: "Cloud Native Computing Foundation graduated and incubating projects"
      }
    ]
  },
  security: {
    id: "security",
    title: "Security & Compliance",
    subtitle: "Platform security best practices and compliance frameworks",
    content: [
      "Implement security-by-design principles with automated security scanning in CI/CD pipelines. Tools like Snyk, Twistlock, or open-source alternatives should be integrated early in the development lifecycle.",
      "Establish identity and access management (IAM) with role-based access control (RBAC) and service-to-service authentication using tools like OAuth, OIDC, or service meshes.",
      "Container security includes image scanning, runtime protection, and network policies. Implement Pod Security Standards in Kubernetes environments.",
      "Compliance automation with policy-as-code using tools like Open Policy Agent (OPA) and regular security audits to ensure adherence to regulations like SOC2, GDPR, or industry-specific requirements."
    ],
    tags: ["security", "compliance", "policy-as-code", "scanning"],
    resources: [
      {
        title: "OWASP DevSecOps Guideline",
        url: "https://owasp.org/www-project-devsecops-guideline",
        description: "Security guidelines for DevOps and platform engineering"
      }
    ]
  },
  configuration: {
    id: "configuration",
    title: "Platform Configuration",
    subtitle: "Configuration management and operational procedures",
    content: [
      "Configuration management should follow the principle of immutable infrastructure with version-controlled configuration files stored in Git repositories.",
      "Environment-specific configurations should be externalized using tools like ConfigMaps, Secrets in Kubernetes, or external secret management systems like HashiCorp Vault.",
      "Implement configuration validation and testing to prevent deployment of invalid configurations. Use schema validation and automated testing of configuration changes.",
      "Establish clear operational procedures for configuration updates, rollbacks, and emergency changes. Document runbooks and ensure they are accessible to on-call engineers."
    ],
    tags: ["configuration", "gitops", "secrets-management", "operations"],
    resources: [
      {
        title: "12-Factor App Methodology",
        url: "https://12factor.net",
        description: "Best practices for building modern, scalable applications"
      }
    ]
  }
};

const Content = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") || "introduction";
  const [currentContent, setCurrentContent] = useState<ContentSection | null>(null);

  useEffect(() => {
    const content = contentSections[section];
    setCurrentContent(content || contentSections.introduction);
  }, [section]);

  if (!currentContent) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {currentContent.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">{currentContent.title}</h1>
            <p className="text-xl text-muted-foreground">{currentContent.subtitle}</p>
          </div>

          <Card className="p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {currentContent.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-card-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {currentContent.resources && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Additional Resources</h3>
              <div className="space-y-4">
                {currentContent.resources.map((resource, index) => (
                  <div key={index} className="flex items-start justify-between p-4 bg-secondary rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-card-foreground mb-1">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Content;
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const authors = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      role: "Platform Engineering Lead",
      bio: "Dr. Smith has over 15 years of experience in platform engineering and DevOps. She leads platform initiatives at Fortune 500 companies and is a regular speaker at tech conferences.",
      linkedinUrl: "https://linkedin.com/in/jane-smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Cloud Architect",
      bio: "Michael specializes in cloud-native architectures and has helped dozens of organizations transition to modern platform engineering practices. He's an AWS Solutions Architect Professional.",
      linkedinUrl: "https://linkedin.com/in/michael-chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 3,
      name: "Sarah Rodriguez",
      role: "Developer Experience Engineer",
      bio: "Sarah focuses on improving developer experience and platform adoption. She has a background in UX design and brings a user-centered approach to platform engineering.",
      linkedinUrl: "https://linkedin.com/in/sarah-rodriguez",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
    }
  ];

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
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">About</h1>
            
            {/* About this page section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">About this page</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p className="text-card-foreground leading-relaxed mb-4">
                    The Platform Engineering Toolkit is a comprehensive resource designed to help organizations 
                    understand, implement, and scale platform engineering practices. This toolkit provides 
                    practical guidance, frameworks, and tools for building effective developer platforms.
                  </p>
                  <p className="text-card-foreground leading-relaxed mb-4">
                    Our mission is to democratize platform engineering knowledge and help teams create 
                    platforms that truly serve their developers and accelerate software delivery. Whether 
                    you're just starting your platform journey or looking to mature your existing practices, 
                    this toolkit provides actionable insights and proven methodologies.
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    All content is based on real-world experience from platform engineering leaders across 
                    various industries and scales, from startups to enterprise organizations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* About the authors section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">About the authors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:gap-12">
                  {authors.map((author) => (
                    <div key={author.id} className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <img
                          src={author.avatar}
                          alt={`${author.name} profile picture`}
                          className="w-24 h-24 rounded-full object-cover border-2 border-border"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-primary">{author.name}</h3>
                            <p className="text-sm text-muted-foreground font-medium">{author.role}</p>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a 
                              href={author.linkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Linkedin className="w-4 h-4" />
                              LinkedIn
                            </a>
                          </Button>
                        </div>
                        <p className="text-card-foreground leading-relaxed">{author.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
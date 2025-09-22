// Content management for the Platform Engineering Toolkit

// Content sections data
const contentSections = {
    introduction: {
        id: 'introduction',
        title: 'Introduction to Platform Engineering',
        subtitle: 'Understanding the fundamentals',
        content: [
            'Platform engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations.',
            'This emerging field focuses on creating internal developer platforms that reduce cognitive load, improve developer experience, and accelerate software delivery.',
            'Key principles include treating the platform as a product, focusing on developer experience, and building for self-service capabilities.'
        ],
        tags: ['Fundamentals', 'Getting Started', 'Overview'],
        resources: [
            {
                title: 'Platform Engineering Maturity Model',
                url: '#',
                description: 'Assess your organization\'s platform engineering maturity'
            },
            {
                title: 'Developer Experience Metrics',
                url: '#',
                description: 'Key metrics for measuring platform success'
            }
        ]
    },
    architecture: {
        id: 'architecture',
        title: 'Platform Architecture',
        subtitle: 'Design patterns and principles',
        content: [
            'Platform architecture defines the structure and organization of your internal developer platform.',
            'Common patterns include API-first design, microservices architecture, and event-driven systems.',
            'Key considerations include scalability, reliability, security, and developer experience.',
            'Architecture decisions should align with organizational goals and technical constraints.'
        ],
        tags: ['Architecture', 'Design Patterns', 'Technical'],
        resources: [
            {
                title: 'Reference Architectures',
                url: '#',
                description: 'Common platform architecture patterns'
            },
            {
                title: 'Technology Radar',
                url: '#',
                description: 'Current trends in platform technologies'
            }
        ]
    },
    adoption: {
        id: 'adoption',
        title: 'Platform Adoption',
        subtitle: 'Strategies for successful adoption',
        content: [
            'Platform adoption requires careful change management and stakeholder engagement.',
            'Start with early adopters and gradually expand to the broader organization.',
            'Focus on solving real developer pain points and demonstrating value.',
            'Provide comprehensive documentation, training, and support.',
            'Measure adoption metrics and iterate based on feedback.'
        ],
        tags: ['Change Management', 'Strategy', 'Culture'],
        resources: [
            {
                title: 'Adoption Playbook',
                url: '#',
                description: 'Step-by-step guide to platform adoption'
            },
            {
                title: 'Success Stories',
                url: '#',
                description: 'Learn from successful platform implementations'
            }
        ]
    },
    tools: {
        id: 'tools',
        title: 'Tools & Automation',
        subtitle: 'Platform engineering toolchain',
        content: [
            'The platform engineering toolchain includes infrastructure as code, CI/CD, monitoring, and developer portals.',
            'Popular tools include Kubernetes, Terraform, GitLab, Backstage, and various cloud services.',
            'Tool selection should align with your architecture, team skills, and organizational requirements.',
            'Focus on integration and automation to create seamless developer workflows.',
            'Regularly evaluate and update your toolchain based on evolving needs and technology trends.'
        ],
        tags: ['Tools', 'Automation', 'Technology'],
        resources: [
            {
                title: 'Tool Comparison Matrix',
                url: '#',
                description: 'Compare popular platform engineering tools'
            },
            {
                title: 'Integration Guides',
                url: '#',
                description: 'How to integrate different tools effectively'
            }
        ]
    },
    security: {
        id: 'security',
        title: 'Security & Compliance',
        subtitle: 'Secure platform practices',
        content: [
            'Security should be built into the platform from the ground up, not added as an afterthought.',
            'Implement security controls at every layer: infrastructure, platform, and application.',
            'Use policy as code, automated security scanning, and continuous compliance monitoring.',
            'Provide secure defaults and self-service security capabilities for developers.',
            'Regular security assessments and incident response procedures are essential.'
        ],
        tags: ['Security', 'Compliance', 'Risk Management'],
        resources: [
            {
                title: 'Security Checklist',
                url: '#',
                description: 'Essential security controls for platforms'
            },
            {
                title: 'Compliance Frameworks',
                url: '#',
                description: 'Common compliance requirements and implementation'
            }
        ]
    },
    configuration: {
        id: 'configuration',
        title: 'Platform Configuration',
        subtitle: 'Configuration management and operations',
        content: [
            'Platform configuration management ensures consistency, reliability, and maintainability.',
            'Use configuration as code principles with version control and automated deployment.',
            'Implement environment-specific configurations while maintaining consistency.',
            'Provide self-service configuration capabilities for development teams.',
            'Monitor configuration drift and implement automated remediation where possible.'
        ],
        tags: ['Configuration', 'Operations', 'Management'],
        resources: [
            {
                title: 'Configuration Patterns',
                url: '#',
                description: 'Best practices for platform configuration'
            },
            {
                title: 'Operational Runbooks',
                url: '#',
                description: 'Standard operational procedures'
            }
        ]
    }
};

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to render content section
function renderContentSection(sectionId) {
    const section = contentSections[sectionId];
    if (!section) {
        renderDefaultContent();
        return;
    }

    const contentArea = document.getElementById('content-area');
    const title = document.getElementById('content-title');
    const description = document.getElementById('content-description');

    // Update page title and description
    title.textContent = section.title;
    description.textContent = section.subtitle;

    // Render tags
    const tagsHtml = section.tags.map(tag => 
        `<span class="badge">${tag}</span>`
    ).join(' ');

    // Render content paragraphs
    const contentHtml = section.content.map(paragraph => 
        `<p>${paragraph}</p>`
    ).join('');

    // Render resources if available
    let resourcesHtml = '';
    if (section.resources && section.resources.length > 0) {
        resourcesHtml = `
            <h2>Additional Resources</h2>
            <ul>
                ${section.resources.map(resource => `
                    <li>
                        <strong><a href="${resource.url}">${resource.title}</a></strong><br>
                        <span class="text-muted">${resource.description}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    contentArea.innerHTML = `
        <div class="article-content">
            <div class="article-meta">
                ${tagsHtml}
            </div>
            <div class="prose">
                ${contentHtml}
                ${resourcesHtml}
            </div>
        </div>
        <div class="article-nav">
            <p class="article-nav-text">Explore more platform engineering topics</p>
            <div class="article-nav-buttons">
                <a href="index.html" class="btn-outline">← Back to Home</a>
                <a href="what-and-why.html" class="btn-outline">What And Why →</a>
            </div>
        </div>
    `;
}

// Function to render default content
function renderDefaultContent() {
    const contentArea = document.getElementById('content-area');
    const title = document.getElementById('content-title');
    const description = document.getElementById('content-description');

    title.textContent = 'Platform Engineering Content';
    description.textContent = 'Explore comprehensive platform engineering resources organized by topic and expertise level.';

    contentArea.innerHTML = `
        <div class="article-content">
            <div class="prose">
                <h2>Select a Topic</h2>
                <p>Choose from one of the following topics to explore detailed platform engineering content:</p>
                
                <div class="cards-grid">
                    ${Object.values(contentSections).map(section => `
                        <a href="?section=${section.id}" class="card">
                            <div class="card-content">
                                <div class="card-text">
                                    <h3 class="card-title">${section.title}</h3>
                                    <p class="card-description">${section.subtitle}</p>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Initialize content based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const sectionId = getUrlParameter('section');
    
    if (sectionId && contentSections[sectionId]) {
        renderContentSection(sectionId);
    } else {
        renderDefaultContent();
    }

    // Add back button functionality
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    });
});

// Handle browser back/forward navigation
window.addEventListener('popstate', function() {
    const sectionId = getUrlParameter('section');
    if (sectionId && contentSections[sectionId]) {
        renderContentSection(sectionId);
    } else {
        renderDefaultContent();
    }
});

import { Clock, Users, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useRef } from "react";

const projects = [
  // 8 sample projects (original 3 + 5 more for carousel effect)
  {
    title: "Cloud Migration & Modernization",
    description:
      "Led a large-scale migration from on-premises infrastructure to AWS, implementing a microservices architecture using ECS and serverless Lambda functions. Reduced operational costs by 40% and improved system reliability.",
    techs: ["AWS", "Docker", "Terraform", "Lambda", "DynamoDB"],
    duration: "8 months",
    role: "Lead DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/cloud-migration-modernization",
  },
  {
    title: "CI/CD Pipeline Optimization",
    description:
      "Redesigned the CI/CD pipeline for a financial services company using GitHub Actions and Kubernetes, reducing deployment time from hours to minutes and enabling multiple daily releases with zero downtime.",
    techs: ["Kubernetes", "GitHub Actions", "Argo CD", "Helm", "Prometheus"],
    duration: "3 months",
    role: "DevOps Consultant",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/cicd-pipeline-optimization",
  },
  {
    title: "Multi-Cloud Disaster Recovery",
    description:
      "Implemented a comprehensive disaster recovery solution spanning AWS and Azure, ensuring business continuity with automated failover and 99.99% uptime for critical systems.",
    techs: ["AWS", "Azure", "Terraform", "Ansible", "Route53"],
    duration: "5 months",
    role: "Cloud Architect",
    image:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/multi-cloud-disaster-recovery",
  },
  {
    title: "Serverless SaaS Platform",
    description:
      "Designed and implemented a highly scalable serverless SaaS platform on AWS using Lambda, API Gateway, and DynamoDB, supporting thousands of users.",
    techs: ["AWS", "Lambda", "API Gateway", "DynamoDB", "React"],
    duration: "7 months",
    role: "Cloud Engineer",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/serverless-saas-platform",
  },
  {
    title: "Realtime Monitoring Dashboard",
    description:
      "Developed a realtime infrastructure monitoring dashboard with Prometheus and Grafana, giving stakeholders instant visibility into cloud health and performance.",
    techs: ["Prometheus", "Grafana", "AWS", "Node.js", "React"],
    duration: "4 months",
    role: "Observability Engineer",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/realtime-monitoring-dashboard",
  },
  {
    title: "Hybrid Cloud Networking",
    description:
      "Engineered secure connectivity between on-prem and multi-cloud workloads using VPN, VPC peering, and transit gateways for global scale.",
    techs: ["AWS", "Azure", "VPN", "VPC", "Terraform"],
    duration: "6 months",
    role: "Network Architect",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/hybrid-cloud-networking",
  },
  {
    title: "Automated Cost Optimization",
    description:
      "Built automation that analyzes and optimizes cloud spend, identifying cost-saving opportunities and automating downsizing unused resources.",
    techs: ["Python", "AWS", "Lambda", "CloudWatch", "Cost Explorer"],
    duration: "2 months",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/automated-cost-optimization",
  },
  {
    title: "Zero-Trust Security Pipeline",
    description:
      "Implemented a zero-trust security model for all CI/CD pipelines, with identity federation, audit trails, and secrets management.",
    techs: ["GitHub Actions", "AWS", "OIDC", "Secrets Manager", "Terraform"],
    duration: "4 months",
    role: "Security Engineer",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
    githubLink:
      "https://github.com/your-github-username/zero-trust-security-pipeline",
  },
];

// Helper: group projects for slides (4 per slide)
function chunkProjects(arr, size) {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

// Responsive: 1 (mobile), 2 (tablet), 4 (desktop) per slide
const getItemsPerSlide = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
  }
  return 4; // lg+
};

const Projects = () => {
  // Fix items per slide on initial render
  const itemsPerSlide = getItemsPerSlide();
  const groupedProjects = chunkProjects(projects, itemsPerSlide);
  const carouselRef = useRef(null);

  return (
    <section id="projects" className="content-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recent cloud and DevOps projects that demonstrate my expertise in
            building and optimizing cloud infrastructure
          </p>
        </div>

        <div className="relative">
          <Carousel
            ref={carouselRef}
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {groupedProjects.map((group, idx) => (
                <CarouselItem key={idx}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {group.map((project, index) => (
                      <div
                        key={project.title}
                        className="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cloud-blue/20"
                      >
                        <div className="relative h-48">
                          <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{
                              backgroundImage: `url(${project.image})`,
                              filter: "brightness(0.4)",
                            }}
                          ></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-cloud-dark to-transparent z-10"></div>
                          <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="text-gray-300 mb-6">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.techs.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-cloud-blue/10 text-cloud-cyan border-cloud-blue/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Users className="h-4 w-4 mr-2" />
                              <span>{project.role}</span>
                            </div>
                            <div className="flex items-center text-sm text-cloud-cyan hover:text-cloud-blue transition-colors">
                              <LinkIcon className="h-4 w-4 mr-2" />
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                Project details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            These are just a few examples of my work. Contact me to learn more
            about my projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

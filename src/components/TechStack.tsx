
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Cloud, 
  Code, 
  Database, 
  GitBranch, 
  Terminal, 
  Monitor, 
  Package, 
  Shield, 
  BarChart 
} from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

type TechCategory = 'all' | 'cloud' | 'devops' | 'infrastructure' | 'monitoring';

interface TechItem {
  name: string;
  icon: React.ElementType;
  category: TechCategory[];
  proficiency: number;
  description: string;
}

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');
  
  const techItems: TechItem[] = [
    {
      name: "AWS",
      icon: Cloud,
      category: ['cloud'],
      proficiency: 95,
      description: "Amazon Web Services - EC2, S3, Lambda, ECS, RDS, and more."
    },
    {
      name: "Azure",
      icon: Cloud,
      category: ['cloud'],
      proficiency: 90,
      description: "Microsoft Azure - VMs, Blob Storage, Functions, AKS, and more."
    },
    {
      name: "GCP",
      icon: Cloud,
      category: ['cloud'],
      proficiency: 85,
      description: "Google Cloud Platform - Compute Engine, Cloud Storage, Cloud Functions, GKE."
    },
    {
      name: "Kubernetes",
      icon: Package,
      category: ['devops', 'infrastructure'],
      proficiency: 90,
      description: "Container orchestration for automating deployment, scaling, and operations."
    },
    {
      name: "Docker",
      icon: Package,
      category: ['devops', 'infrastructure'],
      proficiency: 95,
      description: "Containerization platform for building, deploying, and running applications."
    },
    {
      name: "Terraform",
      icon: Code,
      category: ['devops', 'infrastructure'],
      proficiency: 90,
      description: "Infrastructure as Code tool for building and managing cloud resources."
    },
    {
      name: "Ansible",
      icon: Terminal,
      category: ['devops'],
      proficiency: 85,
      description: "Automation tool for configuration management and application deployment."
    },
    {
      name: "Jenkins",
      icon: GitBranch,
      category: ['devops'],
      proficiency: 90,
      description: "Automation server for building, testing, and deploying software."
    },
    {
      name: "GitHub Actions",
      icon: GitBranch,
      category: ['devops'],
      proficiency: 95,
      description: "CI/CD platform integrated with GitHub repositories."
    },
    {
      name: "Prometheus",
      icon: BarChart,
      category: ['monitoring'],
      proficiency: 90,
      description: "Monitoring system and time series database for metrics collection."
    },
    {
      name: "Grafana",
      icon: Monitor,
      category: ['monitoring'],
      proficiency: 85,
      description: "Analytics and monitoring platform for visualizing metrics data."
    },
    {
      name: "ELK Stack",
      icon: Database,
      category: ['monitoring'],
      proficiency: 80,
      description: "Elasticsearch, Logstash, and Kibana for log analysis and visualization."
    },
    {
      name: "PostgreSQL",
      icon: Database,
      category: ['infrastructure'],
      proficiency: 85,
      description: "Advanced open-source relational database."
    },
    {
      name: "MongoDB",
      icon: Database,
      category: ['infrastructure'],
      proficiency: 80,
      description: "NoSQL database for modern applications."
    },
    {
      name: "CloudFlare",
      icon: Shield,
      category: ['infrastructure'],
      proficiency: 85,
      description: "CDN, DNS, and DDoS protection services."
    },
    {
      name: "Linux",
      icon: Server,
      category: ['infrastructure'],
      proficiency: 95,
      description: "Operating system for cloud and server environments."
    },
  ];
  
  const categories = [
    // { id: 'all', name: 'All Tech' },
    { id: 'cloud', name: 'Cloud Platforms' },
    { id: 'devops', name: 'DevOps Tools' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'monitoring', name: 'Monitoring & Analytics' },
  ];
  
  const filteredItems = techItems.filter(item => 
    activeCategory === 'all' || item.category.includes(activeCategory)
  );
  
  return (
    <section id="tech-stack" className="content-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">Tech Stack & Tools</h2>
          <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The technologies and tools I use to build scalable, resilient cloud solutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Badge 
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`text-sm cursor-pointer px-4 py-2 ${
                activeCategory === category.id 
                  ? "bg-cloud-blue hover:bg-cloud-cyan" 
                  : "hover:bg-cloud-blue/20 text-gray-300 border-cloud-blue/30"
              }`}
              onClick={() => setActiveCategory(category.id as TechCategory)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredItems.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="mb-3 rounded-full bg-cloud-blue/20 p-4">
                      <tech.icon className="h-8 w-8 text-cloud-cyan" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                      <div 
                        className="bg-cloud-cyan h-1.5 rounded-full" 
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                    <p className="text-xs mt-1 text-right">{tech.proficiency}% Proficiency</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <h3 className="text-lg font-semibold text-cloud-light mt-2">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;


import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Users,
  ArrowRight,
  Package,
  Code
} from "lucide-react";

const InfrastructureDiagram = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  interface DiagramNode {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    x: number;
    y: number;
    connections: string[];
  }
  
  const nodes: DiagramNode[] = [
    { 
      id: "users", 
      title: "Users", 
      description: "End users accessing the application through browsers or mobile devices",
      icon: Users, 
      x: 10, 
      y: 50,
      connections: ["cdn"] 
    },
    { 
      id: "cdn", 
      title: "CDN", 
      description: "Content Delivery Network for static assets, improving load times globally",
      icon: Globe, 
      x: 25, 
      y: 50,
      connections: ["waf"] 
    },
    { 
      id: "waf", 
      title: "WAF & Security", 
      description: "Web Application Firewall providing protection against common vulnerabilities",
      icon: Shield, 
      x: 40, 
      y: 50,
      connections: ["loadbalancer"] 
    },
    { 
      id: "loadbalancer", 
      title: "Load Balancer", 
      description: "Distributes traffic across multiple application servers for high availability",
      icon: ArrowRight, 
      x: 55, 
      y: 50,
      connections: ["app"] 
    },
    { 
      id: "app", 
      title: "Application Containers", 
      description: "Containerized applications deployed in Kubernetes for scalability",
      icon: Package, 
      x: 70, 
      y: 50,
      connections: ["database", "cache"] 
    },
    { 
      id: "database", 
      title: "Database", 
      description: "High-performance database cluster with automatic failover",
      icon: Database, 
      x: 85, 
      y: 35,
      connections: [] 
    },
    { 
      id: "cache", 
      title: "Cache Layer", 
      description: "In-memory caching for improved performance and reduced database load",
      icon: Server, 
      x: 85, 
      y: 65,
      connections: [] 
    },
    { 
      id: "cicd", 
      title: "CI/CD Pipeline", 
      description: "Continuous integration and deployment pipeline for automated testing and releases",
      icon: Code, 
      x: 70, 
      y: 20,
      connections: ["app"] 
    },
    { 
      id: "cloud", 
      title: "Cloud Provider", 
      description: "Infrastructure hosted on a major cloud provider with multi-region capability",
      icon: Cloud, 
      x: 40, 
      y: 20,
      connections: ["cicd"] 
    }
  ];
  
  const drawConnection = (from: DiagramNode, to: DiagramNode) => {
    const startX = from.x;
    const startY = from.y;
    const endX = to.x;
    const endY = to.y;
    
    return (
      <motion.line 
        key={`${from.id}-${to.id}`}
        x1={`${startX}%`} 
        y1={`${startY}%`} 
        x2={`${endX}%`} 
        y2={`${endY}%`}
        stroke={activeNode && (activeNode === from.id || activeNode === to.id) ? "#50E3C2" : "#0078D7"}
        strokeWidth="2"
        strokeDasharray={activeNode && (activeNode === from.id || activeNode === to.id) ? "none" : "5,5"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      />
    );
  };
  
  return (
    <section id="infrastructure" className="content-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">Cloud Infrastructure</h2>
          <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive diagram of a scalable, resilient cloud architecture
          </p>
        </div>
        
        <div className="glass rounded-xl p-4 md:p-6 overflow-hidden">
          <div className="relative w-full h-[500px]">
            <svg width="100%" height="100%" className="absolute top-0 left-0">
              {nodes.flatMap(node => 
                node.connections.map(targetId => {
                  const target = nodes.find(n => n.id === targetId);
                  return target ? drawConnection(node, target) : null;
                })
              )}
            </svg>
            
            {nodes.map(node => (
              <motion.div 
                key={node.id}
                className={`absolute cursor-pointer transition-all duration-300 glass rounded-lg p-3 ${
                  activeNode === node.id 
                    ? "border-2 border-cloud-cyan bg-cloud-blue/20" 
                    : "border border-cloud-blue/30"
                }`}
                style={{ 
                  left: `${node.x}%`, 
                  top: `${node.y}%`, 
                  transform: "translate(-50%, -50%)",
                  width: activeNode === node.id ? "200px" : "120px",
                  zIndex: activeNode === node.id ? 10 : 1
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-cloud-blue/20 p-2 mb-2">
                    <node.icon className="h-5 w-5 text-cloud-cyan" />
                  </div>
                  <h3 className="text-sm font-semibold text-cloud-light">{node.title}</h3>
                  {activeNode === node.id && (
                    <motion.p 
                      className="text-xs mt-2 text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {node.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureDiagram;

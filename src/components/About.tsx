
import { Server, Cloud, Database, Code, GitBranch, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="content-section pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">About Me</h2>
            <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
            <p className="text-xl text-gray-300">
              DevOps Engineer & Cloud Solutions Architect
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 md:p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
             Hi, I’m H.M. Thushara Navod a passionate developer specializing in DevOps, Cloud Engineering, and Mobile App Development. I also bring strong skills in Digital Marketing and a solid understanding of Finance, helping me bridge tech with strategy. I love building scalable solutions that are not just powerful, but also impactful.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines technical expertise with a deep understanding of business needs, ensuring that the infrastructure I design not only performs optimally but also aligns perfectly with organizational goals. Whether it's migrating to the cloud, implementing CI/CD pipelines, or designing a microservices architecture, I bring a thoughtful, solutions-oriented mindset to every challenge.
            </p>
          </div>
        </div>
        
        {/* Skills & Services */}
        <div id="skills" className="pt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-cloud-cyan">Skills & Services</h2>
          <div className="w-20 h-1 bg-cloud-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cloud-blue/20 p-3 mr-4">
                  <Cloud className="h-6 w-6 text-cloud-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Cloud Architecture</h3>
              </div>
              <p className="text-gray-300">
                Designing and implementing secure, scalable cloud solutions on AWS, Azure, and Google Cloud Platform with cost optimization.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cloud-blue/20 p-3 mr-4">
                  <Server className="h-6 w-6 text-cloud-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Infrastructure as Code</h3>
              </div>
              <p className="text-gray-300">
                Automating infrastructure deployment with Terraform, CloudFormation, and Ansible for reproducible environments.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cloud-blue/20 p-3 mr-4">
                  <GitBranch className="h-6 w-6 text-cloud-cyan" />
                </div>
                <h3 className="text-xl font-semibold">CI/CD Pipeline Design</h3>
              </div>
              <p className="text-gray-300">
                Building robust automation pipelines using Jenkins, GitHub Actions, and GitLab CI for continuous integration and delivery.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cloud-blue/20 p-3 mr-4">
                  <Code className="h-6 w-6 text-cloud-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Container Orchestration</h3>
              </div>
              <p className="text-gray-300">
                Managing containerized applications with Kubernetes, Docker Swarm, and ECS for flexible deployment and scaling.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cloud-blue/20 p-3 mr-4">
                  <Database className="h-6 w-6 text-cloud-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Database Management</h3>
              </div>
              <p className="text-gray-300">
                Implementing and maintaining SQL and NoSQL database solutions with high availability and disaster recovery plans.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cloud-blue/20 p-3 mr-4">
                  <Settings className="h-6 w-6 text-cloud-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Monitoring & Optimization</h3>
              </div>
              <p className="text-gray-300">
                Setting up comprehensive monitoring and alerting using Prometheus, Grafana, and ELK stack for system visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

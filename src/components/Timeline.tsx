
import { Chrono } from "react-chrono";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      title: "2023",
      cardTitle: "Cloud Migration Specialist",
      cardSubtitle: "Enterprise Solutions Inc.",
      cardDetailedText: "Led large-scale migration from on-premises to AWS cloud infrastructure, reducing operational costs by 40% while improving system reliability and security.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1603322327561-7e79b7d9f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
      }
    },
    {
      title: "2021",
      cardTitle: "DevOps Team Lead",
      cardSubtitle: "TechForward Solutions",
      cardDetailedText: "Established CI/CD pipelines and implemented infrastructure as code using Terraform and Ansible, decreasing deployment time by 75% and improving release frequency.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
      }
    },
    {
      title: "2019",
      cardTitle: "Cloud Solutions Architect",
      cardSubtitle: "Global Systems Inc.",
      cardDetailedText: "Designed and implemented multi-cloud disaster recovery solutions ensuring business continuity with 99.99% uptime for mission-critical applications.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
      }
    },
    {
      title: "2017",
      cardTitle: "Systems Engineer",
      cardSubtitle: "InnovateTech",
      cardDetailedText: "Managed infrastructure modernization initiatives and implemented containerization strategies that increased deployment efficiency by 60%.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
      }
    }
  ];

  return (
    <section id="journey" className="content-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">Professional Journey</h2>
          <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my career path and key milestones in cloud engineering and DevOps
          </p>
        </div>

        <div className="glass rounded-xl p-4 md:p-6">
          <div className="h-[600px] md:h-[500px]">
            <Chrono
              items={timelineItems}
              mode="VERTICAL"
              theme={{
                primary: '#0078D7',
                secondary: '#50E3C2',
                cardBgColor: 'rgba(30, 30, 46, 0.7)',
                cardForeColor: '#F5F5F5',
                titleColor: '#50E3C2',
                titleColorActive: '#0078D7',
              }}
              cardHeight={200}
              scrollable={{ scrollbar: true }}
              hideControls
              classNames={{
                card: 'glass my-4',
                cardTitle: 'text-cloud-cyan text-xl',
                cardSubTitle: 'text-cloud-blue',
                cardText: 'text-gray-300',
              }}
            />
          </div>
          <div className="text-center mt-6">
            <Button className="bg-cloud-blue hover:bg-cloud-cyan text-white transition-colors">
              <ExternalLink className="mr-2 h-4 w-4" />
              Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

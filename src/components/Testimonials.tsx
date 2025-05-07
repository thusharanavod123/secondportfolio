
import { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechSolutions Inc.",
    quote: "Working with this DevOps engineer transformed how we deploy and manage our cloud infrastructure. Our deployment time reduced by 80% and system reliability improved dramatically.",
    company: "TechSolutions",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"
  },
  {
    name: "Mark Williams",
    role: "Lead Developer, InnovateSoft",
    quote: "The Kubernetes deployment strategy and CI/CD pipeline implemented for our team has been a game changer. We now deploy multiple times daily with zero downtime.",
    company: "InnovateSoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    name: "Jennifer Lee",
    role: "VP of Engineering, DataStream",
    quote: "The cloud cost optimization strategy saved us over 40% on our AWS bills while actually improving performance. Incredible expertise in infrastructure as code.",
    company: "DataStream",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
  },
  {
    name: "Michael Rodriguez",
    role: "DevOps Manager, FinSecure",
    quote: "The security hardening and compliance automation work helped us pass our audit with flying colors. The documentation and knowledge transfer was exceptional.",
    company: "FinSecure",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="content-section py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">Client Testimonials</h2>
          <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Don't take my word for it - here's what clients say about my DevOps and cloud engineering services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="glass border-cloud-blue/20 overflow-hidden">
                      <CardContent className="flex flex-col p-6">
                        <div className="mb-4 text-cloud-cyan">
                          <Quote className="h-8 w-8 opacity-50" />
                        </div>
                        <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                        <div className="mt-auto flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-cloud-blue/30">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-cloud-light">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-cloud-dark/50 border-cloud-blue/30 text-cloud-cyan hover:text-cloud-light hover:bg-cloud-blue/20" />
            <CarouselNext className="right-2 bg-cloud-dark/50 border-cloud-blue/30 text-cloud-cyan hover:text-cloud-light hover:bg-cloud-blue/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

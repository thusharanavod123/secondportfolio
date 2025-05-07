import { useEffect, useState } from 'react';
import Scene from '@/components/Scene';
import ParticleCloud from '@/components/ParticleCloud';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';
import { ChevronDown, Layers, Cloud, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-cloud-dark">
        <div className="relative mb-4">
          <Cloud className="h-12 w-12 text-cloud-cyan animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Layers className="h-6 w-6 text-cloud-blue animate-pulse-slow" />
          </div>
        </div>
        <p className="text-cloud-light text-lg">Loading your cloud environment...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-cloud-dark">
      {/* 3D Scene Background */}
      <Scene />
      
      {/* Particle Effects */}
      <ParticleCloud />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-cloud-light">
            DevOps &<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cloud-blue to-cloud-cyan">
              Cloud Engineering
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Building scalable, resilient, and efficient cloud infrastructure for modern applications
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-cloud-blue  hover:bg-cloud-cyan text-white px-8 py-6 rounded-lg transition-all" 
              size="lg"  
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-cloud-blue text-cloud-cyan hover:bg-cloud-blue hover:text-white px-8 py-6 rounded-lg transition-all" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-cloud-light hover:text-cloud-cyan hover:bg-transparent rounded-full border border-cloud-blue/30"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </section> 

      {/* Projects Section */}
      <Projects />
      
      {/* About Section */}
      <About />
      
      {/* Tech Stack Section */}
      <TechStack />
      
      {/* Download CV Section */}
      <section className="content-section py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass p-8 md:p-12 rounded-xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-cyan">
              Download My CV
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get a detailed overview of my experience, skills, and qualifications in cloud engineering and DevOps.
            </p>
            <Button 
              size="lg"
              className="bg-cloud-blue hover:bg-cloud-cyan text-white transition-colors group"
              onClick={() => window.open('/thushara-navod-cv.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Full CV
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

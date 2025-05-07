
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email URL with prefilled data
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

${formData.message}
    `);
    
    window.open(`mailto:kevinnavod365@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    toast({
      title: "Email client opened!",
      description: "Please send the email from your email client.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="content-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-cloud-blue mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Let's discuss how I can help optimize your cloud infrastructure, DevOps processes, and app development needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-black/30 border-white/10 focus:border-cloud-cyan rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-black/30 border-white/10 focus:border-cloud-cyan rounded-xl"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-black/30 border-white/10 focus:border-cloud-cyan rounded-xl"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="bg-black/30 border-white/10 focus:border-cloud-cyan rounded-xl min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-cloud-blue hover:bg-cloud-cyan text-white transition-colors rounded-xl"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="glass rounded-2xl p-6 flex items-start">
              <div className="rounded-full bg-cloud-blue/20 p-3 mr-4 flex-shrink-0">
                <Mail className="h-6 w-6 text-cloud-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-small mb-2">Email</h3>
                <p className="text-gray-300">padiwelathusharanavod@gmail.com</p>
                <a 
                  href="mailto:padiwelathusharanavod@gmail.com" 
                  className="text-cloud-cyan hover:underline mt-2 inline-block"
                >
                  Send an email
                </a>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 flex items-start">
              <div className="rounded-full bg-cloud-blue/20 p-3 mr-4 flex-shrink-0">
                <Phone className="h-6 w-6 text-cloud-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-300">+94 (71) 3768-668</p>
                <p className="text-gray-300">Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 flex items-start">
              <div className="rounded-full bg-cloud-blue/20 p-3 mr-4 flex-shrink-0">
                <MapPin className="h-6 w-6 text-cloud-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-gray-300">Kurunegala, Sri Lanka</p>
                <p className="text-gray-300">Available for remote work worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

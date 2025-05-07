
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Briefcase,
  Award,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="content-section py-12 border-t border-cloud-blue/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <a href="#" className="text-2xl font-bold text-cloud-cyan">
              Thushara<span className="text-cloud-blue">Navod</span>
            </a>
            <p className="text-gray-400 mt-3 mb-4">
              Empowering businesses with modern DevOps practices and cloud
              infrastructure solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/thusharanavod123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-cloud-blue/30 hover:border-cloud-cyan hover:bg-cloud-blue/10"
                >
                  <Github className="h-5 w-5 text-cloud-cyan" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/thushara-navod-padiwela-ab8194329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-cloud-blue/30 hover:border-cloud-cyan hover:bg-cloud-blue/10"
                >
                  <Linkedin className="h-5 w-5 text-cloud-cyan" />
                </Button>
              </a>
              <a
                href="https://www.theglitchreport.online/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-cloud-blue/30 hover:border-cloud-cyan hover:bg-cloud-blue/10"
                >
                  <Mail className="h-5 w-5 text-cloud-cyan" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-cloud-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-cloud-cyan transition-colors inline-flex items-center"
                >
                  <span className="mr-2 text-cloud-blue">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-cloud-cyan transition-colors inline-flex items-center"
                >
                  <span className="mr-2 text-cloud-blue">
                    <Award className="h-4 w-4" />
                  </span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-cloud-cyan transition-colors inline-flex items-center"
                >
                  <span className="mr-2 text-cloud-blue">
                    <Globe className="h-4 w-4" />
                  </span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cloud-cyan transition-colors inline-flex items-center"
                >
                  <span className="mr-2 text-cloud-blue">
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-cloud-light mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS",
                "Azure",
                "Terraform",
                "Ansible",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "GitHub Actions",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-cloud-blue/10 text-cloud-cyan border border-cloud-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-cloud-blue/10 flex flex-col md:flex-row  items-center justify-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center">
            © {currentYear} CloudDevOps. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm"></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

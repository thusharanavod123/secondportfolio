import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Tech Stack", href: "#tech-stack" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-cloud-cyan">Thushara</span>
            <span className="text-cloud-blue">N</span>
            <span className="text-cloud-cyan">avod</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-cloud-light hover:text-cloud-cyan transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Social Links and Resume Button */}
        <div className="hidden md:flex items-center space-x-3">
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

          <a
            href="https://your-resume-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="ml-4 bg-cloud-blue hover:bg-cloud-cyan text-white transition-colors">
              <ExternalLink className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-cloud-light hover:text-cloud-cyan"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-cloud-light hover:text-cloud-cyan py-2 text-lg"
                onClick={closeMenu}
              >
                {link.title}
              </a>
            ))}

            <div className="flex items-center space-x-4 py-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-cloud-blue/30 hover:border-cloud-cyan hover:bg-cloud-blue/10"
              >
                <Github className="h-5 w-5 text-cloud-cyan" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-cloud-blue/30 hover:border-cloud-cyan hover:bg-cloud-blue/10"
              >
                <Linkedin className="h-5 w-5 text-cloud-cyan" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-cloud-blue/30 hover:border-cloud-cyan hover:bg-cloud-blue/10"
              >
                <Mail className="h-5 w-5 text-cloud-cyan" />
              </Button>
            </div>

            <Button className="w-full bg-cloud-blue hover:bg-cloud-cyan text-white transition-colors mt-2">
              <ExternalLink className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

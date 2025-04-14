
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart, Facebook } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Wutthipong Wongwai.</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Full-Stack Developer & UI/UX Enthusiast creating intuitive and performant digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/VAzenx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://x.com/Wutthipong_2006" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.facebook.com/BANK201049/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#home" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/#timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</Link>
              </li>
              <li>
                <Link to="/#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Thailand, Bangkok</p>
              <p>wutthipong.2006x@gmail.com</p>
              <p>+6694-017-3161</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Wutthipong. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart size={20} className="mx-1 text-red-500" /> By Wutthipong
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

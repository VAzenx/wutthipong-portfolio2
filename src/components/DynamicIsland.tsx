
import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Home, User, Code, Clock, Briefcase, FileText, Mail } from 'lucide-react';

const DynamicIsland = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('home');

  // Update active section based on URL or scroll position
  useEffect(() => {
    const path = location.pathname;

    // Handle non-home paths
    if (path !== '/' && !path.includes('/#')) {
      if (path.startsWith('/blog')) setCurrentSection('blog');
      else if (path.startsWith('/contact')) setCurrentSection('contact');
      else setCurrentSection('');
      return;
    }

    // Handle hash-based navigation
    // const hash = location.hash.slice(1);
    // if (hash) {
    //   setCurrentSection(hash);
    //   return;
    // }

    // Scroll detection on home page
    if (path === '/') {
      const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        let foundSection = 'home';

        for (const section of sections) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            foundSection = section.id;
            break;
          }
        }

        if (currentSection !== foundSection) {
          setCurrentSection(foundSection);
        }
      };

      handleScroll(); // Initial check
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location, currentSection]);

  // Smooth scroll with navigation support
  const smoothScrollTo = (elementId: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + elementId);
      return;
    }

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setExpanded(false);
  };

  const isActive = (section: string) => currentSection === section;

  const handleNavItemClick = (e: React.MouseEvent<HTMLDivElement>, sectionId: string) => {
    e.stopPropagation();
    smoothScrollTo(sectionId);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hover:scale-110 transition-transform duration-300 ">
      <motion.div 
        initial={{ width: '64px' }}
        animate={{ 
          width: expanded ? '320px' : '64px',
          height: expanded ? '60px' : '48px',
          borderRadius: '32px'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="glass relative flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between w-full px-6"
          >
            <nav className="flex gap-4">
              <div 
                onClick={(e) => handleNavItemClick(e, 'home')} 
                className={`hover-link ${isActive('home') ? 'text-primary' : 'text-foreground'}`}
              >
                <Home size={18} />
              </div>
              <div 
                onClick={(e) => handleNavItemClick(e, 'about')} 
                className={`hover-link ${isActive('about') ? 'text-primary' : 'text-foreground'}`}
              >
                <User size={18} />
              </div>
              <div 
                onClick={(e) => handleNavItemClick(e, 'skills')} 
                className={`hover-link ${isActive('skills') ? 'text-primary' : 'text-foreground'}`}
              >
                <Code size={18} />
              </div>
              <div 
                onClick={(e) => handleNavItemClick(e, 'timeline')} 
                className={`hover-link ${isActive('timeline') ? 'text-primary' : 'text-foreground'}`}
              >
                <Clock size={18} />
              </div>
              <div 
                onClick={(e) => handleNavItemClick(e, 'projects')} 
                className={`hover-link ${isActive('projects') ? 'text-primary' : 'text-foreground'}`}
              >
                <Briefcase size={18} />
              </div>
              <Link 
                to="/blog" 
                onClick={(e) => e.stopPropagation()} 
                className={`hover-link ${isActive('blog') ? 'text-primary' : 'text-foreground'}`}
              >
                <FileText size={18} />
              </Link>
              <Link 
                to="/contact" 
                onClick={(e) => e.stopPropagation()} 
                className={`hover-link ${isActive('contact') ? 'text-primary' : 'text-foreground'}`}
              >
                <Mail size={18} />
              </Link>
            </nav>
            <div onClick={(e) => e.stopPropagation()}>
              <ThemeToggle />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center"
          >
            {isActive('home') && <Home size={24} className="text-primary" />}
            {isActive('about') && <User size={24} className="text-primary" />}
            {isActive('skills') && <Code size={24} className="text-primary" />}
            {isActive('timeline') && <Clock size={24} className="text-primary" />}
            {isActive('projects') && <Briefcase size={24} className="text-primary" />}
            {isActive('blog') && <FileText size={24} className="text-primary" />}
            {isActive('contact') && <Mail size={24} className="text-primary" />}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DynamicIsland;


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Timeline from '@/sections/Timeline';
import Projects from '@/sections/Projects';
import DynamicIsland from '@/components/DynamicIsland';
import Cursor from '@/components/Cursor';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section based on hash in URL
    const hash = location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="relative">
      <Cursor />
      <DynamicIsland />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
    </div>
  );
};

export default Index;

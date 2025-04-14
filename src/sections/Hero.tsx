
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Background shape components
const BackgroundShapes = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-32 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-32 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
  </div>
);

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }
  })
};

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Typewriter effect
  useEffect(() => {
    const text = "Full-Stack Developer & UI/UX Enthusiast";
    const typingElement = document.getElementById('typewriter');
    
    if (typingElement) {
      let index = 0;
      const typing = setInterval(() => {
        if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(typing);
        }
      }, 60); // Speed of typing
      
      return () => clearInterval(typing);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden transition-all duration-700">
      <BackgroundShapes />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-12 space-y-4"
        >
          <motion.div 
            custom={0} 
            variants={textVariants} 
            className="inline-block px-4 sm:px-6 mt-6 sm:mt-8 py-1 justify-center items-center rounded-full backdrop-blur-sm text-xs sm:text-sm bg-blue-500/20 border border-primary text-primary/60  hover:text-primary hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            " Believe you can and you're halfway there. "
          </motion.div>
          
          <motion.h1 
            custom={1} 
            variants={textVariants} 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
          Wutthipong <span className="bg-gradient-to-r from-primary to-white/10 bg-clip-text text-transparent">Wongwai.</span> make a difference
          </motion.h1>
          
          <motion.div custom={2} variants={textVariants}>
            <p id="typewriter" className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"></p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted-foreground">
            I build intuitive and performant applications that help businesses connect with their audience and achieve their goals.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <Button 
              size="lg" 
              className="group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

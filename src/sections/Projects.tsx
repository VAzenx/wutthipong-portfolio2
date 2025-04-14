
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink, Tag } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description:
        'A responsive dashboard for e-commerce analytics with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=500',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#',
      github: '#',
      category: 'Web App',
    },
    {
      id: 2,
      title: 'Social Media Application',
      description:
        'A full-stack social media platform with real-time messaging and post sharing.',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&w=500',
      tags: ['React', 'Node.js', 'Socket.io'],
      link: '#',
      github: '#',
      category: 'Full Stack',
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description:
        'A Kanban-style task management application with drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&w=500',
      tags: ['React', 'Redux', 'Firebase'],
      link: '#',
      github: '#',
      category: 'Web App',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern animations and design.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&w=500',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      link: '#',
      github: '#',
      category: 'UI/UX',
    },
    {
      id: 5,
      title: 'Weather Application',
      description:
        'A mobile application that shows weather forecasts based on user location.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&w=500',
      tags: ['React Native', 'API Integration', 'Geolocation'],
      link: '#',
      github: '#',
      category: 'Mobile App',
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description:
        'A web application allowing users to search and filter recipes by ingredients.',
      image: 'https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?auto=format&w=500',
      tags: ['JavaScript', 'API Integration', 'CSS'],
      link: '#',
      github: '#',
      category: 'Web App',
    },
  ];

  const categories = ['All', 'Web App', 'Full Stack', 'UI/UX', 'Mobile App'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/50 transition-all duration-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and applications. Each project represents unique
            challenges and solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm hover-link transition-all ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full bg-background/50 backdrop-blur-sm border-transparent hover:border-primary/20 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-link"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.link}
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-1">
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary flex items-center gap-1">
                      <Tag size={12} />
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

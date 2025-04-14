
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from '@/components/ThemeToggle';
import { Calendar, User, Tag, ChevronRight, ChevronLeft, Search, ChevronDown, ChevronUp, Clock } from 'lucide-react';

// Mock blog data - could be fetched from an API
const blogPosts = [
  {
    id: 1,
    title: 'ผมติดคณะไอที มจพ สาขาวิศวะเทคโนโลยีสารสนเทศและเครือข่าย',
    excerpt: 'นี่เป็นหนึ่งสิ่งที่ผมภูมิใจมากที่สุดในชีวิต...',
    date: 'June 15, 2023',
    author: 'Wutthipong Wongwai',
    tags: ['Kmutnb IT', 'Network Enginnerr', 'Univercity'],
    image: 'https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/463774914_7918586038241035_899407654612461510_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeEuHQZl4ex7_X2fIRzzMUn8VeQoZ1xzdYNV5ChnXHN1g2xrgr_PPJmznZUuL5jzFvE41u_AkERrfGsErrosI9-9&_nc_ohc=af5MyoDMuj8Q7kNvwFmWHgt&_nc_oc=AdmX6gB-zmiETPHInL1MxP9Civi9CcmVsW8wxg2wFnuYfn4fPPDfphs6E5B1aytiHCiVPmeX3ERLJTOiLyR-fcjB&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=fEyjnLASjpEGfV54yUXqEg&oh=00_AfE9YVtnBHs72f2SaMs-4jtMABQsrir9e7NPwIo7SYFCfQ&oe=68026BBF',
    readTime: '5 min read',
    featured: true,
    category: 'Article'
  },
  {
    id: 2,
    title: 'The Future of React: What to Expect',
    excerpt: 'Explore the upcoming features of React and how they will change the way we build web applications...',
    date: 'May 22, 2023',
    author: 'Alex Johnson',
    tags: ['React', 'JavaScript', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&w=500',
    readTime: '8 min read',
    featured: true,
    category: 'Article'
  },
  {
    id: 3,
    title: 'Advanced TypeScript Patterns for Better Code',
    excerpt: 'Discover advanced TypeScript patterns that will help you write cleaner, more maintainable code...',
    date: 'April 10, 2023',
    author: 'Alex Johnson',
    tags: ['TypeScript', 'Programming', 'Code Quality'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&w=500',
    readTime: '7 min read',
    featured: true,
    category: 'Tutorial'
  },
  {
    id: 4,
    title: 'Creating Micro-Animations with Framer Motion',
    excerpt: 'Learn how to add subtle and engaging micro-animations to your React applications using Framer Motion...',
    date: 'March 5, 2023',
    author: 'Alex Johnson',
    tags: ['Animation', 'Framer Motion', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&w=500',
    readTime: '6 min read',
    featured: true,
    category: 'Article'
  },
  {
    id: 5,
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Strategies and techniques to optimize the performance of your React applications for better user experience...',
    date: 'February 18, 2023',
    author: 'Alex Johnson',
    tags: ['React', 'Performance', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=500',
    readTime: '9 min read',
    featured: false,
    category: 'Tutorial'
  },
  {
    id: 6,
    title: 'The Guide to Modern CSS Layouts',
    excerpt: 'Explore modern CSS techniques like Grid, Flexbox, and Container Queries to create responsive layouts...',
    date: 'January 30, 2023',
    author: 'Alex Johnson',
    tags: ['CSS', 'Web Development', 'Layout'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&w=500',
    readTime: '7 min read',
    featured: false,
    category: 'Guide'
  },
  {
    id: 7,
    title: 'Mastering React Hooks',
    excerpt: 'A comprehensive guide to using React hooks effectively in your applications...',
    date: 'January 15, 2023',
    author: 'Alex Johnson',
    tags: ['React', 'Hooks', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&w=500',
    readTime: '10 min read',
    featured: false,
    category: 'Tutorial'
  },
  {
    id: 8,
    title: 'State Management in 2025',
    excerpt: 'Exploring the latest trends and tools for managing state in modern web applications...',
    date: 'December 28, 2022',
    author: 'Alex Johnson',
    tags: ['State Management', 'React', 'Redux'],
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&w=500',
    readTime: '8 min read',
    featured: false,
    category: 'Article'
  },
];

const tutorials = blogPosts.filter(post => post.category === 'Tutorial' || post.category === 'Guide');

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMorePosts, setShowMorePosts] = useState(false);
  const featuredPosts = blogPosts.filter(post => post.featured);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const slideDuration = 5000; // 5 seconds per slide
  
  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get recent posts (limited to 6 initially)
  const recentPosts = showMorePosts ? filteredPosts : filteredPosts.slice(0, 6);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(current => 
        current === featuredPosts.length - 1 ? 0 : current + 1
      );
      setProgress(0);
    }, slideDuration);
    
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (slideDuration / 100));
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);
    
    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === featuredPosts.length - 1 ? 0 : current + 1
    );
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? featuredPosts.length - 1 : current - 1
    );
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-32 transition-all duration-700">

{/* Back to Home Button */}
<div className="fixed flex top-4 left-1/2 -translate-x-1/2 z-40 hover:scale-110 transition-transform duration-300">
  <Link to="/">
    <Button
    className="text-primary dark:text-white glass hover:glass rounded-full shadow-lg transition-all duration-300"
    >
      / BACK TO HOME
    </Button>
  </Link>
</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, learnings, and insights about web development, design, and
            technology.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search posts by title or tag..."
                className="pl-10 pr-4 py-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Section 1: Featured Stories Carousel */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Stories</h2>
            <div className="flex gap-2">
              <Button 
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft size={18} />
              </Button>
              <Button 
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl h-[440px] md:h-[500px]" ref={carouselRef}>
            {featuredPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className={`absolute top-0 left-0 w-full h-full ${index === currentSlide ? 'z-10' : 'z-0'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10">
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-primary/80 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-200 mb-4 max-w-2xl">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-300">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="secondary">
                            Read Article
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Recent Articles Grid */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Articles</h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No blog posts found matching your search.
              </p>
              <Button className="mt-4" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Link to={`/blog/${post.id}`}>
                      <Card className="overflow-hidden h-full hover:shadow-md transition-all hover:border-primary/30">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                                +{post.tags.length - 2}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="px-6 py-4 border-t flex justify-between items-center">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <div
                            className="hover:text-primary hover:bg-primary/10 flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-md transition-colors"
                          >
                            Read More <ChevronRight size={16} />
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filteredPosts.length > 6 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowMorePosts(!showMorePosts)}
                    className="px-6"
                  >
                    {showMorePosts ? (
                      <> 
                        Show Less <ChevronUp className="ml-2" size={16} />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="ml-2" size={16} />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </section>

        {/* Section 3: Tutorials & Guides */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Tutorials & Guides</h2>
          
          <div className="space-y-6">
            {tutorials.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-md transition-all hover:border-primary/30">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 lg:w-1/5">
                        <div className="h-48 md:h-full relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4 lg:w-4/5 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                            {post.category}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            <span>{post.date}</span>
                          </div>
                          <div className="text-sm font-medium flex items-center gap-1 text-primary-foreground bg-primary/10 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                            Read Tutorial <ChevronRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;

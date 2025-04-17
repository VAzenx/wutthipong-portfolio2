
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: 'Building Responsive UIs with Tailwind CSS',
    content: `
      # Building Responsive UIs with Tailwind CSS
      
      In today's web development landscape, creating responsive user interfaces is essential. Tailwind CSS offers a utility-first approach that makes this process more efficient and enjoyable.
      
      ## Why Tailwind CSS?
      
      Tailwind CSS provides a comprehensive set of utility classes that allows you to build custom designs without leaving your HTML. This approach has several advantages:
      
      - **Speed**: Quickly build out UIs without writing custom CSS
      - **Consistency**: Utilize a predefined design system
      - **Responsive design**: Built-in responsive modifiers
      - **Dark mode**: Simple theme switching
      
      ## Getting Started
      
      To get started with Tailwind CSS, you first need to install it via npm:
      
      \`\`\`bash
      npm install -D tailwindcss
      npx tailwindcss init
      \`\`\`
      
      Then configure your tailwind.config.js file and add Tailwind directives to your CSS.
      
      ## Building a Responsive Component
      
      Let's create a simple responsive card component using Tailwind CSS:
      
      \`\`\`jsx
      const Card = ({ title, description }) => (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      );
      \`\`\`
      
      This component will look great on all devices and in both light and dark modes without writing a single line of custom CSS!
      
      ## Conclusion
      
      Tailwind CSS empowers developers to create beautiful, responsive UIs with minimal effort. Its utility-first approach might seem verbose at first, but the productivity gains and design consistency it offers are well worth it.
      
      Give it a try on your next project and see the difference for yourself!
    `,
    date: 'June 15, 2023',
    author: 'Alex Johnson',
    tags: ['Web Development', 'Tailwind CSS', 'UI Design'],
    image: 'https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/463774914_7918586038241035_899407654612461510_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeEuHQZl4ex7_X2fIRzzMUn8VeQoZ1xzdYNV5ChnXHN1g2xrgr_PPJmznZUuL5jzFvE41u_AkERrfGsErrosI9-9&_nc_ohc=af5MyoDMuj8Q7kNvwFmWHgt&_nc_oc=AdmX6gB-zmiETPHInL1MxP9Civi9CcmVsW8wxg2wFnuYfn4fPPDfphs6E5B1aytiHCiVPmeX3ERLJTOiLyR-fcjB&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=fEyjnLASjpEGfV54yUXqEg&oh=00_AfE9YVtnBHs72f2SaMs-4jtMABQsrir9e7NPwIo7SYFCfQ&oe=68026BBF',
    readTime: '5 min read',
  },
  // More blog posts would be added here
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id || '1', 10));
  const { setIsLoading } = useLoading();
  
  useEffect(() => {
    // Simulate content loading
    return () => {
      setIsLoading(true);
    }
  }, [setIsLoading]);
  
  if (!post) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center transition-all duration-700">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-accent dark:border-portfolio-darkAccent mx-auto"></div>
            <p className="mt-4">Comming SOon...</p>
          </div>
        </div>
    );
  }
  
  // Function to convert markdown-like content to simple HTML
  const createMarkup = (content) => {
    return { __html: content
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 mt-12">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mb-4 mt-10">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mb-3 mt-8">$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gm, '<em>$1</em>')
      .replace(/\n/gm, '<br />')
      .replace(/```(.+?)```/gs, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-4"><code>$1</code></pre>')
    };
  };

  return (
    <div className="relative pt-20 pb-32">
      {/* Back to BLog Button */}
      <div className="fixed flex top-4 left-1/2 -translate-x-1/2 z-40 hover:scale-110 transition-transform duration-300">
        <Link to="/blog">
          <Button
            className="text-primary dark:text-white glass hover:glass rounded-full shadow-lg transition-all duration-300"
            variant="outline"
          >
            / BACK TO BLOG POST
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto -mt-16 relative"
        >
          <div className="bg-card rounded-xl shadow-lg p-6 md:p-10">
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Post Content */}
            <article className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={createMarkup(post.content)} />
            </article>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-32">
      
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl shadow-sm p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending... <Send className="ml-2 animate-pulse" size={16} /></>
                ) : (
                  <>Send Message <Send className="ml-2" size={16} /></>
                )}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">wutthipong.2006x@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+6694-017-3161</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Thailand, Bangkok</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://www.facebook.com/BANK201049/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full transition-colors">
                  <Facebook className="text-primary" size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://github.com/VAzenx" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full transition-colors">
                  <Github className="text-primary" size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://x.com/Wutthipong_2006" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full transition-colors">
                  <Twitter className="text-primary" size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

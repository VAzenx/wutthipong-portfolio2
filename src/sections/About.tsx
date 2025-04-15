
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Heart, Lightbulb, MessageCircle, BedDouble, Guitar } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="py-20 transition-all duration-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-secondary hover:shadow-xl hover:scale-105 transition-all duration-700">
                {/* This would be your image */}
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold ">
                  <img src="https://scontent.futp1-1.fna.fbcdn.net/v/t39.30808-6/486064395_1844421902985868_9190342069794530121_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeELFmnp_-kjtDJnB82nt3evjfkZSUyxW5qN-RlJTLFbmncCk1mLJF00MXdJ2KxKSABKLL3HPqleKuzO98zjdP-0&_nc_ohc=4De1HGhlT5EQ7kNvwHtHxvU&_nc_oc=AdnQWVqNwKXFl3e3OPRY7FSd7mEsrGzYxd88ksbKjzotu4Cqvlcoa5TlnnUVeVInjy0hMvln8_IBniVbTgFW3eoE&_nc_zt=23&_nc_ht=scontent.futp1-1.fna&_nc_gid=6nZ6L6Sr6ptdA5KANTR6lg&oh=00_AfFvK0ToiqaUqCUcP9DQGpBjURimE80ShYE40c5BVlQYww&oe=6801994C" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl z-[-1]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer with over 5 years of experience specializing in creating modern web applications. I love combining technical skills with creative problem-solving to build beautiful, functional digital experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me hiking in nature, reading science fiction, or experimenting with new cooking recipes. I believe in continuous learning and sharing knowledge with the tech community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4">
                  <Lightbulb className="text-primary" />
                  <span>Creative thinker</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4">
                  <Coffee className="text-primary" />
                  <span>Coffee enthusiast</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
              
                <CardContent className="flex items-center gap-3 p-4">
                  <Heart className="text-primary" />
                  <span>Passionate about UX</span>
                  
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4">
                  <MessageCircle className="text-primary" />
                  <span>Clear communicator</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4">
                  <BedDouble  className="text-primary" />
                  <span>Sleep all day</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4">
                  <Guitar  className="text-primary" />
                  <span>Music Enthusiast</span>
                </CardContent>
              </Card>
            </div>
            {/* Tages */}
            <div className='flex flex-wrap gap-3 mt-4'>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#JavaScript</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#React</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#Node.js</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#TypeScript</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#TailwindCss</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#Next.Js</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors duration-300">#GSAP</span>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
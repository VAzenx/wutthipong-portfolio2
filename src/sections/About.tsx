
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
            className="lg:w-2/5 flex justify-center items-center "
            >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-sky-400/40 rounded-md absolute -top-4 -right-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-sky-400 hover:shadow-xl hover:scale-105 transition-all duration-700 rounded-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-sky-400/20 group-hover:opacity-0  transition-opacity duration-300"></div>
                <img 
                  src="https://scontent.futp1-1.fna.fbcdn.net/v/t39.30808-6/486064395_1844421902985868_9190342069794530121_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vSl4C44oztkQ7kNvwFTP32e&_nc_oc=AdnYtc-78IuyEO9BCRhpavPsI4K_g9662cnOdFZvtpvNxfJDc3V9ZDG93j4VT4Z3H-1OtT4duPq16Zqdwsz9O7KP&_nc_zt=23&_nc_ht=scontent.futp1-1.fna&_nc_gid=HA8WFMIIslhtMUUJabgGhA&oh=00_AfHScyoOxBUB_3GjIqajE4xwtUHpthJLmRj3xo_ZSvQt6g&oe=68043C4C" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
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
                <CardContent className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/50">
                  <Lightbulb className="text-primary \" />
                  <span>Creative thinker</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/50">
                  <Coffee className="text-primary" />
                  <span>Coffee enthusiast</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
              
                <CardContent className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/50">
                  <Heart className="text-primary" />
                  <span>Passionate about UX</span>
                  
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/50">
                  <MessageCircle className="text-primary" />
                  <span>Clear communicator</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/50">
                  <BedDouble  className="text-primary" />
                  <span>Sleep all day</span>
                </CardContent>
              </Card>
              <Card className="glass hover:shadow-xl hover:scale-105 transition-all duration-700">
                <CardContent className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/50">
                  <Guitar  className="text-primary" />
                  <span>Music Enthusiast</span>
                </CardContent>
              </Card>
            </div>
            {/* Tages */}
            <h3 className=" px-3 py-1 top-2 relative text-lg font-semibold transition-all duration-700">#Tages</h3>
            <div className='flex flex-wrap gap-3 mt-4'>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-scale duration-700">#JavaScript</span>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-all duration-700">#React</span>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-all duration-700">#Node.js</span>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-all duration-700">#TypeScript</span>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-all duration-700">#TailwindCss</span>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-all duration-700">#Next.Js</span>
                <span className="glass px-4 py-2  text-primary rounded-lg border border-blue-200  hover:shadow-xl duration-300 hover:scale-105 transition-all duration-700">#GSAP</span>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { Code, CodeXml, Database, LineChart, Tablet, Paintbrush } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 80 },
        { name: 'GraphQL', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 65 },
      ],
    },
    {
      category: 'Tools & Frameworks',
      icon: <CodeXml className="w-6 h-6" />,
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'Next.js', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'Webpack', level: 65 },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: <Paintbrush className="w-6 h-6" />,
      items: [
        { name: 'Figma', level: 80 },
        { name: 'UI Design', level: 75 },
        { name: 'Prototyping', level: 70 },
        { name: 'User Research', level: 65 },
        { name: 'Design Systems', level: 75 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: <LineChart className="w-6 h-6" />,
      items: [
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Project Management', level: 80 },
        { name: 'Time Management', level: 85 },
      ],
    },
    {
      category: 'Mobile Development',
      icon: <Tablet className="w-6 h-6" />,
      items: [
        { name: 'React Native', level: 70 },
        { name: 'Flutter', level: 50 },
        { name: 'iOS Development', level: 40 },
        { name: 'Android Development', level: 45 },
        { name: 'Mobile UI Design', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 transition-all duration-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's a breakdown of my technical and soft skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:shadow-xl transition-shadow duration-700"
            >
              <div className="flex items-center mb-6 ">
                <div className="mr-4 text-primary">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/70 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

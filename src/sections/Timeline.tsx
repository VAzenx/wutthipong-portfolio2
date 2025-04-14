
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      date: '2022 - Present',
      description:
        'Leading the frontend development team, implementing new features, and improving application performance. Working with React, TypeScript, and GraphQL.',
      icon: <Briefcase />,
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      date: '2020 - 2022',
      description:
        'Developed responsive web applications using modern JavaScript frameworks. Collaborated with design and backend teams to deliver seamless user experiences.',
      icon: <Briefcase />,
    },
    {
      title: 'UI/UX Designer & Developer',
      company: 'Creative Agency',
      date: '2018 - 2020',
      description:
        'Created wireframes, prototypes, and implemented frontend designs. Worked directly with clients to understand requirements and deliver solutions.',
      icon: <Briefcase />,
    },
    {
      title: "Master's in Computer Science",
      company: 'University of Technology',
      date: '2016 - 2018',
      description:
        'Specialized in Human-Computer Interaction and Web Technologies. Completed thesis on "Improving User Engagement through Interface Design".',
      icon: <GraduationCap />,
    },
    {
      title: "Bachelor's in Software Engineering",
      company: 'Tech University',
      date: '2012 - 2016',
      description:
        'Graduated with honors. Participated in multiple hackathons and coding competitions. Learned fundamentals of programming and software design.',
      icon: <GraduationCap />,
    },
  ];

  return (
    <section id="timeline" className="py-20 transition-all duration-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's my professional journey, from education to career milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center mb-16  ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                {experience.icon}
              </div>

              {/* Card */}
              <div
                className={`ml-8 md:ml-0  ${
                  idx % 2 === 0
                    ? 'md:mr-auto md:pr-12 md:text-right md:ml-0'
                    : 'md:ml-auto md:pl-12'
                } w-full md:w-5/12 `}
              >
                <div className="glass rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-700">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm mt-1 mb-2">
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <Calendar size={14} />
                    <span>{experience.date}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

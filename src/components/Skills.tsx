import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Go"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Socket.io", "REST APIs", "GraphQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Mongoose", "Firebase", "Supabase"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "AWS", "GCP", "Kubernetes"],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Specialized",
      skills: ["face-api.js", "Framer Motion", "Three.js", "Recharts", "Stripe"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6 hover-lift"
              >
                <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and best practices to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
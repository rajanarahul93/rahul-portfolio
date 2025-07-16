import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Code2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Development Intern",
      company: "Vanaha Botanical Skincare",
      period: "May 2025 - Jul 2025",
      location: "Remote",
      description: "Website maintenance, SEO optimization, performance analytics, and conversion rate optimization.",
      skills: ["React", "SEO", "Analytics", "Performance Optimization"],
      icon: <Code2 className="h-5 w-5" />
    },
    {
      type: "contribution",
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      period: "May 2024 - Oct 2024",
      location: "Remote",
      description: "Contributed to various open-source projects, focusing on React components and UI/UX improvements.",
      skills: ["React", "Open Source", "Git", "JavaScript"],
      icon: <Award className="h-5 w-5" />
    },
    {
      type: "contribution",
      title: "Open Source Contributor",
      company: "Social Summer of Code",
      period: "Apr 2024 - Aug 2024",
      location: "Remote",
      description: "Collaborated on community-driven projects, implementing new features and fixing bugs.",
      skills: ["Node.js", "Express", "MongoDB", "TypeScript"],
      icon: <Award className="h-5 w-5" />
    }
  ];

  const certifications = [
    {
      title: "HackerRank Frontend Developer (React)",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "Certificate of React Proficiency"
    },
    {
      title: "Certificate of Merit",
      issuer: "HackNITR",
      date: "2024",
      credentialId: "Outstanding Performance in Hackathon"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2024",
      credentialId: "API Design and Testing"
    },
    {
      title: "Level 3 GenAI: Prompt Engineering",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "AI and Machine Learning"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Achievements</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              My journey in software development and open source contributions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    {exp.icon}
                  </div>
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-primary/20" />
                  
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold">{exp.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'work' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {exp.type === 'work' ? 'Work' : 'Contribution'}
                      </span>
                    </div>
                    
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-card p-6 hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold">{cert.title}</h4>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    
                    <p className="text-primary mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.credentialId}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <motion.div variants={itemVariants} className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold mb-2">B.Tech in Biotechnology</h4>
                  <p className="text-primary mb-2">National Institute of Technology, Rourkela</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>2022 - 2026</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Rourkela, India</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Pursuing Bachelor of Technology with a focus on biotechnology while 
                    developing expertise in software development and web technologies.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
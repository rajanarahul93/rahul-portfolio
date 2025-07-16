import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="section-padding bg-gradient-secondary">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">B.Tech in Biotechnology</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  NIT Rourkela • 2022-2026
                </p>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-muted-foreground">Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  India • Open to remote work
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">My Journey</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate Frontend Developer with a unique background in Biotechnology 
                  from NIT Rourkela. My journey combines scientific thinking with creative 
                  problem-solving in the digital realm.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I specialize in building modern, responsive web applications using React, 
                  Next.js, and cutting-edge technologies. My experience spans from crafting 
                  beautiful user interfaces to implementing complex backend systems.
                </p>

                <div className="flex items-center space-x-2 text-primary">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Open Source Contributor</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I transform ideas into digital experiences that are not only functional but 
                also beautiful and user-friendly. From concept to deployment, I ensure every 
                project meets the highest standards of quality and performance.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
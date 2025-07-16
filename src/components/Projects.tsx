import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FocusForge",
      description:
        "Ambient sound productivity app with customizable soundscapes, focus timers, and beautiful UI animations.",
      tags: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "https://focus-forge-eight.vercel.app/",
      githubUrl: "https://github.com/rajanarahul93/FocusForge",
      image: "/projects/focusforge.png",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "trimrr",
      description:
        "Full-stack URL shortener with analytics dashboard, custom domains, and QR code generation.",
      tags: ["React", "Supabase", "Shadcn UI", "qrcode.react"],
      liveUrl: "https://trimrr-amber.vercel.app/",
      githubUrl: "https://github.com/rajanarahul93/trimrr",
      image: "/projects/trimrr.png",
      featured: true,
      gradient: "from-blue-500 to-teal-500",
    },
    {
      title: "QuickBuy",
      description:
        "MERN stack e-commerce platform with Stripe integration, inventory management, and real-time updates.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
      liveUrl: "https://quick-buy-frontend.vercel.app/",
      githubUrl: "https://github.com/rajanarahul93/quickbuy",
      image: "/projects/QuickBuy.png",
      featured: true,
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "FusionDex",
      description:
        "Pokémon fusion and battle simulator with interactive charts and real-time multiplayer battles.",
      tags: ["React", "PokéAPI", "Recharts", "Socket.io"],
      liveUrl: "https://fusion-dex-alpha.vercel.app/",
      githubUrl: "https://github.com/rajanarahul93/fusiondex",
      image: "/projects/fusiondex.png",
      featured: false,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Blogger",
      description:
        "SEO-optimized personal blog built with Next.js, Velite.js for markdown, and Tailwind CSS. Includes dynamic routing, theming, and responsive design.",
      tags: ["Next.js", "Velite.js", "Tailwind CSS"],
      liveUrl: "https://blogger-xi-green.vercel.app/",
      githubUrl: "https://github.com/rajanarahul93/Blogger",
      image: "/projects/blogger.png",
      featured: false,
      gradient: "from-yellow-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gradient-secondary">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of my work, from concept to deployment
            </p>
          </motion.div>

          <div className="grid gap-8">
            {/* Featured Projects */}
            <div className="grid lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    className="glass-card p-6 hover-lift group"
                  >
                    <div className="w-full h-48 rounded-lg mb-6 relative overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-4 right-4">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="ghost">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Other Projects */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Side Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => !p.featured)
                  .map((project) => (
                    <motion.div
                      key={project.title}
                      variants={itemVariants}
                      className="glass-card p-6 hover-lift group"
                    >
                      <div className="w-full h-32 rounded-lg mb-4 relative overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div
                            className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
                          />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>

                      <h4 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="ghost">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

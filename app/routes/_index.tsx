import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import profilePhoto from '../../public/assets/images/me.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-medium tracking-wider text-sm uppercase">Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Deekshith Kumar V</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-secondary dark:text-d-text-secondary mt-6 font-light">
            Software Engineer
          </h2>
          <p className="mt-6 text-lg text-text-secondary dark:text-d-text-secondary max-w-lg leading-relaxed">
            I build accessible, pixel-perfect, and performant web applications. Passionate about creating seamless user experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-teal-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              View Work
            </a>
            <a
              href="/assets/DeekshithResume.pdf"
              download
              className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 rounded-full font-medium transition-all"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="https://github.com/deekshithkumarv" target="_blank" rel="noopener noreferrer" className="text-2xl text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/" target="_blank" rel="noopener noreferrer" className="text-2xl text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 duration-300">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-90 animate-pulse-slow"></div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-gray-200 to-transparent dark:from-gray-700 dark:to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-slate-800 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Deekshith Kumar V"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white/50 dark:bg-d-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-text-primary dark:text-d-text-primary">About Me</h2>
          <p className="text-lg text-text-secondary dark:text-slate-300 leading-relaxed mb-6">
            I am a dedicated Software Engineer with a passion for transforming complex problems into elegant, scalable solutions.
            With expertise in modern web technologies, I specialize in building full-stack applications that are not only functional
            but also provide delightful user experiences.
          </p>
          <p className="text-lg text-text-secondary dark:text-slate-300 leading-relaxed">
            When I'm not coding, you can find me exploring new tech trends, contributing to open-source, or refining my design skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "ASP.NET Core", "SQL", "Git", "REST APIs"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Core Technologies</h2>
          <p className="text-text-secondary dark:text-d-text-secondary">My technical toolkit</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-glass hover:shadow-cyan-500/20 border border-gray-100 dark:border-slate-700 transition-all font-medium text-lg cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "ERP System",
      description: "Comprehensive management system regarding manufacturing, purchase, stock, and sales operations.",
      technologies: ["ASP.NET", "SQL Server", "C#"],
      link: "#"
    },
    {
      title: "Grow-N-Know",
      description: "ML-powered agricultural assistant identifying crop diseases and recommending fertilizers.",
      technologies: ["Python", "ML", "React"],
      link: "#"
    },
    {
      title: "Messaging App",
      description: "Real-time android messaging application facilitating secure user communication.",
      technologies: ["Android", "Firebase", "Java"],
      link: "#"
    },
    {
      title: "CarWow Clone",
      description: "Web application for browsing luxury cars with real-time pricing and specifications.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Work</h2>
          <p className="text-text-secondary dark:text-d-text-secondary">A selection of projects I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <a href={project.link} className="text-text-secondary hover:text-primary transition-colors">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="text-text-secondary dark:text-d-text-secondary mb-8 leading-relaxed h-16">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg p-12 rounded-3xl border border-white/20 dark:border-slate-700 shadow-glass"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let's work together</h2>
          <p className="text-lg text-text-secondary dark:text-d-text-secondary mb-8">
            Have a project in mind or want to discuss modernizing your tech stack? I'm always open to new opportunities.
          </p>
          <a
            href="mailto:vdeekshithkumar@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-teal-600 hover:to-cyan-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1"
          >
            Say Hello <FaEnvelope className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { FaEnvelope } from "react-icons/fa";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* 
        Note: Header and Footer are provided by root.tsx layout. 
        We only focus on page content here.
      */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

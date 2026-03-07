import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaGithub, FaLinkedin, FaExternalLinkAlt, FaEnvelope,
  FaCopy, FaCheck, FaGraduationCap, FaCertificate,
  FaBuilding, FaMapMarkerAlt, FaCloud, FaDatabase,
} from "react-icons/fa";
import {
  SiReact, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiDotnet, SiMysql, SiGit, SiAngular, SiRedux,
  SiPostgresql, SiSnowflake, SiVite, SiRemix,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import profilePhoto from '../../public/assets/images/me.jpg';
import AnimatedCounter from "~/components/AnimatedCounter";

/* ─────────────────────────────────────────── */
/*                 HERO SECTION                */
/* ─────────────────────────────────────────── */
const roles = ["Software Engineer", "Full-Stack Developer", ".NET Specialist", "React Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (isTyping) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayed, isTyping, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="mesh-blob-1 w-[580px] h-[580px] top-[-100px] left-[-80px]" />
      <div className="mesh-blob-2 w-[480px] h-[480px] bottom-[-80px] right-[-60px]" />
      <div className="mesh-blob-1 w-[300px] h-[300px] bottom-[10%] left-[30%] opacity-20" />
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #6c3ef4 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="section-label mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse inline-block" />
            Available for Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold leading-[1.08] tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient block mt-1">Deekshith Kumar V</span>
          </h1>

          <div className="mt-4 h-10 flex items-center">
            <h2 className="text-xl md:text-2xl text-text-secondary dark:text-d-text-secondary font-medium">
              {displayed}
              <span className="cursor-blink inline-block w-[2px] h-6 bg-primary ml-[2px] align-middle" />
            </h2>
          </div>

          <p className="mt-6 text-base md:text-lg text-text-secondary dark:text-d-text-secondary max-w-xl leading-relaxed">
            Full-Stack Engineer with{" "}
            <span className="font-semibold text-text-primary dark:text-d-text-primary">~3 years of experience</span>{" "}
            specializing in{" "}
            <span className="font-semibold text-text-primary dark:text-d-text-primary">.NET</span>,{" "}
            <span className="font-semibold text-text-primary dark:text-d-text-primary">React</span>, and{" "}
            <span className="font-semibold text-text-primary dark:text-d-text-primary">Angular</span>{" "}
            — building enterprise-grade applications and automating complex workflows.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="group px-7 py-3.5 text-white font-semibold rounded-xl shimmer transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,62,244,0.4)] hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
            >
              View My Work
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/#contact"
              className="px-7 py-3.5 rounded-xl font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
              style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <a
              href="https://github.com/deekshithkumarv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-text-secondary dark:text-d-text-secondary hover:text-white hover:bg-[#333] transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--section-divider)' }}
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-text-secondary dark:text-d-text-secondary hover:text-white hover:bg-[#0A66C2] transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--section-divider)' }}
            >
              <FaLinkedin className="text-xl" />
            </a>
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm text-text-secondary dark:text-d-text-secondary flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-primary text-xs" /> Mangalore, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="relative flex justify-center items-center"
        >
          <div
            className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full spin-slow"
            style={{ background: 'conic-gradient(from 0deg, var(--primary-color), var(--secondary-color), transparent, var(--primary-color))', padding: '3px', borderRadius: '9999px' }}
          >
            <div className="w-full h-full rounded-full dark:bg-d-background bg-background" />
          </div>
          <div
            className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full blur-[50px] opacity-40 animate-pulse-slow"
            style={{ background: 'radial-gradient(circle, var(--primary-color), var(--secondary-color))' }}
          />
          <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl z-10">
            <img src={profilePhoto} alt="Deekshith Kumar V" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
          </div>
          {[
            { label: "React", color: "#61dafb", top: "5%", left: "-10%", hoverX: -60 },
            { label: ".NET", color: "#512bd4", top: "10%", right: "-15%", left: "auto", hoverX: 60 },
            { label: "TypeScript", color: "#3178c6", top: "70%", left: "-18%", hoverX: -60 },
            { label: "Azure", color: "#0078d4", top: "65%", right: "-12%", left: "auto", hoverX: 60 },
          ].map((chip, index) => (
            <motion.div
              key={chip.label}
              className="absolute z-20"
              style={{ top: chip.top, left: chip.left, right: (chip as any).right }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + (index % 2) * 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            >
              <motion.div
                className="px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg cursor-pointer"
                style={{ background: `${chip.color}22`, border: `1px solid ${chip.color}55`, color: chip.color, backdropFilter: 'blur(8px)' }}
                whileHover={{ scale: 1.15, x: chip.hoverX, y: 0 }}
                whileTap={{ scale: 0.95, x: chip.hoverX * 1.5, y: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                {chip.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*               EXPERIENCE SECTION            */
/* ─────────────────────────────────────────── */
const experiences = [
  {
    role: "Software Engineer",
    company: "Ivoyant Systems Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Jul 2023 – Present",
    current: true,
    points: [
      "Serve as a consultant on a large-scale global Human Capital Management (HCM) and payroll platform.",
      "Streamlined HR reporting by developing automated stored procedures in SQL Server and Snowflake.",
      "Built integration layers using low-code platforms to synchronize data with client APIs.",
    ],
    tech: ["React", "TypeScript", ".NET", "Snowflake", "SQL Server", "Azure"],
  },
  {
    role: "Software Engineer Trainee",
    company: "Ivoyant Systems Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Feb 2023 – Jun 2023",
    current: false,
    points: [
      "Actively involved in initial planning and development phases of full project lifecycles.",
      "Developed front-end components in Angular and back-end services in .NET without formal training.",
      "Operated independently to meet project milestones, bridging design requirements and technical execution.",
    ],
    tech: ["Angular", ".NET", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Skill House | Aykan",
    location: "Mangalore, India",
    period: "Jun 2022 – Sep 2022",
    current: false,
    points: [
      "Learned and developed web pages and backend databases to store, collect and organise data efficiently.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 75% 30%, var(--primary-color) 0%, transparent 60%)' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-4">
          <span className="section-label"><MdWork className="text-base" /> Experience</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16 mt-4">
          Work <span className="text-gradient">History</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          {/* Timeline line - purely decorative center line on desktop, left aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px opacity-20"
            style={{ background: 'linear-gradient(to bottom, var(--primary-color), var(--secondary-color))' }} />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 !== 0; // if true, item sits on the right side
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-end' : 'md:justify-start'} pl-6 md:pl-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-[3px] z-10"
                    style={{ background: exp.current ? 'var(--primary-color)' : 'var(--dark-background-body, #060812)', borderColor: 'var(--primary-color)' }} />

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-card hover:-translate-y-1"
                      style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                      <div className="flex flex-col gap-2 mb-3">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-lg font-display font-bold text-text-primary dark:text-d-text-primary">{exp.role}</h3>
                          {exp.current && (
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-green-400"
                              style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)' }}>
                              CURRENT
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 text-sm">
                          <span className="flex items-center gap-1.5 font-semibold" style={{ color: 'var(--primary-color)' }}>
                            <FaBuilding className="text-xs" /> {exp.company}
                          </span>
                          <span className="text-xs text-text-secondary dark:text-d-text-secondary whitespace-nowrap">{exp.period}</span>
                        </div>
                        <span className="text-xs text-text-secondary dark:text-d-text-secondary flex items-center gap-1">
                          <FaMapMarkerAlt className="text-[10px]" />{exp.location}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="text-sm text-text-secondary dark:text-d-text-secondary leading-relaxed flex gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--primary-color)' }} />
                            {pt}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-5 pt-5" style={{ borderTop: '1px solid var(--section-divider)' }}>
                        {exp.tech.map((t, j) => (
                          <span key={j} className="text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                            style={{ background: 'var(--section-divider)', color: 'text-text-primary dark:text-d-text-primary', border: '1px solid var(--card-border)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*                ABOUT SECTION               */
/* ─────────────────────────────────────────── */
const stats = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Cloud Certifications" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, var(--primary-color) 0%, transparent 60%)' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-4">
          <span className="section-label">About Me</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16 mt-4">
          Crafting Digital <span className="text-gradient">Experiences</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-lg text-text-secondary dark:text-d-text-secondary leading-relaxed mb-6">
              Full-Stack Engineer with nearly{" "}
              <span className="font-semibold text-text-primary dark:text-d-text-primary">3 years of industry experience</span>{" "}
              building scalable enterprise applications. I've proven ability to work independently — moving from planning to production in fast-paced environments.
            </p>
            <p className="text-lg text-text-secondary dark:text-d-text-secondary leading-relaxed">
              My specialist areas are{" "}
              <span className="font-semibold text-text-primary dark:text-d-text-primary">.NET Web API</span>,{" "}
              <span className="font-semibold text-text-primary dark:text-d-text-primary">React</span>, and{" "}
              <span className="font-semibold text-text-primary dark:text-d-text-primary">Angular</span>, with deep experience automating complex enterprise workflows and managing cloud-integrated databases on{" "}
              <span className="font-semibold text-text-primary dark:text-d-text-primary">Snowflake</span> and{" "}
              <span className="font-semibold text-text-primary dark:text-d-text-primary">Azure</span>.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/deekshithkumarv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <FaGithub /> GitHub →
              </a>
              <a href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <FaLinkedin /> LinkedIn →
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-1 gap-5">
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="relative p-6 rounded-2xl flex items-center gap-5 overflow-hidden"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }} />
                <div className="text-4xl font-display font-bold text-gradient z-10">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-text-secondary dark:text-d-text-secondary font-medium z-10">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*               SKILLS SECTION               */
/* ─────────────────────────────────────────── */
const allSkills = [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "#512bd4" },
  { name: "Angular", icon: SiAngular, color: "#dd0031" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Remix", icon: SiRemix, color: "#aa99ff" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "SQL Server", icon: SiMysql, color: "#cc2927" },
  { name: "Snowflake", icon: SiSnowflake, color: "#29b5e8" },
  { name: "Azure", icon: FaCloud, color: "#0078d4" },
  { name: "Entity Framework", icon: FaDatabase, color: "#9b59b6" },
  { name: "REST APIs", icon: TbApi, color: "#14b8a6" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "SQL", icon: SiMysql, color: "#00758f" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, var(--secondary-color) 0%, transparent 60%)' }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="section-label">Tech Stack</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-4 mt-4"
        >
          Tools I Work With
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-text-secondary dark:text-d-text-secondary mb-16 max-w-lg mx-auto"
        >
          From frontend frameworks and backend APIs to cloud databases and DevOps tooling.
        </motion.p>

        {/* Uniform grid of large square cards — icon centred at top, name below */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.07 }}
              className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-300 aspect-square"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
            >
              {/* Per-tech brand glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative flex items-center justify-center w-12 h-12 rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${skill.color}15`, color: skill.color }}
              >
                <skill.icon />
              </div>

              {/* Name */}
              <span className="relative text-[11px] font-semibold text-center text-text-secondary dark:text-d-text-secondary leading-tight group-hover:text-text-primary dark:group-hover:text-d-text-primary transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*              PROJECTS SECTION              */
/* ─────────────────────────────────────────── */
const projects = [
  {
    number: "01",
    title: "HR Management System",
    tag: "Company Project",
    description: "Configurable HRMS platform enabling end-to-end employee management with dynamic form generation, secure Web APIs, and a modern React front-end built for scale.",
    technologies: ["React", "TypeScript", "Vite", "Redux Toolkit", ".NET 8", "PostgreSQL"],
    gradient: "from-violet-500 to-purple-600",
    accent: "#7c3aed",
    link: "#",
  },
  {
    number: "02",
    title: "Container Management Platform",
    tag: "Company Project",
    description: "Container swapping, selling, and buying platform that solves the global container shortage conundrum — enabling seamless logistics operations via a real-time web interface.",
    technologies: ["Angular", ".NET Web API", "PostgreSQL"],
    gradient: "from-teal-500 to-emerald-500",
    accent: "#14b8a6",
    link: "#",
  },
  {
    number: "03",
    title: "ERP System",
    tag: "Enterprise Project",
    description: "Comprehensive enterprise resource planning system covering manufacturing, purchase, stock, and sales operations — built for real business workflow automation.",
    technologies: ["ASP.NET", "SQL Server", "C#", "JavaScript"],
    gradient: "from-sky-500 to-blue-600",
    accent: "#0ea5e9",
    link: "#",
  },
  {
    number: "04",
    title: "Grow-N-Know",
    tag: "Personal Project",
    description: "ML-powered agricultural assistant that identifies crop diseases from photos and recommends targeted fertilizers to improve yields.",
    technologies: ["Python", "Machine Learning", "React", "Flask"],
    gradient: "from-green-500 to-emerald-400",
    accent: "#22c55e",
    link: "#",
  },
  {
    number: "05",
    title: "Photography Website",
    tag: "Personal Project",
    description: "Designed and developed a fully responsive photography portfolio website that showcases galleries and all needed client-facing services.",
    technologies: ["React", "Remix", "Tailwind CSS"],
    gradient: "from-rose-500 to-pink-600",
    accent: "#f43f5e",
    link: "#",
  },
  {
    number: "06",
    title: "Messaging App",
    tag: "Personal Project",
    description: "Real-time Android messaging application with secure peer-to-peer communication, push notifications, and media sharing powered by Firebase.",
    technologies: ["Android", "Firebase", "Java"],
    gradient: "from-orange-500 to-amber-500",
    accent: "#f97316",
    link: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 50% 80%, var(--primary-color) 0%, transparent 60%)' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-4">
          <span className="section-label">Portfolio</span>
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 mt-4 gap-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary dark:text-d-text-secondary max-w-xs md:text-right">
            Company & personal projects I've designed and built.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-400"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />
              <div className="absolute top-4 right-6 text-[4rem] font-display font-bold leading-none select-none pointer-events-none transition-opacity duration-300"
                style={{ color: project.accent, opacity: 0.07 }}>{project.number}</div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: project.accent }}>{project.tag}</span>
                    <h3 className="text-lg font-display font-bold group-hover:text-gradient transition-all duration-300">{project.title}</h3>
                  </div>
                  <a href={project.link} className="ml-2 p-2 rounded-lg opacity-40 group-hover:opacity-100 transition-all duration-200 hover:bg-primary/10" style={{ color: 'var(--primary-color)' }}>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
                <p className="text-sm text-text-secondary dark:text-d-text-secondary leading-relaxed mb-5 min-h-[3.5rem]">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                      style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30`, color: project.accent }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*           CERTIFICATIONS SECTION           */
/* ─────────────────────────────────────────── */
const certifications = [
  {
    title: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: FaCloud,
    color: "#0078d4",
    description: "Foundational knowledge of cloud services and how Microsoft Azure provides them.",
  },
  {
    title: "Architecting with Google Compute Engine",
    code: "GCP",
    issuer: "Google Cloud",
    icon: FaCloud,
    color: "#4285f4",
    description: "Designing, planning, and prototyping infrastructure solutions on Google Cloud Platform.",
  },
  {
    title: "Cloud Computing",
    code: "NPTEL",
    issuer: "NPTEL",
    icon: FaCertificate,
    color: "#f59e0b",
    description: "Online certification covering core concepts of cloud computing and infrastructure management.",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 20% 70%, var(--secondary-color) 0%, transparent 60%)' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-4">
          <span className="section-label"><FaCertificate /> Certifications</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16 mt-4">
          Licenses & <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl transition-all duration-300 hover:shadow-card"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${cert.color}18`, color: cert.color }}>
                <cert.icon />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block" style={{ color: cert.color }}>{cert.issuer} · {cert.code}</span>
              <h3 className="font-display font-bold text-base text-text-primary dark:text-d-text-primary mb-2">{cert.title}</h3>
              <p className="text-xs text-text-secondary dark:text-d-text-secondary leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*            EDUCATION SECTION               */
/* ─────────────────────────────────────────── */
const education = [
  {
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Srinivas Institute of Technology",
    location: "Mangalore",
    year: "Aug 2023",
    icon: "🎓",
  },
  {
    degree: "Pre-University College (Science)",
    institution: "St. Aloysius PU College",
    location: "Mangalore",
    year: "Apr 2019",
    icon: "🏫",
  },
  {
    degree: "SSLC (Secondary School)",
    institution: "St. Aloysius High School",
    location: "Mangalore",
    year: "Mar 2017",
    icon: "🏫",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 relative">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, var(--primary-color) 0%, transparent 60%)' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-4">
          <span className="section-label"><FaGraduationCap /> Education</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16 mt-4">
          Academic <span className="text-gradient">Background</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          {education.map((edu, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-card"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="text-3xl shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
                style={{ background: 'var(--section-divider)' }}>
                {edu.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display font-bold text-text-primary dark:text-d-text-primary">{edu.degree}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-lg shrink-0"
                    style={{ background: 'var(--section-divider)', color: 'var(--primary-color)' }}>{edu.year}</span>
                </div>
                <p className="text-sm text-text-secondary dark:text-d-text-secondary mt-1 flex items-center gap-1.5">
                  <FaBuilding className="text-[10px] shrink-0" /> {edu.institution}
                  <span className="opacity-40">·</span>
                  <FaMapMarkerAlt className="text-[10px] shrink-0" /> {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*              CONTACT SECTION               */
/* ─────────────────────────────────────────── */
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const email = "vdeekshithkumar@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="mesh-blob-1 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
          <span className="section-label mb-6 inline-flex">Let's Connect</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-6 mb-6">
            Have an idea? <br />
            <span className="text-gradient">Let's build it together.</span>
          </h2>
          <p className="text-text-secondary dark:text-d-text-secondary text-lg mb-10 leading-relaxed">
            Whether you have a project in mind, want to discuss modernizing your tech stack, or just want to say hi — my inbox is always open.
          </p>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-border p-8 md:p-10 shadow-card-hover">
            <div className="flex items-center justify-between gap-4 p-4 rounded-xl mb-5" style={{ background: 'var(--section-divider)' }}>
              <div className="flex items-center gap-3 text-sm md:text-base font-medium text-text-primary dark:text-d-text-primary overflow-hidden">
                <FaEnvelope className="text-primary shrink-0" />
                <span className="truncate">{email}</span>
              </div>
              <button onClick={handleCopy} className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-primary/10 text-primary">
                {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <a href={`mailto:${email}`}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-xl shimmer transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,62,244,0.4)] hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}>
              <FaEnvelope /> Say Hello
            </a>
            <div className="flex justify-center items-center gap-5 mt-8 pt-6" style={{ borderTop: '1px solid var(--section-divider)' }}>
              <a href="https://github.com/deekshithkumarv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-d-text-secondary hover:text-primary dark:hover:text-primary transition-colors">
                <FaGithub className="text-lg" /> GitHub
              </a>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
              <a href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-d-text-secondary hover:text-primary dark:hover:text-primary transition-colors">
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*                PAGE EXPORT                 */
/* ─────────────────────────────────────────── */
export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

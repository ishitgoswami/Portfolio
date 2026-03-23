/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Github,
  Linkedin,
  FileText,
  Mail,
  ExternalLink,
  Code2,
  BrainCircuit,
  Database,
  Terminal,
  Cpu,
  ChevronRight,
  Award,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Send,
  Trophy,
  Phone,
  Smartphone
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Academics', href: '#academics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-base/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          Portfolio
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-accent-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://docs.google.com/document/d/1lB9KP3V6I9wdiNQc6JuTzYClbQ1n2wMZ/edit?usp=sharing&ouid=101907708419078242550&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 glass-card hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-base border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const roles = ["Mobile App Developer", "AI/ML Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-4 block">
            Kotlin on the frontend. ML under the hood.
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
            Ishit <span className="text-gradient">Goswami</span>
          </h1>
          <div className="h-12 mb-8">
            <p className="text-xl md:text-3xl font-mono text-white/70">
              {displayText}<span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-white/60 mb-10 text-lg leading-relaxed">
            Computer Science Engineering student at Lovely Professional University, passionate about building impactful software through Full Stack Development, Mobile Applications, and AI/ML technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 rounded-full font-bold transition-all neon-glow flex items-center gap-2 group"
            >
              View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-card hover:bg-white/10 rounded-full font-bold transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card p-4 relative z-10 overflow-hidden group cursor-pointer">
              <img
                src="https://i.ibb.co/S4FV3Ttv/IMG20251117131431.jpg"
                alt="Ishit Goswami"
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-primary/30 rounded-2xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-secondary/30 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              About <span className="text-accent-primary">Me</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Computer Science Engineering student with a strong interest in <span className="text-white font-medium">Full Stack Development</span>, <span className="text-white font-medium">Mobile App Development</span>, and <span className="text-white font-medium">AI/ML</span>. I enjoy building innovative solutions and approaching problems with both analytical and creative thinking.
              </p>
              <p>
                With a strong foundation in <span className="text-white font-medium">Data Structures and Algorithms</span> and <span className="text-white font-medium">Object-Oriented Programming</span>, I approach every challenge with a structured and logical mindset. Whether it's building AI-powered applications, developing cross-platform mobile apps, or crafting full-stack solutions, I strive for efficiency and impact.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4">
                  <h4 className="text-accent-cyan font-bold mb-1">Proactive Communicator</h4>
                  <p className="text-sm">Clear, effective communication across teams.</p>
                </div>
                <div className="glass-card p-4">
                  <h4 className="text-accent-secondary font-bold mb-1">Innovative Thinker</h4>
                  <p className="text-sm">Creative problem-solving with fresh perspectives.</p>
                </div>
                <div className="glass-card p-4">
                  <h4 className="text-accent-secondary font-bold mb-1">Curious Learner</h4>
                  <p className="text-sm">Always exploring new technologies and concepts.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="text-accent-primary" />,
      skills: ["C++", "Java", "JavaScript", "C", "Python", "HTML", "CSS", "SQL", "Kotlin", "Dart"]
    },
    {
      title: "Frameworks",
      icon: <Cpu className="text-accent-secondary" />,
      skills: ["Pandas", "Scikit-Learn", "Flutter", "Figma", "Jetpack Compose"]
    },
    {
      title: "Tools",
      icon: <Database className="text-accent-cyan" />,
      skills: ["Excel", "Tableau", "PowerPoint", "MySQL", "Android Studio", "Postman"]
    },
    {
      title: "Core Concepts",
      icon: <BrainCircuit className="text-white" />,
      skills: ["DSA", "OOP", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical <span className="text-accent-secondary">Arsenal</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">A comprehensive overview of the technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 hover:border-white/20 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60">
                    {skill}
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Canteen",
      tagline: "Cross-Platform Food Ordering App",
      description: "A cross-platform food-ordering application using Flutter and Dart, featuring menu browsing, specials, cart management, and checkout flow.",
      tech: ["Flutter", "Dart", "ChangeNotifier", "Navigator API", "ListView", "State Management"],
      details: [
        "Built a cross-platform food-ordering application using Flutter and Dart, featuring menu browsing, specials, cart management, and checkout flow.",
        "Implemented modular architecture with models, providers, and screens for clean state management and scalable app structure.",
        "Developed responsive UI components such as MenuTile, HomeScreen, and CartScreen with smooth navigation and real-time cart updates.",
        "Utilized ChangeNotifier for efficient state updates and ListView rendering for dynamic data display."
      ],
      image: "https://i.ibb.co/s9XkxLbW/flutter.png",
      color: "accent-primary",
      date: "Jul 2025",
      github: "#"
    },
    {
      title: "Process Sync Analyzer",
      tagline: "Real-Time Process Synchronization Tool",
      description: "A real-time process monitoring and synchronization tool using Python, Tkinter, and Psutil with CPU-based prioritization and deadlock detection.",
      tech: ["Python", "Tkinter", "Psutil", "Queue Module", "Matplotlib", "Threading"],
      details: [
        "Developed a real-time process monitoring and synchronization tool using Python, Tkinter, and Psutil.",
        "Implemented CPU-based process prioritization, deadlock detection, and queue-based execution visualization.",
        "Improved dashboard performance through efficient data handling, threading, and optimized UI updates.",
        "Delivered a responsive and interactive interface with graphical insights using Matplotlib."
      ],
      image: "https://i.ibb.co/N2y8XrC5/images-1.jpg",
      color: "accent-secondary",
      date: "Nov 2024",
      github: "https://github.com/Mannat-jain/Process-Synchronization-Analyzer"
    },
    {
      title: "Mindwell",
      tagline: "AI Mental Wellness App",
      description: "An AI-powered mental wellness application with chat-based mood assessment and gamified engagement.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Gemini-2.5-flash"],
      details: [
        "Developed an AI-powered mental wellness application with chat-based mood assessment and gamified engagement.",
        "Implemented Gemini 2.5 Flash to simulate psychiatrist-style conversations that infer user mood with 92% accuracy.",
        "Enhanced user retention by 40% through cognitive mini-games, interactive UI, and daily mood streak rewards."
      ],
      image: "https://i.ibb.co/wFYfy6Dq/Screenshot-2026-03-23-222341.png",
      color: "accent-cyan",
      date: "Mar 2023",
      github: "https://github.com/patelhashilkumar/mentalhealth"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-accent-primary">Projects</span></h2>
            <p className="text-white/50 max-w-xl">Showcasing my technical depth through real-world applications.</p>
          </div>
          <a href="https://github.com/ishitgoswami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono hover:text-accent-primary transition-colors">
            VIEW ALL ON GITHUB <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === i ? null : i)}
            >
              <div className="glass-card overflow-hidden h-full flex flex-col hover:border-white/20 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-mono text-white/70">
                    {project.date}
                  </div>
                </div>

                <div className="p-8 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 border border-white/10 rounded uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-accent-cyan text-sm font-medium mb-4">{project.tagline}</p>
                  <p className="text-white/60 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-bold hover:text-accent-primary transition-colors">
                      <Github size={18} /> Code
                    </a>
                    <span className="text-xs text-white/40 font-mono ml-auto">Click for details →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-accent-primary/20 rounded-full text-xs font-mono text-accent-primary">
                    {projects[selectedProject].date}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-2">{projects[selectedProject].title}</h3>
                <p className="text-accent-cyan font-medium mb-6">{projects[selectedProject].tagline}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[selectedProject].tech.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Detailed Bullet Points */}
                <div className="space-y-4 mb-8">
                  {projects[selectedProject].details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="mt-2 w-1.5 h-1.5 bg-accent-primary rounded-full shrink-0" />
                      <p className="text-white/70 text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-primary/90 rounded-full font-bold text-sm transition-all"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 glass-card hover:bg-white/10 rounded-full font-bold text-sm transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Training = () => {
  return (
    <section id="training" className="py-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Professional <span className="text-accent-secondary">Training</span></h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-accent-primary rounded-full neon-glow" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold">Mobile Application Development using Flutter</h3>
              <span className="text-sm font-mono text-accent-cyan">Jul 2025</span>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Developed cross-platform mobile apps using Flutter and Dart with clean UI layouts and widgets.</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Implemented navigation, stateful widgets, and basic state management for interactive app flows.</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Worked with API integration, JSON data handling, and asynchronous programming.</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Applied debugging and best practices to improve app performance and code quality.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Computer Communications",
      org: "Coursera",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1RcaTQo0YHPcfvcOSGC4aJn6PGoFBnwYh/view",
      icon: BrainCircuit,
      textColor: "text-accent-primary"
    },
    {
      title: "Ethical Hacking",
      org: "Rising Tech Pro",
      date: "Mar 2024",
      link: "https://drive.google.com/file/d/174P_KvQoIEaRnrQ7a-LJ-bhJbPkzi7Zp/view?usp=sharing",
      icon: Terminal,
      textColor: "text-accent-secondary"
    },
    {
      title: "Foundations of Cybersecurity",
      org: "Coursera",
      date: "Oct 2023",
      link: "https://drive.google.com/file/d/1sIaoXPfinf55M7emOgTkmzAPqS1eVaRE/view?usp=sharing",
      icon: Cpu,
      textColor: "text-accent-cyan"
    },
    {
      title: "AWS S3 Basics",
      org: "Coursera",
      date: "Sep 2023",
      link: "https://drive.google.com/file/d/1MNRRr4eTVHvNS6aKt6PKcGZUUtPPjc1i/view?usp=sharing",
      icon: Database,
      textColor: "text-accent-primary"
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Certifications & <span className="text-accent-primary">Credentials</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Industry-recognized certifications validating my expertise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-white/20 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <cert.icon size={80} />
              </div>

              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <cert.icon size={28} className={cert.textColor} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className={`${cert.textColor} text-sm font-medium mb-1`}>{cert.org}</p>
                <p className="text-xs text-white/40 font-mono mb-6">Completed: {cert.date}</p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium transition-all group/link"
                >
                  <Award size={16} className={cert.textColor} />
                  Certificate
                  <ExternalLink size={14} className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "1st Position in Battle of Bands",
      event: "UTKANSH'25 | NIT Jalandhar",
      date: "Apr 2025",
      color: "text-yellow-400"
    },
    {
      title: "3rd Position in Symphonic Assault",
      event: "UNIFEST'25 | Galgotias University",
      date: "Mar 2025",
      color: "text-amber-600"
    },
    {
      title: "2nd Position in Clash of Bands",
      event: "IGNUS'25 | IIT Jodhpur",
      date: "Feb 2025",
      color: "text-gray-300"
    },
    {
      title: "2nd Position in Battle of Bands",
      event: "MAGNITUDE'23 | Lovely Professional University",
      date: "Nov 2023",
      color: "text-gray-300"
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
          <span className="text-accent-primary">Achievements</span>
        </h2>

        <div className="space-y-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href="https://drive.google.com/drive/folders/1nJ1GReNe-aV8JUvwQi3z-eGrVy0hZeUk?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-6 hover:border-white/20 transition-all group block"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  <Trophy size={28} className={ach.color} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-1">{ach.title}</h3>
                  <p className="text-white/60 text-sm">{ach.event}</p>
                </div>
                <span className="text-xs font-mono text-white/40 hidden sm:block">{ach.date}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="academics" className="py-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Academic <span className="text-accent-cyan">Foundation</span></h2>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GraduationCap size={120} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold">B.Tech in Computer Science Engineering</h3>
                <p className="text-accent-primary font-medium">Lovely Professional University</p>
              </div>
              <div className="text-right">
                <span className="px-4 py-1 bg-accent-primary/20 rounded-full text-sm font-bold text-accent-primary">CGPA: 8.02</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Location</h5>
                <p className="text-sm font-medium">Punjab, India</p>
              </div>
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Duration</h5>
                <p className="text-sm font-medium">Aug 2023 – May 2027</p>
              </div>
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Status</h5>
                <p className="text-sm font-medium">Pursuing</p>
              </div>
            </div>
          </div>
        </div>


        <div className="glass-card p-8 md:p-12 relative overflow-hidden mt-6">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold">Intermediate (PCM)</h3>
                <p className="text-accent-primary font-medium">Delhi Public School, Jankipuram</p>
              </div>
              <div className="text-right">
                <span className="px-4 py-1 bg-accent-primary/20 rounded-full text-sm font-bold text-accent-primary">Percentage: 75.6%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Location</h5>
                <p className="text-sm font-medium">Lucknow, Uttar Pradesh</p>
              </div>
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Duration</h5>
                <p className="text-sm font-medium">Apr 2022 – Mar 2023</p>
              </div>
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Status</h5>
                <p className="text-sm font-medium">Completed</p>
              </div>
            </div>
          </div>
        </div>


        <div className="glass-card p-8 md:p-12 relative overflow-hidden mt-6">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold">Matriculation</h3>
                <p className="text-accent-primary font-medium">Delhi Public School, Jankipuram</p>
              </div>
              <div className="text-right">
                <span className="px-4 py-1 bg-accent-primary/20 rounded-full text-sm font-bold text-accent-primary">Percentage: 94.4%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Location</h5>
                <p className="text-sm font-medium">Lucknow, Uttar Pradesh</p>
              </div>
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Duration</h5>
                <p className="text-sm font-medium">Apr 2020 – Mar 2021</p>
              </div>
              <div>
                <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Status</h5>
                <p className="text-sm font-medium">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (value: string): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(value.trim()) && value.trim().length >= 2;
  };

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[A-Za-z0-9]+([._][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    return emailRegex.test(value.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Enter valid Name";
    } else if (!validateName(name)) {
      newErrors.name = "Enter valid Name";
    }

    if (!email.trim()) {
      newErrors.email = "Enter valid E-mail";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter valid E-mail";
    }

    if (!message.trim()) {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_ACCESS_KEY_HERE",
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject: `Portfolio Contact from ${name.trim()}`,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setShowSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setShowSuccess(false), 5000);
        } else {
          setErrors({ message: "Failed to send. Please try again." });
        }
      } catch {
        setErrors({ message: "Network error. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">
              Let's build something <span className="text-gradient">impactful</span> together.
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              I'm always open to discussing innovative projects, development opportunities, or collaboration ideas.
            </p>

            <div className="space-y-6">
              <a href="mailto:13ishitgoswami@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">Email</h5>
                  <p className="font-medium">13ishitgoswami@gmail.com</p>
                </div>
              </a>
              <a href="tel:+918840358375" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">Mobile</h5>
                  <p className="font-medium">+91-8840358375</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ishitgoswami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">LinkedIn</h5>
                  <p className="font-medium">linkedin.com/in/ishitgoswami</p>
                </div>
              </a>
              <a href="https://github.com/ishitgoswami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">GitHub</h5>
                  <p className="font-medium">github.com/ishitgoswami</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase ml-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors`}
                    placeholder="John Doe"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-400 text-xs font-medium flex items-center gap-1 ml-1"
                      >
                        ⚠ {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase ml-1">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })); }}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors`}
                    placeholder="john@example.com"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-400 text-xs font-medium flex items-center gap-1 ml-1"
                      >
                        ⚠ {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase ml-1">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: undefined })); }}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-400 text-xs font-medium flex items-center gap-1 ml-1"
                    >
                      ⚠ {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-accent-primary hover:bg-accent-primary/90 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            {/* Success Toast */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center"
                >
                  <p className="text-green-400 font-medium text-sm">✓ Message sent successfully!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Ishit Goswami. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="https://github.com/ishitgoswami" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/ishitgoswami" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

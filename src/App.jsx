import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun, Moon, Code2, Cpu, Palette, Brain, ChevronRight,
  Award, Laptop, CheckCircle2, Sparkles, Smartphone, ArrowRight, ExternalLink, Menu, X
} from 'lucide-react';
import WebGLBackground from './components/WebGLBackground';
import CLIConsole from './components/CLIConsole';
import ProjectCard from './components/ProjectCard';
import ProjectDrawer from './components/ProjectDrawer';
import ContactForm from './components/ContactForm';
import { projects } from './data/projectsData';
import './App.css';

const matrixData = {
  "Frontend": {
    filename: "frontend_skills.json",
    json: {
      "lenguajes": ["JavaScript", "TypeScript", "HTML5", "CSS3"],
      "frameworks": ["React 19", "Next.js", "Astro", "Tailwind CSS v4"],
      "optimizacion": ["Reducción de Context Window", "Vite", "Responsive Design"],
      "animaciones": ["Framer Motion", "WebGL", "Microinteracciones UI"]
    },
    progress: [
      { name: "Desarrollo de Componentes y Lógica React", percent: "95%", style: "bg-gradient-to-r from-primary to-accent-secondary" },
      { name: "Integración de APIs y Backend", percent: "90%", style: "bg-gradient-to-r from-secondary to-primary" },
      { name: "Desarrollo Ágil & Prompt Engineering", percent: "100%", style: "bg-gradient-to-r from-accent to-secondary" }
    ]
  },
  "Backend": {
    filename: "backend_skills.json",
    json: {
      "plataformas": ["Firebase (Store, CLI)", "Supabase Relational", "Node.js"],
      "arquitectura": ["Microservicios", "Integración de SDKs (Didit)"],
      "lenguajes": ["Go (Golang)", "PHP (WordPress Plugins)"],
      "despliegue": ["CLI Deployments", "Vercel", "Netlify"]
    },
    progress: [
      { name: "Despliegue y Configuración Backend/BaaS", percent: "90%", style: "bg-gradient-to-r from-secondary to-primary" },
      { name: "Arquitectura de Datos y APIs", percent: "85%", style: "bg-gradient-to-r from-primary to-accent" },
      { name: "Arquitectura de Microservicios", percent: "80%", style: "bg-gradient-to-r from-accent to-secondary" },
      { name: "Creación de Plugins Nativos (PHP/WP)", percent: "85%", style: "bg-gradient-to-r from-primary to-accent-secondary" }
    ]
  },
  "AI & Auto": {
    filename: "ai_orchestration.json",
    json: {
      "modelos": ["Gemini", "Claude", "ChatGPT", "DeepSeek", "Llama (OpenWebUI)", "Codex", "Qwen"],
      "orquestacion": ["MCP (Model Context Protocol)", "Graphify (Nodos + Grafo)", "CherryStudio", "APIs IA"],
      "automatizacion": ["Prompt Engineering Múltiple", "Generación de Código Autónomo"],
      "herramientas": ["Google Stitch", "Diseño en Canva", "Antigravity Agent Manager", "Antigravity IDE", "KiloCode", "CLAUDE Code", "DeepSeek IDE"]
    },
    progress: [
      { name: "Orquestación de Agentes Locales y Cloud", percent: "98%", style: "bg-gradient-to-r from-accent-secondary to-primary" },
      { name: "Estrategias de Reducción de Tokens", percent: "90%", style: "bg-gradient-to-r from-secondary to-primary" },
      { name: "Generación de Sistemas Asistida por IA", percent: "95%", style: "bg-gradient-to-r from-accent to-secondary" }
    ]
  },
  "Cyber & Sys": {
    filename: "linux_security.json",
    json: {
      "sistemas": ["Debian", "Kali Linux (VBox), windowns 7 - 11 (VMs)"],
      "hacking_etico": ["Pentesting Básico", "Escaneo y Enumeración", "Explotación (msptb2)"],
      "terminal": ["Uso de CLI (Netlify, Firebase, Antigravity, Claude Code, Cherry Studio, Open Claw)"],
      "seguridad": ["Autenticación KYC", "Validación Biométrica (Webcam API)"]
    },
    progress: [
      { name: "Gestión de Entornos Linux y CLI", percent: "95%", style: "bg-gradient-to-r from-accent to-secondary" },
      { name: "Seguridad y Pentesting", percent: "75%", style: "bg-gradient-to-r from-primary to-accent-secondary" },
      { name: "Desarrollo Seguro y Validaciones Locales", percent: "88%", style: "bg-gradient-to-r from-secondary to-primary" }
    ]
  }
};

export function App() {
  const [filter, setFilter] = useState("Destacados");
  const [activeProject, setActiveProject] = useState(null);
  const [selectedMatrix, setSelectedMatrix] = useState("Frontend");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = filter === "Destacados"
    ? projects.filter(p => p.featured).slice(0, 6)
    : filter === "Todos"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <div className="app-wrapper relative bg-transparent text-[var(--text)] transition-colors duration-300 font-sans min-h-screen">
      {/* High-Performance WebGL Fluid Wave Background (from Stitch) */}
      <WebGLBackground theme="dark" />

      {/* Global Background Blobs */}
      <div className="bg-container pointer-events-none" aria-hidden="true">
        <div className="aurora-layer"></div>
      </div>

      {/* Translucent Global Navbar (from Stitch) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`navbar fixed top-0 w-full z-40 glass py-4 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center relative z-[60]"
          >
            <a href="#inicio">
              <img src="/crisman.webp" alt="Logo CrisMan" className="h-10 md:h-11 w-auto object-contain transition-all" />
            </a>
          </motion.div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              {[['Proyectos', 'proyectos'], ['Especialidades', 'stack'], ['Terminal', 'terminal'], ['Contacto', 'contacto']].map(([label, hrefId]) => (
                <a
                  key={hrefId}
                  href={`#${hrefId}`}
                  className="text-xs font-semibold uppercase tracking-wider dark:text-gray-300 dark:hover:text-primary text-slate-700 hover:text-primary transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="#contacto"
              className="hidden md:inline-block px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-[#23005c] rounded-lg font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Iniciar Proyecto
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[60] text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu - Placed OUTSIDE nav to fix transform z-index trapping */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-8"
          >
            {/* Header inside mobile menu */}
            <div className="absolute top-0 left-0 w-full py-4 flex justify-between items-center px-6">
              <img src="/crisman.webp" alt="Logo CrisMan" className="h-10 md:h-11 w-auto object-contain" />
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {[['Proyectos', 'proyectos'], ['Especialidades', 'stack'], ['Terminal', 'terminal'], ['Contacto', 'contacto']].map(([label, hrefId], index) => (
              <motion.a
                key={hrefId}
                href={`#${hrefId}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold uppercase tracking-widest text-gray-300 hover:text-primary transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-[#23005c] rounded-lg font-bold text-sm uppercase tracking-wider"
            >
              Iniciar Proyecto
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Background Splash - Placed outside container to prevent clipping */}
      <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-20"></div>
      </div>

      {/* Main Layout Container */}
      <main className="container mx-auto px-6 pt-0 relative z-10">

        {/* HERO SECTION - Premium Minimalist */}
        <section id="inicio" className="min-h-[90vh] flex items-center pt-24 pb-12 relative overflow-visible">

          <div className="max-w-7xl mx-auto relative z-10 w-full px-6 -translate-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Column - Text */}
              <div className="text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6 font-display text-white"
                >
                  Code. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white" style={{ animation: 'animateShine 6s linear infinite', backgroundSize: '200% auto' }}>Design.</span> <br />
                  Ship.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-sans font-light"
                >
                  Desarrollador de Software y Orquestador de IA. Me especializo en fusionar el desarrollo web moderno con agentes de Inteligencia Artificial locales y en la nube. Desarrollo soluciones optimizadas, transformando flujos tradicionales en sistemas inteligentes y autónomos.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-5 items-start"
                >
                  <a
                    href="#proyectos"
                    className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all flex items-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Ver Proyectos</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a
                    href="#contacto"
                    className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/5 hover:border-white/40 transition-all"
                  >
                    Contacto
                  </a>
                </motion.div>
              </div>

              {/* Right Column - Terminal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full mt-12 lg:mt-0 lg:translate-x-4 lg:scale-105"
              >
                <div className="w-full relative group">
                  {/* Glowing animated backdrop (constrained height to only cover terminal, not buttons) */}
                  <div className="absolute top-0 left-0 right-0 h-[340px] bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-15 pointer-events-none"></div>

                  {/* Terminal Component (background is handled internally by .terminal-window) */}
                  <div className="relative z-10">
                    <CLIConsole />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FEATURED WORK / PROJECTS SECTION (from Stitch) */}
        <section id="proyectos" className="py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="text-left">
                <h2 className="text-4xl font-extrabold mb-4 font-display text-slate-900 dark:text-white">Sistemas de Alto Impacto</h2>
                <p className="text-sm text-slate-600 dark:text-gray-400 max-w-xl">Una selección rigurosa de arquitecturas de software robustas y plataformas de e-commerce diseñadas para capturar atención y optimizar ventas.</p>
              </div>

              {/* Category Filter Pills (from Stitch) */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" role="tablist" aria-label="Categorías de proyectos">
                {["Destacados", "Todos", "E-Commerce", "Herramientas", "Landings"].map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={filter === cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg text-xs font-mono font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${filter === cat
                      ? "text-violet-600 dark:text-primary border-violet-500 dark:border-primary bg-black/60"
                      : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-primary bg-black/40"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Standard Grid for linear harmonic layout */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    onClick={() => setActiveProject(p)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* TECHNICAL MATRIX SECTION */}
        <section id="stack" className="py-24 relative">
          <div className="max-w-7xl mx-auto">

            {/* Top 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  id: "Frontend",
                  icon: <Code2 className="w-6 h-6" />,
                  title: "Frontend & Diseño",
                  desc: "React 19, Tailwind CSS y Astro. Integración de Canvas, Stich y diversas herramientas de diseño a código, creando interfaces adaptables, accesibles y con microinteracciones de alto rendimiento."
                },
                {
                  id: "Backend",
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Backend & Bases de Datos",
                  desc: "Manejo nativo de Firebase, Supabase y Node.js. Creación de plugins PHP para WooCommerce y experiencia trabajando con arquitecturas de microservicios en Go."
                },
                {
                  id: "AI & Auto",
                  icon: <Brain className="w-6 h-6" />,
                  title: "AI Orchestration",
                  desc: "Orquestación de agentes IA (Gemini, Claude, locales), uso de MCPs, APIs, RAG y herramientas como Graphify, entre otras, para optimizar contextos. Estrategias avanzadas de Prompt Engineering, Automatización de Tareas."
                },
                {
                  id: "Cyber & Sys",
                  icon: <Laptop className="w-6 h-6" />,
                  title: "Sistemas & Seguridad",
                  desc: "Enfoque en pentesting básico, integraciones biométricas de asistencia y control básico del desarrollo mediante terminal (CLI) usando entornos Debian y Kali Linux."
                }
              ].map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedMatrix(card.id)}
                  className={`glass-card p-6 cursor-pointer transition-all duration-300 flex flex-col relative ${selectedMatrix === card.id
                    ? "border-primary bg-white/5 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                    : "border-white/5 hover:border-white/20 hover:bg-white/5"
                    }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={selectedMatrix === card.id ? "text-primary" : "text-white"}>
                      {card.icon}
                    </div>
                    {selectedMatrix === card.id && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{card.title}</h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Section: Terminal & Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">

              {/* Terminal */}
              <div className="terminal-window w-full">
                <div className="terminal-header flex items-center px-4 py-3 bg-[#131315] border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="mx-auto text-xs text-gray-500 font-mono tracking-wider">
                    architect@pro:~/{selectedMatrix.toLowerCase().replace(/ & /g, '-').replace(/\//g, '-')}
                  </div>
                </div>
                <div className="terminal-body bg-[#0a0a0c] p-6 font-mono text-sm h-full min-h-[300px]">
                  <div className="text-gray-400 mb-4">
                    <span className="text-primary mr-2">~</span>
                    <span className="text-white">cat {matrixData[selectedMatrix].filename}</span>
                  </div>
                  <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed text-[13px]">
                    {JSON.stringify(matrixData[selectedMatrix].json, null, 2)}
                  </pre>
                  <div className="mt-4 text-gray-400 flex items-center">
                    <span className="text-primary mr-2">~</span>
                    <span className="w-2 h-4 bg-primary animate-pulse inline-block"></span>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="flex flex-col justify-center gap-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMatrix}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-10"
                  >
                    {matrixData[selectedMatrix].progress.map((bar, idx) => (
                      <div key={idx} className="w-full">
                        <div className="flex justify-between items-end mb-3">
                          <span className="text-sm font-mono text-gray-200 tracking-wide">{bar.name}</span>
                          <span className="text-sm font-mono text-white font-bold">{bar.percent}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: bar.percent }}
                            transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                            className={`h-full ${bar.style || 'bg-primary'} rounded-full`}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>



        {/* CONTACT SECTION (from Stitch) */}
        <section id="contacto" className="py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 font-display text-slate-900 dark:text-white">Diseñemos tu Siguiente Gran Sistema</h2>
            <p className="text-sm text-slate-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">¿Listo para consolidar tu presencia web con una infraestructura de alta gama? Escríbeme ahora y analicemos tu proyecto.</p>
            <ContactForm />
          </div>
        </section>

      </main>

      {/* Global Footer (from Stitch) */}
      <footer className="w-full relative border-t border-[var(--nav-border)] bg-[var(--nav-bg)] flex flex-col items-center justify-center py-16 px-6 space-y-6 z-10 text-center">
        <div className="flex items-center justify-center mb-7">
          <img src="/crisman.webp" alt="Logo CrisMan" className="h-16 md:h-16 w-auto object-contain transition-all" />
        </div>
        <div className="flex gap-6 mb-2">
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="https://www.linkedin.com/in/crismandev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="https://github.com/Crismandev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="/assets/pdf/CV_Cristhian_Mantilla_05_02.pdf" download>Currículum</a>
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="#">Privacidad</a>
        </div>
        <p className="text-xs text-slate-500 dark:text-gray-300 max-w-md">
          &copy; 2026 Portafolio de Arquitectura Web. Desarrollado en colaboracion con mi Agente Diseñador de interfaces <strong>Antigravity</strong> y Arquitecto de IA <strong>Cristhian Mantilla.</strong>
        </p>
      </footer>

      {/* Slide-out Drawer Panel */}
      <ProjectDrawer
        activeProject={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
export default App;

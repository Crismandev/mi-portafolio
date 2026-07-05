import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Code2, Cpu, Palette, Brain, ChevronRight, 
  Award, Laptop, CheckCircle2, Sparkles, Smartphone, ArrowRight, ExternalLink
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
      "frameworks": ["React 19", "Next.js 15", "Astro", "Vue 3"],
      "maquetacion": ["Tailwind CSS v4", "CSS Modules", "Sass"],
      "animaciones": ["Framer Motion", "WebGL Shaders", "GSAP"]
    },
    progress: [
      { name: "Desarrollo de Componentes y Lógica", percent: "95%", style: "bg-gradient-to-r from-primary to-accent-secondary" },
      { name: "Gestión de Estado Reactivo", percent: "90%", style: "bg-gradient-to-r from-secondary to-primary" },
      { name: "Rendimiento y Shaders WebGL", percent: "85%", style: "bg-gradient-to-r from-accent to-secondary" }
    ]
  },
  "Backend": {
    filename: "backend_skills.json",
    json: {
      "lenguajes": ["Go (Golang)", "TypeScript", "Node.js", "Python"],
      "apis": ["APIs RESTful", "GraphQL", "WebSockets"],
      "seguridad": ["Validación HMAC", "Autenticación JWT", "Políticas CORS"],
      "bases_datos": ["PostgreSQL", "Supabase Relational", "Firebase Store", "Caché Redis"]
    },
    progress: [
      { name: "APIs de Alta Velocidad y Concurrencia", percent: "90%", style: "bg-gradient-to-r from-secondary to-primary" },
      { name: "Optimización de Consultas SQL", percent: "85%", style: "bg-gradient-to-r from-accent to-secondary" },
      { name: "Seguridad y Protocolos Criptográficos", percent: "92%", style: "bg-gradient-to-r from-primary to-accent-secondary" }
    ]
  },
  "UX/UI": {
    filename: "design_system.json",
    json: {
      "herramientas_diseno": ["Figma", "Adobe Illustrator", "Canva Pro"],
      "metodologias": ["User Research", "Wireframing", "Prototipado de Componentes"],
      "estetica_ui": ["Glassmorphism", "Harmonía de Color Oscuro", "Bento Grid Layouts"],
      "accesibilidad": ["Ratios de Contraste WCAG", "Etiquetas para Lectores", "Navegación por Teclado"]
    },
    progress: [
      { name: "Prototipado en Figma de Alta Fidelidad", percent: "95%", style: "bg-gradient-to-r from-accent to-secondary" },
      { name: "Consistencia del Sistema de Diseño", percent: "88%", style: "bg-gradient-to-r from-primary to-accent-secondary" },
      { name: "Microinteracciones y Animación UX", percent: "92%", style: "bg-gradient-to-r from-secondary to-primary" }
    ]
  },
  "AI & Auto": {
    filename: "automation.json",
    json: {
      "integracion_llm": ["API Gemini 1.5 Pro", "Claude 3.5 Sonnet", "OpenAI GPT-4o"],
      "flujos_trabajo": ["Automatizaciones en n8n", "Integraciones con Make", "Orquestadores de Agentes"],
      "ci_cd_devops": ["GitHub Actions", "Netlify Deployment", "Vercel Analytics"],
      "pruebas_calidad": ["Vitest unit tests", "Auditoría de Código ESLint", "Evaluación Lighthouse"]
    },
    progress: [
      { name: "Orquestación de Agentes y Prompts", percent: "85%", style: "bg-gradient-to-r from-accent-secondary to-primary" },
      { name: "Flujos y Automatizaciones (n8n)", percent: "90%", style: "bg-gradient-to-r from-secondary to-primary" },
      { name: "Pipelines CI/CD y Puertas de Calidad", percent: "80%", style: "bg-gradient-to-r from-accent to-secondary" }
    ]
  }
};

export function App() {
  const [filter, setFilter] = useState("Todos");
  const [activeProject, setActiveProject] = useState(null);
  const [selectedMatrix, setSelectedMatrix] = useState("Frontend");

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const filteredProjects = filter === "Todos" 
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
      <nav className="navbar fixed top-0 w-full z-50 glass py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src="/crisman.webp" alt="Logo CrisMan" className="h-10 md:h-11 w-auto object-contain transition-all" />
          </motion.div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              {[['Inicio', 'inicio'], ['Proyectos', 'proyectos'], ['Especialidades', 'stack'], ['Consola CLI', 'terminal'], ['Contacto', 'contacto']].map(([label, hrefId]) => (
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
          </div>
        </div>
      </nav>

      {/* Main Layout Container */}
      <main className="container mx-auto px-6 pt-20 relative z-10">
        
        {/* HERO SECTION (from Stitch) */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center pt-24 pb-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 font-display text-slate-900 dark:text-white">
              Ingeniería Web de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Alto Rendimiento y Conversión</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Diseño y desarrollo infraestructuras web concurrentes y algoritmos de optimización de datos en tiempo real. Traduzco requerimientos de negocio complejos en interfaces interactivas premium que eliminan la fricción cognitiva, retienen la atención de tus clientes y disparan tus tasas de conversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#proyectos" 
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-[#23005c] rounded-lg font-bold uppercase text-xs tracking-wider hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Asegurar Mi Crecimiento Digital <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Dashboard (from Stitch) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto mt-8">
            {[
              { count: "40+", label: "Sistemas Desplegados", color: "text-primary animate-pulse" },
              { count: "99%", label: "Rendimiento Lighthouse", color: "text-secondary" },
              { count: "15+", label: "Tecnologías Core", color: "text-accent" },
              { count: "99.9%", label: "Disponibilidad de Red", color: "text-accent-secondary" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="glass-card rounded-xl p-6 text-center border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5"
              >
                <div className={`text-4xl font-extrabold font-display mb-2 ${stat.color}`}>{stat.count}</div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
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
                {["Todos", "E-Commerce", "Herramientas", "Landings"].map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={filter === cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full glass-card text-xs font-mono font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      filter === cat 
                        ? "text-violet-600 dark:text-primary border-violet-500 dark:border-primary" 
                        : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Bento Grid */}
            <motion.div 
              layout 
              className="grid md:grid-cols-12 gap-6"
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

        {/* TECHNICAL MATRIX / SKILLS SECTION (from Stitch) */}
        <section id="stack" className="py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 font-display text-slate-900 dark:text-white">Matriz de Especialidades Técnicas</h2>
              <p className="text-sm text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">Un enfoque disciplinado basado en algoritmos avanzados y diseño sistemático para lograr el máximo retorno de inversión.</p>
            </div>

            {/* Grid of core matrices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: <Code2 className="w-9 h-9 text-primary" aria-hidden="true" />, title: "Frontend", desc: "React 19, Next.js 15, WebGL Shaders & Tailwind v4. Creación de interfaces de usuario interactivas, fluidas y accesibles que reducen el tiempo de latencia visual a cero." },
                { icon: <Cpu className="w-9 h-9 text-secondary" aria-hidden="true" />, title: "Backend", desc: "Arquitecturas concurrentes en Go, Node.js y Python. Conexión de pasarelas de pago, Supabase Realtime y bases de datos PostgreSQL con triggers de inventario automáticos." },
                { icon: <Palette className="w-9 h-9 text-accent" aria-hidden="true" />, title: "UX/UI", desc: "Figma avanzado, modelado de prototipos interactivos y sistemas de diseño unificados. Interfaces enfocadas en la psicología del consumidor y facilidad de uso." },
                { icon: <Brain className="w-9 h-9 text-accent-secondary" aria-hidden="true" />, title: "AI & Auto", desc: "Orquestación de agentes IA autónomos, integraciones con APIs de LLMs y automatización de flujos de trabajo con n8n y Make para eliminar procesos manuales." }
              ].map((matrix, mIdx) => {
                const isActive = selectedMatrix === matrix.title;
                return (
                  <div 
                    key={mIdx} 
                    onClick={() => setSelectedMatrix(matrix.title)}
                    className={`glass-card rounded-xl p-6 border transition-all duration-300 text-left cursor-pointer relative overflow-hidden group/mcard ${
                      isActive 
                        ? "border-primary bg-white/10 dark:bg-white/10 shadow-[0_0_30px_rgba(208,188,255,0.15)] scale-[1.02]" 
                        : "border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 hover:border-primary/50 hover:bg-white/5 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(208,188,255,0.05)]"
                    }`}
                  >
                    {/* Glowing spotlight effect inspired by 21st.dev */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/mcard:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="mb-4 relative z-10">{matrix.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display relative z-10 flex items-center justify-between">
                      {matrix.title}
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(208,188,255,0.8)]" />
                      )}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-sans relative z-10">{matrix.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Code shell + Progress bars section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Code shell JSON display */}
              <div className="glass-card rounded-xl p-6 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] font-mono text-xs text-left shadow-2xl relative overflow-hidden group min-h-[260px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div>
                  <div className="flex gap-2 mb-6 pb-4 border-b border-glass-stroke items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-[var(--text-muted)] text-xs font-mono">architect@pro:~/{selectedMatrix.toLowerCase().replace(/[^a-z]/g, '')}</span>
                  </div>
                  
                  <div className="text-[var(--text-muted)] space-y-2 font-mono">
                    <p className="font-mono"><span className="text-violet-600 dark:text-primary font-bold">~</span> <span className="text-indigo-600 dark:text-secondary">cat</span> {matrixData[selectedMatrix].filename}</p>
                    <p className="text-[var(--text)]">{"{"}</p>
                    {Object.entries(matrixData[selectedMatrix].json).map(([key, val], idx, arr) => (
                      <p key={key} className="pl-4 font-mono">
                        <span className="text-blue-600 dark:text-accent">"{key}"</span>: [
                        {val.map((item, i) => (
                          <span key={item} className="font-mono">
                            <span className="text-indigo-600 dark:text-secondary">"{item}"</span>
                            {i < val.length - 1 ? ", " : ""}
                          </span>
                        ))}
                        ]{idx < arr.length - 1 ? "," : ""}
                      </p>
                    ))}
                    <p className="text-[var(--text)]">{"}"}</p>
                  </div>
                </div>
                <p className="mt-4 flex items-center"><span className="text-violet-600 dark:text-primary font-bold mr-2">~</span> <span className="text-violet-600 dark:text-primary animate-pulse w-2 h-4 bg-primary inline-block"></span></p>
              </div>

              {/* Advanced progress indicators */}
              <div className="space-y-8 text-left">
                {matrixData[selectedMatrix].progress.map((bar, bIdx) => (
                  <div key={bar.name}>
                    <div className="flex justify-between font-mono text-xs mb-2">
                      <span className="text-[var(--text)] font-bold">{bar.name}</span>
                      <span className="text-violet-600 dark:text-primary font-bold">{bar.percent}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: bar.percent }}
                        transition={{ type: "spring", stiffness: 70, damping: 14 }}
                        className={`h-full rounded-full relative ${bar.style}`}
                      >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CONSOLE SECTION (from Stitch) */}
        <section id="terminal" className="py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold mb-4 font-display text-slate-900 dark:text-white">Consola Interactiva</h2>
              <p className="text-sm text-slate-600 dark:text-gray-400">Escribe 'help' en la línea de comandos para explorar el sistema de archivos del perfil en tiempo real.</p>
            </div>
            <CLIConsole />
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
        <div className="flex items-center justify-center mb-2">
          <img src="/crisman.webp" alt="Logo CrisMan" className="h-14 md:h-16 w-auto object-contain transition-all" />
        </div>
        <div className="flex gap-6 mb-4">
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="https://www.linkedin.com/in/crismandev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="https://github.com/Crismandev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="/assets/pdf/CV_Cristhian_Mantilla_05_02.pdf" download>Currículum</a>
          <a className="text-slate-500 dark:text-gray-400 font-mono text-xs hover:text-primary transition-colors uppercase tracking-wider" href="#">Privacidad</a>
        </div>
        <p className="text-xs text-slate-500 dark:text-gray-500 max-w-md">
          &copy; 2026 Portafolio de Arquitectura Web Premium. Diseñado para el Máximo Rendimiento y Conversión.
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

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Instagram, Code2, Globe, Laptop, 
  Smartphone, Cpu, Palette, Sun, Moon, Terminal as TerminalIcon, 
  Sparkles, Folder, ExternalLink, User, Layers, CheckCircle2, 
  ChevronRight, Play, Award, Coffee, Eye, X, BookOpen, Send, Brain
} from 'lucide-react';
import './App.css';

// Extended projects list with detailed case studies
const projects = [
  {
    id: "stickerswap",
    title: "Sticker Swap — FIFA World Cup 2026",
    desc: "PWA premium de emparejamiento inteligente y coordinación en tiempo real para intercambio de figuritas del Mundial.",
    category: "Herramientas",
    tech: ["Next.js 15", "Supabase", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/assets/images/projects/sticker_swap.png",
    link: "https://github.com/Crismandev/sticker-swap",
    featured: true,
    details: "EL PROBLEMA REAL:\nEl intercambio de figuritas del álbum del Mundial de la FIFA tradicionalmente es ineficiente y frustrante. Los coleccionistas asisten a reuniones físicas masivas con listas impresas o escritas a mano, pasando horas intentando comparar manualmente sus listas de faltantes y repetidas con las de decenas de personas. Esto genera una gran pérdida de tiempo, fatiga cognitiva y negociaciones fallidas debido a la falta de un sistema que coordine intercambios recíprocos exactos (donde el usuario A tenga lo que el usuario B necesita, y viceversa) antes de encontrarse.\n\nLA SOLUCIÓN REAL & IMPLEMENTACIÓN:\nSticker Swap automatiza y digitaliza el intercambio mediante un sistema de emparejamiento bilateral ('double match') en tiempo real.\n\n1. Gestión Digital del Álbum: Interfaz ágil e interactiva de alta fidelidad donde el usuario marca con simples clics el estado de su colección (Pegadas, Repetidas, Faltantes).\n2. Algoritmo de Intercambio Bilateral: El motor de base de datos en Supabase calcula instantáneamente cruces relacionales entre las colecciones de usuarios cercanos para proponer ofertas de intercambio donde ambas partes se benefician mutuamente al 100%.\n3. Experiencia de Descubrimiento 'Tinder-style': Implementación de una interfaz de tarjetas deslizables (CardStack) con gestos táctiles fluidos animados en Framer Motion, donde se despliega la propuesta exacta ('Tú le das A, B, C; recibes X, Y, Z').\n4. Coordinación Inmediata: Al deslizar a la derecha en una propuesta con interés mutuo, se genera un Match instantáneo, abriendo un canal de chat en tiempo real por websockets/Supabase Realtime para que los coleccionistas coordinen el encuentro físico de forma segura y eficiente."
  },
  {
    id: "wicho",
    title: "WICHO EN LÍNEA",
    desc: "Plataforma integral de e-commerce con estética Glassmorphism avanzada.",
    category: "E-Commerce",
    tech: ["Firebase", "Tailwind CSS", "React", "Node.js"],
    image: "/assets/images/projects/wicho_featured.png",
    link: "#",
    featured: false,
    details: "Wicho en Línea es una solución de comercio electrónico a medida construida con React y Firebase. El núcleo del diseño es una interfaz glassmorphic premium que prioriza el contenido visual. Incluye pasarela de pago simulada, panel de administración para gestión de stock en tiempo real e inicio de sesión integrado con autenticación multifactor."
  },
  {
    id: "selector",
    title: "Multi Selector Dinámico",
    desc: "Componente React ultra-flexible para gestión de estados complejos en formularios.",
    category: "Herramientas",
    tech: ["React", "Vite", "Tailwind"],
    image: "/assets/images/projects/Multi-selector.jpg",
    link: "https://selector-react-cvsmotion.netlify.app/",
    details: "Un módulo altamente optimizado y reutilizable para seleccionar y clasificar ítems dinámicamente en aplicaciones web complejas. Resuelve problemas comunes de rendimiento en listas masivas mediante virtualización y renderizado inteligente."
  },
  {
    id: "grillmaster",
    title: "Grill Master",
    desc: "Sistema de ventas para restaurantes con integración de WhatsApp API.",
    category: "E-Commerce",
    tech: ["JS", "WhatsApp API", "CSS3"],
    image: "/assets/images/projects/portafolio_grillmaster.svg",
    link: "https://grillmasterweb.netlify.app/",
    details: "Una web app para restaurantes que conecta las elecciones de los clientes en un menú interactivo y envía el pedido formateado directamente al WhatsApp de la cocina, optimizando el tiempo de respuesta del servicio a cero."
  },
  {
    id: "atlas",
    title: "3I/Atlas - Sci-Fi Landing",
    desc: "Landing page temática inmersiva con efectos visuales dinámicos.",
    category: "Landings",
    tech: ["Vanta.js", "Tailwind", "JS"],
    image: "/assets/images/projects/portafolio_atlas.svg",
    link: "https://3i-atlas.netlify.app/",
    details: "Desarrollo de landing page con temática futurista de ciencia ficción. Utiliza Vanta.js en combinación con animaciones CSS a medida para generar un fondo galáctico interactivo que reacciona a la navegación del usuario."
  },
  {
    id: "pixelia",
    title: "Pixelia Services",
    desc: "Página web profesional de servicios de diseño con enfoque en conversión.",
    category: "Landings",
    tech: ["HTML5", "CSS3", "JS"],
    image: "/assets/images/projects/portafolio_pixelia.svg",
    link: "https://pixeliaweb.netlify.app/",
    details: "Sitio corporativo enfocado en marketing digital y servicios creativos. Implementa técnicas de SEO avanzadas, optimización de velocidad de carga de un 98% en Lighthouse y responsive fluida."
  },
  {
    id: "marie",
    title: "Marie Salón & Spa",
    desc: "Diseño elegante y minimalista para servicios de bienestar y belleza.",
    category: "Landings",
    tech: ["Tailwind", "Responsive Design", "JS"],
    image: "/assets/images/projects/marie_salon_banner.jpg",
    link: "https://mariesalon.netlify.app/",
    details: "Una plataforma estética y relajante con estructura limpia para un negocio de spa. Permite la visualización de catálogo de servicios e integra reservas en línea mediante un flujo de pasos intuitivo."
  },
  {
    id: "fortutimer",
    title: "Fortutime Registry",
    desc: "Optimización de flujos de registro para sistemas de hostelería.",
    category: "Herramientas",
    tech: ["UX Research", "HTML/CSS", "JS"],
    image: "/assets/images/projects/Fortutimer_gif.gif",
    link: "https://publuu.com/flip-book/924948/2027263",
    details: "Proyecto enfocado en UX Research y prototipado rápido para mejorar la experiencia de registro del personal de hotelería, reduciendo el abandono de formularios en un 42%."
  }
];

function App() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });
  
  // Spotlight position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Project filtering
  const [filter, setFilter] = useState("Todos");
  
  // Selected project for details drawer
  const [activeProject, setActiveProject] = useState(null);
  
  // Terminal states
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState([
    { type: 'input', text: 'welcome' },
    { type: 'output', text: '🤖 Consola CrisMan Developer v2.0 - Escribe "help" para ver comandos.' }
  ]);
  const terminalBodyRef = useRef(null);

  // Spotlight mouse tracker
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  // Set local card hover coordinates
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--card-mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--card-mouse-y', `${y}px`);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  // Autoscroll terminal to bottom without scrolling outer window
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [cliHistory]);

  // Terminal commands interpreter
  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = "";
    switch (cleanCmd) {
      case 'help':
        response = 'Comandos disponibles: \n  • "about"    - Breve biografía de Cristhian.\n  • "skills"   - Matrix técnica en formato JSON.\n  • "projects" - Listar últimos desarrollos.\n  • "stats"    - Métricas clave en tiempo real.\n  • "clear"    - Limpiar pantalla de la consola.';
        break;
      case 'about':
        response = 'Soy Cristhian Mantilla, estudiante avanzado de Computación e Informática. Apasionado del diseño premium de UI/UX, arquitectura frontend robusta (React 19) e integración de APIs comerciales sólidas.';
        break;
      case 'skills':
        response = '{\n  "frontend": ["React 19", "Next.js 15", "Tailwind v4", "Framer Motion"],\n  "backend": ["Supabase", "Firebase", "Node.js", "REST APIs", "WhatsApp API"],\n  "design": ["Glassmorphism", "Figma-to-Code", "Responsive UX"],\n  "artificial_intelligence": ["LLMs integration", "Agents & Orchestration", "n8n Workflows"]\n}';
        break;
      case 'projects':
        response = 'Proyectos Cargados:\n' + projects.map(p => `  - [${p.category}] ${p.title} -> ${p.desc}`).join('\n');
        break;
      case 'stats':
        response = 'Métricas:\n  - Proyectos Completados: 8+\n  - Contribuciones GitHub: 300+\n  - Tecnologías core: 15\n  - Clientes Satisfechos: 5';
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput("");
        return;
      default:
        response = `Comando no reconocido: "${cleanCmd}". Escribe "help" para ver opciones.`;
    }

    setCliHistory(prev => [
      ...prev,
      { type: 'input', text: cleanCmd },
      { type: 'output', text: response }
    ]);
    setCliInput("");
  };

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="app-wrapper relative">
      {/* Dynamic Cursor Spotlight background */}
      <div 
        className="spotlight-bg" 
        style={{ 
          '--mouse-x': `${mousePos.x}px`, 
          '--mouse-y': `${mousePos.y}px` 
        }}
      />
      
      {/* Animated blob backgrounds */}
      <div className="bg-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Global Navbar */}
      <nav className="navbar fixed top-0 w-full z-50 glass py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Cris<span className="text-gradient">Man</span>
          </motion.h2>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              {['Inicio', 'Terminal', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium dark:text-gray-300 dark:hover:text-primary text-gray-700 hover:text-primary transition-colors tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme}
              className="theme-toggle-btn p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 theme-icon" /> : <Moon className="w-5 h-5 theme-icon" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="container mx-auto px-6 pt-20">
        
        {/* HERO SECTION */}
        <section id="inicio" className="min-h-[75vh] flex items-center pt-16 pb-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Hero text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Disponible para nuevos retos
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-6 font-display text-gray-900 dark:text-white">
                Diseño Interactivo & <br/>
                <span className="text-gradient">Desarrollo Frontend</span>
              </h1>
              <p className="text-lg dark:text-gray-400 text-gray-600 mb-8 max-w-xl leading-relaxed">
                Hola, soy <span className="dark:text-white text-gray-900 font-semibold">Cristhian Mantilla</span>, un programador con mentalidad de diseñador. Creo productos interactivos modernos combinando la potencia de React, animaciones optimizadas y layouts limpios.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#proyectos" 
                  className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-full font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explorar Proyectos
                </a>
                <a 
                  href="/assets/pdf/CV_Cristhian_Mantilla_05_02.pdf" 
                  download 
                  className="px-8 py-3.5 glass rounded-full font-bold dark:text-white text-gray-800 hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4.5 h-4.5" /> Descargar CV
                </a>
              </div>
            </motion.div>
            
            {/* Interactive CLI Console */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-5 w-full"
            >
              <div className="terminal-window w-full">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-mono ml-auto">crisman@developer: ~</span>
                </div>
                <div ref={terminalBodyRef} className="terminal-body font-mono text-left max-h-[320px] overflow-y-auto">
                  {cliHistory.map((item, idx) => (
                    <div key={idx} className="mb-2.5">
                      {item.type === 'input' ? (
                        <div>
                          <span className="text-primary font-bold">❯</span> <span className="dark:text-white text-gray-900 font-semibold">{item.text}</span>
                        </div>
                      ) : (
                        <pre className="dark:text-gray-300 text-gray-800 whitespace-pre-wrap text-xs font-mono bg-black/5 dark:bg-white/5 p-2 rounded-md border dark:border-white/5 border-black/10 mt-1">{item.text}</pre>
                      )}
                    </div>
                  ))}
                  
                  <form onSubmit={handleCliSubmit} className="flex items-center mt-3">
                    <span className="text-primary mr-2 font-bold">❯</span>
                    <input 
                      type="text" 
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                      placeholder="Escribe 'help' y presiona Enter..."
                      className="bg-transparent border-none outline-none dark:text-white text-gray-900 w-full text-sm font-mono placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:ring-0 p-0"
                    />
                  </form>
                </div>
              </div>
              
              {/* Desktop quick CLI helper buttons */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {['help', 'about', 'skills', 'projects', 'stats'].map(cmd => (
                  <button 
                    type="button"
                    key={cmd}
                    onClick={() => {
                      setCliInput(cmd);
                      setTimeout(() => {
                        const form = document.querySelector('form');
                        form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                      }, 50);
                    }}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 dark:text-primary text-primary/90 border border-primary/25 hover:border-primary/45 transition-all cursor-pointer"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS / METRICS DASHBOARD */}
        <section className="glass px-8 py-10 rounded-[28px] border border-black/5 dark:border-white/5 my-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-6 h-6 dark:text-primary text-primary" />, count: "8+", label: "Proyectos Realizados" },
              { icon: <Code2 className="w-6 h-6 dark:text-secondary text-secondary" />, count: "15+", label: "Tecnologías Clave" },
              { icon: <Coffee className="w-6 h-6 dark:text-accent text-accent" />, count: "300+", label: "GitHub Commits" },
              { icon: <User className="w-6 h-6 dark:text-accent-secondary text-accent-secondary" />, count: "5+", label: "Clientes Felices" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="mb-3 p-3 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/10">{stat.icon}</div>
                <div className="text-3xl font-extrabold dark:text-white text-gray-900 mb-1 tracking-tight">{stat.count}</div>
                <div className="text-sm dark:text-gray-400 text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="habilidades" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Habilidades <span className="text-gradient">Core</span></h2>
            <p className="dark:text-gray-400 text-gray-600 max-w-xl mx-auto">Domino múltiples tecnologías divididas en áreas clave para estructurar productos web modernos.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Code2 className="w-5 h-5 dark:text-primary text-primary" />, 
                title: "Frontend", 
                skills: [
                  { name: "React 19 & Hooks", desc: "SPAs interactivas y control de estado reactivo.", status: "Avanzado" },
                  { name: "Tailwind CSS v4", desc: "Estéticas modernas y efectos glassmorphism.", status: "Experto" },
                  { name: "Framer Motion", desc: "Animaciones físicas y transiciones fluidas.", status: "Avanzado" },
                  { name: "Vite Bundler", desc: "Optimización de assets y carga ultrarrápida.", status: "Avanzado" }
                ] 
              },
              { 
                icon: <Cpu className="w-5 h-5 dark:text-blue-400 text-blue-600" />, 
                title: "Backend", 
                skills: [
                  { name: "Firebase Stack", desc: "Autenticación, NoSQL y almacenamiento cloud.", status: "Avanzado" },
                  { name: "REST APIs & JSON", desc: "Consumo e integración asíncrona de datos.", status: "Avanzado" },
                  { name: "Node.js Basics", desc: "Scripts y gestión del ecosistema NPM.", status: "Intermedio" },
                  { name: "WhatsApp Business API", desc: "Envío programado de alertas y pedidos.", status: "Avanzado" }
                ] 
              },
              { 
                icon: <Palette className="w-5 h-5 dark:text-purple-400 text-purple-600" />, 
                title: "UX/UI Design", 
                skills: [
                  { name: "Glassmorphism", desc: "Estilos premium con desenfoque y luces.", status: "Experto" },
                  { name: "Figma to Code", desc: "Traducción de prototipos a código limpio.", status: "Experto" },
                  { name: "Responsive Layouts", desc: "Estructuras fluidas para todo dispositivo.", status: "Experto" },
                  { name: "UX Research", desc: "Mejora de flujos y tasas de conversión.", status: "Avanzado" }
                ] 
              },
              { 
                icon: <Brain className="w-5 h-5 dark:text-pink-400 text-pink-600" />, 
                title: "IA & Automation", 
                skills: [
                  { name: "LLM APIs Integration", desc: "Conexión a modelos Gemini, Claude y OpenAI.", status: "Avanzado" },
                  { name: "Orchestrations & Agents", desc: "Integración de flujos de IA en portales.", status: "Intermedio" },
                  { name: "Vector DBs & Semantic", desc: "Búsquedas semánticas de información.", status: "Intermedio" },
                  { name: "Workflow Automation", desc: "Automatización con Make y n8n.", status: "Avanzado" }
                ] 
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                onMouseMove={handleCardMouseMove}
                className="glass-card glow-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-primary mb-6 flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">{section.icon}</div>
                    <h3 className="text-lg font-bold dark:text-white text-gray-900">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {section.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <ChevronRight className="w-3.5 h-3.5 dark:text-primary text-primary flex-shrink-0" />
                            <span className="font-semibold dark:text-gray-200 text-gray-800 text-xs md:text-sm truncate">{skill.name}</span>
                          </div>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full border font-mono font-bold uppercase tracking-wider flex-shrink-0 ${
                            skill.status === 'Experto' 
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                              : skill.status === 'Avanzado'
                              ? 'bg-primary/10 text-primary border-primary/30'
                              : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                          }`}>
                            {skill.status}
                          </span>
                        </div>
                        <p className="text-[11px] dark:text-gray-400 text-gray-500 leading-tight pl-5">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="proyectos" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Proyectos <span className="text-gradient">Destacados</span></h2>
            <p className="dark:text-gray-400 text-gray-600 max-w-xl mx-auto">Filtrados por categoría. Haz clic en cualquier tarjeta para ver su estudio de caso detallado.</p>
            
            {/* Interactive Category Filter Menu */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["Todos", "E-Commerce", "Herramientas", "Landings"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer relative ${
                    filter === cat 
                      ? "text-white" 
                      : "text-gray-500 hover:text-gray-300 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {filter === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid with animation */}
          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  onMouseMove={handleCardMouseMove}
                  className={`glass-card glow-card flex flex-col group overflow-hidden cursor-pointer ${
                    p.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="h-72 overflow-hidden relative">
                    {/* Hover demo icon overlay */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-all z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="p-4 bg-primary/20 border border-primary/45 rounded-full text-primary mb-2 scale-75 group-hover:scale-100 transition-all duration-300">
                        <Eye className="w-6 h-6" />
                      </div>
                      <span className="text-white text-sm font-bold tracking-wide">Estudiar Proyecto</span>
                    </div>
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-mono dark:text-primary text-primary font-bold uppercase tracking-wider">{p.category}</span>
                      {p.featured && (
                        <span className="px-3 py-1 bg-primary/10 dark:text-primary text-primary text-xs rounded-full border border-primary/30 font-semibold">
                          Destacado
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600 mb-6 text-sm flex-grow">
                      {p.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tech.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/10 dark:text-gray-300 text-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="py-24">
          <div className="glass p-12 md:p-16 rounded-[32px] max-w-4xl mx-auto border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[60px] pointer-events-none"></div>
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-4xl font-extrabold mb-4">¿Hablamos de tu <span className="text-gradient">Proyecto</span>?</h2>
              <p className="dark:text-gray-400 text-gray-600 text-base leading-relaxed">
                Estoy buscando activamente oportunidades laborales y freelance. Envíame un mensaje directo por correo o conéctate en mis redes sociales.
              </p>
            </div>

            {/* Quick action social cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", user: "crisman.dev", link: "mailto:crisman.dev@gmail.com", color: "hover:text-red-400" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", user: "crismandev", link: "https://www.linkedin.com/in/crismandev/", color: "hover:text-blue-400" },
                { icon: <Github className="w-5 h-5" />, label: "GitHub", user: "Crismandev", link: "https://github.com/Crismandev", color: "hover:text-purple-400" },
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram", user: "@web.pixelia", link: "https://www.instagram.com/web.pixelia", color: "hover:text-pink-400" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  onMouseMove={handleCardMouseMove}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/10 hover:border-primary/30 transition-all text-center group glow-card ${social.color}`}
                >
                  <div className="p-3 dark:bg-white/10 bg-black/5 rounded-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{social.label}</div>
                    <div className="text-sm font-bold dark:text-white text-gray-900 mt-0.5">{social.user}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <footer className="py-12 border-t border-black/5 dark:border-white/5 text-center dark:text-gray-500 text-gray-600 text-sm">
        <div className="container mx-auto px-6">
          <p className="font-mono text-xs dark:text-gray-600 text-gray-400 mb-2">
            built_with = [ "React 19", "Vite", "Tailwind CSS v4", "Framer Motion" ]
          </p>
          <p>&copy; 2026 Cristhian Mantilla • Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* CASE STUDY OVERLAY DRAWER */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Backdrop filter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />
            
            {/* Drawer sheet container */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-gray-900/95 dark:bg-slate-950/95 border-l border-white/10 z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-8 space-y-8">
                {/* Header title */}
                <div className="flex justify-between items-center">
                  <div className="text-xs font-mono text-primary font-bold uppercase tracking-wider">{activeProject.category}</div>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Visual Banner */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">{activeProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {activeProject.tech.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Detail content */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" /> Caso de Estudio
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans whitespace-pre-line">
                    {activeProject.details}
                  </p>
                </div>
                
                {/* Actions */}
                <div className="pt-6 border-t border-white/5 flex gap-4">
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white text-center font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4.5 h-4.5" /> Visitar Demo
                  </a>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Cerrar Detalle
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

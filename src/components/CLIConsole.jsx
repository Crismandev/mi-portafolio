import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projectsData';

export function CLIConsole() {
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState([
    { type: 'input', text: 'welcome' },
    { type: 'output', text: 'Consola CrisMan Developer v2.0 - Escribe "help" para ver comandos.' }
  ]);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [cliHistory]);

  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = "";
    switch (cleanCmd) {
      case 'help':
        response = 'Comandos disponibles: \n  • "about"    - Breve biografía de Cristhian.\n  • "skills"   - Matrix técnica en formato JSON.\n  • "projects" - Listar últimos desarrollos.\n  • "stats"    - Métricas clave en tiempo real.\n  • "neofetch" - Desplegar resumen visual del sistema.\n  • "secret"   - Revelar un easter egg oculto.\n  • "clear"    - Limpiar pantalla de la consola.';
        break;
      case 'about':
        response = 'Soy Cristhian Mantilla, Desarrollador de Software y Orquestador de IA. Construyo sistemas integrando frontend moderno con agentes de inteligencia artificial.';
        break;
      case 'skills':
        response = '{\n  "frontend": ["React", "Astro", "Tailwind v4", "Vite"],\n  "backend": ["Go (Golang)", "Supabase", "Firebase", "Node.js", "PHP"],\n  "ai_orchestration": ["MCP", "Graphify", "CherryStudio", "Prompt Engineering"],\n  "system_security": ["Debian", "Kali Linux", "Pentesting", "CLI Deployments"]\n}';
        break;
      case 'projects':
        response = 'Proyectos Cargados:\n' + projects.map(p => `  - [${p.category}] ${p.title} -> ${p.desc}`).join('\n');
        break;
      case 'stats':
        response = 'Métricas:\n  - Modelos de IA Dominados: 10+\n  - Sistemas en Producción: 6+\n  - Flujos Automatizados: 100%\n  - Enfoque: AI-Driven Development & Ciberseguridad';
        break;
      case 'neofetch':
        response = '      .---.       OS: CrisMan-OS v2.5\n     /     \\      Host: CristhianMantilla.dev\n     \\_.._./      Kernel: React-19.2.0 + Framer-Motion\n     .-[\"\"]-.     Uptime: 24/7 online\n   .\'  ::  \'.    Shell: ReactInteractiveShell\n  /   .::.   \\   DE: Glassmorphism Premium\n |  .::::::.  |  WM: TailwindCSS v4\n |  ::::::::  |  Terminal: Web Terminal\n  \\  \'::::\'  /   CPU: Brain + Coffee\n   \'.  ::  .\'    Memory: High Availability (Vite)\n     \'----\'';
        break;
      case 'secret':
        response = 'HACK THE PLANET.\n"El éxito en el desarrollo de software no es solo hacer que el código compile, sino diseñar experiencias que las personas sientan naturales."\nSigamos construyendo.';
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

  return (
    <div className="w-full">
      <div className="terminal-window w-full">
        {/* Terminal Header */}
        <div className="terminal-header flex items-center justify-between">
          <div className="flex gap-2">
            <div className="terminal-dot bg-red-500 w-3 h-3 rounded-full"></div>
            <div className="terminal-dot bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="terminal-dot bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">crisman@developer: ~</span>
        </div>
        {/* Terminal Body */}
        <div 
          ref={terminalBodyRef} 
          className="terminal-body font-mono text-left max-h-[320px] overflow-y-auto"
        >
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
      
      {/* Quick Action Helpers */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {['help', 'about', 'skills', 'projects', 'stats'].map(cmd => (
          <button 
            type="button"
            key={cmd}
            onClick={() => {
              setCliInput(cmd);
              setTimeout(() => {
                const event = new Event('submit', { cancelable: true, bubbles: true });
                const form = terminalBodyRef.current?.querySelector('form');
                form?.dispatchEvent(event);
              }, 50);
            }}
            className="text-xs font-mono px-4 py-1.5 rounded-md bg-[#25252d]/50 hover:bg-[#30303b] text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CLIConsole;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Building2, BadgeDollarSign, Mail, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("E-Commerce de Alta Conversión");
  const [budget, setBudget] = useState("$1,500 - $3,000 USD");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Psychologically structured WhatsApp brief for high-value client intake
    const briefMessage = `Hola Cristhian. Me interesa iniciar un proyecto de desarrollo:

*Datos de Contacto:*
• Nombre: ${name}
• Empresa/Marca: ${company || "Particular"}

*Brief del Proyecto:*
• Solución Requerida: ${projectType}
• Presupuesto Estimado: ${budget}
• Detalles de la Idea: ${message}`;

    const waUrl = `https://wa.me/51988052497?text=${encodeURIComponent(briefMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="glass p-8 md:p-12 rounded-[32px] max-w-2xl mx-auto border border-black/5 dark:border-white/5 relative overflow-hidden">
      {/* Soft internal gradient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[60px] pointer-events-none"></div>
      
      <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          Intake de Clientes Premium
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3 text-slate-900 dark:text-white">
          Comencemos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Siguiente Sistema</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
          Completa el breve cuestionario técnico abajo para formular una propuesta óptima. Serás redirigido a WhatsApp para coordinar la llamada diagnóstica.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-10 relative z-10 text-left">
        
        {/* Row 1: Name and Company (Grid) */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider block">
              Tu Nombre completo *
            </label>
            <div className="relative group">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-800 dark:text-white transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider block flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-primary" /> Nombre de la Empresa / Marca
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Ej. Acme Corp (Opcional)"
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-800 dark:text-white transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Row 2: Project Type and Budget (Grid) */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider block flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-secondary" /> Solución Requerida
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full bg-[var(--terminal-bg)] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-800 dark:text-white transition-all duration-300 cursor-pointer"
            >
              <option value="E-Commerce de Alta Conversión">E-Commerce de Alta Conversión</option>
              <option value="Plataforma SaaS / Sistema Web">Plataforma SaaS / Sistema Web</option>
              <option value="Landing Page Inmersiva 3D">Landing Page Inmersiva 3D</option>
              <option value="Automatización e Integración de IA">Automatización e Integración de IA</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider block flex items-center gap-1.5">
              <BadgeDollarSign className="w-3.5 h-3.5 text-accent" /> Presupuesto Estimado
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-[var(--terminal-bg)] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-800 dark:text-white transition-all duration-300 cursor-pointer"
            >
              <option value="< $500 USD">&lt; $500 USD (Landing Simple)</option>
              <option value="$500 - $1,500 USD">$500 - $1,500 USD (E-Commerce/Web Estándar)</option>
              <option value="$1,500 - $3,000 USD">$1,500 - $3,000 USD (Sistemas a Medida/SaaS)</option>
              <option value="$3,000+ USD">$3,000+ USD (Arquitecturas Avanzadas/Agentes)</option>
            </select>
          </div>
        </div>

        {/* Row 3: Project Brief / Message */}
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider block">
            Cuéntame tu idea o requerimiento *
          </label>
          <textarea
            required
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe brevemente el flujo, los objetivos y la funcionalidad clave del sistema que necesitas construir..."
            className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-800 dark:text-white transition-all duration-300 resize-none placeholder:text-slate-400 dark:placeholder:text-gray-600"
          />
        </div>
        
        {/* High-Impact Main WhatsApp CTA */}
        <motion.button
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          type="submit"
          className="w-full py-4.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(208,188,255,0.3)] text-[#23005c] text-center font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
        >
          Iniciar Arquitectura por WhatsApp <ArrowRight className="w-4 h-4" />
        </motion.button>
      </form>

      {/* Quick Action Social Networks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
        {[
          { icon: <Mail className="w-4 h-4" />, label: "Email", user: "crisman.dev", link: "mailto:crisman.dev@gmail.com", color: "hover:text-red-400" },
          { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", user: "crismandev", link: "https://www.linkedin.com/in/crismandev/", color: "hover:text-blue-400" },
          { icon: <Github className="w-4 h-4" />, label: "GitHub", user: "Crismandev", link: "https://github.com/Crismandev", color: "hover:text-purple-400" },
          { icon: <Instagram className="w-4 h-4" />, label: "Instagram", user: "@web.pixelia", link: "https://www.instagram.com/web.pixelia", color: "hover:text-pink-400" }
        ].map((social, i) => (
          <a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-1.5 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all text-center group glow-card ${social.color}`}
          >
            <div className="p-2 bg-white/5 rounded-lg group-hover:scale-105 transition-transform text-primary">
              {social.icon}
            </div>
            <div className="text-[9px] font-semibold text-slate-500 dark:text-gray-400 uppercase">{social.label}</div>
            <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate max-w-full">{social.user}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default ContactForm;

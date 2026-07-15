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
    <div className="glass-card p-10 md:p-16 rounded-[32px] max-w-3xl mx-auto border border-white/5 relative overflow-hidden bg-black/40">
      {/* Soft internal gradient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] pointer-events-none"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-primary mb-4 block">
          Colaboración
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-display text-white tracking-tight">
          Iniciemos un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Proyecto</span>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
          Cuéntame los detalles de tu próximo desafío tecnológico. Te responderé a la brevedad con una propuesta arquitectónica y estimación técnica.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-12 relative z-10 text-left">
        
        {/* Row 1: Name and Company (Grid) */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre completo"
              className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white/10 text-white transition-all duration-300 placeholder:text-gray-600 rounded-t-xl"
            />
          </div>

          <div className="space-y-2">
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Empresa (Opcional)"
              className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white/10 text-white transition-all duration-300 placeholder:text-gray-600 rounded-t-xl"
            />
          </div>
        </div>

        {/* Row 2: Project Type and Budget (Grid) */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white/10 text-white transition-all duration-300 cursor-pointer appearance-none rounded-t-xl"
            >
              <option value="E-Commerce de Alta Conversión" className="bg-black text-white">E-Commerce de Alta Conversión</option>
              <option value="Plataforma SaaS / Sistema Web" className="bg-black text-white">Plataforma SaaS / Sistema Web</option>
              <option value="Landing Page Inmersiva 3D" className="bg-black text-white">Landing Page Inmersiva 3D</option>
              <option value="Automatización e Integración de IA" className="bg-black text-white">Automatización e Integración de IA</option>
            </select>
          </div>

          <div className="space-y-2">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white/10 text-white transition-all duration-300 cursor-pointer appearance-none rounded-t-xl"
            >
              <option value="< $500 USD" className="bg-black text-white">&lt; $500 USD (Landing Simple)</option>
              <option value="$500 - $1,500 USD" className="bg-black text-white">$500 - $1,500 USD (E-Commerce/Web Estándar)</option>
              <option value="$1,500 - $3,000 USD" className="bg-black text-white">$1,500 - $3,000 USD (Sistemas a Medida/SaaS)</option>
              <option value="$3,000+ USD" className="bg-black text-white">$3,000+ USD (Arquitecturas Avanzadas/Agentes)</option>
            </select>
          </div>
        </div>

        {/* Row 3: Project Brief / Message */}
        <div className="space-y-2 mt-4">
          <textarea
            required
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntame sobre el desafío técnico..."
            className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white/10 text-white transition-all duration-300 resize-none placeholder:text-gray-600 rounded-t-xl"
          />
        </div>
        
        {/* High-Impact Main WhatsApp CTA */}
        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-5 rounded-full bg-white text-black hover:bg-gray-100 font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
          >
            Enviar Requerimientos <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {[
          { icon: <Mail className="w-5 h-5" />, label: "Email", user: "crisman.dev", link: "mailto:crisman.dev@gmail.com", color: "hover:text-white" },
          { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", user: "crismandev", link: "https://www.linkedin.com/in/crismandev/", color: "hover:text-blue-400" },
          { icon: <Github className="w-5 h-5" />, label: "GitHub", user: "Crismandev", link: "https://github.com/Crismandev", color: "hover:text-white" },
          { icon: <Instagram className="w-5 h-5" />, label: "Instagram", user: "@web.pixelia", link: "https://www.instagram.com/web.pixelia", color: "hover:text-pink-400" }
        ].map((social, i) => (
          <a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-center group ${social.color}`}
          >
            <div className="text-gray-400 group-hover:scale-110 transition-transform group-hover:text-inherit">
              {social.icon}
            </div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mt-2">{social.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default ContactForm;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

function ProjectCardImage({ project }) {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const staggerTime = Math.random() * 800; 
    const intervalTime = 3200 + staggerTime;

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
      {images.map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${project.title} slide`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export function ProjectCard({ project, onClick }) {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--card-mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--card-mouse-y', `${y}px`);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      onMouseMove={handleCardMouseMove}
      className="glass-card glow-card flex flex-col group overflow-hidden cursor-pointer h-full"
    >
      <div className="h-80 overflow-hidden relative">
        {/* Dark gradient overlay for typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 pointer-events-none"></div>
        
        {/* Glassmorphic spotlight hover overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] transition-all duration-500 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="p-4 bg-primary/20 border border-primary/45 rounded-full text-primary mb-2 scale-75 group-hover:scale-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-white text-xs font-mono font-bold tracking-wider uppercase translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            Estudiar Proyecto
          </span>
        </div>
        <ProjectCardImage project={project} />
      </div>
      
      <div className="p-8 flex-grow flex flex-col relative z-20 mt-0">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">{project.category}</span>
          {project.featured && (
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] rounded-full border border-primary/20 font-bold uppercase tracking-widest">
              Destacado
            </span>
          )}
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-display tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm flex-grow font-sans font-light leading-relaxed">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, idx) => (
            <span 
              key={t} 
              className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono tracking-wide transform transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 hover:!bg-primary/20 hover:!text-white hover:!border-primary/50 cursor-pointer hover:!scale-105"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;

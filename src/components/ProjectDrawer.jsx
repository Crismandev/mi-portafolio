import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, BookOpen, ExternalLink } from 'lucide-react';

export function ProjectDrawer({ activeProject, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProject]);

  if (!activeProject) return null;

  const projectImages = activeProject.images && activeProject.images.length > 0
    ? activeProject.images
    : [activeProject.image];

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black z-50 cursor-pointer"
      />
      
      {/* Immersive modal sheet */}
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 md:inset-10 lg:inset-y-10 lg:inset-x-24 bg-[#050505] border border-white/10 z-50 shadow-2xl overflow-y-auto text-gray-200 md:rounded-3xl"
      >
        <div className="p-8 md:p-12 lg:p-16 space-y-12">
          {/* Header */}
          <div className="flex justify-between items-center sticky top-0 z-50 -mx-8 px-8 -mt-8 pt-8 pb-4 bg-[#050505]/80 backdrop-blur-md">
            <div className="text-xs font-mono text-primary font-bold uppercase tracking-widest">{activeProject.category}</div>
            <button 
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Visual Carousel Banner */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg relative group/carousel bg-black/40">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={projectImages[activeImageIndex]}
                alt={`${activeProject.title} screenshot ${activeImageIndex + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {projectImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => (prev === 0 ? projectImages.length - 1 : prev - 1));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900/80 border border-white/10 hover:border-primary/45 text-white opacity-0 group-hover/carousel:opacity-100 transition-all shadow-md cursor-pointer flex items-center justify-center hover:scale-105"
                  aria-label="Anterior"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(prev => (prev === projectImages.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900/80 border border-white/10 hover:border-primary/45 text-white opacity-0 group-hover/carousel:opacity-100 transition-all shadow-md cursor-pointer flex items-center justify-center hover:scale-105"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/45 border border-white/5 backdrop-blur-sm z-10">
                  {projectImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(idx);
                      }}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        activeImageIndex === idx 
                          ? "w-4.5 h-1.5 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]" 
                          : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-display tracking-tight">{activeProject.title}</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {activeProject.tech.map(t => (
                <span key={t} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono tracking-widest uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {/* Detail content */}
          <div className="max-w-4xl mx-auto space-y-12 pb-10">
            {activeProject.details && typeof activeProject.details === 'object' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Desafío */}
                <div className="glass-card p-6 bg-black/20">
                  <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Desafío
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                    {activeProject.details.desafio}
                  </p>
                </div>

                {/* Solución */}
                <div className="glass-card p-6 bg-black/20">
                  <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Solución
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                    {activeProject.details.solucion}
                  </p>
                </div>

                {/* Impacto */}
                <div className="glass-card p-6 bg-black/20">
                  <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-secondary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse"></span>
                    Impacto
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                    {activeProject.details.impacto}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-lg text-gray-400 leading-relaxed font-sans font-light whitespace-pre-line text-center max-w-2xl mx-auto">
                {activeProject.details}
              </p>
            )}
          </div>
          
          {/* Actions */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <a 
              href={activeProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 px-8 py-4 bg-white text-black hover:scale-[1.02] text-center font-bold uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Lanzar Live Demo
            </a>
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default ProjectDrawer;

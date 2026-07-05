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
      
      {/* Drawer sheet */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="fixed top-0 right-0 h-full w-full max-w-xl bg-white/95 dark:bg-slate-950/95 border-l border-black/10 dark:border-white/10 z-50 shadow-2xl overflow-y-auto text-slate-800 dark:text-gray-200"
      >
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-primary font-bold uppercase tracking-wider">{activeProject.category}</div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
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
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">{activeProject.title}</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {activeProject.tech.map(t => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-700 dark:text-gray-300 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {/* Detail content */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Caso de Estudio
            </h4>
            
            {activeProject.details && typeof activeProject.details === 'object' ? (
              <div className="space-y-8 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-primary/50 before:via-secondary/50 before:to-accent/50">
                {/* Desafío */}
                <div className="relative">
                  <div className="absolute -left-[21.5px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white dark:border-slate-950 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2.5">
                    Desafío Técnico
                  </h5>
                  <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-sans">
                    {activeProject.details.desafio}
                  </p>
                </div>

                {/* Solución */}
                <div className="relative">
                  <div className="absolute -left-[21.5px] top-1 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-white dark:border-slate-950 shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary mb-2.5">
                    Arquitectura de Solución
                  </h5>
                  <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-sans">
                    {activeProject.details.solucion}
                  </p>
                </div>

                {/* Impacto */}
                <div className="relative">
                  <div className="absolute -left-[21.5px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-white dark:border-slate-950 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-2.5">
                    Impacto Medible
                  </h5>
                  <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-sans">
                    {activeProject.details.impacto}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans whitespace-pre-line">
                {activeProject.details}
              </p>
            )}
          </div>
          
          {/* Actions */}
          <div className="pt-6 border-t border-black/5 dark:border-white/5 flex gap-4">
            <a 
              href={activeProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white text-center font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <ExternalLink className="w-4.5 h-4.5" /> Visitar Demo
            </a>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-slate-800 dark:text-white font-bold rounded-xl transition-all cursor-pointer"
            >
              Cerrar Detalle
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default ProjectDrawer;

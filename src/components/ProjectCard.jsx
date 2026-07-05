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
      className={`glass-card glow-card flex flex-col group overflow-hidden cursor-pointer ${
        project.gridSpan || 'md:col-span-4'
      }`}
    >
      <div className="h-72 overflow-hidden relative">
        {/* Glassmorphic spotlight hover overlay inspired by 21st.dev */}
        <div className="absolute inset-0 bg-[#030303]/35 backdrop-blur-[6px] transition-all duration-500 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="p-4 bg-primary/20 border border-primary/45 rounded-full text-primary mb-2 scale-75 group-hover:scale-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-white text-xs font-mono font-bold tracking-wider uppercase translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            Estudiar Proyecto
          </span>
        </div>
        <ProjectCardImage project={project} />
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono dark:text-primary text-primary font-bold uppercase tracking-wider">{project.category}</span>
          {project.featured && (
            <span className="px-3 py-1 bg-primary/10 dark:text-primary text-primary text-xs rounded-full border border-primary/30 font-semibold">
              Destacado
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="dark:text-gray-400 text-gray-600 mb-6 text-sm flex-grow">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/10 dark:text-gray-300 text-gray-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;

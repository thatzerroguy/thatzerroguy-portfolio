
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, EXPERIENCE } from '../constants';
import HoverPreview from './HoverPreview';

const GREETINGS = ["Hello", "Hallo", "Hola", "Ciao", "Salut", "Olá", "Nǐ hǎo"];
const INSTAGRAM_URL = "https://instagram.com/thatzerroguy"; // Placeholder for actual handle
const PERSONAL_IMAGE = "/thatzerroguy.jpeg";

const Home: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="max-w-4xl mx-auto px-6 pb-24 min-h-screen relative"
      onMouseMove={handleMouseMove}
    >
      <header className="py-16 md:py-24 flex flex-col gap-12">
        {/* Profile Picture centered at the top */}
        <div className="w-full flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-secondary overflow-hidden border border-brand-border shadow-sm"
          >
            <img 
              src={PERSONAL_IMAGE} 
              alt="Nduka Ugochukwu"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=Nduka&backgroundColor=EFE9E3`;
              }}
            />
          </motion.div>
        </div>
        
        {/* Greeting and Bio reverted to left-aligned */}
        <div className="w-full flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight max-w-2xl mb-6 flex flex-wrap items-center gap-x-2 md:gap-x-2 font-serif">
            <span className="inline-block min-w-[100px] md:min-w-[140px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={GREETINGS[greetingIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-brand-accent italic block"
                >
                  {GREETINGS[greetingIndex]},
                </motion.span>
              </AnimatePresence>
            </span>
            <span>I’m </span>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors duration-300 decoration-brand-accent underline underline-offset-8 decoration-2 cursor-pointer"
              onMouseEnter={() => setHoveredImage(PERSONAL_IMAGE)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              Ugo!
            </a>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-xl text-neutral-600 leading-relaxed max-w-3xl"
          >
            Nigeria based Backend & DevOps Engineer. Currently designing and engineering dependable systems at  <span className="underline decoration-brand-border underline-offset-8">IDCODE Nigeria</span> and the infrastructure that supports them. 
            I care about how systems behave under stress, change, and scale.
          </motion.p>
        </div>
      </header>

      <section className="mb-32">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-12 border-b border-brand-border pb-4 font-serif">Selected Work</h2>
        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 items-start">
              <div className="col-span-1">
                <Link href={`/projects/${project.id}`} className="inline-block">
                  <h3 
                    className="font-semibold text-lg hover:text-brand-accent transition-colors duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredImage(project.previewMedia.url)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    {project.title}
                  </h3>
                </Link>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                  {project.overview.content}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="text-[10px] uppercase font-bold text-neutral-400 tracking-tighter border border-brand-border px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    <section className="mb-32">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-12 border-b border-brand-border pb-4 font-serif">Experience</h2>
        <div className="space-y-16">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <div className="col-span-1">
                <h4 className="font-semibold text-lg font-serif">{exp.company}</h4>
                <p className="text-xs uppercase tracking-tighter text-neutral-400 mt-1 font-serif">{exp.period}</p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h5 className="font-medium text-neutral-700 italic mb-2 font-serif">{exp.role}</h5>
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Footer Tagline */}
      <footer className="mb-24 pt-24 border-t border-brand-border">
         <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl md:text-7xl font-medium font-serif"
         >
           I engineer experiences, <span className="text-brand-accent italic">worth reliving for.</span>
         </motion.h1>
      </footer>

      <HoverPreview 
        image={hoveredImage} 
        isVisible={hoveredImage !== null} 
        mousePos={mousePos} 
      />
    </div>
  );
};

export default Home;

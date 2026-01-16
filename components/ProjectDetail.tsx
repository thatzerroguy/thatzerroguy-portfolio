
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import Mermaid from './Mermaid';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link href="/" className="text-brand-accent mt-4 inline-block">Go Home</Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 pb-32"
    >
      <header className="mb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase font-bold text-neutral-400 hover:text-brand-accent mb-12 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to work
        </Link>
        <h1 className="text-4xl md:text-6xl font-medium mb-12 leading-tight">
          {project.title}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-brand-border">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Role</h4>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Timeline</h4>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Team</h4>
            <p className="text-sm font-medium">{project.teamSize}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Tech Stack</h4>
            <p className="text-sm font-medium">{project.skills.join(', ')}</p>
          </div>
        </div>
      </header>

      <img 
        src={project.previewImage} 
        alt={project.title} 
        className="w-full aspect-video object-cover rounded-2xl mb-24 shadow-sm"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 sticky top-32">Overview</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
            {project.description}
          </p>
        </div>
      </div>

      <section className="mb-32">
        <div className="bg-brand-secondary rounded-3xl p-8 md:p-16 border border-brand-border">
          <h3 className="text-2xl font-medium mb-8 text-center">Architectural System Flow</h3>
          <Mermaid chart={project.architectureDiagram} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <section className="bg-brand-bg border border-brand-border rounded-2xl p-8">
          <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-6">Data Model (ERD)</h3>
          <Mermaid chart={project.dbSchema} />
        </section>
        <section className="bg-brand-bg border border-brand-border rounded-2xl p-8">
          <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-6">API Definition</h3>
          <div className="space-y-4">
            {project.apiEndpoints.map((ep, i) => (
              <div key={i} className="flex flex-col border-b border-brand-border pb-4 last:border-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${
                    ep.method === 'GET' ? 'bg-blue-500' : ep.method === 'POST' ? 'bg-green-500' : 'bg-orange-500'
                  }`}>
                    {ep.method}
                  </span>
                  <code className="text-xs font-mono font-bold text-neutral-700">{ep.path}</code>
                </div>
                <p className="text-sm text-neutral-500">{ep.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 sticky top-32">Infrastructure & DevOps</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            {project.infrastructure}
          </p>
          <div className="flex gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center animate-spin-slow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9B59C" strokeWidth="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-tighter">System Health</span>
              <span className="text-sm font-medium">99.99% Uptime SLA achieved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-t border-brand-border pt-20">
        <div className="lg:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 sticky top-32">The "Why"</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-neutral-600 italic leading-relaxed">
            "{project.why}"
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-24 border-t border-brand-border">
         <Link href="/" className="text-2xl font-medium hover:text-brand-accent transition-colors">
           See more work
         </Link>
      </div>
    </motion.article>
  );
};

export default ProjectDetail;

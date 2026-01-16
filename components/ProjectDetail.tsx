'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import Mermaid from './Mermaid';
import { ProjectSection, FlowSection, ProjectMedia } from '../types';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 font-manrope mb-4">
    {title}
  </h2>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-bold mb-4 font-manrope text-neutral-800">
    {title}
  </h3>
);

const SectionContent = ({ content }: { content: string }) => (
  <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-poppins mb-8">
    {content}
  </p>
);

const MediaRenderer = ({ media }: { media?: ProjectMedia }) => {
  if (!media) return null;

  if (media.type === 'video') {
    return (
      <video
        src={media.url}
        poster={media.poster}
        controls
        className="w-full rounded-2xl shadow-sm mb-8"
      />
    );
  }

  return (
    <img
      src={media.url}
      alt={media.alt || 'Project illustration'}
      className="w-full rounded-2xl shadow-sm mb-8 object-cover"
    />
  );
};

const StandardSection = ({ 
  sectionTitle, 
  data 
}: { 
  sectionTitle: string, 
  data: ProjectSection 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <div className="lg:col-span-3">
        <div className="sticky top-32">
          <SectionHeader title={sectionTitle} />
        </div>
      </div>
      <div className="lg:col-span-9">
        <SectionTitle title={data.title} />
        <SectionContent content={data.content} />
        <MediaRenderer media={data.media} />
      </div>
    </div>
  );
};

const FlowLayout = ({ data }: { data: FlowSection }) => {
  return (
    <section className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-3">
           <div className="sticky top-32">
            <SectionHeader title="The Flow" />
           </div>
        </div>
        <div className="lg:col-span-9">
           <SectionTitle title={data.title} />
           <SectionContent content={data.content} />
        </div>
      </div>

      <div className="space-y-24">
        {data.diagrams.map((diagram, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Visuals on the Left */}
            <div className="bg-brand-secondary/30 rounded-3xl p-8 border border-brand-border">
              {diagram.mermaidChart ? (
                <Mermaid chart={diagram.mermaidChart} />
              ) : diagram.imageUrl ? (
                <img 
                  src={diagram.imageUrl} 
                  alt={diagram.title}
                  className="w-full rounded-xl" 
                />
              ) : null}
            </div>

            {/* Text on the Right */}
            <div className="flex flex-col justify-center h-full py-4">
              <h4 className="text-lg font-bold font-manrope mb-4 text-neutral-800">{diagram.title}</h4>
              {diagram.description && (
                <p className="text-sm md:text-base text-neutral-600 font-poppins leading-relaxed">
                  {diagram.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold font-manrope">Project Not Found</h1>
        <Link href="/" className="text-brand-accent mt-4 inline-block font-poppins">Go Home</Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 pb-32 pt-12"
    >
      {/* Header Navigation */}
      <header className="mb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase font-bold text-neutral-400 hover:text-brand-accent mb-12 transition-colors font-manrope">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to work
        </Link>
        <h1 className="text-4xl md:text-6xl font-medium mb-12 leading-tight font-manrope">
          {project.title}
        </h1>
        
        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-brand-border font-poppins">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2 font-manrope">Role</h4>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2 font-manrope">Timeline</h4>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2 font-manrope">Team</h4>
            <p className="text-sm font-medium">{project.teamSize}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2 font-manrope">Tech Stack</h4>
            <p className="text-sm font-medium">{project.skills.join(', ')}</p>
          </div>
        </div>
      </header>

      {/* Hero Media */}
      <div className="mb-32">
        {project.previewMedia.type === 'video' ? (
          <video 
            src={project.previewMedia.url}
            poster={project.previewMedia.poster}
            autoPlay
            loop
            muted
            className="w-full aspect-video object-cover rounded-3xl shadow-lg"
          />
        ) : (
          <img 
            src={project.previewMedia.url} 
            alt={project.title} 
            className="w-full aspect-video object-cover rounded-3xl shadow-lg"
          />
        )}
      </div>

      {/* Main Content Sections */}
      <StandardSection sectionTitle="Overview" data={project.overview} />
      <StandardSection sectionTitle="The Problem" data={project.problem} />
      <StandardSection sectionTitle="The Solution" data={project.solution} />
      
      <FlowLayout data={project.flow} />

      <StandardSection sectionTitle="Reflection" data={project.reflection} />

      {/* Footer Navigation */}
      <div className="flex justify-center pt-24 border-t border-brand-border mt-32">
         <Link href="/" className="text-2xl font-medium hover:text-brand-accent transition-colors font-manrope">
           See more work
         </Link>
      </div>
    </motion.article>
  );
};

export default ProjectDetail;

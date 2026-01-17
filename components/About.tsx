
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <header className="mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-medium mb-12 font-serif"
        >
          Engineering is the art of <span className="text-brand-accent italic">intentional trade-offs.</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 font-serif">Philosophy</h2>
        </div>
        <div className="md:col-span-8 space-y-8 text-lg md:text-lg text-neutral-700 leading-relaxed">
          <p>
            I believe that backend engineering isn't just about writing code; It is about making deliberate design choices that lead to resilient systems under real-world conditions.
          </p>
          <p>
            My approach is rooted in simplicity favoring maintainability and scalability over hype, and building systems that remain understandable as they grow.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 font-serif">Core Stack</h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm mb-4 font-serif">Languages</h4>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>Go (Golang)</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>Rust</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 font-serif">Backend</h4>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>NestJS</li>
                <li>gRPC / Protobuf</li>
                <li>Kafka</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 font-serif">DevOps</h4>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>AWS / GCP</li>
                <li>Docker</li>
                <li>Github Actions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 font-serif">Work Culture</h2>
        </div>
        <div className="md:col-span-8 space-y-8 text-lg md:text-lg text-neutral-700 leading-relaxed">
          <p>
            I enjoy working with startups and fast-moving teams, while remaining open to larger organizations
          </p>
          <p>
            I do my best work in environments with clear ownership and structure, but I’m also comfortable taking initiative and leading efforts when clarity is missing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

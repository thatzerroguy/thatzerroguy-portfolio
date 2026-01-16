
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
          className="text-4xl md:text-6xl font-medium mb-12"
        >
          Engineering is the art of <span className="text-brand-accent italic">intentional trade-offs.</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400">Philosophy</h2>
        </div>
        <div className="md:col-span-8 space-y-8 text-lg md:text-xl text-neutral-700 leading-relaxed">
          <p>
            I believe that backend engineering isn't just about writing code; it's about designing resilient systems that can weather the storm of real-world usage.
          </p>
          <p>
            My approach is rooted in simplicity. Whether it's choosing a database engine or architecting a Kubernetes cluster, I prioritize maintainability and scalability over hype-driven development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400">Core Stack</h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm mb-4">Languages</h4>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>Go (Golang)</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>Rust</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Backend</h4>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>gRPC / Protobuf</li>
                <li>Kafka</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">DevOps</h4>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>AWS / GCP</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Nduka Ugochukwu
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">Work</Link>
          <Link href="/about" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">About</Link>
          <a href="https://linkedin.com/thatzerroguy" target="_blank" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="px-6 py-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-neutral-500 font-medium">
          © {new Date().getFullYear()} Nduka Ugochukwu. Designed & Coded with care.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">LinkedIn</a>
          <a href="#" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">GitHub</a>
          <a href="#" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

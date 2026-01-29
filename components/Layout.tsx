
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="text-sm font-medium tracking-tight relative z-50">
          Nduka  Ugochukwu
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">Work</Link>
          <Link href="/about" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">About</Link>
          <a href="www.linkedin.com/in/ugochukwu06" target="_blank" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 -mr-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-bg text-brand-text flex items-center justify-center transition-all duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-center">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
          >
            Work
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
          >
            About
          </Link>
          <a 
            href="https://linkedin.com/thatzerroguy" 
            target="_blank" 
            className="text-2xl uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      <main className="grow pt-24">
        {children}
      </main>

      <footer className="px-6 py-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-neutral-500 font-medium">
          © {new Date().getFullYear()} Nduka Ugochukwu. Designed & Coded with care.
        </div>
        <div className="flex gap-6">
          <a href="www.linkedin.com/in/ugochukwu06" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/thatzerroguy" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">GitHub</a>
          <a href="https://x.com/heythatzerroguy" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">Twitter</a>
          <a href="https://instagram.com/thatzerroguy" className="text-xs uppercase font-bold hover:text-brand-accent transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

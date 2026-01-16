'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#EFE9E3',
    primaryTextColor: '#1A1A1A',
    primaryBorderColor: '#D9CFC7',
    lineColor: '#C9B59C',
    secondaryColor: '#F9F8F6',
    tertiaryColor: '#F9F8F6',
    fontSize: '14px',
    fontFamily: 'Poppins'
  }
});

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.removeAttribute('data-processed');
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid flex justify-center py-8" ref={ref}>
      {chart}
    </div>
  );
};

export default Mermaid;

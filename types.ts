export type MediaType = 'image' | 'video';

export interface ProjectMedia {
  type: MediaType;
  url: string;
  alt?: string;
  poster?: string; // For videos
}

export interface ProjectSection {
  title: string;
  content: string;
  media?: ProjectMedia; // Optional media for standard sections (Overview, Problem, Solution, Reflection)
}

export interface FlowSection {
  title: string;
  content: string;
  diagrams: {
    title: string;
    description?: string;
    mermaidChart?: string; // For mermaid diagrams
    imageUrl?: string; // For static images
  }[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  year: string;
  teamSize: string;
  skills: string[];
  
  // New Header Media
  previewMedia: ProjectMedia;
  
  // The 5 mandatory sections
  overview: ProjectSection;
  problem: ProjectSection;
  solution: ProjectSection;
  flow: FlowSection; // Special structure for Flow
  reflection: ProjectSection;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}


export interface Project {
  id: string;
  title: string;
  company: string;
  year: string;
  description: string;
  previewImage: string;
  role: string;
  teamSize: string;
  skills: string[];
  architectureDiagram: string;
  dbSchema: string;
  apiEndpoints: ApiEndpoint[];
  infrastructure: string;
  why: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}


import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'distributed-scheduler',
    title: 'Fault-Tolerant Distributed Scheduler',
    company: 'Fintech Solutions',
    year: '2024',
    description: 'A high-throughput task scheduling engine built with Go and Redis, capable of processing 100k tasks per second across multiple regions.',
    previewImage: 'https://picsum.photos/800/600?random=1',
    role: 'Lead Backend Engineer',
    teamSize: '4 Engineers',
    skills: ['Go', 'Redis', 'Kubernetes', 'gRPC'],
    architectureDiagram: `
      graph TD
        Client[Client Application] --> API[gRPC API Gateway]
        API --> Manager[Task Manager]
        Manager --> Store[(Redis Cluster)]
        Manager --> Worker1[Worker Node A]
        Manager --> Worker2[Worker Node B]
        Worker1 --> DB[(PostgreSQL)]
        Worker2 --> DB
    `,
    dbSchema: `
      erDiagram
        TASKS ||--o{ ATTEMPTS : has
        TASKS {
          string id PK
          string payload
          timestamp scheduled_at
          string status
        }
        ATTEMPTS {
          string id PK
          string task_id FK
          timestamp started_at
          string error_log
        }
    `,
    apiEndpoints: [
      { method: 'POST', path: '/v1/tasks', description: 'Schedule a new deferred task' },
      { method: 'GET', path: '/v1/tasks/{id}', description: 'Retrieve task status and metrics' }
    ],
    infrastructure: 'Deployed on AWS EKS with Terraform. Automated canary deployments via ArgoCD.',
    why: 'We chose Redis Streams over RabbitMQ to leverage existing infrastructure while maintaining sub-millisecond persistence latencies for high-frequency task updates.'
  },
  {
    id: 'k8s-autoscaler',
    title: 'Custom Kubernetes HPA Controller',
    company: 'CloudStream',
    year: '2023',
    description: 'A specialized horizontal pod autoscaler that scales based on custom queue-depth metrics from Kafka rather than CPU/Memory.',
    previewImage: 'https://picsum.photos/800/600?random=2',
    role: 'DevOps Architect',
    teamSize: '3 Engineers',
    skills: ['Python', 'Kubernetes API', 'Prometheus', 'Kafka'],
    architectureDiagram: `
      graph LR
        Kafka[(Kafka Cluster)] --> Collector[Metric Collector]
        Collector --> Prom[Prometheus]
        Prom --> CustomHPA[Custom HPA Controller]
        CustomHPA --> K8sAPI[K8s API Server]
        K8sAPI --> Pods[App Pods]
    `,
    dbSchema: "Metric-driven, no persistent database schema required.",
    apiEndpoints: [
      { method: 'GET', path: '/metrics', description: 'Expose internal controller metrics for Prometheus' }
    ],
    infrastructure: 'Built as a native Kubernetes Operator using the Kopf framework. Monitored via Grafana dashboards.',
    why: 'Standard HPA failed during traffic bursts because CPU usage lagged behind ingestion rates. This solution reduced message processing lag by 40%.'
  },
  {
    id: 'secure-auth-service',
    title: 'Identity & Access Management Engine',
    company: 'SecureHealth',
    year: '2022',
    description: 'Enterprise-grade authentication service supporting OAuth2, OpenID Connect, and hardware-based MFA for healthcare professionals.',
    previewImage: 'https://picsum.photos/800/600?random=3',
    role: 'Senior Backend Engineer',
    teamSize: '5 Engineers',
    skills: ['Node.js', 'PostgreSQL', 'Vault', 'Docker'],
    architectureDiagram: `
      graph TD
        User --> AuthProxy[OAuth Proxy]
        AuthProxy --> Service[Auth Service]
        Service --> Vault[(HashiCorp Vault)]
        Service --> DB[(Encrypted Postgres)]
        Service --> MFA[FIDO2/MFA Provider]
    `,
    dbSchema: `
      erDiagram
        USERS ||--o{ SESSIONS : "active in"
        USERS {
          uuid id PK
          string email
          string password_hash
          boolean mfa_enabled
        }
        SESSIONS {
          string token PK
          uuid user_id FK
          timestamp expires_at
        }
    `,
    apiEndpoints: [
      { method: 'POST', path: '/auth/login', description: 'Primary login endpoint' },
      { method: 'POST', path: '/auth/token/refresh', description: 'Refresh session token' }
    ],
    infrastructure: 'Containerized with Docker Compose for local dev, managed on GCP Cloud Run for production.',
    why: 'HashiCorp Vault was used for dynamic secrets management to ensure that database credentials are never stored in environment variables or configuration files.'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Northen Tech',
    role: 'Senior Backend Engineer',
    period: '2023 - Present',
    description: 'Leading the development of core treasury automation engines. Scaling systems to handle multi-billion dollar transactions.'
  },
  {
    company: 'Woost App',
    role: 'Backend Engineer',
    period: '2021 - 2023',
    description: 'Optimized real-time payment processing flows and integrated with multiple European banking APIs.'
  },
  {
    company: 'Haqqman Technologies',
    role: 'Intern Mobile App Developer',
    period: '2019 - 2021',
    description: 'Automated infrastructure provisioning and implemented zero-trust security policies for sensitive patient data.'
  }
];

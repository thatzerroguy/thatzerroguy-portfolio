
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'distributed-scheduler',
    title: 'Fault-Tolerant Distributed Scheduler',
    role: 'Lead Backend Engineer',
    company: 'Fintech Solutions',
    year: '2024',
    teamSize: '4 Engineers',
    skills: ['Go', 'Redis', 'Kubernetes', 'gRPC'],
    previewMedia: {
      type: 'image',
      url: 'https://picsum.photos/800/600?random=1',
      alt: 'Distributed Scheduler Dashboard'
    },
    overview: {
      title: 'High-throughput task scheduling engine',
      content: 'A distributed system designed to handle high-frequency task scheduling across multiple regions. Built with Go and Redis, it processes over 100k tasks per second with sub-millisecond latency, ensuring reliability for critical financial operations.',
      media: {
        type: 'image',
        url: 'https://picsum.photos/800/400?random=10',
        alt: 'System Overview Dashboard'
      }
    },
    problem: {
      title: 'Scaling bottlenecks in legacy systems',
      content: 'The previous RabbitMQ-based system struggled with throughput limitations during peak trading hours. We faced increasing latency and occasional message loss, which was unacceptable for financial transaction processing. The system needed to scale horizontally while maintaining strict ordering guarantees.'
    },
    solution: {
      title: 'Redis Streams for persistence and specific ordering',
      content: 'We re-architected the solution using Redis Streams to leverage its low-latency persistence and consumer group features. We implemented a custom partitioner in Go to ensure even distribution of tasks across worker nodes, and deployed the system on Kubernetes for elastic scaling.',
    },
    flow: {
      title: 'Architectural System Flow',
      content: 'The system follows a producer-consumer pattern where the API Gateway ingests tasks and pushes them to Redis Streams. Worker nodes consume these tasks, process them, and update the state in PostgreSQL. The entire flow is monitored via Prometheus and Grafana.',
      diagrams: [
        {
          title: 'System Architecture',
          description: 'High-level view of the distributed components.',
          mermaidChart: `
            graph TD
              Client[Client Application] --> API[gRPC API Gateway]
              API --> Manager[Task Manager]
              Manager --> Store[(Redis Cluster)]
              Manager --> Worker1[Worker Node A]
              Manager --> Worker2[Worker Node B]
              Worker1 --> DB[(PostgreSQL)]
              Worker2 --> DB
          `
        },
        {
          title: 'Database Schema',
          description: 'Entity relationship diagram for task persistence.',
          mermaidChart: `
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
          `
        }
      ]
    },
    reflection: {
      title: 'Trade-offs in consistency vs availability',
      content: 'Choosing Redis Streams provided the necessary speed but required implementing application-level acknowledgement logic to ensure at-least-once delivery. In hindsight, this complexity was worth the performance gains, but it highlighted the importance of robust monitoring for edge cases.'
    }
  },
  {
    id: 'k8s-autoscaler',
    title: 'Custom Kubernetes HPA Controller',
    role: 'DevOps Architect',
    company: 'CloudStream',
    year: '2023',
    teamSize: '3 Engineers',
    skills: ['Python', 'Kubernetes API', 'Prometheus', 'Kafka'],
    previewMedia: {
      type: 'image',
      url: 'https://picsum.photos/800/600?random=2',
      alt: 'K8s Autoscaler Metrics'
    },
    overview: {
      title: 'Metric-driven scaling for bursty workloads',
      content: 'A custom Kubernetes Horizontal Pod Autoscaler (HPA) that scales applications based on custom queue-depth metrics from Kafka. This solution addresses the lag inherent in standard CPU-based scaling for event-driven architectures.'
    },
    problem: {
      title: 'Reactive scaling lags behind traffic bursts',
      content: 'Standard HPA failed during sudden traffic spikes because CPU usage is a lagging indicator. By the time pods scaled up, message lag had already accumulated, causing SLA breaches for real-time data processing pipelines.'
    },
    solution: {
      title: 'Proactive scaling based on queue depth',
      content: 'We built a custom controller using the Python Kopf framework that watches Kafka consumer group lag. It calculates the required number of pods to drain the lag within a target time window and directly updates the deployment replica count via the K8s API.',
      media: {
        type: 'image',
        url: 'https://picsum.photos/800/400?random=11',
        alt: 'Scaling Logic Diagram'
      }
    },
    flow: {
      title: 'Control Loop Logic',
      content: 'The controller continuously polls Prometheus for Kafka metrics. If lag exceeds the threshold, it calculates the desired replica count and patches the Deployment resource. It includes a cool-down period to prevent flapping.',
      diagrams: [
        {
          title: 'Controller Architecture',
          mermaidChart: `
            graph LR
              Kafka[(Kafka Cluster)] --> Collector[Metric Collector]
              Collector --> Prom[Prometheus]
              Prom --> CustomHPA[Custom HPA Controller]
              CustomHPA --> K8sAPI[K8s API Server]
              K8sAPI --> Pods[App Pods]
          `
        }
      ]
    },
    reflection: {
      title: 'The power of custom operators',
      content: 'Building a native K8s operator simplified the operational model significantly compared to running external scripts. It taught us that extending Kubernetes is often a cleaner solution than working around its limitations.'
    }
  },
  {
    id: 'secure-auth-service',
    title: 'Identity & Access Management Engine',
    role: 'Senior Backend Engineer',
    company: 'SecureHealth',
    year: '2022',
    teamSize: '5 Engineers',
    skills: ['Node.js', 'PostgreSQL', 'Vault', 'Docker'],
    previewMedia: {
      type: 'image', // Could be video if we had one
      url: 'https://picsum.photos/800/600?random=3',
      alt: 'Auth Service Architecture'
    },
    overview: {
      title: 'Enterprise-grade security and compliance',
      content: 'A centralized authentication service built for healthcare compliance (HIPAA). Supports OAuth2, OpenID Connect, and hardware-based Multi-Factor Authentication (MFA) to secure sensitive patient data.'
    },
    problem: {
      title: 'Fragmented identity management',
      content: 'The organization had multiple disconnected user directories, leading to security gaps and a poor user experience. We needed a unified identity provider that could handle complex permission models and strict auditing requirements.'
    },
    solution: {
      title: 'Centralized OAuth2 Provider with Vault',
      content: 'We implemented a centralized IdP using Node.js and integrated HashiCorp Vault for dynamic secret management. This ensured that database credentials were rotated automatically and never exposed in code repositories.',
    },
    flow: {
      title: 'Authentication & Token flow',
      content: 'Users authenticate via the OAuth Proxy. Upon success, a JWT is issued. All sensitive operations require MFA verification using FIDO2/WebAuthn standards.',
      diagrams: [
        {
          title: 'Auth Flow',
          mermaidChart: `
            graph TD
              User --> AuthProxy[OAuth Proxy]
              AuthProxy --> Service[Auth Service]
              Service --> Vault[(HashiCorp Vault)]
              Service --> DB[(Encrypted Postgres)]
              Service --> MFA[FIDO2/MFA Provider]
          `
        },
        {
          title: 'User Schema',
          mermaidChart: `
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
          `
        }
      ]
    },
    reflection: {
      title: 'Security is a continuous process',
      content: 'Implementing hardware MFA was challenging due to browser compatibility issues at the time, but it significantly raised the security bar. We learned that user experience in security products is just as important as the underlying cryptography.'
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'IDCODE Nigeria',
    role: 'Backend Engineer',
    period: '2025 - Present',
    description: 'Engineering the development and maintenance of event management and identity management systems. Scaling systems to thousands of users and ensuring high availability.'
  },
  {
    company: 'Woost App',
    role: 'Backend Engineer',
    period: 'Jan - Jul 2025',
    description: 'Engineered and developed the backend infrastructure for Woost App, an AI-powered system to monitoring and detecting PCOS in women.'
  },
  {
    company: 'Haqqman Technologies',
    role: 'Intern Mobile App Developer',
    period: 'Aug - Nov 2024',
    description: 'Focused on developing and maintaining Haqqman Technologies\' mobile apps, including EstatePro, an estate management system.'
  },
  {
    company: 'National Centre for Artificial Intelligence and Robotics',
    role: 'Intern Machine Learning Engineer',
    period: 'Aug - Nov 2023',
    description: 'Developed machine learning models to be used in various sectors in Nigeria, including healthcare, school management, etc.'
  }
];

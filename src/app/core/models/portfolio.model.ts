export interface ProfileInfo {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  cvPath: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface TechLayer {
  id: 'frontend' | 'backend' | 'security';
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: 'Ciberseguridad' | 'Desarrollo' | 'Formación';
  skills: string[];
}
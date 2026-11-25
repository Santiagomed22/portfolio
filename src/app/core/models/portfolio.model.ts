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

export interface SkillCategory {
  title: string;
  tag: string;
  items: string[];
}

export interface DiplomaItem {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface CertificationCategory {
  id: string;
  category: 'Ciberseguridad' | 'IA' | 'BACK' | 'FRONT';
  tag: string;
  description: string;
  diplomas: DiplomaItem[];
}
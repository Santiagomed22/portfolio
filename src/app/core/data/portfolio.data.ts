import {
  ProfileInfo,
  TechLayer,
  ExperienceItem,
  CertificationItem,
} from '../models/portfolio.model';

export const PROFILE_DATA: ProfileInfo = {
  name: 'Santiago Andrés Rudas',
  tagline: 'Construyo aplicaciones web completas y seguras de extremo a extremo.',
  bio: 'Tecnólogo en Análisis y Desarrollo de Software con enfoque híbrido en Frontend, Backend y ciberseguridad.',
  location: 'Medellín / Bello, Colombia',
  cvPath: 'assets/docs/CV_Santiago_Rudas.pdf',
  socials: {
    github: 'https://github.com/Santiagomed22',
    linkedin: 'https://linkedin.com/in/tu-usuario',
  },
};

export const TECH_LAYERS: TechLayer[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces modernas y responsivas',
    description: 'Desarrollo de aplicaciones web modulares con Angular y TypeScript.',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend & Datos',
    subtitle: 'Lógica, bases de datos y despliegue',
    description: 'Construcción de lógica de negocio, bases de datos relacionales y despliegue en la nube.',
    skills: ['Java', 'Python', 'MySQL', 'Firebase'],
  },
  {
    id: 'security',
    title: 'Ciberseguridad',
    subtitle: 'Enfoque ofensivo y defensivo',
    description: 'Análisis de seguridad, scripting en Python y buenas prácticas.',
    skills: ['Pentesting Básico', 'Python', 'Linux', 'Seguridad Web'],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Desarrollador Web (Proyectos Propios y Académicos)',
    company: 'Desarrollo Independiente',
    period: 'Actualidad',
    type: 'Desarrollo de Software',
    description: 'Desarrollo y despliegue de aplicaciones web con enfoque full stack y seguridad.',
    achievements: [
      'Aplicación web desplegada en Angular y Firebase.',
      'Trabajo con MySQL, Java y Python.',
    ],
    tags: ['Angular', 'Firebase', 'Java', 'Python', 'MySQL'],
  },
  {
    role: 'Operario de Producción',
    company: 'Sector Manufactura',
    period: 'Experiencia Laboral',
    type: 'Disciplina Operativa',
    description: 'Ejecución de procesos operativos con orden, constancia y trabajo en equipo.',
    achievements: [
      'Cumplimiento de estándares y tiempos de operación.',
      'Resolución práctica de incidencias en línea.',
    ],
    tags: ['Disciplina', 'Trabajo en Equipo', 'Resolución de Problemas'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Bootcamp / Diplomado en Ciberseguridad, Pentesting y Python',
    issuer: 'Formación Especializada',
    date: '2026',
    category: 'Ciberseguridad',
    skills: ['Pentesting Básico', 'Python', 'Seguridad'],
  },
];
import {
  ProfileInfo,
  TechLayer,
  ExperienceItem,
  CertificationCategory,
  SkillCategory,
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

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend',
    tag: 'UI / WEB',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend & Bases de Datos',
    tag: 'SERVER / DB',
    items: ['Java', 'Python', 'MySQL', 'APIs REST', 'Firebase'],
  },
  {
    title: 'Ciberseguridad & Herramientas',
    tag: 'SEC / OPS',
    items: ['Pentesting Básico', 'Análisis de Vulnerabilidades', 'Git', 'GitHub', 'Linux'],
  },
];

export const CERTIFICATIONS_DATA: CertificationCategory[] = [
  {
    id: 'ciberseguridad',
    category: 'Ciberseguridad',
    tag: 'SEC / PENTEST',
    description: 'Bootcamps y diplomados en seguridad informática, análisis de vulnerabilidades y pentesting.',
    diplomas: [
      {
        title: 'Peritaje e informática forense',
        issuer: 'HackerMentor',
        date: '2026',
        imageUrl: 'images/Ciberseguridad-images/PERITAJE-INFORMATICAFORENSE.png',
      },
      {
        title: 'PMJ Certified',
        issuer: 'HackerMentor',
        date: '2025',
        imageUrl: 'images/Ciberseguridad-images/CIBERSEGURIDADYHACKING.png',
      },
      {
        title: 'Fundamentos de ciberseguridad',
        issuer: 'Santander Open Academy',
        date: '3 de noviembre de 2026',
        imageUrl: 'images/Ciberseguridad-images/FUNDAMENTOS.png',
      },
      {
        title: 'Ciberseguridad en el Teletrabajo',
        issuer: 'Google Actívate',
        date: '3 de noviembre de 2026',
        imageUrl: 'images/Ciberseguridad-images/INCIBE1CT.png',
      },
    ],
  },

  {
    id: 'ia',
    category: 'IA',
    tag: 'AI / AUTOMATION',
    description: 'Formación en inteligencia artificial aplicada, ingeniería de prompts y flujos automatizados.',
    diplomas: [
      {
        title: 'Certificado Hackaton',
        issuer: 'Oracle Next Education',
        date: '31 de agosto del 2026',
        imageUrl: 'images/IA-images/ALURA.png',
      },
      {
      title: 'Certificate of completion: AI Capabilities and Limitations',
      issuer: 'Anthropic',
      date: '2026',
      imageUrl: 'images/IA-images/ANTHROPIC.png',
    },
    {
      title: 'Claude 101',
      issuer: 'Anthropic',
      date: '2026',
      imageUrl: 'images/IA-images/CLAUDE101.png',
    },
    {
      title: 'Domina la IA con Gemini',
      issuer: 'Santander Open Academy',
      date: '2026',
      imageUrl: 'images/IA-images/IACONGEMINI.png',
    },
    {
      title: 'Cursor con Python',
      issuer: 'Santander Open Academy',
      date: '2026',
      imageUrl: 'images/IA-images/PYTHON+IA.png',
    },
    ],
  },
  {
    id: 'back',
    category: 'BACK',
    tag: 'SERVER / DB',
    description: 'Certificaciones en Python, Java, lógica de servidor, APIs y bases de datos relacionales.',
    diplomas: [
      {
        title: 'Python',
        issuer: 'Santander Open Academy',
        date: '2026',
        imageUrl: 'images/Backend-images/PYTHON1.png',
      },
      {
        title: 'Implementacion de SOFTWARE',
        issuer: 'Politecnico Internacional',
        date: '29 de julio del 2026',
        imageUrl: 'images/Backend-images/PI-BACK.png',
      },
    ],
  },
  {
    id: 'front',
    category: 'FRONT',
    tag: 'UI / WEB',
    description: 'Desarrollo web moderno con Angular, TypeScript, JavaScript, HTML5, CSS3 y diseño responsivo.',
    diplomas: [
      {
        title: 'Desarrollo Frontend con Angular y TypeScript',
        issuer: 'Plataforma / Institución',
        date: '2026',
        imageUrl: 'images/Front-images/diploma-1.png',
      },
    ],
  },
];
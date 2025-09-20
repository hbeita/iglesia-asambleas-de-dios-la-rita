export interface FoundationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface DiscipleStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  icon: string;
  color: string;
}

export interface CommitmentLevel {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  icon: string;
  color: string;
  level: number;
}

export interface DisciplePlace {
  id: string;
  title: string;
  description: string;
  activities: string[];
  icon: string;
  color: string;
}

// Fundamento de la Iglesia
export const foundation: FoundationItem[] = [
  {
    id: "vision",
    title: "Visión",
    description:
      "Ser la iglesia que trabaja para que en La Rita y el mundo todos sean salvos",
    icon: "Eye",
    details:
      "Nuestra visión es clara y directa: trabajar incansablemente para que cada persona en La Rita y en el mundo entero tenga la oportunidad de conocer a Cristo y ser salva. Esta visión nos impulsa a ser una iglesia activa en la evangelización y el discipulado.",
  },
  {
    id: "mission",
    title: "Misión",
    description:
      "Ser y hacer discípulos llenos del Espíritu Santo, que evangelizan, hacen misiones y plantan iglesias cumpliendo la gran comisión",
    icon: "Target",
    details:
      "Nuestra misión se centra en formar discípulos auténticos que no solo conozcan a Cristo, sino que vivan llenos del Espíritu Santo y se multipliquen a través de la evangelización, las misiones y la plantación de nuevas iglesias.",
  },
  {
    id: "mm33",
    title: "Iniciativa MM33",
    description:
      "MM33 es la iniciativa global de Asambleas de Dios de celebrar el 2000 aniversario de Cristo con 100 millones de creyentes y 1 millón de iglesias en el mundo",
    icon: "Globe",
    details:
      "MM33 simboliza los 2000 años desde Cristo (MM = 2000 en números romanos + 33 = 2033). Significa 'Su Mandato, nuestra Misión'. La iglesia de La Rita tiene su cuota en esta iniciativa global de crecimiento y multiplicación.",
  },
];

// Pilares de la Iglesia
export const pillars: Pillar[] = [
  {
    id: "adoracion",
    title: "Adoración",
    subtitle: "Avivamiento",
    description:
      "Cultivamos una vida de adoración genuina que trae avivamiento a nuestros corazones y a nuestra comunidad",
    icon: "Heart",
    color: "bg-red-500",
  },
  {
    id: "ir",
    title: "Ir",
    subtitle: "Evangelismo - Misiones - Plantación de Iglesias",
    description:
      "Salimos a compartir el evangelio, hacer misiones y plantar nuevas iglesias en cumplimiento de la gran comisión",
    icon: "Send",
    color: "bg-blue-500",
  },
  {
    id: "conectar",
    title: "Conectar",
    subtitle: "Comunión",
    description:
      "Fomentamos la comunión fraternal y las relaciones auténticas entre los miembros de la iglesia",
    icon: "Users",
    color: "bg-green-500",
  },
  {
    id: "crecer",
    title: "Crecer",
    subtitle: "Enseñanza",
    description:
      "Proporcionamos enseñanza sólida y sistemática de la Palabra de Dios para el crecimiento espiritual",
    icon: "BookOpen",
    color: "bg-purple-500",
  },
  {
    id: "servir",
    title: "Servir",
    subtitle: "Ministerio",
    description:
      "Desarrollamos el servicio desinteresado y el uso de dones espirituales para edificar el cuerpo de Cristo",
    icon: "Hand",
    color: "bg-orange-500",
  },
];

// Etapas del Discipulado
export const discipleStages: DiscipleStage[] = [
  {
    id: "seguidor",
    title: "Seguidor",
    subtitle: "Observador (Hijo)",
    description: "Ven y aprende - Etapa inicial de observación y aprendizaje",
    activities: [
      "Evangelizado",
      "Inclusión a un grupo pequeño",
      "Verificación de conversión",
      "Consolidación",
    ],
    icon: "User",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "discipulo",
    title: "Discípulo",
    subtitle: "Aprendiz (Hermano)",
    description:
      "Participa y sirve - Desarrollo de hábitos espirituales y participación activa",
    activities: [
      "Desarrollo de hábitos espirituales (Oración, palabra, ayuno, dar, comunión, evangelismo)",
      "Vivencias prácticas",
      "Inclusión a ministerios",
      "Formación Bíblica y Teológica",
      "Entrenamiento discipulador",
    ],
    icon: "UserCheck",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "discipulador",
    title: "Discipulador",
    subtitle: "Compañero (Colaborador)",
    description: "Envío - Liderazgo y multiplicación de discípulos",
    activities: [
      "Primeros pasos supervisados con su grupo pequeño",
      "El discipulador pasa a ser un amigo - mentor, consejero y guía",
      "El discípulo pasa de tener cierta dependencia del discipulador, a tener una total dependencia de Cristo",
    ],
    icon: "UserCog",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "plantador",
    title: "Plantador de Iglesias",
    subtitle: "Líder Vocacional",
    description:
      "Dedicación a tiempo completo o medio tiempo a la obra del Señor",
    activities: [
      "Ser un discipulador experimentado",
      "Cursar los módulos de plantación de iglesias",
      "Comenzar el Instituto bíblico",
      "Dedicación vocacional o bivocacional",
    ],
    icon: "Church",
    color: "bg-red-100 text-red-800",
  },
];

// Escalera del Compromiso
export const commitmentLevels: CommitmentLevel[] = [
  {
    id: "seguidor",
    title: "Seguidor",
    description:
      "Persona que asiste a la iglesia estando o no convertido a Cristo, pero que no tiene ningún compromiso con la membresía de la iglesia",
    requirements: [
      "Aceptar a Cristo en su corazón",
      "Comprometerse con el cuerpo de Cristo",
      "Entrar en un grupo de alcance hasta que adquieran un compromiso",
    ],
    icon: "User",
    color: "bg-gray-100 text-gray-800",
    level: 1,
  },
  {
    id: "discipulo",
    title: "Discípulo",
    description:
      "Asistente fiel que ha entregado su vida a Cristo y que desea comprometerse con la iglesia como miembro del cuerpo de Cristo",
    requirements: [
      "Entra a un grupo de discipulado",
      "Cumple con los estándares del creyente",
      "Se bautiza en agua",
      "Va a un encuentro",
      "Finaliza el proceso de formación",
      "Está integrado al servicio",
    ],
    icon: "UserCheck",
    color: "bg-blue-100 text-blue-800",
    level: 2,
  },
  {
    id: "discipulador",
    title: "Discipulador",
    description:
      "Miembro comprometido con Cristo y su obra, dispuesto a multiplicarse en otros hasta que alcancen la medida de Cristo",
    requirements: [
      "Ser un discípulo maduro",
      "Tener experiencia en el servicio",
      "Estar dispuesto a formar a otros",
      "Multiplicarse en otros como él o mejores",
    ],
    icon: "UserCog",
    color: "bg-green-100 text-green-800",
    level: 3,
  },
  {
    id: "plantador",
    title: "Plantador de Iglesias",
    description:
      "Persona que ha decidido dedicarse a la obra a tiempo completo o medio tiempo, de manera vocacional o bivocacional",
    requirements: [
      "Ser un discipulador experimentado",
      "Cursar los módulos de plantación de iglesias",
      "Comenzar el Instituto bíblico",
      "Tener una comunidad donde empezar",
      "Estar equipado formalmente para la tarea",
    ],
    icon: "Church",
    color: "bg-purple-100 text-purple-800",
    level: 4,
  },
];

// Lugares de Discipulado
export const disciplePlaces: DisciplePlace[] = [
  {
    id: "campo",
    title: "El Campo",
    description: "Evangelismo puro y alcance comunitario",
    activities: [
      "Evangelismo en las calles",
      "Campañas evangelísticas",
      "Alcance comunitario",
      "Testimonio público",
    ],
    icon: "MapPin",
    color: "bg-green-500",
  },
  {
    id: "hogares",
    title: "Los Hogares",
    description: "Discipulado íntimo y formación personal",
    activities: [
      "Verificación de conversión",
      "Desarrollo de hábitos espirituales",
      "Entrenamiento discipulador supervisado",
      "Envío y multiplicación",
    ],
    icon: "Home",
    color: "bg-blue-500",
  },
  {
    id: "iglesia",
    title: "La Iglesia",
    description: "Formación bíblica y teológica sistemática",
    activities: [
      "Formación Bíblica",
      "Formación teológica",
      "Enseñanza sistemática",
      "Preparación ministerial",
    ],
    icon: "Church",
    color: "bg-purple-500",
  },
];

// Modelo de trabajo
export const workModel = {
  title: "Procesos Hechos 2: Una iglesia en el poder del Espíritu Santo",
  description:
    "El modelo que trabajamos proviene de Asambleas de Dios y se conoce como 'Procesos Hechos 2: Una iglesia en el poder del Espíritu Santo'",
  details:
    "Este modelo se basa en el capítulo 2 de Hechos, donde vemos cómo la iglesia primitiva funcionaba en el poder del Espíritu Santo, con adoración, comunión, enseñanza y servicio.",
};

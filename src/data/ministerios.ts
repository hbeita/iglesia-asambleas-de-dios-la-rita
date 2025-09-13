export interface Ministerio {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category:
    | "niños"
    | "jóvenes"
    | "adultos"
    | "música"
    | "evangelismo"
    | "servicio";
  schedule?: string;
  location: string;
  leader?: {
    name: string;
    phone?: string;
    email?: string;
  };
  image: string;
  ageRange?: string;
  requirements?: string[];
  activities?: string[];
}

export const ministerios: Ministerio[] = [
  {
    id: "ministerio-infantil",
    name: "Ministerio Infantil",
    description:
      "Un ministerio dedicado a enseñar a los niños sobre el amor de Dios a través de actividades divertidas, historias bíblicas y juegos educativos. Nuestro objetivo es formar una base sólida de fe en los más pequeños.",
    shortDescription:
      "Enseñamos a los niños sobre el amor de Dios a través de actividades divertidas y educativas.",
    category: "niños",
    location: "Templo",
    image: "/images/ministerio-infantil.jpg",
    ageRange: "3-12 años",
    requirements: ["Autorización de padres"],
    activities: [
      "Historias bíblicas",
      "Manualidades",
      "Cantos y alabanzas",
      "Juegos educativos",
    ],
  },
  {
    id: "ministerio-jovenes",
    name: "Ministerio de Jóvenes",
    description:
      "Un espacio dinámico donde los jóvenes pueden crecer en su fe, desarrollar amistades cristianas y descubrir su propósito en Dios. Incluye estudios bíblicos, actividades recreativas y proyectos de servicio comunitario.",
    shortDescription:
      "Un espacio dinámico para que los jóvenes crezcan en su fe y desarrollen amistades cristianas.",
    category: "jóvenes",
    location: "Templo",
    image: "/images/ministerio-jovenes.jpg",
    ageRange: "13-25 años",
    requirements: [
      "Compromiso de asistencia regular",
      "Participación en actividades",
    ],
    activities: [
      "Estudios bíblicos",
      "Actividades recreativas",
      "Proyectos de servicio",
      "Retiros espirituales",
    ],
  },
  {
    id: "ministerio-adoracion",
    name: "Ministerio de Adoración",
    description:
      "El equipo de adoración lidera los tiempos de alabanza y adoración en nuestros servicios. Incluye músicos, vocalistas y el equipo técnico que hace posible que la congregación adore a Dios en espíritu y en verdad.",
    shortDescription:
      "Lideramos los tiempos de alabanza y adoración en nuestros servicios.",
    category: "música",
    location: "Templo",
    image: "/images/ministerio-adoracion.jpg",
    ageRange: "16+ años",
    requirements: [
      "Habilidad musical básica",
      "Compromiso de ensayo",
      "Vida cristiana ejemplar",
    ],
    activities: [
      "Ensayo musical",
      "Servicios de adoración",
      "Eventos especiales",
      "Capacitación técnica",
    ],
  },
  {
    id: "ministerio-damas",
    name: "Ministerio de Damas",
    description:
      "Un ministerio que reúne a las mujeres de todas las edades para crecer juntas en la fe, apoyarse mutuamente y servir a la comunidad. Incluye estudios bíblicos, actividades de servicio y eventos de compañerismo.",
    shortDescription:
      "Reunimos a las mujeres para crecer en la fe, apoyarse mutuamente y servir a la comunidad.",
    category: "adultos",
    location: "Templo",
    image: "/images/ministerio-damas.jpg",
    ageRange: "18+ años",
    requirements: ["Membresía en la iglesia", "Disponibilidad para servir"],
    activities: [
      "Estudios bíblicos",
      "Actividades de servicio",
      "Eventos de compañerismo",
      "Proyectos comunitarios",
    ],
  },
  {
    id: "ministerio-varones",
    name: "Ministerio de Varones",
    description:
      "Un espacio donde los hombres pueden fortalecer su fe, desarrollar liderazgo cristiano y formar vínculos de amistad. Incluye estudios bíblicos, actividades de servicio y proyectos de construcción y mantenimiento.",
    shortDescription:
      "Fortalecimiento de la fe masculina y desarrollo de liderazgo cristiano.",
    category: "adultos",
    location: "Templo",
    image: "/images/ministerio-varones.jpg",
    ageRange: "18+ años",
    requirements: ["Membresía en la iglesia", "Disponibilidad para proyectos"],
    activities: [
      "Estudios bíblicos",
      "Proyectos de construcción",
      "Actividades de servicio",
      "Retiros masculinos",
    ],
  },
  {
    id: "ministerio-evangelismo",
    name: "Ministerio de Evangelismo",
    description:
      "Dedicado a llevar el mensaje del evangelio a nuestra comunidad y más allá. Organizamos campañas evangelísticas, visitas a hogares, distribución de literatura cristiana y eventos de alcance comunitario.",
    shortDescription:
      "Llevamos el mensaje del evangelio a nuestra comunidad y más allá.",
    category: "evangelismo",
    location: "Templo",
    image: "/images/ministerio-evangelismo.jpg",
    ageRange: "16+ años",
    requirements: ["Entrenamiento en evangelismo", "Compromiso de alcance"],
    activities: [
      "Campañas evangelísticas",
      "Visitas a hogares",
      "Distribución de literatura",
      "Eventos comunitarios",
    ],
  },
];

export const ministerioCategories = [
  { id: "todos", name: "Todos los Ministerios" },
  { id: "niños", name: "Niños" },
  { id: "jóvenes", name: "Jóvenes" },
  { id: "adultos", name: "Adultos" },
  { id: "música", name: "Música" },
  { id: "evangelismo", name: "Evangelismo" },
  { id: "servicio", name: "Servicio" },
];

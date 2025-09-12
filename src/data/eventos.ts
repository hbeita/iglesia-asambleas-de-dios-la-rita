export interface Evento {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  category: "servicio" | "conferencia" | "comunitario" | "especial" | "retiro";
  image: string;
  registrationRequired: boolean;
  registrationUrl?: string;
  maxAttendees?: number;
  currentAttendees?: number;
  price?: number;
  organizer: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
  tags: string[];
  featured: boolean;
}

export const eventos: Evento[] = [
  {
    id: "conferencia-avivamiento-2024",
    title: "Conferencia de Avivamiento 2024",
    description:
      "Una conferencia especial de tres días donde experimentaremos un avivamiento espiritual profundo. Contaremos con predicadores invitados, tiempos de adoración intensa y ministerio personal.",
    shortDescription:
      "Conferencia especial de tres días con predicadores invitados y ministerio personal.",
    date: "2024-10-15",
    time: "7:00 PM",
    endTime: "10:00 PM",
    location: "Templo Principal",
    category: "conferencia",
    image: "/images/conferencia-avivamiento.jpg",
    registrationRequired: true,
    registrationUrl: "/registro/conferencia-avivamiento",
    maxAttendees: 500,
    currentAttendees: 320,
    price: 0,
    organizer: "Iglesia Asambleas de Dios La Rita",
    contact: {
      name: "Pastor Principal",
      phone: "+506 2222-3333",
      email: "info@asambleasdelarita.cr",
    },
    tags: ["avivamiento", "conferencia", "predicación"],
    featured: true,
  },
  {
    id: "retiro-jovenes-primavera",
    title: "Retiro de Jóvenes Primavera 2024",
    description:
      "Un fin de semana de retiro espiritual para jóvenes donde podrán desconectarse del mundo y conectarse más profundamente con Dios. Incluye actividades recreativas, estudios bíblicos y tiempo de compañerismo.",
    shortDescription:
      "Fin de semana de retiro espiritual para jóvenes con actividades recreativas y estudios bíblicos.",
    date: "2024-11-02",
    time: "6:00 PM",
    endTime: "2024-11-03 4:00 PM",
    location: "Centro de Retiros Monte Verde",
    category: "retiro",
    image: "/images/retiro-jovenes.jpg",
    registrationRequired: true,
    registrationUrl: "/registro/retiro-jovenes",
    maxAttendees: 80,
    currentAttendees: 45,
    price: 25000,
    organizer: "Ministerio de Jóvenes",
    contact: {
      name: "Carlos Rodríguez",
      phone: "+506 8888-2222",
      email: "carlos@asambleasdelarita.cr",
    },
    tags: ["jóvenes", "retiro", "primavera"],
    featured: true,
  },
  {
    id: "campaña-evangelistica-comunidad",
    title: "Campaña Evangelística Comunitaria",
    description:
      "Una campaña especial de evangelismo en nuestra comunidad local. Distribuiremos literatura cristiana, realizaremos visitas a hogares y tendremos un evento especial al aire libre con música, testimonio y predicación.",
    shortDescription:
      "Campaña de evangelismo en la comunidad con distribución de literatura y evento al aire libre.",
    date: "2024-10-28",
    time: "3:00 PM",
    endTime: "7:00 PM",
    location: "Parque Central",
    category: "comunitario",
    image: "/images/campana-evangelistica.jpg",
    registrationRequired: false,
    maxAttendees: 1000,
    currentAttendees: 0,
    price: 0,
    organizer: "Ministerio de Evangelismo",
    contact: {
      name: "Pedro Jiménez",
      phone: "+506 8888-6666",
      email: "pedro@asambleasdelarita.cr",
    },
    tags: ["evangelismo", "comunidad", "al aire libre"],
    featured: false,
  },
  {
    id: "servicio-accion-gracias",
    title: "Servicio de Acción de Gracias",
    description:
      "Un servicio especial de acción de gracias donde como congregación agradeceremos a Dios por todas sus bendiciones. Incluirá testimonios, alabanzas especiales y una ofrenda especial de agradecimiento.",
    shortDescription:
      "Servicio especial de acción de gracias con testimonios y alabanzas especiales.",
    date: "2024-11-24",
    time: "10:30 AM",
    endTime: "12:30 PM",
    location: "Templo Principal",
    category: "especial",
    image: "/images/servicio-accion-gracias.jpg",
    registrationRequired: false,
    maxAttendees: 400,
    currentAttendees: 0,
    price: 0,
    organizer: "Iglesia Asambleas de Dios La Rita",
    contact: {
      name: "Pastor Principal",
      phone: "+506 2222-3333",
      email: "info@asambleasdelarita.cr",
    },
    tags: ["acción de gracias", "especial", "testimonios"],
    featured: false,
  },
  {
    id: "conferencia-mujeres-2024",
    title: "Conferencia de Mujeres 2024",
    description:
      'Una conferencia especial para mujeres de todas las edades. Contaremos con oradoras invitadas, talleres prácticos, tiempo de compañerismo y ministerio personal. Tema: "Mujeres de Fe, Mujeres de Impacto".',
    shortDescription:
      "Conferencia especial para mujeres con oradoras invitadas y talleres prácticos.",
    date: "2024-12-07",
    time: "9:00 AM",
    endTime: "5:00 PM",
    location: "Templo Principal",
    category: "conferencia",
    image: "/images/conferencia-mujeres.jpg",
    registrationRequired: true,
    registrationUrl: "/registro/conferencia-mujeres",
    maxAttendees: 200,
    currentAttendees: 120,
    price: 15000,
    organizer: "Ministerio de Damas",
    contact: {
      name: "Rosa Fernández",
      phone: "+506 8888-4444",
      email: "rosa@asambleasdelarita.cr",
    },
    tags: ["mujeres", "conferencia", "fe"],
    featured: true,
  },
  {
    id: "evento-ninos-navidad",
    title: "Evento de Navidad para Niños",
    description:
      "Un evento especial de Navidad diseñado para los niños de nuestra congregación y la comunidad. Incluirá una obra de teatro navideña, juegos, regalos y la historia del nacimiento de Jesús.",
    shortDescription:
      "Evento especial de Navidad para niños con obra de teatro, juegos y regalos.",
    date: "2024-12-21",
    time: "2:00 PM",
    endTime: "5:00 PM",
    location: "Templo Principal",
    category: "especial",
    image: "/images/evento-ninos-navidad.jpg",
    registrationRequired: true,
    registrationUrl: "/registro/evento-navidad",
    maxAttendees: 150,
    currentAttendees: 85,
    price: 0,
    organizer: "Ministerio Infantil",
    contact: {
      name: "María González",
      phone: "+506 8888-1111",
      email: "maria@asambleasdelarita.cr",
    },
    tags: ["niños", "navidad", "especial"],
    featured: false,
  },
];

export const eventCategories = [
  { id: "todos", name: "Todos los Eventos" },
  { id: "servicio", name: "Servicios" },
  { id: "conferencia", name: "Conferencias" },
  { id: "comunitario", name: "Comunitarios" },
  { id: "especial", name: "Especiales" },
  { id: "retiro", name: "Retiros" },
];

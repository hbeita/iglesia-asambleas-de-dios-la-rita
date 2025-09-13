import { CHURCH_INFO } from "../utils/constants";

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
    id: "servicio-especial-septiembre-13",
    title: "Servicio Especial - La Importancia de Nuestra Familia",
    description:
      "Será un privilegio contar con invitados especiales que nos estarán acompañando en nuestro servicio. El tema de la noche será 'La importancia de nuestra familia', un mensaje que bendecirá tu vida y tu hogar. 💚 Además, seguimos celebrando juntos nuestro mes patrio 🇨🇷 y como iglesia también damos gracias a Dios por lo que Él está haciendo en medio nuestro.\n\nInvitados:\n• Ejecutivo de Asambleas de Dios\n• Directora de Castillo del Rey",
    shortDescription:
      "Servicio especial con invitados especiales. Tema: 'La importancia de nuestra familia'. Celebrando el mes patrio.",
    date: "2025-09-13",
    time: "7:00 PM",
    endTime: "9:00 PM",
    location: "Iglesia La Rita Asambleas de Dios - La Rita Guapiles",
    category: "servicio",
    image: "/images/sabado13setiembre.png",
    registrationRequired: false,
    maxAttendees: 300,
    currentAttendees: 0,
    price: 0,
    organizer: CHURCH_INFO.name,
    contact: {
      name: "Pastor Principal",
      phone: CHURCH_INFO.phone,
      email: CHURCH_INFO.email,
    },
    tags: ["familia", "servicio especial", "invitados", "mes patrio"],
    featured: true,
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

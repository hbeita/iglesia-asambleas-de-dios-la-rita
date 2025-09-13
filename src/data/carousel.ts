import type { CarouselSlide } from "../components/ui/carousel";
import { eventos } from "./eventos";

export const carouselSlides: CarouselSlide[] = [
  {
    id: "welcome-banner",
    image: "/src/assets/pastors.png", // Using the pastors image as a welcome banner
    title: "Bienvenidos a Nuestra Iglesia",
    subtitle: "Iglesia Asambleas de Dios La Rita",
    description:
      "Transformando vidas, construyendo comunidad. Únete a nuestra familia de fe y descubre el amor de Cristo.",
    buttonText: "Visítanos",
    buttonLink: "/contacto",
    type: "banner",
  },
  {
    id: "main-message",
    image: "/src/assets/pastors.png", // Using pastors image as placeholder
    title: "Dios Te Ama",
    subtitle: "Mensaje Principal",
    description:
      "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna. - Juan 3:16",
    buttonText: "Conocer Más",
    buttonLink: "/sobre-nosotros",
    type: "message",
  },
  // Add featured events as carousel slides
  ...eventos
    .filter((event) => event.featured)
    .slice(0, 2)
    .map((event) => ({
      id: `event-${event.id}`,
      image: event.image,
      title: event.title,
      subtitle: "Próximo Evento",
      description: event.shortDescription,
      buttonText: "Más Información",
      buttonLink: "/eventos",
      type: "event" as const,
    })),
];

// Additional banner slides that can be easily managed
export const bannerSlides: CarouselSlide[] = [
  {
    id: "sunday-service",
    image: "/src/assets/pastors.png", // Using pastors image as placeholder
    title: "Servicio Dominical",
    subtitle: "Todos los Sábados",
    description:
      "Únete a nosotros cada sábado a las 7:00 PM para un tiempo de adoración, enseñanza bíblica y compañerismo.",
    buttonText: "Horarios",
    buttonLink: "/contacto",
    type: "banner",
  },
  {
    id: "prayer-meeting",
    image: "/src/assets/pastors.png", // Using pastors image as placeholder
    title: "Ayuno y Oración",
    subtitle: "Todos los Martes",
    description:
      "Comenzamos la semana con un tiempo especial de ayuno y oración a las 9:00 AM.",
    buttonText: "Participar",
    buttonLink: "/contacto",
    type: "banner",
  },
  {
    id: "ministries",
    image: "/src/assets/pastors.png", // Using pastors image as placeholder
    title: "Nuestros Ministerios",
    subtitle: "Para Todas las Edades",
    description:
      "Descubre cómo puedes servir y crecer en la fe a través de nuestros diversos ministerios.",
    buttonText: "Ver Ministerios",
    buttonLink: "/ministerios",
    type: "banner",
  },
];

// Combine all slides for the main carousel
export const allCarouselSlides: CarouselSlide[] = [
  ...carouselSlides,
  ...bannerSlides,
];

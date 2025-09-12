export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  education?: string[];
  experience?: string[];
  specialties?: string[];
}

export const pastoralTeam: TeamMember[] = [
  {
    id: "pastor-principal",
    name: "Pastor Jhon Antony Badilla",
    position: "Pastor Principal",
    bio: "El Pastor Jhon Antony Badilla lidera nuestra congregación con pasión y dedicación. Su compromiso es guiar a la iglesia hacia un crecimiento espiritual sólido y una comunidad unida en la fe.",
    image: "/images/pastor-principal.jpg",
    email: "pastor@asambleasdelarita.cr",
    phone: "+506 2222-3333",
    socialMedia: {
      facebook: "https://facebook.com/pastorjhonantony",
      instagram: "https://instagram.com/pastorjhonantony",
    },
    education: ["Licenciatura en Teología - Seminario Bíblico de Costa Rica"],
    experience: [
      "Pastor Principal - Iglesia Asambleas de Dios La Rita (presente)",
    ],
    specialties: [
      "Predicación",
      "Liderazgo",
      "Consejería Pastoral",
      "Desarrollo de Ministerios",
    ],
  },
  {
    id: "pastora-asociada",
    name: "Hilary Ortega",
    position: "Pastora",
    bio: "Hilary Ortega se une a nuestro equipo pastoral trayendo consigo una pasión especial por el ministerio y el servicio a la comunidad. Su corazón está en ver a las familias fortalecidas en la fe y en construir una comunidad unida.",
    image: "/images/pastora-asociada.jpg",
    email: "hilary@asambleasdelarita.cr",
    phone: "+506 2222-4444",
    socialMedia: {
      facebook: "https://facebook.com/hilaryortega",
      instagram: "https://instagram.com/hilaryortega",
    },
    education: ["Licenciatura en Teología - Seminario Bíblico de Costa Rica"],
    experience: [
      "Pastora Asociada - Iglesia Asambleas de Dios La Rita (presente)",
    ],
    specialties: [
      "Ministerio de Mujeres",
      "Consejería Familiar",
      "Desarrollo de Líderes",
      "Evangelismo",
    ],
  },
];

export const churchHistory = {
  founded: "1985",
  founders: "Pastor Roberto y Pastora Carmen Morales",
  milestones: [
    {
      year: "1985",
      event: "Fundación de la iglesia con 15 miembros fundadores",
    },
    {
      year: "1990",
      event: "Construcción del primer templo",
    },
    {
      year: "1995",
      event: "Inicio del ministerio de jóvenes",
    },
    {
      year: "2000",
      event: "Expansión del templo y nuevos ministerios",
    },
    {
      year: "2005",
      event: "Inicio del ministerio de evangelismo comunitario",
    },
    {
      year: "2010",
      event: "Construcción del salón de niños y jóvenes",
    },
    {
      year: "2015",
      event: "Llegada del Pastor Juan Carlos Morales como pastor principal",
    },
    {
      year: "2020",
      event: "Adaptación a servicios virtuales durante la pandemia",
    },
    {
      year: "2023",
      event: "Celebración de 38 años de ministerio y crecimiento continuo",
    },
  ],
};

export const missionVisionValues = {
  mission:
    "Proclamar el evangelio de Jesucristo, discipular a los creyentes y servir a nuestra comunidad con amor y compasión, transformando vidas y construyendo una comunidad fuerte en la fe.",
  vision:
    "Ser una iglesia vibrante y creciente que impacte positivamente nuestra comunidad, donde cada persona encuentre su propósito en Cristo y desarrolle su potencial espiritual al máximo.",
  values: [
    {
      title: "Amor",
      description:
        "Amamos a Dios sobre todas las cosas y a nuestro prójimo como a nosotros mismos.",
    },
    {
      title: "Fe",
      description:
        "Vivimos por fe, confiando en las promesas de Dios y su fidelidad.",
    },
    {
      title: "Integridad",
      description:
        "Mantenemos altos estándares éticos y morales en todo lo que hacemos.",
    },
    {
      title: "Servicio",
      description:
        "Servimos a otros con humildad y compasión, siguiendo el ejemplo de Cristo.",
    },
    {
      title: "Excelencia",
      description:
        "Buscamos la excelencia en todo lo que hacemos para la gloria de Dios.",
    },
    {
      title: "Comunidad",
      description:
        "Valoramos las relaciones auténticas y el compañerismo cristiano.",
    },
  ],
};

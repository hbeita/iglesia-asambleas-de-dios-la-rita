import { CHURCH_INFO } from "../utils/constants";

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
    id: "pastoral-couple",
    name: "Jhon Anthony Badilla & Hillary Ortega",
    position: "Nuestros Pastores",
    bio: "Somos una pareja joven apasionada por Jesús y con un gran amor por las almas. Dios nos ha confiado la hermosa misión de servir y pastorear esta iglesia, guiados siempre por una visión de reino.\n\nNuestro deseo es que en este lugar encuentres fe, esperanza y una familia espiritual que te acerque cada día más a Cristo. ¡Nos alegra mucho recibirte y caminar juntos en este propósito!",
    image: "/images/pastors.png",
    email: CHURCH_INFO.email,
    phone: CHURCH_INFO.phone,
    socialMedia: {
      facebook: CHURCH_INFO.socialMedia.facebook,
      instagram: CHURCH_INFO.socialMedia.instagram,
    },
    education: [
      "Pastor Jhon: Bachiller en Teología, cursando Licenciatura",
      "Pastora Hillary: Bachiller en Teología, cursando Licenciatura",
      "Pastora Hillary: Culminó su carrera en Audiología",
      "Pastor Jhon: Estudiante de Psicología",
    ],
    experience: [
      "Pastor Jhon: 12 años como Pastor asociado",
      "Pastora Hillary: 10 años como Pastora asociada",
      "Ambos: Pastores con credencial de licenciado",
      "Ambos: Colegiados Alianza evangélica",
      "Ambos: Carnet de profesor acreditado del IBAD",
      "Pastor Jhon: Presbítero",
      "Pastor Jhon: Trabaja a nivel Nacional en discipulado",
      "Pastora Hillary: Coordinadora de femmad",
      "Pastora Hillary: Trabaja a nivel Nacional con mujeres",
    ],
    specialties: [
      "Predicación y Enseñanza",
      "Liderazgo Pastoral",
      "Consejería Familiar",
      "Desarrollo de Ministerios",
      "Evangelismo",
      "Discipulado Nacional",
      "Ministerio con Mujeres",
      "Música (Pastor Jhon)",
      "Audiología (Pastora Hillary)",
      "Visitamos cárceles",
      "Orfanatos",
      "Convivios",
      "Centros de rehabilitación",
      "Crecimiento en actividades zonales, en nacionales",
      "Fraternidad con otras Iglesias",
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
    "Ser una organización dedicada a formar discípulos de Cristo en la Rita y el mundo.\nMateo 28:18",
  vision:
    "Ser la organización que trabaja para que en la Rita y todo el mundo todos sean salvos.\n1 Timoteo 3-4",
  values: [
    {
      title: "Amor",
      description:
        "Es el valor central del cristianismo. Jesús dijo: 'En esto conocerán todos que sois mis discípulos: si tenéis amor los unos por los otros' (Juan 13:35). Se traduce en compasión, empatía, servicio y cuidado mutuo.",
    },
    {
      title: "Fe",
      description:
        "Confianza plena en Dios, en su Palabra y en sus promesas. La fe es el motor de la vida cristiana y la base de toda esperanza.",
    },
    {
      title: "Humildad",
      description:
        "Reconocimiento de la necesidad de Dios, y servicio desinteresado a los demás. Imitar a Cristo, quien se despojó de su gloria para servir.",
    },
    {
      title: "Unidad",
      description:
        "Jesús oró para que 'todos sean uno' (Juan 17:21). Valoramos las relaciones auténticas y el compañerismo cristiano.",
    },
  ],
};

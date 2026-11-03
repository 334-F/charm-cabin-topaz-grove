export type Lang = "es" | "en";
export type DocKind = "cv" | "letter";

export type Job = {
  title: string;
  meta: string;
  period: string;
  points: string[];
};

export type Copy = {
  htmlLang: string;
  metaCv: string;
  metaLetter: string;
  kicker: string;
  name: string;
  role: string;
  bridge: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinHref: string;
  summaryTitle: string;
  summary: string;
  langTitle: string;
  languages: { name: string; level: string }[];
  interpret: string;
  expTitle: string;
  jobs: Job[];
  eduTitle: string;
  education: { title: string; detail: string }[];
  extraEdu: string;
  skillTitle: string;
  skills: string;
  availability: string;
  references: string;
  letterKicker: string;
  letterDate: string;
  salutation: string;
  letter: string[];
  close: string;
  signoff: string;
  ui: {
    cv: string;
    letter: string;
    print: string;
    es: string;
    en: string;
    docs: string;
    langs: string;
    notesTitle: string;
    notes: { title: string; body: string }[];
    sendTitle: string;
    send: string[];
  };
};

const contact = {
  name: "Felipe Xu",
  phone: "+34 692 839 589",
  email: "felipexu06@gmail.com",
  linkedin: "linkedin.com/in/felipe-xu",
  linkedinHref: "https://www.linkedin.com/in/felipe-xu",
};

export const copy: Record<Lang, Copy> = {
  es: {
    htmlLang: "es",
    metaCv: "Felipe Xu · Currículum administrativo bilingüe",
    metaLetter: "Felipe Xu · Carta de presentación",
    kicker: "Currículum",
    ...contact,
    role: "Administrativo bilingüe · Traductor e intérprete",
    bridge: "Español nativo · Chino mandarín nativo · Inglés C1",
    location: "Alcorcón, Madrid",
    summaryTitle: "Perfil",
    summary:
      "Nativo en español y en chino mandarín, con inglés C1. Busco administración bilingüe, atención a clientes internacionales o traducción e interpretación. He atendido al público en una agencia de viajes y en hostelería, he interpretado en conferencias y, en unas prácticas tecnológicas, he dejado por escrito procesos y he resuelto consultas reales de usuarios. Escritura clara, trato formal e incorporación inmediata en Madrid.",
    langTitle: "Idiomas",
    languages: [
      { name: "中文", level: "Mandarín · nativo" },
      { name: "Español", level: "Nativo" },
      { name: "English", level: "C1" },
      { name: "Français", level: "B1" },
    ],
    interpret:
      "Interpretación en conferencias, en español, chino e inglés: registro formal, escucha precisa y transmisión fiel entre ponentes y público.",
    expTitle: "Experiencia",
    jobs: [
      {
        title: "Soporte digital y operaciones",
        meta: "WodBuster · Desarrollador full stack (prácticas FCT)",
        period: "marzo 2026 – mayo 2026",
        points: [
          "Agente de IA para el soporte de la plataforma, conectado a su base de datos: las consultas pasaron de varias horas de espera a una respuesta inmediata.",
          "Sustituí la gestión manual de planes de nutrición por un proceso digital completo, con datos de cliente, accesos protegidos y cobro de suscripciones.",
        ],
      },
      {
        title: "Atención al cliente, web y marketing",
        meta: "Agencias de Viajes Nautalia · Prácticas · Madrid",
        period: "marzo 2025 – mayo 2025",
        points: [
          "Atención al cliente en mostrador y canal digital: información de viajes, consultas y seguimiento.",
          "Apoyo al rediseño del portal corporativo y a campañas de temporada, priorizando claridad y respuesta.",
        ],
      },
      {
        title: "Camarero",
        meta: "Atención al cliente en sala",
        period: "",
        points: [
          "Servicio de sala y trato directo: comanda, servicio y cierre de incidencias en el momento.",
          "Comunicación clara bajo ritmo alto y coordinación con el equipo.",
        ],
      },
    ],
    eduTitle: "Formación",
    education: [
      {
        title: "CFGS Desarrollo de Aplicaciones Web, modalidad bilingüe",
        detail:
          "IES Pío Baroja · 2026. Entorno cliente y servidor, bases de datos y despliegue. Formación reglada en español e inglés.",
      },
    ],
    extraEdu:
      "Formación complementaria: Harvard CS50, programación web con Python y JavaScript (2026). HarvardX, fundamentos de ciencia de datos con R (2025).",
    skillTitle: "Competencias",
    skills:
      "Traducción escrita e interpretación ES · ZH · EN. Atención presencial, telefónica y escrita. Organización, archivo y seguimiento. Ofimática y herramientas digitales. Confidencialidad y registro formal.",
    availability: "Incorporación inmediata · Alcorcón, Madrid",
    references: "Referencias disponibles bajo petición.",
    letterKicker: "Carta de presentación",
    letterDate: "Madrid, noviembre de 2026",
    salutation: "Estimado equipo de selección:",
    letter: [
      "Puedo trabajar en español y en chino mandarín como lenguas maternas, y en inglés con un C1. Escribo por un puesto de administración, atención a clientes internacionales o traducción: hace falta alguien que ya haya estado delante del cliente, no solo un título de idiomas.",
      "En Agencias de Viajes Nautalia atendí consultas, informé del producto y di seguimiento, en mostrador y por canal digital. En hostelería sostuve el ritmo de sala. En conferencias interpreté entre español, chino e inglés. En WodBuster, durante las prácticas, pasé un servicio de soporte de varias horas a respuesta inmediata y sustituí un proceso manual por uno digital.",
      "Aporto orden, escritura clara, confidencialidad y soltura con herramientas. Vivo en Alcorcón y puedo incorporarme de inmediato en Madrid.",
      "Quedo a su disposición para una entrevista.",
    ],
    close: "",
    signoff: "Atentamente,",
    ui: {
      cv: "Currículum",
      letter: "Carta",
      print: "Imprimir / PDF",
      es: "Castellano",
      en: "English",
      docs: "Documento",
      langs: "Idioma del documento",
      notesTitle: "Antes de enviar",
      notes: [
        {
          title: "El gancho es el doble nativo",
          body: "Español y chino mandarín no se improvisan. En Madrid es un perfil escaso para comercio, turismo, secretariado y clientes de Asia. Esa frase abre el documento: no la bajes a una nota al pie.",
        },
        {
          title: "Ya has estado delante de gente",
          body: "Nautalia y la sala demuestran trato real. La interpretación lo confirma en un registro más formal. No lo conviertas en un cargo inflado.",
        },
        {
          title: "No tapes WodBuster",
          body: "En administración digital es una ventaja: soporte, procesos y plazos. Si la oferta es solo traducción, menciónalo, pero no abras la entrevista por ahí.",
        },
      ],
      sendTitle: "Cómo mandarlo",
      send: [
        "Castellano para empresas de aquí. English si el equipo trabaja en inglés. Una versión por envío.",
        "Imprimir / PDF y adjunta ese archivo. No envíes el currículum de desarrollador a este tipo de puesto.",
        "No escribas traductor jurado. No lo eres, y se comprueba.",
        "Si piden fechas de las conferencias o el nombre del local, complétalos antes. No inventes.",
      ],
    },
  },
  en: {
    htmlLang: "en",
    metaCv: "Felipe Xu · Bilingual administration CV",
    metaLetter: "Felipe Xu · Cover letter",
    kicker: "Curriculum vitae",
    ...contact,
    role: "Bilingual administrator · Translator and interpreter",
    bridge: "Native Spanish · Native Mandarin · English C1",
    location: "Alcorcón, Madrid",
    summaryTitle: "Profile",
    summary:
      "Native in Spanish and Mandarin, with English at C1. I am looking for bilingual administration, international client care, or translation and interpreting. I have served the public in a travel agency and in hospitality, interpreted at conferences, and, in a technology internship, documented processes and resolved real user queries. Clear writing, a formal manner, and immediate availability in Madrid.",
    langTitle: "Languages",
    languages: [
      { name: "中文", level: "Mandarin · native" },
      { name: "Español", level: "Native" },
      { name: "English", level: "C1" },
      { name: "Français", level: "B1" },
    ],
    interpret:
      "Conference interpreting in Spanish, Mandarin and English: formal register, close listening, and faithful delivery between speakers and audience.",
    expTitle: "Experience",
    jobs: [
      {
        title: "Digital support and operations",
        meta: "WodBuster · Full-stack developer (internship)",
        period: "March 2026 – May 2026",
        points: [
          "AI agent for platform support, connected to the company database: queries went from a wait of several hours to an immediate reply.",
          "Replaced manual nutrition-plan handling with a full digital process, including client data, protected access and subscription payments.",
        ],
      },
      {
        title: "Client care, web and marketing",
        meta: "Nautalia travel agencies · Internship · Madrid",
        period: "March 2025 – May 2025",
        points: [
          "In-person and digital client care: travel information, enquiries and follow-up.",
          "Support on the corporate site redesign and on seasonal campaigns, focused on clarity and response.",
        ],
      },
      {
        title: "Waiter",
        meta: "Floor service and client care",
        period: "",
        points: [
          "Floor service and direct client care: orders, service, and issues closed in the moment.",
          "Clear communication at a fast pace, and coordination with the team.",
        ],
      },
    ],
    eduTitle: "Education",
    education: [
      {
        title: "Advanced vocational diploma in Web Application Development, bilingual track",
        detail:
          "IES Pío Baroja · 2026. Client and server, databases and deployment. Formal training in Spanish and English.",
      },
    ],
    extraEdu:
      "Further study: Harvard CS50, Web Programming with Python and JavaScript (2026). HarvardX, data-science fundamentals with R (2025).",
    skillTitle: "Skills",
    skills:
      "Written translation and interpreting, ES · ZH · EN. In-person, phone and written client care. Organisation, filing and follow-up. Office software and digital tools. Discretion and a formal register.",
    availability: "Immediate start · Alcorcón, Madrid",
    references: "References available on request.",
    letterKicker: "Cover letter",
    letterDate: "Madrid, November 2026",
    salutation: "Dear hiring team,",
    letter: [
      "I work in Spanish and Mandarin as native languages, and in English at C1. I am writing for an administrative role, international client care, or translation: the work needs someone who has already stood in front of a client, not only a language certificate.",
      "At Nautalia Viajes I handled travel enquiries, product information and follow-up, in person and online. In hospitality I kept the pace of the floor. At conferences I interpreted between Spanish, Chinese and English. At WodBuster, during an internship, I took a support queue from a wait of several hours to an immediate reply, and replaced a manual process with a digital one.",
      "I bring order, plain writing, discretion and ease with tools. I live in Alcorcón and can start at once in Madrid.",
      "I would welcome an interview.",
    ],
    close: "",
    signoff: "Yours sincerely,",
    ui: {
      cv: "CV",
      letter: "Letter",
      print: "Print / PDF",
      es: "Castellano",
      en: "English",
      docs: "Document",
      langs: "Document language",
      notesTitle: "Before you send it",
      notes: [
        {
          title: "The hook is being native twice",
          body: "Spanish and Mandarin are not picked up on a course. In Madrid that pair is scarce for trade, tourism, secretarial work and clients from Asia. It opens the document. Do not bury it.",
        },
        {
          title: "You have already faced the public",
          body: "Nautalia and floor service show real client contact. Conference interpreting confirms it in a formal register. Do not inflate the job titles.",
        },
        {
          title: "Do not hide WodBuster",
          body: "For digital administration it is an advantage: support, process and deadlines. If the role is pure translation, mention it, but do not open the interview with it.",
        },
      ],
      sendTitle: "How to send it",
      send: [
        "Spanish for local firms. English if the team works in English. One version per application.",
        "Use Print / PDF and attach that file. Do not send the developer CV for this kind of role.",
        "Do not write sworn translator. You are not one, and it is checked.",
        "If they ask for conference dates or the venue name, add them first. Do not invent them.",
      ],
    },
  },
};

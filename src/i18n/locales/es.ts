import type { TranslationSchema } from './types'

export const es: TranslationSchema = {
  nav: {
    about: 'Nosotros',
    services: 'Servicios',
    portfolio: 'Portafolio',
    whyUs: 'Por qué elegirnos',
    contact: 'Contacto',
  },
  hero: {
    title: 'Wuti Studio',
    subtitle: 'Orz.tw',
    description1: '¿Demasiada pereza para tareas repetitivas? Nosotros también.',
    description2: 'Por eso lo programamos por ti.',
    cta: 'Comenzar',
  },
  about: {
    heading: 'Sobre Nosotros',
    subheading: 'Comprometidos con la Calidad y la Excelencia',
    spiritTitle: 'Dedicación Total',
    spiritP1: 'Wuti Studio se inspira en el espíritu de la devoción plena: poner todo nuestro ser en cada proyecto con profesionalismo y pasión. Creemos que un gran software es más que solo código; es una profunda comprensión de las necesidades del cliente hecha realidad a través de la innovación.',
    spiritP2: 'Nuestro equipo aporta una amplia experiencia en desarrollo de software, desde aplicaciones web hasta sistemas de información específicos para diversos sectores. Ofrecemos soluciones personalizadas para ayudar a su empresa a lograr la transformación digital y la eficiencia operativa.',
    founderRole: 'Jefe de I+D / Fundador',
    founderBio1: 'Más de 20 años de experiencia en diseño y desarrollo de software, habiendo trabajado en varias empresas de software de renombre mundial. Participó en software de seguridad para decenas de millones de usuarios, diseño de arquitectura de sistemas empresariales, desarrollo de sitios web de alto tráfico y colaboración con equipos transfronterizos. Se especializa en desarrollo de aplicaciones web, optimización del rendimiento del sistema y procesos ágiles, con un enfoque en la optimización del frontend y experiencias de usuario fluidas.',
    founderBio2: "Fundó Wuti Studio con la creencia de que 'la tecnología nace de la pereza', dedicándose a ayudar a empresas e individuos a lograr la transformación digital dejando que el software se encargue del trabajo tedioso, para que puedas concentrarte en lo que realmente importa.",
  },
  services: {
    heading: 'Servicios',
    subheading: 'Soluciones Integrales de Desarrollo de Software',
    items: [
      { title: 'Desarrollo de Apps Web', description: 'Construcción de aplicaciones web responsivas con tecnologías modernas de frontend y backend, ofreciendo experiencias de usuario fluidas y un rendimiento confiable.' },
      { title: 'Ingeniería de Software', description: 'Desde el análisis de requisitos y diseño de sistemas hasta el desarrollo y mantenimiento: servicios completos de ingeniería de software asegurando calidad y entrega puntual.' },
      { title: 'Sistema de Récords de Natación', description: 'Una plataforma profesional de gestión de récords de natación que soporta seguimiento de rendimiento, análisis de datos y consultas históricas para ayudar a atletas y entrenadores a monitorear el progreso.' },
      { title: 'Plataforma de Gestión de Eventos', description: 'Una plataforma integrada de información de eventos que proporciona búsqueda de horarios, gestión de inscripciones y publicación de resultados: una solución integral para la gestión de eventos.' },
      { title: 'Automatización de Procesos', description: 'Análisis de sus flujos de trabajo y diseño de soluciones de automatización para reducir tareas repetitivas, para que pueda centrarse en su negocio principal.' },
      { title: 'Desarrollo de Sistemas a Medida', description: 'Sistemas personalizados construidos para sus necesidades únicas: desde pequeñas herramientas hasta plataformas a gran escala, hacemos realidad su visión.' },
    ],
  },
  portfolio: {
    heading: 'Portafolio',
    subheading: 'Soluciones de software desarrolladas para el mundo de la natación',
    items: [
      { title: 'Swim Insights', description: 'La plataforma de seguimiento de récords de natación más completa de Taiwán, que agrega datos de cientos de competiciones, incluidos campeonatos nacionales por edades, torneos juveniles y juegos regionales. Ofrece consulta de marcas, seguimiento de mejores tiempos personales, estimación de horarios, análisis con IA y planes de entrenamiento. Disponible en múltiples plataformas: iOS, Android y Web.' },
      { title: 'Sistema de Gestión de Competiciones de Natación', description: 'Un sistema de gestión operativa diseñado para organizadores de eventos de natación, que cubre todo el flujo desde inscripción, sembrado, llamada y cronometraje hasta la publicación de resultados. Implementa la integración automatizada entre los equipos de cronometraje y el sistema de resultados, lo que no solo mejora significativamente la eficiencia y la transparencia, sino que también reduce drásticamente la carga de trabajo del personal del evento. Ya adoptado por eventos importantes como la Dream Cup y la XPORTS Cup.' },
      { title: 'Sistema de Gestión del Equipo de Natación Long-An', description: 'Un sistema de gestión interna desarrollado a medida para el Equipo de Natación Long-An de Taipéi, que ayuda a los entrenadores a gestionar los perfiles de los nadadores, los registros de entrenamiento y los resultados de las competiciones, con un portal para padres que permite monitorear el progreso de sus hijos.' },
    ],
  },
  whyUs: {
    heading: 'Por Qué Elegirnos',
    subheading: 'Su Confianza, Nuestra Responsabilidad',
    items: [
      { title: 'Atención al Detalle', description: 'Cada función se elabora cuidadosamente para garantizar calidad' },
      { title: 'Comunicación Clara', description: 'Manteniendo un contacto cercano, respondiendo a sus necesidades con prontitud' },
      { title: 'Entrega Rápida', description: 'Proceso de desarrollo ágil para una gestión de proyectos eficaz' },
      { title: 'Soporte Continuo', description: 'Mantenimiento y soporte técnico después de completar el proyecto' },
    ],
  },
  contact: {
    heading: 'Contáctenos',
    subheading: 'Demos vida a sus ideas',
    description: 'Ya sea que tenga necesidades de desarrollo de software o quiera discutir una idea de proyecto, no dude en contactarnos. Esperamos trabajar con usted.',
    companyLabel: 'Empresa',
    companyName: 'Wuti Studio',
    taxIdLabel: 'NIF (Taiwán)',
    websiteLabel: 'Sitio web',
    emailBtn: 'Envíenos un Email',
    lineBtn: 'Contáctenos por LINE',
  },
  footer: {
    copyright: '2026 Wuti Studio. All rights reserved.',
    privacyLink: 'Política de Privacidad',
    termsLink: 'Términos del Servicio',
  },
  a11y: {
    openMenu: 'Abrir menú',
    toggleTheme: 'Cambiar tema',
    selectLanguage: 'Seleccionar idioma',
    fontSize: 'Tamaño de fuente',
    fontSizeSmall: 'Pequeño',
    fontSizeMedium: 'Mediano',
    fontSizeLarge: 'Grande',
  },
}

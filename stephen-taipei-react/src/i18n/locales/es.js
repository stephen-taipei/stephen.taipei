// Español (values-es)
export default {
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    portfolio: "Portafolio",
    tools: "Open Source",
    contact: "Contacto",
  },
  hero: {
    name: "Stephen Chuang",
    title: "Ingeniero Senior",
    subtitle: "Full Stack",
    description:
      "Experiencia en plataformas de IA, sistemas de comercio electrónico, fintech y aplicaciones educativas. Implementé arquitectura Nx Monorepo para compartir módulos entre proyectos y mantenimiento a largo plazo, habilitando más de 100 configuraciones de temas y reduciendo código de componentes complejos de 1000 a 200 líneas.",
    viewWork: "Ver Trabajo",
    contactMe: "Contactar",
  },
  about: {
    title: "Transformando Ideas en",
    titleHighlight: "Realidad Digital",
    location: "Taipéi, Taiwán",
    badgeTitle: "Campeón de Baile",
    badgeValue: "Ganador Nacional / Top 8 Mundial",
    description1:
      "Me apasiona el aprendizaje y la integración interdisciplinaria. Desde un trasfondo en diseño, hice la transición a gestión de información y finalmente me enfoqué en desarrollo full-stack y arquitectura de sistemas. Competente en Angular y Laravel con experiencia completa desde frameworks frontend hasta arquitectura backend.",
    description2:
      "Lideré un equipo de 6 personas usando Git (CI/CD), Trello, Slack y RedMine para gestión de proyectos. Completé exitosamente múltiples desarrollos de Web / Android App / iOS App, acumulando experiencia práctica en análisis de requisitos, planificación de sistemas, colaboración y control de calidad de código.",
    description3:
      "Fuera del trabajo, fundé un estudio de street dance y logré campeón nacional y top 8 mundial en competencias de baile. Estas experiencias cultivaron perseverancia, enfoque y determinación para superar desafíos.",
    performanceTitle: "Rendimiento",
    performanceDesc: "Optimización para velocidad y escala",
    leadershipTitle: "Liderazgo",
    leadershipDesc: "Mentoría y construcción de equipos",
  },
  skills: {
    title: "Experiencia Técnica",
    subtitle:
      "Un conjunto completo de herramientas para soluciones digitales modernas",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Herramientas IA",
  },
  experience: {
    title: "Trayectoria Profesional",
    present: "Presente",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Ingeniero Senior",
        period: "2024/1 - Presente",
        description: [
          "Lideré arquitectura Nx Monorepo, integrando múltiples proyectos con módulos compartidos, más de 100 temas impulsados por API con cambio dinámico de diseño.",
          "Actualización a Angular 19, adoptando completamente Signal/Computed/Effect, reduciendo dependencia de RxJS con optimización OnPush.",
          "Modularicé lógica compleja en Componentes Compartidos, reduciendo código de 1000 líneas a menos de 200.",
          "Gestión directa de 2-4 ingenieros frontend, coordinación indirecta de múltiples personal de soporte, sesiones regulares de intercambio técnico.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Ingeniero Full Stack",
        period: "2014/1 - 2023/11",
        description: [
          "Desarrollé plataforma de comercio electrónico de venta directa con Laravel + Angular PWA, incluyendo carrito de compras, gestión de miembros y sistema de administración.",
          "Implementé caché Redis para rankings de productos y etiquetas de palabras clave, reduciendo consultas de base de datos en 70%.",
          "Gestioné equipo multifuncional de 6 personas, ayudando al cliente a crecer de 0 a 20,000 miembros en 12 meses con más del 85% de tasa de actividad mensual.",
          "Construí plataforma de contratos electrónicos, digitalizando procesos en papel incluyendo firma, revisión y flujos de apertura de tiendas.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Ingeniero",
        period: "2013/1 - 2014/1",
        description: [
          "Desarrollé y mantuve sistemas administrativos internos usando PHP (Smarty) + jQuery.",
          "Construí sistema de información de subastas con búsqueda avanzada de múltiples criterios.",
          "Diseñé estrategias de coincidencia personalizadas con filtrado automatizado y entrega automática de informes.",
        ],
      },
    ],
  },
  portfolio: {
    title: "Proyectos Destacados",
    subtitle: "Mostrando profundidad técnica e innovación",
    clickToView: "Clic para ver detalles",
    projectDesc: "Descripción del Proyecto",
    features: "Características Principales",
    techStack: "Stack Tecnológico",
    achievement: "Logro Clave",
    projects: [
      {
        title: "Copila AI",
        desc: "Plataforma de Personalización IA",
        fullDesc:
          "Proporciona conversación y dibujo con IA, junto con gráficos personalizados generados por IA. Implementé servidor WebSocket con Laravel Swoole Octane, combinado con Angular para comunicación en tiempo real, dibujo IA y bocetos en línea. Integré API de OpenAI para mapas mentales, diagramas de flujo y cuadrículas de pensamiento Mandala potenciados por IA.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Puntuaciones Lighthouse casi perfectas",
        features: [
          "Generación de Mapas Mentales IA",
          "Generación de Diagramas de Flujo IA",
          "Cuadrícula de Pensamiento Mandala",
          "Comunicación en Tiempo Real",
          "Dibujo IA",
          "Bocetos en Línea",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Sistema E-commerce OMO",
        fullDesc:
          "Marketplace multi-vendedor con compras estilo subasta, integrando compras en línea y pagos en tienda física. Diseñé algoritmos de recomendación personalizados basados en huellas de usuario para personalización dinámica de páginas de productos.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Casi 20,000 miembros en un año",
        features: [
          "Marketplace Multi-vendedor",
          "Compras Estilo Subasta",
          "Sistema de Bonos Multinivel",
          "Sistema E-wallet",
          "Integración de Pagos Online-Offline",
        ],
      },
      {
        title: "StocX",
        desc: "Sistema de Entrenamiento Bursátil",
        fullDesc:
          "Proporciona datos históricos de precios de acciones para entrenar sentido de mercado y estrategias de selección de acciones. Optimicé hosting compartido de bajo costo mediante caché y diseño de procesos, logrando más de 500 usuarios concurrentes.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 usuarios concurrentes, compartido por KOL y autores bestseller",
        features: [
          "Análisis de Gráficos K-line",
          "Selección de Acciones Potenciales",
          "Entrenamiento de Estrategias",
          "Backtesting de Datos Históricos",
        ],
      },
      {
        title: "Sistema Dermatoglifos",
        desc: "Plataforma de Detección de Huellas",
        fullDesc:
          "Proporciona detección de huellas dactilares y generación de informes para niños y padres. Incluye gestión de estudiantes, análisis dermatoglífico y generación completa de informes.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Generación automatizada de informes",
        features: [
          "Gestión de Estudiantes",
          "Análisis Dermatoglífico",
          "Gráficos de Función Cerebral",
          "Exportación de Informes PDF",
        ],
      },
    ],
  },
  contact: {
    title: "Conectemos",
    subtitle:
      "Ya sea que tenga una pregunta, una idea de proyecto o simplemente quiera discutir las últimas tendencias tecnológicas, no dude en contactarme.",
    email: "Correo",
    location: "Ubicación",
    locationValue: "Taipéi, Taiwán",
    formName: "Nombre",
    formNamePlaceholder: "Su nombre",
    formEmail: "Correo",
    formEmailPlaceholder: "su@correo.com",
    formMessage: "Mensaje",
    formMessagePlaceholder: "Hola Stephen...",
    sendMessage: "Enviar Mensaje",
  },
  tools: {
    title: "Stephen's Open Source Tools",
    subtitle: "8000+ herramientas de código abierto gratuitas co-desarrolladas con IA, incluyendo IA, juegos, herramientas de desarrollo y más",
    totalCount: "8000+ Free Tools",
    toolsLabel: "Tools",
    categories: {
      aiTools: {
        title: "AI Local Tools",
        description: "1000+ AI tools running entirely in browser, zero backend, 100% privacy protected",
      },
      chromeExtensions: {
        title: "Chrome Extensions",
        description: "1000+ useful browser extensions to boost productivity and web experience",
      },
      freeGames: {
        title: "Free Games",
        description: "1000+ frontend-only games, no installation required, play instantly",
      },
      miniTools: {
        title: "Mini Tools",
        description: "1000+ frontend-only utilities for text processing, image editing, encryption and more",
      },
      tailwindTemplates: {
        title: "Tailwind Templates",
        description: "1000+ beautiful Tailwind CSS UI templates and components",
      },
      wasmTools: {
        title: "WebAssembly Tools",
        description: "1000+ high-performance WASM tools with near-native execution speed",
      },
      webToys: {
        title: "Web Toys",
        description: "1000+ fun interactive web toys showcasing frontend possibilities",
      },
      webWorkers: {
        title: "Web Workers Examples",
        description: "1000+ Web Workers implementations for multi-threaded computation",
      },
    },
    features: [
      {
        title: "Fully Open Source",
        description: "All tools are completely open source, free to use, modify and distribute",
      },
      {
        title: "Local Execution",
        description: "All tools run locally in your browser, protecting your privacy",
      },
      {
        title: "Continuous Updates",
        description: "Continuously developing new tools with regular updates",
      },
    ],
  },
  // Open Source Tools Pages
  openSource: {
    title: "Plataforma de Herramientas Open Source de Stephen",
    subtitle: "8 Temas · 1000+ Herramientas Open Source",
    description: "Completamente gratis, código abierto, ejecutándose localmente en tu navegador. Cubriendo herramientas IA, juegos web, herramientas de desarrollo, efectos visuales y más.",
    searchPlaceholder: "Buscar categorías de herramientas...",
    backToHome: "Inicio",
    back: "Volver",
    categoryNotFound: "Categoría no encontrada",
    backToTools: "Volver a Herramientas",
    openInNewTab: "Abrir en nueva pestaña",
    copyLink: "Copiar enlace",
    copied: "Copiado",
    refresh: "Actualizar",
    previousTool: "Herramienta anterior",
    nextTool: "Siguiente herramienta",
    toolCount: "{count} herramientas",
    comingSoon: "Próximamente",
    free: "Completamente gratis",
    freeDesc: "Todas las herramientas son completamente gratuitas, sin necesidad de registro o pago",
    local: "Ejecución local",
    localDesc: "Las herramientas se ejecutan localmente en tu navegador, tus datos no se transmiten, protegiendo tu privacidad",
    opensource: "Contribución open source",
    opensourceDesc: "Todas las herramientas son open source, las contribuciones y mejoras son bienvenidas",
    copyrightText: "© 2025 Stephen Taipei · Plataforma de Herramientas Open Source",
    github: "GitHub",
    viewAllTools: "Explorar todas las herramientas",
    tools: "herramientas",
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: 'Awesome APP 100',
    subtitle: '100 Aplicaciones Nativas Premium',
    badge: 'Nueva Plataforma de Stephen',
    heading: 'Aplicaciones Nativas Premium Seleccionadas',
    description: 'Una colección de 100 aplicaciones nativas premium seleccionadas para plataformas iOS y Android. Cada aplicación ha sido cuidadosamente elegida por su calidad, rendimiento y experiencia de usuario.',
    features: [
      { title: 'Apps Nativas', desc: 'iOS & Android' },
      { title: 'Calidad Premium', desc: 'Cuidadosamente Seleccionadas' },
      { title: 'Multiplataforma', desc: 'Experiencia Universal' },
    ],
    cta: 'Explorar Awesome APP 100',
    visualText: 'Apps Premium',
    visualSubtext: 'Seleccionadas por Excelencia',
  },

  footer: {
    copyright: "Todos los derechos reservados",
  },
};

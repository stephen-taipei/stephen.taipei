// Italiano (values-it)
export default {
  nav: {
    about: "Chi sono",
    skills: "Competenze",
    experience: "Esperienza",
    portfolio: "Portfolio",
    tools: "Open Source",
    contact: "Contatti",
  },
  hero: {
    name: "Stephen Chuang",
    title: "Senior Full Stack",
    subtitle: "Engineer",
    description:
      "Esperto in piattaforme AI, sistemi e-commerce, fintech e applicazioni educative. Implementata architettura Nx Monorepo per la condivisione di moduli multi-progetto e manutenzione a lungo termine, abilitando oltre 100 configurazioni di temi e riducendo il codice di componenti complessi da 1000 a 200 righe.",
    viewWork: "Vedi Lavori",
    contactMe: "Contattami",
  },
  about: {
    title: "Trasformare le idee in",
    titleHighlight: "realtà digitale",
    location: "Taipei, Taiwan",
    badgeTitle: "Campione di Danza",
    badgeValue: "Campione Nazionale / Top 8 Mondiale",
    description1:
      "Sono appassionato di apprendimento e integrazione cross-domain. Partendo da un background nel design, sono passato alla gestione delle informazioni e infine mi sono concentrato sullo sviluppo full-stack e l'architettura di sistema. Competente in Angular e Laravel con esperienza di sviluppo completa dai framework frontend all'architettura backend.",
    description2:
      "Ho guidato un team di 6 persone utilizzando Git (CI/CD), Trello, Slack e RedMine per la gestione progetti. Ho completato con successo diversi sviluppi Web / Android App / iOS App, accumulando esperienza pratica in analisi dei requisiti, pianificazione di sistema, collaborazione e controllo qualità del codice.",
    description3:
      "Al di fuori del lavoro, ho fondato uno studio di street dance e ho raggiunto il titolo di campione nazionale e top 8 mondiale nelle competizioni di danza. Queste esperienze hanno coltivato perseveranza, concentrazione e determinazione nel superare le sfide.",
    performanceTitle: "Performance",
    performanceDesc: "Ottimizzazione per velocità e scala",
    leadershipTitle: "Leadership",
    leadershipDesc: "Mentoring e Team Building",
  },
  skills: {
    title: "Competenze Tecniche",
    subtitle: "Un set completo di strumenti per soluzioni digitali moderne",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Strumenti AI",
  },
  experience: {
    title: "Percorso Professionale",
    present: "Presente",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Senior Engineer",
        period: "2024/1 - Presente",
        description: [
          "Guidato l'architettura Nx Monorepo, integrazione di progetti multipli con condivisione moduli, oltre 100 temi API-driven con cambio layout dinamico.",
          "Aggiornamento ad Angular 19, adozione completa di Signal/Computed/Effect, riduzione della dipendenza RxJS con ottimizzazione OnPush.",
          "Modularizzata la logica complessa in Shared Components, riduzione del codice da 1000 righe a meno di 200.",
          "Gestione diretta di 2-4 ingegneri frontend, coordinamento indiretto di diversi staff di supporto, sessioni regolari di condivisione tecnica.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Full Stack Engineer",
        period: "2014/1 - 2023/11",
        description: [
          "Sviluppata piattaforma e-commerce di vendita diretta con Laravel + Angular PWA, inclusi carrello, gestione membri e sistema admin.",
          "Implementato caching Redis per classifiche prodotti e tag keyword, riduzione delle query database del 70%.",
          "Gestito team cross-funzionale di 6 persone, aiutato il cliente a crescere da 0 a 20.000 membri in 12 mesi con tasso di attività mensile superiore all'85%.",
          "Costruita piattaforma contratti elettronici, digitalizzazione dei processi cartacei inclusi firma, revisione e flussi di apertura negozi.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Engineer",
        period: "2013/1 - 2014/1",
        description: [
          "Sviluppato e mantenuto sistemi amministrativi interni usando PHP (Smarty) + jQuery.",
          "Costruito sistema informativo per pignoramenti con ricerca avanzata multi-criterio.",
          "Progettate strategie di matching personalizzate con filtraggio automatizzato e consegna automatica report.",
        ],
      },
    ],
  },
  portfolio: {
    title: "Progetti in Evidenza",
    subtitle: "Mostrando profondità tecnica e innovazione",
    clickToView: "Clicca per vedere i dettagli",
    projectDesc: "Descrizione Progetto",
    features: "Funzionalità Principali",
    techStack: "Stack Tecnologico",
    achievement: "Risultato Chiave",
    projects: [
      {
        title: "Copila AI",
        desc: "Piattaforma di Personalizzazione AI",
        fullDesc:
          "Fornisce conversazione e disegno AI, insieme a grafici personalizzati generati da AI. Implementato WebSocket Server con Laravel Swoole Octane, abbinato ad Angular per comunicazione real-time, disegno AI e sketching online. Integrata OpenAI API per mappe mentali, diagrammi di flusso e griglie di pensiero Mandala alimentati da AI.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Punteggi Lighthouse quasi perfetti",
        features: [
          "Generazione Mappe Mentali AI",
          "Generazione Diagrammi di Flusso AI",
          "Griglia di Pensiero Mandala",
          "Comunicazione Real-time",
          "Disegno AI",
          "Sketching Online",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Sistema E-commerce OMO",
        fullDesc:
          "Marketplace multi-vendor con shopping stile asta, integrazione di shopping online e pagamenti in negozio offline. Progettati algoritmi di raccomandazione personalizzati basati sulle impronte utente per la personalizzazione dinamica delle pagine prodotto.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Quasi 20.000 membri in un anno",
        features: [
          "Marketplace Multi-vendor",
          "Shopping Stile Asta",
          "Sistema Bonus Multi-livello",
          "Sistema E-wallet",
          "Integrazione Pagamenti Online-Offline",
        ],
      },
      {
        title: "StocX",
        desc: "Sistema di Training Mercato Azionario",
        fullDesc:
          "Fornisce dati storici sui prezzi delle azioni per allenare il senso del mercato e le strategie di selezione titoli. Ottimizzato hosting condiviso a basso costo attraverso caching e design dei processi, raggiungendo oltre 500 utenti simultanei.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 utenti simultanei, condiviso da KOL e autori bestseller",
        features: [
          "Analisi Grafici K-line",
          "Screening Titoli Potenziali",
          "Training Strategico",
          "Backtesting Dati Storici",
        ],
      },
      {
        title: "Sistema Dermatoglifi",
        desc: "Piattaforma Rilevamento Impronte",
        fullDesc:
          "Fornisce rilevamento impronte digitali e generazione report per bambini e genitori. Include gestione studenti, analisi dermatoglifica e generazione report completa.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Generazione report automatizzata",
        features: [
          "Gestione Studenti",
          "Analisi Dermatoglifica",
          "Grafici Funzioni Cerebrali",
          "Esportazione Report PDF",
        ],
      },
    ],
  },
  contact: {
    title: "Connettiamoci",
    subtitle:
      "Che tu abbia una domanda, un'idea di progetto, o semplicemente voglia discutere delle ultime tendenze tech, non esitare a contattarmi.",
    email: "Email",
    location: "Posizione",
    locationValue: "Taipei, Taiwan",
    formName: "Nome",
    formNamePlaceholder: "Il tuo nome",
    formEmail: "Email",
    formEmailPlaceholder: "tua@email.com",
    formMessage: "Messaggio",
    formMessagePlaceholder: "Ciao Stephen...",
    sendMessage: "Invia Messaggio",
  },
  tools: {
    title: "Stephen's Open Source Tools",
    subtitle: "8000+ strumenti open source gratuiti co-sviluppati con l'IA, includendo IA, giochi, strumenti di sviluppo e altro",
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
    title: "Piattaforma Strumenti Open Source di Stephen",
    subtitle: "8 Temi · 1000+ Strumenti Open Source",
    description: "Completamente gratuito, open source, eseguito localmente nel tuo browser. Copre strumenti AI, giochi web, strumenti di sviluppo, effetti visivi e altro ancora.",
    searchPlaceholder: "Cerca categorie di strumenti...",
    backToHome: "Home",
    back: "Indietro",
    categoryNotFound: "Categoria non trovata",
    backToTools: "Torna agli Strumenti",
    openInNewTab: "Apri in una nuova scheda",
    copyLink: "Copia link",
    copied: "Copiato",
    refresh: "Aggiorna",
    previousTool: "Strumento precedente",
    nextTool: "Strumento successivo",
    toolCount: "{count} strumenti",
    comingSoon: "Prossimamente",
    free: "Completamente gratuito",
    freeDesc: "Tutti gli strumenti sono completamente gratuiti, nessuna registrazione o pagamento richiesto",
    local: "Esecuzione locale",
    localDesc: "Gli strumenti vengono eseguiti localmente nel tuo browser, i tuoi dati non vengono trasmessi, proteggendo la tua privacy",
    opensource: "Contributo open source",
    opensourceDesc: "Tutti gli strumenti sono open source, i contributi e i miglioramenti sono benvenuti",
    copyrightText: "© 2025 Stephen Taipei · Piattaforma Strumenti Open Source",
    github: "GitHub",
    viewAllTools: "Sfoglia tutti gli strumenti",
    tools: "strumenti",
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: 'Awesome APP 100',
    subtitle: '100 App Native Premium',
    badge: 'Nuova Piattaforma di Stephen',
    heading: 'App Native Premium Selezionate',
    description: 'Una raccolta di 100 applicazioni native premium selezionate per piattaforme iOS e Android. Ogni app è stata accuratamente scelta per qualità, prestazioni ed esperienza utente.',
    features: [
      { title: 'App Native', desc: 'iOS & Android' },
      { title: 'Qualità Premium', desc: 'Accuratamente Selezionate' },
      { title: 'Multipiattaforma', desc: 'Esperienza Universale' },
    ],
    cta: 'Esplora Awesome APP 100',
    visualText: 'App Premium',
    visualSubtext: 'Selezionate per Eccellenza',
  },

  footer: {
    copyright: "Tutti i diritti riservati",
  },
};

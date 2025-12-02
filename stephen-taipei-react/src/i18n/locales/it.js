// Italiano (values-it)
export default {
  nav: {
    about: "Chi sono",
    skills: "Competenze",
    experience: "Esperienza",
    portfolio: "Portfolio",
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
      "Ho guidato un team di 6 persone utilizzando Git, Trello e Slack per la gestione progetti in stile Kanban. Ho completato con successo diversi sviluppi WebApp, accumulando esperienza pratica in analisi dei requisiti, pianificazione di sistema, collaborazione e controllo qualità del codice.",
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
          "Gestione diretta di 2-4 ingegneri frontend, coordinamento indiretto di 6 staff di supporto, sessioni regolari di condivisione tecnica.",
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
  footer: {
    copyright: "Tutti i diritti riservati",
  },
};

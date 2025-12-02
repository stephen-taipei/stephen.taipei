// Français (values-fr)
export default {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    name: "Stephen Chuang",
    title: "Ingénieur Senior",
    subtitle: "Full Stack",
    description:
      "Expérimenté dans les plateformes IA, les systèmes e-commerce, la fintech et les applications éducatives. Mise en œuvre de l'architecture Nx Monorepo pour le partage de modules multi-projets et la maintenance à long terme, permettant plus de 100 configurations de thèmes et réduisant le code de composants complexes de 1000 à 200 lignes.",
    viewWork: "Voir mes travaux",
    contactMe: "Me contacter",
  },
  about: {
    title: "Transformer les idées en",
    titleHighlight: "réalité numérique",
    location: "Taipei, Taïwan",
    badgeTitle: "Champion de danse",
    badgeValue: "Champion national / Top 8 mondial",
    description1:
      "Je suis passionné par l'apprentissage et l'intégration interdisciplinaire. Partant d'un parcours en design, j'ai évolué vers la gestion de l'information, puis me suis concentré sur le développement full-stack et l'architecture système. Compétent en Angular et Laravel avec une expérience complète des frameworks frontend à l'architecture backend.",
    description2:
      "J'ai dirigé une équipe de 6 personnes utilisant Git, Trello et Slack pour la gestion de projet Kanban. Réalisation réussie de plusieurs développements WebApp, accumulant une expérience pratique en analyse des besoins, planification système, collaboration et contrôle qualité du code.",
    description3:
      "En dehors du travail, j'ai fondé un studio de street dance et obtenu le titre de champion national et top 8 mondial en compétitions de danse. Ces expériences ont cultivé la persévérance, la concentration et la détermination à surmonter les défis.",
    performanceTitle: "Performance",
    performanceDesc: "Optimisation pour la vitesse et l'échelle",
    leadershipTitle: "Leadership",
    leadershipDesc: "Mentorat et construction d'équipe",
  },
  skills: {
    title: "Expertise technique",
    subtitle:
      "Un ensemble complet d'outils pour des solutions numériques modernes",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Outils IA",
  },
  experience: {
    title: "Parcours professionnel",
    present: "Présent",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Ingénieur Senior",
        period: "2024/1 - Présent",
        description: [
          "Direction de l'architecture Nx Monorepo, intégration de plusieurs projets avec partage de modules, plus de 100 thèmes pilotés par API avec changement dynamique de mise en page.",
          "Mise à niveau vers Angular 19, adoption complète de Signal/Computed/Effect, réduction de la dépendance RxJS avec optimisation OnPush.",
          "Modularisation de la logique complexe en composants partagés, réduction du code de 1000 lignes à moins de 200.",
          "Gestion directe de 2-4 ingénieurs frontend, coordination indirecte de 6 membres du support, sessions régulières de partage technique.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Ingénieur Full Stack",
        period: "2014/1 - 2023/11",
        description: [
          "Développement d'une plateforme e-commerce de vente directe avec Laravel + Angular PWA, incluant panier, gestion des membres et système d'administration.",
          "Mise en œuvre du cache Redis pour les classements de produits et les tags de mots-clés, réduction des requêtes de base de données de 70%.",
          "Gestion d'une équipe pluridisciplinaire de 6 personnes, aide au client pour passer de 0 à 20 000 membres en 12 mois avec un taux d'activité mensuel de plus de 85%.",
          "Construction d'une plateforme de contrats électroniques, numérisation des processus papier incluant signature, révision et ouverture de magasins.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Ingénieur",
        period: "2013/1 - 2014/1",
        description: [
          "Développement et maintenance de systèmes administratifs internes avec PHP (Smarty) + jQuery.",
          "Construction d'un système d'information sur les saisies immobilières avec recherche avancée multicritères.",
          "Conception de stratégies de mise en correspondance personnalisées avec filtrage automatisé et livraison automatique de rapports.",
        ],
      },
    ],
  },
  portfolio: {
    title: "Projets en vedette",
    subtitle: "Démontrant la profondeur technique et l'innovation",
    clickToView: "Cliquez pour voir les détails",
    projectDesc: "Description du projet",
    features: "Fonctionnalités clés",
    techStack: "Stack technique",
    achievement: "Réalisation clé",
    projects: [
      {
        title: "Copila AI",
        desc: "Plateforme de personnalisation IA",
        fullDesc:
          "Fournit conversation et dessin IA, ainsi que des graphiques personnalisés générés par IA. Mise en œuvre du serveur WebSocket avec Laravel Swoole Octane, couplé à Angular pour la communication en temps réel, le dessin IA et le croquis en ligne. Intégration de l'API OpenAI pour les cartes mentales, organigrammes et grilles de pensée Mandala alimentés par l'IA.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Scores Lighthouse quasi parfaits",
        features: [
          "Génération de cartes mentales IA",
          "Génération d'organigrammes IA",
          "Grille de pensée Mandala",
          "Communication en temps réel",
          "Dessin IA",
          "Croquis en ligne",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Système e-commerce OMO",
        fullDesc:
          "Place de marché multi-vendeurs avec achats de type enchères, intégrant achats en ligne et paiements en magasin. Conception d'algorithmes de recommandation personnalisés basés sur les traces utilisateur pour la personnalisation dynamique des pages produits.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Près de 20 000 membres en un an",
        features: [
          "Place de marché multi-vendeurs",
          "Achats type enchères",
          "Système de bonus multiniveau",
          "Système e-wallet",
          "Intégration paiements online-offline",
        ],
      },
      {
        title: "StocX",
        desc: "Système d'entraînement boursier",
        fullDesc:
          "Fournit des données historiques de prix d'actions pour l'entraînement au sens du marché et aux stratégies de sélection d'actions. Optimisation de l'hébergement mutualisé à faible coût par mise en cache et conception de processus, atteignant plus de 500 utilisateurs simultanés.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 utilisateurs simultanés, partagé par des KOL et auteurs à succès",
        features: [
          "Analyse graphique K-line",
          "Sélection d'actions potentielles",
          "Entraînement stratégique",
          "Backtesting de données historiques",
        ],
      },
      {
        title: "Système Dermatoglyphes",
        desc: "Plateforme de détection d'empreintes",
        fullDesc:
          "Fournit la détection d'empreintes digitales et la génération de rapports pour enfants et parents. Comprend la gestion des étudiants, l'analyse dermatoglyphique et la génération complète de rapports.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Génération automatisée de rapports",
        features: [
          "Gestion des étudiants",
          "Analyse dermatoglyphique",
          "Graphiques de fonction cérébrale",
          "Export de rapports PDF",
        ],
      },
    ],
  },
  contact: {
    title: "Connectons-nous",
    subtitle:
      "Que vous ayez une question, une idée de projet, ou simplement envie de discuter des dernières tendances tech, n'hésitez pas à me contacter.",
    email: "Email",
    location: "Localisation",
    locationValue: "Taipei, Taïwan",
    formName: "Nom",
    formNamePlaceholder: "Votre nom",
    formEmail: "Email",
    formEmailPlaceholder: "votre@email.com",
    formMessage: "Message",
    formMessagePlaceholder: "Bonjour Stephen...",
    sendMessage: "Envoyer le message",
  },
  footer: {
    copyright: "Tous droits réservés",
  },
};

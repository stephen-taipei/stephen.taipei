// English (values-en)
export default {
  // Navbar
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    portfolio: "Portfolio",
    contact: "Contact",
  },

  // Hero Section
  hero: {
    name: "Stephen Chuang",
    title: "Senior Full Stack",
    subtitle: "Engineer",
    description:
      "Experienced in AI platforms, e-commerce systems, fintech, and educational applications. Implemented Nx Monorepo architecture for multi-project module sharing and long-term maintenance, enabling 100+ theme configurations and reducing complex component code from 1000 lines to 200.",
    viewWork: "View Work",
    contactMe: "Contact Me",
  },

  // About Section
  about: {
    title: "Transforming Ideas into",
    titleHighlight: "Digital Reality",
    location: "Taipei, Taiwan",
    badgeTitle: "Dance Champion",
    badgeValue: "National Winner / World Top 8",
    description1:
      "I am passionate about learning and cross-domain integration. Starting from a design background, I transitioned to information management, and ultimately focused on full-stack development and system architecture. Proficient in Angular and Laravel with complete development experience from frontend frameworks to backend architecture.",
    description2:
      "Led a 6-person team using Git, Trello, and Slack for Kanban-style project management. Successfully completed multiple WebApp developments, accumulating practical experience in requirements analysis, system planning, collaboration, and code quality control.",
    description3:
      "Outside of work, I founded a street dance studio and achieved national champion and world top 8 in dance competitions. These experiences cultivated perseverance, focus, and determination to overcome challenges, which extends to my work attitude.",
    performanceTitle: "Performance",
    performanceDesc: "Optimizing for speed and scale",
    leadershipTitle: "Leadership",
    leadershipDesc: "Mentoring & Team Building",
  },

  // Skills Section
  skills: {
    title: "Technical Expertise",
    subtitle: "A comprehensive toolset for building modern digital solutions",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "AI Tools",
  },

  // Experience Section
  experience: {
    title: "Professional Journey",
    present: "Present",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Senior Engineer",
        period: "2024/1 - Present",
        description: [
          "Led Nx Monorepo architecture, integrating multiple projects with module sharing, API-driven 100+ themes with dynamic layout switching.",
          "Upgraded to Angular 19, fully adopting Signal/Computed/Effect, reducing RxJS dependency with OnPush optimization.",
          "Modularized complex logic into Shared Components, reducing 1000-line code to under 200 lines.",
          "Directly managed 2-4 frontend engineers, indirectly coordinated 6 support staff, organized regular technical sharing sessions.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Full Stack Engineer",
        period: "2014/1 - 2023/11",
        description: [
          "Developed direct sales e-commerce platform with Laravel + Angular PWA, including shopping cart, member management, and admin system.",
          "Implemented Redis caching for product rankings and keyword tags, reducing database queries by 70%.",
          "Managed 6-person cross-functional team, helping client grow from 0 to 20,000 members in 12 months with 85%+ monthly active rate.",
          "Built electronic contract platform, digitizing paper processes including signing, review, and store opening workflows.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Engineer",
        period: "2013/1 - 2014/1",
        description: [
          "Developed and maintained internal administrative systems using PHP (Smarty) + jQuery.",
          "Built foreclosure information system with advanced multi-criteria search similar to 591 rental platform.",
          "Designed customized matching strategies with automated filtering, daily data comparison, and automatic report delivery.",
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "Featured Projects",
    subtitle: "Showcasing technical depth and innovation",
    clickToView: "Click to view details",
    projectDesc: "Project Description",
    features: "Key Features",
    techStack: "Tech Stack",
    achievement: "Key Achievement",
    projects: [
      {
        title: "Copila AI",
        desc: "AI Customization Platform",
        fullDesc:
          "Provides AI conversation and drawing, along with AI-generated customized charts. Implemented WebSocket Server with Laravel Swoole Octane, paired with Angular for real-time communication, AI drawing, and online sketching. Integrated OpenAI API for AI-powered mind maps, flowcharts, and Mandala thinking grids.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Near-perfect Lighthouse scores",
        features: [
          "AI Mind Map Generation",
          "AI Flowchart Generation",
          "Mandala Thinking Grid",
          "Real-time Communication",
          "AI Drawing",
          "Online Sketching",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "OMO E-commerce System",
        fullDesc:
          "Multi-vendor marketplace with auction-style shopping, integrating online shopping and offline store payments. Designed personalized recommendation algorithms based on user footprints (order history, browsing behavior) for dynamic product page customization.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Nearly 20,000 members in one year",
        features: [
          "Multi-vendor Marketplace",
          "Auction-style Shopping",
          "Multi-tier Bonus System",
          "E-wallet System",
          "Online-Offline Payment Integration",
        ],
      },
      {
        title: "StocX",
        desc: "Stock Market Training System",
        fullDesc:
          "Provides historical stock price data for training market sense and stock selection strategies. Optimized low-cost shared hosting through caching and process design, achieving 500+ concurrent users.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 concurrent users, shared by KOL & bestselling authors",
        features: [
          "K-line Chart Analysis",
          "Potential Stock Screening",
          "Strategy Training",
          "Historical Data Backtesting",
        ],
      },
      {
        title: "Dermatoglyphics System",
        desc: "Fingerprint Detection Platform",
        fullDesc:
          "Provides fingerprint detection and report generation for children and parents. Includes student management, dermatoglyphic analysis, and comprehensive report generation.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Automated report generation",
        features: [
          "Student Management",
          "Dermatoglyphic Analysis",
          "Brain Function Charts",
          "PDF Report Export",
        ],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Let's Connect",
    subtitle:
      "Whether you have a question, a project idea, or just want to discuss the latest in tech, feel free to reach out.",
    email: "Email",
    location: "Location",
    locationValue: "Taipei, Taiwan",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessage: "Message",
    formMessagePlaceholder: "Hello Stephen...",
    sendMessage: "Send Message",
  },

  // Footer
  footer: {
    copyright: "All rights reserved",
  },
};

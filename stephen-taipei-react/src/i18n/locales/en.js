// English (values-en)
export default {
  // Navbar
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    portfolio: "Portfolio",
    tools: "Open Source",
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
      "Led a 6-person team using Git (CI/CD), Trello, Slack, and RedMine for project management. Successfully completed multiple Web / Android App / iOS App developments, accumulating practical experience in requirements analysis, system planning, collaboration, and code quality control.",
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
          "Directly managed 2-4 frontend engineers, indirectly coordinated multiple support staff, organized regular technical sharing sessions.",
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

  // Tools Section
  tools: {
    title: "Stephen's Open Source Tools",
    subtitle: "8000+ free open source tools I co-created with AI, covering AI, games, development tools and more, completely free to use",
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
        description: "1000+ frontend-only games, no installation required, play instantly, completely free",
      },
      miniTools: {
        title: "Mini Tools",
        description: "1000+ frontend-only utilities for text processing, image editing, encryption and more",
      },
      tailwindTemplates: {
        title: "Tailwind Templates",
        description: "1000+ beautiful Tailwind CSS UI templates and components to accelerate development",
      },
      wasmTools: {
        title: "WebAssembly Tools",
        description: "1000+ high-performance WASM tools with near-native execution speed",
      },
      webToys: {
        title: "Web Toys",
        description: "1000+ fun interactive web toys showcasing the endless possibilities of frontend tech",
      },
      webWorkers: {
        title: "Web Workers Examples",
        description: "1000+ Web Workers implementations for multi-threaded computation without blocking UI",
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
        description: "Continuously developing new tools with regular updates and maintenance",
      },
    ],
  },

  // Open Source Tools Pages
  openSource: {
    title: "Stephen's Open Source Tools Platform",
    subtitle: "8 Themes · 1000+ Open Source Tools",
    description: "Completely free, open source, running locally in your browser. Covering AI tools, web games, developer tools, visual effects and more.",
    searchPlaceholder: "Search tool categories...",
    backToHome: "Home",
    back: "Back",
    categoryNotFound: "Category not found",
    backToTools: "Back to Tools",
    openInNewTab: "Open in new tab",
    copyLink: "Copy link",
    copied: "Copied",
    refresh: "Refresh",
    previousTool: "Previous tool",
    nextTool: "Next tool",
    toolCount: "{count} tools",
    comingSoon: "Coming soon",
    free: "Completely free",
    freeDesc: "All tools are completely free to use, no registration or payment required",
    local: "Local execution",
    localDesc: "Tools run locally in your browser, your data is not transmitted, protecting your privacy",
    opensource: "Open source contribution",
    opensourceDesc: "All tools are open source, welcome to contribute and improve",
    copyrightText: "© 2025 Stephen Taipei · Open Source Tools Platform",
    github: "GitHub",
    viewAllTools: "Browse all tools",
    tools: "tools",
    sortDefault: "Default",
    sortByName: "By Name",
    sortById: "By ID",
    clearFilters: "Clear",
    foundTools: "Found {count} tools",
    noMatchingTools: "No matching tools found",
    showLess: "Show Less",
    showMore: "Show More ({count})",
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: "Awesome APP 100",
    subtitle: "100 Premium Native Apps",
    badge: "Stephen's New Platform",
    heading: "Curated Premium Native Apps",
    description: "A curated collection of 100 premium native applications for iOS and Android platforms. Each app is carefully selected for quality, performance, and user experience, bringing you the best mobile app recommendations.",
    features: [
      { title: "Native Apps", desc: "iOS & Android" },
      { title: "Premium Quality", desc: "Carefully Curated" },
      { title: "Cross Platform", desc: "Universal Experience" },
    ],
    cta: "Explore Awesome APP 100",
    visualText: "Premium Apps",
    visualSubtext: "Handpicked for Excellence",
  },

  // Footer
  footer: {
    copyright: "All rights reserved",
  },
};

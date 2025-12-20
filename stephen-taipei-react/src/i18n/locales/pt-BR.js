// Português do Brasil (values-pt-BR)
export default {
  // Navbar
  nav: {
    about: "Sobre",
    skills: "Habilidades",
    experience: "Experiência",
    portfolio: "Portfólio",
    tools: "Open Source",
    contact: "Contato",
  },

  // Hero Section
  hero: {
    name: "Stephen Chuang",
    title: "Senior Full Stack",
    subtitle: "Engenheiro",
    description:
      "Experiência em plataformas de IA, sistemas de e-commerce, fintech e aplicações educacionais. Implementou a arquitetura Nx Monorepo para compartilhar módulos entre vários projetos e garantir manutenção contínua, permitindo mais de 100 temas e reduzindo componentes complexos de 1000 para 200 linhas.",
    viewWork: "Ver Projetos",
    contactMe: "Fale Comigo",
  },

  // About Section
  about: {
    title: "Transformando ideias em",
    titleHighlight: "Realidade Digital",
    location: "Taipé, Taiwan",
    badgeTitle: "Campeão de Dança",
    badgeValue: "Campeão Nacional / Top 8 Mundial",
    description1:
      "Sou apaixonado por aprender e integrar diferentes áreas. Vim do design, migrei para gestão da informação e me concentrei no desenvolvimento full stack e arquitetura de sistemas. Domino Angular e Laravel, com experiência completa do frontend ao backend.",
    description2:
      "Liderei uma equipe de 6 pessoas utilizando Git (CI/CD), Trello, Slack e RedMine em um fluxo Kanban. Concluí vários desenvolvimentos de Web / Android App / iOS App, acumulando experiência prática em análise de requisitos, planejamento de sistemas, colaboração e qualidade de código.",
    description3:
      "Fora do trabalho, fundei um estúdio de street dance e conquistei o título nacional e Top 8 mundial. Essas experiências trouxeram perseverança, foco e determinação para superar desafios, algo que levo para minha vida profissional.",
    performanceTitle: "Performance",
    performanceDesc: "Otimização para velocidade e escala",
    leadershipTitle: "Liderança",
    leadershipDesc: "Mentoria e formação de equipes",
  },

  // Skills Section
  skills: {
    title: "Especialidades Técnicas",
    subtitle: "Ferramentas completas para criar soluções digitais modernas",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Ferramentas de IA",
  },

  // Experience Section
  experience: {
    title: "Trajetória Profissional",
    present: "Atual",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Engenheiro Sênior",
        period: "2024/1 - Presente",
        description: [
          "Liderança da arquitetura Nx Monorepo, integrando múltiplos projetos com compartilhamento de módulos e mais de 100 temas com troca dinâmica de layout.",
          "Atualização para Angular 19, adoção total de Signal/Computed/Effect, reduzindo dependência de RxJS com otimização OnPush.",
          "Modularização de lógica complexa em componentes compartilhados, reduzindo código de 1000 para menos de 200 linhas.",
          "Gestão direta de 2-4 engenheiros frontend, coordenação indireta de vários membros de suporte e sessões técnicas regulares.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Engenheiro Full Stack",
        period: "2014/1 - 2023/11",
        description: [
          "Desenvolvimento de plataforma de e-commerce direto com Laravel + Angular PWA, incluindo carrinho, gestão de membros e sistema administrativo.",
          "Implementação de cache Redis para ranking de produtos e tags de palavras-chave, reduzindo consultas ao banco de dados em 70%.",
          "Gestão de equipe multidisciplinar de 6 pessoas, ajudando o cliente a alcançar 20.000 membros em 12 meses com mais de 85% de usuários ativos mensais.",
          "Construção de plataforma de contratos eletrônicos, digitalizando processos em papel, incluindo assinatura, revisão e abertura de lojas.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Engenheiro",
        period: "2013/1 - 2014/1",
        description: [
          "Desenvolvimento e manutenção de sistemas administrativos internos usando PHP (Smarty) + jQuery.",
          "Criação de sistema de informações de leilão judicial com pesquisa avançada por múltiplos critérios.",
          "Desenho de estratégias de correspondência personalizadas com filtragem automática, comparação diária de dados e envio automático de relatórios.",
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "Projetos em Destaque",
    subtitle: "Mostrando profundidade técnica e inovação",
    clickToView: "Clique para ver detalhes",
    projectDesc: "Descrição do Projeto",
    features: "Funcionalidades",
    techStack: "Tecnologias",
    achievement: "Conquista-chave",
    projects: [
      {
        title: "Copila AI",
        desc: "Plataforma de Personalização de IA",
        fullDesc:
          "Oferece conversas e desenhos com IA, além de gráficos personalizados gerados pela IA. Implementação de servidor WebSocket com Laravel Swoole Octane, combinado com Angular para comunicação em tempo real, desenho com IA e esboço online. Integra a API do OpenAI para mapas mentais, fluxogramas e grade Mandala com IA.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Pontuações quase perfeitas no Lighthouse",
        features: [
          "Geração de mapa mental com IA",
          "Geração de fluxograma com IA",
          "Grade Mandala",
          "Comunicação em tempo real",
          "Desenho com IA",
          "Esboço online",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Sistema OMO de E-commerce",
        fullDesc:
          "Marketplace multivendedor com compras em estilo leilão, integrando compras online e pagamentos em loja física. Algoritmos de recomendação personalizados baseados nos rastros do usuário (histórico de pedidos, comportamento de navegação) para personalizar páginas de produto.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Quase 20.000 membros em um ano",
        features: [
          "Marketplace multivendedor",
          "Compras em estilo leilão",
          "Sistema de bônus em camadas",
          "Carteira digital",
          "Integração de pagamento online e offline",
        ],
      },
      {
        title: "StocX",
        desc: "Sistema de Treino do Mercado de Ações",
        fullDesc:
          "Fornece dados históricos de preços para treinar sensibilidade ao mercado e estratégias de seleção de ações. Otimizou ambiente de hospedagem compartilhada de baixo custo com cache e desenho de processos, alcançando mais de 500 usuários simultâneos.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 usuários simultâneos, divulgado por KOLs e autores best-seller",
        features: [
          "Análise de gráficos de velas",
          "Triagem de ações potenciais",
          "Treino de estratégias",
          "Backtesting com dados históricos",
        ],
      },
      {
        title: "Dermatoglyphics System",
        desc: "Plataforma de Impressão Digital",
        fullDesc:
          "Oferece detecção de impressão digital e geração de relatórios para crianças e pais. Inclui gestão de estudantes, análise dermatoglífica e emissão de relatórios completos.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Geração automatizada de relatórios",
        features: [
          "Gestão de estudantes",
          "Análise dermatoglífica",
          "Gráficos de funções cerebrais",
          "Exportação de relatórios em PDF",
        ],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Vamos Conversar",
    subtitle:
      "Tem uma pergunta, uma ideia de projeto ou quer falar sobre tecnologia? Sinta-se à vontade para me chamar.",
    email: "Email",
    location: "Localização",
    locationValue: "Taipé, Taiwan",
    formName: "Nome",
    formNamePlaceholder: "Seu nome",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessage: "Mensagem",
    formMessagePlaceholder: "Olá Stephen...",
    sendMessage: "Enviar Mensagem",
  },

  // Tools Section
  tools: {
    title: "Stephen's Open Source Tools",
    subtitle: "8000+ ferramentas open source gratuitas co-desenvolvidas com IA, incluindo IA, jogos, ferramentas de desenvolvimento e mais",
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
    title: "Plataforma de Ferramentas Open Source do Stephen",
    subtitle: "8 Temas · 1000+ Ferramentas Open Source",
    description: "Completamente gratuito, open source, executando localmente no seu navegador. Cobrindo ferramentas de IA, jogos web, ferramentas de desenvolvimento, efeitos visuais e muito mais.",
    searchPlaceholder: "Pesquisar categorias de ferramentas...",
    backToHome: "Início",
    back: "Voltar",
    categoryNotFound: "Categoria não encontrada",
    backToTools: "Voltar para Ferramentas",
    openInNewTab: "Abrir em nova aba",
    copyLink: "Copiar link",
    copied: "Copiado",
    refresh: "Atualizar",
    previousTool: "Ferramenta anterior",
    nextTool: "Próxima ferramenta",
    toolCount: "{count} ferramentas",
    comingSoon: "Em breve",
    free: "Completamente gratuito",
    freeDesc: "Todas as ferramentas são completamente gratuitas, sem necessidade de registro ou pagamento",
    local: "Execução local",
    localDesc: "As ferramentas são executadas localmente no seu navegador, seus dados não são transmitidos, protegendo sua privacidade",
    opensource: "Contribuição open source",
    opensourceDesc: "Todas as ferramentas são open source, contribuições e melhorias são bem-vindas",
    copyrightText: "© 2024 Stephen Taipei · Plataforma de Ferramentas Open Source",
    github: "GitHub",
    viewAllTools: "Ver todas as ferramentas",
    tools: "ferramentas",
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: 'Awesome APP 100',
    subtitle: '100 Aplicativos Nativos Premium',
    badge: 'Nova Plataforma do Stephen',
    heading: 'Aplicativos Nativos Premium Selecionados',
    description: 'Uma coleção de 100 aplicativos nativos premium selecionados para plataformas iOS e Android. Cada aplicativo foi cuidadosamente escolhido pela qualidade, desempenho e experiência do usuário.',
    features: [
      { title: 'Apps Nativos', desc: 'iOS & Android' },
      { title: 'Qualidade Premium', desc: 'Cuidadosamente Selecionados' },
      { title: 'Multiplataforma', desc: 'Experiência Universal' },
    ],
    cta: 'Explorar Awesome APP 100',
    visualText: 'Apps Premium',
    visualSubtext: 'Selecionados pela Excelência',
  },

  // Footer
  footer: {
    copyright: "Todos os direitos reservados",
  },
};

// Português (values-pt)
export default {
  // Navbar
  nav: {
    about: "Sobre",
    skills: "Competências",
    experience: "Experiência",
    portfolio: "Portfólio",
    contact: "Contacto",
  },

  // Hero Section
  hero: {
    name: "Stephen Chuang",
    title: "Senior Full Stack",
    subtitle: "Engenheiro",
    description:
      "Experiência em plataformas de IA, sistemas de comércio eletrónico, fintech e aplicações educativas. Implementou a arquitetura Nx Monorepo para partilha de módulos entre projetos e manutenção a longo prazo, permitindo mais de 100 temas e reduzindo componentes complexos de 1000 para 200 linhas.",
    viewWork: "Ver Projetos",
    contactMe: "Contactar",
  },

  // About Section
  about: {
    title: "Transformar ideias em",
    titleHighlight: "Realidade Digital",
    location: "Taipé, Taiwan",
    badgeTitle: "Campeão de Dança",
    badgeValue: "Vencedor Nacional / Top 8 Mundial",
    description1:
      "Sou apaixonado por aprender e integrar áreas distintas. Venho do design, migrei para a gestão de informação e concentrei-me no desenvolvimento full stack e na arquitetura de sistemas. Domínio de Angular e Laravel, com experiência completa desde o frontend ao backend.",
    description2:
      "Liderei uma equipa de 6 pessoas usando Git, Trello e Slack num modelo Kanban. Concluí vários desenvolvimentos de WebApp, acumulando experiência prática em análise de requisitos, planeamento de sistemas, colaboração e controlo de qualidade de código.",
    description3:
      "Fora do trabalho, fundei um estúdio de street dance e alcancei o título nacional e Top 8 mundial. Essas vivências trouxeram perseverança, foco e determinação para superar desafios, algo que levo para o meu trabalho.",
    performanceTitle: "Performance",
    performanceDesc: "Otimização para velocidade e escala",
    leadershipTitle: "Liderança",
    leadershipDesc: "Mentoria e construção de equipa",
  },

  // Skills Section
  skills: {
    title: "Especialização Técnica",
    subtitle: "Ferramentas completas para criar soluções digitais modernas",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Ferramentas de IA",
  },

  // Experience Section
  experience: {
    title: "Percurso Profissional",
    present: "Atualmente",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Engenheiro Sénior",
        period: "2024/1 - Presente",
        description: [
          "Liderança da arquitetura Nx Monorepo, integrando vários projetos com partilha de módulos e mais de 100 temas com mudança dinâmica de layout.",
          "Atualização para Angular 19, adoção total de Signal/Computed/Effect, reduzindo a dependência de RxJS com otimização OnPush.",
          "Modularização de lógica complexa em componentes partilhados, reduzindo código de 1000 para menos de 200 linhas.",
          "Gestão direta de 2-4 engenheiros frontend, coordenação indireta de 6 membros de apoio e sessões regulares de partilha técnica.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Engenheiro Full Stack",
        period: "2014/1 - 2023/11",
        description: [
          "Desenvolvimento de plataforma de e-commerce direto com Laravel + Angular PWA, incluindo carrinho, gestão de membros e backoffice.",
          "Implementação de cache Redis para ranking de produtos e etiquetas de pesquisa, reduzindo consultas à base de dados em 70%.",
          "Gestão de equipa multidisciplinar de 6 pessoas, ajudando o cliente a alcançar 20.000 membros em 12 meses com mais de 85% de utilizadores ativos mensais.",
          "Construção de plataforma de contratos eletrónicos, digitalizando processos em papel, desde assinatura, revisão até abertura de lojas.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Engenheiro",
        period: "2013/1 - 2014/1",
        description: [
          "Desenvolvimento e manutenção de sistemas administrativos internos usando PHP (Smarty) + jQuery.",
          "Criação de sistema de informação sobre imóveis em leilão com pesquisa avançada de múltiplos critérios.",
          "Desenho de estratégias de correspondência personalizadas com filtragem automática, comparação diária de dados e envio de relatórios.",
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "Projetos em Destaque",
    subtitle: "Mostrar profundidade técnica e inovação",
    clickToView: "Clique para ver detalhes",
    projectDesc: "Descrição",
    features: "Funcionalidades",
    techStack: "Tecnologias",
    achievement: "Conquista-chave",
    projects: [
      {
        title: "Copila AI",
        desc: "Plataforma de Personalização de IA",
        fullDesc:
          "Disponibiliza conversação e desenho com IA, além de gráficos personalizados gerados por IA. Implementou servidor WebSocket com Laravel Swoole Octane, combinado com Angular para comunicação em tempo real, desenho com IA e esboço online. Integra a API do OpenAI para mapas mentais, fluxogramas e grelha Mandala gerados por IA.",
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
          "Grelha Mandala",
          "Comunicação em tempo real",
          "Desenho com IA",
          "Esboço online",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Sistema OMO de E-commerce",
        fullDesc:
          "Marketplace multi-vendedor com compras em estilo de leilão, integrando compras online e pagamentos em loja física. Algoritmos de recomendação personalizados baseados nas pegadas do utilizador (histórico de pedidos, comportamento de navegação) para personalizar páginas de produto.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Quase 20.000 membros em um ano",
        features: [
          "Marketplace multi-vendedor",
          "Compras em estilo de leilão",
          "Bónus em vários níveis",
          "Carteira digital",
          "Integração de pagamento online e offline",
        ],
      },
      {
        title: "StocX",
        desc: "Sistema de Treino do Mercado de Ações",
        fullDesc:
          "Fornece dados históricos de preços para treinar sensibilidade de mercado e estratégias de seleção de ações. Otimizou ambiente de alojamento partilhado de baixo custo através de cache e desenho de processos, alcançando mais de 500 utilizadores simultâneos.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 utilizadores simultâneos, divulgado por KOLs e autores best-seller",
        features: [
          "Análise de gráficos de velas",
          "Seleção de ações potenciais",
          "Treino de estratégias",
          "Backtesting de dados históricos",
        ],
      },
      {
        title: "Dermatoglyphics System",
        desc: "Plataforma de Impressão Digital",
        fullDesc:
          "Oferece deteção de impressões digitais e geração de relatórios para crianças e pais. Inclui gestão de estudantes, análise dermatoglífica e emissão de relatórios completos.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Geração de relatórios automatizada",
        features: [
          "Gestão de estudantes",
          "Análise de dermatoglifos",
          "Gráficos de funções cerebrais",
          "Exportação de relatórios em PDF",
        ],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Contacte-me",
    subtitle:
      "Tem uma questão ou uma ideia de projeto? Sinta-se à vontade para falar comigo.",
    email: "Email",
    location: "Localização",
    locationValue: "Taipé, Taiwan",
    formName: "Nome",
    formNamePlaceholder: "O seu nome",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessage: "Mensagem",
    formMessagePlaceholder: "Olá Stephen...",
    sendMessage: "Enviar Mensagem",
  },

  // Footer
  footer: {
    copyright: "Todos os direitos reservados",
  },
};

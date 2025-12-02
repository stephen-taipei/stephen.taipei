// 简体中文（中国） (values-zh-CN)
export default {
  // Navbar
  nav: {
    about: '关于我',
    skills: '技能',
    experience: '经历',
    portfolio: '作品集',
    contact: '联系',
  },

  // Hero Section
  hero: {
    name: '庄宗宪 Stephen',
    title: '资深全栈工程师',
    subtitle: '系统架构师',
    description:
      '拥有 AI 平台、电商系统、金融交易与教育应用的跨领域开发背景。导入 Nx Monorepo 架构，实现多项目模块共享与长期维护，支持 100+ 主题动态配置，并将复杂组件代码从上千行精简到 200 行。',
    viewWork: '专案作品',
    contactMe: '联系我',
  },

  // About Section
  about: {
    title: '将创意转化为',
    titleHighlight: '数字现实',
    location: '台北，中国台湾',
    badgeTitle: '街舞冠军',
    badgeValue: '全国冠军 / 世界前 8 强',
    description1:
      '我热衷于学习与跨领域整合，从设计背景转向信息管理，最终专注于全栈开发与系统架构。熟悉 Angular 与 Laravel，具备从前端框架到后端架构的完整开发经验。',
    description2:
      '曾带领 6 人团队，使用 Git、Trello、Slack 等工具进行看板式项目管理，成功完成多项 WebApp 开发与上线，累积需求分析、系统规划、协作与代码质量控管的实战经验。',
    description3:
      '在职场之外，我创立了街舞教室，并在街舞比赛中获得全国冠军与世界前 8 强。这样的经历培养了毅力、专注与突破挑战的决心，也延伸到我的工作态度中。',
    performanceTitle: '效能优化',
    performanceDesc: '追求速度与规模的极致',
    leadershipTitle: '团队领导',
    leadershipDesc: '人才培养与团队建设',
  },

  // Skills Section
  skills: {
    title: '专业技能',
    subtitle: '打造现代数字解决方案的完整技术工具箱',
    frontend: '前端',
    backend: '后端',
    devops: 'DevOps',
    ai: 'AI 工具',
  },

  // Experience Section
  experience: {
    title: '职业历程',
    present: '现在',
    jobs: [
      {
        company: '胜和科技有限公司',
        role: '资深工程师',
        period: '2024/1 - 现在',
        description: [
          '主导 Nx Monorepo 架构，整合多项目与模块共享，以 API 驱动完成 100+ 主题并支持多版型动态切换。',
          '持续升级到 Angular 19，全面导入 Signal / Computed / Effect，减少 RxJS 依赖，并搭配 OnPush 优化效能。',
          '将既有复杂逻辑与样式模块化为共享组件，使原本上千行代码缩减至 200 行以内。',
          '直接管理 2-4 位前端工程师，间接协调 6 位支援人员，定期举办内部技术分享会。',
        ],
      },
      {
        company: '向尚设计有限公司',
        role: '全栈工程师',
        period: '2014/1 - 2023/11',
        description: [
          '以 Laravel + Angular PWA 架构开发直销电商平台，涵盖购物车、会员管理与后台管理系统。',
          '导入 Redis 缓存架构，将商品排名、关键字标签等高频查询数据缓存化，数据库查询量降低 70%。',
          '管理 6 人跨领域团队，协助客户在 12 个月内会员数从 0 成长到 2 万名，月活跃用户率超过 85%。',
          '建设电子合同平台，将纸本流程全面数字化，整合签约、审核、开店、发信与短信等完整作业。',
        ],
      },
      {
        company: '馨琳扬企管顾问有限公司',
        role: '工程师',
        period: '2013/1 - 2014/1',
        description: [
          '以 PHP（Smarty）+ jQuery 开发与维护公司内部行政管理系统，优化日常流程与资料维护效率。',
          '建设法拍屋信息系统，提供类似 591 租屋网的多条件进阶搜索功能。',
          '设计客制化媒合策略与自动化筛选排程，依订阅条件每日比对资料并自动寄送报告至用户邮箱。',
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: '专案作品',
    subtitle: '展现技术深度与创新应用',
    clickToView: '点击查看详情',
    projectDesc: '专案描述',
    features: '主要功能',
    techStack: '技术架构',
    achievement: '关键成就',
    projects: [
      {
        title: 'Copila AI',
        desc: 'AI 客制化功能平台',
        fullDesc:
          '提供 AI 对话与绘图，以及由 AI 生成多项客制化图表等功能。以 Laravel Swoole Octane 实现 WebSocket 服务器，搭配 Angular 呈现即时通讯功能、AI 绘图与线上手绘。串接 OpenAI API，实现 AI 版心智图、流程图与曼陀罗九宫格思考法。',
        tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
        achievement: 'Lighthouse 检测各项目接近满分',
        features: ['AI 心智图生成', 'AI 流程图生成', '曼陀罗九宫格思考', '即时通讯', 'AI 绘图', '线上手绘功能'],
      },
      {
        title: '米宝镖局',
        desc: 'OMO 电商购物车系统',
        fullDesc:
          '多店家商城购物车及类拍卖式购物，整合线上购物和线下门市支付。基于用户足迹（订单记录、浏览行为等）设计个性化推荐算法，动态客制化商品资讯页面。',
        tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
        achievement: '一年内累计近 2 万名会员',
        features: ['多店家商城', '类拍卖购物系统', '多层级奖金制度', '电子钱包系统', '线上线下整合支付'],
      },
      {
        title: 'StocX',
        desc: '股市盘感训练系统',
        fullDesc:
          '提供股市历史价位数据，训练盘感及选股策略。透过缓存与流程设计，优化低成本共享主机效能，实现 500+ 人同时在线纪录。',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '500 人同时在线、获 KOL 与畅销书作者分享',
        features: ['K 线图分析', '潜力股筛选', '选股策略训练', '历史数据回测'],
      },
      {
        title: 'Dermatoglyphics System',
        desc: '指纹检测平台',
        fullDesc:
          '提供指纹检测与报告生成，适用于儿童与家长。包含学生管理、皮纹分析与完整报告生成。',
        tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '自动化报告生成',
        features: ['学生管理', '皮纹分析', '脑功能图表', 'PDF 报告导出'],
      },
    ],
  },

  // Contact Section
  contact: {
    title: '联系我',
    subtitle: '无论是项目合作、想法交流或技术咨询，都欢迎与我联络。',
    email: '邮箱',
    location: '位置',
    locationValue: '台北，中国台湾',
    formName: '姓名',
    formNamePlaceholder: '你的名字',
    formEmail: '邮箱',
    formEmailPlaceholder: 'your@email.com',
    formMessage: '留言',
    formMessagePlaceholder: 'Hello Stephen...',
    sendMessage: '发送讯息',
  },

  // Footer
  footer: {
    copyright: '版权所有',
  },
};

// 台灣繁體中文 (values-zh-TW)
export default {
  // Navbar
  nav: {
    about: '關於我',
    skills: '技能',
    experience: '經歷',
    portfolio: '作品集',
    tools: '開源工具',
    contact: '聯繫',
  },

  // Hero Section
  hero: {
    name: '莊宗憲 Stephen',
    title: '資深全端工程師',
    subtitle: '系統架構師',
    description: '擁有 AI 平台、電商系統、金融交易與教育應用的跨領域開發背景。導入 Nx Monorepo 架構，落實多專案模組共享與長期維護，推動百種主題動態配置，並將複雜元件程式從千行精簡至 200 行。',
    viewWork: '專案作品',
    contactMe: '聯繫我',
  },

  // About Section
  about: {
    title: '將創意轉化為',
    titleHighlight: '數位現實',
    location: '台北, 台灣',
    badgeTitle: '街舞冠軍',
    badgeValue: '全國冠軍 / 全球前 8 強',
    description1: '我熱衷於學習與跨領域整合，從設計背景轉向資訊管理，最終專注於前後端開發與系統架構。熟悉 Angular 與 Laravel，具備從前端框架到後端架構的完整開發經驗。',
    description2: '曾帶領 6 人團隊，透過 Git (CI/CD)、Trello、Slack、RedMine 等工具進行專案管理，成功完成多項 Web / Android App / iOS App 開發與上架，累積需求分析、系統規劃、協作與程式碼品質控管的實戰經驗。',
    description3: '在職場之外，曾創立街舞教室，並於街舞比賽中獲得全國冠軍及全球前 8 強成績。這些經歷培養了毅力、專注力與突破挑戰的決心，也延伸到我的工作態度中。',
    performanceTitle: '效能優化',
    performanceDesc: '追求速度與規模的極致',
    leadershipTitle: '團隊領導',
    leadershipDesc: '人才培育與團隊建設',
  },

  // Skills Section
  skills: {
    title: '專業技能',
    subtitle: '打造現代數位解決方案的完整技術工具箱',
    frontend: '前端',
    backend: '後端',
    devops: 'DevOps',
    ai: 'AI 工具',
  },

  // Experience Section
  experience: {
    title: '職涯歷程',
    present: '現在',
    jobs: [
      {
        company: '____科技有限公司',
        role: '資深工程師',
        period: '2024/1 - 現在',
        description: [
          '主導 Nx Monorepo 架構，整合多專案與模組共享，以 API 驅動完成百種以上主題、支援多版型動態切換。',
          '持續升級至 Angular 19，全面導入 Signal / Computed / Effect，減少 RxJS 依賴，搭配 OnPush 優化效能。',
          '將既有的複雜邏輯與樣式模組化為 Shared Component，使原本千行程式縮減至 200 行內。',
          '直接管理 2-4 位前端工程師，間接協調多位支援人員，定期舉辦內部技術分享會。',
        ],
      },
      {
        company: '向尚設計有限公司',
        role: '全端工程師',
        period: '2014/1 - 2023/11',
        description: [
          '以 Laravel + Angular PWA 架構開發直銷電商平台，涵蓋購物車、會員管理與後台管理系統。',
          '導入 Redis 快取架構，將商品排名、關鍵字標籤等高頻查詢資料快取化，資料庫查詢量降低 70%。',
          '管理 6 人跨領域團隊，協助客戶於 12 個月內會員數自零突破至 2 萬名，月活躍用戶率超過 85%。',
          '建置電子合約平台，將紙本流程全面數位化，整合簽約、審核、開店、發信與簡訊等完整作業。',
        ],
      },
      {
        company: '馨琳揚企管顧問有限公司',
        role: '工程師',
        period: '2013/1 - 2014/1',
        description: [
          '以 PHP（Smarty）+ jQuery 開發與維護公司內部行政管理系統，優化日常流程與資料維護效率。',
          '建置法拍屋資訊系統，提供類似 591 租屋網的多條件進階搜尋功能。',
          '設計客製化媒合策略與自動化篩選排程，依訂閱條件每日比對資料並自動寄送報告至用戶信箱。',
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: '專案作品',
    subtitle: '展現技術深度與創新應用',
    clickToView: '點擊查看詳情',
    projectDesc: '專案描述',
    features: '主要功能',
    techStack: '技術架構',
    achievement: '關鍵成就',
    projects: [
      {
        title: 'Copila AI',
        desc: 'AI 客製化功能平台',
        fullDesc: '提供 AI 對話與繪圖，以及由 AI 生成多項客製化圖表等功能。以 Laravel Swoole Octane 實踐 WebSocket Server，搭配 Angular 呈現即時通訊功能，提供 AI 繪圖並實踐線上手繪功能。串接 OpenAI API 實現 AI 版心智圖、流程圖、曼陀羅九宮格思考術。',
        tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
        achievement: 'Lighthouse 檢測各項目接近滿分',
        features: ['AI 心智圖生成', 'AI 流程圖生成', '曼陀羅九宮格思考術', '即時通訊', 'AI 繪圖', '線上手繪功能'],
      },
      {
        title: '米寶鏢局',
        desc: 'OMO 電商購物車系統',
        fullDesc: '多店家商城購物車及類拍賣式購物，整合線上購物和線下門市支付。基於用戶足跡（訂單紀錄、瀏覽行為等）設計個人化推薦演算法，動態客製化商品資訊頁面。',
        tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
        achievement: '一年內累積近 2 萬名會員',
        features: ['多店家商城', '類拍賣購物系統', '多層級獎金制度', '電子錢包系統', '線上線下整合支付'],
      },
      {
        title: 'StocX',
        desc: '股市盤感訓練系統',
        fullDesc: '提供股市歷史價位資料，訓練盤感及選股策略。透過快取和流程設計，優化低成本共享主機效能，實現高達 500 人同時在線記錄。',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '500 人同時在線、獲 KOL 與暢銷書作者分享',
        features: ['K線圖分析', '潛力股篩選', '選股策略訓練', '歷史數據回測'],
      },
      {
        title: '皮紋檢測系統',
        desc: '手指皮紋檢測平台',
        fullDesc: '為幼兒及家長們提供手指皮紋檢測及報表產出。包含學員管理、皮紋分析、報告生成等完整功能。',
        tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '自動化報表產出',
        features: ['學員資料管理', '皮紋數據分析', '大腦功能圖表', 'PDF 報告輸出'],
      },
    ],
  },

  // Contact Section
  contact: {
    title: '聯繫我',
    subtitle: '無論您有任何問題、專案合作想法，或是想要討論最新的技術趨勢，歡迎隨時與我聯繫。',
    email: 'Email',
    location: '地點',
    locationValue: '台北, 台灣',
    formName: '姓名',
    formNamePlaceholder: '您的姓名',
    formEmail: 'Email',
    formEmailPlaceholder: 'your@email.com',
    formMessage: '訊息內容',
    formMessagePlaceholder: '您好，Stephen...',
    sendMessage: '發送訊息',
  },

  // Tools Section
  tools: {
    title: 'Stephen 的開源工具',
    subtitle: '我與 AI 共同協作開發並維護的 8000+ 免費開源工具，涵蓋 AI、遊戲、開發工具等多個領域，完全開源免費使用',
    totalCount: '8000+ 免費工具',
    toolsLabel: '工具',
    categories: {
      aiTools: {
        title: 'AI 本地工具',
        description: '1000+ 個 AI 工具，完全在瀏覽器本地執行，零後端、100% 隱私保護',
      },
      chromeExtensions: {
        title: 'Chrome 擴充功能',
        description: '1000+ 個實用的瀏覽器擴充功能，提升工作效率與網頁體驗',
      },
      freeGames: {
        title: '免費遊戲',
        description: '1000+ 個純前端小遊戲，無需安裝，打開即玩，完全免費',
      },
      miniTools: {
        title: '迷你工具',
        description: '1000+ 個純前端小工具，文字處理、圖片編輯、加密解密等實用功能',
      },
      tailwindTemplates: {
        title: 'Tailwind 模板',
        description: '1000+ 個精美的 Tailwind CSS UI 模板與元件，加速開發',
      },
      wasmTools: {
        title: 'WebAssembly 工具',
        description: '1000+ 個高效能 WASM 工具，執行速度接近原生應用',
      },
      webToys: {
        title: '網頁玩具',
        description: '1000+ 個有趣的互動式網頁玩具，展現前端技術的無限可能',
      },
      webWorkers: {
        title: 'Web Workers 範例',
        description: '1000+ 個 Web Workers 實作範例，多執行緒運算不阻塞 UI',
      },
    },
    features: [
      {
        title: '完全開源',
        description: '所有工具完全開源，可自由使用、修改和分發',
      },
      {
        title: '本地執行',
        description: '所有工具在瀏覽器本地運行，保護您的隱私',
      },
      {
        title: '持續更新',
        description: '持續開發新工具，定期更新與維護',
      },
    ],
  },

  // Open Source Tools Pages
  openSource: {
    title: 'Stephen 的開源工具平台',
    subtitle: '8 大主題 · 1000+ 開源工具',
    description: '完全免費、開源、在瀏覽器本地運行。涵蓋 AI 工具、網頁遊戲、開發者工具、視覺效果等多種類別。',
    searchPlaceholder: '搜尋工具類別...',
    backToHome: '首頁',
    back: '返回',
    categoryNotFound: '類別不存在',
    backToTools: '返回工具平台',
    openInNewTab: '在新標籤頁開啟',
    copyLink: '複製連結',
    copied: '已複製',
    refresh: '重新整理',
    previousTool: '上一個工具',
    nextTool: '下一個工具',
    toolCount: '{count} 個工具',
    comingSoon: '開發中',
    free: '完全免費',
    freeDesc: '所有工具完全免費使用，無需註冊或付費',
    local: '本地運行',
    localDesc: '工具在瀏覽器本地運行，資料不外傳，保護隱私',
    opensource: '開源貢獻',
    opensourceDesc: '所有工具開源，歡迎貢獻與改進',
    copyrightText: '© 2024 Stephen Taipei · 開源工具平台',
    github: 'GitHub',
    viewAllTools: '瀏覽所有工具',
    tools: '工具',
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: 'Awesome APP 100',
    subtitle: '100 款精選原生應用程式',
    badge: 'Stephen 新平台',
    heading: '精選優質原生 APP 推薦',
    description: '精心挑選 100 款優質原生應用程式，涵蓋 iOS 與 Android 平台，專注於品質、效能與使用者體驗。每款 APP 都經過嚴格篩選，為您帶來最佳的移動應用體驗。',
    features: [
      { title: '原生應用', desc: 'iOS & Android' },
      { title: '精選品質', desc: '嚴格篩選' },
      { title: '跨平台', desc: '通用體驗' },
    ],
    cta: '探索 Awesome APP 100',
    visualText: '精選應用',
    visualSubtext: '追求卓越品質',
  },

  // Footer
  footer: {
    copyright: '版權所有',
  },
};

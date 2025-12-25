// Tiếng Việt (values-vi)
export default {
  // Navbar
  nav: {
    about: "Giới thiệu",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm",
    portfolio: "Dự án",
    tools: "Mã nguồn mở",
    contact: "Liên hệ",
  },

  // Hero Section
  hero: {
    name: "Stephen Chuang",
    title: "Senior Full Stack",
    subtitle: "Kỹ sư",
    description:
      "Kinh nghiệm về nền tảng AI, hệ thống thương mại điện tử, fintech và ứng dụng giáo dục. Triển khai kiến trúc Nx Monorepo để chia sẻ module giữa các dự án và bảo trì dài hạn, hỗ trợ hơn 100 chủ đề và giảm mã thành phần phức tạp từ 1000 xuống 200 dòng.",
    viewWork: "Xem dự án",
    contactMe: "Liên hệ",
  },

  // About Section
  about: {
    title: "Biến ý tưởng thành",
    titleHighlight: "Thực tế số",
    location: "Đài Bắc, Đài Loan",
    badgeTitle: "Vô địch nhảy",
    badgeValue: "Quán quân quốc gia / Top 8 thế giới",
    description1:
      "Tôi đam mê học hỏi và kết hợp đa lĩnh vực. Xuất thân từ thiết kế, chuyển sang quản trị thông tin và tập trung vào phát triển full stack cùng kiến trúc hệ thống. Thành thạo Angular và Laravel với kinh nghiệm đầy đủ từ frontend tới backend.",
    description2:
      "Dẫn dắt đội 6 người dùng Git (CI/CD), Trello, Slack, RedMine cho quản lý dự án. Hoàn thành nhiều Web / Android App / iOS App, tích lũy kinh nghiệm thực tế về phân tích yêu cầu, lập kế hoạch hệ thống, cộng tác và kiểm soát chất lượng mã.",
    description3:
      "Ngoài công việc, tôi sáng lập studio nhảy đường phố và đạt vô địch quốc gia, Top 8 thế giới. Những trải nghiệm này rèn luyện sự bền bỉ, tập trung và quyết tâm vượt thử thách, phản ánh trong thái độ làm việc của tôi.",
    performanceTitle: "Hiệu năng",
    performanceDesc: "Tối ưu cho tốc độ và mở rộng",
    leadershipTitle: "Lãnh đạo",
    leadershipDesc: "Huấn luyện & xây dựng đội ngũ",
  },

  // Skills Section
  skills: {
    title: "Chuyên môn kỹ thuật",
    subtitle: "Bộ công cụ toàn diện cho giải pháp số hiện đại",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Công cụ AI",
  },

  // Experience Section
  experience: {
    title: "Hành trình nghề nghiệp",
    present: "Hiện tại",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Kỹ sư cao cấp",
        period: "2024/1 - Nay",
        description: [
          "Dẫn dắt kiến trúc Nx Monorepo, tích hợp nhiều dự án với chia sẻ module, 100+ chủ đề và chuyển đổi bố cục động.",
          "Nâng cấp lên Angular 19, áp dụng đầy đủ Signal/Computed/Effect, giảm phụ thuộc RxJS với tối ưu OnPush.",
          "Tách logic phức tạp thành Shared Components, rút gọn mã 1000 dòng xuống dưới 200 dòng.",
          "Quản lý trực tiếp 2-4 kỹ sư frontend, phối hợp nhiều nhân sự hỗ trợ và tổ chức chia sẻ kỹ thuật định kỳ.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Kỹ sư Full Stack",
        period: "2014/1 - 2023/11",
        description: [
          "Phát triển nền tảng e-commerce bán trực tiếp với Laravel + Angular PWA, bao gồm giỏ hàng, quản lý thành viên và hệ thống quản trị.",
          "Áp dụng Redis cache cho xếp hạng sản phẩm và thẻ từ khóa, giảm 70% truy vấn cơ sở dữ liệu.",
          "Quản lý đội đa chức năng 6 người, giúp khách hàng đạt 20.000 thành viên trong 12 tháng với tỉ lệ hoạt động hàng tháng trên 85%.",
          "Xây dựng nền tảng hợp đồng điện tử, số hóa quy trình giấy tờ gồm ký, duyệt và mở cửa hàng.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Kỹ sư",
        period: "2013/1 - 2014/1",
        description: [
          "Phát triển và bảo trì hệ thống hành chính nội bộ bằng PHP (Smarty) + jQuery.",
          "Xây dựng hệ thống thông tin nhà đấu giá với tìm kiếm đa tiêu chí nâng cao.",
          "Thiết kế chiến lược ghép nối tùy chỉnh với lọc tự động, so sánh dữ liệu hàng ngày và gửi báo cáo tự động.",
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "Dự án nổi bật",
    subtitle: "Thể hiện chiều sâu kỹ thuật và đổi mới",
    clickToView: "Nhấn để xem chi tiết",
    projectDesc: "Mô tả dự án",
    features: "Tính năng chính",
    techStack: "Công nghệ",
    achievement: "Thành tựu",
    projects: [
      {
        title: "Copila AI",
        desc: "Nền tảng tùy chỉnh AI",
        fullDesc:
          "Cung cấp trò chuyện và vẽ với AI cùng các biểu đồ tùy chỉnh do AI tạo. Xây dựng máy chủ WebSocket bằng Laravel Swoole Octane kết hợp Angular cho giao tiếp thời gian thực, vẽ AI và phác thảo online. Tích hợp OpenAI API để tạo mind map, flowchart và lưới Mandala bằng AI.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Điểm Lighthouse gần như tuyệt đối",
        features: [
          "Tạo mind map AI",
          "Tạo flowchart AI",
          "Lưới Mandala",
          "Giao tiếp thời gian thực",
          "Vẽ bằng AI",
          "Phác thảo online",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Hệ thống OMO E-commerce",
        fullDesc:
          "Marketplace nhiều nhà bán với mua sắm kiểu đấu giá, kết hợp mua online và thanh toán tại cửa hàng. Thuật toán gợi ý cá nhân hóa dựa trên hành vi người dùng (đơn hàng, duyệt web) để tùy chỉnh trang sản phẩm động.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Gần 20.000 thành viên trong một năm",
        features: [
          "Marketplace nhiều nhà bán",
          "Mua kiểu đấu giá",
          "Hệ thống thưởng nhiều cấp",
          "Ví điện tử",
          "Tích hợp thanh toán online/offline",
        ],
      },
      {
        title: "StocX",
        desc: "Hệ thống luyện thị trường chứng khoán",
        fullDesc:
          "Cung cấp dữ liệu giá cổ phiếu lịch sử để luyện cảm giác thị trường và chiến lược chọn cổ phiếu. Tối ưu hosting chi phí thấp với cache và thiết kế quy trình, hỗ trợ hơn 500 người dùng đồng thời.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 người dùng đồng thời, được chia sẻ bởi KOL và tác giả bestseller",
        features: [
          "Phân tích biểu đồ nến",
          "Lọc cổ phiếu tiềm năng",
          "Luyện chiến lược",
          "Backtest dữ liệu lịch sử",
        ],
      },
      {
        title: "Dermatoglyphics System",
        desc: "Nền tảng phân tích vân tay",
        fullDesc:
          "Cung cấp kiểm tra vân tay và tạo báo cáo cho trẻ em và phụ huynh. Bao gồm quản lý học sinh, phân tích da vân tay và tạo báo cáo đầy đủ.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Tự động tạo báo cáo",
        features: [
          "Quản lý học sinh",
          "Phân tích vân tay",
          "Biểu đồ chức năng não",
          "Xuất báo cáo PDF",
        ],
      },
    ],
  },

  // Tools Section
  tools: {
    title: "Stephen's Open Source Tools",
    subtitle: "8000+ công cụ mã nguồn mở miễn phí được phát triển và duy trì cùng với AI, bao gồm AI, game, công cụ phát triển và nhiều hơn nữa",
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

  // Contact Section
  contact: {
    title: "Kết nối",
    subtitle:
      "Có câu hỏi hay ý tưởng dự án? Hãy liên hệ với tôi bất cứ lúc nào.",
    email: "Email",
    location: "Địa điểm",
    locationValue: "Đài Bắc, Đài Loan",
    formName: "Tên",
    formNamePlaceholder: "Tên của bạn",
    formEmail: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessage: "Tin nhắn",
    formMessagePlaceholder: "Hello Stephen...",
    sendMessage: "Gửi tin nhắn",
  },

  // Open Source Tools Pages
  openSource: {
    title: 'Nền tảng Công cụ Mã nguồn Mở của Stephen',
    subtitle: '8 Chủ đề · 1000+ Công cụ Mã nguồn Mở',
    description: 'Hoàn toàn miễn phí, mã nguồn mở, chạy cục bộ trên trình duyệt. Bao gồm công cụ AI, game web, công cụ phát triển, hiệu ứng hình ảnh và nhiều hơn nữa.',
    searchPlaceholder: 'Tìm kiếm danh mục công cụ...',
    backToHome: 'Trang chủ',
    back: 'Quay lại',
    categoryNotFound: 'Không tìm thấy danh mục',
    backToTools: 'Quay lại Công cụ',
    openInNewTab: 'Mở trong tab mới',
    copyLink: 'Sao chép liên kết',
    copied: 'Đã sao chép',
    refresh: 'Làm mới',
    previousTool: 'Công cụ trước',
    nextTool: 'Công cụ tiếp theo',
    toolCount: '{count} công cụ',
    comingSoon: 'Sắp ra mắt',
    free: 'Hoàn toàn miễn phí',
    freeDesc: 'Tất cả công cụ hoàn toàn miễn phí, không cần đăng ký hoặc thanh toán',
    local: 'Chạy cục bộ',
    localDesc: 'Công cụ chạy cục bộ trên trình duyệt, dữ liệu không được truyền đi, bảo vệ quyền riêng tư',
    opensource: 'Đóng góp mã nguồn mở',
    opensourceDesc: 'Tất cả công cụ đều là mã nguồn mở, chào đón đóng góp và cải tiến',
    copyrightText: '© 2025 Stephen Taipei · Nền tảng Công cụ Mã nguồn Mở',
    github: "GitHub",
    viewAllTools: "Xem tất cả các công cụ",
    tools: "công cụ",
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: 'Awesome APP 100',
    subtitle: '100 Ứng dụng Native Cao cấp',
    badge: 'Nền tảng mới của Stephen',
    heading: 'Ứng dụng Native Cao cấp được Tuyển chọn',
    description: 'Bộ sưu tập 100 ứng dụng native cao cấp được tuyển chọn cho nền tảng iOS và Android. Mỗi ứng dụng được lựa chọn cẩn thận về chất lượng, hiệu suất và trải nghiệm người dùng.',
    features: [
      { title: 'Ứng dụng Native', desc: 'iOS & Android' },
      { title: 'Chất lượng Cao cấp', desc: 'Được Tuyển chọn Cẩn thận' },
      { title: 'Đa Nền tảng', desc: 'Trải nghiệm Đa dạng' },
    ],
    cta: 'Khám phá Awesome APP 100',
    visualText: 'Ứng dụng Cao cấp',
    visualSubtext: 'Được Chọn lọc vì Sự Xuất sắc',
  },

  // Footer
  footer: {
    copyright: "Đã đăng ký bản quyền",
  },
};

// 한국어 (values-ko)
export default {
  // Navbar
  nav: {
    about: "소개",
    skills: "기술",
    experience: "경력",
    portfolio: "포트폴리오",
    tools: "오픈소스",
    contact: "문의",
  },

  // Hero Section
  hero: {
    name: "Stephen Chuang",
    title: "시니어 풀스택",
    subtitle: "엔지니어",
    description:
      "AI 플랫폼, 이커머스 시스템, 핀테크, 교육 앱을 아우르는 경험을 보유하고 있습니다. 프로젝트 간 모듈 공유와 장기 유지보수를 위해 Nx Monorepo 아키텍처를 구축했으며, 100개 이상의 테마 구성을 지원하고 복잡한 컴포넌트 코드를 1000라인에서 200라인으로 줄였습니다.",
    viewWork: "프로젝트 보기",
    contactMe: "연락하기",
  },

  // About Section
  about: {
    title: "아이디어를",
    titleHighlight: "디지털 현실로",
    location: "타이베이, 대만",
    badgeTitle: "댄스 챔피언",
    badgeValue: "전국 우승 / 세계 Top 8",
    description1:
      "학습과 융합에 열정이 있습니다. 디자인 배경에서 정보관리로 전향해 풀스택 개발과 시스템 아키텍처에 집중해 왔습니다. Angular와 Laravel에 능숙하며, 프런트엔드 프레임워크부터 백엔드 아키텍처까지 전체 개발 경험을 갖추고 있습니다.",
    description2:
      "Git (CI/CD), Trello, Slack, RedMine을 활용한 프로젝트 관리로 6인 팀을 이끌며 여러 Web / Android App / iOS App을 성공적으로 출시했습니다. 요구사항 분석, 시스템 기획, 협업, 코드 품질 관리에 대한 실무 경험을 쌓았습니다.",
    description3:
      "업무 외에는 스트리트 댄스 스튜디오를 창업해 전국 우승과 세계 Top 8을 달성했습니다. 이 경험으로 끈기와 집중력, 도전을 돌파하는 태도를 키웠으며, 이는 제 업무에도 이어집니다.",
    performanceTitle: "성능",
    performanceDesc: "속도와 확장성 최적화",
    leadershipTitle: "리더십",
    leadershipDesc: "멘토링 & 팀 빌딩",
  },

  // Skills Section
  skills: {
    title: "기술 역량",
    subtitle: "현대적인 디지털 솔루션을 위한 풀스택 도구",
    frontend: "프런트엔드",
    backend: "백엔드",
    devops: "DevOps",
    ai: "AI 도구",
  },

  // Experience Section
  experience: {
    title: "커리어 여정",
    present: "현재",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "시니어 엔지니어",
        period: "2024/1 - 현재",
        description: [
          "Nx Monorepo 아키텍처를 주도해 여러 프로젝트를 모듈 공유로 통합하고, API 기반 100+ 테마와 동적 레이아웃 전환을 구현.",
          "Angular 19로 업그레이드하고 Signal/Computed/Effect를 전면 도입, RxJS 의존도를 줄이고 OnPush 최적화 적용.",
          "복잡한 로직을 공유 컴포넌트로 모듈화하여 1000라인 코드를 200라인 이하로 단축.",
          "프런트엔드 엔지니어 2-4명 직접 관리, 6명의 지원 인력을 간접 조율하며 정기 기술 세션 운영.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "풀스택 엔지니어",
        period: "2014/1 - 2023/11",
        description: [
          "Laravel + Angular PWA로 직접판매형 이커머스 플랫폼 개발, 장바구니·회원 관리·관리자 시스템 포함.",
          "Redis 캐싱으로 상품 랭킹과 키워드 태그를 최적화해 DB 조회를 70% 감소.",
          "6인 크로스펑셔널 팀을 운영해 12개월 내 회원수 0→2만명, 월간 활성 85%+ 달성.",
          "전자 계약 플랫폼을 구축해 서명, 검수, 매장 개설 등 종이 기반 프로세스를 완전 디지털화.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "엔지니어",
        period: "2013/1 - 2014/1",
        description: [
          "PHP(Smarty) + jQuery로 사내 행정 시스템을 개발·유지보수하며 업무 효율을 개선.",
          "복합 조건 검색이 가능한 경매 부동산 정보 시스템 구축.",
          "맞춤형 매칭 전략과 자동 필터링 파이프라인을 설계해 데이터를 매일 비교하고 보고서를 자동 발송.",
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: "주요 프로젝트",
    subtitle: "기술 깊이와 혁신을 보여줍니다",
    clickToView: "세부 정보 보기",
    projectDesc: "프로젝트 설명",
    features: "핵심 기능",
    techStack: "기술 스택",
    achievement: "주요 성과",
    projects: [
      {
        title: "Copila AI",
        desc: "AI 커스터마이징 플랫폼",
        fullDesc:
          "AI 대화와 그림, AI가 생성한 맞춤형 차트를 제공합니다. Laravel Swoole Octane으로 WebSocket 서버를 구현하고 Angular로 실시간 커뮤니케이션, AI 드로잉, 온라인 스케치를 지원했습니다. OpenAI API를 연동해 AI 마인드맵, 플로우차트, 만다라 그리드를 생성합니다.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Lighthouse 거의 만점",
        features: [
          "AI 마인드맵 생성",
          "AI 플로우차트 생성",
          "만다라 그리드",
          "실시간 커뮤니케이션",
          "AI 드로잉",
          "온라인 스케치",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "OMO 이커머스 시스템",
        fullDesc:
          "다중 판매자 마켓플레이스와 경매형 쇼핑을 결합해 온라인 쇼핑과 오프라인 매장 결제를 통합했습니다. 주문 기록과 탐색 행동을 활용한 개인화 추천 알고리즘으로 상품 페이지를 동적으로 커스터마이징했습니다.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "1년 만에 회원 2만명 달성",
        features: [
          "멀티 벤더 마켓플레이스",
          "경매형 쇼핑",
          "다단계 보너스 시스템",
          "전자 지갑",
          "온·오프라인 결제 통합",
        ],
      },
      {
        title: "StocX",
        desc: "주식 시장 훈련 시스템",
        fullDesc:
          "과거 주가 데이터를 제공해 시장 감각과 종목 선택 전략을 훈련합니다. 캐싱과 프로세스 설계로 저비용 공유 호스팅 환경을 최적화하여 500+ 동시 사용자까지 지원했습니다.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "동시 500명, KOL과 베스트셀러 저자들이 공유",
        features: [
          "캔들차트 분석",
          "유망주 선별",
          "전략 훈련",
          "과거 데이터 백테스트",
        ],
      },
      {
        title: "Dermatoglyphics System",
        desc: "지문 분석 플랫폼",
        fullDesc:
          "어린이와 학부모를 위한 지문 감지와 보고서 생성을 제공합니다. 학생 관리, 지문 분석, 종합 보고서 생성을 포함합니다.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "보고서 자동 생성",
        features: [
          "학생 관리",
          "피문 분석",
          "뇌 기능 차트",
          "PDF 보고서 내보내기",
        ],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "연락하기",
    subtitle:
      "질문이나 프로젝트 아이디어, 기술 이야기가 있다면 언제든 메시지를 보내주세요.",
    email: "이메일",
    location: "위치",
    locationValue: "타이베이, 대만",
    formName: "이름",
    formNamePlaceholder: "이름을 입력하세요",
    formEmail: "이메일",
    formEmailPlaceholder: "your@email.com",
    formMessage: "메시지",
    formMessagePlaceholder: "Hello Stephen...",
    sendMessage: "메시지 보내기",
  },

  // Tools Section
  tools: {
    title: "Stephen의 오픈소스 도구",
    subtitle: "AI, 게임, 개발 도구 등 다양한 분야의 8000개 이상의 무료 오픈소스 도구를 개발 및 유지관리 중",
    totalCount: "8000+ 무료 도구",
    toolsLabel: "도구",
    categories: {
      aiTools: {
        title: "AI 로컬 도구",
        description: "브라우저에서 완전히 실행되는 1000개 이상의 AI 도구, 백엔드 불필요, 100% 개인정보 보호",
      },
      chromeExtensions: {
        title: "Chrome 확장 프로그램",
        description: "생산성과 웹 경험을 향상시키는 1000개 이상의 유용한 브라우저 확장 프로그램",
      },
      freeGames: {
        title: "무료 게임",
        description: "설치 없이 바로 플레이 가능한 1000개 이상의 프론트엔드 게임, 완전 무료",
      },
      miniTools: {
        title: "미니 도구",
        description: "텍스트 처리, 이미지 편집, 암호화 등을 위한 1000개 이상의 프론트엔드 유틸리티",
      },
      tailwindTemplates: {
        title: "Tailwind 템플릿",
        description: "개발 속도를 높이는 1000개 이상의 아름다운 Tailwind CSS UI 템플릿과 컴포넌트",
      },
      wasmTools: {
        title: "WebAssembly 도구",
        description: "네이티브에 가까운 실행 속도의 1000개 이상의 고성능 WASM 도구",
      },
      webToys: {
        title: "웹 토이",
        description: "프론트엔드 기술의 무한한 가능성을 보여주는 1000개 이상의 재미있는 인터랙티브 웹 토이",
      },
      webWorkers: {
        title: "Web Workers 예제",
        description: "UI 블로킹 없는 멀티스레드 계산을 위한 1000개 이상의 Web Workers 구현",
      },
    },
    features: [
      {
        title: "완전 오픈소스",
        description: "모든 도구는 완전히 오픈소스이며, 자유롭게 사용, 수정, 배포 가능",
      },
      {
        title: "로컬 실행",
        description: "모든 도구는 브라우저에서 로컬로 실행되어 개인정보 보호",
      },
      {
        title: "지속적 업데이트",
        description: "새로운 도구를 지속적으로 개발하고 정기적인 업데이트와 유지보수",
      },
    ],
  },

  // Open Source Tools Pages
  openSource: {
    title: 'Stephen의 오픈소스 도구 플랫폼',
    subtitle: '8개 주제 · 1000+ 오픈소스 도구',
    description: '완전 무료, 오픈소스, 브라우저에서 로컬 실행. AI 도구, 웹 게임, 개발자 도구, 시각 효과 등 다양한 분야를 다룹니다.',
    searchPlaceholder: '도구 카테고리 검색...',
    backToHome: '홈',
    back: '뒤로',
    categoryNotFound: '카테고리를 찾을 수 없습니다',
    backToTools: '도구로 돌아가기',
    openInNewTab: '새 탭에서 열기',
    copyLink: '링크 복사',
    copied: '복사됨',
    refresh: '새로고침',
    previousTool: '이전 도구',
    nextTool: '다음 도구',
    toolCount: '{count}개 도구',
    comingSoon: '개발 중',
    free: '완전 무료',
    freeDesc: '모든 도구는 완전 무료로 사용 가능하며, 등록이나 결제가 필요 없습니다',
    local: '로컬 실행',
    localDesc: '도구는 브라우저에서 로컬로 실행되며, 데이터가 전송되지 않아 개인정보를 보호합니다',
    opensource: '오픈소스 기여',
    opensourceDesc: '모든 도구는 오픈소스이며, 기여와 개선을 환영합니다',
    copyrightText: '© 2024 Stephen Taipei · 오픈소스 도구 플랫폼',
    github: "GitHub",
    viewAllTools: "모든 도구 보기",
    tools: "도구",
  },

  // Footer
  footer: {
    copyright: "판권 소유",
  },
};

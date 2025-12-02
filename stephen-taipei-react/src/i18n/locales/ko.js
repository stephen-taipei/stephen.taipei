// 한국어 (values-ko)
export default {
  // Navbar
  nav: {
    about: '소개',
    skills: '기술',
    experience: '경력',
    portfolio: '포트폴리오',
    contact: '문의',
  },

  // Hero Section
  hero: {
    name: 'Stephen Chuang',
    title: '시니어 풀스택',
    subtitle: '엔지니어',
    description:
      'AI 플랫폼, 이커머스 시스템, 핀테크, 교육 앱을 아우르는 경험을 보유하고 있습니다. 프로젝트 간 모듈 공유와 장기 유지보수를 위해 Nx Monorepo 아키텍처를 구축했으며, 100개 이상의 테마 구성을 지원하고 복잡한 컴포넌트 코드를 1000라인에서 200라인으로 줄였습니다.',
    viewWork: '프로젝트 보기',
    contactMe: '연락하기',
  },

  // About Section
  about: {
    title: '아이디어를',
    titleHighlight: '디지털 현실로',
    location: '타이베이, 대만',
    badgeTitle: '댄스 챔피언',
    badgeValue: '전국 우승 / 세계 Top 8',
    description1:
      '학습과 융합에 열정이 있습니다. 디자인 배경에서 정보관리로 전향해 풀스택 개발과 시스템 아키텍처에 집중해 왔습니다. Angular와 Laravel에 능숙하며, 프런트엔드 프레임워크부터 백엔드 아키텍처까지 전체 개발 경험을 갖추고 있습니다.',
    description2:
      'Git, Trello, Slack을 활용한 칸반 방식으로 6인 팀을 이끌며 여러 WebApp을 성공적으로 출시했습니다. 요구사항 분석, 시스템 기획, 협업, 코드 품질 관리에 대한 실무 경험을 쌓았습니다.',
    description3:
      '업무 외에는 스트리트 댄스 스튜디오를 창업해 전국 우승과 세계 Top 8을 달성했습니다. 이 경험으로 끈기와 집중력, 도전을 돌파하는 태도를 키웠으며, 이는 제 업무에도 이어집니다.',
    performanceTitle: '성능',
    performanceDesc: '속도와 확장성 최적화',
    leadershipTitle: '리더십',
    leadershipDesc: '멘토링 & 팀 빌딩',
  },

  // Skills Section
  skills: {
    title: '기술 역량',
    subtitle: '현대적인 디지털 솔루션을 위한 풀스택 도구',
    frontend: '프런트엔드',
    backend: '백엔드',
    devops: 'DevOps',
    ai: 'AI 도구',
  },

  // Experience Section
  experience: {
    title: '커리어 여정',
    present: '현재',
    jobs: [
      {
        company: 'Sheng He Technology Co., Ltd.',
        role: '시니어 엔지니어',
        period: '2024/1 - 현재',
        description: [
          'Nx Monorepo 아키텍처를 주도해 여러 프로젝트를 모듈 공유로 통합하고, API 기반 100+ 테마와 동적 레이아웃 전환을 구현.',
          'Angular 19로 업그레이드하고 Signal/Computed/Effect를 전면 도입, RxJS 의존도를 줄이고 OnPush 최적화 적용.',
          '복잡한 로직을 공유 컴포넌트로 모듈화하여 1000라인 코드를 200라인 이하로 단축.',
          '프런트엔드 엔지니어 2-4명 직접 관리, 6명의 지원 인력을 간접 조율하며 정기 기술 세션 운영.',
        ],
      },
      {
        company: 'Shang Shang Design Co., Ltd.',
        role: '풀스택 엔지니어',
        period: '2014/1 - 2023/11',
        description: [
          'Laravel + Angular PWA로 직접판매형 이커머스 플랫폼 개발, 장바구니·회원 관리·관리자 시스템 포함.',
          'Redis 캐싱으로 상품 랭킹과 키워드 태그를 최적화해 DB 조회를 70% 감소.',
          '6인 크로스펑셔널 팀을 운영해 12개월 내 회원수 0→2만명, 월간 활성 85%+ 달성.',
          '전자 계약 플랫폼을 구축해 서명, 검수, 매장 개설 등 종이 기반 프로세스를 완전 디지털화.',
        ],
      },
      {
        company: 'Xin Lin Yang Consultancy Co., Ltd.',
        role: '엔지니어',
        period: '2013/1 - 2014/1',
        description: [
          'PHP(Smarty) + jQuery로 사내 행정 시스템을 개발·유지보수하며 업무 효율을 개선.',
          '복합 조건 검색이 가능한 경매 부동산 정보 시스템 구축.',
          '맞춤형 매칭 전략과 자동 필터링 파이프라인을 설계해 데이터를 매일 비교하고 보고서를 자동 발송.',
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: '주요 프로젝트',
    subtitle: '기술 깊이와 혁신을 보여줍니다',
    clickToView: '세부 정보 보기',
    projectDesc: '프로젝트 설명',
    features: '핵심 기능',
    techStack: '기술 스택',
    achievement: '주요 성과',
    projects: [
      {
        title: 'Copila AI',
        desc: 'AI 커스터마이징 플랫폼',
        fullDesc:
          'AI 대화와 그림, AI가 생성한 맞춤형 차트를 제공합니다. Laravel Swoole Octane으로 WebSocket 서버를 구현하고 Angular로 실시간 커뮤니케이션, AI 드로잉, 온라인 스케치를 지원했습니다. OpenAI API를 연동해 AI 마인드맵, 플로우차트, 만다라 그리드를 생성합니다.',
        tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
        achievement: 'Lighthouse 거의 만점',
        features: ['AI 마인드맵 생성', 'AI 플로우차트 생성', '만다라 그리드', '실시간 커뮤니케이션', 'AI 드로잉', '온라인 스케치'],
      },
      {
        title: 'Meeple Logistics',
        desc: 'OMO 이커머스 시스템',
        fullDesc:
          '다중 판매자 마켓플레이스와 경매형 쇼핑을 결합해 온라인 쇼핑과 오프라인 매장 결제를 통합했습니다. 주문 기록과 탐색 행동을 활용한 개인화 추천 알고리즘으로 상품 페이지를 동적으로 커스터마이징했습니다.',
        tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
        achievement: '1년 만에 회원 2만명 달성',
        features: ['멀티 벤더 마켓플레이스', '경매형 쇼핑', '다단계 보너스 시스템', '전자 지갑', '온·오프라인 결제 통합'],
      },
      {
        title: 'StocX',
        desc: '주식 시장 훈련 시스템',
        fullDesc:
          '과거 주가 데이터를 제공해 시장 감각과 종목 선택 전략을 훈련합니다. 캐싱과 프로세스 설계로 저비용 공유 호스팅 환경을 최적화하여 500+ 동시 사용자까지 지원했습니다.',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '동시 500명, KOL과 베스트셀러 저자들이 공유',
        features: ['캔들차트 분석', '유망주 선별', '전략 훈련', '과거 데이터 백테스트'],
      },
      {
        title: 'Dermatoglyphics System',
        desc: '지문 분석 플랫폼',
        fullDesc:
          '어린이와 학부모를 위한 지문 감지와 보고서 생성을 제공합니다. 학생 관리, 지문 분석, 종합 보고서 생성을 포함합니다.',
        tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '보고서 자동 생성',
        features: ['학생 관리', '피문 분석', '뇌 기능 차트', 'PDF 보고서 내보내기'],
      },
    ],
  },

  // Contact Section
  contact: {
    title: '연락하기',
    subtitle: '질문이나 프로젝트 아이디어, 기술 이야기가 있다면 언제든 메시지를 보내주세요.',
    email: '이메일',
    location: '위치',
    locationValue: '타이베이, 대만',
    formName: '이름',
    formNamePlaceholder: '이름을 입력하세요',
    formEmail: '이메일',
    formEmailPlaceholder: 'your@email.com',
    formMessage: '메시지',
    formMessagePlaceholder: 'Hello Stephen...',
    sendMessage: '메시지 보내기',
  },

  // Footer
  footer: {
    copyright: '판권 소유',
  },
};

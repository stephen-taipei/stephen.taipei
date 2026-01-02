// Bahasa Indonesia (values-in)
export default {
  nav: {
    about: "Tentang Saya",
    skills: "Keahlian",
    experience: "Pengalaman",
    portfolio: "Portofolio",
    tools: "Open Source",
    contact: "Kontak",
  },
  hero: {
    name: "Stephen Chuang",
    title: "Senior Full Stack",
    subtitle: "Engineer",
    description:
      "Berpengalaman dalam platform AI, sistem e-commerce, fintech, dan aplikasi pendidikan. Mengimplementasikan arsitektur Nx Monorepo untuk berbagi modul multi-proyek dan pemeliharaan jangka panjang, memungkinkan 100+ konfigurasi tema dan mengurangi kode komponen kompleks dari 1000 menjadi 200 baris.",
    viewWork: "Lihat Karya",
    contactMe: "Hubungi Saya",
  },
  about: {
    title: "Mengubah Ide Menjadi",
    titleHighlight: "Realitas Digital",
    location: "Taipei, Taiwan",
    badgeTitle: "Juara Tari",
    badgeValue: "Juara Nasional / Top 8 Dunia",
    description1:
      "Saya bersemangat tentang pembelajaran dan integrasi lintas domain. Dari latar belakang desain, saya beralih ke manajemen informasi, dan akhirnya fokus pada pengembangan full-stack dan arsitektur sistem. Mahir dalam Angular dan Laravel dengan pengalaman pengembangan lengkap dari framework frontend hingga arsitektur backend.",
    description2:
      "Memimpin tim 6 orang menggunakan Git (CI/CD), Trello, Slack, dan RedMine untuk manajemen proyek. Berhasil menyelesaikan beberapa pengembangan Web / Android App / iOS App, mengumpulkan pengalaman praktis dalam analisis kebutuhan, perencanaan sistem, kolaborasi, dan kontrol kualitas kode.",
    description3:
      "Di luar pekerjaan, saya mendirikan studio street dance dan meraih juara nasional serta top 8 dunia dalam kompetisi tari. Pengalaman ini menumbuhkan ketekunan, fokus, dan tekad untuk mengatasi tantangan.",
    performanceTitle: "Performa",
    performanceDesc: "Optimasi untuk kecepatan dan skala",
    leadershipTitle: "Kepemimpinan",
    leadershipDesc: "Mentoring & Pembangunan Tim",
  },
  skills: {
    title: "Keahlian Teknis",
    subtitle: "Seperangkat alat komprehensif untuk solusi digital modern",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    ai: "Alat AI",
  },
  experience: {
    title: "Perjalanan Profesional",
    present: "Sekarang",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "Senior Engineer",
        period: "2024/1 - Sekarang",
        description: [
          "Memimpin arsitektur Nx Monorepo, mengintegrasikan beberapa proyek dengan berbagi modul, 100+ tema berbasis API dengan pergantian tata letak dinamis.",
          "Upgrade ke Angular 19, sepenuhnya mengadopsi Signal/Computed/Effect, mengurangi ketergantungan RxJS dengan optimasi OnPush.",
          "Memodularisasi logika kompleks menjadi Shared Components, mengurangi kode 1000 baris menjadi di bawah 200 baris.",
          "Manajemen langsung 2-4 engineer frontend, koordinasi tidak langsung beberapa staf pendukung, sesi berbagi teknis reguler.",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "Full Stack Engineer",
        period: "2014/1 - 2023/11",
        description: [
          "Mengembangkan platform e-commerce penjualan langsung dengan Laravel + Angular PWA, termasuk keranjang belanja, manajemen anggota, dan sistem admin.",
          "Mengimplementasikan caching Redis untuk peringkat produk dan tag kata kunci, mengurangi kueri database sebesar 70%.",
          "Mengelola tim lintas fungsi 6 orang, membantu klien tumbuh dari 0 menjadi 20.000 anggota dalam 12 bulan dengan tingkat aktif bulanan 85%+.",
          "Membangun platform kontrak elektronik, mendigitalkan proses kertas termasuk penandatanganan, review, dan alur pembukaan toko.",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "Engineer",
        period: "2013/1 - 2014/1",
        description: [
          "Mengembangkan dan memelihara sistem administratif internal menggunakan PHP (Smarty) + jQuery.",
          "Membangun sistem informasi penyitaan dengan pencarian multi-kriteria lanjutan.",
          "Merancang strategi pencocokan khusus dengan penyaringan otomatis dan pengiriman laporan otomatis.",
        ],
      },
    ],
  },
  portfolio: {
    title: "Proyek Unggulan",
    subtitle: "Menampilkan kedalaman teknis dan inovasi",
    clickToView: "Klik untuk melihat detail",
    projectDesc: "Deskripsi Proyek",
    features: "Fitur Utama",
    techStack: "Tech Stack",
    achievement: "Pencapaian Utama",
    projects: [
      {
        title: "Copila AI",
        desc: "Platform Kustomisasi AI",
        fullDesc:
          "Menyediakan percakapan dan gambar AI, bersama dengan grafik kustom yang dihasilkan AI. Mengimplementasikan WebSocket Server dengan Laravel Swoole Octane, dipasangkan dengan Angular untuk komunikasi real-time, gambar AI, dan sketsa online. Mengintegrasikan OpenAI API untuk peta pikiran, diagram alur, dan grid pemikiran Mandala berbasis AI.",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "Skor Lighthouse hampir sempurna",
        features: [
          "Pembuatan Peta Pikiran AI",
          "Pembuatan Diagram Alur AI",
          "Grid Pemikiran Mandala",
          "Komunikasi Real-time",
          "Gambar AI",
          "Sketsa Online",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "Sistem E-commerce OMO",
        fullDesc:
          "Marketplace multi-vendor dengan belanja gaya lelang, mengintegrasikan belanja online dan pembayaran toko offline. Merancang algoritma rekomendasi personal berdasarkan jejak pengguna untuk kustomisasi halaman produk dinamis.",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "Hampir 20.000 anggota dalam satu tahun",
        features: [
          "Marketplace Multi-vendor",
          "Belanja Gaya Lelang",
          "Sistem Bonus Multi-tier",
          "Sistem E-wallet",
          "Integrasi Pembayaran Online-Offline",
        ],
      },
      {
        title: "StocX",
        desc: "Sistem Pelatihan Pasar Saham",
        fullDesc:
          "Menyediakan data harga saham historis untuk melatih sense pasar dan strategi pemilihan saham. Mengoptimalkan hosting bersama berbiaya rendah melalui caching dan desain proses, mencapai 500+ pengguna bersamaan.",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement:
          "500 pengguna bersamaan, dibagikan oleh KOL & penulis bestseller",
        features: [
          "Analisis Grafik K-line",
          "Penyaringan Saham Potensial",
          "Pelatihan Strategi",
          "Backtesting Data Historis",
        ],
      },
      {
        title: "Sistem Dermatoglyphics",
        desc: "Platform Deteksi Sidik Jari",
        fullDesc:
          "Menyediakan deteksi sidik jari dan pembuatan laporan untuk anak-anak dan orang tua. Termasuk manajemen siswa, analisis dermatoglyphic, dan pembuatan laporan komprehensif.",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "Pembuatan laporan otomatis",
        features: [
          "Manajemen Siswa",
          "Analisis Dermatoglyphic",
          "Grafik Fungsi Otak",
          "Ekspor Laporan PDF",
        ],
      },
    ],
  },
  tools: {
    title: "Stephen's Open Source Tools",
    subtitle: "8000+ alat open source gratis yang dikembangkan dan dipelihara bersama AI, mencakup AI, game, alat pengembangan dan lainnya",
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
  contact: {
    title: "Mari Terhubung",
    subtitle:
      "Baik Anda memiliki pertanyaan, ide proyek, atau hanya ingin mendiskusikan tren teknologi terbaru, jangan ragu untuk menghubungi.",
    email: "Email",
    location: "Lokasi",
    locationValue: "Taipei, Taiwan",
    formName: "Nama",
    formNamePlaceholder: "Nama Anda",
    formEmail: "Email",
    formEmailPlaceholder: "anda@email.com",
    formMessage: "Pesan",
    formMessagePlaceholder: "Halo Stephen...",
    sendMessage: "Kirim Pesan",
  },
  // Open Source Tools Pages
  openSource: {
    title: "Platform Alat Open Source Stephen",
    subtitle: "8 Tema · 1000+ Alat Open Source",
    description: "Sepenuhnya gratis, open source, berjalan lokal di browser Anda. Mencakup alat AI, game web, alat pengembangan, efek visual dan lainnya.",
    searchPlaceholder: "Cari kategori alat...",
    backToHome: "Beranda",
    back: "Kembali",
    categoryNotFound: "Kategori tidak ditemukan",
    backToTools: "Kembali ke Alat",
    openInNewTab: "Buka di tab baru",
    copyLink: "Salin tautan",
    copied: "Disalin",
    refresh: "Muat ulang",
    previousTool: "Alat sebelumnya",
    nextTool: "Alat berikutnya",
    toolCount: "{count} alat",
    comingSoon: "Segera hadir",
    free: "Sepenuhnya gratis",
    freeDesc: "Semua alat sepenuhnya gratis, tidak perlu registrasi atau pembayaran",
    local: "Eksekusi lokal",
    localDesc: "Alat berjalan lokal di browser Anda, data Anda tidak ditransmisikan, melindungi privasi Anda",
    opensource: "Kontribusi open source",
    opensourceDesc: "Semua alat adalah open source, kontribusi dan perbaikan sangat diharapkan",
    copyrightText: "© 2025 Stephen Taipei · Platform Alat Open Source",
    github: "GitHub",
    viewAllTools: "Jelajahi semua alat",
    tools: "alat",
  },
  footer: {
    copyright: "Hak cipta dilindungi",
  },

  // Awesome APP 100 Section
  awesomeApp100: {
    title: 'Awesome APP 100',
    subtitle: '100 Aplikasi Native Premium',
    badge: 'Platform Baru Stephen',
    heading: 'Aplikasi Native Premium Pilihan',
    description: 'Koleksi 100 aplikasi native premium pilihan untuk platform iOS dan Android. Setiap aplikasi dipilih dengan cermat berdasarkan kualitas, performa, dan pengalaman pengguna.',
    features: [
      { title: 'Aplikasi Native', desc: 'iOS & Android' },
      { title: 'Kualitas Premium', desc: 'Dipilih dengan Cermat' },
      { title: 'Lintas Platform', desc: 'Pengalaman Universal' },
    ],
    cta: 'Jelajahi Awesome APP 100',
    visualText: 'Aplikasi Premium',
    visualSubtext: 'Dipilih untuk Keunggulan',
  },
};

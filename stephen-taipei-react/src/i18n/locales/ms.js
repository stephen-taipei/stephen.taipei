// Bahasa Melayu (values-ms)
export default {
  // Navbar
  nav: {
    about: 'Tentang',
    skills: 'Kemahiran',
    experience: 'Pengalaman',
    portfolio: 'Portfolio',
    contact: 'Hubungi',
  },

  // Hero Section
  hero: {
    name: 'Stephen Chuang',
    title: 'Senior Full Stack',
    subtitle: 'Jurutera',
    description:
      'Berpengalaman dalam platform AI, sistem e-dagang, fintech dan aplikasi pendidikan. Melaksanakan arkitektur Nx Monorepo untuk perkongsian modul merentas projek dan penyelenggaraan jangka panjang, menyokong lebih 100 tema dan mengurangkan kod komponen kompleks daripada 1000 kepada 200 baris.',
    viewWork: 'Lihat Projek',
    contactMe: 'Hubungi Saya',
  },

  // About Section
  about: {
    title: 'Menukar idea menjadi',
    titleHighlight: 'Realiti Digital',
    location: 'Taipei, Taiwan',
    badgeTitle: 'Juara Tarian',
    badgeValue: 'Juara Kebangsaan / Top 8 Dunia',
    description1:
      'Saya gemar belajar dan menggabungkan pelbagai bidang. Bermula dengan latar belakang reka bentuk, beralih ke pengurusan maklumat dan akhirnya memberi tumpuan pada pembangunan full stack serta arkitektur sistem. Mahir dalam Angular dan Laravel dengan pengalaman lengkap dari frontend ke backend.',
    description2:
      'Pernah mengetuai pasukan 6 orang menggunakan Git, Trello dan Slack dengan gaya Kanban. Berjaya menyiapkan beberapa WebApp, mengumpul pengalaman praktikal dalam analisis keperluan, perancangan sistem, kerjasama dan kawalan kualiti kod.',
    description3:
      'Di luar kerja, saya menubuhkan studio tarian jalanan dan memenangi juara kebangsaan serta Top 8 dunia. Pengalaman ini membina ketekunan, fokus dan tekad untuk mengatasi cabaran—sikap yang saya bawa ke tempat kerja.',
    performanceTitle: 'Prestasi',
    performanceDesc: 'Pengoptimuman untuk kelajuan dan skala',
    leadershipTitle: 'Kepimpinan',
    leadershipDesc: 'Mentor & pembinaan pasukan',
  },

  // Skills Section
  skills: {
    title: 'Kepakaran Teknikal',
    subtitle: 'Set alat lengkap untuk membina solusi digital moden',
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    ai: 'Alat AI',
  },

  // Experience Section
  experience: {
    title: 'Perjalanan Profesional',
    present: 'Kini',
    jobs: [
      {
        company: 'Sheng He Technology Co., Ltd.',
        role: 'Jurutera Kanan',
        period: '2024/1 - Kini',
        description: [
          'Menerajui arkitektur Nx Monorepo, mengintegrasi pelbagai projek dengan perkongsian modul, 100+ tema dan pertukaran susun atur dinamik.',
          'Naik taraf ke Angular 19, mengguna Signal/Computed/Effect sepenuhnya, mengurangkan kebergantungan RxJS dengan pengoptimuman OnPush.',
          'Memodularkan logik kompleks ke Komponen Bersama, memendekkan kod 1000 baris kepada kurang 200 baris.',
          'Mengurus secara langsung 2-4 jurutera frontend, menyelaras 6 kakitangan sokongan dan menganjurkan sesi perkongsian teknikal.',
        ],
      },
      {
        company: 'Shang Shang Design Co., Ltd.',
        role: 'Jurutera Full Stack',
        period: '2014/1 - 2023/11',
        description: [
          'Membangunkan platform e-dagang jualan langsung dengan Laravel + Angular PWA, termasuk troli, pengurusan ahli dan sistem pentadbiran.',
          'Melaksanakan cache Redis untuk ranking produk dan tag kata kunci, mengurangkan pertanyaan pangkalan data sebanyak 70%.',
          'Mengurus pasukan rentas fungsi seramai 6 orang, membantu pelanggan berkembang daripada 0 ke 20,000 ahli dalam 12 bulan dengan kadar aktif bulanan melebihi 85%.',
          'Membina platform kontrak elektronik, mendigitalkan proses kertas termasuk tandatangan, semakan dan pembukaan kedai.',
        ],
      },
      {
        company: 'Xin Lin Yang Consultancy Co., Ltd.',
        role: 'Jurutera',
        period: '2013/1 - 2014/1',
        description: [
          'Membangun dan menyelenggara sistem pentadbiran dalaman menggunakan PHP (Smarty) + jQuery.',
          'Membina sistem maklumat rumah lelong dengan carian pelbagai kriteria lanjutan.',
          'Mereka strategi padanan tersuai dengan penapisan automatik, perbandingan data harian dan penghantaran laporan automatik.',
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: 'Projek Pilihan',
    subtitle: 'Menunjukkan kedalaman teknikal dan inovasi',
    clickToView: 'Klik untuk lihat butiran',
    projectDesc: 'Penerangan Projek',
    features: 'Ciri Utama',
    techStack: 'Teknologi',
    achievement: 'Pencapaian',
    projects: [
      {
        title: 'Copila AI',
        desc: 'Platform Penyesuaian AI',
        fullDesc:
          'Menyediakan perbualan dan lakaran AI serta carta tersuai berasaskan AI. Melaksanakan pelayan WebSocket dengan Laravel Swoole Octane dan Angular untuk komunikasi masa nyata, lukisan AI dan lakaran dalam talian. Integrasi OpenAI API untuk peta minda, carta alir dan grid Mandala berasaskan AI.',
        tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
        achievement: 'Skor Lighthouse hampir sempurna',
        features: ['Janakuasa peta minda AI', 'Janakuasa carta alir AI', 'Grid Mandala', 'Komunikasi masa nyata', 'Lukisan AI', 'Lakaran dalam talian'],
      },
      {
        title: 'Meeple Logistics',
        desc: 'Sistem E-dagang OMO',
        fullDesc:
          'Marketplace pelbagai penjual dengan pembelian gaya lelong, menggabungkan belian dalam talian dan pembayaran kedai fizikal. Algoritma cadangan dipersonalisasi berdasarkan jejak pengguna (sejarah pesanan, tingkah laku layaran) untuk menyesuaikan halaman produk secara dinamik.',
        tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
        achievement: 'Hampir 20,000 ahli dalam satu tahun',
        features: ['Marketplace pelbagai penjual', 'Belian gaya lelong', 'Sistem bonus berlapis', 'Dompet elektronik', 'Integrasi pembayaran online-offline'],
      },
      {
        title: 'StocX',
        desc: 'Sistem Latihan Pasaran Saham',
        fullDesc:
          'Menyediakan data harga sejarah untuk melatih naluri pasaran dan strategi pemilihan saham. Mengoptimumkan hos kongsi kos rendah melalui cache dan reka bentuk proses, menyokong lebih 500 pengguna serentak.',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: '500 pengguna serentak, dikongsi oleh KOL dan penulis terlaris',
        features: ['Analisis carta lilin', 'Tapis saham berpotensi', 'Latihan strategi', 'Ujian semula data sejarah'],
      },
      {
        title: 'Dermatoglyphics System',
        desc: 'Platform Cap Jari',
        fullDesc:
          'Menyediakan pengesanan cap jari dan penjanaan laporan untuk kanak-kanak serta ibu bapa. Termasuk pengurusan pelajar, analisis dermatoglif dan penjanaan laporan menyeluruh.',
        tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: 'Penjanaan laporan automatik',
        features: ['Pengurusan pelajar', 'Analisis dermatoglif', 'Carta fungsi otak', 'Eksport laporan PDF'],
      },
    ],
  },

  // Contact Section
  contact: {
    title: 'Jom Berhubung',
    subtitle: 'Ada soalan atau idea projek? Hubungi saya bila-bila masa.',
    email: 'Emel',
    location: 'Lokasi',
    locationValue: 'Taipei, Taiwan',
    formName: 'Nama',
    formNamePlaceholder: 'Nama anda',
    formEmail: 'Emel',
    formEmailPlaceholder: 'your@email.com',
    formMessage: 'Mesej',
    formMessagePlaceholder: 'Hello Stephen...',
    sendMessage: 'Hantar Mesej',
  },

  // Footer
  footer: {
    copyright: 'Hak cipta terpelihara',
  },
};

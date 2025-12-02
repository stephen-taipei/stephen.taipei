// ภาษาไทย (values-th)
export default {
  // Navbar
  nav: {
    about: 'เกี่ยวกับ',
    skills: 'ทักษะ',
    experience: 'ประสบการณ์',
    portfolio: 'ผลงาน',
    contact: 'ติดต่อ',
  },

  // Hero Section
  hero: {
    name: 'Stephen Chuang',
    title: 'Senior Full Stack',
    subtitle: 'วิศวกร',
    description:
      'มีประสบการณ์ด้านแพลตฟอร์ม AI ระบบอีคอมเมิร์ซ ฟินเทค และแอปการศึกษา สร้างสถาปัตยกรรม Nx Monorepo สำหรับแบ่งปันโมดูลระหว่างโปรเจ็กต์และบำรุงรักษาระยะยาว รองรับธีมมากกว่า 100 แบบ และลดโค้ดคอมโพเนนต์ที่ซับซ้อนจาก 1000 บรรทัดเหลือ 200 บรรทัด',
    viewWork: 'ดูผลงาน',
    contactMe: 'ติดต่อฉัน',
  },

  // About Section
  about: {
    title: 'เปลี่ยนไอเดียให้เป็น',
    titleHighlight: 'ความจริงดิจิทัล',
    location: 'ไทเป ไต้หวัน',
    badgeTitle: 'แชมป์เต้น',
    badgeValue: 'แชมป์ชาติ / Top 8 โลก',
    description1:
      'ฉันชอบการเรียนรู้และการผสานข้ามสาขา เริ่มจากสายออกแบบสู่การจัดการข้อมูล และมุ่งเน้นการพัฒนาแบบ Full Stack และสถาปัตยกรรมระบบ เชี่ยวชาญ Angular และ Laravel พร้อมประสบการณ์ครบวงจรตั้งแต่ frontend ถึง backend',
    description2:
      'เคยนำทีม 6 คนโดยใช้ Git, Trello, Slack ในสไตล์คัมบัง สำเร็จ WebApp หลายโปรเจ็กต์ สั่งสมประสบการณ์จริงด้านวิเคราะห์ความต้องการ วางแผนระบบ การร่วมงาน และควบคุมคุณภาพโค้ด',
    description3:
      'นอกงาน ฉันก่อตั้งสตูดิโอเต้นแนวสตรีท และคว้าแชมป์ชาติรวมถึงติด Top 8 โลก ประสบการณ์เหล่านี้สร้างความอดทน สมาธิ และความมุ่งมั่นในการฝ่าฟันอุปสรรค ซึ่งสะท้อนในทัศนคติการทำงานของฉัน',
    performanceTitle: 'ประสิทธิภาพ',
    performanceDesc: 'ปรับให้เร็วและรองรับการขยาย',
    leadershipTitle: 'ภาวะผู้นำ',
    leadershipDesc: 'การเป็นพี่เลี้ยงและสร้างทีม',
  },

  // Skills Section
  skills: {
    title: 'ความเชี่ยวชาญทางเทคนิค',
    subtitle: 'ชุดเครื่องมือครบถ้วนเพื่อสร้างโซลูชันดิจิทัลสมัยใหม่',
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    ai: 'เครื่องมือ AI',
  },

  // Experience Section
  experience: {
    title: 'เส้นทางอาชีพ',
    present: 'ปัจจุบัน',
    jobs: [
      {
        company: 'Sheng He Technology Co., Ltd.',
        role: 'วิศวกรอาวุโส',
        period: '2024/1 - ปัจจุบัน',
        description: [
          'นำสถาปัตยกรรม Nx Monorepo ผสานหลายโปรเจ็กต์และแบ่งปันโมดูล พร้อมธีม 100+ และสลับเลย์เอาต์แบบไดนามิก',
          'อัปเกรดสู่ Angular 19 นำ Signal/Computed/Effect มาใช้เต็มรูปแบบ ลดการพึ่งพา RxJS ด้วยการปรับ OnPush',
          'แยกตรรกะซับซ้อนเป็น Shared Components ลดโค้ด 1000 บรรทัดเหลือไม่ถึง 200',
          'ดูแลวิศวกร frontend 2-4 คน ประสานทีมสนับสนุน 6 คน และจัดแชร์เทคนิคเป็นประจำ',
        ],
      },
      {
        company: 'Shang Shang Design Co., Ltd.',
        role: 'วิศวกร Full Stack',
        period: '2014/1 - 2023/11',
        description: [
          'พัฒนาแพลตฟอร์มอีคอมเมิร์ซขายตรงด้วย Laravel + Angular PWA ครอบคลุมรถเข็น ลูกค้า และระบบแอดมิน',
          'ใช้ Redis cache สำหรับจัดอันดับสินค้าและแท็กคำค้น ลดการ query ฐานข้อมูลลง 70%',
          'บริหารทีมครอสฟังก์ชัน 6 คน ช่วยลูกค้าโตจาก 0 เป็น 20,000 สมาชิกใน 12 เดือน Active rate 85%+',
          'สร้างแพลตฟอร์มสัญญาอิเล็กทรอนิกส์ เปลี่ยนกระบวนการกระดาษเป็นดิจิทัล ครอบคลุมเซ็น ตรวจสอบ และเปิดร้าน',
        ],
      },
      {
        company: 'Xin Lin Yang Consultancy Co., Ltd.',
        role: 'วิศวกร',
        period: '2013/1 - 2014/1',
        description: [
          'พัฒนาและดูแลระบบบริหารภายในด้วย PHP (Smarty) + jQuery',
          'สร้างระบบข้อมูลทรัพย์สินประมูลพร้อมค้นหาหลายเงื่อนไขขั้นสูง',
          'ออกแบบกลยุทธ์จับคู่เฉพาะบุคคลพร้อมกรองอัตโนมัติ เปรียบเทียบข้อมูลรายวัน และส่งรายงานอัตโนมัติ',
        ],
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    title: 'ผลงานเด่น',
    subtitle: 'แสดงความลึกทางเทคนิคและนวัตกรรม',
    clickToView: 'คลิกเพื่อดูรายละเอียด',
    projectDesc: 'คำอธิบายโปรเจ็กต์',
    features: 'ฟีเจอร์หลัก',
    techStack: 'เทคโนโลยี',
    achievement: 'ผลงานสำคัญ',
    projects: [
      {
        title: 'Copila AI',
        desc: 'แพลตฟอร์มปรับแต่ง AI',
        fullDesc:
          'ให้บริการสนทนาและวาดภาพด้วย AI พร้อมกราฟส่วนบุคคลที่สร้างโดย AI ใช้ Laravel Swoole Octane สำหรับ WebSocket Server ควบคู่ Angular เพื่อสื่อสารเรียลไทม์ วาดด้วย AI และสเก็ตช์ออนไลน์ เชื่อมต่อ OpenAI API เพื่อสร้าง Mind Map, Flowchart และ Mandala Grid ด้วย AI',
        tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
        achievement: 'คะแนน Lighthouse แทบเต็ม',
        features: ['AI Mind Map', 'AI Flowchart', 'Mandala Grid', 'สื่อสารเรียลไทม์', 'วาดภาพด้วย AI', 'สเก็ตช์ออนไลน์'],
      },
      {
        title: 'Meeple Logistics',
        desc: 'ระบบ OMO E-commerce',
        fullDesc:
          'มาร์เก็ตเพลสหลายผู้ขายพร้อมช้อปปิ้งแบบประมูล รวมการซื้อออนไลน์และจ่ายที่ร้าน อัลกอริทึมแนะนำส่วนบุคคลจากพฤติกรรมผู้ใช้ (ประวัติออเดอร์ การเข้าชม) เพื่อปรับหน้าสินค้าแบบไดนามิก',
        tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
        achievement: 'สมาชิกเกือบ 20,000 ภายในหนึ่งปี',
        features: ['มาร์เก็ตเพลสหลายผู้ขาย', 'ช้อปปิ้งแบบประมูล', 'ระบบโบนัสหลายระดับ', 'กระเป๋าเงินอิเล็กทรอนิกส์', 'ชำระเงินออนไลน์-ออฟไลน์รวมกัน'],
      },
      {
        title: 'StocX',
        desc: 'ระบบฝึกตลาดหุ้น',
        fullDesc:
          'ให้ข้อมูลราคาหุ้นย้อนหลังเพื่อฝึกความรู้สึกตลาดและกลยุทธ์คัดเลือกหุ้น ปรับปรุงโฮสติ้งต้นทุนต่ำด้วย cache และออกแบบขั้นตอน รองรับผู้ใช้พร้อมกัน 500+',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: 'ผู้ใช้พร้อมกัน 500 คน ถูกแชร์โดย KOL และนักเขียนขายดี',
        features: ['วิเคราะห์กราฟแท่งเทียน', 'คัดกรองหุ้นศักยภาพ', 'ฝึกกลยุทธ์', 'ทดสอบย้อนหลังข้อมูลประวัติ'],
      },
      {
        title: 'Dermatoglyphics System',
        desc: 'แพลตฟอร์มตรวจลายนิ้วมือ',
        fullDesc:
          'ให้บริการตรวจลายนิ้วมือและสร้างรายงานสำหรับเด็กและผู้ปกครอง รวมการจัดการนักเรียน การวิเคราะห์ลายผิวหนัง และการสร้างรายงานครบถ้วน',
        tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
        achievement: 'สร้างรายงานอัตโนมัติ',
        features: ['จัดการนักเรียน', 'วิเคราะห์ลายนิ้ว', 'กราฟการทำงานสมอง', 'ส่งออก PDF'],
      },
    ],
  },

  // Contact Section
  contact: {
    title: 'มาคุยกัน',
    subtitle: 'มีคำถามหรือไอเดียโปรเจ็กต์? ติดต่อฉันได้เสมอ',
    email: 'อีเมล',
    location: 'ที่ตั้ง',
    locationValue: 'ไทเป ไต้หวัน',
    formName: 'ชื่อ',
    formNamePlaceholder: 'ชื่อของคุณ',
    formEmail: 'อีเมล',
    formEmailPlaceholder: 'your@email.com',
    formMessage: 'ข้อความ',
    formMessagePlaceholder: 'Hello Stephen...',
    sendMessage: 'ส่งข้อความ',
  },

  // Footer
  footer: {
    copyright: 'สงวนลิขสิทธิ์',
  },
};

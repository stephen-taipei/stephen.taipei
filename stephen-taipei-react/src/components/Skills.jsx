import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const { t, language } = useLanguage();
  const isChinese = language?.toLowerCase().startsWith('zh');

  const categories = [
    { id: 'Frontend', icon: Code, label: t.skills.frontend },
    { id: 'Backend', icon: Server, label: t.skills.backend },
    { id: 'DevOps', icon: Database, label: t.skills.devops },
    { id: 'AI', icon: Cpu, label: t.skills.ai },
  ];

  // Skills data based on resume - NO React/Vite
  const skillsData = {
    Frontend: [
      { name: 'Angular 19 (Signal / Computed / Effect)', level: 95 },
      { name: 'Nx Monorepo', level: 90 },
      { name: 'Vue.js', level: 80 },
      { name: 'jQuery', level: 85 },
      { name: 'PWA', level: 90 },
    ],
    Backend: [
      { name: 'Laravel Octane + Swoole', level: 95 },
      { name: 'WebSocket Server', level: 90 },
      { name: isChinese ? 'MySQL (讀寫分離)' : 'MySQL (Read/Write Separation)', level: 90 },
      { name: isChinese ? 'Redis (快取策略)' : 'Redis (Caching Strategy)', level: 90 },
      { name: 'PHP (Smarty)', level: 85 },
    ],
    DevOps: [
      { name: 'Ubuntu + Nginx', level: 90 },
      { name: 'Apache', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'GCP / Vultr', level: 85 },
      { name: 'Github CI/CD', level: 85 },
      { name: 'GitLab CI/CD', level: 85 },
    ],
    AI: [
      { name: 'OpenAI API', level: 95 },
      { name: 'Cursor + Claude + Codex + Gemini', level: 95 },
      { name: isChinese ? 'AI 繪圖應用' : 'AI Image Generation', level: 85 },
      { name: 'LINE / WeChat API', level: 85 },
      { name: isChinese ? '支付寶 / Google 串接' : 'Alipay / Google Integration', level: 85 },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t.skills.title}</h2>
          <p className="mt-4 text-gray-600">{t.skills.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[400px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillsData[activeTab].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

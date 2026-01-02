import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Theme-aware classes
  const bgSection = isDark
    ? 'bg-gradient-to-br from-gray-950 to-gray-900'
    : 'bg-gradient-to-br from-gray-50 to-white';
  const blobColors = isDark
    ? ['bg-blue-900/30', 'bg-purple-900/30', 'bg-cyan-900/30']
    : ['bg-blue-50', 'bg-purple-50', 'bg-cyan-50'];
  const textTitle = isDark ? 'text-gray-100' : 'text-gray-900';
  const textDesc = isDark ? 'text-gray-400' : 'text-gray-600';
  const btnSecondary = isDark
    ? 'bg-gray-800 hover:bg-gray-700 text-gray-100 border-gray-700'
    : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200';
  const arrowColor = isDark ? 'text-gray-600 hover:text-blue-400' : 'text-gray-400 hover:text-primary';

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center ${bgSection} overflow-hidden overflow-x-hidden`}>
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-24 -right-24 w-96 h-96 ${blobColors[0]} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob`}></div>
        <div className={`absolute top-0 -left-4 w-72 h-72 ${blobColors[1]} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 ${blobColors[2]} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0.2, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 tracking-wide">
            {t.hero.name}
          </h2>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${textTitle} mb-6 tracking-tight`}>
            {t.hero.title} <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className={`mt-4 max-w-2xl mx-auto text-xl ${textDesc} mb-10 leading-relaxed`}>
            {t.hero.description}
          </p>

          <div className="flex justify-center gap-4">
            <a href="#portfolio" className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {t.hero.viewWork}
            </a>
            <a href="#contact" className={`px-8 py-3 ${btnSecondary} rounded-full font-medium transition-all shadow-sm hover:shadow-md`}>
              {t.hero.contactMe}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className={`${arrowColor} transition-colors`}>
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

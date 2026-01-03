import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import WebGPUBackground from './WebGPUBackground';

const Hero = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Theme-aware classes
  const bgSection = isDark
    ? 'bg-gray-950'
    : 'bg-gray-50';
  const textTitle = isDark ? 'text-gray-100' : 'text-gray-900';
  const textDesc = isDark ? 'text-gray-400' : 'text-gray-600';
  const btnSecondary = isDark
    ? 'bg-gray-800/80 hover:bg-gray-700/90 text-gray-100 border-gray-700 backdrop-blur-sm'
    : 'bg-white/80 hover:bg-gray-50/90 text-gray-900 border-gray-200 backdrop-blur-sm';
  const btnPrimary = isDark
    ? 'bg-primary/90 hover:bg-primary-dark backdrop-blur-sm'
    : 'bg-primary hover:bg-primary-dark';
  const arrowColor = isDark ? 'text-gray-600 hover:text-blue-400' : 'text-gray-400 hover:text-primary';

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center ${bgSection} overflow-hidden overflow-x-hidden`}>
      {/* WebGPU Animated Background */}
      <WebGPUBackground />

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
            <a href="#portfolio" className={`px-8 py-3 ${btnPrimary} text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}>
              {t.hero.viewWork}
            </a>
            <a href="#contact" className={`px-8 py-3 ${btnSecondary} rounded-full font-medium transition-all shadow-sm hover:shadow-md border`}>
              {t.hero.contactMe}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`${arrowColor} transition-colors cursor-pointer`}
        >
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

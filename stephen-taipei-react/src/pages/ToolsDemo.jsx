import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  Search, ChevronRight, Home, ExternalLink, Globe, Sun, Moon
} from 'lucide-react';
import { categories, getTotalToolsCount, getToolsByCategoryId } from '../data/toolsRegistry';
import { useLanguage, LANGUAGE_OPTIONS } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const iconMap = {
  Sparkles,
  Puzzle,
  Gamepad2,
  Wrench,
  Palette,
  Cpu,
  Boxes,
  Zap,
};

const ToolsDemo = () => {
  const { t, language, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.nameTw.includes(searchQuery)
  );

  // Theme-aware classes
  const bgMain = isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100';
  const bgHeader = isDark ? 'bg-gray-900/95' : 'bg-white/80';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const textMuted = isDark ? 'text-gray-500' : 'text-gray-400';
  const bgCard = isDark ? 'bg-gray-800/50' : 'bg-white';
  const bgCardBorder = isDark ? 'border-gray-700/50' : 'border-gray-100';
  const bgInput = isDark ? 'bg-gray-800' : 'bg-white';
  const bgSection = isDark ? 'bg-gray-900/50' : 'bg-white';
  const bgFooter = isDark ? 'bg-gray-900/50' : 'bg-gray-50';

  return (
    <div className={`min-h-screen ${bgMain} overflow-x-hidden`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${bgHeader} backdrop-blur-lg border-b ${borderColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className={`flex items-center gap-2 ${textSecondary} hover:text-blue-500 transition-colors`}>
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">{t.openSource.backToHome}</span>
              </Link>
              <div className={`h-6 w-px ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Stephen's Open Source
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Selector */}
              <div className="relative group">
                <button className={`flex items-center gap-2 px-3 py-2 ${textSecondary} hover:text-blue-500 transition-colors rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium hidden sm:inline">{language.toUpperCase()}</span>
                </button>
                <div className={`absolute right-0 mt-0 w-48 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border z-50`}>
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => changeLanguage(lang.value)}
                      className={`w-full text-left px-4 py-2.5 first:rounded-t-lg last:rounded-b-lg transition-colors text-sm ${
                        language === lang.value
                          ? 'bg-blue-600/20 text-blue-500 font-semibold'
                          : `${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tool Count */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-600/20 text-green-500 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="hidden sm:inline">{getTotalToolsCount()}+ {t.openSource.tools}</span>
                <span className="sm:hidden">{getTotalToolsCount()}+</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10' : 'bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5'}`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-4`}>
              {t.openSource.subtitle}
            </h2>
            <p className={`text-lg ${textSecondary} max-w-2xl mx-auto mb-8`}>
              {t.openSource.description}
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${textMuted}`} />
              <input
                type="text"
                placeholder={t.openSource.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 ${bgInput} rounded-2xl border ${borderColor} shadow-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${textPrimary} ${isDark ? 'placeholder-gray-500' : 'placeholder-gray-400'}`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => {
              const Icon = iconMap[category.icon];
              const toolCount = getToolsByCategoryId(category.id).length;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={category.path}
                    className={`group block ${bgCard} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${bgCardBorder} overflow-hidden relative`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${isDark ? 'bg-opacity-20' : ''} ${category.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${category.textColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold ${textPrimary} mb-1 group-hover:text-blue-500 transition-colors`}>
                      {language === 'zh-TW' || language === 'zh-HK' ? category.nameTw : language === 'zh-CN' ? category.nameZh : category.name}
                    </h3>
                    <p className={`text-sm ${textMuted} mb-3`}>{category.name}</p>

                    {/* Description */}
                    <p className={`${textSecondary} text-sm mb-4 line-clamp-2`}>
                      {language === 'zh-TW' || language === 'zh-HK' ? category.descriptionTw : language === 'zh-CN' ? category.descriptionZh : category.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${isDark ? 'bg-opacity-20' : ''} ${category.bgColor} ${category.textColor} text-sm font-semibold rounded-full`}>
                        {toolCount > 0 ? `${toolCount} ${t.openSource.tools}` : t.openSource.comingSoon}
                      </span>
                      <ChevronRight className={`w-5 h-5 ${textMuted} group-hover:text-blue-500 group-hover:translate-x-1 transition-all`} />
                    </div>

                    {/* Hover effect border */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${bgSection}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${isDark ? 'bg-green-900/30' : 'bg-green-100'} text-green-500 rounded-2xl mb-4`}>
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>{t.openSource.free}</h4>
              <p className={textSecondary}>{t.openSource.freeDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} text-blue-500 rounded-2xl mb-4`}>
                <Zap className="w-8 h-8" />
              </div>
              <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>{t.openSource.local}</h4>
              <p className={textSecondary}>{t.openSource.localDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'} text-purple-500 rounded-2xl mb-4`}>
                <Boxes className="w-8 h-8" />
              </div>
              <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>{t.openSource.opensource}</h4>
              <p className={textSecondary}>{t.openSource.opensourceDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${borderColor} ${bgFooter}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={textSecondary}>
            {t.openSource.copyrightText}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://github.com/tw-stephen"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${textMuted} hover:text-blue-500 transition-colors`}
            >
              <ExternalLink className="w-4 h-4" />
              {t.openSource.github}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToolsDemo;

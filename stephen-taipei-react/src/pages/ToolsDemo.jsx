import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  Search, ArrowRight, ChevronRight, Home, ExternalLink, Globe
} from 'lucide-react';
import { categories, getTotalToolsCount, getToolsByCategoryId } from '../data/toolsRegistry';
import { useLanguage, LANGUAGE_OPTIONS } from '../i18n/LanguageContext';

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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.nameTw.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">{t.openSource.backToHome}</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Stephen's Open Source
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => changeLanguage(lang.value)}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors text-sm ${
                        language === lang.value ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Tool Count */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {getTotalToolsCount()}+ {t.openSource.tools}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.openSource.subtitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t.openSource.description}
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.openSource.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 shadow-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
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
                    className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${category.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${category.textColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {language === 'zh-TW' || language === 'zh-HK' ? category.nameTw : language === 'zh-CN' ? category.nameZh : category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{category.name}</p>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {language === 'zh-TW' || language === 'zh-HK' ? category.descriptionTw : language === 'zh-CN' ? category.descriptionZh : category.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${category.bgColor} ${category.textColor} text-sm font-semibold rounded-full`}>
                        {toolCount > 0 ? `${toolCount} ${t.openSource.tools}` : t.openSource.comingSoon}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t.openSource.free}</h4>
              <p className="text-gray-600">{t.openSource.freeDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t.openSource.local}</h4>
              <p className="text-gray-600">{t.openSource.localDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                <Boxes className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t.openSource.opensource}</h4>
              <p className="text-gray-600">{t.openSource.opensourceDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            {t.openSource.copyrightText}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://github.com/tw-stephen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
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

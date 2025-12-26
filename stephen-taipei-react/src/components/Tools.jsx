import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Wrench, Gamepad2, Puzzle, Palette, Cpu, Sparkles, Boxes, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { getToolsByCategoryId, getTotalToolsCount } from '../data/toolsRegistry';

const Tools = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toolCategories = [
    {
      key: 'aiTools',
      categoryId: 'ai-local-tools',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      path: '/open-source/ai-local-tools',
    },
    {
      key: 'chromeExtensions',
      categoryId: 'chrome-extensions',
      icon: Puzzle,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      path: '/open-source/chrome-extensions',
    },
    {
      key: 'freeGames',
      categoryId: 'free-games',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      path: '/open-source/free-games',
    },
    {
      key: 'miniTools',
      categoryId: 'mini-tools',
      icon: Wrench,
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      path: '/open-source/mini-tools',
    },
    {
      key: 'tailwindTemplates',
      categoryId: 'tailwind-templates',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      path: '/open-source/tailwind-templates',
    },
    {
      key: 'wasmTools',
      categoryId: 'wasm-tools',
      icon: Cpu,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      path: '/open-source/wasm-tools',
    },
    {
      key: 'webToys',
      categoryId: 'web-toys',
      icon: Boxes,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      path: '/open-source/web-toys',
    },
    {
      key: 'webWorkers',
      categoryId: 'web-workers',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      path: '/open-source/web-workers',
    },
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.tools.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.tools.subtitle}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {getTotalToolsCount()}+ {t.tools.toolsLabel}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            const toolData = t.tools.categories[category.key];
            const toolCount = getToolsByCategoryId(category.categoryId).length;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={category.path}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${category.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${category.textColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {toolData.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {toolData.description}
                  </p>

                  {/* Count badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${category.bgColor} ${category.textColor} text-sm font-semibold rounded-full`}>
                      {toolCount > 0 ? `${toolCount} ${t.tools.toolsLabel}` : '開發中'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/open-source"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.openSource.viewAllTools}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.tools.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                {index === 0 && <Sparkles className="w-6 h-6" />}
                {index === 1 && <Zap className="w-6 h-6" />}
                {index === 2 && <Boxes className="w-6 h-6" />}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;

import React, { useState } from 'react';
import { ExternalLink, Brain, Chrome, Gamepad2, Wrench, Palette, Cpu, Sparkles, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import screenshotsData from '../data/screenshots.json';

const ToolsPlatform = () => {
  const { t } = useLanguage();

  const tools = [
    {
      id: 'ai-local-tools',
      screenshotKey: 'ai-local-tools',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      repo: 'awesome-ai-local-tools-1000',
      link: 'https://github.com/stephen-taipei/awesome-ai-local-tools-1000',
    },
    {
      id: 'chrome-extensions',
      screenshotKey: 'chrome-extensions',
      icon: Chrome,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      repo: 'awesome-chrome-extensions-1000',
      link: 'https://github.com/stephen-taipei/awesome-chrome-extensions-1000',
    },
    {
      id: 'free-games',
      screenshotKey: 'free-games',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      repo: 'awesome-free-games-1000',
      link: 'https://github.com/tw-stephen/awesome-free-games-1000',
    },
    {
      id: 'mini-tools',
      screenshotKey: 'mini-tools',
      icon: Wrench,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      repo: 'awesome-free-mini-tools-1000',
      link: 'https://github.com/stephen-taipei/awesome-free-mini-tools-1000',
    },
    {
      id: 'tailwind-ui',
      screenshotKey: 'tailwind-templates',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      repo: 'awesome-tailwind-ui-templates-1000',
      link: 'https://github.com/stephen-taipei/awesome-tailwind-ui-templates-1000',
    },
    {
      id: 'wasm-tools',
      screenshotKey: 'wasm-tools',
      icon: Cpu,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      repo: 'awesome-wasm-tools-1000',
      link: 'https://github.com/stephen-taipei/awesome-wasm-tools-1000',
    },
    {
      id: 'web-toys',
      screenshotKey: 'web-toys',
      icon: Sparkles,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600',
      repo: 'awesome-web-toys-1000',
      link: 'https://github.com/stephen-taipei/awesome-web-toys-1000',
    },
    {
      id: 'web-workers',
      screenshotKey: 'web-workers-examples',
      icon: Cog,
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-50',
      iconColor: 'text-slate-600',
      repo: 'awesome-web-workers-examples-1000',
      link: 'https://github.com/stephen-taipei/awesome-web-workers-examples-1000',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium rounded-full mb-4">
              {t.tools.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.tools.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.tools.subtitle}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            const toolContent = t.tools.items[tool.id];
            const screenshots = screenshotsData[tool.screenshotKey] || [];
            const previewScreenshots = screenshots.slice(0, 6);

            return (
              <motion.a
                key={tool.id}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Screenshots Grid Background */}
                {previewScreenshots.length > 0 && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-3 grid-rows-2 gap-1 h-full w-full p-2">
                      {previewScreenshots.map((screenshot, idx) => (
                        <div key={idx} className="relative overflow-hidden rounded-sm">
                          <img
                            src={screenshot}
                            alt={`${toolContent.title} preview ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content - relative positioning to stay above backgrounds */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`${tool.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${tool.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                    {toolContent.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {toolContent.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tool.color} text-white`}>
                      {toolContent.count}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 mb-4">{t.tools.cta}</p>
          <a
            href="https://github.com/stephen-taipei"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {t.tools.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsPlatform;

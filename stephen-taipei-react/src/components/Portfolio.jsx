import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

// Import project images
import copilaMandalaThumbnail from '../assets/projects/copila-mandala.webp';
import copilaMindmapThumbnail from '../assets/projects/copila-mindmap.webp';
import copilaFlowchartThumbnail from '../assets/projects/copila-flowchart.webp';
import meepleHomeThumbnail from '../assets/projects/meeple-home.webp';
import meepleShopThumbnail from '../assets/projects/meeple-shop.webp';
import meepleMobileThumbnail from '../assets/projects/meeple-mobile.webp';
import stocxChartThumbnail from '../assets/projects/stocx-chart.webp';
import stocxListThumbnail from '../assets/projects/stocx-list.webp';
import stocxKolThumbnail from '../assets/projects/stocx-kol.webp';
import dermatoglyphicsListThumbnail from '../assets/projects/dermatoglyphics-list.webp';
import dermatoglyphicsReportThumbnail from '../assets/projects/dermatoglyphics-report.webp';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Theme-aware classes
  const bgSection = isDark ? 'bg-gray-950' : 'bg-gray-50';
  const textTitle = isDark ? 'text-gray-100' : 'text-gray-900';
  const textDesc = isDark ? 'text-gray-400' : 'text-gray-600';
  const bgCard = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100';
  const bgThumbnail = isDark ? 'bg-gray-800' : 'bg-gray-100';
  const btnHover = isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
  const bgAchievement = isDark ? 'bg-green-900/50 text-green-400' : 'bg-green-50 text-green-600';
  const bgTech = isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600';

  const projectImages = [
    [copilaMandalaThumbnail, copilaMindmapThumbnail, copilaFlowchartThumbnail],
    [meepleHomeThumbnail, meepleShopThumbnail, meepleMobileThumbnail],
    [stocxChartThumbnail, stocxListThumbnail, stocxKolThumbnail],
    [dermatoglyphicsListThumbnail, dermatoglyphicsReportThumbnail],
  ];

  const projectColors = ['bg-cyan-600', 'bg-orange-600', 'bg-red-600', 'bg-teal-600'];

  return (
    <section id="portfolio" className={`py-20 ${bgSection}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${textTitle}`}>{t.portfolio.title}</h2>
          <p className={`mt-4 ${textDesc}`}>{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject({ ...project, images: projectImages[index], color: projectColors[index] })}
              className={`group relative ${bgCard} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border flex flex-col cursor-pointer`}
            >
              <div className={`h-2 ${projectColors[index]}`} />

              {/* Thumbnail Image */}
              <div className={`relative h-48 overflow-hidden ${bgThumbnail}`}>
                <img
                  src={projectImages[index][0]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">{t.portfolio.clickToView}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${textTitle} group-hover:text-primary transition-colors`}>
                    {project.title}
                  </h3>
                  <button className={`p-2 ${btnHover} rounded-full transition-colors opacity-0 group-hover:opacity-100`}>
                    <ExternalLink className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  </button>
                </div>

                <p className={`${textDesc} mb-4`}>{project.desc}</p>

                <div className="mt-auto">
                  <div className="mb-4">
                    <p className={`text-sm font-medium ${bgAchievement} px-3 py-1.5 rounded-lg inline-block`}>
                      {project.achievement}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className={`px-2 py-1 ${bgTech} text-xs font-medium rounded-full`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 ${selectedProject.color}`} />

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                    <p className="text-gray-600">{selectedProject.desc}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden bg-gray-100 aspect-video">
                      <img
                        src={img}
                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>

                {/* Project Description */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t.portfolio.projectDesc}</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.fullDesc}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t.portfolio.features}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t.portfolio.techStack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievement */}
                <div className="p-4 bg-green-50 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-1">{t.portfolio.achievement}</h4>
                  <p className="text-green-700">{selectedProject.achievement}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

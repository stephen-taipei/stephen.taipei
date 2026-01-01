import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

// Generate a deterministic gradient based on tool name/id
const generateGradient = (seed, categoryId) => {
  // Generate hash from seed string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  // Category-based color themes
  const categoryColors = {
    'tailwind-templates': [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7'],
      ['#fa709a', '#fee140'],
      ['#a8edea', '#fed6e3'],
      ['#5ee7df', '#b490ca'],
      ['#d299c2', '#fef9d7'],
    ],
    'chrome-extensions': [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#6a11cb', '#2575fc'],
      ['#ee0979', '#ff6a00'],
    ],
    'free-games': [
      ['#ff0844', '#ffb199'],
      ['#00c6fb', '#005bea'],
      ['#f857a6', '#ff5858'],
      ['#a770ef', '#cf8bf3'],
    ],
    'mini-tools': [
      ['#3494e6', '#ec6ead'],
      ['#11998e', '#38ef7d'],
      ['#fc466b', '#3f5efb'],
      ['#c94b4b', '#4b134f'],
    ],
    'wasm-tools': [
      ['#654ea3', '#eaafc8'],
      ['#00c6ff', '#0072ff'],
      ['#f7971e', '#ffd200'],
      ['#834d9b', '#d04ed6'],
    ],
    'web-workers': [
      ['#f2709c', '#ff9472'],
      ['#1a2980', '#26d0ce'],
      ['#c33764', '#1d2671'],
      ['#134e5e', '#71b280'],
    ],
    'ai-local-tools': [
      ['#8e2de2', '#4a00e0'],
      ['#b92b27', '#1565c0'],
      ['#00b4db', '#0083b0'],
      ['#373b44', '#4286f4'],
    ],
    'web-toys': [
      ['#ff416c', '#ff4b2b'],
      ['#a8ff78', '#78ffd6'],
      ['#f5af19', '#f12711'],
      ['#56ab2f', '#a8e063'],
    ],
  };

  const colors = categoryColors[categoryId] || categoryColors['tailwind-templates'];
  const index = Math.abs(hash) % colors.length;
  const [from, to] = colors[index];

  return `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;
};

// Check if screenshot exists, return path or null
const getScreenshotPath = (tool, categoryId) => {
  // Screenshot naming convention: /screenshots/{categoryId}/{tool.slug}.png
  // For now, return null as screenshots don't exist yet
  // Later, this can be updated to check for real screenshots
  return null;
};

const TemplateCard = ({ tool, categoryId, index, language, viewMode = 'gallery' }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const screenshotPath = getScreenshotPath(tool, categoryId);
  const gradient = generateGradient(tool.slug + tool.id, categoryId);

  const toolName = language === 'en' ? tool.name : (tool.nameTw || tool.name);

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: index < 8 ? index * 0.02 : 0 }}
      >
        <Link
          to={`/open-source/${categoryId}/${tool.slug}`}
          className="group flex items-center gap-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-3 transition-all duration-200 border border-gray-700/50 hover:border-gray-600"
        >
          <div
            className="w-16 h-10 rounded-md flex-shrink-0 flex items-center justify-center text-white text-xs font-medium"
            style={{ background: gradient }}
          >
            {tool.id}
          </div>
          <span className="text-gray-200 font-medium truncate flex-1">{toolName}</span>
          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors flex-shrink-0" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index < 8 ? index * 0.03 : 0 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/open-source/${categoryId}/${tool.slug}`}
        className="block bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20"
      >
        {/* Thumbnail Area */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {screenshotPath && !imageError ? (
            <img
              src={screenshotPath}
              alt={toolName}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            // Placeholder gradient with tool info
            <div
              className="w-full h-full flex flex-col items-center justify-center text-white relative"
              style={{ background: gradient }}
            >
              {/* Mock browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900/30 flex items-center px-2 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
                <div className="flex-1 mx-2 h-3 bg-white/10 rounded text-[8px] text-white/40 flex items-center px-1.5 truncate">
                  {tool.slug}
                </div>
              </div>

              {/* Placeholder content */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <span className="text-2xl font-bold opacity-90">#{tool.id}</span>
                <span className="text-xs opacity-70 text-center px-4 line-clamp-2">{toolName}</span>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm flex items-center gap-2 transform transition-transform duration-200 hover:scale-105">
              <Eye className="w-4 h-4" />
              View Template
            </span>
          </div>
        </div>

        {/* Title Area */}
        <div className="p-3 bg-gray-900/50">
          <h4 className="text-gray-200 font-medium text-sm truncate group-hover:text-white transition-colors">
            {toolName}
          </h4>
        </div>
      </Link>
    </motion.div>
  );
};

export default TemplateCard;

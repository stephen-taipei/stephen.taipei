import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  Search, ChevronLeft, ChevronRight, Play, Grid, List, ExternalLink
} from 'lucide-react';
import { categories, getToolsByCategoryId, getCategoryById } from '../data/toolsRegistry';

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

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const category = getCategoryById(categoryId);
  const tools = getToolsByCategoryId(categoryId);

  const filteredTools = useMemo(() => {
    if (!searchQuery) return tools;
    const query = searchQuery.toLowerCase();
    return tools.filter(tool =>
      tool.name.toLowerCase().includes(query) ||
      tool.nameTw.includes(searchQuery) ||
      tool.slug.includes(query)
    );
  }, [tools, searchQuery]);

  // Group tools by sub-category
  const groupedTools = useMemo(() => {
    const groups = {};
    filteredTools.forEach(tool => {
      const cat = tool.category || 'other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(tool);
    });
    return groups;
  }, [filteredTools]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">類別不存在</h2>
          <Link to="/tools" className="text-primary hover:underline">
            返回工具平台
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/tools"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">返回</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className={`p-2 ${category.bgColor} rounded-lg`}>
                  <Icon className={`w-5 h-5 ${category.textColor}`} />
                </div>
                <h1 className="text-lg font-bold text-gray-900">
                  {category.nameTw}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {tools.length} 工具
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative py-12 overflow-hidden bg-gradient-to-r ${category.color}`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{category.nameTw}</h2>
                <p className="text-white/80">{category.name}</p>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-2xl">
              {category.descriptionTw}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋工具..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid/List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(groupedTools).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">沒有找到符合的工具</p>
            </div>
          ) : (
            Object.entries(groupedTools).map(([subCategory, categoryTools]) => (
              <div key={subCategory} className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 capitalize flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  {subCategory}
                  <span className="text-sm font-normal text-gray-500">
                    ({categoryTools.length} 個工具)
                  </span>
                </h3>

                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {categoryTools.map((tool, index) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={`/tools/${categoryId}/${tool.slug}`}
                          className="group block bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <span className={`text-xs font-mono px-2 py-1 ${category.bgColor} ${category.textColor} rounded`}>
                              #{tool.id}
                            </span>
                            <Play className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                            {tool.nameTw}
                          </h4>
                          <p className="text-sm text-gray-500">{tool.name}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {categoryTools.map((tool, index) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                      >
                        <Link
                          to={`/tools/${categoryId}/${tool.slug}`}
                          className="group flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`text-xs font-mono px-2 py-1 ${category.bgColor} ${category.textColor} rounded`}>
                              #{tool.id}
                            </span>
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                {tool.nameTw}
                              </h4>
                              <p className="text-sm text-gray-500">{tool.name}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2024 Stephen Taipei · {category.nameTw}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;

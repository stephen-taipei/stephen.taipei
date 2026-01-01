import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  Search, ChevronLeft, ChevronRight, Grid, List, Globe,
  ArrowUpDown, Filter, X, LayoutGrid
} from 'lucide-react';
import { categories, getToolsByCategoryId, getCategoryById } from '../data/toolsRegistry';
import { useLanguage, LANGUAGE_OPTIONS } from '../i18n/LanguageContext';
import TemplateCard from '../components/TemplateCard';

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

const DEFAULT_VISIBLE_COUNT = 12;

const CategoryPage = () => {
  const { t, language, changeLanguage } = useLanguage();
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' or 'list'
  const [expandedCategories, setExpandedCategories] = useState({}); // Track which categories are expanded
  const [selectedSubCategories, setSelectedSubCategories] = useState([]); // Filter by sub-category
  const [sortBy, setSortBy] = useState('default'); // 'default', 'name', 'id'

  const category = getCategoryById(categoryId);
  const tools = getToolsByCategoryId(categoryId);

  // Get unique sub-categories for filter chips
  const subCategories = useMemo(() => {
    const cats = new Set();
    tools.forEach(tool => {
      if (tool.category) cats.add(tool.category);
    });
    return Array.from(cats).sort();
  }, [tools]);

  // Toggle sub-category filter
  const toggleSubCategoryFilter = (subCat) => {
    setSelectedSubCategories(prev =>
      prev.includes(subCat)
        ? prev.filter(c => c !== subCat)
        : [...prev, subCat]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedSubCategories([]);
    setSearchQuery('');
  };

  const filteredTools = useMemo(() => {
    let result = tools;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.nameTw.includes(searchQuery) ||
        tool.slug.includes(query)
      );
    }

    // Filter by selected sub-categories
    if (selectedSubCategories.length > 0) {
      result = result.filter(tool =>
        selectedSubCategories.includes(tool.category)
      );
    }

    // Sort
    if (sortBy === 'name') {
      result = [...result].sort((a, b) =>
        (language === 'en' ? a.name : a.nameTw).localeCompare(
          language === 'en' ? b.name : b.nameTw
        )
      );
    } else if (sortBy === 'id') {
      result = [...result].sort((a, b) => {
        const idA = parseInt(a.id) || 0;
        const idB = parseInt(b.id) || 0;
        return idA - idB;
      });
    }

    return result;
  }, [tools, searchQuery, selectedSubCategories, sortBy, language]);

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

  // Get visible count for a category
  const getVisibleCount = (subCategory) => {
    return expandedCategories[subCategory] ? Infinity : DEFAULT_VISIBLE_COUNT;
  };

  // Toggle expand for a category
  const toggleExpand = (subCategory) => {
    setExpandedCategories(prev => ({
      ...prev,
      [subCategory]: !prev[subCategory]
    }));
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{t.openSource.categoryNotFound}</h2>
          <Link to="/open-source" className="text-blue-400 hover:underline">
            {t.openSource.backToTools}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/open-source"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{t.openSource.back}</span>
              </Link>
              <div className="h-6 w-px bg-gray-700" />
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-lg font-bold text-white">
                  {language === 'zh-TW' || language === 'zh-HK' ? category.nameTw : language === 'zh-CN' ? category.nameZh : category.name}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
                <div className="absolute right-0 mt-0 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700 z-50">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => changeLanguage(lang.value)}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors text-sm ${
                        language === lang.value ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-gray-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Tool Count */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                {tools.length} {t.openSource.tools}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'zh-TW' || language === 'zh-HK'
                ? `選擇一個${category.nameTw}`
                : `Start with a ${category.name}`
              }
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {language === 'zh-TW' || language === 'zh-HK' ? category.descriptionTw : language === 'zh-CN' ? category.descriptionZh : category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-6 bg-gray-900/30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder={t.openSource.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500"
                />
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none cursor-pointer"
                >
                  <option value="default">{t.openSource.sortDefault}</option>
                  <option value="name">{t.openSource.sortByName}</option>
                  <option value="id">{t.openSource.sortById}</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-gray-800 p-1 rounded-lg border border-gray-700">
                <button
                  onClick={() => setViewMode('gallery')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'gallery' ? 'bg-gray-700 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
                  title="Gallery View"
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-gray-700 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
                  title="List View"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sub-category Filter Chips */}
            {subCategories.length > 1 && (
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                {subCategories.map(subCat => {
                  const isSelected = selectedSubCategories.includes(subCat);
                  return (
                    <button
                      key={subCat}
                      onClick={() => toggleSubCategoryFilter(subCat)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-500'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700'
                      }`}
                    >
                      {subCat}
                    </button>
                  );
                })}
                {(selectedSubCategories.length > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors border border-red-900/50"
                  >
                    <X className="w-3 h-3" />
                    {t.openSource.clearFilters}
                  </button>
                )}
              </div>
            )}

            {/* Active Filters Summary */}
            {(selectedSubCategories.length > 0 || searchQuery) && (
              <div className="text-sm text-gray-500">
                {t.openSource.foundTools.replace('{count}', filteredTools.length)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tools Grid/List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(groupedTools).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.openSource.noMatchingTools}</p>
            </div>
          ) : (
            Object.entries(groupedTools).map(([subCategory, categoryTools]) => (
              <div key={subCategory} className="mb-12">
                {/* Sub-category Header */}
                {subCategories.length > 1 && (
                  <h3 className="text-xl font-bold text-white mb-6 capitalize flex items-center gap-3">
                    <span className="text-gray-400">{subCategory}</span>
                    <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">
                      {categoryTools.length}
                    </span>
                  </h3>
                )}

                {viewMode === 'gallery' ? (
                  <>
                    {/* Gallery Grid - 6 columns like GrapesJS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {categoryTools.slice(0, getVisibleCount(subCategory)).map((tool, index) => (
                        <TemplateCard
                          key={tool.id}
                          tool={tool}
                          categoryId={categoryId}
                          index={index}
                          language={language}
                          viewMode="gallery"
                        />
                      ))}
                    </div>
                    {/* Show More Button */}
                    {categoryTools.length > DEFAULT_VISIBLE_COUNT && (
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => toggleExpand(subCategory)}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                            expandedCategories[subCategory]
                              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {expandedCategories[subCategory] ? (
                            <>
                              <ChevronLeft className="w-4 h-4 rotate-90" />
                              {t.openSource.showLess}
                            </>
                          ) : (
                            <>
                              {t.openSource.showMore.replace('{count}', categoryTools.length - DEFAULT_VISIBLE_COUNT)}
                              <ChevronRight className="w-4 h-4 rotate-90" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {categoryTools.slice(0, getVisibleCount(subCategory)).map((tool, index) => (
                        <TemplateCard
                          key={tool.id}
                          tool={tool}
                          categoryId={categoryId}
                          index={index}
                          language={language}
                          viewMode="list"
                        />
                      ))}
                    </div>
                    {/* Show More Button for List View */}
                    {categoryTools.length > DEFAULT_VISIBLE_COUNT && (
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => toggleExpand(subCategory)}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                            expandedCategories[subCategory]
                              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {expandedCategories[subCategory] ? (
                            <>
                              <ChevronLeft className="w-4 h-4 rotate-90" />
                              {t.openSource.showLess}
                            </>
                          ) : (
                            <>
                              {t.openSource.showMore.replace('{count}', categoryTools.length - DEFAULT_VISIBLE_COUNT)}
                              <ChevronRight className="w-4 h-4 rotate-90" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            © 2025 Stephen Taipei · {category.nameTw}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;

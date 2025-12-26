import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  Search, ChevronLeft, ChevronRight, Grid, List, ExternalLink, Globe,
  ArrowUpDown, Filter, X
} from 'lucide-react';
import { categories, getToolsByCategoryId, getCategoryById } from '../data/toolsRegistry';
import { getToolDescription } from '../data/toolDescriptions';
import { getToolIcon, getSubCategoryColor } from '../data/toolIcons';
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

const DEFAULT_VISIBLE_COUNT = 8;

const CategoryPage = () => {
  const { t, language, changeLanguage } = useLanguage();
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.openSource.categoryNotFound}</h2>
          <Link to="/open-source" className="text-primary hover:underline">
            {t.openSource.backToTools}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/open-source"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{t.openSource.back}</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className={`p-2 ${category.bgColor} rounded-lg`}>
                  <Icon className={`w-5 h-5 ${category.textColor}`} />
                </div>
                <h1 className="text-lg font-bold text-gray-900">
                  {language === 'zh-TW' || language === 'zh-HK' ? category.nameTw : language === 'zh-CN' ? category.nameZh : category.name}
                </h1>
              </div>
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
                {tools.length} {t.openSource.tools}
              </div>
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
                <h2 className="text-3xl font-bold">{language === 'zh-TW' || language === 'zh-HK' ? category.nameTw : language === 'zh-CN' ? category.nameZh : category.name}</h2>
                <p className="text-white/80">{category.name}</p>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-2xl">
              {language === 'zh-TW' || language === 'zh-HK' ? category.descriptionTw : language === 'zh-CN' ? category.descriptionZh : category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.openSource.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer"
                >
                  <option value="default">{t.openSource.sortDefault}</option>
                  <option value="name">{t.openSource.sortByName}</option>
                  <option value="id">{t.openSource.sortById}</option>
                </select>
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

            {/* Sub-category Filter Chips */}
            {subCategories.length > 1 && (
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                {subCategories.map(subCat => {
                  const colors = getSubCategoryColor(subCat, categoryId);
                  const isSelected = selectedSubCategories.includes(subCat);
                  return (
                    <button
                      key={subCat}
                      onClick={() => toggleSubCategoryFilter(subCat)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        isSelected
                          ? `${colors.bg} ${colors.text} ring-2 ring-offset-1 ring-current`
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {subCat}
                    </button>
                  );
                })}
                {(selectedSubCategories.length > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
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
            Object.entries(groupedTools).map(([subCategory, categoryTools]) => {
              const subCatColors = getSubCategoryColor(subCategory, categoryId);
              return (
              <div key={subCategory} className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 capitalize flex items-center gap-3">
                  <span className={`p-2 rounded-lg ${subCatColors.bg}`}>
                    {(() => {
                      const SubCatIcon = getToolIcon(categoryTools[0], categoryId);
                      return <SubCatIcon className={`w-5 h-5 ${subCatColors.text}`} />;
                    })()}
                  </span>
                  <span>{subCategory}</span>
                  <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${subCatColors.bg} ${subCatColors.text}`}>
                    {categoryTools.length}
                  </span>
                </h3>

                {viewMode === 'grid' ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {categoryTools.slice(0, getVisibleCount(subCategory)).map((tool, index) => {
                        const ToolIcon = getToolIcon(tool, categoryId);
                        const toolColors = getSubCategoryColor(tool.category, categoryId);
                        return (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index < DEFAULT_VISIBLE_COUNT ? index * 0.03 : 0 }}
                        >
                          <Link
                            to={`/open-source/${categoryId}/${tool.slug}`}
                            className="group block bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg ${toolColors.bg} flex-shrink-0`}>
                                <ToolIcon className={`w-5 h-5 ${toolColors.text}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className={`text-xs font-mono px-1.5 py-0.5 ${toolColors.bg} ${toolColors.text} rounded`}>
                                    #{tool.id}
                                  </span>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                  {language === 'en' ? tool.name : (tool.nameTw || tool.name)}
                                </h4>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                  {getToolDescription(tool, categoryId, language)}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );})}
                    </div>
                    {/* Show More Button */}
                    {categoryTools.length > DEFAULT_VISIBLE_COUNT && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => toggleExpand(subCategory)}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                            expandedCategories[subCategory]
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              : `${category.bgColor} ${category.textColor} hover:opacity-80`
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
                    <div className="space-y-2">
                      {categoryTools.slice(0, getVisibleCount(subCategory)).map((tool, index) => {
                        const ToolIcon = getToolIcon(tool, categoryId);
                        const toolColors = getSubCategoryColor(tool.category, categoryId);
                        return (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index < DEFAULT_VISIBLE_COUNT ? index * 0.02 : 0 }}
                        >
                          <Link
                            to={`/open-source/${categoryId}/${tool.slug}`}
                            className="group flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                          >
                            <div className="flex items-center gap-4 min-w-0 flex-1">
                              <div className={`p-2 rounded-lg ${toolColors.bg} flex-shrink-0`}>
                                <ToolIcon className={`w-5 h-5 ${toolColors.text}`} />
                              </div>
                              <span className={`text-xs font-mono px-1.5 py-0.5 ${toolColors.bg} ${toolColors.text} rounded flex-shrink-0`}>
                                #{tool.id}
                              </span>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                                  {language === 'en' ? tool.name : (tool.nameTw || tool.name)}
                                </h4>
                                <p className="text-sm text-gray-500 truncate">
                                  {getToolDescription(tool, categoryId, language)}
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                          </Link>
                        </motion.div>
                      );})}
                    </div>
                    {/* Show More Button for List View */}
                    {categoryTools.length > DEFAULT_VISIBLE_COUNT && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => toggleExpand(subCategory)}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                            expandedCategories[subCategory]
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              : `${category.bgColor} ${category.textColor} hover:opacity-80`
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
            );})
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2025 Stephen Taipei · {category.nameTw}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;

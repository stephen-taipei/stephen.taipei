import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  ChevronLeft, Maximize2, Minimize2, ExternalLink, RefreshCw, Share2, Copy, Check, Globe
} from 'lucide-react';
import { getCategoryById, getToolsByCategoryId, getToolUrl } from '../data/toolsRegistry';
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

const ToolViewer = () => {
  const { t, language, changeLanguage } = useLanguage();
  const { categoryId, toolSlug } = useParams();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef(null);

  const category = getCategoryById(categoryId);
  const tools = getToolsByCategoryId(categoryId);
  const tool = tools.find(t => t.slug === toolSlug);

  // Construct the tool URL
  const toolUrl = tool ? getToolUrl(categoryId, toolSlug) : null;

  // Find previous and next tools
  const currentIndex = tools.findIndex(t => t.slug === toolSlug);
  const prevTool = currentIndex > 0 ? tools[currentIndex - 1] : null;
  const nextTool = currentIndex < tools.length - 1 ? tools[currentIndex + 1] : null;

  useEffect(() => {
    setIsLoading(true);
  }, [toolSlug]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const handleOpenExternal = () => {
    if (toolUrl) {
      window.open(toolUrl, '_blank');
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: tool?.nameTw || tool?.name,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!category || !tool) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '工具不存在' : 'Tool not found'}</h2>
          <Link to="/open-source" className="text-primary hover:underline">
            {t.openSource.backToTools}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[category.icon];

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        {/* Fullscreen Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-3 text-white">
              <Icon className="w-5 h-5" />
              <span className="font-medium">{language === 'zh-TW' || language === 'zh-HK' ? tool.nameTw : language === 'zh-CN' ? tool.nameZh : tool.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="p-2 text-white/70 hover:text-white transition-colors"
                title={t.openSource.refresh}
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={handleOpenExternal}
                className="p-2 text-white/70 hover:text-white transition-colors"
                title={t.openSource.openInNewTab}
              >
                <ExternalLink className="w-5 h-5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-white/70 hover:text-white transition-colors"
                title={language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '離開全螢幕' : 'Exit fullscreen'}
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Iframe */}
        <iframe
          ref={iframeRef}
          src={toolUrl}
          className="w-full h-full pt-12"
          onLoad={handleIframeLoad}
          title={language === 'zh-TW' || language === 'zh-HK' ? tool.nameTw : language === 'zh-CN' ? tool.nameZh : tool.name}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: Back & Title */}
            <div className="flex items-center gap-4">
              <Link
                to={`/open-source/${categoryId}`}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '返回列表' : 'Back'}</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className={`p-1.5 ${category.bgColor} rounded-lg`}>
                  <Icon className={`w-4 h-4 ${category.textColor}`} />
                </div>
                <div>
                  <h1 className="text-sm font-bold text-gray-900">{language === 'zh-TW' || language === 'zh-HK' ? tool.nameTw : language === 'zh-CN' ? tool.nameZh : tool.name}</h1>
                  <p className="text-xs text-gray-500">{tool.name}</p>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1">
              {/* Language Selector */}
              <div className="relative group">
                <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors">
                  <Globe className="w-5 h-5" />
                </button>
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
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
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title={t.openSource.copyLink}
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
              </button>
              <button
                onClick={handleRefresh}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title={t.openSource.refresh}
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={handleOpenExternal}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title={t.openSource.openInNewTab}
              >
                <ExternalLink className="w-5 h-5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title={language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '全螢幕' : 'Fullscreen'}
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Tool Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Iframe Container */}
          <div className="relative" style={{ height: 'calc(100vh - 200px)', minHeight: '500px' }}>
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">{language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '載入中...' : 'Loading...'}</p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              ref={iframeRef}
              src={toolUrl}
              className="w-full h-full"
              onLoad={handleIframeLoad}
              title={language === 'zh-TW' || language === 'zh-HK' ? tool.nameTw : language === 'zh-CN' ? tool.nameZh : tool.name}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
            />
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {prevTool ? (
            <Link
              to={`/open-source/${categoryId}/${prevTool.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-primary"
            >
              <ChevronLeft className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-gray-500">{t.openSource.previousTool}</p>
                <p className="text-sm font-medium">{language === 'zh-TW' || language === 'zh-HK' ? prevTool.nameTw : language === 'zh-CN' ? prevTool.nameZh : prevTool.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextTool && (
            <Link
              to={`/open-source/${categoryId}/${nextTool.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-primary"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500">{t.openSource.nextTool}</p>
                <p className="text-sm font-medium">{language === 'zh-TW' || language === 'zh-HK' ? nextTool.nameTw : language === 'zh-CN' ? nextTool.nameZh : nextTool.name}</p>
              </div>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </Link>
          )}
        </div>

        {/* Tool Info */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-2">{language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '關於此工具' : 'About This Tool'}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 ${category.bgColor} ${category.textColor} rounded-full text-sm font-medium`}>
              {language === 'zh-TW' || language === 'zh-HK' ? category.nameTw : language === 'zh-CN' ? category.nameZh : category.name}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              #{tool.id}
            </span>
            {tool.category && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm capitalize">
                {tool.category}
              </span>
            )}
          </div>
          <p className="text-gray-600">
            {language === 'zh-TW' || language === 'zh-HK' || language === 'zh-CN' ? '此工具完全在瀏覽器本地運行，您的資料不會上傳至任何伺服器。' : 'This tool runs entirely locally in your browser. Your data is not transmitted to any server.'}
          </p>
        </div>
      </main>
    </div>
  );
};

export default ToolViewer;

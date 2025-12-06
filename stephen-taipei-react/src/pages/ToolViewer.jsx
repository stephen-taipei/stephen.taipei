import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, Puzzle, Gamepad2, Wrench, Palette, Cpu, Boxes, Zap,
  ChevronLeft, Maximize2, Minimize2, ExternalLink, RefreshCw, Share2, Copy, Check
} from 'lucide-react';
import { getCategoryById, getToolsByCategoryId, getToolUrl } from '../data/toolsRegistry';

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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">工具不存在</h2>
          <Link to="/tools" className="text-primary hover:underline">
            返回工具平台
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
              <span className="font-medium">{tool.nameTw}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="p-2 text-white/70 hover:text-white transition-colors"
                title="重新載入"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={handleOpenExternal}
                className="p-2 text-white/70 hover:text-white transition-colors"
                title="開新視窗"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-white/70 hover:text-white transition-colors"
                title="離開全螢幕"
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
          title={tool.nameTw}
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
                to={`/tools/${categoryId}`}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">返回列表</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className={`p-1.5 ${category.bgColor} rounded-lg`}>
                  <Icon className={`w-4 h-4 ${category.textColor}`} />
                </div>
                <div>
                  <h1 className="text-sm font-bold text-gray-900">{tool.nameTw}</h1>
                  <p className="text-xs text-gray-500">{tool.name}</p>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title="分享"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
              </button>
              <button
                onClick={handleRefresh}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title="重新載入"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={handleOpenExternal}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title="開新視窗"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                title="全螢幕"
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
                  <p className="text-gray-600">載入中...</p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              ref={iframeRef}
              src={toolUrl}
              className="w-full h-full"
              onLoad={handleIframeLoad}
              title={tool.nameTw}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
            />
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {prevTool ? (
            <Link
              to={`/tools/${categoryId}/${prevTool.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-primary"
            >
              <ChevronLeft className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-gray-500">上一個</p>
                <p className="text-sm font-medium">{prevTool.nameTw}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextTool && (
            <Link
              to={`/tools/${categoryId}/${nextTool.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-primary"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500">下一個</p>
                <p className="text-sm font-medium">{nextTool.nameTw}</p>
              </div>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </Link>
          )}
        </div>

        {/* Tool Info */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-2">關於此工具</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 ${category.bgColor} ${category.textColor} rounded-full text-sm font-medium`}>
              {category.nameTw}
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
            此工具完全在瀏覽器本地運行，您的資料不會上傳至任何伺服器。
          </p>
        </div>
      </main>
    </div>
  );
};

export default ToolViewer;

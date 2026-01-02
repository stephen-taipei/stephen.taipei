import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const NotFound = () => {
  const { t, language } = useLanguage();

  const isChinese = language?.toLowerCase().startsWith('zh');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-gray-100 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
            {isChinese ? '頁面不存在' : 'Page Not Found'}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            {isChinese
              ? '抱歉，您訪問的頁面不存在或已被移除。請檢查網址是否正確，或返回首頁繼續瀏覽。'
              : "Sorry, the page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              {isChinese ? '返回首頁' : 'Go to Homepage'}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              {isChinese ? '返回上一頁' : 'Go Back'}
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {isChinese ? '或者訪問以下連結：' : 'Or visit these links:'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/" className="text-primary hover:underline">
                {isChinese ? '首頁' : 'Home'}
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/open-source" className="text-primary hover:underline">
                {isChinese ? '開源工具' : 'Open Source Tools'}
              </Link>
              <span className="text-gray-300">|</span>
              <a href="/#contact" className="text-primary hover:underline">
                {isChinese ? '聯繫我' : 'Contact'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

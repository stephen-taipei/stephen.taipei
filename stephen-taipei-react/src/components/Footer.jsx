import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Theme-aware classes
  const bgFooter = isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-100';
  const textMuted = isDark ? 'text-gray-500' : 'text-gray-500';

  return (
    <footer className={`${bgFooter} border-t py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
            Stephen.Taipei
          </span>
          <p className={`mt-2 text-sm ${textMuted}`}>
            &copy; {new Date().getFullYear()} Stephen Chuang. {t.footer.copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

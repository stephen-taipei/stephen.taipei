import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage, LANGUAGE_OPTIONS } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.tools, href: '#tools' },
    { name: t.nav.contact, href: '#contact' },
  ];

  // Theme-aware classes
  const bgNav = isDark ? 'bg-gray-900/90' : 'bg-white/90';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-100';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
  const textHover = isDark ? 'hover:text-blue-400' : 'hover:text-primary-dark';
  const bgMobile = isDark ? 'bg-gray-900' : 'bg-white';
  const bgHover = isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100';

  return (
    <>
      {/* Mobile menu backdrop overlay - rendered via portal to body */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          style={{ zIndex: 40 }}
          onClick={() => setIsOpen(false)}
        />,
        document.body
      )}
      <nav className={`fixed w-full ${bgNav} backdrop-blur-sm shadow-sm z-50 border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
            >
              Stephen.Taipei
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${textSecondary} ${textHover} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Switcher */}
            <div className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium ${textSecondary} border ${borderColor} rounded-full ${isDark ? 'hover:border-blue-500/30' : 'hover:border-primary/30'} transition-all`}>
              <Globe className="w-4 h-4" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`bg-transparent outline-none cursor-pointer ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                aria-label="Select language"
              >
                {LANGUAGE_OPTIONS.map((lang) => (
                  <option key={lang.value} value={lang.value} className={isDark ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-600'}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${textSecondary} ${textHover}`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Language Switcher */}
            <div className={`p-2 ${textSecondary} ${textHover}`}>
              <label htmlFor="mobile-language" className="sr-only">
                Select language
              </label>
              <div className={`flex items-center border ${borderColor} rounded-md px-2 py-1`}>
                <Globe className="w-5 h-5 mr-2" />
                <select
                  id="mobile-language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={`bg-transparent text-sm outline-none ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                  aria-label="Select language"
                >
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <option key={lang.value} value={lang.value} className={isDark ? 'bg-gray-900' : 'bg-white'}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isDark ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800' : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden relative" style={{ zIndex: 45 }}>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${bgMobile} border-b ${borderColor} shadow-lg`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textSecondary} ${textHover} block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, LANGUAGE_OPTIONS } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
              Stephen.Taipei
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-full hover:border-primary/30 transition-all">
              <Globe className="w-4 h-4" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent outline-none cursor-pointer"
                aria-label="Select language"
              >
                {LANGUAGE_OPTIONS.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="p-2 text-gray-600 hover:text-primary-dark">
              <label htmlFor="mobile-language" className="sr-only">
                Select language
              </label>
              <div className="flex items-center border border-gray-200 rounded-md px-2 py-1">
                <Globe className="w-5 h-5 mr-2" />
                <select
                  id="mobile-language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-sm outline-none"
                  aria-label="Select language"
                >
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

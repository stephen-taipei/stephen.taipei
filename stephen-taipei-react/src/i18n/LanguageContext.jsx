import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './locales';

// Shared language options for the UI selector
export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'zh-TW', label: '繁體中文（台灣）' },
  { value: 'zh-HK', label: '繁體中文（香港）' },
  { value: 'zh-CN', label: '简体中文' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'es', label: 'Español' },
  { value: 'es-MX', label: 'Español (México)' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'pt', label: 'Português' },
  { value: 'pt-BR', label: 'Português (Brasil)' },
  { value: 'it', label: 'Italiano' },
  { value: 'id', label: 'Bahasa Indonesia' },
  { value: 'ms', label: 'Bahasa Melayu' },
  { value: 'fil', label: 'Filipino' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'th', label: 'ไทย' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'km', label: 'ខ្មែរ' },
  { value: 'lo', label: 'ລາວ' },
  { value: 'my', label: 'မြန်မာ' },
];

const LanguageContext = createContext();

const normalizeLanguage = (lang) => {
  if (!lang) return 'en';
  const available = Object.keys(translations);
  const lower = lang.toLowerCase();

  if (lower === 'zh' || lower === 'zh-tw' || lower === 'zh-hant') return 'zh-TW';
  if (lower === 'zh-hk') return 'zh-HK';
  if (lower === 'zh-cn' || lower === 'zh-hans') return 'zh-CN';

  const exact = available.find((code) => code.toLowerCase() === lower);
  if (exact) return exact;

  const base = lower.split('-')[0];
  const baseMatch = available.find((code) => code.toLowerCase().startsWith(base));
  if (baseMatch) return baseMatch;

  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved) return normalizeLanguage(saved);

    const browserLang = navigator.language || navigator.userLanguage || 'en';
    return normalizeLanguage(browserLang);
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;

  const changeLanguage = (lang) => {
    setLanguage(normalizeLanguage(lang));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh-TW' : 'en'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, changeLanguage, toggleLanguage, t, languageOptions: LANGUAGE_OPTIONS }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;

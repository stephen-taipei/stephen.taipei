import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Theme-aware classes
  const bgSection = isDark ? 'bg-gray-900' : 'bg-white';
  const textTitle = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSubtitle = isDark ? 'text-gray-300' : 'text-gray-700';
  const textDesc = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderLine = isDark ? 'border-gray-700' : 'border-gray-200';
  const bgDot = isDark ? 'bg-gray-900' : 'bg-white';
  const bgBadge = isDark ? 'bg-blue-900/50' : 'bg-blue-50';

  return (
    <section id="experience" className={`py-20 ${bgSection}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold ${textTitle} mb-12 text-center`}>{t.experience.title}</h2>

        <div className={`relative border-l-2 ${borderLine} ml-4 md:ml-12 space-y-12`}>
          {t.experience.jobs.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${bgDot} border-4 border-primary shadow-sm`} />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className={`text-xl font-bold ${textTitle}`}>{exp.company}</h3>
                <span className={`text-sm font-medium text-primary px-3 py-1 ${bgBadge} rounded-full mt-2 sm:mt-0 w-fit`}>
                  {exp.period}
                </span>
              </div>

              <h4 className={`text-lg ${textSubtitle} font-medium mb-4 flex items-center gap-2`}>
                <Briefcase className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                {exp.role}
              </h4>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className={`${textDesc} leading-relaxed flex items-start gap-2`}>
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-600' : 'bg-gray-400'} flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

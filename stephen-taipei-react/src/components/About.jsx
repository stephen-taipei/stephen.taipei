import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Zap, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Theme-aware classes
  const bgSection = isDark ? 'bg-gray-900' : 'bg-white';
  const bgImage = isDark ? 'from-gray-800 to-gray-700' : 'from-gray-100 to-gray-200';
  const bgBadge = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const bgIconBlue = isDark ? 'bg-blue-900/50' : 'bg-blue-50';
  const bgIconGreen = isDark ? 'bg-green-900/50' : 'bg-green-50';
  const bgIconPurple = isDark ? 'bg-purple-900/50' : 'bg-purple-50';
  const textTitle = isDark ? 'text-gray-100' : 'text-gray-900';
  const textDesc = isDark ? 'text-gray-400 prose-invert' : 'text-gray-600';
  const textMuted = isDark ? 'text-gray-500' : 'text-gray-500';

  return (
    <section id="about" className={`py-20 ${bgSection}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Professional profile image */}
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-tr ${bgImage} overflow-hidden shadow-xl relative`}>
                <img
                  src="/digital-cover.webp"
                  alt="Stephen Chuang - Senior Full Stack Engineer and System Architect"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badges */}
              <div className={`flex absolute right-2 -bottom-6 sm:-right-6 gap-3 items-center p-4 ${bgBadge} rounded-xl border shadow-lg`}>
                <div className={`p-2 ${bgIconBlue} rounded-lg text-primary`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-xs font-bold ${textMuted} uppercase`}>{t.about.badgeTitle}</p>
                  <p className={`text-sm font-bold ${textTitle}`}>{t.about.badgeValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className={`text-3xl font-bold ${textTitle}`}>
              {t.about.title}<span className="text-primary">{t.about.titleHighlight}</span>
            </h2>

            <div className={`${textDesc} prose prose-lg`}>
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className={`p-2 mt-1 text-green-600 ${bgIconGreen} rounded-lg`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold ${textTitle}`}>{t.about.performanceTitle}</h4>
                  <p className={`text-sm ${textMuted}`}>{t.about.performanceDesc}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className={`p-2 mt-1 text-purple-600 ${bgIconPurple} rounded-lg`}>
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold ${textTitle}`}>{t.about.leadershipTitle}</h4>
                  <p className={`text-sm ${textMuted}`}>{t.about.leadershipDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

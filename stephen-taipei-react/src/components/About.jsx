import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Zap, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Clean, professional placeholder for profile image or graphic */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 overflow-hidden shadow-xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-grid-slate-100 bg-cover bg-center [background-image:url('/digital-cover.webp')]"></div>
                {/* <div className="z-10 p-4 text-center rounded-2xl backdrop-blur-md bg-white/70">
                  <img src="/stephen-avatar.webp" alt="stephen avatar" className="object-cover mx-auto mb-4 w-full h-24 rounded-2xl" />
                  <p className="font-medium text-gray-900">{t.hero.name}</p>
                  <p className="text-sm text-gray-700">{t.about.location}</p>
                </div> */}
              </div>
              {/* Floating badges */}
              <div className="flex absolute -right-6 -bottom-6 gap-3 items-center p-4 bg-white rounded-xl border border-gray-100 shadow-lg">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">{t.about.badgeTitle}</p>
                  <p className="text-sm font-bold text-gray-900">{t.about.badgeValue}</p>
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
            <h2 className="text-3xl font-bold text-gray-900">
              {t.about.title}<span className="text-primary">{t.about.titleHighlight}</span>
            </h2>

            <div className="text-gray-600 prose prose-lg">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 mt-1 text-green-600 bg-green-50 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.about.performanceTitle}</h4>
                  <p className="text-sm text-gray-500">{t.about.performanceDesc}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 mt-1 text-purple-600 bg-purple-50 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.about.leadershipTitle}</h4>
                  <p className="text-sm text-gray-500">{t.about.leadershipDesc}</p>
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

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';
import { Credentials } from './Credentials';
import { Experience } from './Experience';

export const About = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="py-16 lg:py-24 px-6 lg:px-12 bg-white dark:bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('about.title')}
        </h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-center">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
      </div>
      
      <Credentials />
      <Experience />

    </motion.section>
  );
}; 
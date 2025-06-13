import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { credentials } from '../data/credentials';

export const Credentials = () => {
  const { t, language } = useTranslation();

  return (
    <div className="mt-16">
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {t('about.credentials_title')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {credentials.map((cred, index) => {
          const Icon = cred.icon;
          return (
            <motion.div
              key={index}
              className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{cred.title[language]}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{cred.issuer}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{cred.date[language]}</p>
                  {cred.credentialId && <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">ID: {cred.credentialId}</p>}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cred.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}; 
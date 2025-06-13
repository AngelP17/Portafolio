import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { experiences } from '../data/experience';
import { Building2, CheckCircle } from 'lucide-react';

export const Experience = () => {
  const { t, language } = useTranslation();

  return (
    <div className="mt-16">
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {t('about.experience_title')}
      </h3>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 py-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-slate-200 dark:bg-slate-700 rounded-full" />
            <div className="absolute left-[-10px] top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900" />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-6 h-6 text-slate-500" />
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">{exp.company}</h4>
              </div>

              {exp.roles.map((role, r_index) => (
                <div key={r_index} className="mb-6 ml-4 pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-lg text-slate-700 dark:text-slate-300">{role.title[language]}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{role.duration[language]} · {role.type[language]}</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{role.description[language]}</p>
                  <ul className="mt-3 space-y-2">
                    {role.contributions[language].map((item, c_index) => (
                       <li key={c_index} className="flex items-start space-x-2">
                         <CheckCircle className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" />
                         <span className="text-slate-600 dark:text-slate-400">{item}</span>
                       </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
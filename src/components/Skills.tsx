import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';
import { Code, Cloud, Cpu, Wrench } from 'lucide-react';

interface SkillsProps {
  skills: {
    [key: string]: string[];
  };
}

const categoryIcons: { [key: string]: React.ElementType } = {
  programming: Code,
  cloud: Cloud,
  embedded: Cpu,
  tools: Wrench,
};

const categoryColors: { [key: string]: string } = {
  programming: 'border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 hover:shadow-xl hover:shadow-blue-500/20',
  cloud: 'border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 hover:shadow-xl hover:shadow-purple-500/20',
  embedded: 'border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 hover:shadow-xl hover:shadow-emerald-500/20',
  tools: 'border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 hover:shadow-xl hover:shadow-orange-500/20',
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
  };

  return (
    <div className="py-16 lg:py-24 px-6 lg:px-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('skills.title')}
        </motion.h2>
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = categoryIcons[category] || Wrench;
            return (
              <motion.div key={category} variants={itemVariants}>
                <div className="flex items-center space-x-4 mb-6">
                  <Icon className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 capitalize">
                    {t(`skills.categories.${category}`)}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
                  {skillList.map((skill) => (
                    <motion.div
                      key={skill}
                      className={`group p-4 lg:p-6 rounded-xl lg:rounded-2xl border-2 font-semibold transition-all duration-500 hover:scale-105 cursor-pointer transform ${categoryColors[category]}`}
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-center block group-hover:scale-110 transition-transform duration-300 text-sm lg:text-base">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}; 
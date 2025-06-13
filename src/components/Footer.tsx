import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
  return (
    <motion.footer 
      className="py-8 lg:py-12 px-6 lg:px-12 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { Icon: Github, href: 'https://github.com/AngelP17', name: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/angel-pinzon-3b3720253/', name: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:angel.pinzon17@gmail.com', name: 'Email' },
          ].map(({ Icon, href, name }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label={name}
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg">
          {t('footer.copyright')}
        </p>
      </div>
    </motion.footer>
  );
}; 
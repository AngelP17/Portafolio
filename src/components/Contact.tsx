import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="contact"
      className="py-16 lg:py-24 px-6 lg:px-12 bg-white dark:bg-slate-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('contact.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              {t('contact.description')}
            </p>
            <div className="space-y-4">
              <a href="mailto:angel.pinzon17@gmail.com" className="flex items-center space-x-3 group">
                <Mail className="w-6 h-6 text-blue-500"/>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors">angel.pinzon17@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-500"/>
                <span className="text-slate-700 dark:text-slate-300">(479) 332-8328</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-500"/>
                <span className="text-slate-700 dark:text-slate-300">22 S DUNCAN AVE</span>
              </div>
            </div>
          </div>
          <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
            <input type="text" name="name" placeholder={t('contact.name')} className="w-full p-4 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-transparent focus:border-blue-500 focus:ring-blue-500/50 outline-none transition-colors" required />
            <input type="email" name="email" placeholder={t('contact.email')} className="w-full p-4 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-transparent focus:border-blue-500 focus:ring-blue-500/50 outline-none transition-colors" required />
            <textarea name="message" placeholder={t('contact.message')} rows={5} className="w-full p-4 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-transparent focus:border-blue-500 focus:ring-blue-500/50 outline-none transition-colors" required></textarea>
            <button type="submit" className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 transform">
              <span>{t('contact.send')}</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}; 
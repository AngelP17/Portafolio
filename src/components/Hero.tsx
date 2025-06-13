import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const { t } = useTranslation();
  const handleCTAClick = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div id="home" className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-16 lg:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <motion.div 
        className="max-w-5xl mx-auto text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div 
          className="relative mb-8 lg:mb-12"
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        >
          <motion.img
            src="me.jpg"
            alt="Angel Pinzon"
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto shadow-2xl shadow-black/20 transform hover:scale-105 transition-all duration-500 border-4 border-white/20"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          />
          <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-4 h-4 lg:w-8 lg:h-8 bg-emerald-400 rounded-full animate-bounce" />
        </motion.div>

        <motion.h1 
          className="text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        >
          {t('main.title')}
        </motion.h1>
        <motion.p 
          className="text-lg lg:text-2xl text-white/90 mb-3 lg:mb-4 font-medium"
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        >
          {t('main.welcome')}
        </motion.p>
        <motion.p 
          className="text-white/70 mb-8 lg:mb-12 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed px-4 lg:px-0"
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        >
          {t('main.description')}
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          className="flex justify-center space-x-4 lg:space-x-6 mb-8 lg:mb-12"
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        >
          {[
            { Icon: Github, href: 'https://github.com/AngelP17', gradient: 'from-slate-600 to-slate-800' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/angel-pinzon-3b3720253/', gradient: 'from-blue-500 to-blue-700' },
            { Icon: Mail, href: 'mailto:angel.pinzon17@gmail.com', gradient: 'from-red-500 to-pink-600' },
          ].map(({ Icon, gradient, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl transform`}
              style={{ animationDelay: `${index * 150}ms` }}
              whileHover={{ y: -5 }}
            >
              <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button 
          onClick={handleCTAClick}
          className="inline-flex items-center space-x-3 bg-white text-blue-600 px-6 lg:px-10 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 transform group"
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t('main.cta')}</span>
          <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
}; 
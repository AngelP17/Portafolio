import React from 'react';
import {
  Home,
  FolderOpen,
  User,
  Mail,
  Github,
  Linkedin,
  Search,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface SidebarProps {
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  handleNavClick,
  darkMode,
  toggleDarkMode,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { t, language, toggleLanguage } = useTranslation();
  const navigationItems: NavItem[] = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'portfolio', label: t('nav.portfolio'), icon: FolderOpen },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  const categories = [
    t('categories.all'),
    t('categories.cloud'),
    t('categories.embedded'),
    t('categories.web'),
    t('categories.game'),
    t('categories.other'),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-80 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10 dark:shadow-black/20 z-10">
      {/* Profile Section */}
      <div className="p-8 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <motion.img 
                src="avatar.png" 
                alt="Avatar"
                className="w-20 h-20 rounded-2xl shadow-xl shadow-blue-500/25 dark:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300" 
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {t('main.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {t('main.role')}
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col overflow-y-auto">
        {/* Search */}
        <div className="p-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            />
          </div>
        </div>

        {/* Navigation */}
        <motion.nav
          className="px-6 py-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl mb-2 transition-all duration-300 group transform hover:scale-[1.02] ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25 dark:shadow-blue-500/40'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 group-hover:text-blue-500'
                  }`}
                />
                <span className="font-semibold text-lg">{item.label}</span>
                {isActive && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <ChevronRight className="w-5 h-5 ml-auto animate-pulse" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Categories */}
        <motion.div
          className="px-6 py-6 border-t border-slate-200/50 dark:border-slate-700/50 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
            Categories
          </h3>
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => {
                setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full text-left px-6 py-3 rounded-xl mb-2 transition-all duration-300 transform hover:scale-[1.02] ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="font-medium">{category}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Bottom Social Links */}
      <motion.div
        className="mt-auto p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex justify-center space-x-4">
          {[
            { icon: Github, href: 'https://github.com/AngelP17', gradient: 'from-slate-600 to-slate-800' },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/angel-pinzon-3b3720253/',
              gradient: 'from-blue-500 to-blue-700',
            },
            { icon: Mail, href: 'mailto:angel.pinzon17@gmail.com', gradient: 'from-red-500 to-pink-600' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                className={`p-4 rounded-2xl bg-gradient-to-br ${social.gradient} text-white transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg transform`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}; 
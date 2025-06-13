import React from 'react';
import {
  Home,
  FolderOpen,
  User,
  Mail,
  Search,
  ChevronRight,
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface MobileMenuProps {
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  activeSection,
  handleNavClick,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { t } = useTranslation();
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
        staggerChildren: 0.07,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="mobile-menu fixed top-20 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto"
      >
        {/* Search */}
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Navigation */}
        <motion.nav
          className="p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl mb-3 transition-all duration-300 group transform hover:scale-[1.02] ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25'
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
          className="px-6 pb-6 border-t border-slate-200/50 dark:border-slate-700/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
            Categories
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => {
                  setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-center px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedCategory.toLowerCase() === category.toLowerCase()
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white bg-slate-100/50 dark:bg-slate-800/50'
                }`}
              >
                <span className="font-medium text-sm">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}; 
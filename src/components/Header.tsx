import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  t,
}) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">AP</span>
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              {t('main.title')}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t('main.role')}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
          <LanguageToggle language={language} onToggle={toggleLanguage} />
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-button p-3 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}; 
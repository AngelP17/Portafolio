import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../hooks/useTranslation';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative p-3 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group overflow-hidden"
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      <div className="flex items-center space-x-2">
        <Globe className="w-5 h-5 text-emerald-400" />
        <span className="text-sm font-semibold text-slate-700 dark:text-white/90 uppercase tracking-wider">
          {language}
        </span>
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 transition-all duration-500" />
    </button>
  );
}; 
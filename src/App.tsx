import React, { useState, useEffect } from 'react';
import { useTranslation } from './hooks/useTranslation';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { Portfolio } from './components/Portfolio';
import { ChatButton } from './components/ChatButton';
import { Chatbot } from './components/Chatbot';
import { About } from './components/About';
import { skills } from './project-data';
import { Contact } from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { language, t, toggleLanguage } = useTranslation();

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('.mobile-menu') &&
        !target.closest('.mobile-menu-button')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-700 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950`}
    >
      <AnimatedBackground />

      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />

      {isMobileMenuOpen && (
        <MobileMenu
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      <Sidebar
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content */}
      <motion.main
        className="lg:ml-80 min-h-screen pt-20 lg:pt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Hero />
        <Skills skills={skills} />
        <Portfolio
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <About />
        <Contact />
        <Footer />
      </motion.main>

      <Chatbot isOpen={isChatOpen} />
      <ChatButton isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );
}

export default App; 
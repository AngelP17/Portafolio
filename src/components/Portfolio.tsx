import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Cloud, Cpu, Settings, Gamepad2, Laptop, Globe, Code, Image as ImageIcon } from 'lucide-react';
import { projects } from '../project-data';
import { useTranslation } from '../hooks/useTranslation';

interface PortfolioProps {
  searchQuery: string;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categoryIcons: { [key: string]: React.ElementType } = {
  All: Globe,
  Cloud: Cloud,
  Embedded: Cpu,
  Web: Laptop,
  Game: Gamepad2,
  Other: Code,
};

const ProjectImage: React.FC<{ project: any; language: string }> = ({ project, language }) => {
  const [imageError, setImageError] = useState(false);
  
  const FallbackIcon = categoryIcons[project.category] || Code;
  
  if (!project.image || imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <FallbackIcon className="w-24 h-24 text-slate-400 dark:text-slate-600 opacity-50" />
      </div>
    );
  }
  
  return (
    <img
      src={project.image}
      alt={project.title[language]}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setImageError(true)}
    />
  );
};

const NoProjectsFound = () => {
  const { language } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full text-center py-12"
    >
      <h3 className="text-xl font-semibold mb-4">
        {language === 'en' 
          ? "No projects found matching your criteria. Check out my GitHub and LinkedIn profiles for more!"
          : "No se encontraron proyectos que coincidan con tus criterios. ¡Mira mis perfiles de GitHub y LinkedIn para más!"}
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <a
          href="https://github.com/AngelP17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C8102E] text-white rounded-lg hover:bg-[#9D2235] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/angel-pinzon-3b3720253/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C8102E] text-white rounded-lg hover:bg-[#9D2235] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect width="4" height="12" x="2" y="9" rx="2" /><circle cx="4" cy="4" r="2" /></svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ searchQuery, selectedCategory, setSelectedCategory }) => {
  const { language, t } = useTranslation();

  const categories = [
    { key: 'All', label: t('categories.all') },
    { key: 'Cloud', label: t('categories.cloud') },
    { key: 'Embedded', label: t('categories.embedded') },
    { key: 'Web', label: t('categories.web') },
    { key: 'Game', label: t('categories.game') },
    { key: 'Other', label: t('categories.other') },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {language === 'en' ? 'Portfolio' : 'Portafolio'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {language === 'en' 
              ? 'Explore my latest projects and technical achievements'
              : 'Explora mis últimos proyectos y logros técnicos'}
          </p>
        </div>
        {/* Category filter with icons and translations */}
        <div className="flex gap-2 overflow-x-auto pb-6 mb-8 justify-center">
          {categories.map(({ key, label }) => {
            const Icon = categoryIcons[key] || Code;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold whitespace-nowrap shadow-md transition-all duration-300 border-2 text-base ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <NoProjectsFound />
          ) : (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 dark:border-slate-700/60 group relative"
              >
                <div className="relative h-48 overflow-hidden">
                  <ProjectImage project={project} language={language} />
                  <div className={`absolute top-4 right-4 p-3 rounded-xl ${project.color} shadow-lg backdrop-blur-sm bg-opacity-90`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title[language]}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description[language]}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies[language].split(', ').slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies[language].split(', ').length > 4 && (
                      <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-sm">
                        +{project.technologies[language].split(', ').length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-[#C8102E] to-[#9D2235] text-white rounded-lg hover:from-[#9D2235] hover:to-[#7A1A2A] transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      {language === 'en' ? 'View Code' : 'Ver Código'}
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 border-2 border-[#C8102E] text-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}; 
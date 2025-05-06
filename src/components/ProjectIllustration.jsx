import React from 'react';

// Component that provides illustrations for different project types
const ProjectIllustration = ({ category, title, className = "w-full h-full" }) => {
  // Determine the specific illustration type based on project title and category
  const getIllustrationType = () => {
    const lowercaseTitle = (title || '').toLowerCase();
    if (category === 'Web' && (lowercaseTitle.includes('search') || lowercaseTitle.includes('retrieval'))) {
      return 'Web-Search';
    }
    if (category === 'Web' && lowercaseTitle.includes('game')) {
      return 'Web-Game';
    }
    if (category === 'Game' && lowercaseTitle.includes('laser')) {
      return 'Game-LaserTag';
    }
    if (category === 'Embedded' && lowercaseTitle.includes('vehicle')) {
      return 'Embedded-Vehicle';
    }
    return category;
  };

  // Get the appropriate illustration based on project type
  const renderIllustration = () => {
    const type = getIllustrationType();
    switch(type) {
      case 'Web-Search':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Search Engine Illustration */}
            <rect x="75" y="50" width="250" height="180" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="85" y="60" width="230" height="140" rx="5" fill="#0F172A"/>
            <rect x="105" y="80" width="190" height="25" rx="5" fill="#334155"/>
            <circle cx="120" cy="92.5" r="7" fill="#D1D5DB"/>
            <path d="M125 97.5L132 104.5" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
            <rect x="105" y="115" width="60" height="10" rx="2" fill="#475569"/>
            <rect x="105" y="130" width="90" height="10" rx="2" fill="#475569"/>
            <rect x="105" y="145" width="75" height="10" rx="2" fill="#475569"/>
            <rect x="105" y="160" width="85" height="10" rx="2" fill="#475569"/>
            <rect x="205" y="115" width="90" height="55" rx="5" fill="#334155"/>
            <rect x="215" y="125" width="70" height="7" rx="1" fill="#94A3B8"/>
            <rect x="215" y="137" width="50" height="7" rx="1" fill="#94A3B8"/>
            <rect x="215" y="149" width="60" height="7" rx="1" fill="#94A3B8"/>
            <rect x="175" y="230" width="50" height="10" rx="2" fill="#334155"/>
            <rect x="185" y="210" width="30" height="20" rx="2" fill="#334155"/>
            <rect x="285" y="70" width="20" height="2" rx="1" fill="#BE123C"/>
            <rect x="285" y="75" width="15" height="2" rx="1" fill="#BE123C"/>
            <rect x="285" y="80" width="25" height="2" rx="1" fill="#BE123C"/>
            <rect x="285" y="85" width="10" height="2" rx="1" fill="#BE123C"/>
            <rect x="285" y="90" width="20" height="2" rx="1" fill="#BE123C"/>
          </svg>
        );
      case 'Cloud':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Cloud Computing Illustration */}
            <path d="M250 120C250 92.3858 227.614 70 200 70C172.386 70 150 92.3858 150 120C122.386 120 100 142.386 100 170C100 197.614 122.386 220 150 220H280C302.091 220 320 202.091 320 180C320 157.909 302.091 140 280 140C280 128.954 271.046 120 260 120H250Z" fill="#1E293B" stroke="#475569" strokeWidth="2"/>
            <rect x="170" y="140" width="60" height="60" rx="5" fill="#0F172A" stroke="#334155" strokeWidth="2"/>
            <rect x="175" y="145" width="50" height="10" rx="2" fill="#334155"/>
            <rect x="175" y="160" width="50" height="10" rx="2" fill="#334155"/>
            <rect x="175" y="175" width="50" height="10" rx="2" fill="#334155"/>
            <rect x="175" y="190" width="50" height="5" rx="1" fill="#BE123C"/>
            <path d="M160 120L140 140" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M240 120L260 140" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M200 100V130" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2"/>
            <circle cx="140" cy="140" r="8" fill="#BE123C"/>
            <circle cx="200" cy="100" r="8" fill="#BE123C"/>
            <circle cx="260" cy="140" r="8" fill="#BE123C"/>
            <rect x="125" y="170" width="30" height="20" rx="4" fill="#334155"/>
            <path d="M125 180H155" stroke="#94A3B8" strokeWidth="1"/>
            <path d="M140 170V190" stroke="#94A3B8" strokeWidth="1"/>
            <rect x="245" y="170" width="30" height="20" rx="4" fill="#334155"/>
            <path d="M245 180H275" stroke="#94A3B8" strokeWidth="1"/>
            <path d="M260 170V190" stroke="#94A3B8" strokeWidth="1"/>
          </svg>
        );
      case 'Embedded':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Microprocessor System Illustration */}
            <rect x="90" y="60" width="220" height="160" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="100" y="70" width="200" height="140" rx="4" fill="#0F172A"/>
            <rect x="160" y="100" width="80" height="80" rx="4" fill="#334155" stroke="#475569" strokeWidth="2"/>
            <rect x="170" y="110" width="60" height="60" rx="2" fill="#0F172A"/>
            <circle cx="200" cy="140" r="20" fill="#0F172A" stroke="#BE123C" strokeWidth="2"/>
            <circle cx="200" cy="140" r="15" fill="#0F172A" stroke="#475569" strokeWidth="1"/>
            <circle cx="200" cy="140" r="5" fill="#BE123C"/>
            <path d="M160 140H130" stroke="#BE123C" strokeWidth="2"/>
            <path d="M240 140H270" stroke="#BE123C" strokeWidth="2"/>
            <path d="M200 100V80" stroke="#BE123C" strokeWidth="2"/>
            <path d="M200 180V200" stroke="#BE123C" strokeWidth="2"/>
            <rect x="120" y="135" width="10" height="10" rx="2" fill="#334155"/>
            <rect x="270" y="135" width="10" height="10" rx="2" fill="#334155"/>
            <rect x="195" y="70" width="10" height="10" rx="2" fill="#334155"/>
            <rect x="195" y="200" width="10" height="10" rx="2" fill="#334155"/>
            <circle cx="130" cy="90" r="4" fill="#BE123C"/>
            <circle cx="145" cy="90" r="4" fill="#FBBF24"/>
            <circle cx="160" cy="90" r="4" fill="#34D399"/>
          </svg>
        );
      case 'Embedded-Vehicle':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Autonomous Vehicle Illustration */}
            <rect x="80" y="60" width="240" height="160" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="100" y="100" width="200" height="80" rx="20" fill="#0F172A"/>
            <rect x="120" y="180" width="40" height="20" rx="10" fill="#0F172A"/>
            <rect x="240" y="180" width="40" height="20" rx="10" fill="#0F172A"/>
            <circle cx="140" cy="190" r="10" fill="#334155"/>
            <circle cx="260" cy="190" r="10" fill="#334155"/>
            <rect x="120" y="120" width="160" height="40" rx="5" fill="#334155"/>
            <rect x="290" y="120" width="20" height="10" rx="5" fill="#BE123C"/>
            <rect x="290" y="140" width="20" height="10" rx="5" fill="#BE123C"/>
            <circle cx="120" cy="100" r="8" fill="#BE123C"/>
            <circle cx="140" cy="80" r="8" fill="#BE123C"/>
            <path d="M120 100L140 80" stroke="#BE123C" strokeWidth="2" strokeDasharray="2 2"/>
            <path d="M170 80L230 80" stroke="#334155" strokeWidth="2"/>
            <path d="M190 100L210 100" stroke="#334155" strokeWidth="2"/>
            <rect x="130" y="130" width="40" height="5" rx="2" fill="#475569"/>
            <rect x="130" y="140" width="30" height="5" rx="2" fill="#475569"/>
            <rect x="130" y="150" width="35" height="5" rx="2" fill="#475569"/>
            <rect x="190" y="130" width="40" height="5" rx="2" fill="#475569"/>
            <rect x="190" y="140" width="30" height="5" rx="2" fill="#475569"/>
            <rect x="190" y="150" width="35" height="5" rx="2" fill="#475569"/>
          </svg>
        );
      case 'Game':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Game Development Illustration */}
            <rect x="90" y="60" width="220" height="160" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="100" y="70" width="200" height="140" rx="5" fill="#0F172A"/>
            <rect x="170" y="120" width="20" height="30" rx="5" fill="#BE123C"/>
            <circle cx="180" cy="110" r="10" fill="#BE123C"/>
            <rect x="165" y="150" width="10" height="15" rx="2" fill="#BE123C"/>
            <rect x="185" y="150" width="10" height="15" rx="2" fill="#BE123C"/>
            <rect x="100" y="165" width="200" height="10" rx="2" fill="#334155"/>
            <rect x="130" y="135" width="20" height="30" rx="3" fill="#334155"/>
            <rect x="220" y="145" width="30" height="20" rx="3" fill="#334155"/>
            <circle cx="250" cy="100" r="15" fill="#FBBF24" opacity="0.8"/>
            <rect x="110" y="80" width="40" height="8" rx="2" fill="#475569"/>
            <rect x="110" y="92" width="25" height="8" rx="2" fill="#475569"/>
            <rect x="250" y="80" width="40" height="8" rx="2" fill="#475569"/>
            <rect x="270" y="92" width="20" height="8" rx="2" fill="#475569"/>
          </svg>
        );
      case 'Game-LaserTag':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Laser Tag Game Illustration */}
            <rect x="80" y="60" width="240" height="160" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="90" y="70" width="220" height="140" rx="4" fill="#0F172A"/>
            <path d="M150 120L250 140" stroke="#BE123C" strokeWidth="2"/>
            <path d="M150 160L230 120" stroke="#BE123C" strokeWidth="2"/>
            <path d="M190 100L180 180" stroke="#BE123C" strokeWidth="2"/>
            <circle cx="150" cy="120" r="10" fill="#334155" stroke="#475569" strokeWidth="1"/>
            <circle cx="150" cy="160" r="10" fill="#334155" stroke="#475569" strokeWidth="1"/>
            <circle cx="190" cy="100" r="10" fill="#334155" stroke="#475569" strokeWidth="1"/>
            <circle cx="250" cy="140" r="12" fill="#334155" stroke="#BE123C" strokeWidth="2"/>
            <circle cx="230" cy="120" r="12" fill="#334155" stroke="#BE123C" strokeWidth="2"/>
            <circle cx="180" cy="180" r="12" fill="#334155" stroke="#BE123C" strokeWidth="2"/>
            <rect x="270" y="80" width="30" height="20" rx="4" fill="#334155"/>
            <rect x="275" y="85" width="20" height="10" rx="2" fill="#BE123C"/>
            <rect x="270" y="110" width="30" height="20" rx="4" fill="#334155"/>
            <rect x="275" y="115" width="20" height="10" rx="2" fill="#475569"/>
            <rect x="100" y="80" width="40" height="30" rx="4" fill="#334155"/>
            <rect x="105" y="85" width="30" height="8" rx="2" fill="#475569"/>
            <rect x="105" y="97" width="20" height="8" rx="2" fill="#BE123C"/>
          </svg>
        );
      case 'Web-Game':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Web-based Game Interface Illustration */}
            <rect x="80" y="60" width="240" height="160" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="80" y="60" width="240" height="25" rx="8 8 0 0" fill="#334155"/>
            <circle cx="95" cy="72.5" r="5" fill="#BE123C"/>
            <circle cx="110" cy="72.5" r="5" fill="#FBBF24"/>
            <circle cx="125" cy="72.5" r="5" fill="#34D399"/>
            <rect x="90" y="95" width="220" height="115" rx="2" fill="#0F172A"/>
            <rect x="200" y="150" width="20" height="20" rx="2" fill="#BE123C"/>
            <circle cx="140" cy="140" r="15" fill="#334155"/>
            <rect x="250" y="130" width="30" height="10" rx="5" fill="#334155"/>
            <rect x="120" y="170" width="50" height="10" rx="2" fill="#334155"/>
            <rect x="100" y="105" width="80" height="10" rx="2" fill="#475569"/>
            <rect x="190" y="105" width="30" height="10" rx="2" fill="#475569"/>
            <rect x="230" y="105" width="40" height="10" rx="2" fill="#475569"/>
            <path d="M280 150L290 140L300 150" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M280 160L290 170L300 160" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M270 160L260 150L270 140" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M310 160L320 150L310 140" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Web':
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Web Development Illustration */}
            <rect x="80" y="60" width="240" height="160" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="80" y="60" width="240" height="25" rx="8 8 0 0" fill="#334155"/>
            <circle cx="95" cy="72.5" r="5" fill="#BE123C"/>
            <circle cx="110" cy="72.5" r="5" fill="#FBBF24"/>
            <circle cx="125" cy="72.5" r="5" fill="#34D399"/>
            <rect x="90" y="95" width="220" height="115" rx="2" fill="#0F172A"/>
            <rect x="100" y="105" width="80" height="15" rx="2" fill="#334155"/>
            <rect x="100" y="130" width="200" height="10" rx="2" fill="#475569"/>
            <rect x="100" y="150" width="150" height="10" rx="2" fill="#475569"/>
            <rect x="100" y="170" width="180" height="10" rx="2" fill="#475569"/>
            <rect x="100" y="190" width="120" height="10" rx="2" fill="#475569"/>
            <rect x="190" y="105" width="40" height="15" rx="2" fill="#BE123C"/>
            <rect x="240" y="105" width="60" height="15" rx="2" fill="#334155"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 400 300" className={className}>
            {/* Default Illustration */}
            <rect x="100" y="70" width="200" height="160" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            <rect x="110" y="80" width="180" height="140" rx="4" fill="#0F172A"/>
            <rect x="110" y="80" width="180" height="20" rx="4 4 0 0" fill="#334155"/>
            <circle cx="120" cy="90" r="3" fill="#BE123C"/>
            <circle cx="130" cy="90" r="3" fill="#FBBF24"/>
            <circle cx="140" cy="90" r="3" fill="#34D399"/>
            <rect x="120" y="110" width="160" height="8" rx="2" fill="#475569" opacity="0.7"/>
            <rect x="120" y="125" width="140" height="8" rx="2" fill="#475569" opacity="0.7"/>
            <rect x="120" y="140" width="120" height="8" rx="2" fill="#475569" opacity="0.7"/>
            <rect x="120" y="155" width="150" height="8" rx="2" fill="#475569" opacity="0.7"/>
            <rect x="120" y="170" width="100" height="8" rx="2" fill="#475569" opacity="0.7"/>
            <rect x="120" y="185" width="130" height="8" rx="2" fill="#475569" opacity="0.7"/>
            <rect x="120" y="155" width="20" height="8" rx="2" fill="#BE123C"/>
            <rect x="120" y="170" width="30" height="8" rx="2" fill="#BE123C"/>
          </svg>
        );
    }
  };
  return renderIllustration();
};

// Component to use in project detail pages
const ProjectDetailIllustration = ({ project }) => {
  // Map project types to more specific illustration categories
  const getIllustrationType = (project) => {
    const title = (project.title?.en || project.title?.es || project.title || '').toLowerCase();
    const category = project.category;
    if (category === 'Web' && title.includes('search')) return 'Web-Search';
    if (category === 'Web' && title.includes('game')) return 'Web-Game';
    if (category === 'Game' && title.includes('laser')) return 'Game-LaserTag';
    return category;
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-2xl h-64">
        <ProjectIllustration category={getIllustrationType(project)} title={project.title} />
      </div>
    </div>
  );
};

// Example usage to display in your project detail page
const ProjectIllustrationGallery = () => {
  const categories = ['Web-Search', 'Cloud', 'Embedded', 'Game', 'Game-LaserTag', 'Web-Game', 'Default'];
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Project Illustration Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category} className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-center text-white">{category}</h3>
            <div className="h-48">
              <ProjectIllustration category={category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProjectIllustration, ProjectDetailIllustration, ProjectIllustrationGallery }; 
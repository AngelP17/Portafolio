import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const animatedBgVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 0.5, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

const blobTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut'
};

const waveKeyframes = [
  // Keyframes for the SVG path 'd' attribute
  // These are simplified for demo; you can add more for smoother movement
  "M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z",
  "M0,180L60,190.7C120,201,240,223,360,217.3C480,212,600,180,720,153.3C840,127,960,105,1080,121.3C1200,137,1320,191,1380,217.3L1440,244L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z",
  "M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
];

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample projects data
  const projectsData = [
    {
      id: 1,
      title: 'Document Search Engine',
      category: 'Web',
      description: 'Developed a robust document search engine implementing advanced information retrieval techniques.',
      icon: '🔍',
      technologies: ['Python', 'Elasticsearch', 'React', 'Node.js']
    },
    {
      id: 2,
      title: 'Karpinski Operations Implementation',
      category: 'Cloud',
      description: 'Implemented Karpinski operations for cloud computing environments, focusing on MapReduce optimization and security risk management.',
      icon: '☁️',
      technologies: ['AWS', 'Azure', 'MapReduce', 'Security Risk', 'Spark']
    },
    {
      id: 3,
      title: 'Microprocessor System Design',
      category: 'Embedded',
      description: 'Designed and tested microprocessor systems using VHDL and ModelSim with virtual machine environments.',
      icon: '🔌',
      technologies: ['VHDL', 'ModelSim', 'Microprocessor Design']
    },
    {
      id: 4,
      title: 'Autonomous Vehicle System',
      category: 'Embedded',
      description: 'Created embedded systems for autonomous vehicle control using XILINX and FreeRTOS.',
      icon: '🚗',
      technologies: ['XILINX', 'FreeRTOS', 'Embedded Systems', 'Autonomous Vehicles']
    },
    {
      id: 5,
      title: 'LaserTag Game Implementation',
      category: 'Game',
      description: 'Developed a full-stack laser tag game system with real-time player tracking and score management.',
      icon: '🎮',
      technologies: ['Unity', 'C#', 'Real-time Systems', 'Game Development']
    },
    {
      id: 6,
      title: '2D Game Interface',
      category: 'Game',
      description: 'Created an interactive 2D game interface using modern web technologies.',
      icon: '🎲',
      technologies: ['JavaScript', 'Canvas API', 'Phaser.js', 'HTML5']
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 800);
  }, []);

  // Controls for more dynamic blob movement
  const blob1Controls = useAnimation();
  const blob2Controls = useAnimation();

  useEffect(() => {
    blob1Controls.start({
      x: [0, 40, -30, 0],
      y: [0, 30, -20, 0],
      scale: [1, 1.12, 0.98, 1],
      rotate: [0, 15, -10, 0],
      transition: { ...blobTransition }
    });
    blob2Controls.start({
      x: [0, -50, 30, 0],
      y: [0, -30, 20, 0],
      scale: [1, 1.08, 1.02, 1],
      rotate: [0, -10, 10, 0],
      transition: { ...blobTransition, delay: 1.5 }
    });
  }, [blob1Controls, blob2Controls]);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="hidden md:block absolute -top-32 -left-32 w-[600px] h-[600px] z-0"
        variants={animatedBgVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ filter: 'blur(120px)' }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/60 via-red-400/40 to-yellow-300/30 dark:from-purple-900/60 dark:via-red-900/40 dark:to-yellow-900/30"
          animate={blob1Controls}
        />
      </motion.div>
      <motion.div
        className="hidden md:block absolute -bottom-40 -right-40 w-[700px] h-[700px] z-0"
        variants={animatedBgVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ filter: 'blur(140px)' }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-tr from-red-400/40 via-purple-400/30 to-blue-300/20 dark:from-red-900/40 dark:via-purple-900/30 dark:to-blue-900/20"
          animate={blob2Controls}
        />
      </motion.div>
      {/* Animated SVG Wave Background */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-64 z-0"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.18, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <motion.path
          d={waveKeyframes[0]}
          animate={{
            d: waveKeyframes
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
          fill="#C8102E"
          fillOpacity="0.12"
        />
      </motion.svg>
      {/* Header with profile info */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative h-96 overflow-hidden bg-gradient-to-r from-red-800 to-red-600 dark:from-red-900 dark:to-purple-900 z-10"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mx-auto mb-4 shadow-lg"
            >
              <img src="/api/placeholder/150/150" alt="Angel L. Pinzon" className="w-full h-full object-cover" />
            </motion.div>
            <motion.h1 className="text-5xl font-bold mb-2 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >Hey there, welcome!</motion.h1>
            <motion.h2 className="text-4xl font-bold mb-4 text-red-200 drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >My name is Angel</motion.h2>
            <motion.p className="text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >Computer Engineer specializing in embedded systems, cloud computing, and game development</motion.p>
            <motion.button
              className="px-8 py-3 bg-red-700 rounded-full hover:bg-red-600 transition-colors duration-300 font-semibold text-lg shadow-lg transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Check out my work
            </motion.button>
          </motion.div>
        </div>
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1a202c" fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,192C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </motion.header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-grow">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="flex flex-wrap bg-gray-800 dark:bg-gray-900 rounded-lg p-1 shadow-lg">
            {['All', 'Cloud', 'Embedded', 'Web', 'Game', 'Other'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-red-700 text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                className="bg-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-red-800 to-red-600 dark:from-red-900 dark:to-purple-900 p-6">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 dark:bg-gray-800 text-gray-300 px-2 py-1 rounded mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-700 dark:bg-gray-800 text-gray-300 px-2 py-1 rounded mr-2 mb-2">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <button className="w-full py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium flex items-center justify-center group">
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
            {selectedCategory === 'Other' && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                viewport={{ once: true }}
                className="bg-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-red-800 to-red-600 dark:from-red-900 dark:to-purple-900 p-6">
                  <div className="text-4xl mb-2">🔗</div>
                  <h3 className="text-xl font-bold">GitHub Projects</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">Explore my other projects directly on GitHub. Check out my repositories for more examples of my work.</p>
                  <button
                    className="w-full py-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium flex items-center justify-center group"
                    onClick={() => window.open('https://github.com/yourusername', '_blank')}
                  >
                    <span>Visit GitHub</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 py-8 mt-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm7 7h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.39c.44-.67 1.35-1.39 2.25-1.39 1.65 0 2.75 1.1 2.75 2.75V17z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <p className="text-gray-400">© 2025 Angel L. Pinzon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 
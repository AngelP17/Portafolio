import { useState, useEffect } from 'react';
import { 
  Home, Folder, User, Mail, Sun, Moon, 
  ArrowRight, Linkedin, Github, Download,
  Menu, X, Settings, Gamepad2, Laptop, Cloud, Cpu, Search, Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetailIllustration } from './components/ProjectIllustration';
import { MessageSquare } from 'lucide-react';
import LocalChatInterface from './components/LocalChatInterface';

// Translation strings
const translations = {
  en: {
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_about: "About Me",
    nav_contact: "Contact Me",
    welcome: "Hey there, welcome! My name is Angel",
    subhead: "Thanks for visiting, you will find some of my programming work here :)",
    portfolio_desc: "Some of my projects include but are not limited to: Linux software engineering, VHDL, XILINX Vivado, information retrieval, databases, cloud computing, OS management, among many others.",
    about_text: `I'm a Computer Engineering graduate (University of Arkansas '25) and currently
    serving as an IT Specialist. With a strong foundation in Python, SQL, AWS, DevOps,
    and full-stack development, I design and implement automated workflows and
    cloud-based monitoring solutions to keep critical systems running smoothly.

    My background includes developing end-to-end applications and data pipelines...
    Portfolio: https://angelp17.github.io/Portafolio/#top  
    Perfil en Konzerta: https://www.konzerta.com/candidatos/curriculum/perfil`,
    contact_text: "You can access to my socials or download my resume on the left sidebar. Drop any questions or inquiries you may have on the box below, make sure to include the right information and I will get back as soon as I can.",
    work_button: "Check out some of my work",
    skills_title: "Skills & Technologies",
    your_name: "Your name:",
    your_email: "Your Email:",
    your_message: "Your Message:",
    attach_file: "Attach your file here:",
    send: "Send",
    name_placeholder: "Type your name here",
    email_placeholder: "Type your email here",
    message_placeholder: "Tell me, how can I help today?",
    download_resume: "Download Resume",
    email_label: "Email",
    view_project: "View Project",
    description: "Description",
    technologies: "Technologies Used",
    view_on_github: "View on GitHub",
    close: "Close",
    back_to_portfolio: "Back to Portfolio"
  },
  es: {
    nav_home: "Inicio",
    nav_portfolio: "Portafolio",
    nav_about: "Sobre Mí",
    nav_contact: "Contáctame",
    welcome: "¡Hola, bienvenido! Mi nombre es Angel",
    subhead: "Gracias por visitar mi portafolio digital, aqui podras encontrar algunos de mis proyectos de programacion",
    portfolio_desc: "Mis proyectos incluyen pero no se limitan a: ingeniería de software Linux, VHDL, XILINX Vivado, recuperación de información, bases de datos, computación en la nube, entre muchos otros.",
    about_text: `Soy un graduado en Ingeniería Informática (Universidad de Arkansas '25) y actualmente
    trabajo como Especialista en TI. Con una sólida base en Python, SQL, AWS, DevOps,
    y desarrollo full-stack, diseño e implemento flujos de trabajo automatizados y
    soluciones de monitoreo basadas en la nube para mantener los sistemas críticos funcionando sin problemas.

    Mi experiencia incluye el desarrollo de aplicaciones de extremo a extremo y pipelines de datos...
    Portafolio: https://angelp17.github.io/Portafolio/#top  
    Perfil en Konzerta: https://www.konzerta.com/candidatos/curriculum/perfil`,
    contact_text: "Puedes acceder a mis redes sociales o descargar mi currículum en la barra lateral izquierda. Deja cualquier pregunta o consulta que tengas en el cuadro de abajo, asegúrate de incluir la información correcta y te responderé tan pronto como pueda.",
    work_button: "Mira algunos de mis trabajos",
    skills_title: "Habilidades y Tecnologías",
    your_name: "Tu nombre:",
    your_email: "Tu Email:",
    your_message: "Tu Mensaje:",
    attach_file: "Adjunta tu archivo aquí:",
    send: "Enviar",
    name_placeholder: "Escribe tu nombre aquí",
    email_placeholder: "Escribe tu email aquí",
    message_placeholder: "Dime, ¿cómo puedo ayudarte hoy?",
    download_resume: "Descargar CV",
    email_label: "Correo",
    view_project: "Ver Proyecto",
    description: "Descripción",
    technologies: "Tecnologías Utilizadas",
    view_on_github: "Ver en GitHub",
    close: "Cerrar",
    back_to_portfolio: "Volver al Portafolio"
  }
};

// Project data
const projects = [
  {
    id: 1,
    title: {
      en: "Document Search Engine - Information Retrieval",
      es: "Motor de Búsqueda de Documentos - Recuperación de Información"
    },
    subtitle: {
      en: "Information Retrieval",
      es: "Recuperación de Información"
    },
    category: "Web",
    image: "images/search.png",
    description: {
      en: "Developed a robust document search engine implementing advanced information retrieval techniques. Features include efficient indexing, query processing, and relevant document ranking using TF-IDF algorithms.",
      es: "Desarrollé un motor de búsqueda de documentos implementando técnicas avanzadas de recuperación de información. Incluye indexación eficiente, procesamiento de consultas y clasificación de documentos relevantes usando algoritmos TF-IDF."
    },
    technologies: "HTML5, CSS, C++, indexing, query processing, search algorithms",
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/IR",
    icon: <Search className="w-8 h-8" />,
    color: "bg-[#C8102E]"
  },
  {
    id: 2,
    title: {
      en: "Karpinski Operations Implementation - Cloud Computing",
      es: "Implementación de Operaciones Karpinski - Computación en la Nube"
    },
    subtitle: {
      en: "Cloud Computing",
      es: "Computación en la Nube"
    },
    category: "Cloud",
    image: "images/cloud.png",
    description: {
      en: "Implemented Karpinski operations for cloud computing environments, focusing on MapReduce optimization and security risk management. Enhanced data processing efficiency and system reliability.",
      es: "Implementé operaciones Karpinski para entornos de computación en la nube, enfocándome en la optimización de MapReduce y gestión de riesgos de seguridad. Mejoré la eficiencia del procesamiento de datos y la fiabilidad del sistema."
    },
    technologies: "Cloud/OS Management, MapReduce, Security Risk, Spark, AWS, Azure, Oracle Cloud",
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/CC",
    icon: <Cloud className="w-8 h-8" />,
    color: "bg-[#9D2235]"
  },
  {
    id: 3,
    title: {
      en: "Microprocessor System Design and Testing - Synthesis and Design",
      es: "Diseño y Prueba de Sistemas de Microprocesadores - Síntesis y Diseño"
    },
    subtitle: {
      en: "Synthesis and Design",
      es: "Síntesis y Diseño"
    },
    category: "Embedded",
    image: "images/chip.png",
    description: {
      en: "Designed and tested microprocessor systems using VHDL and ModelSim. Implemented virtual machine environments for system validation and performance testing.",
      es: "Diseñé y probé sistemas de microprocesadores usando VHDL y ModelSim. Implementé entornos de máquinas virtuales para validación de sistemas y pruebas de rendimiento."
    },
    technologies: "VHDL, C#, ModelSim, Virtual Machine Environments",
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/SM",
    icon: <Cpu className="w-8 h-8" />,
    color: "bg-[#C8102E]"
  },
  {
    id: 4,
    title: {
      en: "Autonomous Vehicle: Software/Hardware - Embedded Systems",
      es: "Vehículo Autónomo: Software/Hardware - Sistemas Embebidos"
    },
    subtitle: {
      en: "Embedded Systems",
      es: "Sistemas Embebidos"
    },
    category: "Embedded",
    image: "images/hardware.png",
    description: {
      en: "Created embedded systems for autonomous vehicle control using XILINX and FreeRTOS. Developed APIs for sensor integration and real-time decision making.",
      es: "Creé sistemas embebidos para control de vehículos autónomos usando XILINX y FreeRTOS. Desarrollé APIs para integración de sensores y toma de decisiones en tiempo real."
    },
    technologies: "XILINX, C#, FREERTOS, API",
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/EBS",
    icon: <Settings className="w-8 h-8" />,
    color: "bg-[#9D2235]"
  },
  {
    id: 5,
    title: {
      en: "LaserTag Game Full Stack Implementation - Software Engineering",
      es: "Implementación Full Stack de Juego LaserTag - Ingeniería de Software"
    },
    subtitle: {
      en: "Software Engineering",
      es: "Ingeniería de Software"
    },
    category: "Game",
    image: "images/game.png",
    description: {
      en: "Developed a full-stack laser tag game system with real-time player tracking, score management, and interactive user interface. Implemented both frontend and backend components.",
      es: "Desarrollé un sistema completo de juego laser tag con seguimiento de jugadores en tiempo real, gestión de puntuación e interfaz de usuario interactiva. Implementé componentes frontend y backend."
    },
    technologies: "C++, JS, Front/Back End development and implementation, API",
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/SFE",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "bg-[#C8102E]"
  },
  {
    id: 6,
    title: {
      en: "2D Game Interactive Interface - Web Development",
      es: "Interfaz Interactiva de Juego 2D - Desarrollo Web"
    },
    subtitle: {
      en: "Web Development",
      es: "Desarrollo Web"
    },
    category: "Game",
    image: "images/webdev.png",
    description: {
      en: "Created an interactive 2D game interface using modern web technologies. Implemented game mechanics, user interactions, and responsive design principles.",
      es: "Creé una interfaz de juego 2D interactiva usando tecnologías web modernas. Implementé mecánicas de juego, interacciones de usuario y principios de diseño responsivo."
    },
    technologies: "JS, Java, JSON, Python, Apache",
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/2DG",
    icon: <Laptop className="w-8 h-8" />,
    color: "bg-[#C8102E]"
  }
];

// Razorback red gradient colors
const razorbackGradient = 'from-[#9D2235] to-[#C8102E]';
const razorbackSolid = 'bg-[#C8102E]';

// Add skills array near the top of the component, after state declarations
const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "HTML5", "CSS", "C++", "C#", "VHDL", "ModelSim", "XILINX", "FREERTOS", "API",
  "AWS", "Azure", "Oracle Cloud", "Spark", "Docker", "Git", "CI/CD", "Agile",
  "Frontend", "Backend", "Query Processing", "Indexing", "Search Algorithms"
];

// Main Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [language, setLanguage] = useState('en');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Get translation based on selected language
  const t = translations[language];
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Effect to apply dark mode class to the body
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Function to open project modal
  const openProject = (project) => {
    setSelectedProject(project);
  };

  // Function to close project modal
  const closeProject = () => {
    setSelectedProject(null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input
  const handleFileInput = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just log it
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      file: null
    });
    // Show success alert
    alert('Thank you for your message! I will get back to you soon.');
  };

  // Handle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Navigation items
  const navItems = [
    { id: 'home', icon: <Home className="w-5 h-5" />, label: t.nav_home },
    { id: 'portfolio', icon: <Folder className="w-5 h-5" />, label: t.nav_portfolio },
    { id: 'about', icon: <User className="w-5 h-5" />, label: t.nav_about },
    { id: 'contact', icon: <Mail className="w-5 h-5" />, label: t.nav_contact }
  ];

  // Sidebar categories (example)
  const categories = [
    { name: 'All', key: 'all' },
    { name: 'Cloud', key: 'cloud' },
    { name: 'Embedded', key: 'embedded' },
    { name: 'Web', key: 'web' },
    { name: 'Game', key: 'game' },
    { name: 'Other', key: 'other' },
  ];

  // Helper: get unique technologies for filter tags
  const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies.split(',').map(t => t.trim()))));

  // Improved filtered and sorted projects
  const filteredProjects = projects
    .map(project => {
      let score = 0;
      const categoryMatch = selectedCategory === 'All' || (selectedCategory === 'Other' ? false : project.category.toLowerCase() === selectedCategory.toLowerCase());
      const techMatch = !selectedTech || project.technologies.toLowerCase().includes(selectedTech.toLowerCase());
      const titleMatch = searchTerm && (project.title.en.toLowerCase().includes(searchTerm.toLowerCase()) || project.title.es.toLowerCase().includes(searchTerm.toLowerCase()));
      const descMatch = searchTerm && (project.description.en.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.es.toLowerCase().includes(searchTerm.toLowerCase()));
      const techSearchMatch = searchTerm && project.technologies.toLowerCase().includes(searchTerm.toLowerCase());
      if (categoryMatch) score += 2;
      if (titleMatch) score += 3;
      if (descMatch) score += 2;
      if (techMatch) score += 1;
      if (techSearchMatch) score += 1;
      // Only include if matches all active filters
      const passes = categoryMatch && techMatch && (!searchTerm || titleMatch || descMatch || techSearchMatch);
      return passes ? { ...project, score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  // Optimized sidebar handlers
  const handleSidebarMouseEnter = () => {
    if (!sidebarPinned) setSidebarVisible(true);
  };
  const handleSidebarMouseLeave = () => {
    if (!sidebarPinned) setSidebarVisible(false);
  };
  const handleSidebarToggle = () => {
    if (sidebarVisible || sidebarPinned) {
      setSidebarPinned(false);
      setSidebarVisible(false);
    } else {
      setSidebarPinned(true);
      setSidebarVisible(true);
    }
  };

  return (
    <div className={`flex flex-col md:flex-row min-h-screen ${isDarkMode ? 'dark bg-black' : 'bg-white'}`}>
      {/* Mobile Navigation Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-gradient-to-r from-[#9D2235] to-[#C8102E] text-white p-3 rounded-full shadow-lg"
        onClick={toggleNav}
      >
        {isNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Language Toggle (Mobile) */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-[#9D2235] to-[#C8102E] text-white px-3 py-2 rounded-full shadow-lg"
        onClick={toggleLanguage}
      >
        {language === 'en' ? 'ES' : 'EN'}
      </button>

      {/* Add a floating sidebar toggle button (hamburger/close) always visible at top-left */}
      <motion.button
        className="fixed top-4 left-4 z-50 bg-gradient-to-r from-[#9D2235] to-[#C8102E] text-white p-3 rounded-full shadow-lg"
        onClick={handleSidebarToggle}
        aria-label={sidebarVisible || sidebarPinned ? 'Close sidebar' : 'Open sidebar'}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {sidebarVisible || sidebarPinned ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Sidebar Navigation */}
      <motion.aside
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
        initial={false}
        animate={{
          width: sidebarVisible || sidebarPinned ? '16rem' : '0rem',
          opacity: sidebarVisible || sidebarPinned ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 1 }}
        className={`fixed top-0 left-0 h-screen flex flex-col shadow-lg z-40 bg-white dark:bg-black text-black dark:text-white overflow-hidden`}
        style={{ willChange: 'width, opacity' }}
      >
        <div className="w-64">
          {/* Profile Section */}
          <div className="flex flex-col items-center py-6 border-b border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 flex items-center justify-center avatar-ring">
              <img
                src={process.env.PUBLIC_URL + '/images/avatar.png'}
                alt="Angel L. Pinzon"
                className="w-14 h-14 object-cover object-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-black"
              />
            </div>
            <h1 className="text-lg font-bold text-center text-black dark:text-white">Angel L. Pinzon</h1>
            <p className="text-xs text-gray-500 dark:text-gray-300">Computer Engineer</p>
          </div>
          {/* Search Bar */}
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setActiveSection('portfolio'); }}
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </div>
          {/* Navigation Links */}
          <nav className="flex-1 mt-2">
            <div className="space-y-1 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {setActiveSection(item.id); setIsNavOpen(false);}}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r ' + razorbackGradient + ' text-white' 
                      : 'hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
          {/* Dropdown Categories */}
          <div className="px-4 py-2">
            <div className="font-semibold mb-2">Categories</div>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`w-full flex items-center px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-left ${selectedCategory === cat.name ? 'bg-gradient-to-r ' + razorbackGradient + ' text-white' : ''}`}
                  onClick={() => { setSelectedCategory(cat.name); setSelectedTech(''); }}
                >
                  <span className="flex-1">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Social Links & Options */}
          <div className="space-y-2 mt-auto pt-4 pb-6 border-t border-gray-200 dark:border-gray-700 px-4">
            <div className="flex space-x-2 justify-center">
              <a href="https://www.linkedin.com/in/angel-l-pinzon-6715852a0/" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/AngelP17" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
              <a href="mailto:angelpinzon1706@gmail.com" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"><Mail className="w-5 h-5" /></a>
              <a href="resume.pdf" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800" download><Download className="w-5 h-5" /></a>
            </div>
            <div className="flex space-x-2 mt-2 justify-center">
              <button onClick={toggleDarkMode} className={`p-2 rounded ${isDarkMode ? razorbackSolid + ' text-white' : 'bg-gray-200 text-black'}`} aria-label="Toggle dark mode">{isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>
              <button onClick={toggleLanguage} className={`p-2 rounded ${razorbackSolid} text-white`} aria-label="Toggle language">{language === 'en' ? 'ES' : 'EN'}</button>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className={`flex-1 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 pb-12 ${sidebarVisible || sidebarPinned ? 'md:ml-64' : 'ml-0'}`}>
        {/* Overlay for mobile nav */}
        {isNavOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        )}

        {/* Home Section */}
        <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-10 text-center bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
          >
            {/* Animated SVG background */}
            <motion.svg
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute left-0 top-0 w-full h-full z-0"
              viewBox="0 0 1440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" fillOpacity="0.1" d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,192C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            </motion.svg>
            <div className="max-w-3xl mx-auto z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
                className="bg-white dark:bg-black rounded-2xl shadow-lg px-8 py-10 transition-colors duration-300"
              >
                <div className="w-32 h-32 rounded-full border-4 border-white dark:border-[#C8102E] overflow-hidden mx-auto mb-4 shadow-lg flex items-center justify-center bg-white dark:bg-black">
                  <img
                    src={process.env.PUBLIC_URL + '/images/me.jpg'}
                    alt="Angel L. Pinzon"
                    className="w-28 h-28 object-cover object-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-black"
                  />
                </div>
                <h1 className="text-5xl font-bold mb-2 text-black dark:text-[#C8102E] drop-shadow-lg">Angel L. Pinzon</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white drop-shadow">{t.welcome}</h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200"
                >
                  {t.subhead}
                </motion.p>
                {/* Social Links */}
                <motion.div
                  className="flex gap-4 justify-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <a href="https://github.com/AngelP17" target="_blank" rel="noopener noreferrer"
                    className="bg-[#C8102E] dark:bg-[#23272f] text-white dark:text-[#C8102E] p-3 rounded-full transition-colors duration-200 shadow-lg hover:bg-[#9D2235] dark:hover:bg-[#C8102E]">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/angel-l-pinzon-6715852a0/" target="_blank" rel="noopener noreferrer"
                    className="bg-[#C8102E] dark:bg-[#23272f] text-white dark:text-[#C8102E] p-3 rounded-full transition-colors duration-200 shadow-lg hover:bg-[#9D2235] dark:hover:bg-[#C8102E]">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:angelpinzon1706@gmail.com"
                    className="bg-[#C8102E] dark:bg-[#23272f] text-white dark:text-[#C8102E] p-3 rounded-full transition-colors duration-200 shadow-lg hover:bg-[#9D2235] dark:hover:bg-[#C8102E]">
                    <Mail className="w-6 h-6" />
                  </a>
                </motion.div>
                {/* Wrap the 'Check out my work' button in a matching card background */}
                <motion.div className="flex justify-center mt-6">
                  <div className="bg-white dark:bg-black rounded-2xl shadow-lg px-6 py-4 transition-colors duration-300">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveSection('portfolio')}
                      className="px-8 py-3 bg-gradient-to-r from-[#9D2235] to-[#C8102E] dark:from-[#23272f] dark:to-[#C8102E] rounded-full hover:from-[#C8102E] hover:to-[#9D2235] dark:hover:from-[#C8102E] dark:hover:to-[#23272f] transition-colors duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 text-white dark:text-white"
                    >
                      {t.work_button} <ArrowRight className="inline ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="mt-8 flex justify-center"
              >
                <div className="bg-white dark:bg-black rounded-2xl shadow-lg px-8 py-4 transition-colors duration-300 w-full max-w-2xl">
                  <h3 className="text-2xl font-bold text-black dark:text-[#C8102E] mb-4 text-center">{t.skills_title}</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, idx) => (
                      <span key={idx} className="bg-[#C8102E] dark:bg-[#23272f] text-white dark:text-[#C8102E] px-4 py-2 rounded-full text-sm font-medium shadow border border-transparent dark:border-[#C8102E] transition-colors duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#1a202c" fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,192C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </motion.section>
        )}
        </AnimatePresence>
        
        {/* Portfolio Section */}
        <AnimatePresence mode="wait">
        {activeSection === 'portfolio' && (
          <motion.section
            key="portfolio"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="py-16 px-6"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-3 text-center text-black dark:text-white">{t.nav_portfolio}</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">{t.portfolio_desc}</p>
              {/* Category Tabs */}
              <div className="flex justify-center mb-8">
                <div className="flex flex-wrap bg-gray-100 dark:bg-gray-800 rounded-lg p-1 shadow-lg">
                  {['All', 'Cloud', 'Embedded', 'Web', 'Game', 'Other'].map(category => (
                    <button
                      key={category}
                      onClick={() => { setSelectedCategory(category); setSelectedTech(''); }}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r ' + razorbackGradient + ' text-white shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#9D2235]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              {/* Technology Filter Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {allTechnologies.map(tech => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(selectedTech === tech ? '' : tech)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                      selectedTech === tech
                        ? 'bg-gradient-to-r ' + razorbackGradient + ' text-white border-transparent'
                        : 'bg-white dark:bg-black text-[#9D2235] border-[#9D2235] dark:border-[#C8102E] hover:bg-[#9D2235] hover:text-white dark:hover:bg-[#C8102E]'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
              {/* Projects Grid or GitHub link for 'Other' */}
              {selectedCategory === 'Other' ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="text-5xl mb-4">🔗</div>
                  <h3 className="text-2xl font-bold mb-2">GitHub Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Explore my other projects directly on GitHub. Check out my repositories for more examples of my work.</p>
                  <button
                    className="px-8 py-3 bg-gradient-to-r from-[#9D2235] to-[#C8102E] rounded-full text-white font-semibold text-lg shadow-lg hover:from-[#C8102E] hover:to-[#9D2235] transition-colors duration-300 flex items-center"
                    onClick={() => window.open('https://github.com/AngelP17', '_blank')}
                  >
                    Visit GitHub <ArrowRight className="ml-2" />
                  </button>
                </div>
              ) : (
                filteredProjects.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-500 dark:text-gray-400">
                    <div className="text-5xl mb-4">😕</div>
                    <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                    <p>Try a different search or category.</p>
                  </div>
                ) : (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {filteredProjects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.5, type: 'spring' }}
                        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(156,34,53,0.18)' }}
                        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#C8102E] hover:brightness-105"
                        style={{ boxShadow: '0 2px 8px 0 rgba(30,41,59,0.08)' }}
                      >
                        {/* SVG Illustration (centered, with background) */}
                        <div className="relative h-48 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                          <div className="w-full max-w-xs h-32 flex items-center justify-center">
                            <ProjectDetailIllustration project={{...project, title: (project.title?.en || project.title?.es || project.title || '')}} />
                          </div>
                        </div>
                        {/* Project Info */}
                        <div className="flex flex-col flex-1 justify-between p-6">
                          <h3 className="text-xl font-bold text-black dark:text-white mb-2 text-center line-clamp-2 min-h-[3rem]">{project.title[language]}</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 text-center line-clamp-3 min-h-[4.5rem]">{project.description[language]}</p>
                          {/* Technology Tags */}
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.technologies.split(',').slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-xs bg-[#C8102E] dark:bg-[#23272f] text-white dark:text-[#C8102E] px-2 py-1 rounded">
                                {tech.trim()}
                              </span>
                            ))}
                            {project.technologies.split(',').length > 3 && (
                              <span className="text-xs bg-[#C8102E] dark:bg-[#23272f] text-white dark:text-[#C8102E] px-2 py-1 rounded">
                                +{project.technologies.split(',').length - 3}
                              </span>
                            )}
                          </div>
                          {/* View Project Button */}
                          <button
                            onClick={() => openProject(project)}
                            className="w-full py-3 bg-gradient-to-r from-[#9D2235] to-[#C8102E] text-white rounded-lg hover:from-[#C8102E] hover:to-[#9D2235] transition-colors font-medium flex items-center justify-center group mt-auto"
                          >
                            <span>{t.view_project}</span>
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              )}
            </div>
            
            {/* Project Modal */}
            <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 40, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-black w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 mx-auto"
                >
                  {/* Header */}
                  <div className="px-8 pt-8 pb-2 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#C8102E] mb-2">{selectedProject.title[language]}</h2>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{selectedProject.subtitle[language]}</div>
                  </div>
                  {/* Illustration (with spacing) */}
                  <div className="flex justify-center items-center py-4">
                    <div className="w-full max-w-lg h-56 mb-4">
                      <ProjectDetailIllustration project={{...selectedProject, title: (selectedProject.title?.en || selectedProject.title?.es || selectedProject.title || '')}} />
                    </div>
                  </div>
                  {/* Description */}
                  <section className="px-8 pb-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#C8102E]">{t.description}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">{selectedProject.description[language]}</p>
                  </section>
                  {/* Technologies */}
                  <section className="px-8 pb-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#C8102E]">{t.technologies}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.split(',').map((tech, i) => (
                        <span key={i} className="bg-[#9D2235] text-white px-3 py-1 rounded-lg text-xs font-medium">{tech.trim()}</span>
                      ))}
                    </div>
                  </section>
                  {/* GitHub Button */}
                  <div className="px-8 pb-4 flex justify-center">
                    <a
                      href={selectedProject.githubPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#9D2235] to-[#C8102E] text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2 shadow hover:from-[#C8102E] hover:to-[#9D2235] transition"
                    >
                      <Github /> {t.view_on_github}
                    </a>
                  </div>
                  {/* Back Button */}
                  <div className="px-8 pb-8 flex justify-center">
                    <button
                      onClick={closeProject}
                      className="text-gray-400 hover:text-[#C8102E] transition-colors duration-200 flex items-center"
                    >
                      <ArrowRight className="rotate-180 mr-2" /> {t.back_to_portfolio}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.section>
        )}
        </AnimatePresence>
        
        {/* About Section */}
        <AnimatePresence mode="wait">
        {activeSection === 'about' && (
          <motion.section
            key="about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="py-16 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">{t.nav_about}</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex flex-col items-center mb-8">
                  <div className="flex-grow w-full">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg text-center md:text-left">
                      {t.about_text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
        </AnimatePresence>
        
        {/* Contact Section */}
        <AnimatePresence mode="wait">
        {activeSection === 'contact' && (
          <motion.section
            key="contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="py-16 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center text-black dark:text-white">{t.nav_contact}</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                {t.contact_text}
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.your_name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.name_placeholder}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.your_email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.email_placeholder}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.your_message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.message_placeholder}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.attach_file}
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileInput}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C8102E] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#9D2235] to-[#C8102E] text-white px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <span>{t.send}</span>
                    <Send className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        )}
        </AnimatePresence>

        {/* Floating Chat Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-red-500 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Open chat assistant"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        {/* Chat Modal */}
        {isChatOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-2xl relative">
              <button
                onClick={() => setIsChatOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
              <LocalChatInterface />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
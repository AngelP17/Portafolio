import { Search, Cloud, Cpu, Settings, Gamepad2, Laptop } from 'lucide-react';

export const projects = [
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
    technologies: {
      en: "HTML5, CSS, C++, indexing, query processing, search algorithms",
      es: "HTML5, CSS, C++, indexación, procesamiento de consultas, algoritmos de búsqueda"
    },
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/IR",
    liveUrl: "https://angelp17.github.io/Portafolio/projects/IR/index.html",
    icon: Search,
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
    technologies: {
      en: "Cloud/OS Management, MapReduce, Security Risk, Spark, AWS, Azure, Oracle Cloud",
      es: "Gestión de Nube/SO, MapReduce, Riesgo de Seguridad, Spark, AWS, Azure, Oracle Cloud"
    },
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/CC",
    liveUrl: "https://angelp17.github.io/Portafolio/projects/CC/index.html",
    icon: Cloud,
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
    technologies: {
      en: "VHDL, C#, ModelSim, Virtual Machine Environments",
      es: "VHDL, C#, ModelSim, Entornos de Máquinas Virtuales"
    },
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/SM",
    liveUrl: "https://angelp17.github.io/Portafolio/projects/SM/index.html",
    icon: Cpu,
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
    technologies: {
      en: "XILINX, C#, FREERTOS, API",
      es: "XILINX, C#, FREERTOS, API"
    },
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/EBS",
    liveUrl: "https://angelp17.github.io/Portafolio/projects/EBS/index.html",
    icon: Settings,
    color: "bg-[#9D2235]"
  },
  {
    id: 5,
    title: {
      en: "LaserTag Game Full Stack Implementation - Software Engineering",
      es: "Implementación de Full Stack de Juego LaserTag - Ingeniería de Software"
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
    technologies: {
      en: "C++, JS, Front/Back End development and implementation, API",
      es: "C++, JS, Desarrollo e implementación Front/Back End, API"
    },
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/SFE",
    liveUrl: "https://angelp17.github.io/Portafolio/projects/SFE/index.html",
    icon: Gamepad2,
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
    technologies: {
      en: "JS, Java, JSON, Python, Apache",
      es: "JS, Java, JSON, Python, Apache"
    },
    githubPath: "https://github.com/AngelP17/Portafolio/tree/main/Projects/2DG",
    liveUrl: "https://angelp17.github.io/Portafolio/projects/2DG/index.html",
    icon: Laptop,
    color: "bg-[#C8102E]"
  }
];

export const skills = {
  programming: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Java', 'HTML5', 'CSS'],
  cloud: ['AWS', 'Azure', 'Oracle Cloud', 'Spark', 'Docker'],
  embedded: ['VHDL', 'ModelSim', 'XILINX', 'FREERTOS'],
  tools: ['Git', 'API', 'JSON', 'Apache', 'Node.js', 'React']
}; 
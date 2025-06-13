import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    es: 'Inicio'
  },
  'nav.portfolio': {
    en: 'Portfolio',
    es: 'Portafolio'
  },
  'nav.about': {
    en: 'About Me',
    es: 'Acerca de Mí'
  },
  'nav.contact': {
    en: 'Contact Me',
    es: 'Contáctame'
  },
  // Categories
  'categories.all': {
    en: 'All',
    es: 'Todos'
  },
  'categories.cloud': {
    en: 'Cloud',
    es: 'Nube'
  },
  'categories.embedded': {
    en: 'Embedded',
    es: 'Embebido'
  },
  'categories.web': {
    en: 'Web',
    es: 'Web'
  },
  'categories.game': {
    en: 'Game',
    es: 'Juegos'
  },
  'categories.other': {
    en: 'Other',
    es: 'Otros'
  },
  // Main content
  'main.title': {
    en: 'Angel L. Pinzon',
    es: 'Angel L. Pinzon'
  },
  'main.role': {
    en: 'Computer Engineer',
    es: 'Ingeniero en Computación'
  },
  'main.welcome': {
    en: 'Hey there, welcome! My name is Angel',
    es: '¡Hola, bienvenido! Mi nombre es Angel'
  },
  'main.description': {
    en: 'Thanks for visiting, you will find some of my programming work here :)',
    es: 'Gracias por visitar, aquí encontrarás algunos de mis trabajos de programación :)'
  },
  'main.cta': {
    en: 'Check out some of my work',
    es: 'Echa un vistazo a mi trabajo'
  },
  // Skills section
  'skills.title': {
    en: 'Skills & Technologies',
    es: 'Habilidades y Tecnologías'
  },
  'skills.categories.programming': {
    en: 'Programming & Languages',
    es: 'Programación y Lenguajes'
  },
  'skills.categories.cloud': {
    en: 'Cloud & DevOps',
    es: 'Nube y DevOps'
  },
  'skills.categories.embedded': {
    en: 'Embedded Systems',
    es: 'Sistemas Embebidos'
  },
  'skills.categories.tools': {
    en: 'Tools & Frameworks',
    es: 'Herramientas y Frameworks'
  },
  // About section
  'about.title': {
    en: 'About Me',
    es: 'Acerca de Mí'
  },
  'about.p1': {
    en: 'I am a passionate computer engineer with a strong foundation in both software and hardware. I thrive on solving complex problems and building innovative solutions.',
    es: 'Soy un ingeniero en computación apasionado con una sólida base tanto en software como en hardware. Me encanta resolver problemas complejos y construir soluciones innovadoras.'
  },
  'about.p2': {
    en: 'My experience spans across web development, cloud computing, and embedded systems, allowing me to approach challenges from a holistic perspective.',
    es: 'Mi experiencia abarca el desarrollo web, la computación en la nube y los sistemas embebidos, lo que me permite abordar los desafíos desde una perspectiva holística.'
  },
  'about.p3': {
    en: 'I am always eager to learn new technologies and apply them to create efficient, scalable, and user-friendly applications. This portfolio is a showcase of my journey and capabilities.',
    es: 'Siempre estoy ansioso por aprender nuevas tecnologías y aplicarlas para crear aplicaciones eficientes, escalables y fáciles de usar. Este portafolio es una muestra de mi trayectoria y capacidades.'
  },
  'about.credentials_title': {
    en: 'Licenses & Certifications',
    es: 'Licencias y Certificaciones'
  },
  'about.experience_title': {
    en: 'Professional Experience',
    es: 'Experiencia Profesional'
  },
  // Search
  'search.placeholder': {
    en: 'Search projects...',
    es: 'Buscar proyectos...'
  },
  // New keys for portfolio section
  'view_project': {
    en: 'View Project',
    es: 'Ver Proyecto'
  },
  'description': {
    en: 'Description',
    es: 'Descripción'
  },
  'technologies': {
    en: 'Technologies Used',
    es: 'Tecnologías Utilizadas'
  },
  'view_on_github': {
    en: 'View on GitHub',
    es: 'Ver en GitHub'
  },
  'view_live_demo': {
    en: 'View Live Demo',
    es: 'Ver Demo en Vivo'
  },
  'close': {
    en: 'Close',
    es: 'Cerrar'
  },
  // Chatbot
  'chat.title': {
    en: 'AI Assistant',
    es: 'Asistente de IA'
  },
  'chat.welcome': {
    en: 'Hello! I am a personal AI assistant. How can I help you learn more about Angel?',
    es: '¡Hola! Soy un asistente personal de IA. ¿Cómo puedo ayudarte a saber más sobre Angel?'
  },
  'chat.input_placeholder': {
    en: 'Ask a question...',
    es: 'Haz una pregunta...'
  },
  'chat.response_greeting': {
    en: 'Hello there! Ask me about Angel\'s projects, skills, or how to contact him.',
    es: '¡Hola! Pregúntame sobre los proyectos de Angel, sus habilidades o cómo contactarlo.'
  },
  'chat.response_projects': {
    en: 'Angel has worked on several projects, including a Document Search Engine, Cloud Computing implementations, and even a LaserTag game. You can see them all in the "Portfolio" section.',
    es: 'Angel ha trabajado en varios proyectos, incluyendo un motor de búsqueda de documentos, implementaciones de computación en la nube e incluso un juego de LaserTag. Puedes verlos todos en la sección de "Portafolio".'
  },
  'chat.response_skills': {
    en: 'Angel has a wide range of skills, including React, Node.js, Python, C++, AWS, and VHDL. Check out the "Skills & Technologies" section for a more complete list.',
    es: 'Angel tiene una amplia gama de habilidades, incluyendo React, Node.js, Python, C++, AWS y VHDL. Echa un vistazo a la sección "Habilidades y Tecnologías" para una lista más completa.'
  },
  'chat.response_contact': {
    en: 'You can reach out to Angel via the social media links on the sidebar or use the contact form below. I can\'t provide his email address directly for privacy reasons.',
    es: 'Puedes contactar a Angel a través de los enlaces de redes sociales en la barra lateral o usar el formulario de contacto a continuación. No puedo proporcionar su dirección de correo electrónico directamente por razones de privacidad.'
  },
  'chat.response_experience': {
    en: 'Angel has professional experience at:',
    es: 'Angel tiene experiencia profesional en:'
  },
  'chat.response_credentials': {
    en: 'He holds several certifications, including:',
    es: 'Él tiene varias certificaciones, incluyendo:'
  },
  'chat.response_pleasure': {
    en: 'You\'re welcome! Let me know if there is anything else I can help with.',
    es: '¡De nada! Avísame si hay algo más en lo que pueda ayudar.'
  },
  'chat.response_help': {
    en: 'You can ask me about "projects", "skills", "experience", "certifications", or "contact".',
    es: 'Puedes preguntarme sobre "proyectos", "habilidades", "experiencia", "certificaciones" o "contacto".'
  },
  'chat.response_default': {
    en: "I'm not sure how to answer that. I am a simple bot. Try asking about 'projects', 'skills' or 'contact'.",
    es: 'No estoy seguro de cómo responder a eso. Soy un bot simple. Intenta preguntar sobre "proyectos", "habilidades" o "contacto".'
  },
  // Footer
  'footer.copyright': {
    en: '© 2024 Angel L. Pinzon. Built with modern web technologies.',
    es: '© 2024 Angel L. Pinzon. Construido con tecnologías web modernas.'
  },
  // Contact Section
  'contact.title': {
    en: 'Get In Touch',
    es: 'Ponte en Contacto'
  },
  'contact.description': {
    en: 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me.',
    es: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones. No dudes en contactarme.'
  },
  'contact.name': {
    en: 'Your Name',
    es: 'Tu Nombre'
  },
  'contact.email': {
    en: 'Your Email',
    es: 'Tu Correo Electrónico'
  },
  'contact.message': {
    en: 'Your Message',
    es: 'Tu Mensaje'
  },
  'contact.send': {
    en: 'Send Message',
    es: 'Enviar Mensaje'
  },
};

interface TranslationContextProps {
  language: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.en || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <TranslationContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 
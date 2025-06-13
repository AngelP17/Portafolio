import { useState } from 'react';
import { useTranslation } from './useTranslation';
import { credentials } from '../data/credentials';
import { experiences } from '../data/experience';
import { projects } from '../project-data';

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const getProjectTitles = (lang: 'en' | 'es') => projects.map(p => p.title[lang]).join(', ');
const getCredentialTitles = (lang: 'en' | 'es') => credentials.map(c => c.title[lang]).join(', ');

export const useChat = () => {
  const { t, language } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chat.welcome'),
      sender: 'bot',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string) => {
    const newUserMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      const newBotMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (query: string): string => {
    const name = "Angel";
    
    // Greeting variations
    if (query.match(/\b(hello|hi|hey|hola|good morning|good afternoon|good evening|greetings)\b/)) {
      const greetings = language === 'en' 
        ? ["Hello! How can I help you learn more about Angel today?", 
           "Hi there! I'm here to tell you about Angel's work and experience.",
           "Hey! Feel free to ask me about Angel's projects, skills, or certifications!"]
        : ["¡Hola! ¿Cómo puedo ayudarte a conocer más sobre Angel hoy?",
           "¡Hola! Estoy aquí para contarte sobre el trabajo y experiencia de Angel.",
           "¡Hey! No dudes en preguntarme sobre los proyectos, habilidades o certificaciones de Angel!"];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Projects - more detailed
    if (query.match(/\b(project|work|portfolio|what.*built|what.*created|show.*work)\b/)) {
      if (query.match(/\b(cloud|aws|azure)\b/)) {
        return language === 'en' 
          ? "Angel has worked on cloud computing projects including Karpinski Operations Implementation, focusing on MapReduce optimization and security risk management using AWS, Azure, and Oracle Cloud."
          : "Angel ha trabajado en proyectos de computación en la nube incluyendo la Implementación de Operaciones Karpinski, enfocándose en la optimización de MapReduce y gestión de riesgos de seguridad usando AWS, Azure y Oracle Cloud.";
      }
      if (query.match(/\b(game|laser|tag)\b/)) {
        return language === 'en'
          ? "Angel developed a full-stack LaserTag game system with real-time player tracking and score management, plus a 2D game with interactive interface using modern web technologies."
          : "Angel desarrolló un sistema completo de juego LaserTag con seguimiento de jugadores en tiempo real y gestión de puntuación, además de un juego 2D con interfaz interactiva usando tecnologías web modernas.";
      }
      return t('chat.response_projects');
    }

    // Skills - more specific
    if (query.match(/\b(skill|technologies|know|language|programming|tech stack)\b/)) {
      if (query.match(/\b(cloud|devops)\b/)) {
        return language === 'en'
          ? "Angel is skilled in cloud technologies including AWS, Azure, Oracle Cloud, Docker, and Spark. He also holds certifications in cloud cost management and data engineering."
          : "Angel tiene habilidades en tecnologías de nube incluyendo AWS, Azure, Oracle Cloud, Docker y Spark. También tiene certificaciones en gestión de costos en la nube e ingeniería de datos.";
      }
      if (query.match(/\b(web|frontend|backend)\b/)) {
        return language === 'en'
          ? "For web development, Angel uses React, TypeScript, Node.js, HTML5, CSS, and various modern frameworks. He has experience with both frontend and backend development."
          : "Para desarrollo web, Angel usa React, TypeScript, Node.js, HTML5, CSS y varios frameworks modernos. Tiene experiencia tanto en desarrollo frontend como backend.";
      }
      return t('chat.response_skills');
    }

    // Experience - more detailed
    if (query.match(/\b(experience|job|work history|position|role|university)\b/)) {
      if (query.match(/\b(current|now|present)\b/)) {
        return language === 'en'
          ? "Angel is currently working as a Course Assistant for the First Year Engineering Program at the University of Arkansas, where he supports over 700 students and helps improve student-faculty interaction."
          : "Angel actualmente trabaja como Asistente de Curso para el Programa de Ingeniería de Primer Año en la Universidad de Arkansas, donde apoya a más de 700 estudiantes y ayuda a mejorar la interacción estudiante-facultad.";
      }
      const experienceSummary = experiences.map(e => `${e.company} (${e.roles.map(r => r.title[language]).join(', ')})`).join('; ');
      return `${t('chat.response_experience')} ${experienceSummary}.`;
    }

    // Credentials / Licenses / Certifications - more specific
    if (query.match(/\b(credential|license|certification|certificate|certified)\b/)) {
      if (query.match(/\b(ai|artificial intelligence|machine learning)\b/)) {
        return language === 'en'
          ? "Angel holds AI certifications including: AI Engineer for Data Scientists Associate from DataCamp and Certified AI Foundations Associate from Oracle. He's skilled in machine learning, generative AI, and MLOps."
          : "Angel tiene certificaciones de IA incluyendo: Asociado Ingeniero de IA para Científicos de Datos de DataCamp y Asociado Certificado en Fundamentos de IA de Oracle. Tiene habilidades en aprendizaje automático, IA generativa y MLOps.";
      }
      if (query.match(/\b(data|analytics)\b/)) {
        return language === 'en'
          ? "Angel has several data-related certifications: Google Analytics Certification, Certified Data Engineer Associate from DataCamp, and Certified Data Foundations Associate from Oracle."
          : "Angel tiene varias certificaciones relacionadas con datos: Certificación de Google Analytics, Asociado Certificado de Ingeniero de Datos de DataCamp y Asociado Certificado en Fundamentos de Datos de Oracle.";
      }
      const certList = getCredentialTitles(language);
      return `${t('chat.response_credentials')} ${certList}.`;
    }

    // Contact
    if (query.match(/\b(contact|email|phone|reach out|hire|connect)\b/)) {
      return language === 'en'
        ? "You can reach Angel through the contact form below or connect with him on LinkedIn and GitHub using the links in the sidebar. He's always open to discussing new opportunities and projects!"
        : "Puedes contactar a Angel a través del formulario de contacto a continuación o conectar con él en LinkedIn y GitHub usando los enlaces en la barra lateral. ¡Siempre está abierto a discutir nuevas oportunidades y proyectos!";
    }

    // About Angel
    if (query.match(/\b(who|about|tell me about|describe)\b.*\b(angel|him|he)\b/)) {
      return language === 'en'
        ? "Angel L. Pinzon is a passionate computer engineer with expertise in software development, cloud computing, and embedded systems. He's currently pursuing his degree at the University of Arkansas while working as a Course Assistant. He loves solving complex problems and building innovative solutions!"
        : "Angel L. Pinzon es un ingeniero en computación apasionado con experiencia en desarrollo de software, computación en la nube y sistemas embebidos. Actualmente está cursando su carrera en la Universidad de Arkansas mientras trabaja como Asistente de Curso. ¡Le encanta resolver problemas complejos y construir soluciones innovadoras!";
    }

    // Education
    if (query.match(/\b(education|study|university|degree|school)\b/)) {
      return language === 'en'
        ? "Angel is pursuing his Computer Engineering degree at the University of Arkansas. He also completed the BASE program and Student Leadership Certificate at the University of Waterloo."
        : "Angel está cursando su carrera de Ingeniería en Computación en la Universidad de Arkansas. También completó el programa BASE y el Certificado de Liderazgo Estudiantil en la Universidad de Waterloo.";
    }
    
    // Gratitude
    if (query.match(/\b(thanks|thank you|cool|awesome|great|nice|good job)\b/)) {
      const responses = language === 'en'
        ? ["You're welcome! Let me know if you have any other questions about Angel.",
           "Glad I could help! Feel free to ask more about Angel's work or experience.",
           "Thank you! Is there anything else you'd like to know about Angel?"]
        : ["¡De nada! Avísame si tienes otras preguntas sobre Angel.",
           "¡Me alegra poder ayudar! No dudes en preguntar más sobre el trabajo o experiencia de Angel.",
           "¡Gracias! ¿Hay algo más que te gustaría saber sobre Angel?"];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Help
    if (query.match(/\b(help|what can you|capabilities|options)\b/)) {
      return language === 'en'
        ? "I can tell you about Angel's: 📁 Projects (web, cloud, embedded systems), 🛠️ Technical skills, 🎓 Certifications (10+ including AI, Data, Cloud), 💼 Work experience at University of Arkansas, 📧 How to contact him. What interests you most?"
        : "Puedo contarte sobre: 📁 Proyectos de Angel (web, nube, sistemas embebidos), 🛠️ Habilidades técnicas, 🎓 Certificaciones (10+ incluyendo IA, Datos, Nube), 💼 Experiencia laboral en la Universidad de Arkansas, 📧 Cómo contactarlo. ¿Qué te interesa más?";
    }

    // Fun facts
    if (query.match(/\b(fun fact|interesting|hobby|like)\b/)) {
      return language === 'en'
        ? "Fun fact: Angel has worked on everything from autonomous vehicles to laser tag games! He enjoys bridging the gap between hardware and software, and is passionate about creating user-friendly applications that solve real-world problems."
        : "Dato curioso: ¡Angel ha trabajado en todo, desde vehículos autónomos hasta juegos de laser tag! Le gusta cerrar la brecha entre hardware y software, y le apasiona crear aplicaciones fáciles de usar que resuelvan problemas del mundo real.";
    }

    // Default fallback
    return language === 'en'
      ? "I'm not sure about that specific topic. Try asking me about Angel's projects, skills, certifications, experience, or how to contact him. I'm here to help!"
      : "No estoy seguro sobre ese tema específico. Intenta preguntarme sobre los proyectos, habilidades, certificaciones, experiencia de Angel, o cómo contactarlo. ¡Estoy aquí para ayudar!";
  };

  return { messages, sendMessage, isTyping };
}; 
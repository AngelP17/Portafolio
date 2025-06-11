import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingIndicator from './TypingIndicator';
import MessageBubble from './MessageBubble';
import ContactForm from './ContactForm';

// More natural, varied, and nuanced conversation responses
const conversationResponses = {
  greeting: [
    "Hi there! I'm Angel's portfolio assistant. How can I help you learn about his background and projects?",
    "Hello! I'd be happy to tell you about Angel's experience and skills. What would you like to know?",
    "Welcome! I'm here to share information about Angel's work and expertise. What interests you most?"
  ],
  skills: [
    "Angel is proficient in a variety of technologies. His frontend skills include React, TypeScript, and CSS frameworks like Tailwind. On the backend, he works with Node.js, Python, and has experience with C++/C# for lower-level applications. He's also familiar with hardware description languages like VHDL and tools like ModelSim and XILINX.",
    "Angel's technical toolkit is quite diverse! He's skilled in web technologies (JavaScript, TypeScript, React), cloud platforms (AWS, Azure, Oracle Cloud), and also has experience with embedded systems through VHDL, ModelSim, and XILINX. His programming languages include Python, C++, and C#.",
    "Angel has developed a versatile skill set that spans web development (React, JavaScript, TypeScript), cloud computing (AWS, Azure), and hardware engineering (VHDL, XILINX). He's also comfortable with containerization using Docker and version control with Git."
  ],
  experience: [
    "Angel currently works as a Course Assistant at the University of Arkansas while pursuing his Computer Engineering degree. His focus areas include web development, cloud solutions, and data analytics. He enjoys applying his technical skills to solve real-world problems.",
    "As a Course Assistant at the University of Arkansas, Angel helps students master complex technical concepts while continuing his studies in Computer Engineering. He's passionate about the intersection of software and hardware, with particular interest in web technologies and cloud architectures.",
    "Angel's professional journey includes working as a Course Assistant at the University of Arkansas, where he supports students in their technical education. He's currently advancing his own education in Computer Engineering, specializing in cloud computing, web development, and data analysis."
  ],
  education: [
    "Angel is pursuing a degree in Computer Engineering at the University of Arkansas. His studies combine software development principles with hardware design fundamentals, giving him a well-rounded technical foundation.",
    "The University of Arkansas is where Angel is studying Computer Engineering. This multidisciplinary program has allowed him to develop skills across both software and hardware domains, from web technologies to embedded systems.",
    "Angel's academic journey at the University of Arkansas in Computer Engineering has equipped him with a unique blend of software expertise and hardware knowledge, preparing him for diverse technical challenges."
  ],
  projects: [
    "Angel has worked on several projects showcasing his technical versatility. His portfolio includes web applications built with React, cloud-based solutions using AWS and Azure, and data analysis projects. Each project demonstrates his ability to leverage different technologies to create effective solutions.",
    "Throughout his academic and professional journey, Angel has developed projects spanning web development, cloud infrastructure, and embedded systems. His portfolio reflects his diverse technical interests and his ability to implement end-to-end solutions.",
    "Angel's project work demonstrates his range as a developer and engineer. From responsive web applications to cloud architecture and hardware interfaces, his portfolio shows both technical depth and breadth."
  ],
  cloud: [
    "Cloud computing is one of Angel's areas of expertise. He's worked with major platforms including AWS, Azure, and Oracle Cloud. He understands cloud architecture principles and has implemented solutions leveraging services like compute instances, databases, and serverless functions.",
    "Angel has hands-on experience with AWS, Azure, and Oracle Cloud platforms. He's comfortable designing cloud-native applications, managing infrastructure as code, and implementing best practices for security and scalability in cloud environments.",
    "In the cloud domain, Angel has worked with AWS, Azure, and Oracle Cloud. He's familiar with cloud deployment models, service orchestration, and integrating cloud resources with application workflows. He keeps up with evolving cloud technologies and service offerings."
  ],
  web: [
    "Web development is a core part of Angel's expertise. He's proficient with modern frontend frameworks like React, state management approaches, and responsive design principles. On the backend, he works with Node.js and understands RESTful API development and authentication patterns.",
    "Angel's web development skills include React, TypeScript, and various CSS frameworks for frontend work. He's familiar with backend technologies like Node.js and has experience creating full-stack applications with seamless user experiences.",
    "When it comes to web technologies, Angel works across the stack from responsive UIs with React to backend systems with Node.js. He values creating accessible, performant web experiences and follows modern development practices."
  ],
  openToWork: [
    "Angel is open to exploring new opportunities that align with his interests in web development, cloud computing, and data analytics. He's particularly interested in roles that would allow him to continue growing his technical skills while solving meaningful problems.",
    "Yes, Angel is open to discussing new professional opportunities, especially those involving modern web technologies, cloud platforms, or data engineering. He's looking for environments where he can both contribute and continue learning.",
    "Angel is receptive to new career possibilities that match his technical background and interests. He's especially drawn to roles involving React development, cloud architecture, or software engineering for data-intensive applications."
  ],
  contact: [
    "You can reach Angel through the contact form on this portfolio. Alternatively, you can connect with him on LinkedIn or GitHub using the social links provided on the site.",
    "The best way to contact Angel is through the form on this portfolio site. He also maintains profiles on professional networks like LinkedIn and GitHub if you'd prefer to connect there.",
    "Angel welcomes professional connections! You can use the contact form here on his portfolio site, or reach out through his LinkedIn profile linked in the social section."
  ],
  hardwareExperience: [
    "In addition to software development, Angel has experience with hardware description languages like VHDL and tools such as ModelSim and XILINX. This knowledge comes from his Computer Engineering background, where he's worked on digital systems design and FPGA programming projects.",
    "Angel's hardware engineering experience includes working with VHDL for hardware description, ModelSim for simulation, and XILINX tools for FPGA development. These skills complement his software expertise and reflect his interdisciplinary approach.",
    "Through his Computer Engineering studies, Angel has gained practical experience with hardware description languages (VHDL) and industry tools like ModelSim and XILINX. He understands the hardware-software interface and has worked on digital systems projects."
  ],
  linkedin: [
    "You can find Angel's LinkedIn profile linked in the social section of this portfolio. His profile there contains more details about his professional background and education.",
    "Angel maintains his professional network on LinkedIn. You'll find a link to his profile in the social links section of this portfolio site.",
    "For a more detailed view of Angel's professional timeline and connections, check out his LinkedIn profile which is linked in the social media section of this portfolio."
  ],
  github: [
    "Angel's code repositories and contributions can be found on his GitHub profile, which is linked in the social section of this portfolio. There you can explore his projects in more detail.",
    "To see Angel's code and project repositories, visit his GitHub profile through the link provided in the social section. It showcases his technical work and contributions.",
    "Angel's GitHub profile contains examples of his coding projects and contributions. You can access it through the link in the social media section of this portfolio."
  ],
  fallback: [
    "I don't have specific information about that. Would you like to ask Angel directly through the contact form?",
    "That's a great question, but I don't have those specific details. Would you like to reach out to Angel directly?",
    "I'm not able to provide that information. Would you like to connect with Angel through the contact form to learn more?"
  ]
};

const generateLocalResponse = (message) => {
  const query = message.toLowerCase();
  const getRandomResponse = (category) => {
    const randomIndex = Math.floor(Math.random() * category.length);
    return category[randomIndex];
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      if (query.includes('hello') || query.includes('hi') || query.includes('hey') || 
          query.includes('greetings') || query === '') {
        resolve(getRandomResponse(conversationResponses.greeting));
      } else if (query.includes('skill') || query.includes('technologies') || query.includes('tech stack') ||
                 query.includes('programming') || query.includes('languages')) {
        resolve(getRandomResponse(conversationResponses.skills));
      } else if (query.includes('experience') || query.includes('work') || 
                 query.includes('job') || query.includes('career')) {
        resolve(getRandomResponse(conversationResponses.experience));
      } else if (query.includes('education') || query.includes('study') || query.includes('degree') ||
                 query.includes('university') || query.includes('college')) {
        resolve(getRandomResponse(conversationResponses.education));
      } else if (query.includes('project') || query.includes('portfolio') || 
                 query.includes('work sample') || query.includes('built')) {
        resolve(getRandomResponse(conversationResponses.projects));
      } else if (query.includes('cloud') || query.includes('aws') || query.includes('azure') ||
                 query.includes('oracle cloud')) {
        resolve(getRandomResponse(conversationResponses.cloud));
      } else if (query.includes('web') || query.includes('frontend') || query.includes('backend') ||
                 query.includes('full stack') || query.includes('react')) {
        resolve(getRandomResponse(conversationResponses.web));
      } else if (query.includes('open to work') || query.includes('job opportunities') ||
                 query.includes('hiring') || query.includes('looking for work') ||
                 query.includes('available for') || query.includes('job search')) {
        resolve(getRandomResponse(conversationResponses.openToWork));
      } else if (query.includes('contact') || query.includes('reach') || query.includes('email') ||
                 query.includes('phone') || query.includes('message')) {
        resolve(getRandomResponse(conversationResponses.contact));
      } else if (query.includes('hardware') || query.includes('embedded') || query.includes('vhdl') ||
                 query.includes('fpga') || query.includes('xilinx') || query.includes('modelSim')) {
        resolve(getRandomResponse(conversationResponses.hardwareExperience));
      } else if (query.includes('linkedin') || query.includes('linkediend') || 
                 query.includes('professional profile')) {
        resolve(getRandomResponse(conversationResponses.linkedin));
      } else if (query.includes('github') || query.includes('repository') || query.includes('code samples')) {
        resolve(getRandomResponse(conversationResponses.github));
      } else {
        resolve(getRandomResponse(conversationResponses.fallback));
      }
    }, Math.random() * 800 + 400);
  });
};

const LocalChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: conversationResponses.greeting[0],
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    try {
      const responseText = await generateLocalResponse(inputText);
      setIsTyping(false);
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      if (responseText.includes("Would you like to ask Angel directly") || 
          responseText.includes("Would you like to reach out to Angel directly") ||
          responseText.includes("Would you like to connect with Angel")) {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            const formPrompt = {
              id: (Date.now() + 2).toString(),
              text: "Would you like to fill out the contact form now?",
              sender: 'ai',
              timestamp: new Date()
            };
            setMessages(prev => [...prev, formPrompt]);
          }
        }, 1000);
      }
    } catch (error) {
      setIsTyping(false);
      const errorResponse = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered a technical issue. Please try again in a moment.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const displayContactForm = () => {
    setShowContactForm(true);
  };

  const handleFormSubmit = (name, email, message) => {
    setShowContactForm(false);
    const confirmationMessage = {
      id: Date.now().toString(),
      text: `Thanks for reaching out, ${name}! Your message has been sent to Angel, and he'll get back to you at ${email} soon. Have a great day!`,
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, confirmationMessage]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, type: 'spring' }}
      className="w-full max-w-md mx-auto h-[600px] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-card overflow-hidden flex flex-col border border-neutral-200 dark:border-neutral-700 font-sans"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="bg-white dark:bg-neutral-900 px-6 py-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-red-500 flex items-center justify-center shadow-lg">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-50">Angel's Portfolio Assistant</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Ask me about Angel's work and experience</p>
          </div>
        </div>
      </motion.div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-neutral-900 flex flex-col">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <MessageBubble 
              key={message.id} 
              message={message}
              onContactRequest={
                (message.text.includes("contact form") || 
                message.text.includes("reach out to Angel") || 
                message.text.includes("connect with Angel")) ? 
                displayContactForm : undefined
              }
            />
          ))}
        </AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-700 self-start max-w-[75%]"
          >
            <h3 className="text-lg font-medium mb-3 text-neutral-900 dark:text-neutral-50">Contact Angel</h3>
            <ContactForm 
              onSubmit={handleFormSubmit}
              onCancel={() => setShowContactForm(false)}
            />
          </motion.div>
        )}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="p-4 bg-gray-100 dark:bg-gray-800 border-t border-neutral-200 dark:border-neutral-700 font-sans"
      >
        <div className="flex items-center space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Angel's skills, experience, or projects..."
            className="flex-1 max-h-20 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-purple text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 resize-none transition-all duration-200 shadow-inner text-base"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={inputText.trim() === ''}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-card ${
              inputText.trim() === '' 
                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500' 
                : 'bg-gradient-to-r from-accent-purple to-accent-emerald text-white hover:scale-105'
            }`}
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LocalChatInterface; 
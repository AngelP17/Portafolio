import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  toggleChat: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, toggleChat }) => {
  return (
    <motion.button
      onClick={toggleChat}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <AnimatePresence initial={false} mode="wait">
        {isOpen ? (
          <motion.div
            key="x"
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-8 h-8" />
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageSquare className="w-8 h-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}; 
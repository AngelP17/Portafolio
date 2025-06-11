import React from 'react';
import { motion } from 'framer-motion';

const MessageBubble = ({ message, onContactRequest }) => {
  const isUser = message.sender === 'user';
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(message.timestamp);

  // Check if message contains contact form text
  const isContactPrompt = message.text.includes("contact form") || 
                          message.text.includes("I don't have specific information");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}
    >
      <div className={`max-w-[75%] ${isUser ? 'order-1' : 'order-none'} w-fit`}>
        <div
          className={`rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-card break-words whitespace-pre-wrap text-base sm:text-lg transition-colors duration-200
            ${isUser
              ? 'bg-gradient-to-r from-accent-purple to-accent-emerald text-white border border-accent-purple/30'
              : 'bg-neutral-900 text-neutral-100 border border-neutral-700'}
          `}
          style={{ wordBreak: 'break-word' }}
        >
          <p>{message.text}</p>
          {isContactPrompt && onContactRequest && (
            <button
              onClick={onContactRequest}
              className="mt-3 px-4 py-2 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-lg transition-colors shadow-card hover:from-accent-purple hover:to-accent-emerald"
            >
              Contact Angel
            </button>
          )}
        </div>
        <div
          className={`text-xs mt-1 text-neutral-400 ${
            isUser ? 'text-right mr-2' : 'text-left ml-2'
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble; 
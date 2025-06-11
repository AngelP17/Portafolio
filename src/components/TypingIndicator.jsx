import React from 'react';

const TypingIndicator = () => (
  <div className="flex items-center space-x-2 mt-2">
    <span className="w-2 h-2 bg-gradient-to-r from-accent-purple to-accent-emerald rounded-full animate-bounce"></span>
    <span className="w-2 h-2 bg-gradient-to-r from-accent-purple to-accent-emerald rounded-full animate-bounce delay-150"></span>
    <span className="w-2 h-2 bg-gradient-to-r from-accent-purple to-accent-emerald rounded-full animate-bounce delay-300"></span>
    <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2">Angel's assistant is typing...</span>
  </div>
);

export default TypingIndicator; 
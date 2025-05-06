import React from 'react';

const TypingIndicator = () => (
  <div className="flex items-center space-x-2 mt-2">
    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-red-500 rounded-full animate-bounce"></span>
    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-red-500 rounded-full animate-bounce delay-150"></span>
    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-red-500 rounded-full animate-bounce delay-300"></span>
    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Angel's assistant is typing...</span>
  </div>
);

export default TypingIndicator; 
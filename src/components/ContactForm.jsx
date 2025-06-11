import React, { useState } from 'react';

const ContactForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, message);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-colors"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-colors"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-colors"
          required
        />
      </div>
      
      <div className="flex space-x-2">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-card text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary-light to-primary-dark hover:from-accent-purple hover:to-accent-emerald focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors"
        >
          Send Message
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center py-2 px-4 border border-neutral-300 dark:border-neutral-600 shadow-sm text-sm font-medium rounded-md text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactForm; 
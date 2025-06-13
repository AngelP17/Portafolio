import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-16 lg:py-24 px-6 lg:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}; 
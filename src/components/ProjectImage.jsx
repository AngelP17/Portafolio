import React from "react";

const categoryColors = {
  Web: 'bg-[#C8102E] text-white',
  Cloud: 'bg-[#9D2235] text-white',
  Embedded: 'bg-[#BE123C] text-white',
  Game: 'bg-[#C8102E] text-white',
  Other: 'bg-gray-500 text-white',
};

const ProjectImage = ({ src, alt, category, icon, className = "", showOverlay = true }) => (
  <div className={`relative w-full h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-t-xl shadow-md overflow-hidden group ${className}`}>
    <img
      src={src}
      alt={alt}
      className="object-cover w-full h-full"
      loading="lazy"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
    {/* Category badge */}
    {category && (
      <span className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold shadow ${categoryColors[category] || categoryColors.Other}`}>{category}</span>
    )}
    {/* Optional icon overlay (bottom right) */}
    {icon && (
      <span className="absolute bottom-2 right-2 bg-white/80 dark:bg-black/80 rounded-full p-1 shadow text-xl">{icon}</span>
    )}
    {/* Overlay on hover */}
    {showOverlay && (
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <svg className="w-10 h-10 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </div>
    )}
  </div>
);

export default ProjectImage; 
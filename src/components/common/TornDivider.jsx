import React from 'react';

/**
 * TornDivider provides styled section transitions (torn paper edge or rope line).
 * @param {'torn-top' | 'torn-bottom' | 'rope'} type
 * @param {string} className
 */
export default function TornDivider({ type = 'rope', className = '' }) {
  if (type === 'rope') {
    return (
      <div className={`relative w-full h-8 flex items-center justify-center overflow-hidden my-4 ${className}`}>
        {/* Rope Line SVG */}
        <svg className="w-full h-4 text-macrow-red opacity-80" preserveAspectRatio="none" viewBox="0 0 1200 12" fill="none">
          <path d="M0,6 C150,12 300,0 450,6 C600,12 750,0 900,6 C1050,12 1200,6 1200,6" stroke="#ff3803" strokeWidth="2.5" strokeDasharray="8 3" />
          <path d="M0,6 C150,0 300,12 450,6 C600,0 750,12 900,6 C1050,0 1200,6 1200,6" stroke="#111111" strokeWidth="1" opacity="0.4" />
        </svg>
        {/* Center red knot emblem */}
        <div className="absolute w-4 h-4 rounded-full bg-macrow-red border-2 border-macrow-black shadow-md shadow-red-glow" />
      </div>
    );
  }

  if (type === 'torn-top') {
    return (
      <div className={`w-full overflow-hidden leading-none z-10 ${className}`}>
        <svg className="relative block w-full h-6 text-macrow-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q150,90 300,40 Q450,100 600,30 Q750,80 900,20 Q1050,90 1200,40 L1200,0 Z" fill="currentColor"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none z-10 ${className}`}>
      <svg className="relative block w-full h-6 text-macrow-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,120 L0,60 Q150,10 300,80 Q450,20 600,70 Q750,10 900,80 Q1050,20 1200,70 L1200,120 Z" fill="currentColor"></path>
      </svg>
    </div>
  );
}

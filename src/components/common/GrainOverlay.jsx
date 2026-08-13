import React from 'react';

/**
 * GrainOverlay renders a fixed, pointer-events-none SVG noise overlay across the screen
 * for a cinematic film-grain aesthetic.
 */
export default function GrainOverlay() {
  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 film-grain opacity-25 mix-blend-multiply"
    />
  );
}

import React from 'react';
import { RainingTechnologies } from './RainingTechnologies';

interface SectionWithRainingEffectsProps {
  children: React.ReactNode;
}

export const SectionWithRainingEffects: React.FC<SectionWithRainingEffectsProps> = ({ children }) => {
  return (
    <div className="relative">
      <RainingTechnologies />
      {children}
    </div>
  );
}; 
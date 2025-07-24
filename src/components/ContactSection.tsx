import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

interface ContactSectionProps {
  onDownloadCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDownloadCV }) => {
  return (
    <section id="contact" className="py-20 px-6 relative z-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 animate-fade-in">
          Let's Work Together
        </h2>
        <p className="text-xl text-white/80 mb-12 text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
          Ready to bring your ideas to life? Let's discuss your next project.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo onDownloadCV={onDownloadCV} />
        </div>
      </div>
    </section>
  );
}; 
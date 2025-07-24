import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/config/secrets';

interface ContactInfoProps {
  onDownloadCV: () => void;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ onDownloadCV }) => {
  return (
    <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center group hover:scale-105 transition-transform duration-300">
            <Mail className="w-5 h-5 text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              {CONTACT_INFO.EMAIL}
            </span>
          </div>
          <div className="flex items-center justify-center group hover:scale-105 transition-transform duration-300">
            <Phone className="w-5 h-5 text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              {CONTACT_INFO.PHONE}
            </span>
          </div>
          <div className="flex items-center justify-center group hover:scale-105 transition-transform duration-300">
            <MapPin className="w-5 h-5 text-blue-400 mr-3 group-hover:bounce transition-all duration-300" />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              {CONTACT_INFO.LOCATION}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-6">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group"
          onClick={() => window.location.href = `mailto:${CONTACT_INFO.EMAIL}`}
        >
          <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
          Send Direct Email
        </Button>
        
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white p-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-xl hover:shadow-white/25 group"
            onClick={() => window.open(SOCIAL_LINKS.GITHUB, '_blank')}
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white p-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 group"
            onClick={() => window.open(SOCIAL_LINKS.LINKEDIN, '_blank')}
          >
            <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
        
        <Button
          onClick={onDownloadCV}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 group"
        >
          <Download className="w-5 h-5 mr-2 group-hover:bounce transition-all duration-300" />
          Download My CV
        </Button>
      </div>
    </div>
  );
}; 
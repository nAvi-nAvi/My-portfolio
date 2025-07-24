import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useCVDownload } from '@/hooks/useCVDownload';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { RainingTechnologies } from '@/components/RainingTechnologies';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { toast } = useToast();
  const { downloadCV } = useCVDownload();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewWork = (): void => {
    scrollToSection('projects');
  };

  const handleGetInTouch = (): void => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation onDownloadCV={downloadCV} />
      
      {/* Raining Technologies - will only show when past home section */}
      <RainingTechnologies />
      
      {/* Hero Section with Matrix Animation ONLY */}
      <div className="relative min-h-screen">
        <BackgroundEffects section="home" />
        <HeroSection 
          isVisible={isVisible} 
          onViewWork={handleViewWork} 
          onGetInTouch={handleGetInTouch} 
        />
      </div>
      
      {/* All other sections */}
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection onDownloadCV={downloadCV} />
      <Footer />
    </div>
  );
};

export default Index;

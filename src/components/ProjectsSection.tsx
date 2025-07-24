import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PROJECTS } from '@/constants';
import type { Project } from '@/types';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project: Project, index: number) => (
            <Card 
              key={project.title} 
              className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group animate-fade-in hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transform-3d hover:rotate-y-12`} 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4 group-hover:animate-pulse`}></div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-105">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {project.tech}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 
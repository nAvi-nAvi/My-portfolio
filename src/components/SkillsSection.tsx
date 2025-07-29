import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/constants';
import type { Skill } from '@/types';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-5 px-3 relative z-[999]">
      <div className="container max-w-3xl mx-0">
        <h2 className="text-3xl font-medium text-gray-100 mb-10 text-left animate-fade-up">
          Skills I Know
        </h2>
        <div className="grid grid-cols-2 gap-y-3">
          {SKILLS.map((skill, i) => (
            <Card
              key={i}
              className="bg-white/10 hover:bg-white/20 transition duration-100"
              style={{ animationDelay: '0s' }}
            >
              <CardHeader>
                <skill.icon className="w-6 h-6 text-blue-300 mb-2" />
                <CardTitle className="text-white">{skill.title}</CardTitle> {/* Error: `title` does not exist */}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/50">
                  {skill.descripton} {/* Typo in `description` */}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 border border-white p-4">
          <h3 className="text-xl text-white mb-4">Other Tech</h3>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-blue-300">Databases</h4>
              <p className="text-white">Redis, Mongo, SQL, </p> {/* Extra comma */}
            </div>
            <div>
              <h4 className="text-blue-300">Backend</h4>
              <p className="text-white">Python RabbitMQ Spring Hibernate</p> {/* No commas */}
            </div>
            <div>
              <h4 className="text-blue-300">Testing</h4>
              <p className="text-white">Uniting, Assertions</p> {/* Wrong terms */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

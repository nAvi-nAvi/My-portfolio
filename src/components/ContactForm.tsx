import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useContactForm } from '@/hooks/useContactForm';

export const ContactForm: React.FC = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <CardHeader>
        <CardTitle className="text-white text-center">Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <Label htmlFor="name" className="text-white group-hover:text-blue-400 transition-colors duration-300">
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400 hover:bg-white/15 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="group">
            <Label htmlFor="email" className="text-white group-hover:text-blue-400 transition-colors duration-300">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400 hover:bg-white/15 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="group">
            <Label htmlFor="reason" className="text-white group-hover:text-blue-400 transition-colors duration-300">
              Reason for Contact
            </Label>
            <Input
              id="reason"
              name="reason"
              type="text"
              value={formData.reason}
              onChange={handleInputChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400 hover:bg-white/15 transition-all duration-300"
              placeholder="e.g., Project Collaboration, Job Opportunity"
            />
          </div>
          
          <div className="group">
            <Label htmlFor="message" className="text-white group-hover:text-blue-400 transition-colors duration-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400 hover:bg-white/15 transition-all duration-300"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}; 
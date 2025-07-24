import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/secrets';
import { useToast } from '@/hooks/use-toast';
import type { ContactFormData, EmailJSResponse } from '@/types';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    name: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = (): void => {
    setFormData({
      email: '',
      name: '',
      reason: '',
      message: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    toast({
      title: "Sending Message...",
      description: "Please wait while we send your message.",
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reason: formData.reason,
        message: formData.message,
        to_name: "Navaneedha Krishnan",
        reply_to: formData.email,
      };

      const result: EmailJSResponse = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        resetForm();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit
  };
}; 
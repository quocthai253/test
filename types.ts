import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
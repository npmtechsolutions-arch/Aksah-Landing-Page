
// Import React to fix "Cannot find namespace 'React'" errors when using React.ReactNode.
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BusinessType {
  name: string;
  icon: React.ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  business: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

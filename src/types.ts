export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  experienceLevel: string;
  goal: string;
  message?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'booked' | 'archived';
}

export interface Coach {
  id: string;
  name: string;
  photo: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  achievements: string[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  schedule: string;
  imgUrl: string;
  ageGroup?: string;
  focus: string[];
}

export interface Transformation {
  id: string;
  name: string;
  beforeImg: string;
  afterImg: string;
  statLabel: string;
  statValue: string;
  achievement: string;
  quote: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'google' | 'academy';
  authorImg?: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  category: 'training' | 'classes' | 'coaches' | 'events' | 'competitions' | 'community';
  imgUrl: string;
  title: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

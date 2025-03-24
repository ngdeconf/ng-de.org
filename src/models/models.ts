export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  imageUrl: string;
  twitterHandle?: string;
  githubHandle?: string;
}

export interface Talk {
  id: string;
  title: string;
  abstract: string;
  speakerId: string;
  time: string;
  day: 'day1' | 'day2';
  room: string;
}

export interface Workshop {
  id: string;
  title: string;
  abstract: string;
  trainerId: string;
  duration: string;
  capacity: number;
}

export interface Ticket {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  available: boolean;
  availableUntil?: Date;
  features: string[];
  type: 'conference' | 'workshop' | 'combo' | 'online';
}
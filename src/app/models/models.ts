export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  imageUrl: string;
  githubHandle?: string;
  pronouns?: string;
  angularTeam?: boolean;
}

export interface ScheduleEntry {
  title: string;
  datetime: string;
  information: string;
  location: string;
  session: string | null;
}

export interface ScheduleDay {
  title: string;
  datetime: string;
  entries: ScheduleEntry[];
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
  teaser: string;
  benefits?: string[];
  trainerId: string;
  duration: string;
  capacity: number;
  outline?: {
    title: string;
    topics: string[];
  }[];
  targetAudience?: string;
  trainers?: string[];
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
  type: 'conference' | 'workshop' | 'bundle' | 'online';
}

export interface TicketPhase {
  name: string;
  startDate: Date;
  isActive: boolean;
  isPast: boolean;
  basePrice: number;
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  level: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Travel' | 'Community Partners';
}

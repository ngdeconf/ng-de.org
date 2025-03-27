import { Injectable, signal } from '@angular/core';
import { Speaker, Talk, Workshop, Ticket, TicketPhase, ScheduleDay } from '../models/models';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private readonly speakers = signal<Speaker[]>([
    {
      id: 'manfred-steyer',
      name: 'Manfred Steyer',
      title: 'ANGULARarchitects.io',
      company: 'ANGULARarchitects.io',
      bio: 'Trainer and Consultant with focus on Angular. Google Developer Expert (GDE) who writes for O\'Reilly, the German Java Magazine and windows.developer. Regularly speaks at conferences.',
      imageUrl: 'assets/images/speakers/manfred-steyer.jpg',
      twitterHandle: 'ManfredSteyer',
      githubHandle: 'manfredsteye'
    },
    {
      id: 'rainer-hahnekamp',
      name: 'Rainer Hahnekamp',
      title: 'Trainer and Consultant • GDE in Angular',
      company: 'Angular Architects',
      bio: 'Rainer Hahnekamp is a Google Developer Expert, working as a trainer and consultant in the expert network of Angular Architects. In addition, he offers a weekly brief overview of relevant events in the Angular ecosystem on YouTube through ng-news.',
      imageUrl: 'assets/images/speakers/rainer-hahnekamp.png',
      twitterHandle: 'rainerhahnekamp',
      githubHandle: 'rainerhahnekamp'
    },
    {
      id: 'michael-hladky',
      name: 'Michael Hladky',
      title: 'Push-based.io',
      company: 'Push-based.io',
      bio: 'Michael Hladky is a Google Developer Expert (GDE), Microsoft MVP, Nx champion, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.',
      imageUrl: 'assets/images/speakers/michael-hladky.jpg',
      twitterHandle: 'michael_hladky',
      githubHandle: 'BioPhoton'
    },
    {
      id: 'christian-liebel',
      name: 'Christian Liebel',
      title: 'Thinktecture',
      company: 'Thinktecture',
      bio: 'Christian Liebel is a developer helping enterprises and ISVs develop modern cross-platform business applications based on Angular. As a Microsoft MVP, Google GDE, and W3C Web Applications working group participant, he speaks about modern web technologies at international user groups and conferences.',
      imageUrl: 'assets/images/speakers/christian-liebel.png',
      twitterHandle: 'christianliebel',
      githubHandle: 'christianliebel'
    },
    {
      id: 'martina-kraus',
      name: 'Martina Kraus',
      title: 'Angular Consultant & Trainer',
      company: 'Independent',
      bio: 'Martina Kraus is a Google Developer Expert in Angular and web technologies. She is an Angular consultant and trainer with a focus on Angular applications. As a lecturer, she teaches at the Hochschule Mannheim. She is actively involved in the Angular community and speaks at international conferences.',
      imageUrl: 'assets/images/speakers/martina-kraus.png',
      twitterHandle: 'martinakraus11',
      githubHandle: 'martinakraus'
    },
    {
      id: 'maria-korneeva',
      name: 'Maria Korneeva',
      title: 'Angular Consultant & Developer',
      company: 'Independent',
      bio: 'Maria Korneeva is an experienced Angular developer and consultant specializing in building scalable web applications. She actively contributes to the Angular community through workshops, mentoring, and speaking at tech events.',
      imageUrl: 'assets/images/speakers/maria-korneeva.jpeg',
      twitterHandle: 'mariakorneeva',
      githubHandle: 'mariakorneeva'
    }
  ]);

  private readonly talks = signal<Talk[]>([
    {
      id: '1',
      title: 'The Future of Angular',
      abstract: 'Exploring the roadmap and exciting new features coming to Angular',
      speakerId: '1',
      time: '10:00 - 11:00',
      day: 'day1',
      room: 'Main Hall'
    },
    {
      id: '2',
      title: 'Signals Deep Dive',
      abstract: 'Understanding Angular Signals and their impact on reactive programming',
      speakerId: '5',
      time: '11:30 - 12:30',
      day: 'day1',
      room: 'Main Hall'
    },
    {
      id: '3',
      title: 'Building with the Newest Angular Features',
      abstract: 'Practical examples using the latest Angular features',
      speakerId: '3',
      time: '14:00 - 15:00',
      day: 'day1',
      room: 'Room A'
    },
    {
      id: '4',
      title: 'Performance Optimization in Angular',
      abstract: 'Techniques to make your Angular apps blazing fast',
      speakerId: '1',
      time: '15:30 - 16:30',
      day: 'day1',
      room: 'Room B'
    },
    {
      id: '5',
      title: 'Angular and the Modern Web Platform',
      abstract: 'How Angular leverages modern web platform features',
      speakerId: '2',
      time: '10:00 - 11:00',
      day: 'day2',
      room: 'Main Hall'
    },
    {
      id: '6',
      title: 'Component Architecture Best Practices',
      abstract: 'Designing maintainable component architectures',
      speakerId: '4',
      time: '11:30 - 12:30',
      day: 'day2',
      room: 'Room A'
    },
    {
      id: '7',
      title: 'Angular SSR and Hydration',
      abstract: 'Server-side rendering and hydration techniques in Angular',
      speakerId: '5',
      time: '14:00 - 15:00',
      day: 'day2',
      room: 'Main Hall'
    },
    {
      id: '8',
      title: 'Building Accessible Angular Applications',
      abstract: 'Best practices for creating accessible Angular applications',
      speakerId: '6',
      time: '15:30 - 16:30',
      day: 'day2',
      room: 'Room B'
    }
  ]);

  private readonly workshops = signal<Workshop[]>([
    {
      id: '1',
      title: 'Angular Signals Masterclass',
      abstract: 'A deep dive into Angular Signals with hands-on exercises',
      trainerId: '1',
      duration: '6 hours',
      capacity: 30
    },
    {
      id: '2',
      title: 'Building Angular Applications with Server-Side Rendering',
      abstract: 'Learn how to build performant SSR Angular applications',
      trainerId: '5',
      duration: '6 hours',
      capacity: 25
    },
    {
      id: '3',
      title: 'Angular Testing Workshop',
      abstract: 'Master testing strategies for Angular applications',
      trainerId: '4',
      duration: '4 hours',
      capacity: 20
    },
    {
      id: '4',
      title: 'Advanced Component Patterns',
      abstract: 'Explore advanced component patterns and best practices',
      trainerId: '6',
      duration: '4 hours',
      capacity: 25
    }
  ]);

  private ticketPhasesSubject = new BehaviorSubject<TicketPhase[]>([
    {
      name: 'Super Early Bird',
      startDate: new Date('2025-03-01'),
      isActive: false,
      isPast: false,
      basePrice: 599
    },
    {
      name: 'Early Bird',
      startDate: new Date('2025-05-01'),
      isActive: false,
      isPast: false,
      basePrice: 699
    },
    {
      name: 'Normal Bird',
      startDate: new Date('2025-07-01'),
      isActive: false,
      isPast: false,
      basePrice: 799
    },
    {
      name: 'Final Bird',
      startDate: new Date('2025-10-01'),
      isActive: false,
      isPast: false,
      basePrice: 899
    }
  ]);

  private readonly schedule = signal<ScheduleDay[]>([
    {
      title: 'Wednesday',
      datetime: '2025-11-05',
      entries: [
        {
          title: 'Workshop 1',
          datetime: '2025-11-05T09:00:00',
          information: 'Workshop 1',
          location: 'GLS Campus Berlin',
          session: 'workshop-1'
        },
        {
          title: 'Workshop 2',
          datetime: '2025-11-05T09:00:00',
          information: 'Workshop 2',
          location: 'GLS Campus Berlin',
          session: 'workshop-2'
        },
        {
          title: 'Workshop 3',
          datetime: '2025-11-05T09:00:00',
          information: 'Workshop 3',
          location: 'GLS Campus Berlin',
          session: 'workshop-3'
        },
        {
          title: 'Workshop 4',
          datetime: '2025-11-05T09:00:00',
          information: 'Workshop 4',
          location: 'GLS Campus Berlin',
          session: 'workshop-4'
        },
        {
          title: 'Workshop 5',
          datetime: '2025-11-05T09:00:00',
          information: 'Workshop 5',
          location: 'GLS Campus Berlin',
          session: 'workshop-5'
        },
        {
          title: 'Workshop 6',
          datetime: '2025-11-05T09:00:00',
          information: 'Workshop 6',
          location: 'GLS Campus Berlin',
          session: 'workshop-6'
        }
      ]
    },
    {
      title: 'Thursday',
      datetime: '2025-11-06',
      entries: [
        {
          title: 'Open Doors',
          datetime: '2025-11-06T09:00:00',
          information: 'Registration',
          location: 'GLS Campus Berlin',
          session: null
        },
        {
          title: 'Warm Welcome',
          datetime: '2025-11-06T09:40:00',
          information: 'Welcome',
          location: 'Main Stage',
          session: null
        },
        {
          title: 'Keynote Talk',
          datetime: '2025-11-06T10:00:00',
          information: 'Talk 1',
          location: 'Main Stage',
          session: 'talk-1'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T10:30:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-2'
        },
        {
          title: 'Break ☕️🍎',
          datetime: '2025-11-06T11:00:00',
          information: '☕️🍎',
          location: 'Sponsoring Hall & Catering Area',
          session: 'talk-3'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T11:45:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-2'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T12:15:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-3'
        },
        {
          title: 'Lunch 🥙🥤',
          datetime: '2025-11-06T12:45:00',
          information: 'Lunch',
          location: 'Sponsoring Hall & Catering Area',
          session: 'talk-3'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:15:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-5'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:45:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-6'
        },
        {
          title: 'Break ☕️🍰',
          datetime: '2025-11-06T15:45:00',
          information: '',
          location: 'Sponsoring Hall & Catering Area',
          session: 'break'
        },
        {
          title: 'Talk 7',
          datetime: '2025-11-06T16:30:00',
          information: 'Talk 7',
          location: 'Main Stage',
          session: 'talk-7'
        },
        {
          title: 'Panel Discussion',
          datetime: '2025-11-06T17:00:00',
          information: 'Talk 8',
          location: 'Main Stage',
          session: 'talk-8'
        },
        {
          title: 'Closing Day 1',
          datetime: '2025-11-06T17:30:00',
          information: 'Talk 12',
          location: 'Main Stage',
          session: 'closing-day-1'
        },
        {
          title: 'Get together',
          datetime: '2025-11-06T18:00:00',
          information: '',
          location: 'GLS Campus',
          session: 'get-together'
        }
      ]
    },
    {
      title: 'Friday',
      datetime: '2025-11-07',
      entries: [
        {
          title: 'Talk 13',
          datetime: '2025-11-07T09:00:00',
          information: 'Talk 13',
          location: 'GLS Campus Berlin',
          session: 'talk-13'
        },
        {
          title: 'Talk 14',
          datetime: '2025-11-07T10:00:00',
          information: 'Talk 14',
          location: 'GLS Campus Berlin',
          session: 'talk-14'
        },
        {
          title: 'Talk 15',
          datetime: '2025-11-07T11:00:00',
          information: 'Talk 15',
          location: 'GLS Campus Berlin',
          session: 'talk-15'
        },
        {
          title: 'Talk 16',
          datetime: '2025-11-07T12:00:00',
          information: 'Talk 16',
          location: 'GLS Campus Berlin',
          session: 'talk-16'
        },
        {
          title: 'Talk 17',
          datetime: '2025-11-07T13:00:00',
          information: 'Talk 17',
          location: 'GLS Campus Berlin',
          session: 'talk-17'
        },
        {
          title: 'Talk 18',
          datetime: '2025-11-07T14:00:00',
          information: 'Talk 18',
          location: 'GLS Campus Berlin',
          session: 'talk-18'
        },
        {
          title: 'Talk 19',
          datetime: '2025-11-07T15:00:00',
          information: 'Talk 19',
          location: 'GLS Campus Berlin',
          session: 'talk-19'
        },
        {
          title: 'Talk 20',
          datetime: '2025-11-07T16:00:00',
          information: 'Talk 20',
          location: 'GLS Campus Berlin',
          session: 'talk-20'
        },
        {
          title: 'Talk 21',
          datetime: '2025-11-07T17:00:00',
          information: 'Talk 21',
          location: 'GLS Campus Berlin',
          session: 'talk-21'
        },
        {
          title: 'Talk 22',
          datetime: '2025-11-07T18:00:00',
          information: 'Talk 22',
          location: 'GLS Campus Berlin',
          session: 'talk-22'
        },
        {
          title: 'Talk 23',
          datetime: '2025-11-07T19:00:00',
          information: 'Talk 23',
          location: 'GLS Campus Berlin',
          session: 'talk-23'
        },
        {
          title: 'Talk 24',
          datetime: '2025-11-07T20:00:00',
          information: 'Talk 24',
          location: 'GLS Campus Berlin',
          session: 'talk-24'
        }
      ]
    }
  ]);

  constructor() {
    this.updatePhases();
  }

  getTicketPhases(): Observable<TicketPhase[]> {
    return this.ticketPhasesSubject.asObservable();
  }

  getCurrentPhase(): Observable<TicketPhase | undefined> {
    return this.getTicketPhases().pipe(
      map(phases => phases.find(phase => phase.isActive))
    );
  }

  private updatePhases() {
    const now = new Date();
    let foundActive = false;

    const phases = this.ticketPhasesSubject.value
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
      .map(phase => ({ ...phase }));

    // Go through phases in reverse to find current active phase
    for (let i = phases.length - 1; i >= 0; i--) {
      const phase = phases[i];
      
      if (!foundActive && now >= phase.startDate) {
        phase.isActive = true;
        phase.isPast = false;
        foundActive = true;
      } else {
        phase.isActive = false;
        phase.isPast = now >= phase.startDate;
      }
    }

    this.ticketPhasesSubject.next(phases);
    this.updateTicketPrices(phases);
  }

  private updateTicketPrices(phases: TicketPhase[]) {
    const currentPhase = phases.find(phase => phase.isActive);
    if (!currentPhase) return;

    const tickets = this.tickets();
    const updatedTickets = tickets.map(ticket => {
      const newTicket = { ...ticket };
      
      switch (ticket.type) {
        case 'conference':
          newTicket.price = currentPhase.basePrice;
          break;
        case 'workshop':
          newTicket.price = currentPhase.basePrice - 200; // Workshop premium
          break;
        case 'bundle':
          newTicket.price = currentPhase.basePrice + 400; // Bundle premium
          break;
      }
      
      return newTicket;
    });

    this.tickets.set(updatedTickets);
  }

  private readonly tickets = signal<Ticket[]>([
    {
      id: '1',
      name: 'Conference Ticket',
      description: 'Full access to all conference talks and networking events',
      price: 599, // Will be updated based on current phase
      currency: 'EUR',
      available: true,
      features: [
        'Access to all conference talks',
        'Conference swag',
        'Lunch and refreshments',
        'Evening networking event'
      ],
      type: 'conference'
    },
    {
      id: '2',
      name: 'Conference + Workshop Bundle',
      description: 'Full conference access plus your choice of one workshop',
      price: 799, // Will be updated based on current phase
      currency: 'EUR',
      available: true,
      features: [
        'Everything in Conference Ticket',
        'Access to one workshop of your choice',
        'Workshop materials',
        'Certificate of completion'
      ],
      type: 'bundle'
    },
    {
      id: '3',
      name: 'Workshop Only',
      description: 'Access to one workshop of your choice',
      price: 399, // Will be updated based on current phase
      currency: 'EUR',
      available: true,
      features: [
        'Full day workshop access',
        'Workshop materials',
        'Lunch and refreshments',
        'Certificate of completion'
      ],
      type: 'workshop'
    }
  ]);

  getSpeakers() {
    return this.speakers;
  }

  getTalks() {
    return this.talks;
  }

  getWorkshops() {
    return this.workshops;
  }

  getTickets() {
    return this.tickets;
  }

  getSpeakerById(id: string): Speaker | undefined {
    return this.speakers().find(speaker => speaker.id === id);
  }

  getSchedule() {
    return this.schedule;
  }
}
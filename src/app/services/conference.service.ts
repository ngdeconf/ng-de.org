import { Injectable, signal } from '@angular/core';
import { Speaker, Talk, Workshop, Ticket, TicketPhase } from '../models/models';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private readonly speakers = signal<Speaker[]>([
    {
      id: '1',
      name: 'Minko Gechev',
      title: 'Engineering Lead',
      company: 'Angular Team at Google',
      bio: 'Minko is an Engineering Lead on the Angular team at Google...',
      imageUrl: 'https://avatars.githubusercontent.com/u/849095?v=4',
      twitterHandle: 'mgechev',
      githubHandle: 'mgechev'
    },
    {
      id: '2',
      name: 'Igor Minar',
      title: 'Angular Lead',
      company: 'Google',
      bio: 'Igor is the Angular Team lead at Google...',
      imageUrl: 'https://avatars.githubusercontent.com/u/216296?v=4',
      twitterHandle: 'IgorMinar',
      githubHandle: 'IgorMinar'
    },
    {
      id: '3',
      name: 'Emma Twersky',
      title: 'Developer Relations Engineer',
      company: 'Google',
      bio: 'Emma is a Developer Relations Engineer at Google focused on Angular...',
      imageUrl: 'https://avatars.githubusercontent.com/u/11019579?v=4',
      twitterHandle: 'emmaTwersky',
      githubHandle: 'emmaTwersky'
    },
    {
      id: '4',
      name: 'Deborah Kurata',
      title: 'Software Developer',
      company: 'Independent',
      bio: 'Deborah is an independent software developer...',
      imageUrl: 'https://avatars.githubusercontent.com/u/7105159?v=4',
      twitterHandle: 'DeborahKurata',
      githubHandle: 'DeborahKurata'
    },
    {
      id: '5',
      name: 'Alex Rickabaugh',
      title: 'Software Engineer',
      company: 'Google',
      bio: 'Alex is a software engineer on the Angular team at Google...',
      imageUrl: 'https://avatars.githubusercontent.com/u/11527635?v=4',
      twitterHandle: 'AlexRickabaugh',
      githubHandle: 'alxhub'
    },
    {
      id: '6',
      name: 'Natalia Venditto',
      title: 'Principal Developer Advocate',
      company: 'Microsoft',
      bio: 'Natalia is a Principal Developer Advocate at Microsoft...',
      imageUrl: 'https://avatars.githubusercontent.com/u/11398972?v=4',
      twitterHandle: 'NataliaVenditto',
      githubHandle: 'anfibiacreativa'
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
          newTicket.price = currentPhase.basePrice + 300; // Workshop premium
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
      price: 599, // Will be updated based on current phase
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
}
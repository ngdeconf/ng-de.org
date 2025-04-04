import { Injectable, signal } from '@angular/core';
import { ScheduleDay, Speaker, Talk, Ticket } from '../models/models';
import { SpeakerService } from './speaker.service';
import { TicketPhaseService } from './ticket-phase.service';
import { WorkshopService } from './workshop.service';

@Injectable({ providedIn: 'root' })
export class ConferenceService {
  private readonly talks = signal<Talk[]>([
    {
      id: '1',
      title:
        "The Missing Link in Angular's Signal Story: Resource API and httpResource",
      abstract:
        "Signals will shape Angular's future in terms of reactivity and change detection. The new Resource API, along with the httpResource, adds an essential piece to this story by providing an official solution for asynchronously loading data within a Signal-based dataflow.\n\nIn this session, we explore all the details you need to work effectively with this powerful API. Topics include managing different states, handling errors, streaming data, preventing race conditions, and canceling unnecessary requests. We also discuss how it interacts with RxJS through rxResource and demonstrate how to update loaded values.\n\nBy the end, you'll have a comprehensive understanding of the possibilities offered by this groundbreaking new API.",
      speakerId: 'manfred-steyer',
      time: '10:00 - 11:00',
      day: 'day1',
      room: 'Main Hall'
    },
    {
      id: '2',
      title: 'Signals Deep Dive',
      abstract:
        'Understanding Angular Signals and their impact on reactive programming',
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

  private readonly schedule = signal<ScheduleDay[]>([
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
      name: 'Conference + Workshop',
      description: 'Full conference access plus one workshop',
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

  constructor(
    private ticketPhaseService: TicketPhaseService,
    private workshopService: WorkshopService,
    private speakerService: SpeakerService
  ) {
    this.updateTicketPrices();
  }

  /**
   * Forward method to TicketPhaseService
   */
  getTicketPhases() {
    return this.ticketPhaseService.getTicketPhases();
  }

  /**
   * Forward method to TicketPhaseService
   */
  getCurrentPhase() {
    return this.ticketPhaseService.getCurrentPhase();
  }

  /**
   * Updates the ticket prices based on the current phase
   */
  private updateTicketPrices() {
    const tickets = this.tickets();
    const updatedTickets = tickets.map(ticket => {
      const newTicket = { ...ticket };
      newTicket.price = this.ticketPhaseService.calculateTicketPrice(
        ticket.type
      );
      return newTicket;
    });

    this.tickets.set(updatedTickets);
  }

  /**
   * Forward method to SpeakerService
   */
  getSpeakers() {
    return this.speakerService.getSpeakers();
  }

  getTalks() {
    return this.talks;
  }

  /**
   * Forward method to WorkshopService
   */
  getWorkshops() {
    return this.workshopService.getWorkshops();
  }

  /**
   * Forward method to WorkshopService
   */
  getWorkshopById(id: string) {
    return this.workshopService.getWorkshopById(id);
  }

  /**
   * Forward method to WorkshopService
   */
  getWorkshopsByTrainerId(trainerId: string) {
    return this.workshopService.getWorkshopsByTrainerId(trainerId);
  }

  getTickets() {
    return this.tickets;
  }

  /**
   * Forward method to SpeakerService
   */
  getSpeakerById(id: string): Speaker | undefined {
    return this.speakerService.getSpeakerById(id);
  }

  getSchedule() {
    return this.schedule;
  }
}

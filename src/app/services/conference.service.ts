import { Injectable, signal } from '@angular/core';
import { ScheduleDay, Speaker, Talk, Ticket } from '../models/models';
import { ScheduleService } from './schedule.service';
import { SpeakerService } from './speaker.service';
import { TalkService } from './talk.service';
import { TicketPhaseService } from './ticket-phase.service';
import { WorkshopService } from './workshop.service';

@Injectable({ providedIn: 'root' })
export class ConferenceService {
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
    private speakerService: SpeakerService,
    private talkService: TalkService,
    private scheduleService: ScheduleService
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

  /**
   * Forward method to TalkService
   */
  getTalks() {
    return this.talkService.getTalks();
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

  /**
   * Forward method to ScheduleService
   */
  getSchedule() {
    return this.scheduleService.getSchedule();
  }

  /**
   * Forward method to TalkService
   */
  getTalkById(id: string): Talk | undefined {
    return this.talkService.getTalkById(id);
  }

  /**
   * Forward method to ScheduleService
   */
  getScheduleByDay(date: string): ScheduleDay | undefined {
    return this.scheduleService.getScheduleByDay(date);
  }
}

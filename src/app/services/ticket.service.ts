import { Injectable, signal } from '@angular/core';
import { Ticket } from '../models/models';
import { TicketPhaseService } from './ticket-phase.service';

@Injectable({ providedIn: 'root' })
export class TicketService {
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

  constructor(private ticketPhaseService: TicketPhaseService) {
    this.updateTicketPrices();
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
   * Returns the signal containing all tickets
   */
  getTickets() {
    return this.tickets;
  }

  /**
   * Returns a ticket by ID or undefined if not found
   */
  getTicketById(id: string): Ticket | undefined {
    return this.tickets().find(ticket => ticket.id === id);
  }
}

import { computed, Injectable, signal } from '@angular/core';
import { TicketPhase } from '../models/models';

@Injectable({ providedIn: 'root' })
export class TicketPhaseService {
  private readonly ticketPhases = signal<TicketPhase[]>([
    {
      name: 'Super Early Bird',
      startDate: new Date('2025-04-01'),
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
      name: 'Upgrade Bird',
      startDate: new Date('2025-07-01'),
      isActive: false,
      isPast: false,
      basePrice: 699
    },
    {
      name: 'Regular Ticket',
      startDate: new Date('2025-09-01'),
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

  readonly currentPhase = computed(() => {
    return this.ticketPhases().find(phase => phase.isActive);
  });

  constructor() {
    this.updatePhases();
  }

  getTicketPhases() {
    return this.ticketPhases;
  }

  getCurrentPhase() {
    return this.currentPhase;
  }

  /**
   * Updates the ticket phases based on the current date
   * and marks the appropriate phase as active
   */
  updatePhases() {
    const now = new Date();
    let foundActive = false;

    const phases = [...this.ticketPhases()]
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

    this.ticketPhases.set(phases);
  }

  /**
   * Calculates the price for a specific ticket type based on the current phase
   * @param ticketType The type of ticket
   * @param basePrice Optional base price to use instead of current phase price
   * @returns The calculated ticket price
   */
  calculateTicketPrice(
    ticketType: 'conference' | 'workshop' | 'bundle' | 'online',
    basePrice?: number
  ): number {
    const currentPhase = this.currentPhase();
    if (!currentPhase && !basePrice) return 0;

    const basePriceToUse = basePrice ?? currentPhase!.basePrice;

    switch (ticketType) {
      case 'conference':
        return basePriceToUse;
      case 'workshop':
        return basePriceToUse - 200; // Workshop premium
      case 'bundle':
        return basePriceToUse + 300; // Bundle premium
      case 'online':
        return basePriceToUse - 400; // Online discount
      default:
        return basePriceToUse;
    }
  }
}

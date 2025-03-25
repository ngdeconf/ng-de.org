import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TicketPhase {
  name: string;
  startDate: Date;
  isActive: boolean;
  isPast: boolean;
}

@Component({
  selector: 'app-ticket-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-timeline.component.html'
})
export class TicketTimelineComponent {
  ticketPhases: TicketPhase[] = [
    {
      name: 'Super Early Bird',
      startDate: new Date('2025-04-01'),
      isActive: false,
      isPast: false
    },
    {
      name: 'Early Bird',
      startDate: new Date('2025-05-01'),
      isActive: false,
      isPast: false
    },
    {
      name: 'Normal Bird',
      startDate: new Date('2025-07-01'),
      isActive: false,
      isPast: false
    },
    {
      name: 'Final Bird',
      startDate: new Date('2025-10-01'),
      isActive: false,
      isPast: false
    }
  ];

  constructor() {
    this.updatePhases();
  }

  private updatePhases() {
    const now = new Date();
    let foundActive = false;

    // Sort phases by date to ensure correct order
    this.ticketPhases.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    // Go through phases in reverse to find current active phase
    for (let i = this.ticketPhases.length - 1; i >= 0; i--) {
      const phase = this.ticketPhases[i];
      
      if (!foundActive && now >= phase.startDate) {
        phase.isActive = true;
        phase.isPast = false;
        foundActive = true;
      } else {
        phase.isActive = false;
        phase.isPast = now >= phase.startDate;
      }
    }
  }
} 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TicketPhase {
  name: string;
  startDate: Date;
  isActive: boolean;
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
      startDate: new Date('2024-02-05'),
      isActive: false
    },
    {
      name: 'Early Bird',
      startDate: new Date('2024-04-08'),
      isActive: false
    },
    {
      name: 'Normal Bird',
      startDate: new Date('2024-06-17'),
      isActive: false
    },
    {
      name: 'Final Bird',
      startDate: new Date('2024-10-28'),
      isActive: false
    }
  ];

  constructor() {
    this.updateActivePhase();
  }

  private updateActivePhase() {
    const now = new Date();
    for (let i = this.ticketPhases.length - 1; i >= 0; i--) {
      if (now >= this.ticketPhases[i].startDate) {
        this.ticketPhases[i].isActive = true;
        break;
      }
    }
  }
} 
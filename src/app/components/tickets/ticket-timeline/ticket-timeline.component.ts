import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-ticket-timeline',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './ticket-timeline.component.html',
  styles: `
    @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .animate-scale-in {
    animation: scale-in 0.3s ease-out;
  }
  `
})
export class TicketTimelineComponent {
  ticketPhases$ = this.conferenceService.getTicketPhases();

  constructor(private conferenceService: ConferenceService) {}
}

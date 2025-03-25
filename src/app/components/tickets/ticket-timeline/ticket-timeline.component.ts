import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../../services/conference.service';

@Component({
  selector: 'app-ticket-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-timeline.component.html'
})
export class TicketTimelineComponent {
  ticketPhases$ = this.conferenceService.getTicketPhases();
  
  constructor(private conferenceService: ConferenceService) {}
} 
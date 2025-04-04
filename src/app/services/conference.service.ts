import { Injectable } from '@angular/core';
import { TicketPhaseService } from './ticket-phase.service';
import { TicketService } from './ticket.service';

/**
 * @deprecated This service is being phased out. Use the specific services directly instead:
 * - SpeakerService for speaker data
 * - TalkService for talk data
 * - ScheduleService for schedule data
 * - WorkshopService for workshop data
 * - TicketService for ticket data
 * - TicketPhaseService for ticket phase data
 */
@Injectable({ providedIn: 'root' })
export class ConferenceService {
  constructor(
    private ticketPhaseService: TicketPhaseService,
    private ticketService: TicketService
  ) {}

  /**
   * @deprecated Use TicketPhaseService.getTicketPhases() directly
   */
  getTicketPhases() {
    return this.ticketPhaseService.getTicketPhases();
  }

  /**
   * @deprecated Use TicketPhaseService.getCurrentPhase() directly
   */
  getCurrentPhase() {
    return this.ticketPhaseService.getCurrentPhase();
  }

  /**
   * @deprecated Use TicketService.getTickets() directly
   */
  getTickets() {
    return this.ticketService.getTickets();
  }
}

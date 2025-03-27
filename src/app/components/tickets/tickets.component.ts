import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../services/conference.service';
import { Ticket } from '../../models/models';
import { TicketTimelineComponent } from './ticket-timeline/ticket-timeline.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, TicketTimelineComponent],
  template: `
    <section id="tickets" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join us for the premier Angular conference in Germany. Secure your spot today!
          </p>
        </div>

        <app-ticket-timeline/> 
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (ticket of tickets(); track ticket.id) {
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border-t-4"
                [class.border-green-500]="ticket.type === 'conference'"
                [class.border-blue-500]="ticket.type === 'workshop'"
                [class.border-purple-500]="ticket.type === 'bundle'"
                [class.border-yellow-500]="ticket.type === 'online'"
                [class.opacity-75]="!ticket.available">
              <div class="p-6">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-xl font-bold mb-2">{{ ticket.name }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">{{ ticket.description }}</p>
                  </div>
                  
                  @if (isEarlyBird(ticket)) {
                    <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Early Bird
                    </span>
                  } @else if (!ticket.available) {
                    <span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Sold Out
                    </span>
                  } @else if (ticket.type === 'online') {
                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Online
                    </span>
                  }
                </div>
                
                <div class="mb-6">
                  <p class="text-3xl font-bold text-primary-500">
                    {{ ticket.price }} {{ ticket.currency }}
                  </p>
                  @if (ticket.availableUntil && ticket.available) {
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available until {{ formatDate(ticket.availableUntil) }}
                    </p>
                  }
                </div>
                
                <ul class="mb-8 space-y-3">
                  @for (feature of ticket.features; track $index) {
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                    </li>
                  }
                </ul>
                
                <a href="https://ti.to/ng-de/berlin-2025" target="_blank">
                  <button 
                    [disabled]="!ticket.available"
                    [class.opacity-50]="!ticket.available"
                    [class.cursor-not-allowed]="!ticket.available"
                    class="w-full cta-button rotate-gradient flex justify-center items-center">
                    @if (ticket.available) {
                      Get Ticket
                    } @else {
                      Sold Out
                    }
                  </button>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TicketsComponent {
  tickets = this.conferenceService.getTickets();
  
  constructor(private conferenceService: ConferenceService) {}
  
  isEarlyBird(ticket: Ticket): boolean {
    return ticket.name.toLowerCase().includes('early-bird') && ticket.available;
  }
  
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }
}
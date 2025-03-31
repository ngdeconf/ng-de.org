import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ticket } from '../../models/models';
import { ConferenceService } from '../../services/conference.service';
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
            Join us for the premier Angular conference in Germany. Secure your
            spot today!
          </p>
        </div>

        <app-ticket-timeline />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (ticket of tickets(); track ticket.id) {
          <div
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl border-t-4 grid grid-rows-[1fr_auto]"
            [class.border-[#e40341]]="ticket.type === 'conference'"
            [class.border-[#f034e0]]="ticket.type === 'workshop'"
            [class.border-[#921bf2]]="ticket.type === 'bundle'"
            [class.border-[#2192d1]]="ticket.type === 'online'"
            [class.opacity-75]="!ticket.available"
          >
            <div class="p-6 flex flex-col">
              <!-- Header with Badge -->
              <div class="flex justify-between items-start mb-6">
                <div>
                  <h3
                    class="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
                  >
                    {{ ticket.name }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ ticket.description }}
                  </p>
                </div>

                @if (isEarlyBird(ticket)) {
                <span
                  class="bg-[#e40341] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  Early Bird
                </span>
                } @else if (!ticket.available) {
                <span
                  class="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >
                  Sold Out
                </span>
                } @else if (ticket.type === 'online') {
                <span
                  class="bg-[#2192d1]/10 text-[#2192d1] text-xs font-medium px-3 py-1 rounded-full"
                >
                  Online
                </span>
                }
              </div>

              <!-- Price Section -->
              <div class="mb-8">
                <p class="text-4xl font-bold text-[#e40341]">
                  {{ ticket.price }} {{ ticket.currency }}
                </p>
                @if (ticket.availableUntil && ticket.available) {
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Available until {{ formatDate(ticket.availableUntil) }}
                </p>
                }
              </div>

              <!-- Features List -->
              <ul class="space-y-4 mb-8">
                @for (feature of ticket.features; track $index) {
                <li class="flex items-start group/item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3 text-[#e40341] mt-0.5 transform group-hover/item:scale-110 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span
                    class="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors"
                  >
                    {{ feature }}
                  </span>
                </li>
                }
              </ul>
            </div>

            <!-- Button Section -->
            <div class="px-6 pb-6">
              <a
                href="https://ti.to/ng-de/berlin-2025"
                target="_blank"
                class="block"
              >
                <button
                  [disabled]="!ticket.available"
                  [class.opacity-50]="!ticket.available"
                  [class.cursor-not-allowed]="!ticket.available"
                  class="w-full cta-button rotate-gradient flex justify-center items-center group/button"
                >
                  <span class="relative z-10">
                    @if (ticket.available) { Get Ticket } @else { Sold Out }
                  </span>
                  <div
                    class="absolute inset-0 bg-[#e40341] opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 rounded-lg"
                  ></div>
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

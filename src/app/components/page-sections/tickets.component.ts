import { Component, computed, effect, signal } from '@angular/core';
import { Ticket } from '../../models/models';
import { ConferenceService } from '../../services/conference.service';
import { TicketPhaseService } from '../../services/ticket-phase.service';
import { TicketTimelineComponent } from './ticket-timeline.component';

@Component({
  selector: 'app-tickets',
  imports: [TicketTimelineComponent],
  template: `
    <section id="tickets" class="py-28 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join us for the premier Angular conference in Germany. Secure your
            spot today!
          </p>
        </div>

        <app-ticket-timeline />

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          @for (ticket of sortedTickets(); track ticket.id) {
          <div class="relative">
            @if (ticket.type === 'bundle') {
            <div
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#921bf2] to-[#f034e0] px-6 py-2 rounded-full shadow-lg z-10"
            >
              <span class="text-white font-semibold text-sm tracking-wide"
                >Best Value</span
              >
            </div>
            }
            <div
              class="rounded-2xl shadow-lg overflow-hidden border-t-4 grid grid-rows-[1fr_auto] h-full"
              [class.bg-white]="ticket.type !== 'bundle'"
              [class.dark:bg-gray-800]="ticket.type !== 'bundle'"
              [class.bg-gray-900]="ticket.type === 'bundle'"
              [class.dark:bg-white]="ticket.type === 'bundle'"
              [class.border-[#e40341]]="ticket.type === 'conference'"
              [class.border-[#f034e0]]="ticket.type === 'workshop'"
              [class.border-[#921bf2]]="ticket.type === 'bundle'"
              [class.border-[#2192d1]]="ticket.type === 'online'"
              [class.opacity-75]="!ticket.available"
            >
              <div class="p-8 flex flex-col">
                <!-- Header with Badge -->
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      class="text-2xl font-bold mb-2"
                      [class.text-gray-900]="ticket.type !== 'bundle'"
                      [class.dark:text-white]="ticket.type !== 'bundle'"
                      [class.text-white]="ticket.type === 'bundle'"
                      [class.dark:text-gray-900]="ticket.type === 'bundle'"
                    >
                      {{
                        ticket.name === 'Conference Ticket'
                          ? 'Conference Only'
                          : ticket.name
                      }}
                    </h3>
                    <p
                      [class.text-gray-600]="ticket.type !== 'bundle'"
                      [class.dark:text-gray-400]="ticket.type !== 'bundle'"
                      [class.text-gray-300]="ticket.type === 'bundle'"
                      [class.dark:text-gray-600]="ticket.type === 'bundle'"
                    >
                      {{ ticket.description }}
                    </p>
                  </div>

                  @if (!ticket.available) {
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
                  @if (!isFinalBirdPhase() && (ticket.type === 'conference' ||
                  ticket.type === 'bundle' || ticket.type === 'workshop')) {
                  <div class="flex items-end gap-3">
                    <p class="text-4xl font-bold text-[#e40341]">
                      {{ ticket.price }} {{ ticket.currency }}
                    </p>
                    <div class="flex flex-col items-start">
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        instead of
                      </p>
                      <div class="relative">
                        <p class="text-xl text-gray-500 dark:text-gray-400">
                          {{ ticketFinalPrices()[ticket.id] }}
                          {{ ticket.currency }}
                        </p>
                        <!-- Subtle line through price -->
                        <div class="absolute inset-0 flex items-center">
                          <div class="h-[1px] w-full bg-[#e40341]/40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mt-2 inline-block bg-[#e40341]/10 px-3 py-1 rounded-lg"
                  >
                    <p
                      class="text-sm font-medium text-[#e40341] whitespace-nowrap"
                    >
                      Save {{ ticketSavings()[ticket.id] }}
                      {{ ticket.currency }}
                    </p>
                  </div>
                  } @else {
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-[#e40341]"
                      >Regular Price</span
                    >
                    <p class="text-4xl font-bold text-[#e40341]">
                      {{ ticket.price }} {{ ticket.currency }}
                    </p>
                  </div>
                  } @if (ticket.availableUntil && ticket.available) {
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Available until {{ formatDate(ticket.availableUntil) }}
                  </p>
                  }
                </div>

                <!-- Features List -->
                <div class="space-y-6">
                  <div class="space-y-4">
                    <h4
                      class="font-semibold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      What's Included
                    </h4>
                    <ul class="space-y-4">
                      @for (feature of ticket.features; track $index) {
                      <li class="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-3 mt-0.5"
                          [class.text-[#e40341]]="ticket.type !== 'bundle'"
                          [class.text-[#f034e0]]="ticket.type === 'bundle'"
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
                          [class.text-gray-700]="ticket.type !== 'bundle'"
                          [class.dark:text-gray-300]="ticket.type !== 'bundle'"
                          [class.text-gray-200]="ticket.type === 'bundle'"
                          [class.dark:text-gray-700]="ticket.type === 'bundle'"
                        >
                          {{ feature }}
                        </span>
                      </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Button Section -->
              <div class="px-6 pb-6">
                <a
                  href="https://ti.to/ng-de/berlin-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block"
                >
                  <button
                    [disabled]="!ticket.available"
                    [class.opacity-50]="!ticket.available"
                    [class.cursor-not-allowed]="!ticket.available"
                    class="w-full text-white font-medium px-8 py-3.5 rounded-lg flex justify-center items-center"
                    [class.bg-[#e40341]]="ticket.available"
                    [class.hover:bg-[#c90339]]="ticket.available"
                    [class.bg-gray-400]="!ticket.available"
                    style="transition: background-color 0.2s ease"
                  >
                    <span class="relative z-10 font-semibold text-center">
                      @if (ticket.available) { Get Ticket } @else { Sold Out }
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `/* Component styles here */`
})
export class TicketsComponent {
  tickets = this.conferenceService.getTickets();
  finalPrice = signal(899); // Default value for Final Bird phase
  ticketFinalPrices = signal<Record<string, number>>({});
  ticketSavings = signal<Record<string, number>>({});

  sortedTickets = computed(() => {
    // Sort tickets based on price or other criteria
    return [...this.tickets()].sort((a, b) => {
      // Sort by price, lowest first
      return a.price - b.price;
    });
  });

  constructor(
    private conferenceService: ConferenceService,
    private ticketPhaseService: TicketPhaseService
  ) {
    // Setup effect to calculate prices when phases change
    effect(() => {
      const allPhases = this.ticketPhaseService.getTicketPhases()();
      const finalBirdPhase = allPhases.find(
        phase => phase.name === 'Final Bird'
      );

      if (finalBirdPhase) {
        this.finalPrice.set(finalBirdPhase.basePrice);
        this.updateTicketPrices();
      }
    });
  }

  updateTicketPrices() {
    const finalPrices: Record<string, number> = {};
    const savings: Record<string, number> = {};

    this.tickets().forEach(ticket => {
      finalPrices[ticket.id] = this.calculateFinalPrice(ticket);
      savings[ticket.id] = finalPrices[ticket.id] - ticket.price;
    });

    this.ticketFinalPrices.set(finalPrices);
    this.ticketSavings.set(savings);
  }

  calculateFinalPrice(ticket: Ticket): number {
    if (ticket.type === 'workshop') {
      return this.finalPrice() - 200;
    } else if (ticket.type === 'bundle') {
      return this.finalPrice() + 300;
    }
    return this.finalPrice();
  }

  isFinalBirdPhase(): boolean {
    return this.ticketPhaseService.getCurrentPhase()()?.name === 'Final Bird';
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

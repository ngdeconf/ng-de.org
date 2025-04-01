import { Component, computed, OnInit, signal } from '@angular/core';
import { Ticket, TicketPhase } from '../../models/models';
import { ConferenceService } from '../../services/conference.service';
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
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-1 rounded-full shadow-md z-10"
            >
              <span
                class="text-[#7a62f5] dark:text-[#a788fd] font-medium text-sm"
                >Most Value</span
              >
            </div>
            }
            <div
              class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl border-t-4 grid grid-rows-[1fr_auto] h-full"
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
                      class="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
                    >
                      {{
                        ticket.name === 'Conference Ticket'
                          ? 'Conference Only'
                          : ticket.name
                      }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
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
                  <p class="text-4xl font-bold text-[#e40341]">
                    {{ ticket.price }} {{ ticket.currency }}
                  </p>
                  } @if (ticket.availableUntil && ticket.available) {
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
          </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TicketsComponent implements OnInit {
  tickets = this.conferenceService.getTickets();
  finalPrice = 899; // Default value for Final Bird phase
  currentPhase: TicketPhase | undefined;
  allPhases: TicketPhase[] = [];
  ticketFinalPrices = signal<Record<string, number>>({});
  ticketSavings = signal<Record<string, number>>({});

  // Sort tickets in desired order: Conference, Workshop, Bundle
  sortedTickets = computed(() => {
    const orderMap: Record<string, number> = {
      conference: 1,
      workshop: 2,
      bundle: 3,
      online: 4
    };

    return [...this.tickets()].sort(
      (a, b) => (orderMap[a.type] || 99) - (orderMap[b.type] || 99)
    );
  });

  constructor(private conferenceService: ConferenceService) {}

  ngOnInit() {
    // Subscribe to get all phases
    this.conferenceService.getTicketPhases().subscribe(phases => {
      this.allPhases = phases;
      // Find the "Final Bird" phase
      const finalBirdPhase = phases.find(phase => phase.name === 'Final Bird');
      if (finalBirdPhase) {
        this.finalPrice = finalBirdPhase.basePrice;
        this.updateTicketPrices();
      }
    });

    // Subscribe to get current phase
    this.conferenceService.getCurrentPhase().subscribe(phase => {
      this.currentPhase = phase;
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
      return this.finalPrice - 200;
    } else if (ticket.type === 'bundle') {
      return this.finalPrice + 300;
    }
    return this.finalPrice;
  }

  isFinalBirdPhase(): boolean {
    return this.currentPhase?.name === 'Final Bird';
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

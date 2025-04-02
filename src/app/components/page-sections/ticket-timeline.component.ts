import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-ticket-timeline',
  imports: [AsyncPipe, DatePipe],
  template: `
    <!-- Timeline Container -->
    <div class="relative mx-auto my-10 py-5 dark:bg-gray-900">
      <!-- Timeline Bar - Hidden on mobile -->
      <div
        class="hidden md:block absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e40341] via-[#f034e0] via-[#921bf2] to-[#2192d1] shadow-lg shadow-[#e40341]/30 dark:shadow-[#e40341]/20 rounded-full"
      ></div>

      <!-- Vertical line for mobile - Single gradient line -->
      <div
        class="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e40341] via-[#f034e0] via-[#921bf2] to-[#2192d1] rounded-full"
      ></div>

      <!-- Timeline Items -->
      <div class="relative flex flex-col md:flex-row md:justify-between">
        @for (phase of ticketPhases$ | async; track phase.name; let i = $index)
        {
        <div
          class="relative z-10 flex items-center md:flex-col md:flex-1 px-4 md:px-2.5 py-6 md:py-5 opacity-0 animate-fade-in"
          [style.animation-delay]="i * 200 + 'ms'"
        >
          <!-- Timeline dot -->
          <div class="relative z-10 md:mx-auto">
            <div
              class="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110
          {{
                phase.isActive
                  ? 'bg-[#e40341] border-[#e40341] text-white shadow-lg shadow-[#e40341]/30'
                  : phase.isPast
                  ? 'bg-[#921bf2] border-[#921bf2] text-white shadow-lg shadow-[#921bf2]/30'
                  : 'bg-gray-100 border-gray-400 text-gray-400 dark:bg-gray-800 dark:border-gray-600'
              }}"
            >
              @if (phase.isActive) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M20 6L9 17l-5-5"
                />
              </svg>
              } @else if (phase.isPast) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
              }
            </div>
          </div>

          <!-- Timeline content -->
          <div class="flex-1 md:text-center ml-4 md:ml-0">
            <h3
              class="text-lg font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300"
            >
              {{ phase.name }}
            </h3>
            <p
              class="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              Begins {{ phase.startDate | date : 'd. MMMM' }}
            </p>
          </div>
        </div>
        }
      </div>
    </div>
  `,
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

     @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 0.5s ease-out forwards;
      }
  `
})
export class TicketTimelineComponent {
  ticketPhases$ = this.conferenceService.getTicketPhases();

  constructor(private conferenceService: ConferenceService) {}
}

import { CommonModule, DatePipe } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';
import { TicketPhaseService } from '../../services/ticket-phase.service';

@Component({
  selector: 'ngde-ticket-timeline',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <!-- Timeline Container -->
    <div
      class="relative mx-auto my-10 py-5 dark:bg-gray-900"
      #timelineContainer
    >
      <!-- Timeline Bar - Hidden on mobile -->
      <div
        class="hidden md:block absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e40341]/20 via-[#f034e0]/20 via-[#921bf2]/20 to-[#2192d1]/20 shadow-lg shadow-[#e40341]/30 dark:shadow-[#e40341]/20 rounded-full overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#e40341] via-[#f034e0] via-[#921bf2] to-[#2192d1] shadow-[0_0_15px_rgba(228,3,65,0.5)] dark:shadow-[0_0_15px_rgba(228,3,65,0.3)]"
          [class.animate-fill-gradient]="isVisible()"
        ></div>
      </div>

      <!-- Vertical line for mobile - Single gradient line -->
      <div
        class="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e40341] via-[#f034e0] via-[#921bf2] to-[#2192d1] rounded-full"
      ></div>

      <!-- Timeline Items -->
      <div class="relative flex flex-col md:flex-row md:justify-between">
        @for (phase of ticketPhases(); track phase.name; let i = $index) {
        <div
          class="relative z-10 flex items-center md:flex-col md:flex-1 px-4 md:px-2.5 py-6 md:py-5 opacity-0 animate-fade-in"
          [style.animation-delay]="i * 200 + 'ms'"
        >
          <!-- Timeline dot -->
          <div class="relative z-10 md:mx-auto">
            <div
              class="w-10 h-10 rounded-full border-3 flex items-center justify-center transition-all duration-300 transform hover:scale-110
          {{
                phase.isActive
                  ? 'bg-gradient-to-br from-[#2192d1] to-[#921bf2] border-[#2192d1] text-white shadow-xl shadow-[#2192d1]/50 ring-4 ring-[#2192d1]/20 animate-pulse-slow'
                  : phase.isPast
                  ? 'bg-gradient-to-br from-gray-400 to-gray-500 border-gray-400 text-white shadow-lg shadow-gray-400/40 dark:from-gray-600 dark:to-gray-700 dark:border-gray-600 opacity-75'
                  : 'bg-gray-100 border-gray-400 text-gray-400 dark:bg-gray-800 dark:border-gray-600'
              }}"
            >
              @if (phase.isActive) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3" fill="currentColor" />
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
                  d="M20 6L9 17l-5-5"
                />
              </svg>
              }
            </div>
          </div>

          <!-- Timeline content -->
          <div class="flex-1 md:text-center ml-4 md:ml-0">
            <h3
              class="text-lg font-semibold mb-1 transition-colors duration-300
              {{
                phase.isActive
                  ? 'text-[#2192d1] dark:text-[#2192d1]'
                  : phase.isPast
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-500 dark:text-gray-500'
              }}"
            >
              {{ phase.name }}
            </h3>
            <p
              class="text-sm font-medium transition-colors duration-300
              {{
                phase.isActive
                  ? 'text-[#921bf2] dark:text-[#921bf2]'
                  : phase.isPast
                  ? 'text-gray-600 dark:text-gray-400'
                  : 'text-gray-400 dark:text-gray-600'
              }}"
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

    @keyframes fill-gradient {
      from {
        width: 0;
        opacity: 0.8;
      }
      to {
        width: 100%;
        opacity: 1;
      }
    }

    .animate-fill-gradient {
      animation: fill-gradient 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }

    .animate-pulse-slow {
      animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `
})
export class TicketTimelineComponent implements OnInit, OnDestroy {
  timelineContainer = viewChild.required<ElementRef>('timelineContainer');
  timelineItems = viewChildren<ElementRef>('timelineItem');

  ticketPhases = this.ticketPhaseService.getTicketPhases();
  isVisible = signal(false);
  private observer?: IntersectionObserver;

  constructor(private ticketPhaseService: TicketPhaseService) {
    afterNextRender(() => {
      this.setupIntersectionObserver();
    });
  }

  ngOnInit(): void {
    // No additional initialization needed
  }

  ngOnDestroy(): void {
    // Clean up observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            this.isVisible.set(true);
            this.observer?.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      this.observer.observe(this.timelineContainer().nativeElement);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.isVisible.set(true);
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }
}

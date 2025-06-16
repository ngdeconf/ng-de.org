import { CommonModule, DatePipe } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
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
      <!-- Countdown Indicator (centered above current phase) -->
      @if ((daysUntilNextPhase() ?? 0) > 0) {
      <div
        class="absolute left-0 right-0 flex justify-center pointer-events-none -top-6 md:-top-14"
      >
        <div class="flex flex-col items-center">
          <div
            class="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700 pointer-events-auto"
          >
            <!-- Custom SVG icon (clock/alert style, modern, accessible) -->
            <svg
              class="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6l3 3"
              />
            </svg>
            <span class="text-base font-semibold text-gray-800 dark:text-white">
              {{ daysUntilNextPhase() }}
              {{ daysUntilNextPhase() === 1 ? 'day' : 'days' }} until prices
              increase
            </span>
          </div>
          <!-- Downward pointer, visually integrated -->
          <div
            class="w-0 h-0 border-l-8 border-r-8 border-t-[16px] border-l-transparent border-r-transparent border-t-gray-50 dark:border-t-gray-800 hidden md:block"
          ></div>
        </div>
      </div>
      }
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
  `
})
export class TicketTimelineComponent implements OnInit, OnDestroy {
  timelineContainer = viewChild.required<ElementRef>('timelineContainer');
  timelineItems = viewChildren<ElementRef>('timelineItem');

  ticketPhases = this.ticketPhaseService.getTicketPhases();
  isVisible = signal(false);
  private observer?: IntersectionObserver;

  // New: Get current and next phase, and days until next phase
  currentPhase = this.ticketPhaseService.getCurrentPhase();
  nextPhase = computed(() => this.ticketPhaseService.getNextPhase());
  daysUntilNextPhase = computed(() =>
    this.ticketPhaseService.getDaysUntilNextPhase()
  );

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

      const container = this.timelineContainer();
      if (container) {
        this.observer.observe(container.nativeElement);
      }
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

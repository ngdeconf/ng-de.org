import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  signal,
  ViewChild
} from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { WorkshopService } from '../../services/workshop.service';

@Component({
  selector: 'ngde-workshops',
  imports: [CommonModule],
  template: `
    <section id="workshops" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Workshop Day
          </h2>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            November 5: Hands-on workshops to level up your Angular skills
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (workshop of workshops(); track workshop.id) {
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-primary-500 dark:focus-within:ring-primary-400"
            tabindex="-1"
          >
            <div class="p-8 md:p-10">
              <!-- Workshop Header -->
              <div class="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <!-- Custom SVG Icon based on workshop -->
                <div
                  class="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700 mx-auto md:mx-0"
                >
                  @if (workshop.id === '1') {
                  <!-- Angular Architecture Workshop Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-gray-700 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <!-- Angular Logo Shape -->
                    <path d="M12 2L2 7l1.63 14.27L12 22l8.37-0.73L22 7z" />
                    <!-- Component Boxes -->
                    <rect x="7" y="9" width="10" height="3" rx="1" />
                    <rect x="7" y="14" width="10" height="3" rx="1" />
                    <!-- Connection Lines -->
                    <line x1="12" y1="7" x2="12" y2="9" />
                    <line x1="12" y1="12" x2="12" y2="14" />
                  </svg>
                  } @else if (workshop.id === '2') {
                  <!-- AI Coding Assistant Workshop Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-gray-700 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <!-- Code brackets -->
                    <path d="M8 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1" />
                    <path d="M16 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1" />
                    <!-- AI Brain/CPU -->
                    <rect x="9" y="8" width="6" height="6" rx="1" />
                    <!-- Connection lines representing AI processing -->
                    <path d="M12 14v3" />
                    <path d="M9 11h-2" />
                    <path d="M17 11h-2" />
                    <path d="M12 8v-2" />
                  </svg>
                  }
                </div>

                <div class="flex-1 text-center md:text-left">
                  <h3 class="text-xl font-bold mb-3 leading-snug">
                    {{ workshop.title }}
                  </h3>
                  <p
                    class="text-lg font-medium text-primary-600 dark:text-primary-400 mb-0"
                  >
                    {{ workshop.teaser }}
                  </p>
                </div>
              </div>

              <!-- Workshop Details -->
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 bg-gray-50 dark:bg-gray-750 p-4 rounded-lg"
              >
                <!-- Duration -->
                <div
                  class="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
                  [attr.aria-label]="'Workshop duration: ' + workshop.duration"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{{ workshop.duration }}</span>
                </div>

                <!-- Attendees -->
                <div
                  class="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
                  [attr.aria-label]="
                    'Capacity: ' + workshop.capacity + ' attendees'
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>{{ workshop.capacity }} attendees</span>
                </div>
              </div>

              <!-- Workshop Benefits -->
              @if (workshop.benefits && workshop.benefits.length > 0) {
              <div
                class="mb-8 px-4 py-5 bg-primary-50 dark:bg-primary-900/10 rounded-lg"
              >
                <h4
                  class="text-sm uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-4 font-medium"
                >
                  What you'll learn
                </h4>
                <div class="space-y-4">
                  @for (benefit of workshop.benefits; track benefit; let i =
                  $index) {
                  <div
                    class="flex items-start gap-4 benefit-item"
                    [style.animation-delay]="i * 100 + 'ms'"
                  >
                    <div
                      class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-800/40 flex items-center justify-center text-primary-600 dark:text-primary-400"
                      aria-hidden="true"
                    >
                      <span class="text-xs font-bold opacity-80">{{
                        i + 1
                      }}</span>
                    </div>
                    <div class="flex-1">
                      <p
                        class="text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {{ benefit }}
                      </p>
                    </div>
                  </div>
                  }
                </div>
              </div>
              }

              <!-- Workshop Leaders -->
              <div class="mb-8">
                <h4
                  class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 font-medium"
                >
                  Workshop Leaders
                </h4>
                <div class="flex flex-wrap gap-3">
                  @for (trainerId of workshop.trainers || [workshop.trainerId];
                  track trainerId) {
                  <div
                    class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full pl-1 pr-4 py-1.5"
                  >
                    <img
                      [src]="getSpeakerImage(trainerId)"
                      [alt]="getSpeakerName(trainerId)"
                      class="h-8 w-8 rounded-full mr-3 border-2 border-white dark:border-gray-800"
                    />
                    <div>
                      <p class="font-medium text-sm">
                        {{ getSpeakerName(trainerId) }}
                      </p>
                    </div>
                  </div>
                  }
                </div>
              </div>

              <!-- Learn More CTA -->
              <button
                class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                (click)="openWorkshopDetails(workshop)"
                [attr.aria-label]="
                  'View detailed workshop information for ' + workshop.title
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span class="tracking-wide">View Workshop Details</span>
              </button>
            </div>
          </div>
          }
        </div>
      </div>
    </section>

    <!-- Workshop Details Dialog -->
    @if (activeWorkshop()) {
    <div
      #dialogContainer
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      [class.dialog-enter]="isDialogVisible()"
      [class.dialog-leave]="isDialogLeaving()"
      (click)="closeWorkshopDetails()"
      role="dialog"
      aria-modal="true"
      [attr.aria-labelledby]="'workshop-details-title'"
      (keydown.escape)="closeWorkshopDetails()"
      tabindex="-1"
    >
      <!-- Skip to close button for screen readers -->
      <a
        href="#dialog-close-btn"
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-primary-700"
      >
        Skip to close button
      </a>

      <div
        #dialogContent
        class="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
        (click)="$event.stopPropagation()"
      >
        <!-- Sticky dialog header -->
        <div
          class="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-6 py-4 md:px-8 md:py-5 rounded-t-2xl shadow-sm"
        >
          <div class="flex justify-between items-center">
            <h3
              id="workshop-details-title"
              class="text-2xl font-bold leading-tight pr-8"
            >
              {{ activeWorkshop()?.title }}
            </h3>
            <button
              #closeButton
              id="dialog-close-btn"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 absolute right-5 md:right-7"
              aria-label="Close dialog"
              (click)="closeWorkshopDetails()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 pt-4 md:p-8 md:pt-4">
          <!-- Workshop Trainers -->
          <div class="mb-8">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium"
            >
              Led by
            </h4>
            <div class="flex flex-wrap gap-3">
              @for (trainerId of activeWorkshop()?.trainers ||
              [activeWorkshop()?.trainerId]; track trainerId) {
              <div
                class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg pl-1 pr-4 py-2"
              >
                <img
                  [src]="getSpeakerImage(trainerId)"
                  [alt]="getSpeakerName(trainerId)"
                  class="h-10 w-10 rounded-full mr-3 border-2 border-white dark:border-gray-800"
                />
                <div>
                  <p class="font-medium">{{ getSpeakerName(trainerId) }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ getSpeakerTitle(trainerId) }}
                  </p>
                </div>
              </div>
              }
            </div>
          </div>

          <!-- Workshop Abstract -->
          <div class="mb-8">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium"
            >
              About this workshop
            </h4>
            <p
              class="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed"
            >
              {{ activeWorkshop()?.abstract }}
            </p>
          </div>

          <!-- Workshop Outline Accordion -->
          @if (activeWorkshop()?.outline && activeWorkshop()?.outline.length >
          0) {
          <div class="mb-8">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 font-medium"
            >
              Workshop Outline
            </h4>
            <div class="space-y-3">
              @for (section of activeWorkshop()?.outline; track section.title;
              let i = $index) {
              <div
                class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  class="w-full flex justify-between items-center p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400"
                  [attr.aria-expanded]="isAccordionExpanded(i)"
                  [attr.aria-controls]="'section-' + i"
                  (click)="toggleAccordion(i)"
                >
                  <span class="font-medium">{{ section.title }}</span>
                  <svg
                    class="w-5 h-5 transition-transform"
                    [class.transform]="isAccordionExpanded(i)"
                    [class.rotate-180]="isAccordionExpanded(i)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div
                  [id]="'section-' + i"
                  class="overflow-hidden transition-all duration-300"
                  [style.maxHeight]="isAccordionExpanded(i) ? '500px' : '0'"
                  [attr.aria-hidden]="!isAccordionExpanded(i)"
                >
                  <div class="p-4 bg-white dark:bg-gray-800">
                    <ul
                      class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"
                    >
                      @for (topic of section.topics; track topic) {
                      <li class="leading-relaxed">{{ topic }}</li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
              }
            </div>
          </div>
          }

          <!-- Target Audience -->
          @if (activeWorkshop()?.targetAudience) {
          <div class="mb-8 p-5 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium"
            >
              Target Audience
            </h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ activeWorkshop()?.targetAudience }}
            </p>
          </div>
          }

          <div class="flex justify-end">
            <button
              class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              (click)="closeWorkshopDetails()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    }
  `,
  styles: [
    `
      /* Card transition */
      .bg-white {
        transition: box-shadow 0.3s ease;
      }

      /* Benefit animations */
      @keyframes benefit-appear {
        from {
          opacity: 0;
          transform: translateX(-10px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .benefit-item {
        animation: benefit-appear 0.5s ease forwards;
        opacity: 0;
      }

      /* Sticky header styles */
      .sticky {
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }

      /* Focus styles */
      button:focus-visible {
        outline: 2px solid var(--primary-color, #4f46e5);
        outline-offset: 2px;
      }

      /* Dialog and accordion animations */
      @keyframes dialog-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes dialog-fade-out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes dialog-content-in {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes dialog-content-out {
        from {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        to {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
      }

      .dialog-enter {
        animation: dialog-fade-in 0.3s ease forwards;
      }

      .dialog-enter > div {
        animation: dialog-content-in 0.3s ease forwards;
      }

      .dialog-leave {
        animation: dialog-fade-out 0.3s ease forwards;
      }

      .dialog-leave > div {
        animation: dialog-content-out 0.3s ease forwards;
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-750 {
          background-color: rgba(55, 65, 81, 0.5);
        }
      }
    `
  ],
  standalone: true
})
export class WorkshopsComponent {
  @ViewChild('closeButton') closeButton?: ElementRef;
  @ViewChild('dialogContainer') dialogContainer?: ElementRef;

  workshops = this.workshopService.getWorkshops();
  activeWorkshop = signal<any | null>(null);
  isDialogVisible = signal(false);
  isDialogLeaving = signal(false);
  expandedAccordions = signal<boolean[]>([]);

  constructor(
    private speakerService: SpeakerService,
    private workshopService: WorkshopService
  ) {
    // Initialize with all accordions collapsed
    const workshop = this.workshops();
    if (workshop.length > 0 && workshop[0].outline) {
      this.expandedAccordions.set(
        new Array(workshop[0].outline.length).fill(false)
      );
    }

    // Setup afterNextRender handlers for dialog operations
    afterNextRender(() => {
      // This context is available for other methods to use
      this.openWorkshopDetailsHandler = (workshop: any) => {
        this.activeWorkshop.set(workshop);
        this.isDialogVisible.set(true);

        // Reset the expanded state of accordions
        if (workshop.outline) {
          this.expandedAccordions.set(
            new Array(workshop.outline.length).fill(false)
          );
        }

        if (this.dialogContainer) {
          // Focus trap and accessibility improvements
          this.dialogContainer.nativeElement.focus();

          // Prevent scrolling of the body when dialog is open
          document.body.style.overflow = 'hidden';
        }
      };

      this.closeWorkshopDetailsHandler = () => {
        this.isDialogLeaving.set(true);

        setTimeout(() => {
          this.isDialogLeaving.set(false);
          this.isDialogVisible.set(false);
          this.activeWorkshop.set(null);

          // Re-enable scrolling
          document.body.style.overflow = '';
        }, 300); // Match the CSS transition duration
      };
    });
  }

  // Private handlers set up in constructor
  private openWorkshopDetailsHandler: (workshop: any) => void = () => {};
  private closeWorkshopDetailsHandler: () => void = () => {};

  getSpeakerName(speakerId: string): string {
    const speaker = this.speakerService.getSpeakerById(speakerId);
    return speaker ? speaker.name : 'Unknown Speaker';
  }

  getSpeakerImage(speakerId: string): string {
    const speaker = this.speakerService.getSpeakerById(speakerId);
    return speaker ? speaker.imageUrl : '';
  }

  getSpeakerTitle(speakerId: string): string {
    const speaker = this.speakerService.getSpeakerById(speakerId);
    return speaker ? speaker.title : '';
  }

  openWorkshopDetails(workshop: any): void {
    this.openWorkshopDetailsHandler(workshop);
  }

  closeWorkshopDetails(): void {
    this.closeWorkshopDetailsHandler();
  }

  toggleAccordion(index: number): void {
    const currentState = [...this.expandedAccordions()];
    currentState[index] = !currentState[index];
    this.expandedAccordions.set(currentState);
  }

  isAccordionExpanded(index: number): boolean {
    return this.expandedAccordions()[index] || false;
  }
}

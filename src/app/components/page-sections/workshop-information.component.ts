import {
  afterNextRender,
  Component,
  ElementRef,
  signal,
  viewChild
} from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { WorkshopService } from '../../services/workshop.service';

@Component({
  selector: 'ngde-workshop-information',
  template: `
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead class="sr-only">
          <tr>
            <th>Workshop Information</th>
          </tr>
        </thead>
        <tbody>
          @for (workshop of workshops(); track workshop.id) {
          <tr
            class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <td class="py-4">
              <!-- First line: Workshop title and button -->
              <div class="flex items-center justify-between mb-3">
                <h3
                  class="text-lg font-bold text-gray-900 dark:text-gray-100 pr-4"
                >
                  {{ workshop.title }}
                </h3>
                <button
                  [class]="
                    workshop.soldOut
                      ? 'bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center gap-2 shadow-sm cursor-not-allowed opacity-60'
                      : 'bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center gap-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
                  "
                  (click)="!workshop.soldOut && openWorkshopDetails(workshop)"
                  [disabled]="workshop.soldOut"
                  [attr.aria-label]="
                    workshop.soldOut
                      ? 'Workshop sold out - no longer available'
                      : 'View detailed workshop information for ' +
                        workshop.title
                  "
                >
                  @if (workshop.soldOut) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span class="text-sm">Sold Out</span>
                  } @else {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
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
                  <span class="text-sm">View Details</span>
                  }
                </button>
              </div>

              <!-- Second line: Trainers and room -->
              <div
                class="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <!-- Room -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-primary-500 dark:text-primary-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{
                    workshop.room
                  }}</span>
                </div>

                <!-- Trainers -->
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    @for (trainerId of workshop.trainers ||
                    [workshop.trainerId]; track trainerId; let i = $index) { @if
                    (i < 2) {
                    <div class="flex items-center gap-2">
                      <img
                        [src]="getSpeakerImage(trainerId)"
                        [alt]="getSpeakerName(trainerId)"
                        class="w-6 h-6 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
                      />
                      <span class="font-medium">{{
                        getSpeakerName(trainerId)
                      }}</span>
                      @if (getSpeakerById(trainerId)?.angularTeam) {
                      <img
                        src="assets/images/angular_gradient.png"
                        alt="Angular Team"
                        class="w-4 h-4"
                      />
                      } @if (getSpeakerById(trainerId)?.ngrxTeam) {
                      <img
                        src="assets/images/ngrx-logo.png"
                        alt="NgRx Team"
                        class="w-4 h-4"
                      />
                      }
                    </div>
                    } @if (i === 1 && (workshop.trainers ||
                    [workshop.trainerId]).length > 2) {
                    <span class="text-gray-500 dark:text-gray-500">
                      +{{
                        (workshop.trainers || [workshop.trainerId]).length - 2
                      }}
                      more
                    </span>
                    } }
                  </div>
                </div>
              </div>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>

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
          <!-- Workshop Location -->
          <div
            class="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800"
          >
            <div class="flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary-600 dark:text-primary-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span
                class="text-lg font-semibold text-primary-700 dark:text-primary-300"
              >
                Location: {{ activeWorkshop()?.room }}
              </span>
            </div>
          </div>

          <!-- Workshop Trainers -->
          <div class="mb-8">
            <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Expert Workshop Leaders
            </h4>
            <div class="space-y-6">
              @for (trainerId of activeWorkshop()?.trainers ||
              [activeWorkshop()?.trainerId]; track trainerId) {
              <div
                class="flex flex-col sm:flex-row sm:items-start gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div class="relative flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    [src]="getSpeakerImage(trainerId)"
                    [alt]="getSpeakerName(trainerId)"
                    class="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                  />
                  @if (getSpeakerById(trainerId)?.angularTeam) {
                  <div
                    class="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1"
                  >
                    <img
                      src="assets/images/angular_gradient.png"
                      alt="Angular Team"
                      class="w-7 h-7"
                    />
                  </div>
                  } @if (getSpeakerById(trainerId)?.ngrxTeam) {
                  <div
                    class="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1"
                  >
                    <img
                      src="assets/images/ngrx-logo.png"
                      alt="NgRx Team"
                      class="w-7 h-7"
                    />
                  </div>
                  }
                </div>
                <div class="flex-1 text-center sm:text-left">
                  <h5
                    class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    {{ getSpeakerName(trainerId) }}
                  </h5>
                  <p
                    class="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2"
                  >
                    {{ getSpeakerTitle(trainerId) }}
                  </p>
                  @if (getSpeakerCompany(trainerId)) {
                  <p class="text-base text-gray-600 dark:text-gray-400 mb-3">
                    {{ getSpeakerCompany(trainerId) }}
                  </p>
                  } @if (getSpeakerById(trainerId)?.bio) {
                  <p
                    class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {{ getSpeakerById(trainerId)?.bio }}
                  </p>
                  }
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
        .dark\\:bg-gray-750 {
          background-color: rgba(55, 65, 81, 0.5);
        }
      }
    `
  ],
  standalone: true
})
export class WorkshopInformationComponent {
  closeButton = viewChild.required<ElementRef>('closeButton');
  dialogContainer = viewChild.required<ElementRef>('dialogContainer');

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

        // Focus trap and accessibility improvements
        this.dialogContainer().nativeElement.focus();

        // Prevent scrolling of the body when dialog is open
        document.body.style.overflow = 'hidden';
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

  getSpeakerById(speakerId: string) {
    return this.speakerService.getSpeakerById(speakerId);
  }

  getSpeakerCompany(speakerId: string): string {
    const speaker = this.speakerService.getSpeakerById(speakerId);
    return speaker ? speaker.company || '' : '';
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

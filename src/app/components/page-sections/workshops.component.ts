import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  signal,
  ViewChild
} from '@angular/core';
import { ConferenceService } from '../../services/conference.service';
import { WorkshopService } from '../../services/workshop.service';

@Component({
  selector: 'app-workshops',
  imports: [CommonModule],
  template: `
    <section id="workshops" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Workshop Day</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            November 5: Hands-on workshops to level up your Angular skills
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (workshop of workshops(); track workshop.id) {
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
          >
            <div class="p-8">
              <div class="flex items-start gap-6 mb-6">
                <!-- Custom SVG Icon based on workshop -->
                <div
                  class="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700"
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

                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-2">{{ workshop.title }}</h3>
                  <p
                    class="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-3"
                  >
                    {{ workshop.teaser }}
                  </p>
                </div>
              </div>

              <!-- Workshop Details -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <!-- Duration -->
                <div
                  class="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{{ workshop.duration }}</span>
                </div>

                <!-- Attendees -->
                <div
                  class="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>{{ workshop.capacity }} attendees</span>
                </div>
              </div>

              <!-- Trainers -->
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div class="flex justify-between items-center mb-3">
                  <h4
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Workshop Leaders
                  </h4>

                  <button
                    class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium text-sm px-3 py-1.5 border border-primary-600 dark:border-primary-400 rounded-full transition-colors flex items-center gap-1"
                    (click)="openWorkshopDetails(workshop)"
                    aria-label="View workshop details"
                  >
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
                      <path
                        d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                      ></path>
                    </svg>
                    What will I learn?
                  </button>
                </div>
                <div class="flex flex-wrap gap-3">
                  @for (trainerId of workshop.trainers || [workshop.trainerId];
                  track trainerId) {
                  <div
                    class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full pl-1 pr-3 py-1"
                  >
                    <img
                      [src]="getSpeakerImage(trainerId)"
                      [alt]="getSpeakerName(trainerId)"
                      class="h-8 w-8 rounded-full mr-2 border-2 border-white dark:border-gray-800"
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
      <div
        #dialogContent
        class="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
        (click)="$event.stopPropagation()"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 id="workshop-details-title" class="text-2xl font-bold">
              {{ activeWorkshop()?.title }}
            </h3>
            <button
              #closeButton
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Close dialog"
              (click)="closeWorkshopDetails()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

          <!-- Workshop Trainers -->
          <div class="mb-6">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
            >
              Led by
            </h4>
            <div class="flex flex-wrap gap-3">
              @for (trainerId of activeWorkshop()?.trainers ||
              [activeWorkshop()?.trainerId]; track trainerId) {
              <div
                class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg pl-1 pr-4 py-1"
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
          <div class="mb-6">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
            >
              About this workshop
            </h4>
            <p class="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {{ activeWorkshop()?.abstract }}
            </p>
          </div>

          <!-- Workshop Outline Accordion -->
          @if (activeWorkshop()?.outline && activeWorkshop()?.outline.length >
          0) {
          <div>
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3"
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
                  class="w-full flex justify-between items-center p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
                      class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300"
                    >
                      @for (topic of section.topics; track topic) {
                      <li>{{ topic }}</li>
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
          <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <h4
              class="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
            >
              Target Audience
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              {{ activeWorkshop()?.targetAudience }}
            </p>
          </div>
          }

          <div class="mt-6 flex justify-end">
            <button
              class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
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
      .bg-white {
        transition: transform 0.3s ease;
      }
      .bg-white:hover {
        transform: translateY(-5px);
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
    `
  ]
})
export class WorkshopsComponent implements AfterViewInit {
  @ViewChild('closeButton') closeButton?: ElementRef;
  @ViewChild('dialogContainer') dialogContainer?: ElementRef;

  workshops = this.workshopService.getWorkshops();
  activeWorkshop = signal<any | null>(null);
  isDialogVisible = signal(false);
  isDialogLeaving = signal(false);
  expandedAccordions = signal<boolean[]>([]);

  private isBrowser: boolean;

  constructor(
    private conferenceService: ConferenceService,
    private workshopService: WorkshopService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    // No initialization needed for initial load
  }

  getSpeakerName(speakerId: string): string {
    const speaker = this.conferenceService.getSpeakerById(speakerId);
    return speaker ? speaker.name : 'Unknown Speaker';
  }

  getSpeakerImage(speakerId: string): string {
    const speaker = this.conferenceService.getSpeakerById(speakerId);
    return speaker ? speaker.imageUrl : '';
  }

  getSpeakerTitle(speakerId: string): string {
    const speaker = this.conferenceService.getSpeakerById(speakerId);
    return speaker ? speaker.title : '';
  }

  openWorkshopDetails(workshop: any): void {
    this.activeWorkshop.set(workshop);
    this.isDialogVisible.set(true);
    this.isDialogLeaving.set(false);

    // Initialize accordion state when opening a workshop
    if (workshop.outline) {
      // Default: first section is expanded, others collapsed
      this.expandedAccordions.set(
        workshop.outline.map((_: any, i: number) => i === 0)
      );
    } else {
      this.expandedAccordions.set([]);
    }

    // Focus the close button when dialog opens
    if (this.isBrowser) {
      setTimeout(() => {
        if (this.closeButton) {
          this.closeButton.nativeElement.focus();
        }
      });
    }
  }

  closeWorkshopDetails(): void {
    this.isDialogLeaving.set(true);

    // Wait for animation to complete before removing dialog
    if (this.isBrowser) {
      setTimeout(() => {
        this.activeWorkshop.set(null);
        this.isDialogVisible.set(false);
        this.isDialogLeaving.set(false);
      }, 300);
    } else {
      // Immediately remove dialog in SSR context
      this.activeWorkshop.set(null);
      this.isDialogVisible.set(false);
      this.isDialogLeaving.set(false);
    }
  }

  toggleAccordion(index: number): void {
    const currentState = [...this.expandedAccordions()];
    currentState[index] = !currentState[index];
    this.expandedAccordions.set(currentState);
  }

  isAccordionExpanded(index: number): boolean {
    return this.expandedAccordions()[index] || false;
  }

  ngOnDestroy(): void {
    // Clean up any resources if needed
  }
}

import { CommonModule } from '@angular/common';
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
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-primary-500 dark:focus-within:ring-primary-400 h-[900px] flex flex-col relative"
            tabindex="-1"
          >
            <!-- Sold Out Banner -->
            @if (workshop.soldOut) {
              <div class="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full">
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-red-600 text-white font-bold text-2xl w-96 h-20 flex items-center justify-center shadow-lg">
                    <span class="tracking-widest">SOLD OUT</span>
                  </div>
                </div>
              </div>
            }
            <div class="p-8 md:p-10 flex-1 flex flex-col">
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
                  } @else if (workshop.id === '3') {
                  <!-- Performance Workshop Icon -->
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
                    <!-- Speedometer/Gauge -->
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v10" />
                    <path d="M12 2l8 8" />
                    <!-- Performance indicators -->
                    <path d="M4 12h2" />
                    <path d="M18 12h2" />
                    <path d="M12 20v-2" />
                    <!-- Lightning bolt for speed -->
                    <path d="M12 6l-2 4h4l-2 4" />
                  </svg>
                  } @else if (workshop.id === '4') {
                  <!-- Security Workshop Icon -->
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
                    <!-- Lock Body -->
                    <rect x="6" y="11" width="12" height="8" rx="1" />
                    <!-- Lock Top -->
                    <path d="M12 11V8a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v3" />
                    <!-- Lock Keyhole -->
                    <circle cx="12" cy="15" r="1.5" />
                    <path d="M12 16.5v2" />
                  </svg>
                  } @else if (workshop.id === '5') {
                  <!-- NgRx SignalStore Workshop Icon -->
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
                    <!-- Store Container -->
                    <rect x="3" y="8" width="18" height="12" rx="2" />
                    <!-- Signal Waves -->
                    <path d="M7 12c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3z" />
                    <path d="M5 12c0-2.5 2.5-5 5-5s5 2.5 5 5-2.5 5-5 5-5-2.5-5-5z" />
                    <!-- State Flow Lines -->
                    <path d="M16 12h2" />
                    <path d="M16 10h1.5" />
                    <path d="M16 14h1.5" />
                    <!-- Data Input -->
                    <path d="M12 8V5" />
                    <path d="M10 6l2-2 2 2" />
                  </svg>
                  } @else if (workshop.id === '6') {
                  <!-- Web Accessibility Workshop Icon -->
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
                    <!-- Universal Access Symbol -->
                    <circle cx="12" cy="12" r="10" />
                    <!-- Head -->
                    <circle cx="12" cy="8" r="1.5" />
                    <!-- Body -->
                    <path d="M12 9.5v4" />
                    <!-- Arms/Accessibility -->
                    <path d="M9 11l3-1 3 1" />
                    <!-- Legs -->
                    <path d="M10 13.5l2 3 2-3" />
                    <!-- Accessibility indicators -->
                    <path d="M6 12h2" />
                    <path d="M16 12h2" />
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

                            <!-- Content Container -->
              <div class="flex-1 flex flex-col">
                <!-- Workshop Details -->
                <div
                  class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-gray-50 dark:bg-gray-750 p-4 rounded-lg"
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
                  class="flex-1 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6 border border-gray-200 dark:border-gray-700"
                >
                  <h4
                    class="text-sm uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-3 font-medium"
                  >
                    What you'll learn
                  </h4>
                  <div class="space-y-3">
                    @for (benefit of workshop.benefits.slice(0, 4); track benefit; let i = $index) {
                    <div
                      class="flex items-start gap-3 benefit-item"
                      [style.animation-delay]="i * 100 + 'ms'"
                    >
                      <div
                        class="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-800/40 flex items-center justify-center text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      >
                        <span class="text-xs font-bold opacity-80">{{
                          i + 1
                        }}</span>
                      </div>
                      <div class="flex-1">
                        <p
                          class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          {{ benefit }}
                        </p>
                      </div>
                    </div>
                    }
                    @if (workshop.benefits.length > 4) {
                      <div class="text-center mt-2">
                        <span class="text-xs text-primary-600 dark:text-primary-400 font-medium">
                          +{{ workshop.benefits.length - 4 }} more learning objectives
                        </span>
                      </div>
                    }
                  </div>
                </div>
                }

                <!-- Workshop Leaders - Primary Focus -->
                <div class="mb-6">
                  <h4
                    class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 text-center md:text-left"
                  >
                    Led by Expert Trainers
                  </h4>
                  <div class="space-y-3">
                    @for (trainerId of workshop.trainers || [workshop.trainerId]; track trainerId; let i = $index) {
                      <!-- Limit to first 2 trainers for consistent height -->
                      @if (i < 2) {
                        <div class="flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <div class="relative flex-shrink-0 mx-auto sm:mx-0">
                            <img
                              [src]="getSpeakerImage(trainerId)"
                              [alt]="getSpeakerName(trainerId)"
                              class="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                            />
                            @if (getSpeakerById(trainerId)?.angularTeam) {
                              <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                <img
                                    src="assets/images/angular_gradient.png"
                                    alt="Angular Team"
                                    class="w-5 h-5"
                                />
                              </div>
                            }
                            @if (getSpeakerById(trainerId)?.ngrxTeam) {
                              <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                <img
                                    src="assets/images/ngrx-logo.png"
                                    alt="NgRx Team"
                                    class="w-5 h-5"
                                />
                              </div>
                            }
                          </div>
                          <div class="flex-1 text-center sm:text-left">
                            <h5 class="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
                              {{ getSpeakerName(trainerId) }}
                            </h5>
                            <p class="text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                              {{ getSpeakerTitle(trainerId) }}
                            </p>
                            @if (getSpeakerCompany(trainerId)) {
                              <p class="text-xs text-gray-600 dark:text-gray-400">
                                {{ getSpeakerCompany(trainerId) }}
                              </p>
                            }
                          </div>
                        </div>
                      }
                    }
                    <!-- Show additional trainers indicator if more than 2 -->
                    @if ((workshop.trainers || [workshop.trainerId]).length > 2) {
                      <div class="text-center">
                        <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          +{{ (workshop.trainers || [workshop.trainerId]).length - 2 }} more trainer(s)
                        </span>
                      </div>
                    }
                  </div>
                </div>
              </div>

              <!-- Learn More CTA - Always at bottom -->
              <div class="mt-auto">
                <button
                  [class]="workshop.soldOut 
                    ? 'w-full bg-gray-400 text-white font-medium py-3.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-not-allowed opacity-60'
                    : 'w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'"
                  (click)="!workshop.soldOut && openWorkshopDetails(workshop)"
                  [disabled]="workshop.soldOut"
                  [attr.aria-label]="
                    workshop.soldOut 
                      ? 'Workshop sold out - no longer available'
                      : 'View detailed workshop information for ' + workshop.title
                  "
                >
                  @if (workshop.soldOut) {
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
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span class="tracking-wide">Workshop Sold Out</span>
                  } @else {
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
                  }
                </button>
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
              class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Expert Workshop Leaders
            </h4>
            <div class="space-y-6">
              @for (trainerId of activeWorkshop()?.trainers ||
              [activeWorkshop()?.trainerId]; track trainerId) {
                <div class="flex flex-col sm:flex-row sm:items-start gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div class="relative flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      [src]="getSpeakerImage(trainerId)"
                      [alt]="getSpeakerName(trainerId)"
                      class="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                    />
                    @if (getSpeakerById(trainerId)?.angularTeam) {
                      <div class="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1">
                        <img
                            src="assets/images/angular_gradient.png"
                            alt="Angular Team"
                            class="w-7 h-7"
                        />
                      </div>
                    }
                    @if (getSpeakerById(trainerId)?.ngrxTeam) {
                      <div class="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1">
                        <img
                            src="assets/images/ngrx-logo.png"
                            alt="NgRx Team"
                            class="w-7 h-7"
                        />
                      </div>
                    }
                  </div>
                  <div class="flex-1 text-center sm:text-left">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {{ getSpeakerName(trainerId) }}
                    </h5>
                    <p class="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">
                      {{ getSpeakerTitle(trainerId) }}
                    </p>
                    @if (getSpeakerCompany(trainerId)) {
                      <p class="text-base text-gray-600 dark:text-gray-400 mb-3">
                        {{ getSpeakerCompany(trainerId) }}
                      </p>
                    }
                    @if (getSpeakerById(trainerId)?.bio) {
                      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
        .dark\:bg-gray-750 {
          background-color: rgba(55, 65, 81, 0.5);
        }
      }
    `
  ],
  standalone: true
})
export class WorkshopsComponent {
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

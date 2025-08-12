import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ngde-workshop-schedule',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Workshop Day Agenda -->
    <div class="mb-16">
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <!-- Agenda Header -->
        <div
          class="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 flex items-center justify-between"
        >
          <h3 class="text-xl font-bold text-white">📅 Workshop Day Schedule</h3>
          <button
            (click)="toggleSchedule()"
            class="text-white hover:text-primary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 rounded-md p-1"
            [attr.aria-expanded]="isOpen"
            aria-label="Toggle schedule visibility"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-300"
              [class.rotate-180]="isOpen"
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
        </div>

        <!-- Agenda Content -->
        <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isOpen"
          [class.max-h-[2000px]]="isOpen"
          [class.opacity-0]="!isOpen"
          [class.opacity-100]="isOpen"
        >
          <div class="p-6 md:p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Main Schedule -->
              <div class="space-y-4">
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-primary-600 dark:text-primary-400"
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
                  Main Schedule
                </h4>

                <div class="space-y-3">
                  <div
                    class="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-primary-700 dark:text-primary-300"
                        >07:45</span
                      >
                      <span
                        class="block text-xs text-gray-500 dark:text-gray-400"
                        >- 08:30</span
                      >
                    </div>
                    <div class="flex-1">
                      <span class="font-medium text-gray-900 dark:text-gray-100"
                        >Open Registration</span
                      >
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Check-in and welcome coffee
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-primary-700 dark:text-primary-300"
                        >08:30</span
                      >
                      <span
                        class="block text-xs text-gray-500 dark:text-gray-400"
                        >onwards</span
                      >
                    </div>
                    <div class="flex-1">
                      <span class="font-medium text-gray-900 dark:text-gray-100"
                        >Snacks & Coffee</span
                      >
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Light refreshments available
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-primary-700 dark:text-primary-300"
                        >09:00</span
                      >
                    </div>
                    <div class="flex-1">
                      <span
                        class="font-medium text-primary-900 dark:text-primary-100"
                        >Workshops Begin</span
                      >
                      <p class="text-sm text-primary-700 dark:text-primary-300">
                        All workshops start simultaneously
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg border border-primary-300 dark:border-primary-600"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-primary-800 dark:text-primary-200"
                        >16:30</span
                      >
                    </div>
                    <div class="flex-1">
                      <span
                        class="font-medium text-primary-900 dark:text-primary-100"
                        >Workshops End</span
                      >
                      <p class="text-sm text-primary-800 dark:text-primary-200">
                        Wrap-up and networking
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Breaks -->
              <div class="space-y-4">
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-primary-600 dark:text-primary-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    ></path>
                  </svg>
                  Breaks & Refreshments
                </h4>

                <div class="space-y-3">
                  <div
                    class="flex items-center gap-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >10:30</span
                      >
                    </div>
                    <div class="flex-1">
                      <span class="font-medium text-gray-900 dark:text-gray-100"
                        >Coffee Break</span
                      >
                      <p class="text-sm text-gray-700 dark:text-gray-300">
                        Up to 30-minute refreshment break
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 bg-gray-200 dark:bg-gray-600 rounded-lg border border-gray-400 dark:border-gray-500"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >12:30</span
                      >
                    </div>
                    <div class="flex-1">
                      <span class="font-medium text-gray-900 dark:text-gray-100"
                        >Lunch Break</span
                      >
                      <p class="text-sm text-gray-700 dark:text-gray-300">
                        60-minute lunch break
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex items-center gap-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
                  >
                    <div class="flex-shrink-0 w-16 text-center">
                      <span
                        class="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >15:15</span
                      >
                    </div>
                    <div class="flex-1">
                      <span class="font-medium text-gray-900 dark:text-gray-100"
                        >Coffee Break</span
                      >
                      <p class="text-sm text-gray-700 dark:text-gray-300">
                        Up to 30-minute refreshment break
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div
              class="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700"
            >
              <div class="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <div>
                  <p
                    class="text-sm text-primary-800 dark:text-primary-200 font-medium"
                  >
                    All times are in Central European Time (CET)
                  </p>
                  <p
                    class="text-xs text-primary-700 dark:text-primary-300 mt-1"
                  >
                    Please arrive 15 minutes before your workshop starts to
                    ensure a smooth beginning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class WorkshopScheduleComponent {
  isOpen = true; // Default open

  toggleSchedule() {
    this.isOpen = !this.isOpen;
  }
}

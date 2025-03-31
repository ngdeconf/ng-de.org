import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Conference Overview
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Three days packed with learning, networking, and community building
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Workshop Day -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Workshop Day</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    November 5, 2025
                  </p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Full-day hands-on workshops with Angular experts. Deep dive into
                specific topics and get practical experience.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-primary-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>6-hour intensive workshops</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-primary-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Small group sizes</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-primary-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Hands-on exercises</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Conference Day 1 -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
          >
            <div
              class="absolute top-0 left-0 w-full h-1 bg-secondary-500"
            ></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-secondary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Conference Day 1</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    November 6, 2025
                  </p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                First day of the main conference with keynote talks, technical
                sessions, and networking opportunities.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-secondary-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Keynote presentations</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-secondary-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Technical sessions</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-secondary-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Evening networking event</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Conference Day 2 -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-accent-500"></div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Conference Day 2</h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    November 7, 2025
                  </p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Second day featuring more technical talks, panel discussions,
                and closing ceremony.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-accent-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Advanced technical talks</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-accent-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Panel discussions</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-5 h-5 text-accent-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Closing ceremony</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class OverviewComponent {}

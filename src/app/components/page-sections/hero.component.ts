import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section
      id="home"
      class="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      <div class="container mx-auto px-4 relative z-10">
        <div class="md:flex md:items-center md:justify-between md:space-x-10">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span class="block">
                <span
                  class="bg-clip-text text-transparent bg-gradient-to-l from-[#e40341] via-[#f034e0] via-[#921bf2] to-[#2192d1]"
                >
                  NG-DE
                </span>
              </span>
              <span class="block">Berlin 2025</span>
            </h1>

            <p
              class="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
            >
              The community-driven Angular conference in Germany
            </p>

            <div class="mb-8 text-gray-600 dark:text-gray-400">
              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-primary-500"
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
                <span>November 5-7, 2025</span>
              </div>

              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>GLS Campus Berlin</span>
              </div>

              <div class="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Kastanienallee 82, 10435 Berlin</span>
              </div>

              <div class="flex items-start mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 mt-1 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <span class="block">Nov 5: Workshop Day</span>
                  <span class="block">Nov 6-7: Conference Days</span>
                </div>
              </div>
            </div>

            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a href="#tickets" class="cta-button-berlin text-center">
                Get Tickets
              </a>
              <a
                href="#speakers"
                class="inline-block px-6 py-3 font-medium rounded-md transition-all bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 text-center"
              >
                View Speakers
              </a>
            </div>
          </div>

          <div class="md:w-1/2 relative">
            <div class="relative overflow-hidden rounded-lg shadow-2xl">
              <div
                class="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10"
              ></div>
              <img
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1000"
                alt="Berlin TV Tower and Conference"
                class="w-full rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            <!-- Floating badges -->
            <div
              class="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg"
            >
              <img src="assets/logo.svg" alt="NG-DE Logo" class="h-12 w-12" />
            </div>
            <div
              class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg flex items-center justify-center"
            >
              <div class="text-xs font-semibold text-gray-500">BERLIN</div>
              <div class="text-2xl font-bold text-primary-500 ml-1">2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}

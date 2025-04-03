import { Component } from '@angular/core';

@Component({
  selector: 'app-organizer',
  template: `
    <section id="organizer" class="relative py-20 overflow-hidden">
      <!-- Gradient background with wavy bottom -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-500 z-0"
      ></div>

      <!-- Wave shape at bottom -->
      <div class="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,181.3C672,181,768,171,864,181.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div class="container mx-auto px-4 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Logo (first on mobile, second on desktop) -->
          <div class="flex justify-center items-center order-1 md:order-2">
            <img
              src="assets/logo-workshopsde-white-text.svg"
              alt="workshops.de logo"
              class="w-full max-w-sm p-4"
            />
          </div>

          <!-- Text content (second on mobile, first on desktop) -->
          <div
            class="text-white bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-lg order-2 md:order-1"
          >
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Organized by workshops.de
            </h2>

            <h3 class="text-2xl md:text-3xl font-bold mb-8">
              IT training that you effortlessly understand
            </h3>

            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-lg">
                  From Google Developer Experts and experienced experts
                </p>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-lg">
                  From the minds behind Angular.DE, Reactjs.DE and Vuejs.DE,
                  NG-DE Conference
                </p>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-lg">
                  1100+ seminars conducted and 8200+ training participants
                </p>
              </div>
            </div>

            <a
              href="https://workshops.de"
              target="_blank"
              class="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-blue-50 transition-colors"
            >
              Visit workshops.de
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class OrganizerComponent {}

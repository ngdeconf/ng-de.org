import { Component } from '@angular/core';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-speakers',
  template: `
    <section id="speakers" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Meet Our Speakers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn from Angular experts and community leaders from around the
            world
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (speaker of speakers(); track speaker.id; let i = $index) {
          <div
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl opacity-0 animate-fade-in"
            [style.animation-delay]="i * 100 + 'ms'"
          >
            <!-- Card Header with Image -->
            <div
              class="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8"
            >
              <div class="relative mx-auto w-40 h-40 mb-6">
                <!-- Image Container -->
                <div
                  class="absolute inset-0 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-lg"
                >
                  <img
                    [src]="speaker.imageUrl"
                    [alt]="speaker.name"
                    class="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <!-- Speaker Info -->
              <div class="text-center mb-4">
                <h3 class="text-2xl font-bold mb-1">{{ speaker.name }}</h3>
                <p
                  class="text-primary-600 dark:text-primary-400 font-medium mb-1"
                >
                  {{ speaker.title }}
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  {{ speaker.company }}
                </p>
              </div>

              <!-- Bio -->
              <div class="relative mb-6">
                <div
                  class="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#e40341] via-[#f034e0] to-[#2192d1] rounded-full"
                ></div>
                <p
                  class="text-gray-600 dark:text-gray-400 text-sm line-clamp-4"
                >
                  {{ speaker.bio }}
                </p>
              </div>

              <!-- Social Links -->
              <div class="flex justify-center space-x-4">
                @if (speaker.githubHandle) {
                <a
                  [href]="'https://github.com/' + speaker.githubHandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/social text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    class="w-6 h-6 transform group-hover/social:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
                }
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
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
    `
  ]
})
export class SpeakersComponent {
  speakers = this.conferenceService.getSpeakers();

  constructor(private conferenceService: ConferenceService) {}
}

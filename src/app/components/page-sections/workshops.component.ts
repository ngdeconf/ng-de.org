import { Component } from '@angular/core';
import { ConferenceService } from '../../services/conference.service';
import { WorkshopService } from '../../services/workshop.service';

@Component({
  selector: 'app-workshops',
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
                <h4
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3"
                >
                  Workshop Leaders
                </h4>
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
  `,
  styles: [
    `
      .bg-white {
        transition: transform 0.3s ease;
      }
      .bg-white:hover {
        transform: translateY(-5px);
      }
    `
  ]
})
export class WorkshopsComponent {
  workshops = this.workshopService.getWorkshops();

  constructor(
    private conferenceService: ConferenceService,
    private workshopService: WorkshopService
  ) {}

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
}

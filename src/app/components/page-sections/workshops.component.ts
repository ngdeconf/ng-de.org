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
              <div
                class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4"
              >
                <h3 class="text-xl font-bold">{{ workshop.title }}</h3>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200 whitespace-nowrap"
                >
                  {{ workshop.duration }}
                </span>
              </div>

              <p
                class="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-3"
              >
                {{ workshop.teaser }}
              </p>

              <p class="text-gray-600 dark:text-gray-400 mb-6">
                {{ workshop.abstract }}
              </p>

              <div class="mb-6">
                <div class="flex flex-col space-y-4">
                  @for (trainerId of workshop.trainers || [workshop.trainerId];
                  track trainerId) {
                  <div class="flex items-center">
                    <img
                      [src]="getSpeakerImage(trainerId)"
                      [alt]="getSpeakerName(trainerId)"
                      class="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                      <p class="font-medium">{{ getSpeakerName(trainerId) }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ getSpeakerTitle(trainerId) }}
                      </p>
                    </div>
                  </div>
                  }
                </div>
              </div>

              <div class="flex justify-between items-center">
                <div
                  class="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Capacity: {{ workshop.capacity }} attendees</span>
                </div>

                <a href="https://ti.to/ng-de/berlin-2025" target="_blank">
                  <button class="cta-button rotate-gradient">
                    Register Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `
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

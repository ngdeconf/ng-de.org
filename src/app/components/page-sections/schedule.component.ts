import { Component, signal } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../models/models';

@Component({
  selector: 'ngde-schedule',
  standalone: true,
  template: `
    <section id="schedule" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Conference Schedule
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Three days packed with Angular insights, best practices, and
            community networking
          </p>

          <div class="flex justify-center mt-8 space-x-4">
            @for (day of schedule(); track day.datetime) {
            <button
              (click)="setActiveDay(day.datetime)"
              class="px-6 py-2 rounded-md font-medium transition-colors"
              [class.bg-primary-500]="activeDay() === day.datetime"
              [class.text-white]="activeDay() === day.datetime"
              [class.bg-gray-200]="activeDay() !== day.datetime"
              [class.dark:bg-gray-700]="activeDay() !== day.datetime"
              [class.text-gray-800]="activeDay() !== day.datetime"
              [class.dark:text-gray-200]="activeDay() !== day.datetime"
            >
              {{ day.title }}
            </button>
            }
          </div>
        </div>

        <div
          class="relative overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800"
        >
          <table class="w-full text-left">
            <thead
              class="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">Time</th>
                <th scope="col" class="px-6 py-3 font-medium">Title</th>
                <th scope="col" class="px-6 py-3 font-medium">Speaker</th>
                <th scope="col" class="px-6 py-3 font-medium">Location</th>
              </tr>
            </thead>
            <tbody>
              @for (entry of filteredEntries(); track entry.datetime) {
              <tr
                class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ formatTime(entry.datetime) }}
                </td>
                <td class="px-6 py-4">
                  <div class="font-medium">{{ entry.title }}</div>
                </td>
                <td class="px-6 py-4">
                  @if (getSpeakerByName(entry.information)) {
                    <div class="flex items-center">
                      <img 
                        [src]="getSpeakerByName(entry.information)?.imageUrl" 
                        [alt]="entry.information"
                        class="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <div class="text-sm text-gray-600 dark:text-gray-400">
                        {{ entry.information }}
                      </div>
                    </div>
                  } @else {
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      {{ entry.information }}
                    </div>
                  }
                </td>
                <td class="px-6 py-4">{{ entry.location }}</td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `
})
export class ScheduleComponent {
  schedule = this.scheduleService.getSchedule();
  speakers = this.speakerService.getSpeakers();
  activeDay = signal<string>('');

  constructor(
    private scheduleService: ScheduleService,
    private speakerService: SpeakerService
  ) {
    // Set the first day as active by default
    if (this.schedule().length > 0) {
      this.activeDay.set(this.schedule()[0].datetime);
    }
  }

  filteredEntries() {
    return (
      this.schedule().find(day => day.datetime === this.activeDay())?.entries ||
      []
    );
  }

  setActiveDay(datetime: string) {
    this.activeDay.set(datetime);
  }

  formatTime(datetime: string): string {
    return new Date(datetime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  /**
   * Find speaker by their name
   */
  getSpeakerByName(name: string): Speaker | undefined {
    if (!name) return undefined;
    
    // Clean up the name to handle "Name (Title)" format or "Call for Papers" etc.
    const cleanName = name.split('(')[0].trim();
    
    // Skip non-speaker entries like "Call for Papers", "Orga Team", etc.
    if (
      cleanName.includes('Call for Papers') || 
      cleanName.includes('Orga Team') || 
      cleanName.includes('Networking') ||
      cleanName.includes('Lunch') ||
      cleanName.includes('TBD') ||
      cleanName.includes('Social event') ||
      cleanName.includes('Wrap-up') ||
      cleanName === 'Registration' ||
      cleanName === 'Angular Team'
    ) {
      return undefined;
    }
    
    // Try to find by exact name
    const speaker = this.speakers().find(s => 
      s.name === cleanName || 
      cleanName.includes(s.name)
    );
    
    return speaker;
  }
}

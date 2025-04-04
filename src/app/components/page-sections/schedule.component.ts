import { Component, signal } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
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
                <th scope="col" class="px-6 py-3 font-medium">Information</th>
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
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ entry.information }}
                  </div>
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
  activeDay = signal<string>('');

  constructor(private scheduleService: ScheduleService) {
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
}

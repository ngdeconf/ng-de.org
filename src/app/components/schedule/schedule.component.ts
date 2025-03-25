import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../services/conference.service';
import { Talk } from '../../models/models';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="schedule" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Conference Schedule</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Two days packed with Angular insights, best practices, and community networking
          </p>
          
          <div class="flex justify-center mt-8 space-x-4">
            <button 
              (click)="setActiveDay('day1')"
              class="px-6 py-2 rounded-md font-medium transition-colors"
              [class.bg-primary-500]="activeDay() === 'day1'"
              [class.text-white]="activeDay() === 'day1'"
              [class.bg-gray-200]="activeDay() !== 'day1'"
              [class.dark:bg-gray-700]="activeDay() !== 'day1'"
              [class.text-gray-800]="activeDay() !== 'day1'"
              [class.dark:text-gray-200]="activeDay() !== 'day1'">
              Day 1 (Nov 6)
            </button>
            <button 
              (click)="setActiveDay('day2')"
              class="px-6 py-2 rounded-md font-medium transition-colors"
              [class.bg-primary-500]="activeDay() === 'day2'"
              [class.text-white]="activeDay() === 'day2'"
              [class.bg-gray-200]="activeDay() !== 'day2'"
              [class.dark:bg-gray-700]="activeDay() !== 'day2'"
              [class.text-gray-800]="activeDay() !== 'day2'"
              [class.dark:text-gray-200]="activeDay() !== 'day2'">
              Day 2 (Nov 7)
            </button>
          </div>
        </div>
        
        <div class="relative overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <table class="w-full text-left">
            <thead class="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">Time</th>
                <th scope="col" class="px-6 py-3 font-medium">Talk</th>
                <th scope="col" class="px-6 py-3 font-medium">Speaker</th>
                <th scope="col" class="px-6 py-3 font-medium hidden md:table-cell">Room</th>
              </tr>
            </thead>
            <tbody>
              @for (talk of filteredTalks(); track talk.id) {
                <tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td class="px-6 py-4 whitespace-nowrap">{{ talk.time }}</td>
                  <td class="px-6 py-4">
                    <div class="font-medium">{{ talk.title }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{{ talk.abstract }}</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <img 
                        [src]="getSpeakerImage(talk.speakerId)" 
                        [alt]="getSpeakerName(talk.speakerId)"
                        class="h-8 w-8 rounded-full mr-3" 
                      />
                      <span>{{ getSpeakerName(talk.speakerId) }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 hidden md:table-cell">{{ talk.room }}</td>
                </tr>
              }
              
              @if (activeDay() === 'day1') {
                <tr class="border-b border-gray-200 dark:border-gray-700 bg-primary-50 dark:bg-primary-900/20">
                  <td class="px-6 py-4 whitespace-nowrap">12:30 - 14:00</td>
                  <td class="px-6 py-4 font-medium">Lunch Break</td>
                  <td class="px-6 py-4">-</td>
                  <td class="px-6 py-4 hidden md:table-cell">Restaurant Area</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700 bg-primary-50 dark:bg-primary-900/20">
                  <td class="px-6 py-4 whitespace-nowrap">17:00 - 19:00</td>
                  <td class="px-6 py-4 font-medium">Networking Reception</td>
                  <td class="px-6 py-4">-</td>
                  <td class="px-6 py-4 hidden md:table-cell">Main Hall</td>
                </tr>
              }
              
              @if (activeDay() === 'day2') {
                <tr class="border-b border-gray-200 dark:border-gray-700 bg-primary-50 dark:bg-primary-900/20">
                  <td class="px-6 py-4 whitespace-nowrap">12:30 - 14:00</td>
                  <td class="px-6 py-4 font-medium">Lunch Break</td>
                  <td class="px-6 py-4">-</td>
                  <td class="px-6 py-4 hidden md:table-cell">Restaurant Area</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700 bg-primary-50 dark:bg-primary-900/20">
                  <td class="px-6 py-4 whitespace-nowrap">17:00 - 18:00</td>
                  <td class="px-6 py-4 font-medium">Closing Keynote</td>
                  <td class="px-6 py-4">Conference Team</td>
                  <td class="px-6 py-4 hidden md:table-cell">Main Hall</td>
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
  activeDay = signal<'day1' | 'day2'>('day1');
  talks = this.conferenceService.getTalks();
  
  constructor(private conferenceService: ConferenceService) {}
  
  filteredTalks() {
    return this.talks().filter(talk => talk.day === this.activeDay());
  }
  
  setActiveDay(day: 'day1' | 'day2') {
    this.activeDay.set(day);
  }
  
  getSpeakerName(speakerId: string): string {
    const speaker = this.conferenceService.getSpeakerById(speakerId);
    return speaker ? speaker.name : 'Unknown Speaker';
  }
  
  getSpeakerImage(speakerId: string): string {
    const speaker = this.conferenceService.getSpeakerById(speakerId);
    return speaker ? speaker.imageUrl : '';
  }
}
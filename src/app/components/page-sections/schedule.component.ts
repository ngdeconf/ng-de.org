import { Component, signal } from '@angular/core';

import { ScheduleService } from '../../services/schedule.service';
import { SpeakerService } from '../../services/speaker.service';
import { TalkService } from '../../services/talk.service';
import { Speaker, Talk } from '../../models/models';

// Define interface for schedule entry to replace 'any' types
interface ScheduleEntry {
  datetime: string;
  title: string;
  information: string;
  session: string | null;
  location: string;
  speakers?: string[];
}

@Component({
  selector: 'ngde-schedule',
  standalone: true,
  imports: [],
  template: `
    <section id="schedule" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Conference Schedule</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Two days packed with Angular insights, best practices, and community networking
          </p>
        </div>

        @for (day of schedule(); track day.datetime) {
          <!-- Day Header -->
          <div class="mb-8">
            <h3 class="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              {{ day.title }}
            </h3>

            <!-- Desktop Table Layout (hidden on mobile) -->
            <div class="hidden md:block relative overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800 mb-12">
              <table class="w-full text-left">
                <thead class="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <tr>
                  <th scope="col" class="px-6 py-3 font-medium border-r-2 border-dashed border-gray-300 dark:border-gray-600">Time</th>
                  <th scope="col" class="px-6 py-3 font-medium border-r-2 border-dashed border-gray-300 dark:border-gray-600">Pool House</th>
                  <th scope="col" class="px-6 py-3 font-medium">Aula</th>
                </tr>
                </thead>
                <tbody>
                  @for (timeSlot of getUniqueTimeSlots(day.entries); track timeSlot) {
                    @let poolEntries = getPoolStageEntries(day.entries, timeSlot);
                    @let aulaEntries = getAulaStageEntries(day.entries, timeSlot);
                    @let poolEntry = poolEntries[0];
                    @let aulaEntry = aulaEntries[0];
                    
                    <tr
                        class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        [class.bg-gradient-to-r]="poolEntry && isBreak(poolEntry)"
                        [class.from-[#e40341]]="poolEntry && isBreak(poolEntry)"
                        [class.via-[#f034e0]]="poolEntry && isBreak(poolEntry)"
                        [class.to-[#2192d1]]="poolEntry && isBreak(poolEntry)"
                        [class.text-white]="poolEntry && isBreak(poolEntry)"
                        [class.opacity-90]="poolEntry && isBreak(poolEntry) && !isParty(poolEntry)"
                        [class.opacity-100]="poolEntry && isParty(poolEntry)"
                    >
                      <!-- Time Column -->
                      <td class="px-6 py-4 whitespace-nowrap border-r-2 border-dashed border-gray-300 dark:border-gray-600">
                        {{ formatTime(timeSlot) }}
                      </td>
                      
                      <!-- Stage Pool Column -->
                      <td class="px-6 py-4 border-r-2 border-dashed border-gray-300 dark:border-gray-600"
                          [class.cursor-pointer]="poolEntry && getTalkBySession(poolEntry.session)"
                          (click)="poolEntry && showTalkDetails(poolEntry.session)">
                        @if (poolEntry) {
                          <!-- Talk Title -->
                          <div class="font-medium mb-2">
                            {{ getTalkTitle(poolEntry) }}
                            @if (getTalkBySession(poolEntry.session)) {
                              <span class="ml-1 text-xs text-primary-500 dark:text-primary-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                              </span>
                            }
                          </div>
                          
                          <!-- Speaker Information -->
                          @if (poolEntry.speakers) {
                            @for (speaker of poolEntry.speakers; track speaker) {
                              @if (getSpeakerByName(speaker)) {
                                <div class="flex items-center mb-2 last:mb-0">
                                  <div class="relative flex-shrink-0"
                                       [class.mr-6]="getSpeakerByName(speaker)?.ngrxTeam || getSpeakerByName(speaker)?.angularTeam"
                                       [class.mr-4]="!getSpeakerByName(speaker)?.ngrxTeam && !getSpeakerByName(speaker)?.angularTeam">
                                    <img
                                        [src]="getSpeakerByName(speaker)?.imageUrl"
                                        [alt]="poolEntry.information"
                                        class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                    />
                                    @if (getSpeakerByName(speaker)?.angularTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/angular_gradient.png"
                                            alt="Angular Team"
                                            class="w-5 h-5"
                                        />
                                      </div>
                                    }
                                    @if (getSpeakerByName(speaker)?.ngrxTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/ngrx-logo.png"
                                            alt="NgRx Team"
                                            class="w-5 h-5"
                                        />
                                      </div>
                                    }
                                  </div>
                                  <div class="min-w-0 flex-1">
                                    <div class="font-medium" [class.text-white]="isBreak(poolEntry)"
                                         [class.text-gray-900]="!isBreak(poolEntry)"
                                         [class.dark:text-gray-100]="!isBreak(poolEntry)">
                                      {{ speaker }}
                                    </div>
                                    <div class="text-sm mt-1" [class.text-white]="isBreak(poolEntry)"
                                         [class.text-gray-500]="!isBreak(poolEntry)"
                                         [class.dark:text-gray-400]="!isBreak(poolEntry)">
                                      {{ getSpeakerByName(speaker)?.title }}
                                    </div>
                                  </div>
                                </div>
                              }
                            }
                          } @else {
                            @if (getSpeakerByName(poolEntry.information) || getSpeakerBySession(poolEntry.session)) {
                              <div class="flex items-center">
                                <div class="relative flex-shrink-0"
                                     [class.mr-6]="(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.ngrxTeam || (getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.angularTeam"
                                     [class.mr-4]="!(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.ngrxTeam && !(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.angularTeam">
                                  <img
                                      [src]="(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.imageUrl"
                                      [alt]="poolEntry.information"
                                      class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                  />
                                  @if ((getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.angularTeam) {
                                    <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                      <img
                                          src="assets/images/angular_gradient.png"
                                          alt="Angular Team"
                                          class="w-5 h-5"
                                      />
                                    </div>
                                  }
                                  @if ((getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.ngrxTeam) {
                                    <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                      <img
                                          src="assets/images/ngrx-logo.png"
                                          alt="NgRx Team"
                                          class="w-5 h-5"
                                      />
                                    </div>
                                  }
                                </div>
                                <div class="min-w-0 flex-1">
                                  <div class="font-medium" [class.text-white]="isBreak(poolEntry)"
                                       [class.text-gray-900]="!isBreak(poolEntry)"
                                       [class.dark:text-gray-100]="!isBreak(poolEntry)">
                                    {{ getSpeakerName(poolEntry) }}
                                  </div>
                                  <div class="text-sm mt-1" [class.text-white]="isBreak(poolEntry)"
                                       [class.text-gray-500]="!isBreak(poolEntry)"
                                       [class.dark:text-gray-400]="!isBreak(poolEntry)">
                                    {{ getSpeakerTitle(poolEntry) }}
                                  </div>
                                </div>
                              </div>
                            } @else {
                              <div class="text-sm" [class.text-white]="isBreak(poolEntry)"
                                   [class.text-gray-600]="!isBreak(poolEntry)" [class.dark:text-gray-400]="!isBreak(poolEntry)">
                                {{ poolEntry.information }}
                              </div>
                            }
                          }
                        }
                      </td>
                      
                      <!-- Aula Column -->
                      <td class="px-6 py-4"
                          [class.cursor-pointer]="aulaEntry && getTalkBySession(aulaEntry.session)"
                          (click)="aulaEntry && showTalkDetails(aulaEntry.session)">
                        @if (aulaEntry && aulaEntry.location !== 'Both Stages') {
                          <!-- Talk Title -->
                          <div class="font-medium mb-2">
                            {{ getTalkTitle(aulaEntry) }}
                            @if (getTalkBySession(aulaEntry.session)) {
                              <span class="ml-1 text-xs text-primary-500 dark:text-primary-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                              </span>
                            }
                          </div>
                          
                          <!-- Speaker Information -->
                          @if (aulaEntry.speakers) {
                            @for (speaker of aulaEntry.speakers; track speaker) {
                              @if (getSpeakerByName(speaker)) {
                                <div class="flex items-center mb-2 last:mb-0">
                                  <div class="relative flex-shrink-0"
                                       [class.mr-6]="getSpeakerByName(speaker)?.ngrxTeam || getSpeakerByName(speaker)?.angularTeam"
                                       [class.mr-4]="!getSpeakerByName(speaker)?.ngrxTeam && !getSpeakerByName(speaker)?.angularTeam">
                                    <img
                                        [src]="getSpeakerByName(speaker)?.imageUrl"
                                        [alt]="aulaEntry.information"
                                        class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                    />
                                    @if (getSpeakerByName(speaker)?.angularTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/angular_gradient.png"
                                            alt="Angular Team"
                                            class="w-5 h-5"
                                        />
                                      </div>
                                    }
                                    @if (getSpeakerByName(speaker)?.ngrxTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/ngrx-logo.png"
                                            alt="NgRx Team"
                                            class="w-5 h-5"
                                        />
                                      </div>
                                    }
                                  </div>
                                  <div class="min-w-0 flex-1">
                                    <div class="font-medium text-gray-900 dark:text-gray-100">
                                      {{ speaker }}
                                    </div>
                                    <div class="text-sm mt-1 text-gray-500 dark:text-gray-400">
                                      {{ getSpeakerByName(speaker)?.title }}
                                    </div>
                                  </div>
                                </div>
                              }
                            }
                          } @else {
                            @if (getSpeakerByName(aulaEntry.information) || getSpeakerBySession(aulaEntry.session)) {
                              <div class="flex items-center">
                                <div class="relative flex-shrink-0"
                                     [class.mr-6]="(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.ngrxTeam || (getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.angularTeam"
                                     [class.mr-4]="!(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.ngrxTeam && !(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.angularTeam">
                                  <img
                                      [src]="(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.imageUrl"
                                      [alt]="aulaEntry.information"
                                      class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                  />
                                  @if ((getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.angularTeam) {
                                    <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                      <img
                                          src="assets/images/angular_gradient.png"
                                          alt="Angular Team"
                                          class="w-5 h-5"
                                      />
                                    </div>
                                  }
                                  @if ((getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.ngrxTeam) {
                                    <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                      <img
                                          src="assets/images/ngrx-logo.png"
                                          alt="NgRx Team"
                                          class="w-5 h-5"
                                      />
                                    </div>
                                  }
                                </div>
                                <div class="min-w-0 flex-1">
                                  <div class="font-medium text-gray-900 dark:text-gray-100">
                                    {{ getSpeakerName(aulaEntry) }}
                                  </div>
                                  <div class="text-sm mt-1 text-gray-500 dark:text-gray-400">
                                    {{ getSpeakerTitle(aulaEntry) }}
                                  </div>
                                </div>
                              </div>
                            } @else {
                              <div class="text-sm text-gray-600 dark:text-gray-400">
                                {{ aulaEntry.information }}
                              </div>
                            }
                          }
                        } @else {
                          <!-- Empty for "Both Stages" events or no Aula-specific content -->
                          <div class="text-sm text-gray-400 dark:text-gray-500 italic">
                            <!-- No separate Aula content -->
                          </div>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            <!-- Mobile Card Layout (hidden on desktop) -->
            <div class="md:hidden space-y-4 mb-12">
              @for (timeSlot of getUniqueTimeSlots(day.entries); track timeSlot) {
                @let poolEntries = getPoolStageEntries(day.entries, timeSlot);
                @let aulaEntries = getAulaStageEntries(day.entries, timeSlot);
                @let poolEntry = poolEntries[0];
                @let aulaEntry = aulaEntries[0];
                
                <div class="rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
                  <!-- Time Badge -->
                  <div class="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                    <div
                        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {{ formatTime(timeSlot) }}
                    </div>
                  </div>

                  <!-- Two Stage Layout -->
                  <div class="divide-y divide-gray-200 dark:divide-gray-600">
                    <!-- Stage Pool -->
                    <div 
                        class="p-4"
                        [class.cursor-pointer]="poolEntry && getTalkBySession(poolEntry.session)"
                        [class.bg-gradient-to-r]="poolEntry && isBreak(poolEntry)"
                        [class.from-[#e40341]]="poolEntry && isBreak(poolEntry)"
                        [class.via-[#f034e0]]="poolEntry && isBreak(poolEntry)"
                        [class.to-[#2192d1]]="poolEntry && isBreak(poolEntry)"
                        [class.text-white]="poolEntry && isBreak(poolEntry)"
                        [class.opacity-90]="poolEntry && isBreak(poolEntry) && !isParty(poolEntry)"
                        [class.opacity-100]="poolEntry && isParty(poolEntry)"
                        (click)="poolEntry && showTalkDetails(poolEntry.session)"
                    >
                      <!-- Stage Label -->
                      <div class="flex items-center justify-between mb-3">
                        <h4 
                            class="text-sm font-semibold"
                            [class]="poolEntry && isBreak(poolEntry) ? 'text-white' : 'text-primary-600 dark:text-primary-400'"
                        >
                          Pool House
                        </h4>
                        @if (poolEntry && getTalkBySession(poolEntry.session)) {
                          <div [class]="poolEntry && isBreak(poolEntry) ? 'text-white' : 'text-primary-500 dark:text-primary-400'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                        }
                      </div>

                      @if (poolEntry) {
                        <!-- Title -->
                        <h5
                            class="text-base font-semibold mb-3"
                            [class]="isBreak(poolEntry) ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
                        >
                          {{ getTalkTitle(poolEntry) }}
                        </h5>

                        <!-- Speaker Information -->
                        @if (poolEntry.speakers) {
                          <div class="space-y-3">
                            @for (speaker of poolEntry.speakers; track speaker) {
                              @if (getSpeakerByName(speaker)) {
                                <div class="flex items-center"
                                      [class.space-x-5]="getSpeakerByName(speaker)?.ngrxTeam || getSpeakerByName(speaker)?.angularTeam"
                                      [class.space-x-4]="!getSpeakerByName(speaker)?.ngrxTeam && !getSpeakerByName(speaker)?.angularTeam">
                                  <div class="relative flex-shrink-0">
                                    <img
                                        [src]="getSpeakerByName(speaker)?.imageUrl"
                                        [alt]="speaker"
                                        class="w-12 h-12 rounded-full object-cover border-2"
                                        [class]="isBreak(poolEntry) ? 'border-white/30' : 'border-gray-200 dark:border-gray-700'"
                                    />
                                    @if (getSpeakerByName(speaker)?.angularTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/angular_gradient.png"
                                            alt="Angular Team"
                                            class="w-4 h-4"
                                        />
                                      </div>
                                    }
                                    @if (getSpeakerByName(speaker)?.ngrxTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/ngrx-logo.png"
                                            alt="NgRx Team"
                                            class="w-4 h-4"
                                        />
                                      </div>
                                    }
                                  </div>
                                  <div class="min-w-0 flex-1">
                                    <div
                                        class="font-medium text-sm"
                                        [class]="isBreak(poolEntry) ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
                                    >
                                      {{ speaker }}
                                    </div>
                                    <div
                                        class="text-xs mt-1"
                                        [class]="isBreak(poolEntry) ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'"
                                    >
                                      {{ getSpeakerByName(speaker)?.title }}
                                    </div>
                                  </div>
                                </div>
                              }
                            }
                          </div>
                        } @else if (getSpeakerByName(poolEntry.information) || getSpeakerBySession(poolEntry.session)) {
                          <div class="flex items-center"
                                [class.space-x-5]="(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.ngrxTeam || (getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.angularTeam"
                                [class.space-x-4]="!(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.ngrxTeam && !(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.angularTeam">
                            <div class="relative flex-shrink-0">
                              <img
                                  [src]="(getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.imageUrl"
                                  [alt]="poolEntry.information"
                                  class="w-12 h-12 rounded-full object-cover border-2"
                                  [class]="isBreak(poolEntry) ? 'border-white/30' : 'border-gray-200 dark:border-gray-700'"
                              />
                              @if ((getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.angularTeam) {
                                <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                  <img
                                      src="assets/images/angular_gradient.png"
                                      alt="Angular Team"
                                      class="w-4 h-4"
                                  />
                                </div>
                              }
                              @if ((getSpeakerBySession(poolEntry.session) || getSpeakerByName(poolEntry.information))?.ngrxTeam) {
                                <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                  <img
                                      src="assets/images/ngrx-logo.png"
                                      alt="NgRx Team"
                                      class="w-4 h-4"
                                  />
                                </div>
                              }
                            </div>
                            <div class="min-w-0 flex-1">
                              <div
                                  class="font-medium text-sm"
                                  [class]="isBreak(poolEntry) ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
                              >
                                {{ getSpeakerName(poolEntry) }}
                              </div>
                              <div
                                  class="text-xs mt-1"
                                  [class]="isBreak(poolEntry) ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'"
                              >
                                {{ getSpeakerTitle(poolEntry) }}
                              </div>
                            </div>
                          </div>
                        } @else {
                          <div
                              class="text-sm"
                              [class]="isBreak(poolEntry) ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'"
                          >
                            {{ poolEntry.information }}
                          </div>
                        }
                      } @else {
                        <div class="text-sm text-gray-400 dark:text-gray-500 italic">
                          <!-- No Pool Stage content -->
                        </div>
                      }
                    </div>

                    <!-- Aula -->
                    <div class="p-4"
                         [class.cursor-pointer]="aulaEntry && getTalkBySession(aulaEntry.session)"
                         (click)="aulaEntry && showTalkDetails(aulaEntry.session)">
                      <!-- Stage Label -->
                      <div class="flex items-center justify-between mb-3">
                        <h4 class="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          Aula
                        </h4>
                        @if (aulaEntry && getTalkBySession(aulaEntry.session)) {
                          <div class="text-primary-500 dark:text-primary-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                        }
                      </div>
                      
                      @if (aulaEntry && aulaEntry.location !== 'Both Stages') {
                        <!-- Title -->
                        <h5 class="text-base font-semibold mb-3 text-gray-900 dark:text-gray-100">
                          {{ getTalkTitle(aulaEntry) }}
                        </h5>

                        <!-- Speaker Information -->
                        @if (aulaEntry.speakers) {
                          <div class="space-y-3">
                            @for (speaker of aulaEntry.speakers; track speaker) {
                              @if (getSpeakerByName(speaker)) {
                                <div class="flex items-center"
                                      [class.space-x-5]="getSpeakerByName(speaker)?.ngrxTeam || getSpeakerByName(speaker)?.angularTeam"
                                      [class.space-x-4]="!getSpeakerByName(speaker)?.ngrxTeam && !getSpeakerByName(speaker)?.angularTeam">
                                  <div class="relative flex-shrink-0">
                                    <img
                                        [src]="getSpeakerByName(speaker)?.imageUrl"
                                        [alt]="speaker"
                                        class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                    />
                                    @if (getSpeakerByName(speaker)?.angularTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/angular_gradient.png"
                                            alt="Angular Team"
                                            class="w-4 h-4"
                                        />
                                      </div>
                                    }
                                    @if (getSpeakerByName(speaker)?.ngrxTeam) {
                                      <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                        <img
                                            src="assets/images/ngrx-logo.png"
                                            alt="NgRx Team"
                                            class="w-4 h-4"
                                        />
                                      </div>
                                    }
                                  </div>
                                  <div class="min-w-0 flex-1">
                                    <div class="font-medium text-sm text-gray-900 dark:text-gray-100">
                                      {{ speaker }}
                                    </div>
                                    <div class="text-xs mt-1 text-gray-500 dark:text-gray-400">
                                      {{ getSpeakerByName(speaker)?.title }}
                                    </div>
                                  </div>
                                </div>
                              }
                            }
                          </div>
                        } @else {
                          @if (getSpeakerByName(aulaEntry.information) || getSpeakerBySession(aulaEntry.session)) {
                            <div class="flex items-center"
                                  [class.space-x-5]="(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.ngrxTeam || (getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.angularTeam"
                                  [class.space-x-4]="!(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.ngrxTeam && !(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.angularTeam">
                              <div class="relative flex-shrink-0">
                                <img
                                    [src]="(getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.imageUrl"
                                    [alt]="aulaEntry.information"
                                    class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                                />
                                @if ((getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.angularTeam) {
                                  <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                    <img
                                        src="assets/images/angular_gradient.png"
                                        alt="Angular Team"
                                        class="w-4 h-4"
                                    />
                                  </div>
                                }
                                @if ((getSpeakerBySession(aulaEntry.session) || getSpeakerByName(aulaEntry.information))?.ngrxTeam) {
                                  <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                    <img
                                        src="assets/images/ngrx-logo.png"
                                        alt="NgRx Team"
                                        class="w-4 h-4"
                                    />
                                  </div>
                                }
                              </div>
                              <div class="min-w-0 flex-1">
                                <div class="font-medium text-sm text-gray-900 dark:text-gray-100">
                                  {{ getSpeakerName(aulaEntry) }}
                                </div>
                                <div class="text-xs mt-1 text-gray-500 dark:text-gray-400">
                                  {{ getSpeakerTitle(aulaEntry) }}
                                </div>
                              </div>
                            </div>
                          } @else {
                            <div class="text-sm text-gray-600 dark:text-gray-400">
                              {{ aulaEntry.information }}
                            </div>
                          }
                        }
                      } @else {
                        <!-- Empty for "Both Stages" events or no Aula-specific content -->
                        <div class="text-sm text-gray-400 dark:text-gray-500 italic">
                          <!-- No separate Aula content -->
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- Talk Detail Modal -->
        @if (selectedTalk()) {
          <div
              class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              (click)="closeModal()"
          >
            <div
                class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
                (click)="$event.stopPropagation()"
            >
              <div class="p-4 sm:p-6">
                <div class="flex justify-between items-start mb-4">
                  <h3 class="text-xl sm:text-2xl font-bold pr-4">{{ selectedTalk()?.title }}</h3>
                  <button
                      class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 flex-shrink-0"
                      (click)="closeModal()"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <div class="mb-6 space-y-6">
                  @for (selectedSpeaker of selectedSpeakers(); track selectedSpeaker) {
                    @if (selectedSpeaker) {
                      <div class="flex items-start space-x-4">
                        <div class="relative flex-shrink-0">
                          <img
                              [src]="selectedSpeaker?.imageUrl"
                              [alt]="selectedSpeaker?.name"
                              class="w-20 h-20 rounded-full object-cover border-2 border-primary-200 dark:border-primary-900"
                          />
                          @if (selectedSpeaker?.angularTeam) {
                            <div class="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-0.5">
                              <img
                                  src="assets/images/angular_gradient.png"
                                  alt="Angular Team"
                                  class="w-6 h-6"
                              />
                            </div>
                          }
                          @if (selectedSpeaker?.ngrxTeam) {
                            <div class="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-0.5">
                              <img
                                  src="assets/images/ngrx-logo.png"
                                  alt="NgRx Team"
                                  class="w-6 h-6"
                              />
                            </div>
                          }
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-xl font-bold flex items-center mb-2">
                            {{ selectedSpeaker?.name }}
                            @if (selectedSpeaker?.pronouns) {
                              <span
                                  class="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">({{ selectedSpeaker?.pronouns }})</span>
                            }
                          </p>
                          <p class="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-1">
                            {{ selectedSpeaker?.title }}
                          </p>
                          <p class="text-gray-600 dark:text-gray-400">
                            {{ selectedSpeaker?.company }}
                          </p>
                        </div>
                      </div>
                    }
                  }
                </div>

                <div class="mb-4 flex flex-wrap gap-2">
                  <div class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    {{ selectedTalk()?.time }}
                  </div>
                  <div class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    {{ selectedTalk()?.room }}
                  </div>
                </div>

                <div class="prose dark:prose-invert max-w-none text-sm sm:text-base">
                  <p>{{ selectedTalk()?.abstract }}</p>
                </div>

                <div class="mt-6 flex justify-end">
                  <button
                      class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      (click)="closeModal()"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class ScheduleComponent {
  schedule = this.scheduleService.getSchedule();
  speakers = this.speakerService.getSpeakers();
  selectedTalk = signal<Talk | null>(null);
  selectedSpeakers = signal<Speaker[]>([]);

  constructor(
    private scheduleService: ScheduleService,
    private speakerService: SpeakerService,
    private talkService: TalkService
  ) {}

  formatTime(datetime: string): string {
    return new Date(datetime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  getTalkBySession(sessionId: string | null): Talk | undefined {
    if (!sessionId) return undefined;
    return this.talkService.getTalkBySessionId(sessionId);
  }

  getSpeakerBySession(sessionId: string | null): Speaker | undefined {
    if (!sessionId) return undefined;
    const talk = this.getTalkBySession(sessionId);
    if (!talk) return undefined;
    return this.speakerService.getSpeakerById(talk.speakerId);
  }

  getSpeakerName(entry: ScheduleEntry): string {
    // First try to get speaker from session
    const sessionSpeaker = this.getSpeakerBySession(entry.session);
    if (sessionSpeaker) return sessionSpeaker.name;

    // Fall back to information field
    return entry.information;
  }

  getTalkTitle(entry: ScheduleEntry): string {
    // If there's a talk associated with this session, use its title
    const talk = this.getTalkBySession(entry.session);
    if (talk) return talk.title;

    // Otherwise use the entry title
    return entry.title;
  }

  showTalkDetails(sessionId: string | null): void {
    if (!sessionId) return;

    const talk = this.getTalkBySession(sessionId);
    if (!talk) return;

    this.selectedTalk.set(talk);

    // Find the speaker for this talk
    if(talk.speakers) {
      this.selectedSpeakers.set(talk.speakers.map(speakerId=> this.speakerService.getSpeakerById(speakerId)!))
    } else {
      const speaker = this.speakerService.getSpeakerById(talk.speakerId);
      if(!speaker) return;
      this.selectedSpeakers.set([speaker]);
    }
  }

  closeModal(): void {
    this.selectedTalk.set(null);
    this.selectedSpeakers.set([]);
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

  getSpeakerTitle(entry: ScheduleEntry): string {
    // First try to get speaker from session
    const sessionSpeaker = this.getSpeakerBySession(entry.session);
    if (sessionSpeaker) return `${sessionSpeaker.title}${sessionSpeaker.company ? ` at ${sessionSpeaker.company}` : ''}`;

    // Fall back to empty string
    return '';
  }

  // Check if an entry is a break
  isBreak(entry: ScheduleEntry): boolean {
    return entry.title.toLowerCase().includes('break') ||
           entry.title.toLowerCase().includes('lunch') ||
           entry.title.toLowerCase().includes('registration') ||
           entry.title.toLowerCase().includes('breakfast') ||
           entry.title.toLowerCase().includes('party') ||
           entry.title.toLowerCase().includes('community event') ||
           entry.information.toLowerCase().includes('social event');
  }

  // Check if an entry is a party or social event
  isParty(entry: ScheduleEntry): boolean {
    return entry.title.toLowerCase().includes('party') ||
           entry.title.toLowerCase().includes('community event') ||
           entry.information.toLowerCase().includes('social event');
  }

  // Get entries for Stage Pool at a specific time
  getPoolStageEntries(entries: ScheduleEntry[], datetime: string): ScheduleEntry[] {
    return entries.filter(entry => 
      entry.datetime === datetime && 
      (entry.location === 'Stage Pool' || entry.location === 'Both Stages')
    );
  }

  // Get entries for Aula at a specific time
  getAulaStageEntries(entries: ScheduleEntry[], datetime: string): ScheduleEntry[] {
    return entries.filter(entry => 
      entry.datetime === datetime && 
      (entry.location === 'Stage Aula' || entry.location === 'Both Stages')
    );
  }

  // Get unique time slots for a day
  getUniqueTimeSlots(entries: ScheduleEntry[]): string[] {
    const times = entries.map(entry => entry.datetime);
    return [...new Set(times)].sort();
  }
}

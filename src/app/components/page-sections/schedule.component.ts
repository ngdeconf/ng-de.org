import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}

@Component({
  selector: 'ngde-schedule',
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
                  <th scope="col" class="px-6 py-3 font-medium">Time</th>
                  <th scope="col" class="px-6 py-3 font-medium">Title</th>
                  <th scope="col" class="px-6 py-3 font-medium">Speaker</th>
                </tr>
                </thead>
                <tbody>
                  @for (entry of day.entries; track entry.datetime) {
                    <tr
                        class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        [class.cursor-pointer]="getTalkBySession(entry.session)"
                        [class.bg-gradient-to-r]="isBreak(entry)"
                        [class.from-[#e40341]]="isBreak(entry)"
                        [class.via-[#f034e0]]="isBreak(entry)"
                        [class.to-[#2192d1]]="isBreak(entry)"
                        [class.text-white]="isBreak(entry)"
                        [class.opacity-90]="isBreak(entry) && !isParty(entry)"
                        [class.opacity-100]="isParty(entry)"
                        (click)="showTalkDetails(entry.session)"
                    >
                      <td class="px-6 py-4 whitespace-nowrap">
                        {{ formatTime(entry.datetime) }}
                      </td>
                      <td class="px-6 py-4">
                        <div class="font-medium">
                          {{ getTalkTitle(entry) }}
                          @if (getTalkBySession(entry.session)) {
                            <span class="ml-1 text-xs text-primary-500 dark:text-primary-400">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none"
                                   viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </span>
                          }
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        @if (entry.speakers) {
                          @for (speaker of entry.speakers; track speaker) {
                            @if (getSpeakerByName(speaker)) {
                              <div class="flex items-center mb-2 last:mb-0">
                                <div class="relative flex-shrink-0">
                                  <img
                                      [src]="getSpeakerByName(speaker)?.imageUrl"
                                      [alt]="entry.information"
                                      class="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200 dark:border-gray-700"
                                  />
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
                                  <div class="font-medium" [class.text-white]="isBreak(entry)"
                                       [class.text-gray-900]="!isBreak(entry)"
                                       [class.dark:text-gray-100]="!isBreak(entry)">
                                    {{ speaker }}
                                  </div>
                                  <div class="text-sm mt-1" [class.text-white]="isBreak(entry)"
                                       [class.text-gray-500]="!isBreak(entry)"
                                       [class.dark:text-gray-400]="!isBreak(entry)">
                                    {{ getSpeakerByName(speaker)?.title }}
                                  </div>
                                </div>
                              </div>
                            }
                          }
                        } @else {
                          @if (getSpeakerByName(entry.information) || getSpeakerBySession(entry.session)) {
                            <div class="flex items-center">
                              <div class="relative flex-shrink-0">
                                <img
                                    [src]="(getSpeakerBySession(entry.session) || getSpeakerByName(entry.information))?.imageUrl"
                                    [alt]="entry.information"
                                    class="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200 dark:border-gray-700"
                                />
                                @if ((getSpeakerBySession(entry.session) || getSpeakerByName(entry.information))?.angularTeam) {
                                  <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                                    <img
                                        src="assets/images/angular_gradient.png"
                                        alt="Angular Team"
                                        class="w-5 h-5"
                                    />
                                  </div>
                                }
                                @if ((getSpeakerBySession(entry.session) || getSpeakerByName(entry.information))?.ngrxTeam) {
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
                                <div class="font-medium" [class.text-white]="isBreak(entry)"
                                     [class.text-gray-900]="!isBreak(entry)"
                                     [class.dark:text-gray-100]="!isBreak(entry)">
                                  {{ getSpeakerName(entry) }}
                                </div>
                                <div class="text-sm mt-1" [class.text-white]="isBreak(entry)"
                                     [class.text-gray-500]="!isBreak(entry)"
                                     [class.dark:text-gray-400]="!isBreak(entry)">
                                  {{ getSpeakerTitle(entry) }}
                                </div>
                              </div>
                            </div>
                          } @else {
                            <div class="text-sm" [class.text-white]="isBreak(entry)"
                                 [class.text-gray-600]="!isBreak(entry)" [class.dark:text-gray-400]="!isBreak(entry)">
                              {{ entry.information }}
                            </div>
                          }
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            <!-- Mobile Card Layout (hidden on desktop) -->
            <div class="md:hidden space-y-4 mb-12">
              @for (entry of day.entries; track entry.datetime) {
                <div
                    class="rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden"
                    [class.cursor-pointer]="getTalkBySession(entry.session)"
                    [class.bg-gradient-to-r]="isBreak(entry)"
                    [class.from-[#e40341]]="isBreak(entry)"
                    [class.via-[#f034e0]]="isBreak(entry)"
                    [class.to-[#2192d1]]="isBreak(entry)"
                    [class.text-white]="isBreak(entry)"
                    [class.opacity-90]="isBreak(entry) && !isParty(entry)"
                    [class.opacity-100]="isParty(entry)"
                    (click)="showTalkDetails(entry.session)"
                >
                  <div class="p-4">
                    <!-- Time Badge -->
                    <div class="flex items-start justify-between mb-3">
                      <div
                          class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                          [class]="isBreak(entry) ? 
                          'bg-white/20 text-white' : 
                          'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200'"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {{ formatTime(entry.datetime) }}
                      </div>
                      @if (getTalkBySession(entry.session)) {
                        <div [class]="isBreak(entry) ? 'text-white' : 'text-primary-500 dark:text-primary-400'">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                               stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                      }
                    </div>

                    <!-- Title -->
                    <h3
                        class="text-lg font-semibold mb-3"
                        [class]="isBreak(entry) ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
                    >
                      {{ getTalkTitle(entry) }}
                    </h3>

                    <!-- Speaker Information -->
                    @if (entry.speakers) {
                      <div class="space-y-3">
                        @for (speaker of entry.speakers; track speaker) {
                          @if (getSpeakerByName(speaker)) {
                            <div class="flex items-center space-x-4">
                              <div class="relative flex-shrink-0">
                                <img
                                    [src]="getSpeakerByName(speaker)?.imageUrl"
                                    [alt]="speaker"
                                    class="w-14 h-14 rounded-full object-cover border-2"
                                    [class]="isBreak(entry) ? 'border-white/30' : 'border-gray-200 dark:border-gray-700'"
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
                                <div
                                    class="font-medium text-base"
                                    [class]="isBreak(entry) ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
                                >
                                  {{ speaker }}
                                </div>
                                <div
                                    class="text-sm mt-1"
                                    [class]="isBreak(entry) ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'"
                                >
                                  {{ getSpeakerByName(speaker)?.title }}
                                </div>
                              </div>
                            </div>
                          }
                        }
                      </div>
                    } @else if (getSpeakerByName(entry.information) || getSpeakerBySession(entry.session)) {
                      <div class="flex items-center space-x-4">
                        <div class="relative flex-shrink-0">
                          <img
                              [src]="(getSpeakerBySession(entry.session) || getSpeakerByName(entry.information))?.imageUrl"
                              [alt]="entry.information"
                              class="w-14 h-14 rounded-full object-cover border-2"
                              [class]="isBreak(entry) ? 'border-white/30' : 'border-gray-200 dark:border-gray-700'"
                          />
                          @if ((getSpeakerBySession(entry.session) || getSpeakerByName(entry.information))?.angularTeam) {
                            <div class="absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5">
                              <img
                                  src="assets/images/angular_gradient.png"
                                  alt="Angular Team"
                                  class="w-5 h-5"
                              />
                            </div>
                          }
                          @if ((getSpeakerBySession(entry.session) || getSpeakerByName(entry.information))?.ngrxTeam) {
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
                          <div
                              class="font-medium text-base"
                              [class]="isBreak(entry) ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
                          >
                            {{ getSpeakerName(entry) }}
                          </div>
                          <div
                              class="text-sm mt-1"
                              [class]="isBreak(entry) ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'"
                          >
                            {{ getSpeakerTitle(entry) }}
                          </div>
                        </div>
                      </div>
                    } @else {
                      <div
                          class="text-sm"
                          [class]="isBreak(entry) ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'"
                      >
                        {{ entry.information }}
                      </div>
                    }
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

                <div class="flex items-center mb-6">
                  @for (selectedSpeaker of selectedSpeakers(); track selectedSpeaker) {
                  @if (selectedSpeakers()) {
                    <div class="relative flex-shrink-0">
                      <img
                          [src]="selectedSpeaker?.imageUrl"
                          [alt]="selectedSpeaker?.name"
                          class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary-200 dark:border-primary-900"
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
                    <div class="min-w-0">
                      <p class="text-lg font-bold flex items-center">
                        {{ selectedSpeaker?.name }}
                        @if (selectedSpeaker?.pronouns) {
                          <span
                              class="text-xs font-normal text-gray-500 dark:text-gray-400 ml-2">({{ selectedSpeaker?.pronouns }}
                            )</span>
                        }
                      </p>
                      <p class="text-primary-600 dark:text-primary-400 font-medium">
                        {{ selectedSpeaker?.title }}
                      </p>
                      <p class="text-gray-600 dark:text-gray-400 text-sm">
                        {{ selectedSpeaker?.company }}
                      </p>
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
}

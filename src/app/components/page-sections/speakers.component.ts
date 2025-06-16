
import {
  afterNextRender,
  Component,
  ElementRef,
  signal,
  viewChild
} from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../models/models';

@Component({
  selector: 'ngde-speakers',
  imports: [],
  template: `
    <section #speakersSection id="speakers" class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-3">Meet Our Speakers</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn from Angular experts and community leaders from around the
            world
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          @for (speaker of shuffledSpeakers(); track speaker.id; let i = $index)
          {
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-item opacity-0"
            [class.animate-fade-in]="isIntersecting()"
            [style.animation-delay]="i * 100 + 'ms'"
          >
            <!-- Card Header with Image -->
            <div
              class="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4"
            >
              <div class="relative mx-auto w-28 h-28 mb-3">
                <!-- Image Container -->
                <div
                  class="absolute inset-0 rounded-full overflow-hidden ring-3 ring-white dark:ring-gray-800 shadow-md"
                >
                  <img
                    [src]="speaker.imageUrl"
                    [alt]="speaker.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-4">
              <!-- Speaker Info -->
              <div class="text-center mb-3">
                <h3 class="text-xl font-bold mb-1">{{ speaker.name }}</h3>
                <p
                  class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-1 flex items-center justify-center"
                >
                  @if (speaker.angularTeam) {
                  <img 
                    src="assets/images/angular_gradient.png" 
                    alt="Angular Team" 
                    class="w-4 h-4 mr-1"
                  />
                  }
                  @if (speaker.ngrxTeam) {
                  <img 
                    src="assets/images/ngrx-logo.png" 
                    alt="NgRx Team" 
                    class="w-4 h-4 mr-1"
                  />
                  }
                  {{ speaker.title }}
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-xs">
                  {{ speaker.company }}
                </p>
              </div>

              <!-- Social Links -->
              <div class="flex justify-center space-x-3">
                @if (speaker.githubHandle) {
                <a
                  [href]="'https://github.com/' + speaker.githubHandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  style="transition: color 0.2s ease"
                  aria-label="GitHub"
                >
                  <svg
                    class="w-5 h-5"
                    style="transition: transform 0.2s ease"
                    [style.transform]="'scale(1)'"
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
                <button
                  class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium text-xs px-2 py-1 border border-primary-600 dark:border-primary-400 rounded-full transition-colors"
                  (click)="openBioDialog(speaker)"
                  aria-label="View Speaker Bio"
                >
                  BIO
                </button>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>

    <!-- Bio Dialog -->
    @if (activeSpeaker()) {
    <div
      #dialogContainer
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      [class.dialog-enter]="isDialogVisible()"
      [class.dialog-leave]="isDialogLeaving()"
      (click)="closeBioDialog()"
      role="dialog"
      aria-modal="true"
      [attr.aria-labelledby]="'speaker-bio-title'"
      (keydown.escape)="closeBioDialog()"
      tabindex="-1"
    >
      <div
        #dialogContent
        class="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
        (click)="$event.stopPropagation()"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 id="speaker-bio-title" class="text-2xl font-bold">
              {{ activeSpeaker()?.name }}
            </h3>
            <button
              #closeButton
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Close dialog"
              (click)="closeBioDialog()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center mb-6">
            <img
              [src]="activeSpeaker()?.imageUrl"
              [alt]="activeSpeaker()?.name"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p class="text-primary-600 dark:text-primary-400 font-medium flex items-center">
                @if (activeSpeaker()?.angularTeam) {
                <img 
                  src="assets/images/angular_gradient.png" 
                  alt="Angular Team" 
                  class="w-4 h-4 mr-1"
                />
                }
                @if (activeSpeaker()?.ngrxTeam) {
                <img 
                  src="assets/images/ngrx-logo.png" 
                  alt="NgRx Team" 
                  class="w-4 h-4 mr-1"
                />
                }
                {{ activeSpeaker()?.title }}
              </p>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ activeSpeaker()?.company }}
              </p>
              @if (activeSpeaker()?.pronouns) {
              <p class="text-gray-500 dark:text-gray-500 text-xs mt-1">
                Pronouns: {{ activeSpeaker()?.pronouns }}
              </p>
              }
            </div>
          </div>
          <div>
            <p class="text-gray-600 dark:text-gray-400">
              {{ activeSpeaker()?.bio }}
            </p>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              (click)="closeBioDialog()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    }
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
        animation: fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      /* Dialog animations */
      @keyframes dialog-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes dialog-fade-out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes dialog-content-in {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes dialog-content-out {
        from {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        to {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
      }

      .dialog-enter {
        animation: dialog-fade-in 0.3s ease forwards;
      }

      .dialog-enter > div {
        animation: dialog-content-in 0.3s ease forwards;
      }

      .dialog-leave {
        animation: dialog-fade-out 0.3s ease forwards;
      }

      .dialog-leave > div {
        animation: dialog-content-out 0.3s ease forwards;
      }
    `
  ],
  standalone: true
})
export class SpeakersComponent {
  closeButton = viewChild.required<ElementRef>('closeButton');
  dialogContainer = viewChild.required<ElementRef>('dialogContainer');
  speakersSection = viewChild.required<ElementRef>('speakersSection');

  speakers = this.speakerService.getSpeakers();
  shuffledSpeakers = signal<Speaker[]>([]);
  activeSpeaker = signal<Speaker | null>(null);
  isDialogVisible = signal(false);
  isDialogLeaving = signal(false);
  isIntersecting = signal(false);

  private observer?: IntersectionObserver;

  constructor(private speakerService: SpeakerService) {
    // Shuffle speakers when component initializes
    this.shuffleSpeakers();

    // Use afterNextRender for browser-only code
    afterNextRender(() => {
      // Set default for SSR
      this.isIntersecting.set(true);

      // Setup once view has been initialized
      this.setupIntersectionObserver();
    });
  }

  private setupIntersectionObserver(): void {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            this.isIntersecting.set(true);
            this.observer?.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      this.observer.observe(this.speakersSection().nativeElement);
    }
  }

  shuffleSpeakers(): void {
    const speakersArray = [...this.speakers()];
    // Simple Fisher-Yates shuffle algorithm
    for (let i = speakersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [speakersArray[i], speakersArray[j]] = [
        speakersArray[j],
        speakersArray[i]
      ];
    }
    this.shuffledSpeakers.set(speakersArray);
  }

  openBioDialog(speaker: Speaker): void {
    this.activeSpeaker.set(speaker);
    this.isDialogVisible.set(true);

    // Prevent scrolling of the body when dialog is open
    document.body.style.overflow = 'hidden';
  }

  closeBioDialog(): void {
    this.isDialogLeaving.set(true);

    setTimeout(() => {
      this.isDialogLeaving.set(false);
      this.isDialogVisible.set(false);
      this.activeSpeaker.set(null);

      // Re-enable scrolling
      document.body.style.overflow = '';
    }, 300); // Match the CSS transition duration
  }

  ngOnDestroy(): void {
    // Clean up the observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

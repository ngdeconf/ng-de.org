import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild
} from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';

@Component({
  selector: 'app-speakers',
  imports: [CommonModule],
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
                  class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-1"
                >
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

          <!-- Call for Speakers Card -->
          <div
            class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/30 rounded-xl shadow-md overflow-hidden card-item opacity-0 border-2 border-dashed border-primary-300 dark:border-primary-700 flex flex-col"
            [class.animate-fade-in]="isIntersecting()"
            [style.animation-delay]="shuffledSpeakers().length * 100 + 'ms'"
          >
            <div class="p-6 flex flex-col items-center justify-center h-full">
              <div
                class="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-800/50 flex items-center justify-center mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>

              <h3 class="text-xl font-bold text-center mb-3">
                Newcomers welcome!
              </h3>

              <p class="text-center text-gray-600 dark:text-gray-300 mb-6">
                Have knowledge to share? We're looking for passionate Angular
                developers, architects or leaders to join our conference!
              </p>

              <a
                href="#call-for-papers"
                class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Apply as Speaker
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
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
              <p class="text-primary-600 dark:text-primary-400 font-medium">
                {{ activeSpeaker()?.title }}
              </p>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ activeSpeaker()?.company }}
              </p>
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
  ]
})
export class SpeakersComponent implements AfterViewInit, OnInit {
  @ViewChild('closeButton') closeButton?: ElementRef;
  @ViewChild('dialogContainer') dialogContainer?: ElementRef;
  @ViewChild('speakersSection') speakersSection?: ElementRef;

  speakers = this.speakerService.getSpeakers();
  shuffledSpeakers = signal<any[]>([]);
  activeSpeaker = signal<any | null>(null);
  isDialogVisible = signal(false);
  isDialogLeaving = signal(false);
  isIntersecting = signal(false);

  private isBrowser: boolean;
  private observer?: IntersectionObserver;

  constructor(
    private speakerService: SpeakerService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Initialize shuffled speakers
    this.shuffledSpeakers.set(this.shuffleArray([...this.speakers()]));
  }

  /**
   * Shuffles an array using the Fisher-Yates algorithm
   */
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.speakersSection) {
      this.setupIntersectionObserver();
    } else if (!this.isBrowser) {
      // For SSR, immediately set as intersecting to show content
      this.isIntersecting.set(true);
    }
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.isIntersecting.set(true);
          // Once we've triggered the animation, we can stop observing
          if (this.observer && this.speakersSection) {
            this.observer.unobserve(this.speakersSection.nativeElement);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the section is visible
        rootMargin: '50px' // Start animation slightly before it enters viewport
      }
    );

    if (this.speakersSection) {
      this.observer.observe(this.speakersSection.nativeElement);
    }
  }

  openBioDialog(speaker: any): void {
    this.activeSpeaker.set(speaker);
    this.isDialogVisible.set(true);
    this.isDialogLeaving.set(false);

    // In SSR, we need to ensure browser APIs are only called in the browser environment
    if (this.isBrowser) {
      setTimeout(() => {
        // Focus the close button when dialog opens
        if (this.closeButton) {
          this.closeButton.nativeElement.focus();
        }
      });
    }
  }

  closeBioDialog(): void {
    this.isDialogLeaving.set(true);

    // Wait for animation to complete before removing dialog
    if (this.isBrowser) {
      setTimeout(() => {
        this.activeSpeaker.set(null);
        this.isDialogVisible.set(false);
        this.isDialogLeaving.set(false);
      }, 300);
    } else {
      // Immediately remove dialog in SSR context
      this.activeSpeaker.set(null);
      this.isDialogVisible.set(false);
      this.isDialogLeaving.set(false);
    }
  }

  ngOnDestroy(): void {
    // Clean up the observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

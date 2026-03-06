import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FlashSaleService } from '../../services/flash-sale.service';
import { VideoModalComponent } from '../video-modal/video-modal.component';

interface VideoModalData {
  videoId: string;
}

@Component({
  selector: 'ngde-hero',
  styles: `
    @keyframes hero-flash-pulse {
      0%,
      100% {
        box-shadow:
          0 0 15px rgba(255, 215, 0, 0.4),
          0 0 25px rgba(255, 215, 0, 0.2);
      }
      50% {
        box-shadow:
          0 0 20px rgba(255, 215, 0, 0.6),
          0 0 35px rgba(255, 215, 0, 0.4);
      }
    }

    @keyframes hero-flash-shine {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }

    .hero-flash-sale-button {
      animation: hero-flash-pulse 10s ease-in-out infinite;
      position: relative;
    }

    .hero-flash-sale-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: hero-flash-shine 10s linear infinite;
    }
  `,
  template: `
    <section
      id="home"
      class="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      <div class="container mx-auto px-4 relative z-10">
        <div class="md:flex md:items-center md:justify-between md:space-x-10">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <div class="flex items-center mb-6">
              <div class="mr-6 md:mr-8 flex-shrink-0 self-center">
                <img src="assets/logo.svg" alt="NG-DE Logo" class="h-32 w-32" />
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span class="block">
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-l from-primary-500 via-primary-400 to-secondary-500"
                  >
                    NG-DE
                  </span>
                </span>
                <span class="lg:text-4xl block"
                  >The largest Angular Conference in Germany is here.</span
                >
              </h1>
            </div>

            <div class="mt-6 space-y-2">
              <div
                class="flex items-center gap-3 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400"
              >
                <svg
                  class="h-5 w-5 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>October 15-16, 2026</span>
              </div>
              <div
                class="flex items-center gap-3 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400"
              >
                <svg
                  class="h-5 w-5 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Berlin, Germany</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 mt-8">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                (click)="scrollToCallForPapers()"
              >
                Become a speaker
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <a
                href="#sponsors"
                (click)="scrollToSponsors($event)"
                class="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 transition hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Become a sponsor
              </a>
            </div>
          </div>

          <div class="md:w-1/2 relative group">
            <div class="relative overflow-hidden rounded-lg shadow-2xl">
              <div
                class="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10"
              ></div>
              <img
                src="assets/images/impressions/2025-mood-video.png"
                alt="Impressions from NG-DE conference"
                class="w-full rounded-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />

              <!-- Play button with animation -->
              <button
                type="button"
                class="absolute inset-0 flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                aria-label="Play conference impressions video"
                (click)="openVideoModal()"
              >
                <span class="sr-only">Play conference impressions video</span>
                <span class="relative" aria-hidden="true">
                  <span
                    class="bg-primary-500 text-white rounded-full p-4 shadow-lg inline-flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>

            <!-- Floating badge -->
            <div
              class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg flex items-center justify-center"
            >
              <div class="text-xs font-semibold text-gray-500">BERLIN</div>
              <div class="text-2xl font-bold text-primary-500 ml-1">2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  private dialog = inject(Dialog);
  flashSaleService = inject(FlashSaleService);

  openVideoModal(): void {
    this.dialog.open<VideoModalComponent, VideoModalData>(VideoModalComponent, {
      data: { videoId: '_l3Krgk6LSI' }
    });
  }

  scrollToCallForPapers(): void {
    const target = document.getElementById('call-for-papers');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToSponsors($event: Event): void {
    $event.preventDefault();
    const target = document.getElementById('sponsors');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

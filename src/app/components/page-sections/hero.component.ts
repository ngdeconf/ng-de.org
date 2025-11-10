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
      0%, 100% {
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.2);
      }
      50% {
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 35px rgba(255, 215, 0, 0.4);
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
                <span class="block">Thank you for a great conference!</span>
              </h1>
            </div>

            <p
              class="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
            >
              The community-driven Angular conference in Germany is over.
            </p>

            <div class="mb-8 text-gray-600 dark:text-gray-400">
              <div class="flex items-start mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 mt-1 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <span class="block">Workshops and talks are beeing uploaded to youtube.</span>
                  <span class="block">Subscribe to our newsletter to get notified.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/2 relative group">
            <div
              class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer"
              (click)="openVideoModal()"
            >
              <div
                class="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10"
              ></div>
              <img
                src="assets/images/impressions/ng-de-stage.jpg"
                alt="Impressions from NG-DE conference"
                class="w-full rounded-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />

              <!-- Play button with animation -->
              <div
                class="absolute inset-0 flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-110"
                aria-label="Play conference impressions video"
              >
                <div class="relative">
                  <!-- Play button -->
                  <div
                    class="bg-primary-500 text-white rounded-full p-4 shadow-lg"
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
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating badge -->
            <div
              class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg flex items-center justify-center"
            >
              <div class="text-xs font-semibold text-gray-500">BERLIN</div>
              <div class="text-2xl font-bold text-primary-500 ml-1">2025</div>
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
      data: { videoId: 'VRNG-iuF2Lk' }
    });
  }
}

import { Dialog } from "@angular/cdk/dialog";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { VideoModalComponent } from "../video-modal/video-modal.component";

interface VideoModalData {
  videoId: string;
}

@Component({
  selector: "ngde-hero",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
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
                <span class="lg:text-4xl block">
                  The largest Angular Conference in Germany.
                </span>
              </h1>
            </div>

            <div
              class="mt-6 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60"
            >
              <p class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                NG-DE 2026 has been canceled.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mb-2">
                What led to this:
              </p>
              <ul class="space-y-1 text-gray-600 dark:text-gray-400 mb-4">
                <li class="flex items-start gap-2">
                  <span class="text-primary-500 mt-1 shrink-0">•</span>
                  <span>No sponsors</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-500 mt-1 shrink-0">•</span>
                  <span>Significantly less interest than expected</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary-500 mt-1 shrink-0">•</span>
                  <span>Extremely high and unsustainable costs</span>
                </li>
              </ul>
              <p class="text-sm text-gray-500 dark:text-gray-500">
                There are no tickets, no refunds, nothing you need to do.
                Thank you for being part of NG-DE.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-4 mt-8">
              <a
                routerLink="/2025/talks"
                class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Watch 2025 talks
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
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  private dialog = inject(Dialog);

  protected openVideoModal(): void {
    this.dialog.open<VideoModalComponent, VideoModalData>(VideoModalComponent, {
      data: { videoId: "_l3Krgk6LSI" },
    });
  }
}

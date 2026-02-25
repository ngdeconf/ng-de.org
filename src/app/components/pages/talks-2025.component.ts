import { ChangeDetectionStrategy, Component } from '@angular/core';

const YOUTUBE_PLAYLIST_URL =
  'https://www.youtube.com/watch?v=_l3Krgk6LSI&list=PLkdIZQ2JS3AesLFMWxU4ArzsfIW-5K4BK';

@Component({
  selector: 'ngde-talks-2025',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="talks-heading"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            id="talks-heading"
            class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Watch 2025 talks
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Over 20 talks are ready to watch—covering the latest Angular
            techniques, architecture, and AI.
          </p>
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-10">
            Experience past NG-DE conference talks on YouTube and get a feel for
            what awaits you.
          </p>
          <a
            [href]="playlistUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-semibold py-3 px-6 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  `
})
export class Talks2025Component {
  readonly playlistUrl = YOUTUBE_PLAYLIST_URL;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnnouncementBannerComponent } from '../page-sections/announcement-banner.component';
import { SponsorsComponent } from '../page-sections/sponsors.component';

@Component({
  selector: 'ngde-for-sponsors',
  standalone: true,
  imports: [AnnouncementBannerComponent, SponsorsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="for-sponsors" class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <header class="pt-8 px-4 mb-10 text-left">
          <div class="flex items-center gap-4 mb-3">
            <img src="assets/logo.svg" alt="NG-DE Logo" class="h-16 w-16 md:h-20 md:w-20 shrink-0" />
            <h2 class="text-3xl md:text-4xl font-bold">For Sponsors</h2>
          </div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Partner with the largest Angular conference in Germany and reach a dedicated developer community
          </p>
          <div class="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span class="inline-flex items-center gap-2">
              <svg class="w-5 h-5 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              October 15–16, 2026
            </span>
            <span class="inline-flex items-center gap-2">
              <svg class="w-5 h-5 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Berlin, Germany
            </span>
          </div>
          <a
            href="mailto:info@ng-de.org"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-6 rounded-lg bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Become our Sponsor
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
        </header>

        <ngde-announcement-banner />

        <ngde-sponsors [year]="2025" />
      </div>
    </section>
  `
})
export class ForSponsorsComponent {}

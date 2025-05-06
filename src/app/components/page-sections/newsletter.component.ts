import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ngde-newsletter',
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our newsletter to get the latest news about our conferences and events.
          </p>
          <a
            href="http://eepurl.com/dzDRM9"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
          >
            Subscribe to Newsletter
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class NewsletterComponent {} 
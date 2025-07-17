import { Component } from '@angular/core';
import { SponsorService } from '../../services/sponsor.service';

@Component({
  selector: 'ngde-sponsors',
  standalone: true,
  template: `
    <section id="sponsors" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are grateful to our sponsors who make NG-DE possible
          </p>
        </div>

        <!-- Platinum Sponsors -->
        @if (getSponsorsByLevel('Platinum').length > 0) {
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-center">Platinum Sponsors</h3>
          <div class="flex flex-wrap justify-center gap-8">
            @for (sponsor of getSponsorsByLevel('Platinum'); track sponsor.id) {
            <div class="w-full md:w-[calc(50%-1rem)] max-w-md">
              <a
                [href]="sponsor.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex items-center justify-center"
              >
                <img
                  [src]="sponsor.logoUrl"
                  [alt]="sponsor.name"
                  class="h-24 object-contain"
                />
              </a>
            </div>
            }
          </div>
        </div>
        }

        <!-- Gold Sponsors -->
        @if (getSponsorsByLevel('Gold').length > 0) {
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-center">Gold Sponsors</h3>
          <div class="flex flex-wrap justify-center gap-8">
            @for (sponsor of getSponsorsByLevel('Gold'); track sponsor.id) {
            <div
              class="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] max-w-sm"
            >
              <a
                [href]="sponsor.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex items-center justify-center"
              >
                <img
                  [src]="sponsor.logoUrl"
                  [alt]="sponsor.name"
                  class="h-20 object-contain"
                />
              </a>
            </div>
            }
          </div>
        </div>
        }

        <!-- Silver Sponsors -->
        @if (getSponsorsByLevel('Silver').length > 0) {
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-center">Silver Sponsors</h3>
          <div class="flex flex-wrap justify-center gap-6">
            @for (sponsor of getSponsorsByLevel('Silver'); track sponsor.id) {
            <div
              class="w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] max-w-xs"
            >
              <a
                [href]="sponsor.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex items-center justify-center"
              >
                <img
                  [src]="sponsor.logoUrl"
                  [alt]="sponsor.name"
                  class="h-16 object-contain"
                />
              </a>
            </div>
            }
          </div>
        </div>
        }

        <!-- Bronze Sponsors -->
        @if (getSponsorsByLevel('Bronze').length > 0) {
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-center">Bronze Sponsors</h3>
          <div class="flex flex-wrap justify-center gap-4">
            @for (sponsor of getSponsorsByLevel('Bronze'); track sponsor.id) {
            <div
              class="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] max-w-xs"
            >
              <a
                [href]="sponsor.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex items-center justify-center"
              >
                <img
                  [src]="sponsor.logoUrl"
                  [alt]="sponsor.name"
                  class="h-12 object-contain"
                />
              </a>
            </div>
            }
          </div>
        </div>
        }

        <!-- Travel Sponsors -->
        @if (getSponsorsByLevel('Travel').length > 0) {
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-center">Travel Sponsors</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            @for (sponsor of getSponsorsByLevel('Travel'); track sponsor.id) {
            <div class="flex justify-center items-center">
              <a
                [href]="sponsor.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  [src]="sponsor.logoUrl"
                  [alt]="sponsor.name"
                  class="h-12 object-contain w-full"
                />
              </a>
            </div>
            }
          </div>
        </div>
        }

        <!-- Community Partners -->
        @if (getSponsorsByLevel('Community Partners').length > 0) {
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-8 text-center">
            Community Partners
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            @for (sponsor of getSponsorsByLevel('Community Partners'); track
            sponsor.id) {
            <div class="flex justify-center items-center">
              <a
                [href]="sponsor.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  [src]="sponsor.logoUrl"
                  [alt]="sponsor.name"
                  class="h-12 object-contain w-full"
                />
              </a>
            </div>
            }
          </div>
        </div>
        }

        <!-- Sponsoring Process Info -->
        <div class="max-w-4xl mx-auto mb-12">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 class="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              How Sponsoring Works
            </h3>
            
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="text-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-primary-600 dark:text-primary-400 font-bold text-lg">1</span>
                </div>
                <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">We Get in Touch</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  Reach out to us and let us know about your interest in sponsoring NG-DE
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-primary-600 dark:text-primary-400 font-bold text-lg">2</span>
                </div>
                <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">Get Detailed Information</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  You'll receive a comprehensive PDF brochure with all sponsoring options and possibilities
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-primary-600 dark:text-primary-400 font-bold text-lg">3</span>
                </div>
                <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">Personal Consultation</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  We'll have a call to discuss how we can tailor sponsoring to achieve your specific goals
                </p>
              </div>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                💡 <strong>Planning ahead?</strong> We're also already accepting inquiries for NG-DE 2026 sponsoring opportunities!
              </p>
            </div>
          </div>
        </div>

        <!-- Become a Sponsor -->
        <div class="text-center mt-12">
          <a
            href="mailto:info@ng-de.org"
            class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  `
})
export class SponsorsComponent {
  constructor(private sponsorService: SponsorService) {}

  getSponsorsByLevel(
    level:
      | 'Platinum'
      | 'Gold'
      | 'Silver'
      | 'Bronze'
      | 'Travel'
      | 'Community Partners'
  ) {
    return this.sponsorService.getSponsorsByLevel(level);
  }
}

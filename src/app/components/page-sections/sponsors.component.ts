import { Component } from '@angular/core';
import { SponsorService } from '../../services/sponsor.service';

@Component({
  selector: 'ngde-sponsors',
  standalone: true,
  template: `
    <section
      id="sponsors"
      class="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div class="container mx-auto px-4">
        <!-- Header with gratitude message -->
        <div class="text-center mb-20">
          <h2
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
          >
            Our Amazing Sponsors
          </h2>
          <p
            class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A heartfelt thank you to our incredible sponsors who make NG-DE
            possible.
            <span class="font-semibold text-primary-600 dark:text-primary-400"
              >Without their support, this conference simply wouldn't
              exist.</span
            >
          </p>
          <div class="mt-6 flex justify-center">
            <div
              class="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full"
            >
              <span
                class="text-primary-700 dark:text-primary-300 text-sm font-medium"
              >
                💙 Thank you for believing in our community
              </span>
            </div>
          </div>
        </div>

        <!-- Platinum Sponsors -->
        @if (getSponsorsByLevel('Platinum').length > 0) {
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">P</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                Platinum Sponsors
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Our premier partners who make NG-DE extraordinary
            </p>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-cols-1 gap-8 max-w-6xl">
              @for (sponsor of getSponsorsByLevel('Platinum'); track sponsor.id)
              {
              <div class="group">
                <a
                  [href]="sponsor.websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1"
                >
                  <div class="h-full flex items-center justify-center">
                    <img
                      [src]="sponsor.logoUrl"
                      [alt]="sponsor.name"
                      class="w-48 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>
              }
            </div>
          </div>
        </div>
        }

        <!-- Gold Sponsors -->
        @if (getSponsorsByLevel('Gold').length > 0) {
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">G</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                Gold Sponsors
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Essential partners who elevate our conference experience
            </p>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-1 gap-6 max-w-6xl"
            >
              @for (sponsor of getSponsorsByLevel('Gold'); track sponsor.id) {
              <div class="group">
                <a
                  [href]="sponsor.websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600 hover:-translate-y-1"
                >
                  <div class="h-full flex items-center justify-center">
                    <img
                      [src]="sponsor.logoUrl"
                      [alt]="sponsor.name"
                      class="w-40 h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>
              }
            </div>
          </div>
        </div>
        }

        <!-- Silver Sponsors -->
        @if (getSponsorsByLevel('Silver').length > 0) {
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">S</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                Silver Sponsors
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Valued partners who strengthen our community
            </p>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl"
            >
              @for (sponsor of getSponsorsByLevel('Silver'); track sponsor.id) {
              <div class="group">
                <a
                  [href]="sponsor.websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1"
                >
                  <div class="h-full flex items-center justify-center">
                    <img
                      [src]="sponsor.logoUrl"
                      [alt]="sponsor.name"
                      class="w-32 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>
              }
            </div>
          </div>
        </div>
        }

        <!-- Bronze Sponsors -->
        @if (getSponsorsByLevel('Bronze').length > 0) {
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">B</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                Bronze Sponsors
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Supportive partners who help make NG-DE happen
            </p>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl"
            >
              @for (sponsor of getSponsorsByLevel('Bronze'); track sponsor.id) {
              <div class="group">
                <a
                  [href]="sponsor.websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1"
                >
                  <div class="h-full flex items-center justify-center">
                    <img
                      [src]="sponsor.logoUrl"
                      [alt]="sponsor.name"
                      class="w-24 h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>
              }
            </div>
          </div>
        </div>
        }

        <!-- Travel Sponsors -->
        @if (getSponsorsByLevel('Travel').length > 0) {
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">T</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                Travel Sponsors
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Partners who help bring speakers from around the world
            </p>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl"
            >
              @for (sponsor of getSponsorsByLevel('Travel'); track sponsor.id) {
              <div class="group">
                <a
                  [href]="sponsor.websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
                >
                  <div class="h-full flex items-center justify-center">
                    <img
                      [src]="sponsor.logoUrl"
                      [alt]="sponsor.name"
                      class="w-24 h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>
              }
            </div>
          </div>
        </div>
        }

        <!-- Community Partners -->
        @if (getSponsorsByLevel('Community Partners').length > 0) {
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">C</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                Community Partners
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Local communities and organizations that support our mission
            </p>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl"
            >
              @for (sponsor of getSponsorsByLevel('Community Partners'); track
              sponsor.id) {
              <div class="group">
                <a
                  [href]="sponsor.websiteUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 hover:-translate-y-1"
                >
                  <div class="h-full flex items-center justify-center">
                    <img
                      [src]="sponsor.logoUrl"
                      [alt]="sponsor.name"
                      class="w-24 h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>
              }
            </div>
          </div>
        </div>
        }

        <!-- Sponsoring Process Info -->
        <div class="max-w-5xl mx-auto mb-16">
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700"
          >
            <div class="text-center mb-10">
              <h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                How Sponsoring Works
              </h3>
              <p
                class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Join our amazing sponsor family and help make NG-DE even better
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-10">
              <div class="text-center group">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <span
                    class="text-primary-600 dark:text-primary-400 font-bold text-2xl"
                    >1</span
                  >
                </div>
                <h4
                  class="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                >
                  We Get in Touch
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Reach out to us and let us know about your interest in
                  sponsoring NG-DE
                </p>
              </div>

              <div class="text-center group">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <span
                    class="text-primary-600 dark:text-primary-400 font-bold text-2xl"
                    >2</span
                  >
                </div>
                <h4
                  class="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                >
                  Get Detailed Information
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You'll receive a comprehensive PDF brochure with all
                  sponsoring options and possibilities
                </p>
              </div>

              <div class="text-center group">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <span
                    class="text-primary-600 dark:text-primary-400 font-bold text-2xl"
                    >3</span
                  >
                </div>
                <h4
                  class="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                >
                  Personal Consultation
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We'll have a call to discuss how we can tailor sponsoring to
                  achieve your specific goals
                </p>
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-6 text-center border border-primary-200 dark:border-primary-700"
            >
              <p class="text-primary-700 dark:text-primary-300 text-base">
                💡 <strong>Planning ahead?</strong> We're also already accepting
                inquiries for NG-DE 2026 sponsoring opportunities!
              </p>
            </div>
          </div>
        </div>

        <!-- Become a Sponsor -->
        <div class="text-center">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Join Our Sponsor Family?
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Let's create something amazing together
            </p>
          </div>
          <a
            href="mailto:info@ng-de.org"
            class="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>Become a Sponsor</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
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

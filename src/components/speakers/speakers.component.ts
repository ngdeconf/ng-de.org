import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="speakers" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Meet Our Speakers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn from Angular experts and community leaders from around the world
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (speaker of speakers(); track speaker.id) {
            <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div class="relative overflow-hidden">
                <img 
                  [src]="speaker.imageUrl" 
                  [alt]="speaker.name" 
                  class="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div class="text-white">
                    <p class="font-medium">{{ speaker.title }}</p>
                    <p>{{ speaker.company }}</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ speaker.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{{ speaker.bio }}</p>
                <div class="flex space-x-3">
                  @if (speaker.twitterHandle) {
                    <a 
                      [href]="'https://twitter.com/' + speaker.twitterHandle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="text-blue-400 hover:text-blue-500 transition-colors"
                      aria-label="Twitter">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  }
                  @if (speaker.githubHandle) {
                    <a 
                      [href]="'https://github.com/' + speaker.githubHandle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SpeakersComponent {
  speakers = this.conferenceService.getSpeakers();
  
  constructor(private conferenceService: ConferenceService) {}
}
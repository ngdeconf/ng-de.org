import { Component } from '@angular/core';

@Component({
  selector: 'ngde-impressions',
  template: `
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="relative aspect-video overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="assets/images/impressions/ng-de-stage.jpg"
              alt="Angular conference attendees listening to a speaker"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div
            class="relative aspect-video overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="assets/images/impressions/ng-de-kicker.jpg"
              alt="Attendees in the sponsoring area playing table soccer"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div
            class="relative aspect-video overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="assets/images/impressions/sponsoring-area.jpg"
              alt="Sponsoring area with a lot of attendees"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `
  ]
})
export class ImpressionsComponent {}

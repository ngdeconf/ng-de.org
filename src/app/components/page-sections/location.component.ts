import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Venue {
  id: string;
  name: string;
  type: 'conference' | 'hotel' | 'restaurant' | 'attraction';
  description: string;
  address: string;
  imageUrl: string;
  websiteUrl?: string;
  distance?: string;
  rating?: number;
  priceRange?: string;
  features?: string[];
}

@Component({
  selector: 'ngde-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="location" class="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Location & Accommodation
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the vibrant city of Berlin and find the perfect place to stay during NG-DE Conference
          </p>
        </div>

        <!-- Main Venue -->
        <div class="mb-16">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <!-- Image -->
              <div class="relative h-64 lg:h-auto">
                <img
                  src="assets/images/location/hotel-oderberger-poolhalle.jpg"
                  alt="Hotel Orderberger (GLS Campus Berlin)"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                <div class="absolute bottom-4 left-4 lg:hidden">
                  <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Conference Venue
                  </span>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="hidden lg:block mb-4">
                  <span class="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Conference Venue
                  </span>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hotel Orderberger (GLS Campus Berlin)
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Located in the vibrant Prenzlauer Berg district, the Hotel Orderberger at GLS Campus offers modern conference facilities 
                  in a creative and inspiring environment. Perfect for learning and networking in the heart of Berlin.
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center text-gray-600 dark:text-gray-400">
                    <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Oderberger Str. 57, 10435 Berlin Germany
                  </div>
                  <div class="flex items-center text-gray-600 dark:text-gray-400">
                    <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    5 min walk to Mauerpark
                  </div>
                </div>
                <a
                  href="https://www.gls-campus-berlin.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-fit"
                >
                  Visit Website
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
        
    </section>
  `
})
export class LocationComponent {
  private readonly venues = signal<Venue[]>([
    // Hotels
    {
      id: 'hotel-orderberger',
      name: 'Hotel Orderberger (GLS Campus Berlin)',
      type: 'hotel',
      description: 'Conference venue in the heart of Prenzlauer Berg with modern facilities and creative atmosphere.',
      address: 'Oderberger Str. 57, 10435 Berlin Germany',
      imageUrl: 'assets/images/location/hotel-oderberger-poolhalle.jpg',
      websiteUrl: 'https://www.gls-campus-berlin.de/',
      distance: '0 min',
      rating: 4.3,
      priceRange: '€€€',
      features: ['Conference Venue', 'Creative Space', 'Central Location', 'WiFi']
    },
    {
      id: 'hotel-hackescher-hof',
      name: 'Hotel Hackescher Hof',
      type: 'hotel',
      description: 'Boutique hotel in the historic Hackescher Markt area with elegant rooms and central location.',
      address: 'Große Präsidentenstraße 8, 10178 Berlin',
      imageUrl: 'assets/images/location/placeholder-hotel.svg',
      websiteUrl: 'https://www.hackescher-hof.de',
      distance: '20 min',
      rating: 4.2,
      priceRange: '€€€',
      features: ['Historic Center', 'Boutique', 'Restaurant', 'WiFi']
    },
    {
      id: 'meininger-berlin-mitte',
      name: 'MEININGER Hotel Berlin Mitte',
      type: 'hotel',
      description: 'Modern hotel in Mitte district with comfortable rooms and great value for money.',
      address: 'Hallesches Ufer 30, 10963 Berlin',
      imageUrl: 'assets/images/location/placeholder-hotel.svg',
      websiteUrl: 'https://www.meininger-hotels.com/de/hotels/berlin/hotel-berlin-mitte/',
      distance: '25 min',
      rating: 4.0,
      priceRange: '€€',
      features: ['Central Location', 'Modern', 'Bar', 'WiFi']
    },
    {
      id: 'nhow-berlin',
      name: 'nhow Berlin',
      type: 'hotel',
      description: 'Design hotel in Friedrichshain with creative atmosphere and modern amenities.',
      address: 'Stralauer Allee 3, 10245 Berlin',
      imageUrl: 'assets/images/location/placeholder-hotel.svg',
      websiteUrl: 'https://www.nhow-hotels.com/berlin',
      distance: '30 min',
      rating: 4.1,
      priceRange: '€€€',
      features: ['Design Hotel', 'Creative', 'River View', 'WiFi']
    }
  ]);

  getVenuesByType(type: Venue['type']) {
    return this.venues().filter(venue => venue.type === type);
  }
} 
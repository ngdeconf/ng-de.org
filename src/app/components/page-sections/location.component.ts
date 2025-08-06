import { Component, signal } from '@angular/core';


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
  walkingTime?: string;
}

interface TransportOption {
  from: string;
  route: string;
  duration: string;
  nearestStop: string;
}

@Component({
  selector: 'ngde-location',
  standalone: true,
  imports: [],
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
                  alt="Hotel Oderberger (GLS Campus Berlin)"
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
                  Hotel Oderberger (GLS Campus Berlin)
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Located in the vibrant Prenzlauer Berg district, the Hotel Oderberger at GLS Campus offers modern conference facilities 
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

        <!-- Getting There Section -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Getting There
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Berlin's excellent public transport system makes it easy to reach the venue from anywhere in the city
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Public Transport Options -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Public Transport Routes</h4>
              </div>
              
              <div class="space-y-4">
                @for (option of transportOptions(); track option.from) {
                  <div class="border-l-4 border-primary-200 dark:border-primary-800 pl-4 py-2">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-medium text-gray-900 dark:text-white">{{ option.from }}</h5>
                      <span class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ option.duration }}</span>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">{{ option.route }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-500">Nearest stop: {{ option.nearestStop }}</p>
                  </div>
                }
              </div>
            </div>

            <!-- Nearest Stops -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Nearest Stops</h4>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span class="text-white text-xs font-bold">M1</span>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Schwedter Str.</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">5 min walk • Tram M1, 12</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span class="text-white text-xs font-bold">U2</span>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Eberswalder Straße</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">7-10 min walk • U-Bahn U2</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span class="text-white text-xs font-bold">142</span>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Sredzkistr.</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">5 min walk • Bus 142</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hotels Section -->
        <div>
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Recommended Hotels
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay close to the venue with these carefully selected hotels in Prenzlauer Berg and nearby areas
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (hotel of getVenuesByType('hotel'); track hotel.id) {
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="p-6">
                  <h4 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ hotel.name }}</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ hotel.description }}</p>
                  
                  <div class="space-y-2 mb-4">
                    <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg class="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ hotel.address }}
                    </div>
                    @if (hotel.rating) {
                      <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <svg class="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {{ hotel.rating }}/5
                      </div>
                    }
                  </div>
                  
                  @if (hotel.features) {
                    <div class="flex flex-wrap gap-2 mb-4">
                      @for (feature of hotel.features.slice(0, 3); track feature) {
                        <span class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                          {{ feature }}
                        </span>
                      }
                    </div>
                  }
                  
                  @if (hotel.websiteUrl) {
                    <a
                      [href]="hotel.websiteUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                    >
                      Visit Website
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  }
                </div>
              </div>
            }
          </div>
        </div>
        
      </div>
    </section>
  `
})
export class LocationComponent {
  readonly transportOptions = signal<TransportOption[]>([
    {
      from: 'Berlin Hauptbahnhof',
      route: 'Tram M10 to Eberswalder Str. + 8 min walk',
      duration: '20-25 min',
      nearestStop: 'Eberswalder Str.'
    },
    {
      from: 'Alexanderplatz',
      route: 'Tram M1/M2 to Schwedter Str. + 5 min walk',
      duration: '15-20 min',
      nearestStop: 'Schwedter Str.'
    }
  ]);

  private readonly venues = signal<Venue[]>([
    {
      id: 'hotel-oderberger',
      name: 'Hotel Oderberger Berlin',
      type: 'hotel',
      description: 'Historic hotel with restored swimming pool, elegant rooms, and conference facilities at the venue location.',
      address: 'Oderberger Straße 56-57, 10435 Berlin',
      imageUrl: 'assets/images/location/hotel-oderberger-poolhalle.jpg',
      websiteUrl: 'https://www.hotel-oderberger.berlin/en/',
      walkingTime: '0 min',
      rating: 4.3,
      priceRange: '€€€',
      features: ['Historic Pool', 'Conference Facilities', 'Restaurant', 'WiFi', 'Bike Rental']
    },
    {
      id: 'hotel-kastanienhof',
      name: 'Hotel Kastanienhof',
      type: 'hotel',
      description: 'Traditional charm hotel with excellent breakfast and close proximity to Mauerpark.',
      address: 'Kastanienallee 65, 10119 Berlin',
      imageUrl: 'assets/images/location/placeholder-hotel.svg',
      websiteUrl: 'https://www.kastanienhof.berlin/de',
      walkingTime: '9 min',
      rating: 4.1,
      priceRange: '€€',
      features: ['Traditional Charm', 'Breakfast', 'Bar', 'Meeting Room', 'WiFi']
    },
    {
      id: 'motel-one-alexanderplatz',
      name: 'Motel One Berlin-Alexanderplatz',
      type: 'hotel',
      description: 'Modern 3-star hotel with stylish design and prime central location near Alexanderplatz and major attractions.',
      address: 'Grunerstrasse 11, 10178 Berlin',
      imageUrl: 'assets/images/location/placeholder-hotel.svg',
      websiteUrl: 'https://www.motel-one.com/en/hotels/berlin/hotel-berlin-alexanderplatz/',
      walkingTime: '15 min by transit',
      rating: 4.1,
      priceRange: '€€',
      features: ['Central Location', 'Modern Design', 'Outdoor Bar', '24h Reception', 'Near TV Tower']
    }
  ]);

  getVenuesByType(type: Venue['type']) {
    return this.venues().filter(venue => venue.type === type);
  }
} 
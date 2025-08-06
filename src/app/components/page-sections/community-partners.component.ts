import { Component, signal } from '@angular/core';


interface CommunityPartner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  description?: string;
}

@Component({
  selector: 'ngde-community-partners',
  standalone: true,
  imports: [],
  template: `
    <section id="community-partners" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Community Partners
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are proud to partner with amazing communities from around the world
          </p>
        </div>

        <!-- Community Partners Grid -->
        <div class="grid grid-cols-3 md:grid-cols-6 gap-8">
          @for (partner of getCommunityPartners(); track partner.id) {
            <div class="group">
              <a
                [href]="partner.websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-8 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-h-[180px] flex items-center justify-center"
                [title]="partner.name"
              >
                <img
                  [src]="partner.logoUrl"
                  [alt]="partner.name + ' logo'"
                  class="h-32 object-contain max-w-full filter group-hover:brightness-110 transition-all duration-300"
                />
              </a>
            </div>
          }
        </div>

        <!-- Become a Community Partner -->
        <div class="text-center mt-16">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Want to become a Community Partner?
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join our network of amazing communities and help us spread the Angular love worldwide!
          </p>
          <a
            href="mailto:info@ng-de.org?subject=Community Partnership"
            class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m2 4h6m-6 4h6m-3-8V4a2 2 0 012-2h2a2 2 0 012 2v4M9 4a2 2 0 012-2h2a2 2 0 012 2v4" />
            </svg>
            Become a Community Partner
          </a>
        </div>
      </div>
    </section>
  `
})
export class CommunityPartnersComponent {
  private readonly communityPartners = signal<CommunityPartner[]>([
    {
      id: 'angular-berlin',
      name: 'Angular Berlin',
      logoUrl: 'assets/images/community-partners/angular-berlin.svg',
      websiteUrl: 'https://www.meetup.com/AngularJS-Meetup-Berlin/',
      description: 'Berlin Angular Community'
    },
    {
      id: 'angular-ruhr',
      name: 'Angular Ruhr',
      logoUrl: 'assets/images/community-partners/angular-ruhr.png',
      websiteUrl: 'https://www.meetup.com/de-DE/Angular-Ruhr/',
      description: 'Angular Community in the Ruhr Area'
    },
    {
      id: 'frankenjs',
      name: 'FrankenJS',
      logoUrl: 'assets/images/community-partners/frankenjs.svg',
      websiteUrl: 'https://frankenjs.org',
      description: 'JavaScript Community Franconia'
    },
    {
      id: 'angular-hamburg',
      name: 'Angular Hamburg',
      logoUrl: 'assets/images/community-partners/angular-hamburg.svg',
      websiteUrl: 'https://www.meetup.com/de-DE/Hamburg-AngularJS-Meetup/',
      description: 'Hamburg Angular Community'
    },
    {
      id: 'ng-be',
      name: 'NG-BE',
      logoUrl: 'assets/images/community-partners/ng-be.png',
      websiteUrl: 'https://ng-be.org/',
      description: 'Angular Belgium Conference'
    },
    {
      id: 'angular-heidelberg',
      name: 'Angular Heidelberg',
      logoUrl: 'assets/images/community-partners/angular-heidelberg.png',
      websiteUrl: 'https://angular-heidelberg.de/',
      description: 'Heidelberg Angular Community'
    },
    {
      id: 'nggirls',
      name: 'ngGirls',
      logoUrl: 'assets/images/community-partners/ng-girls.png',
      websiteUrl: 'https://www.ng-girls.org',
      description: 'Free Angular workshops for women'
    },
    {
      id: 'conference-buddy',
      name: 'Conference Buddy',
      logoUrl: 'assets/images/community-partners/confbuddy.png',
      websiteUrl: 'https://twitter.com/confbuddy',
      description: 'Conference Networking Platform'
    },
    {
      id: 'angular-leipzig',
      name: 'Angular Leipzig',
      logoUrl: 'assets/images/community-partners/angular-leipzig.png',
      websiteUrl: 'https://www.meetup.com/Angular-Meetup-Leipzig/',
      description: 'Leipzig Angular Community'
    },
    {
      id: 'angular-love',
      name: 'Angular Love',
      logoUrl: 'assets/images/community-partners/angular.love.svg',
      websiteUrl: 'https://www.angular.love/en/',
      description: 'Global Angular Community'
    },
    {
      id: 'angular-space',
      name: 'Angular Space',
      logoUrl: 'assets/images/community-partners/angular-space.png',
      websiteUrl: 'https://angularspace.com/',
      description: 'Angular Community Platform'
    },
    {
      id: 'angular-israel',
      name: 'Angular Israel',
      logoUrl: 'assets/images/community-partners/angular-il.jpg',
      websiteUrl: 'https://www.meetup.com/de-DE/Angular-IL',
      description: 'Israel Angular Community'
    },
    {
      id: 'webdave',
      name: 'Webdave',
      logoUrl: 'assets/images/community-partners/webdave_de.png',
      websiteUrl: 'https://webdave.tv/',
      description: 'Angular Content Creator'
    },
    {
      id: 'angular-rome',
      name: 'Angular Rome',
      logoUrl: 'assets/images/community-partners/angular-rome.svg',
      websiteUrl: 'https://ngrome.io/home',
      description: 'Rome Angular Community'
    },
    {
      id: 'angular-cologne',
      name: 'Angular Cologne',
      logoUrl: 'assets/images/community-partners/angular-cologne.svg',
      websiteUrl: 'https://angular.cologne',
      description: 'Cologne Angular Community'
    },
    {
      id: 'angular-vienna',
      name: 'Angular Vienna',
      logoUrl: 'assets/images/community-partners/angular_vienna.svg',
      websiteUrl: 'https://www.meetup.com/angular-vienna/',
      description: 'Vienna Angular Community'
    },
    {
      id: 'nestjs-vienna',
      name: 'NestJS Vienna',
      logoUrl: 'assets/images/community-partners/nestjsvienna.svg',
      websiteUrl: 'https://www.meetup.com/nestjs-vienna/',
      description: 'Vienna NestJS Community'
    }
  ]);

  getCommunityPartners() {
    return this.communityPartners();
  }
} 
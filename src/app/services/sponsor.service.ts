import { Injectable, signal } from '@angular/core';
import { Sponsor } from '../models/models';

@Injectable({ providedIn: 'root' })
export class SponsorService {
  private readonly sponsors = signal<Sponsor[]>([
    {
      id: 'eon',
      name: 'EON',
      logoUrl: 'assets/images/sponsors/eon.png',
      websiteUrl: 'https://www.eon.com',
      level: 'Platinum'
    },
    {
      id: 'adesso',
      name: 'Adesso',
      logoUrl: 'assets/images/sponsors/adesso.png',
      websiteUrl: 'https://www.adesso.de',
      level: 'Gold'
    },
    {
      id: 'snapaddy',
      name: 'snapADDY',
      logoUrl: 'assets/images/sponsors/snapaddy.svg',
      websiteUrl: 'https://www.snapaddy.com',
      level: 'Bronze'
    },
    {
      id: 'house-of-angular',
      name: 'House of Angular',
      logoUrl: 'assets/images/sponsors/house-of-angular.png',
      websiteUrl: 'https://houseofangular.io/',
      level: 'Bronze'
    },
    {
      id: 'exxeta',
      name: 'Exxeta',
      logoUrl: 'assets/images/sponsors/exxeta_logo_positiv_RGB.png',
      websiteUrl: 'https://www.exxeta.com',
      level: 'Bronze'
    },
    {
      id: 'qupaya',
      name: 'qupaya',
      logoUrl: 'assets/images/sponsors/qupaya logo primary.png',
      websiteUrl: 'https://qupaya.com',
      level: 'Bronze'
    }
  ]);

  getSponsors() {
    return this.sponsors();
  }

  getSponsorsByLevel(level: Sponsor['level']) {
    return this.sponsors().filter(sponsor => sponsor.level === level);
  }
} 
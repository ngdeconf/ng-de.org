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
    }
  ]);

  getSponsors() {
    return this.sponsors();
  }

  getSponsorsByLevel(level: Sponsor['level']) {
    return this.sponsors().filter(sponsor => sponsor.level === level);
  }
} 
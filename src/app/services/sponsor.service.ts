import { Injectable, signal } from '@angular/core';
import { Sponsor } from '../models/models';

const SPONSORS_2026: Sponsor[] = [
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
      id: 'google',
      name: 'google',
      logoUrl: 'assets/images/sponsors/google.png',
      websiteUrl: 'https://google.com',
      level: 'Bronze'
    },
    {
      id: 'angular',
      name: 'angular',
      logoUrl: 'assets/images/sponsors/angular.svg',
      websiteUrl: 'https://angular.dev',
      level: 'Bronze'
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
      level: 'Silver'
    },
    {
      id: 'cologne-intelligence',
      name: 'Cologne Intelligence',
      logoUrl: 'assets/images/sponsors/cologne-intelligence.webp',
      websiteUrl: 'https://www.cologne-intelligence.de/',
      level: 'Silver'
    }
];

/** Sponsors from NG-DE 2025 (past year). */
const SPONSORS_2025: Sponsor[] = [
  {
    id: 'eon-2025',
    name: 'EON',
    logoUrl: 'assets/images/sponsors/eon.png',
    websiteUrl: 'https://www.eon.com',
    level: 'Platinum'
  },
  {
    id: 'adesso-2025',
    name: 'Adesso',
    logoUrl: 'assets/images/sponsors/adesso.png',
    websiteUrl: 'https://www.adesso.de',
    level: 'Gold'
  },
  {
    id: 'google-2025',
    name: 'google',
    logoUrl: 'assets/images/sponsors/google.png',
    websiteUrl: 'https://google.com',
    level: 'Bronze'
  },
  {
    id: 'angular-2025',
    name: 'angular',
    logoUrl: 'assets/images/sponsors/angular.svg',
    websiteUrl: 'https://angular.dev',
    level: 'Bronze'
  },
  {
    id: 'snapaddy-2025',
    name: 'snapADDY',
    logoUrl: 'assets/images/sponsors/snapaddy.svg',
    websiteUrl: 'https://www.snapaddy.com',
    level: 'Bronze'
  },
  {
    id: 'house-of-angular-2025',
    name: 'House of Angular',
    logoUrl: 'assets/images/sponsors/house-of-angular.png',
    websiteUrl: 'https://houseofangular.io/',
    level: 'Bronze'
  },
  {
    id: 'exxeta-2025',
    name: 'Exxeta',
    logoUrl: 'assets/images/sponsors/exxeta_logo_positiv_RGB.png',
    websiteUrl: 'https://www.exxeta.com',
    level: 'Bronze'
  },
  {
    id: 'qupaya-2025',
    name: 'qupaya',
    logoUrl: 'assets/images/sponsors/qupaya logo primary.png',
    websiteUrl: 'https://qupaya.com',
    level: 'Silver'
  },
  {
    id: 'cologne-intelligence-2025',
    name: 'Cologne Intelligence',
    logoUrl: 'assets/images/sponsors/cologne-intelligence.webp',
    websiteUrl: 'https://www.cologne-intelligence.de/',
    level: 'Silver'
  }
];

@Injectable({ providedIn: 'root' })
export class SponsorService {
  private readonly sponsors = signal<Sponsor[]>(SPONSORS_2026);

  getSponsors(year?: number): Sponsor[] {
    if (year === 2025) return SPONSORS_2025;
    return this.sponsors();
  }

  getSponsorsByLevel(level: Sponsor['level'], year?: number): Sponsor[] {
    const list = year === 2025 ? SPONSORS_2025 : this.sponsors();
    return list.filter(sponsor => sponsor.level === level);
  }
}

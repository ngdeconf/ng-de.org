import { Injectable, signal } from '@angular/core';
import { Sponsor } from '../models/models';

@Injectable({ providedIn: 'root' })
export class SponsorService {
  private readonly sponsors = signal<Sponsor[]>([
    // Add your sponsors here
    // Example:
    // {
    //   id: 'example-company',
    //   name: 'Example Company',
    //   logoUrl: 'assets/images/sponsors/example-company.png',
    //   websiteUrl: 'https://example.com',
    //   level: 'Platinum'
    // }
  ]);

  getSponsors() {
    return this.sponsors();
  }

  getSponsorsByLevel(level: Sponsor['level']) {
    return this.sponsors().filter(sponsor => sponsor.level === level);
  }
} 
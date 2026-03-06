import { Component } from '@angular/core';
import { AnnouncementBannerComponent } from '../page-sections/announcement-banner.component';
import { CommunityPartnersComponent } from '../page-sections/community-partners.component';
import { FaqComponent } from '../page-sections/faq.component';
import { HeroComponent } from '../page-sections/hero.component';
import { ImpressionsComponent } from '../page-sections/impressions.component';
import { LocationComponent } from '../page-sections/location.component';
import { NewsletterSubscriptionComponent } from '../page-sections/newsletter-subscription.component';
import { OrganizerComponent } from '../page-sections/organizer.component';
import { SpeakersComponent } from '../page-sections/speakers.component';
import { SponsorsComponent } from '../page-sections/sponsors.component';

@Component({
  selector: 'ngde-home',
  standalone: true,
  imports: [
    HeroComponent,
    AnnouncementBannerComponent,
    // TicketsComponent,
    SpeakersComponent,
    // ScheduleComponent,
    // WorkshopsComponent,
    OrganizerComponent,
    SponsorsComponent,
    CommunityPartnersComponent,
    LocationComponent,
    ImpressionsComponent,
    NewsletterSubscriptionComponent,
    FaqComponent
  ],
  template: `
    <ngde-hero />
    <ngde-newsletter-subscription />
    <ngde-announcement-banner />
    <ngde-sponsors />
    <!-- <ngde-tickets /> -->
    <ngde-speakers />
    <!-- <ngde-schedule /> -->
    <!-- <ngde-workshops /> -->
    <ngde-organizer />
    <ngde-community-partners />
    <ngde-location />
    <ngde-impressions />
    <ngde-faq />
  `
})
export class HomeComponent {}

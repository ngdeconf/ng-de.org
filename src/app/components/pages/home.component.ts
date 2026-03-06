import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown.component';
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
import { TicketsComponent } from "../page-sections/tickets.component";

@Component({
  selector: 'ngde-home',
  standalone: true,
  imports: [
    HeroComponent,
    CountdownComponent,
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
    FaqComponent,
    TicketsComponent
],
  template: `
    <ngde-hero />
    <ngde-countdown />
    <ngde-tickets [ticketSalesStart]="ticketSalesStartDate" />
    <ngde-newsletter-subscription />
    <ngde-announcement-banner />
    <ngde-sponsors />
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
export class HomeComponent {
  /** Ticket sales CTA becomes visible on 1 April, 7:00 CET */
  readonly ticketSalesStartDate = new Date('2026-04-01T07:00:00+02:00');
}

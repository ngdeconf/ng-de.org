import { Component } from '@angular/core';
import { CallForPapersComponent } from '../page-sections/call-for-papers.component';
import { CommunityPartnersComponent } from '../page-sections/community-partners.component';
import { LocationComponent } from '../page-sections/location.component';
import { FaqComponent } from '../page-sections/faq.component';
import { HeroComponent } from '../page-sections/hero.component';
import { ImpressionsComponent } from '../page-sections/impressions.component';
import { NewsletterComponent } from '../page-sections/newsletter.component';
import { OrganizerComponent } from '../page-sections/organizer.component';
import { ScheduleComponent } from '../page-sections/schedule.component';
import { SpeakersComponent } from '../page-sections/speakers.component';
import { SponsorsComponent } from '../page-sections/sponsors.component';
import { TicketsComponent } from '../page-sections/tickets.component';
import { WorkshopsComponent } from '../page-sections/workshops.component';

@Component({
  selector: 'ngde-home',
  standalone: true,
  imports: [
    HeroComponent,
    TicketsComponent,
    SpeakersComponent,
    ScheduleComponent,
    WorkshopsComponent,
    OrganizerComponent,
    SponsorsComponent,
    CommunityPartnersComponent,
    LocationComponent,
    ImpressionsComponent,
    NewsletterComponent,
    // CallForPapersComponent,
    FaqComponent
  ],
  template: `
    <ngde-hero />
    <ngde-tickets />
    <ngde-speakers />
    <ngde-schedule />
    <ngde-workshops />
    <ngde-organizer />
    <ngde-sponsors />
    <ngde-community-partners />
    <ngde-location />
    <ngde-impressions />
    <ngde-newsletter />
    <!-- <ngde-call-for-papers /> -->
    <ngde-faq />
  `
})
export class HomeComponent {}

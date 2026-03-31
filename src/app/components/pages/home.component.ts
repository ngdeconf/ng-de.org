import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommunityPartnersComponent } from '../page-sections/community-partners.component';
import { FaqComponent } from '../page-sections/faq.component';
import { HeroComponent } from '../page-sections/hero.component';
import { ImpressionsComponent } from '../page-sections/impressions.component';
import { NewsletterSubscriptionComponent } from '../page-sections/newsletter-subscription.component';
import { OrganizerComponent } from '../page-sections/organizer.component';
import { SpeakersComponent } from '../page-sections/speakers.component';

@Component({
  selector: 'ngde-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    SpeakersComponent,
    OrganizerComponent,
    CommunityPartnersComponent,
    ImpressionsComponent,
    NewsletterSubscriptionComponent,
    FaqComponent,
  ],
  template: `
    <ngde-hero />
    <ngde-newsletter-subscription />
    <ngde-speakers />
    <ngde-organizer />
    <ngde-community-partners />
    <ngde-impressions />
    <ngde-faq />
  `
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { HeroComponent } from '../page-sections/hero.component';
// import { ScheduleComponent } from '../schedule/schedule.component';
import { CallForPapersComponent } from '../page-sections/call-for-papers.component';
import { FaqComponent } from '../page-sections/faq.component';
import { ImpressionsComponent } from '../page-sections/impressions.component';
import { SpeakersComponent } from '../page-sections/speakers.component';
import { TicketsComponent } from '../page-sections/tickets.component';
import { WorkshopsComponent } from '../page-sections/workshops.component';

@Component({
  selector: 'app-home',

  imports: [
    HeroComponent,
    TicketsComponent,
    SpeakersComponent,
    // ScheduleComponent,
    WorkshopsComponent,
    CallForPapersComponent,
    ImpressionsComponent,
    FaqComponent
  ],
  template: `
    <app-hero />
    <app-tickets />
    <app-speakers />
    <!-- <app-schedule /> -->
    <app-workshops />
    <app-impressions />
    <app-call-for-papers />
    <app-faq />
  `
})
export class HomeComponent {}

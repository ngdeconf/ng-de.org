import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
// import { ScheduleComponent } from '../schedule/schedule.component';
import { SpeakersComponent } from '../speakers/speakers.component';
import { TicketsComponent } from '../tickets/tickets.component';
import { WorkshopsComponent } from '../workshops/workshops.component';
import { CallForPapersComponent } from '../call-for-papers/call-for-papers.component';
import { ImpressionsComponent } from '../impressions/impressions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    TicketsComponent,
    SpeakersComponent,
    // ScheduleComponent,
    WorkshopsComponent,
    CallForPapersComponent,
    ImpressionsComponent
  ],
  template: `
    <app-hero />
    <app-tickets />
    <app-speakers />
    <!-- <app-schedule /> -->
    <app-workshops />
    <app-impressions />
    <app-call-for-papers />
  `
})
export class HomeComponent {}

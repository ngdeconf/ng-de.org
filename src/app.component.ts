import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    TicketsComponent,
    SpeakersComponent,
    ScheduleComponent,
    WorkshopsComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <app-header />
      <main>
        <app-hero />
        <app-tickets />
        <app-speakers />
        <app-schedule />
        <app-workshops />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}
import { Injectable, signal } from '@angular/core';
import { ScheduleDay } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private readonly schedule = signal<ScheduleDay[]>([
    {
      title: 'Thursday',
      datetime: '2025-11-06',
      entries: [
        // Registration - 08:30-09:30
        {
          title: 'Registration & Light Refreshments',
          datetime: '2025-11-06T08:30:00',
          information: 'Registration with coffee and small snacks',
          location: 'Both Stages',
          session: null
        },
        // Opening & Welcome - 09:30-10:00
        {
          title: 'Opening & Welcome',
          datetime: '2025-11-06T09:30:00',
          information: 'Robin Böhm and MC',
          location: 'Pool House',
          session: null
        },
        {
          title: 'Opening & Welcome',
          datetime: '2025-11-06T09:30:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Keynote - 10:00-10:30
        {
          title: 'Keynote',
          datetime: '2025-11-06T10:00:00',
          information: 'Mark Thompson - tbd',
          location: 'Pool House',
          session: 'keynote-day1'
        },
        {
          title: 'Keynote',
          datetime: '2025-11-06T10:00:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Slot 2 - 10:30-11:00
        {
          title: 'Talk',
          datetime: '2025-11-06T10:30:00',
          information: 'Matthieu Riegler - tbd',
          location: 'Pool House',
          session: 'talk-day1-2'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T10:30:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Coffee Break - 11:00-11:45
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-06T11:00:00',
          information: 'Networking opportunity',
          location: 'Both Stages',
          session: null
        },
        // Slot 3 - 11:45-12:15 - Two different talks
        {
          title: 'Talk',
          datetime: '2025-11-06T11:45:00',
          information: 'Robin Götz',
          location: 'Pool House',
          session: 'talk-day1-3'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T11:45:00',
          information: 'Mario Trzensky',
          location: 'Aula',
          session: 'talk-cologne-intelligence-ai-ux'
        },
        // Slot 4 - 12:15-12:45
        {
          title: 'Talk',
          datetime: '2025-11-06T12:15:00',
          information: 'Marko Stanimirović',
          location: 'Pool House',
          session: 'talk-day1-4'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T12:15:00',
          information: 'Gregor Woiwode',
          location: 'Aula',
          session: 'talk-agentic-angular'
        },
        // Lunch - 12:45-14:15
        {
          title: 'Lunch Break 🍽️',
          datetime: '2025-11-06T12:45:00',
          information: 'Restaurant Oderberger',
          location: 'Both Stages',
          session: null
        },
        // Slot 5 - 14:15-14:45 - Two different talks
        {
          title: 'Talk',
          datetime: '2025-11-06T14:15:00',
          information: 'Kasia Biernat-Kluba',
          location: 'Pool House',
          session: 'talk-day1-5'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:15:00',
          information: 'Tobias Brenner',
          location: 'Aula',
          session: 'talk-eon-microfrontends'
        },
        // Slot 6 - 14:45-15:15 - Parallel Sessions
        {
          title: 'Talk',
          datetime: '2025-11-06T14:45:00',
          information: 'Eliran Eliassy',
          location: 'Pool House',
          session: 'talk-day1-6'
        },
        {
          title: 'Panel Discussion',
          datetime: '2025-11-06T14:45:00',
          information: 'Various speakers',
          location: 'Aula',
          session: 'panel-angular-ai-forward'
        },
        // Coffee Break - 15:15-16:00
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-06T15:15:00',
          information: 'Networking opportunity',
          location: 'Both Stages',
          session: null
        },
        // Slot 7 - 16:00-16:30
        {
          title: 'Talk',
          datetime: '2025-11-06T16:00:00',
          information: 'Martina Kraus',
          location: 'Pool House',
          session: 'talk-day1-7'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T16:00:00',
          information: 'Robin Böhm',
          location: 'Aula',
          session: 'talk-process-automation-ai-agents'
        },
        // Slot 8 - 16:30-17:15
        {
          title: 'Talk',
          datetime: '2025-11-06T16:30:00',
          information: 'Enea Jahollari',
          location: 'Pool House',
          session: 'talk-day1-8'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T16:30:00',
          information: 'TBD',
          location: 'Aula',
          session: 'tbd-talk-1'
        },
        // Closing - 17:15-18:00
        {
          title: 'Closing Day 1',
          datetime: '2025-11-06T17:15:00',
          information: 'Wrap-up',
          location: 'Pool House',
          session: null
        },
        {
          title: 'Closing Day 1',
          datetime: '2025-11-06T17:15:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Community Event - 18:00-22:00
        {
          title: 'Community Event/Party 🎉',
          datetime: '2025-11-06T18:00:00',
          information: 'Social event and networking',
          location: 'Pool House',
          session: null
        },
        {
          title: 'Community Event/Party 🎉',
          datetime: '2025-11-06T18:00:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        }
      ]
    },
    {
      title: 'Friday',
      datetime: '2025-11-07',
      entries: [
        // Registration - 09:00-09:30
        {
          title: 'Registration & Breakfast',
          datetime: '2025-11-07T09:00:00',
          information: 'Registration and breakfast',
          location: 'Both Stages',
          session: null
        },
        // Opening - 09:30-10:00
        {
          title: 'Opening & Welcome',
          datetime: '2025-11-07T09:30:00',
          information: 'Opening Day 2',
          location: 'Pool House',
          session: null
        },
        {
          title: 'Opening & Welcome',
          datetime: '2025-11-07T09:30:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Keynote - 10:00-10:30
        {
          title: 'Keynote',
          datetime: '2025-11-07T10:00:00',
          information: 'Jens Kühlers',
          location: 'Pool House',
          session: 'keynote-day2'
        },
        {
          title: 'Keynote',
          datetime: '2025-11-07T10:00:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Slot 11 - 10:30-11:00
        {
          title: 'Talk',
          datetime: '2025-11-07T10:30:00',
          information: 'Component Testing That Feels Like Playwright',
          location: 'Pool House',
          session: 'talk-day2-16',
          speakers: ['Younes Jaaidi', 'Rainer Hahnekamp']
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T10:30:00',
          information: 'TBD',
          location: 'Aula',
          session: 'tbd-talk-3'
        },
        // Coffee Break - 11:00-11:45
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-07T11:00:00',
          information: 'Networking opportunity',
          location: 'Both Stages',
          session: null
        },
        // Slot 12 - 11:45-12:15
        {
          title: 'Talk',
          datetime: '2025-11-07T11:45:00',
          information: 'Maria Korneeva',
          location: 'Pool House',
          session: 'talk-day2-11'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T11:45:00',
          information: 'Mussie Haile',
          location: 'Aula',
          session: 'talk-rapid-prototyping-ai'
        },
        // Slot 13 - 12:15-12:45
        {
          title: 'Talk',
          datetime: '2025-11-07T12:15:00',
          information: 'Brygida Fiejdasz',
          location: 'Pool House',
          session: 'talk-day2-13'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T12:15:00',
          information: 'Jim Sellmeijer',
          location: 'Aula',
          session: 'jim-ai-talk'
        },
        // Lunch - 12:45-14:15
        {
          title: 'Lunch Break & Group Photo 📸',
          datetime: '2025-11-07T12:45:00',
          information: 'Lunch & Gruppenfoto',
          location: 'Both Stages',
          session: null
        },
        // Slot 14 - 14:15-14:45
        {
          title: 'Talk',
          datetime: '2025-11-07T14:15:00',
          information: 'Christian Liebel',
          location: 'Pool House',
          session: 'talk-day2-14'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T14:15:00',
          information: 'TBD',
          location: 'Aula',
          session: 'tbd-talk-3'
        },
        // Slot 15 - 14:45-15:15
        {
          title: 'Talk',
          datetime: '2025-11-07T14:45:00',
          information: 'Michael Hladky',
          location: 'Pool House',
          session: 'talk-day2-15'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T14:45:00',
          information: 'Nicolas Frizzarin',
          location: 'Aula',
          session: 'talk-day2-17'
        },
        // Coffee Break - 15:15-16:00
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-07T15:15:00',
          information: 'Networking opportunity',
          location: 'Both Stages',
          session: null
        },
        // Slot 16 - 16:30-17:00
        // Slot 17 - 16:30-17:00
        {
          title: 'Talk',
          datetime: '2025-11-07T16:30:00',
          information: 'Manfred Steyer',
          location: 'Pool House',
          session: 'talk-day2-18'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T16:30:00',
          information: 'Live Stream of Pool House Stage 📺🍿',
          location: 'Aula',
          session: null
        },
        // Closing - 17:00
        {
          title: 'Closing & Farewell',
          datetime: '2025-11-07T17:00:00',
          information: 'Orga Team / MC',
          location: 'Both Stages',
          session: null
        }
      ]
    }
  ]);

  /**
   * Returns the signal containing the conference schedule
   */
  getSchedule() {
    return this.schedule;
  }

  /**
   * Returns a schedule day by date
   */
  getScheduleByDay(date: string): ScheduleDay | undefined {
    return this.schedule().find(day => day.datetime === date);
  }
}
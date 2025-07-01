import { Injectable, signal } from '@angular/core';
import { ScheduleDay } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private readonly schedule = signal<ScheduleDay[]>([
    {
      title: 'Thursday',
      datetime: '2025-11-06',
      entries: [
        {
          title: 'Registration & Light Refreshments',
          datetime: '2025-11-06T08:30:00',
          information: 'Registration with coffee and small snacks',
          location: 'GLS Campus Berlin',
          session: null
        },
        {
          title: 'Opening & Welcome',
          datetime: '2025-11-06T09:30:00',
          information: 'Orga Team / MC',
          location: 'Main Stage',
          session: null
        },
        {
          title: 'Keynote',
          datetime: '2025-11-06T10:00:00',
          information: 'Mark Thompson (Angular Team)',
          location: 'Main Stage',
          session: 'keynote-day1'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T10:30:00',
          information: 'Rainer Hahnekamp',
          location: 'Main Stage',
          session: 'talk-day1-2'
        },
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-06T11:00:00',
          information: 'Networking opportunity',
          location: 'Sponsoring Hall & Catering Area',
          session: null
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T11:45:00',
          information: 'Robin Götz',
          location: 'Main Stage',
          session: 'talk-day1-3'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T12:15:00',
          information: 'Marko Stanimirović',
          location: 'Main Stage',
          session: 'talk-day1-4'
        },
        {
          title: 'Lunch Break 🍽️',
          datetime: '2025-11-06T12:45:00',
          information: 'Lunch',
          location: 'Sponsoring Hall & Catering Area',
          session: null
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:15:00',
          information: 'Manfred Steyer',
          location: 'Main Stage',
          session: 'talk-day1-5'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:45:00',
          information: '',
          location: 'Main Stage',
          session: 'talk-day1-6',
          speakers: ['Younes Jaaidi', 'Rainer Hahnekamp']
        },
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-06T15:15:00',
          information: 'Networking opportunity',
          location: 'Sponsoring Hall & Catering Area',
          session: null
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T16:00:00',
          information: 'Martina Kraus',
          location: 'Main Stage',
          session: 'talk-day1-7'
        },
        {
          title: 'Build on top of signals',
          datetime: '2025-11-06T16:30:00',
          information: 'Enea Jahollari',
          location: 'Main Stage',
          session: 'talk-day1-8'
        },
        {
          title: 'Closing Day 1',
          datetime: '2025-11-06T17:30:00',
          information: 'Wrap-up of the first day',
          location: 'Main Stage',
          session: null
        },
        {
          title: 'Community Event/Party 🎉',
          datetime: '2025-11-06T18:00:00',
          information: 'Social event with drinks and food',
          location: 'GLS Campus Berlin',
          session: 'party'
        }
      ]
    },
    {
      title: 'Friday',
      datetime: '2025-11-07',
      entries: [
        {
          title: 'Registration & Light Refreshments',
          datetime: '2025-11-07T09:00:00',
          information: 'Coffee and small snacks available',
          location: 'GLS Campus Berlin',
          session: null
        },
        {
          title: 'Intro Day 2',
          datetime: '2025-11-07T09:30:00',
          information: 'Orga Team / MC',
          location: 'Main Stage',
          session: null
        },
        {
          title: 'Keynote',
          datetime: '2025-11-07T10:00:00',
          information: 'Jens Kühlers (Angular Team)',
          location: 'Main Stage',
          session: 'keynote-day2'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T10:30:00',
          information: 'Kasia Biernat-Kluba',
          location: 'Main Stage',
          session: 'talk-day2-16'
        },
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-07T11:00:00',
          information: 'Networking opportunity',
          location: 'Sponsoring Hall & Catering Area',
          session: null
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T11:45:00',
          information: 'Eliran Eliassy',
          location: 'Main Stage',
          session: 'talk-day2-12'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T12:15:00',
          information: 'Brygida Fiejdasz',
          location: 'Main Stage',
          session: 'talk-day2-13'
        },
        {
          title: 'Lunch Break & Group Photo 📸',
          datetime: '2025-11-07T12:45:00',
          information: 'Lunch and conference photo',
          location: 'Sponsoring Hall & Catering Area',
          session: null
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T14:15:00',
          information: 'Christian Liebel',
          location: 'Main Stage',
          session: 'talk-day2-14'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T14:45:00',
          information: 'Michael Hladky',
          location: 'Main Stage',
          session: 'talk-day2-15'
        },
        {
          title: 'Coffee Break ☕️',
          datetime: '2025-11-07T15:15:00',
          information: 'Networking opportunity',
          location: 'Sponsoring Hall & Catering Area',
          session: null
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T16:30:00',
          information: 'Maria Korneeva',
          location: 'Main Stage',
          session: 'talk-day2-11'
        },
        {
          title: 'Talk',
          datetime: '2025-11-07T16:30:00',
          information: 'Nicolas Frizzarin',
          location: 'Main Stage',
          session: 'talk-day2-17'
        },
        {
          title: 'Closing & Farewell',
          datetime: '2025-11-07T17:00:00',
          information: 'Orga Team / MC',
          location: 'Main Stage',
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

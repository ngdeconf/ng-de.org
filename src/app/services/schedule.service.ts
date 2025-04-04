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
          title: 'Open Doors',
          datetime: '2025-11-06T09:00:00',
          information: 'Registration',
          location: 'GLS Campus Berlin',
          session: null
        },
        {
          title: 'Warm Welcome',
          datetime: '2025-11-06T09:40:00',
          information: 'Welcome',
          location: 'Main Stage',
          session: null
        },
        {
          title: 'Keynote Talk',
          datetime: '2025-11-06T10:00:00',
          information: 'Talk 1',
          location: 'Main Stage',
          session: 'talk-1'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T10:30:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-2'
        },
        {
          title: 'Break ☕️🍎',
          datetime: '2025-11-06T11:00:00',
          information: '☕️🍎',
          location: 'Sponsoring Hall & Catering Area',
          session: 'talk-3'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T11:45:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-2'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T12:15:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-3'
        },
        {
          title: 'Lunch 🥙🥤',
          datetime: '2025-11-06T12:45:00',
          information: 'Lunch',
          location: 'Sponsoring Hall & Catering Area',
          session: 'talk-3'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:15:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-5'
        },
        {
          title: 'Talk',
          datetime: '2025-11-06T14:45:00',
          information: 'Talk',
          location: 'Main Stage',
          session: 'talk-6'
        },
        {
          title: 'Break ☕️🍰',
          datetime: '2025-11-06T15:45:00',
          information: '',
          location: 'Sponsoring Hall & Catering Area',
          session: 'break'
        },
        {
          title: 'Talk 7',
          datetime: '2025-11-06T16:30:00',
          information: 'Talk 7',
          location: 'Main Stage',
          session: 'talk-7'
        },
        {
          title: 'Panel Discussion',
          datetime: '2025-11-06T17:00:00',
          information: 'Talk 8',
          location: 'Main Stage',
          session: 'talk-8'
        },
        {
          title: 'Closing Day 1',
          datetime: '2025-11-06T17:30:00',
          information: 'Talk 12',
          location: 'Main Stage',
          session: 'closing-day-1'
        },
        {
          title: 'Get together',
          datetime: '2025-11-06T18:00:00',
          information: '',
          location: 'GLS Campus',
          session: 'get-together'
        }
      ]
    },
    {
      title: 'Friday',
      datetime: '2025-11-07',
      entries: [
        {
          title: 'Talk 13',
          datetime: '2025-11-07T09:00:00',
          information: 'Talk 13',
          location: 'GLS Campus Berlin',
          session: 'talk-13'
        },
        {
          title: 'Talk 14',
          datetime: '2025-11-07T10:00:00',
          information: 'Talk 14',
          location: 'GLS Campus Berlin',
          session: 'talk-14'
        },
        {
          title: 'Talk 15',
          datetime: '2025-11-07T11:00:00',
          information: 'Talk 15',
          location: 'GLS Campus Berlin',
          session: 'talk-15'
        },
        {
          title: 'Talk 16',
          datetime: '2025-11-07T12:00:00',
          information: 'Talk 16',
          location: 'GLS Campus Berlin',
          session: 'talk-16'
        },
        {
          title: 'Talk 17',
          datetime: '2025-11-07T13:00:00',
          information: 'Talk 17',
          location: 'GLS Campus Berlin',
          session: 'talk-17'
        },
        {
          title: 'Talk 18',
          datetime: '2025-11-07T14:00:00',
          information: 'Talk 18',
          location: 'GLS Campus Berlin',
          session: 'talk-18'
        },
        {
          title: 'Talk 19',
          datetime: '2025-11-07T15:00:00',
          information: 'Talk 19',
          location: 'GLS Campus Berlin',
          session: 'talk-19'
        },
        {
          title: 'Talk 20',
          datetime: '2025-11-07T16:00:00',
          information: 'Talk 20',
          location: 'GLS Campus Berlin',
          session: 'talk-20'
        },
        {
          title: 'Talk 21',
          datetime: '2025-11-07T17:00:00',
          information: 'Talk 21',
          location: 'GLS Campus Berlin',
          session: 'talk-21'
        },
        {
          title: 'Talk 22',
          datetime: '2025-11-07T18:00:00',
          information: 'Talk 22',
          location: 'GLS Campus Berlin',
          session: 'talk-22'
        },
        {
          title: 'Talk 23',
          datetime: '2025-11-07T19:00:00',
          information: 'Talk 23',
          location: 'GLS Campus Berlin',
          session: 'talk-23'
        },
        {
          title: 'Talk 24',
          datetime: '2025-11-07T20:00:00',
          information: 'Talk 24',
          location: 'GLS Campus Berlin',
          session: 'talk-24'
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

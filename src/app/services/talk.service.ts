import { Injectable, signal } from '@angular/core';
import { Talk } from '../models/models';

@Injectable({ providedIn: 'root' })
export class TalkService {
  private readonly talks = signal<Talk[]>([
    // Day 1 - Thursday
    {
      id: 'keynote-day1',
      title: 'Keynote',
      abstract: 'Opening keynote by the Angular Team',
      speakerId: 'angular-team',
      time: '10:00 - 10:30',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-2',
      title: 'Modern Angular Development',
      abstract: 'Exploring modern Angular development patterns and practices',
      speakerId: 'rainer-hahnekamp',
      time: '10:30 - 11:00',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-3',
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '11:45 - 12:15',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-4',
      title: 'Angular and Modern Web Standards',
      abstract: 'How Angular embraces and enhances modern web standards',
      speakerId: 'christian-liebel',
      time: '12:15 - 12:45',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-5',
      title: "The Missing Link in Angular's Signal Story",
      abstract: "Signals will shape Angular's future in terms of reactivity and change detection. The new Resource API, along with the httpResource, adds an essential piece to this story by providing an official solution for asynchronously loading data within a Signal-based dataflow.",
      speakerId: 'manfred-steyer',
      time: '14:15 - 14:45',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-6',
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '14:45 - 15:15',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-7',
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '16:30 - 17:00',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'panel-day1',
      title: 'Panel Discussion',
      abstract: 'Conference speakers discuss current Angular topics and answer audience questions',
      speakerId: 'panel',
      time: '17:00 - 17:45',
      day: 'day1',
      room: 'Main Stage'
    },

    // Day 2 - Friday
    {
      id: 'keynote-day2',
      title: 'Keynote',
      abstract: 'Day 2 keynote presentation on Angular roadmap and vision',
      speakerId: 'jens-kuehlers',
      time: '10:00 - 10:30',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-11',
      title: 'Advanced Angular Patterns',
      abstract: 'Deep dive into advanced Angular patterns and techniques',
      speakerId: 'maria-korneeva',
      time: '10:30 - 11:00',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-12',
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '11:45 - 12:15',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-13',
      title: 'Angular Security Best Practices',
      abstract: 'Implementing security best practices in Angular applications',
      speakerId: 'martina-kraus',
      time: '12:15 - 12:45',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-14',
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '14:15 - 14:45',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-15',
      title: 'RxJS and Performance Optimization in Angular',
      abstract: 'Leveraging RxJS for better performance in Angular applications',
      speakerId: 'michael-hladky',
      time: '14:45 - 15:15',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-16',
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '16:30 - 17:00',
      day: 'day2',
      room: 'Main Stage'
    },
    {
      id: 'talk-day2-17',
      title: 'Signal Primitives and Performance',
      abstract: 'Building high-performance Angular applications with Signals and other performance techniques',
      speakerId: 'enea-jahollari',
      time: '17:00 - 17:30',
      day: 'day2',
      room: 'Main Stage'
    }
  ]);

  /**
   * Returns the signal containing all talks
   */
  getTalks() {
    return this.talks;
  }

  /**
   * Returns a talk by ID or undefined if not found
   */
  getTalkById(id: string): Talk | undefined {
    return this.talks().find(talk => talk.id === id);
  }

  /**
   * Returns a talk by session ID from the schedule
   */
  getTalkBySessionId(sessionId: string): Talk | undefined {
    return this.talks().find(talk => talk.id === sessionId);
  }

  /**
   * Returns all talks for a specific day
   */
  getTalksByDay(day: 'day1' | 'day2'): Talk[] {
    return this.talks().filter(talk => talk.day === day);
  }

  /**
   * Returns all talks for a specific speaker
   */
  getTalksBySpeakerId(speakerId: string): Talk[] {
    return this.talks().filter(talk => talk.speakerId === speakerId);
  }
}

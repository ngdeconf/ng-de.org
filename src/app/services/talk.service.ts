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
      title: "The Missing Link in Angular's Signal Story: Resource API and httpResource",
      abstract: "Signals will shape Angular's future in terms of reactivity and change detection. The new Resource API, along with the httpResource, adds an essential piece to this story by providing an official solution for asynchronously loading data within a Signal-based dataflow.\n\nIn this session, we explore all the details you need to work effectively with this powerful API. Topics include managing different states, handling errors, streaming data, preventing race conditions, and canceling unnecessary requests. We also discuss how it interacts with RxJS through rxResource and demonstrate how to update loaded values.\n\nBy the end, you'll have a comprehensive understanding of the possibilities offered by this groundbreaking new API.",
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
      title: 'Mythbusting the Roadmap. What really drives Angular\'s feature prioritization',
      abstract: 'Angular releases a new major version every six months. But you might wonder: how does the team determine which features to work on and what gets left out? How does the team make sure there\'s a steady stream of features without overwhelming users? This talk offers a look behind the scenes at how the Angular team operates. Jens will explain how the team gathers and analyzes data from different sources to make decisions, how we prioritize features and the trade-offs involved to build the most intuitive, performant and scalable framework for building web apps.',
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
      title: 'Securing Angular Applications in Practice',
      abstract: 'Learn how to build secure Angular applications by mastering real-world attack scenarios and modern defense strategies. This workshop covers core browser security concepts, Cross-Site Scripting (XSS) prevention, Content Security Policy (CSP), and secure token handling. You\'ll explore advanced topics like OAuth 2.0/2.1 security patterns and Backend-for-Frontend (BFF) architectures. With practical examples and hands-on guidance, you\'ll gain the skills to identify vulnerabilities and implement effective protection mechanisms in your frontend code. Perfect for developers and architects who want to take their web application security to the next level.',
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

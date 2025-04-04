import { Injectable, signal } from '@angular/core';
import { Talk } from '../models/models';

@Injectable({ providedIn: 'root' })
export class TalkService {
  private readonly talks = signal<Talk[]>([
    {
      id: '1',
      title:
        "The Missing Link in Angular's Signal Story: Resource API and httpResource",
      abstract:
        "Signals will shape Angular's future in terms of reactivity and change detection. The new Resource API, along with the httpResource, adds an essential piece to this story by providing an official solution for asynchronously loading data within a Signal-based dataflow.\n\nIn this session, we explore all the details you need to work effectively with this powerful API. Topics include managing different states, handling errors, streaming data, preventing race conditions, and canceling unnecessary requests. We also discuss how it interacts with RxJS through rxResource and demonstrate how to update loaded values.\n\nBy the end, you'll have a comprehensive understanding of the possibilities offered by this groundbreaking new API.",
      speakerId: 'manfred-steyer',
      time: '10:00 - 11:00',
      day: 'day1',
      room: 'Main Hall'
    },
    {
      id: '2',
      title: 'Signals Deep Dive',
      abstract:
        'Understanding Angular Signals and their impact on reactive programming',
      speakerId: '5',
      time: '11:30 - 12:30',
      day: 'day1',
      room: 'Main Hall'
    },
    {
      id: '3',
      title: 'Building with the Newest Angular Features',
      abstract: 'Practical examples using the latest Angular features',
      speakerId: '3',
      time: '14:00 - 15:00',
      day: 'day1',
      room: 'Room A'
    },
    {
      id: '4',
      title: 'Performance Optimization in Angular',
      abstract: 'Techniques to make your Angular apps blazing fast',
      speakerId: '1',
      time: '15:30 - 16:30',
      day: 'day1',
      room: 'Room B'
    },
    {
      id: '5',
      title: 'Angular and the Modern Web Platform',
      abstract: 'How Angular leverages modern web platform features',
      speakerId: '2',
      time: '10:00 - 11:00',
      day: 'day2',
      room: 'Main Hall'
    },
    {
      id: '6',
      title: 'Component Architecture Best Practices',
      abstract: 'Designing maintainable component architectures',
      speakerId: '4',
      time: '11:30 - 12:30',
      day: 'day2',
      room: 'Room A'
    },
    {
      id: '7',
      title: 'Angular SSR and Hydration',
      abstract: 'Server-side rendering and hydration techniques in Angular',
      speakerId: '5',
      time: '14:00 - 15:00',
      day: 'day2',
      room: 'Main Hall'
    },
    {
      id: '8',
      title: 'Building Accessible Angular Applications',
      abstract: 'Best practices for creating accessible Angular applications',
      speakerId: '6',
      time: '15:30 - 16:30',
      day: 'day2',
      room: 'Room B'
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
   * Returns all talks for a specific speaker
   */
  getTalksBySpeakerId(speakerId: string): Talk[] {
    return this.talks().filter(talk => talk.speakerId === speakerId);
  }
}

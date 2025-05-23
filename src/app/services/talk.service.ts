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
      title: 'TBD',
      abstract: 'Talk details to be determined',
      speakerId: 'rainer-hahnekamp',
      time: '10:30 - 11:00',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-3',
      title: 'Mastering NgRx SignalStore: From Key Principles to Advanced Patterns',
      abstract: 'Enhance your Angular and NgRx expertise in an in-depth workshop led by core members of the NgRx team: Marko Stanimirović and Alex Okrushko. This workshop provides hands-on guidance for implementing NgRx SignalStore to solve real-world challenges in modern Angular applications.\n\n' +
        'NgRx SignalStore leverages the power of Angular Signals and a structured state management approach to streamline reactive development workflows. Its modular design, simplicity, and declarative nature form the foundation for maintainable and scalable implementations.\n\n' +
        'What to Expect:\n\n' +
        'This workshop guides you through a carefully structured curriculum where each topic builds upon the previous one, providing a progressive experience from foundational concepts to advanced techniques:\n\n' +
        '- Exploring Angular Signals APIs to establish the technical foundation for what follows\n' +
        '- Mastering SignalStore core principles and main building blocks\n' +
        '- Integrating RxJS with SignalStore to combine the best of both reactive approaches\n' +
        '- Building custom SignalStore features that consolidate common patterns into reusable abstractions\n' +
        '- Using the Entities plugin to facilitate data collection management\n' +
        '- Applying architectural patterns for managing local and global state in complex applications\n' +
        '- Utilizing the new Events plugin for orchestrating complex workflows with elegance\n\n' +
        'Each section includes practical implementation through exercises and code examples, allowing you to apply concepts directly to real-world development challenges.',
      speakerId: 'marko-stanimirovic',
      time: '11:45 - 12:15',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-4',
      title: 'TBD',
      abstract: 'Talk details to be determined',
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
      title: 'TBD',
      abstract: 'Talk details to be determined',
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
      title: 'Angular Design Systems Accelerated by AI & MCP',
      abstract: 'Join us for an in-depth exploration of how we transformed an enterprise Angular Design System by integrating advanced AI techniques with streamlined MCP processes. In this session, we\'ll discuss the challenges of legacy systems, detail our innovative refactoring approach that cut development time in half, and share actionable insights for achieving scalability and improved maintainability. Whether you\'re a developer, architect, or business leader, you\'ll learn how AI-driven automation and strategic MCP integration can power your digital transformation and accelerate agile innovation across your enterprise.',
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
      title: 'TBD',
      abstract: 'Talk details to be determined',
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

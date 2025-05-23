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
      title: 'Community Talk',
      abstract: 'Selected from Call for Papers',
      speakerId: 'cfp',
      time: '11:45 - 12:15',
      day: 'day1',
      room: 'Main Stage'
    },
    {
      id: 'talk-day1-4',
      title: 'What\'s New in Web AI?',
      abstract: `Generative AI is becoming a key part of modern software architecture, and its presence in web apps is growing. As demand increases, vendors and specification authors are working to make AI capabilities more accessible and integrated into the web platform. In this session, Christian Liebel—W3C TAG Associate and member of the WebML Working Group—will share what's cooking behind the scenes in Web AI. You'll get an update on the latest advancements in the WebNN API, Chromium's Built-in AI APIs, emerging developer tools, and the real-world challenges that browser vendors and standards authors are navigating to bring AI to the web.`,
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
      title: 'Component Testing That Feels Like Playwright — Because It Is',
      abstract: `Tired of blindly debugging raw HTML output? Flaky end-to-end tests and their slow feedback loop? Stitching together five different tools to check if a button is disabled?\n\nYou're not alone.\n\nEveryone loves how smooth Playwright makes end-to-end testing feel — reliable, visual, easy to debug. But relying solely on e2e tests is rarely a sustainable strategy.\n\nWhat if we could zoom in to test just one component — and still enjoy the same Playwright magic?\n\nIn this talk, Younes & Rainer introduce a new approach to Angular component testing: same great DX, smaller scope, faster feedback.\n\nThey'll share why they got there, and how their open-source library brings the full Playwright experience to your components.`,
      speakerId: 'younes-jaaidi',
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
      title: 'Permit A38 - or how to build accessible forms in Angular',
      abstract: `In The Twelve Tasks of Asterix, the heroes are driven to madness trying to get Permit A38. That's what inaccessible forms feel like to many users — confusing, frustrating, and impossible to complete.\n\nThis talk dives into the practical side of building accessible forms in Angular. We'll cover:\n- Proper use of labels, fieldsets, and input types - from easy to tricky cases\n- Accessible error handling and validation\n- Distinction between hard accessibility requirements and UX recommendations\n\nAttendees will leave with clear, actionable steps to create Angular forms that are usable for screen readers, keyboard users, and everyone else. No bureaucracy required.`,
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
      title: 'Secure Angular Apps: Defend Against Attacks with Built-In Framework Power',
      abstract: `Angular keeps evolving with cutting-edge features like Signals and Hydration—but did you know it's also quietly strengthening its security capabilities? The framework offers a range of built-in tools to help developers protect their applications against common threats like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

In this practical session, Google Developer Expert Martina Kraus will show you how to identify typical security risks in Angular applications and implement effective defenses. Through concrete, real-world examples, you'll gain the knowledge you need to build secure, robust Angular apps with confidence.`,
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

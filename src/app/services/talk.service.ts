import { Injectable, signal } from '@angular/core';
import { Talk } from '../models/models';

@Injectable({ providedIn: 'root' })
export class TalkService {
  private readonly talks = signal<Talk[]>([
    // Day 1 - Thursday
    {
      id: 'keynote-day1',
      title: 'Opening keynote by Mark Thompson from the Angular Team',
      abstract: 'Opening keynote by Mark Thompson from the Angular Team',
      speakerId: 'mark-thompson',
      time: '10:00 - 10:30',
      day: 'day1',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-2',
      title: 'TBD',
      abstract: 'Talk details to be determined',
      speakerId: 'matthieu-riegler',
      time: '10:30 - 11:00',
      day: 'day1',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-3',
      title: 'One UI Library to Rule Them All: How spartan Brings shadcn/ui & Radix to Angular',
      abstract: 'Angular developers often find themselves choosing between heavy, opinionated UI libraries built around someone else\'s design system—or the blank canvas of building everything from scratch. spartan/ui offers a third path: a collection of unstyled, accessible, and composable UI primitives inspired by React\'s shadcn/ui and Radix, rebuilt for modern Angular applications. Instead of installing black-box components, spartan gives you the actual code—meant to be copied, customized, and fully owned. In this talk, we\'ll explore the philosophy behind spartan, how its CLI empowers fast scaffolding of customizable components, and why open code is the future of frontend architecture. Build faster. Style freely. Own every line.',
      speakerId: 'robin-goetz',
      time: '11:45 - 12:15',
      day: 'day1',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-4',
      title: '3 Dimensions of NgRx Signals: Choosing the Best Fit for Your App',
      abstract: 'NgRx Signals is one of the fastest-growing packages in the Angular ecosystem, offering a reactive and flexible approach to state management. In this talk, we\'ll explore three techniques to managing state with NgRx Signals, each adaptable to different application needs. You\'ll learn how to leverage APIs like SignalState, SignalStore, and SignalStore Events Plugin, as well as how to select the approach that best aligns with your project\'s requirements and your team\'s expertise.',
      speakerId: 'marko-stanimirovic',
      time: '12:15 - 12:45',
      day: 'day1',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-5',
      title: 'Code That Writes Code: Supercharge Your Nx Workspace with Generators and Executors',
      abstract: 'Nx generators and executors can automate your workflow, eliminate boilerplate, and bring consistency to your monorepo. In this talk, you\'ll learn how to create custom generators that scaffold code, build powerful executors for running tasks, and integrate both seamlessly into your Nx workspace.',
      speakerId: 'kasia-biernat-kluba',
      time: '14:15 - 14:45',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-6',
      title: 'Zero Bundle Size?',
      abstract: 'What if your Angular app shipped nothing by default? With the introduction of the @defer block in Angular, the framework is entering a new era of ultra-granular code loading. In this session, we\'ll deep-dive into the mechanics and real-world impact of deferrable views—how Angular\'s control flow syntax enables not just lazy loading, but reactive, declarative code isolation. We\'ll go beyond the basic @defer syntax and explore strategies for architecting micro-frontends and feature islands, using build-time hints to reduce unused code paths, profiling and restructuring apps for minimal critical paths, and how defer blocks complement signals and zoneless change detection. Expect performance audits and advanced bundling techniques. If you\'re building large-scale Angular apps and want to minimize JS payload without compromising UX, this talk will give you concrete tools to reshape your app around runtime execution—not compile-time coupling.',
      speakerId: 'eliran-eliassy',
      time: '14:45 - 15:15',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-7',
      title: 'Secure Angular Apps: Defend Against Attacks with Built-In Framework Power',
      abstract: `Angular keeps evolving with cutting-edge features like Signals and Hydration—but did you know it's also quietly strengthening its security capabilities? The framework offers a range of built-in tools to help developers protect their applications against common threats like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).

In this practical session, Google Developer Expert Martina Kraus will show you how to identify typical security risks in Angular applications and implement effective defenses. Through concrete, real-world examples, you'll gain the knowledge you need to build secure, robust Angular apps with confidence.`,
      speakerId: 'martina-kraus',
      time: '16:00 - 16:30',
      day: 'day1',
      room: 'Pool House'
    },
    {
      id: 'talk-day1-8',
      title: 'Build on top of signals',
      abstract: 'Angular Signals are a game-changer. But we can go even further. This talk unveils how to build powerful utility functions, leveraging inject and DestroyRef to supercharge your Signals. Learn how to create reusable reactive patterns, simplify your code, and embrace a new "synchronization" mindset that optimizes performance. Prepare to level up your Angular development with the building blocks of the future!',
      speakerId: 'enea-jahollari',
      time: '16:30 - 17:00',
      day: 'day1',
      room: 'Pool House'
    },

    // Day 2 - Friday
    {
      id: 'keynote-day2',
      title: 'Mythbusting the Roadmap. What really drives Angular\'s feature prioritization',
      abstract: 'Angular releases a new major version every six months. But you might wonder: how does the team determine which features to work on and what gets left out? How does the team make sure there\'s a steady stream of features without overwhelming users? This talk offers a look behind the scenes at how the Angular team operates. Jens will explain how the team gathers and analyzes data from different sources to make decisions, how we prioritize features and the trade-offs involved to build the most intuitive, performant and scalable framework for building web apps.',
      speakerId: 'jens-kuehlers',
      time: '10:00 - 10:30',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day2-16',
      title: 'Component Testing That Feels Like Playwright — Because It Is',
      abstract: `Tired of blindly debugging raw HTML output? Flaky end-to-end tests and their slow feedback loop? Stitching together five different tools to check if a button is disabled?\n\nYou're not alone.\n\nEveryone loves how smooth Playwright makes end-to-end testing feel — reliable, visual, easy to debug. But relying solely on e2e tests is rarely a sustainable strategy.\n\nWhat if we could zoom in to test just one component — and still enjoy the same Playwright magic?\n\nIn this talk, Younes & Rainer introduce a new approach to Angular component testing: same great DX, smaller scope, faster feedback.\n\nThey'll share why they got there, and how their open-source library brings the full Playwright experience to your components.`,
      speakerId: 'younes-jaaidi',
      time: '10:30 - 11:00',
      day: 'day1',
      room: 'Pool House',
      speakers: ['rainer-hahnekamp', 'younes-jaaidi']
    },
    {
      id: 'talk-day2-12',
      title: 'Permit A38 - or how to build accessible forms in Angular',
      abstract: `In The Twelve Tasks of Asterix, the heroes are driven to madness trying to get Permit A38. That's what inaccessible forms feel like to many users — confusing, frustrating, and impossible to complete.\n\nThis talk dives into the practical side of building accessible forms in Angular. We'll cover:\n- Proper use of labels, fieldsets, and input types - from easy to tricky cases\n- Accessible error handling and validation\n- Distinction between hard accessibility requirements and UX recommendations\n\nAttendees will leave with clear, actionable steps to create Angular forms that are usable for screen readers, keyboard users, and everyone else. No bureaucracy required.`,
      speakerId: 'maria-korneeva',
      time: '11:45 - 12:15',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day2-13',
      title: 'No Zone, No Problem - Building Angular Apps without Zone.js',
      abstract: 'Angular no longer requires Zone.js, but dropping it isn\'t just a switch - it\'s a mindset shift. This session covers what really happens when you remove Zone.js, how to handle reactivity using Signals and manual strategies, and what this means for app architecture, testing, and performance. Discover how zoneless Angular changes the way we write code and reason about UI updates.',
      speakerId: 'brygida-fiejdasz',
      time: '12:15 - 12:45',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day2-14',
      title: 'What\'s New in Web AI?',
      abstract: `Generative AI is becoming a key part of modern software architecture, and its presence in web apps is growing. As demand increases, vendors and specification authors are working to make AI capabilities more accessible and integrated into the web platform. In this session, Christian Liebel—W3C TAG Associate and member of the WebML Working Group—will share what's cooking behind the scenes in Web AI. You'll get an update on the latest advancements in the WebNN API, Chromium's Built-in AI APIs, emerging developer tools, and the real-world challenges that browser vendors and standards authors are navigating to bring AI to the web.`,
      speakerId: 'christian-liebel',
      time: '14:15 - 14:45',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day2-15',
      title: 'Angular Design Systems Accelerated by AI & MCP',
      abstract: 'Join us for an in-depth exploration of how we transformed an enterprise Angular Design System by integrating advanced AI techniques with streamlined MCP processes. In this session, we\'ll discuss the challenges of legacy systems, detail our innovative refactoring approach that cut development time in half, and share actionable insights for achieving scalability and improved maintainability. Whether you\'re a developer, architect, or business leader, you\'ll learn how AI-driven automation and strategic MCP integration can power your digital transformation and accelerate agile innovation across your enterprise.',
      speakerId: 'michael-hladky',
      time: '14:45 - 15:15',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day2-11',
      title: 'Permit A38 - or how to build accessible forms in Angular',
      abstract: 'Building accessible forms is crucial for creating inclusive web applications, but it can often feel like navigating bureaucratic red tape – much like the infamous "Permit A38" from Asterix. In this talk, we will explore practical strategies for building accessible forms in Angular that comply with WCAG guidelines and provide an excellent user experience for all users. Learn how to implement proper ARIA labels, manage focus states, handle validation messages accessibly, and use Angular\'s reactive forms to create forms that work seamlessly with screen readers and other assistive technologies. We\'ll cover common accessibility pitfalls and demonstrate how to test your forms for accessibility compliance.',
      speakerId: 'maria-korneeva',
      time: '11:45 - 12:15',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-day2-17',
      title: 'Improve your code quality with the composition Pattern',
      abstract: 'Are you fully leveraging Angular\'s potential beyond Signals and standalone components? Discover the Composition Pattern, a key development since v14 that allows building robust features through simple composition of functions and directives. Stay ahead of the curve, learn its implementation, and harness its advantages – including upcoming v20 features – for more powerful applications. Since Angular 14, each version has brought its share of new features. The most obvious are, of course, Signals, the new control flow, and also standalone components. However, since version 14, the Angular team has developed much more than these new functionalities; they have unlocked a new development pattern: the Composition Pattern. Come and discover what this pattern can offer you in your daily applications, how to implement it, and how to extract the best advantages from it.',
      speakerId: 'nicolas-frizzarin',
      time: '17:00 - 17:30',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-eon-microfrontends',
      title: 'MicroFrontends - How to slice the elephant',
      abstract: 'MicroFrontends are hot topic in the big enterprise world. The requirements and challenges of large projects sometimes mean that a split of the application is unavoidable. This talk will look at the reasons and tips for making this decision. I will also highlight risks, pitfalls and decisions to be made and show concrete examples of solutions based on real large projects (> 100 people) so that your large project can also be migrated to a MicroFrontend without pain.',
      speakerId: 'tobias-brenner',
      time: '14:15 - 14:45',
      day: 'day1',
      room: 'Aula'
    },
    {
      id: 'talk-cologne-intelligence-ai-ux',
      title: 'Angular and AI-Driven UX: AI-assisted Interactions',
      abstract: 'In this talk, we explore how Angular can be combined with modern AI services to create smart and accessible user experiences. Using practical examples – from AI-generated text inputs to voice control and image analysis – we demonstrate how form fields can be intelligently populated and user journeys simplified. This provides a glimpse into how Angular apps can take the next step toward modern, multimodal UX through AI-assisted interactions.',
      speakerId: 'mario-trzensky',
      time: '11:45 - 12:15',
      day: 'day1',
      room: 'Aula'
    },
    {
      id: 'talk-day2-18',
      title: "The Missing Link in Angular's Signal Story: Resource API and httpResource",
      abstract: "Signals will shape Angular's future in terms of reactivity and change detection. The new Resource API, along with the httpResource, adds an essential piece to this story by providing an official solution for asynchronously loading data within a Signal-based dataflow.\n\nIn this session, we explore all the details you need to work effectively with this powerful API. Topics include managing different states, handling errors, streaming data, preventing race conditions, and canceling unnecessary requests. We also discuss how it interacts with RxJS through rxResource and demonstrate how to update loaded values.\n\nBy the end, you'll have a comprehensive understanding of the possibilities offered by this groundbreaking new API.",
      speakerId: 'manfred-steyer',
      time: '16:30 - 17:00',
      day: 'day2',
      room: 'Pool House'
    },
    {
      id: 'talk-agentic-angular',
      title: 'AI-Powered Angular Development',
      abstract: 'Modern Angular development is being revolutionized by AI-powered tools and agents. This talk explores how to leverage cutting-edge IDEs like Cursor alongside autonomous AI agents in CI/CD pipelines to build and maintain Angular applications more efficiently. We\'ll demonstrate practical workflows for AI-assisted code generation, automated testing strategies, intelligent code reviews, and maintaining code quality at scale. Learn how to integrate AI agents into your Angular CI pipelines for automated refactoring, dependency updates, and performance optimization. We\'ll cover setting up AI-powered development environments, implementing intelligent build processes, and creating self-maintaining Angular codebases that evolve with your team\'s needs. Transform your Angular development workflow with practical AI tools that enhance productivity while maintaining code quality and architectural integrity.',
      speakerId: 'gregor-woiwode',
      time: '12:15 - 12:45',
      day: 'day1',
      room: 'Aula'
    },
    {
      id: 'talk-rapid-prototyping-ai',
      title: 'Rapid Prototyping with AI: From Idea to MVP in Hours',
      abstract: 'What if you could turn a marketing concept into a working application in just a few hours? This talk explores the revolutionary world of AI-powered rapid prototyping tools like Lovable and Bolt that are democratizing app development. Coming from a marketing background, I\'ll demonstrate how non-technical team members can now create functional prototypes to validate product ideas, test market assumptions, and iterate quickly without waiting for development cycles. We\'ll explore practical workflows for transforming user stories into working components, leveraging AI for instant UI generation, and bridging the gap between marketing vision and technical reality. Learn how these tools are reshaping the product development lifecycle and enabling marketing teams to become active participants in the Angular ecosystem.',
      speakerId: 'mussie-haile',
      time: '11:45 - 12:15',
      day: 'day2',
      room: 'Aula'
    },
    {
      id: 'talk-process-automation-ai-agents',
      title: 'Intelligent Process Automation: Building Enterprise Workflows with AI Agents',
      abstract: 'Enterprise workflows are becoming increasingly complex, but AI agents are revolutionizing how we automate business processes. This talk explores practical strategies for implementing intelligent process automation using autonomous AI agents that can make decisions, handle exceptions, and adapt to changing requirements. We\'ll demonstrate multi-agent orchestration patterns, from sequential content analysis to parallel decision-making workflows. Learn how to design robust agent pipelines that integrate with existing enterprise systems, implement intelligent error handling, and build self-monitoring automation systems. Through real-world examples, we\'ll show how AI agents can transform everything from document processing and approval workflows to customer service automation and data validation pipelines. Discover how to bridge the gap between business requirements and technical implementation while maintaining security, compliance, and scalability in your automated processes.',
      speakerId: 'robin-boehm',
      time: '16:00 - 16:30',
      day: 'day1',
      room: 'Aula'
    },
    {
      id: 'panel-angular-ai-forward',
      title: 'Angular AI-Forward: supercharge your development with AI',
      abstract: 'Join our expert panel as we explore how artificial intelligence is transforming Angular development. This interactive discussion brings together industry leaders to share their perspectives on AI-powered development tools, intelligent code generation, and the future of Angular in an AI-driven world. We\'ll discuss practical strategies for integrating AI into your Angular workflow, from IDE assistance to automated testing and deployment. The panel will address real-world challenges, share success stories, and provide insights into emerging AI technologies that are reshaping how we build Angular applications. This is your chance to hear diverse viewpoints on the intersection of AI and Angular development, and participate in the conversation about where our industry is heading.',
      speakerId: 'robin-boehm',
      time: '14:45 - 15:15',
      day: 'day1',
      room: 'Aula'
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

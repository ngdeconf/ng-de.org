import { Injectable, signal } from '@angular/core';
import { Workshop } from '../models/models';

@Injectable({ providedIn: 'root' })
export class WorkshopService {
  private readonly workshops = signal<Workshop[]>([
    {
      id: '1',
      title:
        'Modern Angular Architectures - 2025 Edition: Nx, Micro Frontends and Signal Store',
      teaser:
        'Master cutting-edge architecture patterns to build maintainable enterprise Angular applications that stand the test of time.',
      benefits: [
        'Build scalable architectures with modern Angular patterns',
        'Master Signal Store for efficient state management',
        'Implement Micro Frontends for modular applications'
      ],
      abstract:
        "Enterprise applications need to be maintainable in the long term. This workshop shows you how to achieve this goal using modern Angular.\n\nTo accomplish this, we combine cutting-edge features like Signals, the Signal Store, and Module Federation with established concepts like Strategic Design (DDD), monorepos, vertical architectures, and Micro Frontends. We use Nx for incremental builds and demonstrate how to analyze and improve your application's maintainability.\n\nBy the end, you'll be equipped to plan and implement sustainable solutions with modern Angular and evaluate the pros and cons of various approaches for your specific solution.",
      trainerId: 'manfred-steyer',
      duration: '8 hours',
      capacity: 30,
      outline: [
        {
          title: 'Block 1',
          topics: [
            'Vertical architectures and Strategic Design (DDD) as guiding theory',
            'Implementing your Strategic Design with Nx',
            'Enforcing your architecture with Nx & Sheriff',
            'Incremental builds with Nx',
            'Visualizing and analyzing your architecture and planning improvements'
          ]
        },
        {
          title: 'Block 2',
          topics: ['Hands-on lab', 'Micro Frontends with Native Federation']
        },
        {
          title: 'Block 3',
          topics: [
            'Reactive architectures with Signals',
            'Reactive design and thinking',
            'Building blocks: signal, computed, effects',
            'Backgrounds: auto-tracking and glitch-free behavior',
            'New in Angular 19: resource and linkedSignal',
            'RxJS interoperability with Signals'
          ]
        },
        {
          title: 'Block 4',
          topics: [
            'State Management with the new NGRX Signal Store',
            'Eventing (Redux) with the new Signal Store',
            'Custom Features',
            'Hands-on lab'
          ]
        }
      ],
      targetAudience:
        'This workshop is designed for developers with project experience using Angular.',
      trainers: ['manfred-steyer', 'rainer-hahnekamp']
    },
    {
      id: '2',
      title: 'Agent-Driven Coding: Boosting Developer Productivity with Cursor',
      teaser:
        'Supercharge your development workflow and become 10x more productive by harnessing AI models with Cursor IDE.',
      benefits: [
        'Boost coding speed with AI-driven development',
        'Create rule files for automatic code standards',
        'Master prompts for optimal AI code generation'
      ],
      abstract:
        "Discover how to make developers 10x more productive using Agent-Driven Coding techniques with Cursor IDE. This hands-on workshop will explore the power of AI-assisted development and teach you how to leverage different AI models to enhance your workflow.\n\nWe'll cover the setup and integration of Cursor IDE with various AI models, creating and managing rule files for code standards, and developing efficient workflows that combine human creativity with AI capabilities. Learn how to use semantic search, code suggestion engines, and error diagnostics to streamline your development process.\n\nBy the end of this workshop, you'll understand how to effectively incorporate AI assistants into your development workflow, resulting in faster coding, higher quality code, and increased productivity.",
      trainerId: 'robin-boehm',
      duration: '8 hours',
      capacity: 30,
      outline: [
        {
          title: 'Introduction to Agent-Driven Coding',
          topics: [
            'Understanding AI-assisted development',
            'The evolution from auto-complete to agent-driven coding',
            'Overview of Cursor IDE capabilities',
            'Setting up Cursor and configuring AI models'
          ]
        },
        {
          title: 'Working with AI Models in Cursor',
          topics: [
            'Understanding different AI models and their strengths',
            'Configuring model preferences for different tasks',
            'Prompt engineering for optimal results',
            'Hands-on lab: Model selection and interaction'
          ]
        },
        {
          title: 'Rule Files and Code Standards',
          topics: [
            'Creating and managing rule files',
            'Enforcing code standards with AI assistance',
            'Custom rules for project-specific requirements',
            'Using rules for Angular projects'
          ]
        },
        {
          title: 'Workflow Optimization',
          topics: [
            'Building efficient AI-assisted workflows',
            'Integration with existing development processes',
            'Version control and collaboration with AI assistance',
            'Hands-on lab: Developing a feature with agent-driven coding'
          ]
        }
      ],
      targetAudience:
        'This workshop is designed for Angular developers interested in productivity enhancements and AI-assisted coding techniques.',
      trainers: ['robin-boehm', 'gregor-woiwode']
    },
    {
      id: '3',
      title: 'Angular Performance based on Modern Reactivity and SSR',
      teaser: 'Master browser rendering, event loop, and modern Angular features like NgOptimizedImage and SSR for high-performance applications.',
      benefits: [
        'Control the browser render pipeline and optimize application performance',
        'Master JavaScript event loop and network request optimization',
        'Optimize User Experience with defer & Server Side Rendering'
      ],
      abstract: 'Advance your Angular expertise and build high-performance applications. You\'ll gain mastery over the JavaScript event loop to write efficient, non-blocking code. We will rigorously analyze network requests, identifying bottlenecks and implementing optimization strategies. Finally, we\'ll tackle Core Web Vitals and explore modern techniques like NgOptimizedImage, @defer and Server-Side Rendering to deliver blazingly fast user experiences.',
      trainerId: 'michael-hladky',
      duration: '8 hours',
      capacity: 30,
      outline: [
        {
          title: 'Browser Render Pipeline & Event Loop',
          topics: [
            'Understanding the browser render pipeline stages',
            'Tools for inspecting and analyzing bottlenecks',
            'Mastering the JavaScript event loop',
            'Techniques for writing optimal code',
            'Hands-on: Performance analysis and optimization'
          ]
        },
        {
          title: 'Network Optimization & Core Web Vitals',
          topics: [
            'Identifying network performance bottlenecks',
            'Optimizing data consumption strategies',
            'Measuring and improving Core Web Vitals',
            'LCP, CLS, INP, TBT, and TTFB optimization',
            'Hands-on: Network performance optimization'
          ]
        },
        {
          title: 'Modern Angular Performance Features',
          topics: [
            'Mastering NgOptimizedImage directive',
            'Lazy loading and priority hints',
            'Responsive srcset generation',
            'Improving LCP scores',
            'Hands-on: Image optimization'
          ]
        },
        {
          title: 'SSR & Advanced Performance Techniques',
          topics: [
            'In-depth @defer implementation',
            'Server-Side Rendering fundamentals',
            'Event replaying and partial hydration',
            'Bundle size optimization',
            'Hands-on: SSR implementation'
          ]
        }
      ],
      targetAudience: 'This workshop is designed for Angular developers who want to master performance optimization, modern Angular features, and SSR implementation.',
      trainers: ['michael-hladky', 'enea-jahollari']
    },
    {
      id: '4',
      title: 'Hands On: Security in Angular Applications',
      teaser: 'Learn how to build secure Angular applications by mastering real-world attack scenarios and modern defense strategies.',
      benefits: [
        'Master core browser security concepts and XSS prevention',
        'Implement and deploy Content Security Policy (CSP) effectively',
        'Secure token handling and OAuth 2.1 patterns',
        'Learn Angular built-in Security mechanism and how to use them'
      ],
      abstract: 'Learn how to build secure Angular applications by mastering real-world attack scenarios and modern defense strategies. This workshop covers core browser security concepts, Cross-Site Scripting (XSS) prevention, Content Security Policy (CSP), and secure token handling. You\'ll explore advanced topics like OAuth 2.0/2.1 security patterns and Backend-for-Frontend (BFF) architectures. With practical examples and hands-on guidance, you\'ll gain the skills to identify vulnerabilities and implement effective protection mechanisms in your frontend code. Perfect for developers and architects who want to take their web application security to the next level.',
      trainerId: 'martina-kraus',
      duration: '8 hours',
      capacity: 30,
      outline: [
        {
          title: 'Browser Security Fundamentals',
          topics: [
            'Same-origin policy',
            'Cross-Origin Resource Sharing (CORS)',
            'Cookie Attributes and Session Management',
            'Hands-on: Implementing Browser Security Fundamentals'
          ]
        },
        {
          title: 'Cross-Site Scripting (XSS) prevention',
          topics: [
            'Discovering typical Cross-Site Scripting Attacks',
            'Content Security Policy (CSP) implementation',
            'Deploying CSPs in an Angular Application',
            'Angular Trusted Types',
            'Hands-on: CSP configuration and Trusted Types in Angular'
          ]
        },
        {
          title: 'Authentication & Authorization',
          topics: [
            'Typical attacks on Access Tokens like Token theft',
            'Secure token handling and storage',
            'OAuth 2.1 security patterns',
            'Backend-for-Frontend (BFF) architecture',
            'Hands-on: Secure token management'
          ]
        },
        {
          title: 'Further Angular Security Patterns',
          topics: [
            'Built-in Cross-Site Request Forgery Prevention in Angular',
            'Secure communication patterns',
            'Security Context of Angular',
            'Hands-on: Implementing Security best practices in Angular'
          ]
        }
      ],
      targetAudience: 'This workshop is designed for Angular developers and architects who want to enhance their application security knowledge and implement robust security measures.',
      trainers: ['martina-kraus']
    },
    {
      id: '5',
      title: 'Mastering NgRx SignalStore: From Fundamentals to Advanced Techniques',
      teaser: 'Explore the power of NgRx SignalStore in a comprehensive workshop that offers a deep dive into reactive state management powered by Angular Signals.',
      benefits: [
        'Master NgRx SignalStore fundamentals and advanced patterns',
        'Learn to leverage both Signals and RxJS effectively',
        'Build scalable state management with SignalStore plugins'
      ],
      abstract: 'NgRx SignalStore offers a pragmatic approach to state management in Angular applications. With its native support for Signals, you can define stores in a clear and declarative manner. The simplicity and flexibility of SignalStore, coupled with its opinionated and modular design, make it a versatile choice for Angular developers.\n\nIn this workshop, we\'ll walk through the fundamentals of the NgRx SignalStore with in-depth discussions, exercises, and code labs. We\'ll guide you through leveraging the power of both Signals and RxJS, showing you how to use each in the places where they shine, unlocking the full potential of reactivity in Angular. After exploring core concepts, we\'ll delve into using SignalStore plugins and architectural patterns that ensure code cleanliness, scalability, and robustness.',
      trainerId: 'rainer-hahnekamp',
      duration: '8 hours',
      capacity: 30,
      outline: [
        {
          title: 'NgRx SignalStore Fundamentals',
          topics: [
            'Introduction to NgRx SignalStore architecture',
            'Setting up SignalStore in Angular applications',
            'Core concepts: State, Computed, and Methods',
            'Declarative state management patterns',
            'Hands-on: Building your first SignalStore'
          ]
        },
        {
          title: 'Signals and RxJS Integration',
          topics: [
            'Understanding when to use Signals vs RxJS',
            'Reactive patterns with Angular Signals',
            'Integrating RxJS streams with SignalStore',
            'Async operations and side effects',
            'Hands-on: Combining Signals and RxJS effectively'
          ]
        },
        {
          title: 'Advanced SignalStore Patterns',
          topics: [
            'Custom SignalStore features and plugins',
            'State composition and modular design',
            'Performance optimization techniques',
            'Testing strategies for SignalStore',
            'Hands-on: Building custom features'
          ]
        },
        {
          title: 'Architectural Patterns and Best Practices',
          topics: [
            'Scalable state management architectures',
            'Code organization and maintainability',
            'Migration strategies from traditional NgRx',
            'Real-world application patterns',
            'Hands-on: Implementing a complete feature'
          ]
        }
      ],
      targetAudience: 'This workshop is designed for Angular developers with basic understanding of Angular and TypeScript. Experience with NgRx and Signals is beneficial but not required.',
      trainers: ['rainer-hahnekamp', 'marko-stanimirovic']
    }
  ]);

  constructor() {}

  /**
   * Gets all available workshops
   * @returns A signal with all workshops
   */
  getWorkshops() {
    return this.workshops;
  }

  /**
   * Finds a workshop by its ID
   * @param id The ID of the workshop to find
   * @returns The workshop with the specified ID or undefined if not found
   */
  getWorkshopById(id: string): Workshop | undefined {
    return this.workshops().find(workshop => workshop.id === id);
  }

  /**
   * Gets workshops by trainer ID
   * @param trainerId The ID of the trainer
   * @returns An array of workshops for the given trainer
   */
  getWorkshopsByTrainerId(trainerId: string): Workshop[] {
    return this.workshops().filter(
      workshop =>
        workshop.trainerId === trainerId ||
        workshop.trainers?.includes(trainerId)
    );
  }
}

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
      room: 'Aula',
      address: 'Oderberger Str. 57, 10435 Berlin, Germany',
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
      trainers: ['manfred-steyer', 'michael-egger-zikes'],
      soldOut: false
    },
    {
      id: '2',
      title: 'Agentic AI Engineering with Angular',
      teaser:
        'Master the art of building intelligent Angular applications with autonomous AI agents and modern development workflows.',
      benefits: [
        'Build Angular applications with embedded AI agents',
        'Implement AI-driven code generation for Angular patterns',
        'Create intelligent development workflows for Angular projects'
      ],
      abstract:
        "Explore the cutting-edge world of Agentic AI Engineering within Angular applications. This hands-on workshop demonstrates how to build intelligent Angular apps that leverage autonomous AI agents for dynamic functionality, automated code generation, and adaptive user experiences.\n\nWe'll dive deep into implementing AI agents in Angular using modern frameworks, creating self-managing components that adapt to user behavior, and building AI-powered development tools specifically for Angular projects. Learn how to integrate language models into Angular services, implement intelligent form handling, and create reactive AI-driven features using Angular Signals.\n\nBy the end of this workshop, you'll master the principles of agentic AI engineering and be able to build Angular applications that intelligently adapt, learn, and evolve based on user interactions and data patterns.",
      trainerId: 'robin-boehm',
      duration: '8 hours',
      capacity: 30,
      room: 'Room 111',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
      outline: [
        {
          title: 'Foundations of Agentic AI in Angular',
          topics: [
            'Understanding autonomous AI agents vs. traditional AI integration',
            'Angular architecture patterns for AI-driven applications',
            'Setting up the development environment for AI engineering',
            'Introduction to LangChain.js and Angular integration'
          ]
        },
        {
          title: 'Building Intelligent Angular Services',
          topics: [
            'Creating AI-powered Angular services with dependency injection',
            'Implementing reactive AI agents using Angular Signals',
            'Memory management and state persistence for AI agents',
            'Hands-on lab: Building your first intelligent Angular service'
          ]
        },
        {
          title: 'AI-Driven Component Architecture',
          topics: [
            'Self-adapting components that learn from user behavior',
            'Implementing AI-powered form validation and suggestions',
            'Creating intelligent UI components with dynamic behavior',
            "Real-time AI integration with Angular's reactive forms"
          ]
        },
        {
          title: 'Advanced Agentic Patterns & Deployment',
          topics: [
            'Multi-agent orchestration in Angular applications',
            'Performance optimization for AI-heavy Angular apps',
            'Security considerations for AI-enabled applications',
            'Hands-on lab: Building a complete agentic Angular application'
          ]
        }
      ],
      targetAudience:
        'This workshop is designed for experienced Angular developers who want to explore cutting-edge AI integration patterns and build intelligent, adaptive applications using autonomous AI agents.',
      trainers: ['robin-boehm', 'gregor-woiwode'],
      soldOut: false
    },
    {
      id: '3',
      title: 'Angular Performance based on Modern Reactivity and SSR',
      teaser:
        'Master browser rendering, event loop, and modern Angular features like NgOptimizedImage and SSR for high-performance applications.',
      benefits: [
        'Control the browser render pipeline and optimize application performance',
        'Master JavaScript event loop and network request optimization',
        'Optimize User Experience with defer & Server Side Rendering'
      ],
      abstract:
        "Advance your Angular expertise and build high-performance applications. You'll gain mastery over the JavaScript event loop to write efficient, non-blocking code. We will rigorously analyze network requests, identifying bottlenecks and implementing optimization strategies. Finally, we'll tackle Core Web Vitals and explore modern techniques like NgOptimizedImage, @defer and Server-Side Rendering to deliver blazingly fast user experiences.",
      trainerId: 'michael-hladky',
      duration: '8 hours',
      capacity: 30,
      room: 'Room 121',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
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
      targetAudience:
        'This workshop is designed for Angular developers who want to master performance optimization, modern Angular features, and SSR implementation.',
      trainers: ['michael-hladky', 'enea-jahollari'],
      soldOut: false
    },
    {
      id: '5',
      title:
        'Mastering NgRx SignalStore: From Key Principles to Advanced Patterns',
      teaser:
        'Enhance your Angular and NgRx expertise with hands-on guidance for implementing NgRx SignalStore to solve real-world challenges in modern Angular applications.',
      benefits: [
        'Master Angular Signals APIs and SignalStore core principles',
        'Integrate RxJS with SignalStore for optimal reactive workflows',
        'Build custom features and use advanced plugins like Entities and Events'
      ],
      abstract:
        'Enhance your Angular and NgRx expertise in an in-depth workshop led by NgRx team members Marko Stanimirović and Rainer Hahnekamp. This workshop provides hands-on guidance for implementing NgRx SignalStore to solve real-world challenges in modern Angular applications.\n\nNgRx SignalStore leverages the power of Angular Signals and a structured state management approach to streamline reactive development workflows. Its modular design, simplicity, and declarative nature form the foundation for maintainable and scalable implementations.\n\nWhat to Expect:\n\nThis workshop guides you through a carefully structured curriculum where each topic builds upon the previous one, providing a progressive experience from foundational concepts to advanced techniques:\n\n- Exploring Angular Signals APIs to establish the technical foundation for what follows\n- Mastering SignalStore core principles and main building blocks\n- Integrating RxJS with SignalStore to combine the best of both reactive approaches\n- Building custom SignalStore features that consolidate common patterns into reusable abstractions\n- Using the Entities plugin to facilitate data collection management\n- Applying architectural patterns for managing local and global state in complex applications\n- Utilizing the new Events plugin for orchestrating complex workflows with elegance\n\nEach section includes practical implementation through exercises and code examples, allowing you to apply concepts directly to real-world development challenges.',
      trainerId: 'marko-stanimirovic',
      duration: '8 hours',
      capacity: 30,
      room: 'Room 112',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
      outline: [
        {
          title: 'Angular Signals Foundation',
          topics: [
            'Angular Signals APIs deep dive',
            'Signal primitives and reactive patterns',
            'Understanding the technical foundation',
            'Signal composition and derived state',
            'Hands-on: Mastering Signals fundamentals'
          ]
        },
        {
          title: 'SignalStore Core Principles',
          topics: [
            'SignalStore architecture and main building blocks',
            'Declarative state management patterns',
            'State, computed values, and methods',
            'Store composition and modularity',
            'Hands-on: Building your first SignalStore'
          ]
        },
        {
          title: 'RxJS Integration & Custom Features',
          topics: [
            'Combining RxJS with SignalStore effectively',
            'Building custom SignalStore features',
            'Consolidating common patterns into reusable abstractions',
            'Async operations and side effects management',
            'Hands-on: Creating custom features and RxJS integration'
          ]
        },
        {
          title: 'Advanced Patterns & Plugins',
          topics: [
            'Using the Entities plugin for data collection management',
            'Architectural patterns for local and global state',
            'The new Events plugin for complex workflow orchestration',
            'Real-world application patterns and best practices',
            'Hands-on: Implementing advanced patterns with plugins'
          ]
        }
      ],
      targetAudience:
        'You should have a fundamental understanding of Angular Signals and TypeScript. Experience with NgRx is helpful but not required.',
      trainers: ['marko-stanimirovic', 'rainer-hahnekamp'],
      soldOut: false
    },
    {
      id: '4',
      title: 'Hands On: Security in Angular Applications',
      teaser:
        'Learn how to build secure Angular applications by mastering real-world attack scenarios and modern defense strategies.',
      benefits: [
        'Master core browser security concepts and XSS prevention',
        'Implement and deploy Content Security Policy (CSP) effectively',
        'Secure token handling and OAuth 2.1 patterns',
        'Learn Angular built-in Security mechanism and how to use them'
      ],
      abstract:
        "Learn how to build secure Angular applications by mastering real-world attack scenarios and modern defense strategies. This workshop covers core browser security concepts, Cross-Site Scripting (XSS) prevention, Content Security Policy (CSP), and secure token handling. You'll explore advanced topics like OAuth 2.0/2.1 security patterns and Backend-for-Frontend (BFF) architectures. With practical examples and hands-on guidance, you'll gain the skills to identify vulnerabilities and implement effective protection mechanisms in your frontend code. Perfect for developers and architects who want to take their web application security to the next level.",
      trainerId: 'martina-kraus',
      duration: '8 hours',
      capacity: 30,
      room: 'Room 129',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
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
      targetAudience:
        'This workshop is designed for Angular developers and architects who want to enhance their application security knowledge and implement robust security measures.',
      trainers: ['martina-kraus'],
      soldOut: false
    },
    {
      id: '6',
      title:
        'Web Accessibility: Requirements, Implementation, and Testing for Modern Applications',
      teaser:
        'Learn how to build accessible web applications that comply with legal requirements and provide inclusive user experiences for everyone.',
      benefits: [
        'Understand legal accessibility requirements and WCAG guidelines',
        'Implement accessible features in HTML, CSS, and JavaScript',
        'Master testing tools and automation for accessibility audits'
      ],
      abstract:
        "With accessibility laws becoming mandatory in many regions, ensuring your web applications are accessible is no longer optional. This hands-on workshop teaches you how to audit existing websites for accessibility compliance and implement digital accessibility according to legal requirements and WCAG guidelines.\n\nThrough a combination of theoretical background and practical exercises, you'll explore the fundamental principles of accessibility, analyze implementation of accessible features in HTML, CSS, and JavaScript, and learn to use tools for testing your websites for accessibility compliance.\n\nWe'll start with accessibility fundamentals and the current legal framework. Then we'll examine how to technically adapt websites and web applications to meet requirements. We'll dive into technical implementation details and learn what to consider for colors, media, layouts, page information, and web components when building accessible websites.\n\nBeyond accessible content design, navigation elements, and interaction possibilities, there's a special focus on practical testing of existing websites with appropriate tools. We'll conclude by looking at automation of accessibility audits, their limitations, and the future role of AI-supported testing mechanisms.",
      trainerId: 'maria-korneeva',
      duration: '8 hours',
      capacity: 30,
      room: 'Schoolroom',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
      outline: [
        {
          title: 'Accessibility Fundamentals & Legal Framework',
          topics: [
            'Definition and business value of accessibility',
            'Legal framework: European Accessibility Act and WCAG',
            'Understanding different types of disabilities',
            'Experiencing barriers in the web: screen readers, responsiveness, color, keyboard navigation',
            'Hands-on: Accessibility audit fundamentals'
          ]
        },
        {
          title: 'Accessible Web Development Practices',
          topics: [
            'Semantic HTML and page structure',
            'WAI-ARIA implementation and best practices',
            'Accessible navigation and menus',
            'Forms, tables, and interactive elements',
            'Media alternatives and non-textual content',
            'Hands-on: Building accessible components'
          ]
        },
        {
          title: 'Advanced Accessibility Patterns',
          topics: [
            'Web Components and accessibility',
            'Single Page Applications (SPA) accessibility challenges',
            'Live regions and dynamic content',
            'Input modalities and time restrictions',
            'Focus management and keyboard interaction',
            'Hands-on: Implementing complex accessible patterns'
          ]
        },
        {
          title: 'Testing & Automation',
          topics: [
            'Accessibility testing tools and linters',
            'Unit tests for accessibility',
            'End-to-end accessibility testing',
            'CI/CD integration for accessibility checks',
            'AI and accessibility: opportunities and limitations',
            'Hands-on: Setting up automated accessibility testing'
          ]
        }
      ],
      targetAudience:
        'This workshop is designed for frontend developers, UX designers, and QA engineers who want to create inclusive web applications. Basic knowledge of HTML, CSS, and JavaScript is required.',
      trainers: ['maria-korneeva'],
      soldOut: false
    },
    {
      id: '7',
      title: 'Pragmatic Angular Testing: Crafting Tests That Survive the Heat',
      teaser:
        'There are two ways to keep a product stable: never touch it — or cook up a solid testing strategy.',
      benefits: [
        'Writing *readable* and *maintainable tests*',
        'Writing tests that **focus on behavior** rather than implementation details.',
        'Writing **future-proof tests** that survive migrations and refactorings.',
        'Mocking" without suffering using **Fakes and Object Mothers**'
      ],
      abstract:
        "There are two ways to keep a product stable: never touch it — or cook up a solid testing strategy.\n\nSo… how's yours holding up?\n• Refactor something and watch the tests boil over?\n• Maintaining mocks feels like duct tape meets rocket science?\n• Still chasing 100% coverage while bugs keep crawling through?\n• End-to-end tests looked tasty at first — until flakiness and slowness caused indigestion?\n• As release day nears, you skip tests and serve it raw — fingers crossed hoping no one gets burned?\n\nIf any of that hits close to home, this workshop is your way out of the fire.\nWe'll stop by the market for key ingredients such as Fakes, Object Mothers, Gloves, Vitest, Testing Library, and Playwright Component Testing.\n\nThen back to the kitchen, where we'll cook up low-maintenance, high-confidence tests that:\n• Catch both today's and tomorrow's bugs\n• Survive refactors and all sorts of migrations — including Observables → Signals\n• Run fast enough to fail early and guide you back as you type\n• Are Zoneless-ready — because tomorrow is Zoneless\n\nNo dogma. No silver bullets. Just practical techniques you can use tomorrow to test Angular apps with confidence and clarity.",
      trainerId: 'younes-jaaidi',
      duration: '8 hours',
      capacity: 30,
      room: 'Room 123',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
      outline: [
        {
          title: '💻 Hands-on Exercise: First Test',
          topics: [
            'Let’s write our first test by instinct — then dissect what works and what doesn’t.'
          ]
        },
        {
          title: '👨🏻‍🏫 The Testing Pain',
          topics: [
            'Developers hate testing: Why, and how do we fix that?',
            'The Development Time Perception Bias.',
            'What’s wrong with Unit vs. Integration taxonomy?',
            'Narrow vs. Wide.'
          ]
        },
        {
          title: '👨🏻‍🏫 Vitest',
          topics: [
            'Why Vitest?',
            'Pros, cons, and the future.',
            'Migration path from Karma or Jest.'
          ]
        },
        {
          title: '👨🏻‍🏫 Component Testing',
          topics: [
            'OIsolated vs. Shallow vs. Integration.',
            '`TestBed` vs. `Testing Library`: What to pick from each?'
          ]
        },
        {
          title: '💻 Hands-on Exercises: TDD & Component Testing',
          topics: [
            'Progressive Test-Driven Development.',
            'All-you-can-eat tips & tricks for precise and maintainable tests.',
            'Future-proof testing with DOM-distancing and Gloves.',
            'Zoneless-ready testing.',
            'Debugging techniques.'
          ]
        },
        {
          title: '👨🏻‍🏫 Test Doubles & “Mocking”',
          topics: [
            'When, why, how, and where to “mock”.',
            'Fake it till you mock it: picking the right Test Double.',
            'Type-safe and maintainable doubles.',
            'High confidence with contract testing.'
          ]
        },
        {
          title: '💻 Hands-on Exercises: Test Doubles & “Mocking”',
          topics: ['Narrowing down tests with Fakes.']
        },
        {
          title: '👨🏻‍🏫 Playwright Component Testing with Testronaut',
          topics: [
            'How is Testronaut different from anything else?',
            'Component Testing with Testronaut.',
            'Using test doubles.',
            'Debugging',
            'Visual regression testing that scales.'
          ]
        },
        {
          title: '👨🏻‍🏫 Building your Pragmatic Testing Strategy',
          topics: [
            'What to test?',
            'Which tool to use?',
            'What is the right size for a System Under Test?',
            'Which strategy for legacy code?'
          ]
        },
        {
          title: '🎁 [Bonus] Charted Coding: AI-Assisted TDD',
          topics: [
            'Leveraging AI from design doc to tidy code with more TDD and less review fatigue.'
          ]
        }
      ],
      targetAudience:
        'This workshop is designed for Angular developers who want to master practical testing strategies and build maintainable, reliable test suites. Basic knowledge of Angular and testing concepts is recommended.',
      trainers: ['younes-jaaidi'],
      soldOut: false
    },
    {
      id: '8',
      title: 'Build Your First Chatbot with Angular and MCP: A Hands-On Introduction to Conversational AI',
      teaser: 'Learn to connect modern AI agents to Angular web frontends using the Model Context Protocol (MCP) and build a complete AI assistant.',
      benefits: [
        'Build a Python or TypeScript-based chat-bot with multiple data sources',
        'Master the Model Context Protocol (MCP) for AI agent integration',
        'Connect AI agents to a modern Angular chatbot UI',
        'Extend your AI assistant with custom data and tools'
      ],
      abstract: 'In this full-day workshop, you\'ll learn how to connect modern AI agents to a web frontend using the Model Context Protocol (MCP). We\'ll start by building a Python or Typescript-based chat-bot, plug in multiple data sources (like knowledge bases), and expose them through MCP. In the afternoon, you\'ll bring it all together by connecting the agent to an Angular chatbot UI. By the end of the day, you\'ll have a working AI assistant that blends the power of LLMs with a modern frontend, plus a clear path to extend it with your own data and tools.',
      trainerId: 'tom-ziegler',
      duration: '8 hours',
      capacity: 30,
      room: 'Library',
      address: 'Kastanienalle 82, 10115 Berlin, Germany',
      outline: [
        {
          title: 'Foundation: Introduction to AI Agents & MCP',
          topics: [
            'Understanding modern AI agents and their capabilities',
            'Introduction to the Model Context Protocol (MCP)',
            'Overview of the workshop architecture: Backend agents + Angular frontend',
            'Setting up the development environment',
            'Hands-on: Your first simple agent'
          ]
        },
        {
          title: 'Building the AI Agent Backend',
          topics: [
            'Creating a Python or TypeScript-based chat-bot',
            'Integrating multiple data sources (knowledge bases, APIs)',
            'Implementing MCP server functionality',
            'Managing context and conversation flow',
            'Hands-on: Building and testing your agent backend'
          ]
        },
        {
          title: 'Angular Frontend Integration',
          topics: [
            'Designing a modern chatbot UI with Angular',
            'Connecting Angular to the MCP-enabled backend',
            'Real-time communication and WebSocket integration',
            'Handling conversation state in Angular',
            'Hands-on: Building the Angular chatbot interface'
          ]
        },
        {
          title: 'Advanced Features & Deployment',
          topics: [
            'Extending your agent with custom tools and data sources',
            'Performance optimization for conversational AI',
            'Security considerations for AI-enabled applications',
            'Deployment strategies and scalability',
            'Hands-on: Complete AI assistant implementation'
          ]
        }
      ],
      targetAudience: 'This workshop is designed for developers with basic Angular knowledge who want to explore AI agent integration and build conversational AI applications. Basic understanding of TypeScript and API integration is recommended.',
      trainers: ['tom-ziegler', 'alisa-bogatinovski'],
      soldOut: false
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

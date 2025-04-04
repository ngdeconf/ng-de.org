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

import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TalkFormat {
  title: string;
  duration: string;
  description: string;
}

interface ProcessStep {
  number: number;
  label: string;
  description: string;
}

interface Topic {
  name: string;
}

@Component({
  selector: 'ngde-call-for-papers',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="call-for-papers" class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-3">Call for Papers</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Share your expertise with the Angular community at NG-DE 2026
          </p>
          <p class="text-sm text-primary-500 font-semibold mt-4">
            CFP opens April 1st, 2026
          </p>
        </div>

        <!-- Grid Layout: 2 columns on desktop, 1 on mobile -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
          <!-- Step 1: Topics of Interest -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative"
          >
            <div
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-sm font-bold text-white"
            >
              1
            </div>
            <h3 class="text-xl font-bold mb-3">Step 1: Choose Your Topic</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              We welcome talks for all levels — from beginners to experts.
            </p>
            <div class="grid grid-cols-1 gap-2">
              @for (topic of topics; track topic.name) {
                <span
                  class="rounded-full bg-gray-50 dark:bg-gray-700 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                >
                  {{ topic.name }}
                </span>
              }
            </div>
          </div>

          <!-- Step 2: Format Selection -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative"
          >
            <div
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-sm font-bold text-white"
            >
              2
            </div>
            <h3 class="text-xl font-bold mb-3">Step 2: Choose Your Format</h3>
            <div class="space-y-4">
              <!-- Talk Format -->
              <div
                class="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Talk
                </h4>
                <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Duration: 30 minutes</li>
                  <li>• Deep dive into your topic</li>
                  <li>• Perfect for comprehensive presentations</li>
                </ul>
              </div>
              <!-- Lightning Talk Format -->
              <div
                class="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Lightning Talk
                </h4>
                <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Duration: 10 minutes</li>
                  <li>• Focused demo or insight</li>
                  <li>• Great for tools, tips & quick wins</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Step 3: Submit -->
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative lg:col-span-2"
          >
            <div
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-sm font-bold text-white"
            >
              3
            </div>
            <h3 class="text-xl font-bold mb-3">Step 3: Submit Your Abstract</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  What to include:
                </h4>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li class="flex items-start gap-2">
                    <span class="text-primary-500 mt-1">•</span>
                    <span>Clear abstract describing your talk</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-primary-500 mt-1">•</span>
                    <span>Learning objectives for attendees</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-primary-500 mt-1">•</span>
                    <span>Code examples or demos (if applicable)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-primary-500 mt-1">•</span>
                    <span>Your speaker bio and experience</span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-between">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span class="font-semibold">Deadline:</span> April 30th,
                    2026
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    By submitting, you agree to our Code of Conduct & Privacy
                    Policy.
                  </p>
                </div>
                <a
                  href="https://forms.gle/1iRNxjfE6KVopnu7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex justify-center px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Your Talk Proposal
                </a>
              </div>
            </div>
          </div>

          <!-- Step 4: What Happens Next -->
          <div
            class="bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 relative lg:col-span-2 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-sm font-bold text-white"
            >
              4
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              What Happens Next?
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
              After you submit, our selection process ensures fair evaluation of
              all proposals.
            </p>
            <!-- Horizontal Timeline -->
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
            >
              @for (step of processSteps; track step.number) {
                <div class="flex flex-col items-center text-center flex-1">
                  <div
                    class="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 text-white flex items-center justify-center text-sm font-semibold mb-2"
                  >
                    {{ step.number }}
                  </div>
                  <h4
                    class="font-semibold text-sm text-gray-800 dark:text-gray-200"
                  >
                    {{ step.label }}
                  </h4>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {{ step.description }}
                  </p>
                </div>
                @if (step.number < processSteps.length) {
                  <div
                    class="hidden md:block w-full h-0.5 bg-gray-300 dark:bg-gray-600 mx-2"
                  ></div>
                }
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CallForPapersComponent {
  readonly topics: Topic[] = [
    { name: 'Angular (core, Signals, Hydration, Vite)' },
    { name: 'Reactive patterns & NgRx' },
    { name: 'Security & performance' },
    { name: 'AI, agentic engineering & AI-generated UIs' },
    { name: 'Developer experience & community' }
  ];

  readonly processSteps: ProcessStep[] = [
    {
      number: 1,
      label: 'You send an abstract',
      description: 'Submit your talk proposal via our Google Form'
    },
    {
      number: 2,
      label: 'We anonymize it',
      description: 'Your submission is anonymized for unbiased evaluation'
    },
    {
      number: 3,
      label: 'Jury decides',
      description: 'Our jury reviews and selects the best submissions'
    },
    {
      number: 4,
      label: 'You get informed',
      description: 'We notify you whether your talk was selected'
    }
  ];
}

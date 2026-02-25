import { Component } from '@angular/core';

@Component({
  selector: 'ngde-call-for-papers',
  imports: [],
  template: `
    <section id="call-for-papers" class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-3">Call for Papers</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Share your expertise with the Angular community at NG-DE 2026
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Submission Guidelines -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold mb-4">Submission Guidelines</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-primary-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span>30 min talk, English, single track</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span>Q&A only within your slot if desired</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span>Abstract, learning objectives, code/demos where useful</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                <span>By submitting you agree to our Code of Conduct & Privacy Policy</span>
              </li>
            </ul>
          </div>

          <!-- Topics of Interest -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold mb-3">Topics of Interest</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Talks for all levels welcome — from beginners to experts.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-flex items-center rounded-full p-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600">
                <span class="rounded-full bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200">Angular (core, Signals, Hydration, Vite)</span>
              </span>
              <span class="inline-flex items-center rounded-full p-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600">
                <span class="rounded-full bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200">Reactive patterns & NgRx</span>
              </span>
              <span class="inline-flex items-center rounded-full p-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600">
                <span class="rounded-full bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200">Security & performance</span>
              </span>
              <span class="inline-flex items-center rounded-full p-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600">
                <span class="rounded-full bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200">AI, agentic engineering & AI-generated UIs</span>
              </span>
              <span class="inline-flex items-center rounded-full p-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600">
                <span class="rounded-full bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200">Developer experience & community</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Selection Process + Timeline -->
        <div class="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <h3 class="text-xl font-bold mb-3">Selection Process</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
            Submissions are anonymized and evaluated by our jury on content quality and impact.
          </p>
          <!-- Timeline -->
          <div class="relative">
            <div class="hidden sm:block absolute top-5 left-0 right-0 h-0.5 bg-primary-500/30 dark:bg-primary-400/20 rounded" aria-hidden="true"></div>
            <ol class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 relative">
              <li class="flex flex-col items-center text-center">
                <span class="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-semibold shrink-0 z-10">1</span>
                <span class="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">Submit</span>
              </li>
              <li class="flex flex-col items-center text-center">
                <span class="w-10 h-10 rounded-full bg-primary-500/90 text-white flex items-center justify-center text-sm font-semibold shrink-0 z-10">2</span>
                <span class="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">Anonymize</span>
              </li>
              <li class="flex flex-col items-center text-center">
                <span class="w-10 h-10 rounded-full bg-primary-500/90 text-white flex items-center justify-center text-sm font-semibold shrink-0 z-10">3</span>
                <span class="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">Jury review</span>
              </li>
              <li class="flex flex-col items-center text-center col-span-2 sm:col-span-1">
                <span class="w-10 h-10 rounded-full bg-primary-500/90 text-white flex items-center justify-center text-sm font-semibold shrink-0 z-10">4</span>
                <span class="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">Program</span>
              </li>
            </ol>
          </div>
        </div>

        <!-- Submit CTA -->
        <div class="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 class="text-xl font-bold mb-1">Submit Your Proposal</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Open until April 30th 2026.</p>
          </div>
          <a
            href="https://forms.gle/1iRNxjfE6KVopnu7A"
            target="_blank"
            class="inline-flex justify-center px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors shrink-0"
          >
            Submit Your Talk
          </a>
        </div>
      </div>
    </section>
  `
})
export class CallForPapersComponent {}

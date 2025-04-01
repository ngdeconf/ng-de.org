import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-call-for-papers',

  imports: [CommonModule],
  template: `
    <section id="call-for-papers" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Call for Papers</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Share your expertise with the Angular community at NG-DE 2025
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Submission Guidelines -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Submission Guidelines</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>The talk should be 30 minutes long</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span
                  >We won't do any Q&A, but if you want to have one it should
                  not exceed your 30 minute slot</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>The talk must be in English</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>We will run a single track for both days</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span
                  >By submitting a talk you agree with our Code of Conduct and
                  Privacy Policy</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Include a detailed abstract and learning objectives</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Provide code examples and demos when applicable</span>
              </li>
            </ul>
          </div>

          <!-- Topics of Interest -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Topics of Interest</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Our audience will be people interested in Angular from every level
              of expertise. So don't worry, your talk can address any level from
              beginners to experts.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Angular in general</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span
                  >Latest Innovations in Angular (Signals, Hydration, Vite,
                  esbuild)</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Reactive Patterns</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>NgRx & State Management</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Security & Web Performance</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>AI Integration with Angular</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Vibe Coding: AI-Powered Development Workflows</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Making developers lives easier</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Becoming a better developer</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="w-6 h-6 text-primary-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>How to improve the community</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Selection Process -->
        <div class="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 class="text-2xl font-bold mb-6">The Selection Process</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            This year, we're implementing a new selection process where 50% of
            the talks will be pre-selected and 50% will be chosen through our
            jury process. Here's how it works:
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-primary-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span
                >50% of the talks will be pre-selected to ensure a balanced
                program covering key topics and speakers</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-primary-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span
                >The remaining 50% will be selected through our jury
                process</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-primary-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span
                >All submissions will be anonymized to ensure unbiased
                evaluation</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-primary-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span
                >The jury will review and vote on submissions based on content
                quality, relevance, and potential impact</span
              >
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-primary-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span
                >Final selections will be made considering both the pre-selected
                talks and jury recommendations</span
              >
            </li>
          </ul>
        </div>

        <!-- Submission Form -->
        <div class="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 class="text-2xl font-bold mb-6">Submit Your Proposal</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-8">
            The Call for Papers is now open! Submit your proposal by April 30th
            2025.
          </p>
          <a
            href="https://forms.gle/1iRNxjfE6KVopnu7A"
            target="_blank"
            class="inline-block px-8 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
          >
            Submit Your Talk
          </a>
        </div>
      </div>
    </section>
  `
})
export class CallForPapersComponent {}

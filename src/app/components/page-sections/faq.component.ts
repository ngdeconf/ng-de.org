import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FaqSection, FaqService } from '../../services/faq.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section id="faq" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about the NG-DE Conference 2025
          </p>
        </div>

        @if (isLoading()) {
        <div class="flex justify-center items-center py-10">
          <div
            class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#e40341]"
          ></div>
        </div>
        } @if (error()) {
        <div class="text-center text-red-500 py-10">
          An error occurred while loading FAQ data. Please try again later.
        </div>
        }

        <div class="max-w-4xl mx-auto">
          @for (section of faqSections(); track section.category) {
          <div class="mb-8">
            <h3
              class="text-2xl font-bold mb-4 text-[#e40341] dark:text-[#f034e0]"
            >
              {{ section.category }}
            </h3>

            <div
              class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              @for (item of section.questions; track item.question; let i =
              $index) {
              <div
                class="border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <button
                  (click)="toggleQuestion(section.category, i)"
                  class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  [attr.aria-expanded]="isExpanded(section.category, i)"
                  [attr.aria-controls]="'faq-' + section.category + '-' + i"
                >
                  <span class="font-medium text-gray-900 dark:text-white">{{
                    item.question
                  }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-200"
                    [class.rotate-180]="isExpanded(section.category, i)"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  [id]="'faq-' + section.category + '-' + i"
                  class="overflow-hidden transition-all duration-300 ease-in-out"
                  [style.maxHeight]="
                    isExpanded(section.category, i) ? '1000px' : '0'
                  "
                  [attr.aria-hidden]="!isExpanded(section.category, i)"
                >
                  <div
                    class="px-6 py-4 bg-gray-50 dark:bg-gray-700/40 whitespace-pre-line text-gray-700 dark:text-gray-300"
                  >
                    {{ item.answer }}
                  </div>
                </div>
              </div>
              }
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class FaqComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  // Store expanded state for each question - using a map with keys like "category-index"
  private expandedState = signal(new Map<string, boolean>());
  private _faqSections = signal<FaqSection[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  faqSections = computed(() => this._faqSections());

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    // Load FAQ data on component initialization
    this.faqService
      .loadFaqData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => {
          this._faqSections.set(data.sections);
          this.isLoading.set(false);
        },
        error: err => {
          console.error('Error loading FAQ data:', err);
          this.error.set('Failed to load FAQ data');
          this.isLoading.set(false);
        }
      });
  }

  /**
   * Toggle a question's expanded state
   */
  toggleQuestion(category: string, index: number) {
    const key = `${category}-${index}`;
    const currentMap = new Map(this.expandedState());
    currentMap.set(key, !this.isExpanded(category, index));
    this.expandedState.set(currentMap);
  }

  /**
   * Check if a question is expanded
   */
  isExpanded(category: string, index: number): boolean {
    const key = `${category}-${index}`;
    return this.expandedState().get(key) || false;
  }
}

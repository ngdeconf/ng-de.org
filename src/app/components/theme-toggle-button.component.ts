import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'ngde-theme-toggle-button',
  standalone: true,
  template: `
    <button
      (click)="toggleTheme()"
      class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      @if (!isDarkMode()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-600 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
      } @if (isDarkMode()) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-600 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
      }
    </button>
  `
})
export class ThemeToggleButtonComponent {
  constructor(private themeService: ThemeService) {}

  isDarkMode() {
    return this.themeService.darkMode();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

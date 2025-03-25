import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'angular-conf-theme';
  private prefersDarkMode = false;
  private isBrowser: boolean;

  darkMode = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.darkMode.set(
        localStorage.getItem(this.THEME_KEY) !== null
          ? localStorage.getItem(this.THEME_KEY) === 'dark'
          : this.prefersDarkMode
      );

      // Apply the theme on initialization
      this.setThemeClass();

      // Save theme changes to local storage
      effect(() => {
        const theme = this.darkMode() ? 'dark' : 'light';
        localStorage.setItem(this.THEME_KEY, theme);
        this.setThemeClass();
      });

      // Listen for system theme changes
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', e => {
          if (localStorage.getItem(this.THEME_KEY) === null) {
            this.darkMode.set(e.matches);
          }
        });
    }
  }

  toggleTheme() {
    if (this.isBrowser) {
      this.darkMode.update(value => !value);
    }
  }

  private setThemeClass() {
    if (this.isBrowser) {
      if (this.darkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}

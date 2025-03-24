import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'angular-conf-theme';
  private prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  darkMode = signal<boolean>(
    localStorage.getItem(this.THEME_KEY) !== null
      ? localStorage.getItem(this.THEME_KEY) === 'dark'
      : this.prefersDarkMode
  );

  constructor() {
    // Apply the theme on initialization
    this.setThemeClass();

    // Save theme changes to local storage
    effect(() => {
      const theme = this.darkMode() ? 'dark' : 'light';
      localStorage.setItem(this.THEME_KEY, theme);
      this.setThemeClass();
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem(this.THEME_KEY) === null) {
        this.darkMode.set(e.matches);
      }
    });
  }

  toggleTheme() {
    this.darkMode.update(value => !value);
  }

  private setThemeClass() {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
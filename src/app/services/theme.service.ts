import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkMode = signal(false);

  initializeTheme(): void {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.darkMode.set(isDarkMode);
    this.updateThemeClass(isDarkMode);
  }

  toggleDarkMode(): void {
    const newDarkMode = !this.darkMode();
    this.darkMode.set(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    this.updateThemeClass(newDarkMode);
  }

  private updateThemeClass(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

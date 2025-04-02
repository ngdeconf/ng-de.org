import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MobileMenuComponent } from '../mobile-menu.component';
import { ThemeToggleButtonComponent } from '../theme-toggle-button.component';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [ThemeToggleButtonComponent, MobileMenuComponent],
  template: `
    <header
      class="fixed w-full z-50 transition-all duration-300"
      [class.bg-white]="isScrolled() && !isDarkMode()"
      [class.bg-black]="isScrolled() && isDarkMode()"
      [class.shadow-md]="isScrolled()"
      [class.py-2]="isScrolled()"
      [class.py-4]="!isScrolled()"
    >
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <img src="assets/logo.svg" alt="NG-DE Logo" class="h-10 w-10" />
            <div>
              <h1 class="text-2xl font-bold text-primary-500">
                <span
                  class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500"
                >
                  NG-DE
                </span>
              </h1>
              <p class="text-xs dark:text-gray-300">
                November 5-7, 2025 • Berlin
              </p>
            </div>
          </div>

          <nav
            class="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200"
          >
            <a href="#home" class="hover:text-primary-500 transition-colors"
              >Home</a
            >
            <a href="#tickets" class="hover:text-primary-500 transition-colors"
              >Tickets</a
            >
            <a href="#speakers" class="hover:text-primary-500 transition-colors"
              >Speakers</a
            >
            <a
              href="#workshops"
              class="hover:text-primary-500 transition-colors"
              >Workshops</a
            >
          </nav>

          <div class="flex items-center space-x-4">
            <app-theme-toggle-button />

            <button
              (click)="toggleMobileMenu()"
              class="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              @if (!isMobileMenuOpen()) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              } @if (isMobileMenuOpen()) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              }
            </button>
          </div>
        </div>

        <app-mobile-menu
          [isOpen]="isMobileMenuOpen()"
          [onClose]="closeMobileMenu.bind(this)"
        />
      </div>
    </header>
  `
})
export class TopNavigationComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  private isBrowser: boolean;

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  isDarkMode() {
    return this.themeService.darkMode();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled.set(window.scrollY > 10);
    }
  }
}

import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
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
      class="fixed w-full z-50"
      [class.bg-white]="isScrolled() && !isDarkMode()"
      [class.bg-gray-900]="isScrolled() && isDarkMode()"
      [class.bg-transparent]="!isScrolled()"
      [class.backdrop-blur-sm]="isScrolled()"
      [class.shadow-lg]="isScrolled()"
    >
      <!-- Use a inner container for padding to avoid animating padding -->
      <div class="w-full py-4">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <img src="assets/logo.svg" alt="NG-DE Logo" class="h-10 w-10" />
              <div>
                <h1 class="text-2xl font-bold">
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500"
                  >
                    NG-DE
                  </span>
                </h1>
                <p class="text-xs text-gray-600 dark:text-gray-300">
                  November 5-7, 2025 • Berlin
                </p>
              </div>
            </div>

            <nav
              class="hidden md:flex items-center space-x-8 text-gray-600 dark:text-gray-300"
            >
              <a
                href="#home"
                class="hover:text-primary-500 dark:hover:text-primary-400"
                style="transition: opacity 0.2s ease"
                >Home</a
              >
              <a
                href="#tickets"
                class="hover:text-primary-500 dark:hover:text-primary-400"
                style="transition: opacity 0.2s ease"
                >Tickets</a
              >
              <a
                href="#speakers"
                class="hover:text-primary-500 dark:hover:text-primary-400"
                style="transition: opacity 0.2s ease"
                >Speakers</a
              >
              <a
                href="#workshops"
                class="hover:text-primary-500 dark:hover:text-primary-400"
                style="transition: opacity 0.2s ease"
                >Workshops</a
              >
              <a
                href="#faq"
                class="hover:text-primary-500 dark:hover:text-primary-400"
                style="transition: opacity 0.2s ease"
                >FAQ</a
              >

              <!-- Get Tickets CTA Button for desktop nav -->
              <a
                href="#tickets"
                class="get-tickets-cta bg-[#e40341] hover:bg-[#c90339] text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 ease-in-out"
                [class.opacity-0]="!showTicketsCTA()"
                [class.opacity-100]="showTicketsCTA()"
                style="transition: opacity 0.3s ease, transform 0.3s ease"
              >
                Get Tickets
              </a>
            </nav>

            <div class="flex items-center space-x-4">
              <!-- Get Tickets CTA Button for mobile -->
              <a
                href="#tickets"
                class="md:hidden get-tickets-cta bg-[#e40341] hover:bg-[#c90339] text-white font-semibold py-1.5 px-3 text-sm rounded-lg transition-all duration-300 ease-in-out"
                [class.opacity-0]="!showTicketsCTA()"
                [class.opacity-100]="showTicketsCTA()"
                style="transition: opacity 0.3s ease, transform 0.3s ease"
              >
                Get Tickets
              </a>

              <app-theme-toggle-button />

              <button
                (click)="toggleMobileMenu()"
                class="md:hidden p-2 rounded-lg hover:opacity-80"
                style="transition: opacity 0.2s ease"
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
                } @else {
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
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .get-tickets-cta {
        transition: opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
      }

      .get-tickets-cta.opacity-100 {
        opacity: 1;
        pointer-events: auto;
      }

      .get-tickets-cta.opacity-0 {
        opacity: 0;
        pointer-events: none;
      }
    `
  ]
})
export class TopNavigationComponent implements OnInit {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  showTicketsCTA = signal(false);
  private isBrowser: boolean;
  private ticketsSectionBottom = 0;

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // Initial calculation of section positions after component initialization
    if (this.isBrowser) {
      setTimeout(() => this.calculateSectionPositions(), 300);
    }
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

  private calculateSectionPositions() {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      this.ticketsSectionBottom =
        ticketsSection.offsetTop + ticketsSection.offsetHeight;
      // Initial check
      this.checkScrollPosition();
    }
  }

  private checkScrollPosition() {
    if (this.ticketsSectionBottom > 0) {
      this.showTicketsCTA.set(window.scrollY > this.ticketsSectionBottom);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled.set(window.scrollY > 10);

      // Recalculate if not yet set
      if (this.ticketsSectionBottom === 0) {
        this.calculateSectionPositions();
      } else {
        this.checkScrollPosition();
      }
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.isBrowser) {
      // Recalculate on resize to account for layout changes
      this.calculateSectionPositions();
    }
  }
}

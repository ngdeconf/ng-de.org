import {
  afterNextRender,
  Component,
  ElementRef,
  HostListener,
  signal,
  viewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { MobileMenuComponent } from '../mobile-menu.component';
import { ThemeToggleButtonComponent } from '../theme-toggle-button.component';

@Component({
  selector: 'ngde-top-navigation',
  standalone: true,
  imports: [ThemeToggleButtonComponent, MobileMenuComponent, RouterModule],
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
            <div
              class="flex items-center space-x-3 transition-opacity duration-300"
              [class.opacity-0]="!isPastHero()"
              [class.opacity-100]="isPastHero()"
            >
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

              <ngde-theme-toggle-button />

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

          <ngde-mobile-menu
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
export class TopNavigationComponent {
  headerElement = viewChild.required<ElementRef>('header');
  ticketsSection = viewChild.required<ElementRef>('ticketsSection');
  heroSection = viewChild.required<ElementRef>('heroSection');

  ticketsSectionBottom = 0;
  heroSectionBottom = 0;
  isHeaderCollapsed = signal(false);
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  showTicketsCTA = signal(false);
  isPastHero = signal(false);

  constructor(private themeService: ThemeService) {
    afterNextRender(() => {
      this.calculateSectionPositions();
    });
  }

  @HostListener('window:scroll')
  handleScroll(): void {
    this.checkScrollPosition();

    // Update header collapse state
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isHeaderCollapsed.set(scrollTop > 50);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.calculateSectionPositions();
  }

  private checkScrollPosition(): void {
    // Basic scroll check
    this.isScrolled.set(window.scrollY > 10);

    // Check for ticket CTA visibility
    if (this.ticketsSectionBottom > 0) {
      this.showTicketsCTA.set(window.scrollY > this.ticketsSectionBottom);
    }

    // Check if we've scrolled past hero section
    if (this.heroSectionBottom > 0) {
      this.isPastHero.set(window.scrollY > this.heroSectionBottom * 0.8);
    }
  }

  private calculateSectionPositions(): void {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      const rect = ticketsSection.getBoundingClientRect();
      this.ticketsSectionBottom = rect.bottom + window.scrollY;
    }

    const heroSection = document.getElementById('home');

    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      this.heroSectionBottom = rect.bottom + window.scrollY;
    }

    this.checkScrollPosition();
  }

  isDarkMode() {
    return this.themeService.darkMode();
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);

    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight =
        this.headerElement().nativeElement?.offsetHeight || 0;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      this.closeMobileMenu();
    }
  }
}

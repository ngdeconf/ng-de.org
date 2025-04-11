import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
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
      #header
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
                class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                [class.text-primary-500]="isActiveSection('home')"
                [class.dark:text-primary-400]="isActiveSection('home')"
                style="transition: opacity 0.2s ease"
                >Home</a
              >
              <a
                href="#tickets"
                class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                [class.text-primary-500]="isActiveSection('tickets')"
                [class.dark:text-primary-400]="isActiveSection('tickets')"
                style="transition: opacity 0.2s ease"
                >Tickets</a
              >
              <a
                href="#speakers"
                class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                [class.text-primary-500]="isActiveSection('speakers')"
                [class.dark:text-primary-400]="isActiveSection('speakers')"
                style="transition: opacity 0.2s ease"
                >Speakers</a
              >
              <a
                href="#workshops"
                class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                [class.text-primary-500]="isActiveSection('workshops')"
                [class.dark:text-primary-400]="isActiveSection('workshops')"
                style="transition: opacity 0.2s ease"
                >Workshops</a
              >
              <a
                href="#faq"
                class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                [class.text-primary-500]="isActiveSection('faq')"
                [class.dark:text-primary-400]="isActiveSection('faq')"
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
            [activeSection]="activeSection()"
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
  private destroyRef = inject(DestroyRef);

  ticketsSectionBottom = signal(0);
  heroSectionBottom = signal(0);
  isHeaderCollapsed = signal(false);
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  showTicketsCTA = signal(false);
  isPastHero = signal(false);

  // Track the active section
  activeSection = signal<string>('home');

  // Navigation menu sections - ordered by appearance
  private readonly navSections = [
    'home',
    'tickets',
    'speakers',
    'workshops',
    'faq'
  ];
  // All sections on the page, including ones not in navigation
  private readonly allSections = [
    'home',
    'tickets',
    'speakers',
    'workshops',
    'organizer',
    'impressions',
    'call-for-papers',
    'faq'
  ];
  // Throttling for scroll events
  private scrollThrottleTimeout: any = null;

  constructor(private themeService: ThemeService) {
    // Only run browser-specific code after rendering
    afterNextRender(() => {
      // Setup scroll handler
      this.setupScrollHandling();

      // Calculate initial positions
      this.calculateSectionPositions();

      // Initial update of active section
      this.updateActiveSection();
    });
  }

  private setupScrollHandling(): void {
    // Add event listener using bind to maintain context
    window.addEventListener('scroll', this.handleScrollThrottled.bind(this), {
      passive: true
    });

    // Clean up listener when component is destroyed
    this.destroyRef.onDestroy(() => {
      window.removeEventListener(
        'scroll',
        this.handleScrollThrottled.bind(this)
      );
      if (this.scrollThrottleTimeout) {
        clearTimeout(this.scrollThrottleTimeout);
      }
    });
  }

  // Throttle scroll handler to improve performance
  private handleScrollThrottled(): void {
    if (!this.scrollThrottleTimeout) {
      this.scrollThrottleTimeout = setTimeout(() => {
        this.handleScroll();
        this.scrollThrottleTimeout = null;
      }, 10);
    }
  }

  // This host listener isn't used for actual scroll handling but is kept
  // for potential future Angular-specific functionality
  @HostListener('window:scroll')
  handleScroll(): void {
    if (typeof window === 'undefined') return; // SSR guard

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Basic scroll check
    this.isScrolled.set(scrollTop > 10);

    // Update header collapse state
    this.isHeaderCollapsed.set(scrollTop > 50);

    // Check for ticket CTA visibility
    if (this.ticketsSectionBottom() > 0) {
      this.showTicketsCTA.set(scrollTop > this.ticketsSectionBottom());
    }

    // Check if we've scrolled past hero section
    if (this.heroSectionBottom() > 0) {
      this.isPastHero.set(scrollTop > this.heroSectionBottom() * 0.8);
    }

    // Update active section based on scroll position
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.calculateSectionPositions();
    this.updateActiveSection();
  }

  private calculateSectionPositions(): void {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      const rect = ticketsSection.getBoundingClientRect();
      this.ticketsSectionBottom.set(rect.bottom + window.scrollY);
    }

    const heroSection = document.getElementById('home');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      this.heroSectionBottom.set(rect.bottom + window.scrollY);
    }
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY;
    const headerHeight = this.headerElement().nativeElement.offsetHeight;
    const buffer = 20; // Buffer to make the detection less jumpy

    // Loop in reverse so we find the last section that's in view
    for (let i = this.allSections.length - 1; i >= 0; i--) {
      const sectionId = this.allSections[i];
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          buffer;

        if (scrollPosition >= sectionTop) {
          // Found a section that's currently in view
          if (this.navSections.includes(sectionId)) {
            // If the section is in the navigation, update active section directly
            this.activeSection.set(sectionId);
          } else {
            // For non-nav sections, find the previous nav section
            for (let j = i; j >= 0; j--) {
              if (this.navSections.includes(this.allSections[j])) {
                this.activeSection.set(this.allSections[j]);
                break;
              }
            }
          }

          // We found our section, exit early
          return;
        }
      }
    }

    // If we reach here, default to first section
    this.activeSection.set(this.navSections[0]);
  }

  isActiveSection(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  isDarkMode() {
    return this.themeService.darkMode();
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
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

    if (!element) return;

    const headerHeight = this.headerElement().nativeElement?.offsetHeight || 0;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    this.closeMobileMenu();
  }
}

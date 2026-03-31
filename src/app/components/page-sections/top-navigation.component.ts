import {
    afterNextRender,
    ChangeDetectionStrategy,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
                <p class="text-xs font-semibold text-red-600 dark:text-red-400">
                  NG-DE 2026 is canceled
                </p>
              </div>
            </div>

            <nav
              class="hidden lg:flex items-center space-x-8 text-gray-600 dark:text-gray-300"
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
                href="#faq"
                class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                [class.text-primary-500]="isActiveSection('faq')"
                [class.dark:text-primary-400]="isActiveSection('faq')"
                style="transition: opacity 0.2s ease"
                >FAQ</a
              >

              <a
                routerLink="/2025/talks"
                class="font-semibold py-2 px-4 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors"
                >Watch 2025 talks</a
              >
            </nav>

            <div class="flex items-center space-x-4">
              <!-- Watch 2025 talks CTA - visible when desktop nav is hidden (mobile/tablet) -->
              <a
                routerLink="/2025/talks"
                class="lg:hidden font-semibold py-1.5 px-3 text-sm rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors shrink-0"
                >Watch 2025 talks</a
              >

              <ngde-theme-toggle-button />

              <button
                (click)="toggleMobileMenu()"
                class="lg:hidden p-2 rounded-lg hover:opacity-80"
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
    `
  ]
})
export class TopNavigationComponent {
  headerElement = viewChild.required<ElementRef>('header');
  private readonly destroyRef = inject(DestroyRef);
  private readonly themeService = inject(ThemeService);

  heroSectionBottom = signal(0);
  isHeaderCollapsed = signal(false);
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isPastHero = signal(false);

  activeSection = signal<string>('home');

  private readonly navSections = ['home', 'faq'];
  private readonly allSections = [
    'home',
    'speakers',
    'organizer',
    'impressions',
    'faq'
  ];

  private scrollThrottleTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    afterNextRender(() => {
      // SSR guard: `window`/`document` are not available during server rendering.
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      this.setupScrollHandling();
      this.calculateSectionPositions();
      this.updateActiveSection();
    });
  }

  private setupScrollHandling(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', this.handleScrollThrottled.bind(this), {
      passive: true
    });

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

  private handleScrollThrottled(): void {
    if (!this.scrollThrottleTimeout) {
      this.scrollThrottleTimeout = setTimeout(() => {
        this.handleScroll();
        this.scrollThrottleTimeout = null;
      }, 10);
    }
  }

  @HostListener('window:scroll')
  handleScroll(): void {
    if (typeof window === 'undefined') return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    this.isScrolled.set(scrollTop > 10);
    this.isHeaderCollapsed.set(scrollTop > 50);

    if (this.heroSectionBottom() > 0) {
      this.isPastHero.set(scrollTop > this.heroSectionBottom() * 0.8);
    }

    this.updateActiveSection();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    this.calculateSectionPositions();
    this.updateActiveSection();
  }

  private calculateSectionPositions(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

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

  protected isActiveSection(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  protected isDarkMode() {
    return this.themeService.darkMode();
  }

  protected toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  protected openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);

    document.body.style.overflow = '';
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);

    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  protected scrollToSection(sectionId: string): void {
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

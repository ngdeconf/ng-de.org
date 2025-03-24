import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed w-full z-50 transition-all duration-300"
            [class.bg-white]="isScrolled() && !isDarkMode()"
            [class.bg-black]="isScrolled() && isDarkMode()"
            [class.shadow-md]="isScrolled()"
            [class.py-2]="isScrolled()"
            [class.py-4]="!isScrolled()">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <img src="assets/logo.svg" alt="NG-DE Logo" class="h-10 w-10" />
            <div>
              <h1 class="text-2xl font-bold text-primary-500">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                  NG-DE
                </span>
              </h1>
              <p class="text-xs dark:text-gray-300">November 5-7, 2025 • Berlin</p>
            </div>
          </div>
          
          <nav class="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200">
            <a href="#home" class="hover:text-primary-500 transition-colors">Home</a>
            <a href="#tickets" class="hover:text-primary-500 transition-colors">Tickets</a>
            <a href="#speakers" class="hover:text-primary-500 transition-colors">Speakers</a>
            <a href="#schedule" class="hover:text-primary-500 transition-colors">Schedule</a>
            <a href="#workshops" class="hover:text-primary-500 transition-colors">Workshops</a>
          </nav>
          
          <div class="flex items-center space-x-4">
            <button 
              (click)="toggleTheme()"
              class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme">
              <svg *ngIf="!isDarkMode()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg *ngIf="isDarkMode()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <button 
              (click)="toggleMobileMenu()"
              class="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu">
              <svg *ngIf="!isMobileMenuOpen()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="isMobileMenuOpen()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div *ngIf="isMobileMenuOpen()" class="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <nav class="flex flex-col space-y-3 px-4 text-gray-700 dark:text-gray-200">
            <a href="#home" class="py-2 hover:text-primary-500 transition-colors" (click)="closeMobileMenu()">Home</a>
            <a href="#tickets" class="py-2 hover:text-primary-500 transition-colors" (click)="closeMobileMenu()">Tickets</a>
            <a href="#speakers" class="py-2 hover:text-primary-500 transition-colors" (click)="closeMobileMenu()">Speakers</a>
            <a href="#schedule" class="py-2 hover:text-primary-500 transition-colors" (click)="closeMobileMenu()">Schedule</a>
            <a href="#workshops" class="py-2 hover:text-primary-500 transition-colors" (click)="closeMobileMenu()">Workshops</a>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  
  constructor(private themeService: ThemeService) {}
  
  isDarkMode() {
    return this.themeService.darkMode();
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }
}
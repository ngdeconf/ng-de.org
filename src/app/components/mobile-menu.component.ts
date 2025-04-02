import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  template: `
    @if (isOpen) {
    <div
      class="md:hidden mt-4 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out"
    >
      <nav
        class="flex flex-col space-y-4 px-4 text-gray-600 dark:text-gray-300"
      >
        <a
          href="#home"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
          (click)="onClose()"
          >Home</a
        >
        <a
          href="#tickets"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
          (click)="onClose()"
          >Tickets</a
        >
        <a
          href="#speakers"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
          (click)="onClose()"
          >Speakers</a
        >
        <a
          href="#schedule"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
          (click)="onClose()"
          >Schedule</a
        >
        <a
          href="#workshops"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
          (click)="onClose()"
          >Workshops</a
        >
      </nav>
    </div>
    }
  `
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() onClose = () => {};
}

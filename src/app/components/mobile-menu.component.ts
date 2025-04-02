import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  template: `
    @if (isOpen) {
    <div
      class="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <nav
        class="flex flex-col space-y-3 px-4 text-gray-700 dark:text-gray-200"
      >
        <a
          href="#home"
          class="py-2 hover:text-primary-500 transition-colors"
          (click)="onClose()"
          >Home</a
        >
        <a
          href="#tickets"
          class="py-2 hover:text-primary-500 transition-colors"
          (click)="onClose()"
          >Tickets</a
        >
        <a
          href="#speakers"
          class="py-2 hover:text-primary-500 transition-colors"
          (click)="onClose()"
          >Speakers</a
        >
        <a
          href="#schedule"
          class="py-2 hover:text-primary-500 transition-colors"
          (click)="onClose()"
          >Schedule</a
        >
        <a
          href="#workshops"
          class="py-2 hover:text-primary-500 transition-colors"
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

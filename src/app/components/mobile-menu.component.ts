import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  template: `
    @if (isOpen) {
    <div
      class="md:hidden mt-4 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-100 dark:border-gray-800"
      style="transform-origin: top; animation: slideIn 0.2s ease-out forwards;"
    >
      <nav
        class="flex flex-col space-y-4 px-4 text-gray-600 dark:text-gray-300"
      >
        <a
          href="#home"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Home</a
        >
        <a
          href="#tickets"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Tickets</a
        >
        <a
          href="#speakers"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Speakers</a
        >
        <a
          href="#schedule"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Schedule</a
        >
        <a
          href="#workshops"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Workshops</a
        >
      </nav>
    </div>
    }
  `,
  styles: [
    `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px) scaleY(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
      }
    `
  ]
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() onClose = () => {};
}

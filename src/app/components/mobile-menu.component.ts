import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngde-mobile-menu',
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
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          [class.text-primary-500]="activeSection === 'home'"
          [class.dark:text-primary-400]="activeSection === 'home'"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Home</a
        >
        <a
          href="#tickets"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          [class.text-primary-500]="activeSection === 'tickets'"
          [class.dark:text-primary-400]="activeSection === 'tickets'"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Tickets</a
        >
        <a
          href="#speakers"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          [class.text-primary-500]="activeSection === 'speakers'"
          [class.dark:text-primary-400]="activeSection === 'speakers'"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Speakers</a
        >
        <a
          href="#schedule"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          [class.text-primary-500]="activeSection === 'schedule'"
          [class.dark:text-primary-400]="activeSection === 'schedule'"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Schedule</a
        >
        <a
          href="#workshops"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          [class.text-primary-500]="activeSection === 'workshops'"
          [class.dark:text-primary-400]="activeSection === 'workshops'"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >Workshops</a
        >
        <a
          href="#faq"
          class="py-2 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          [class.text-primary-500]="activeSection === 'faq'"
          [class.dark:text-primary-400]="activeSection === 'faq'"
          style="transition: color 0.2s ease"
          (click)="onClose()"
          >FAQ</a
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
  @Input() activeSection = 'home';
}

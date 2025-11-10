import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'ngde-countdown',
  standalone: true,
  template: `
    <div class="countdown-container">
      <div class="countdown-grid">
        <div class="countdown-item">
          <div class="countdown-value">{{ days() }}</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
          <div class="countdown-value">{{ formatNumber(hours()) }}</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
          <div class="countdown-value">{{ formatNumber(minutes()) }}</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
          <div class="countdown-value">{{ formatNumber(seconds()) }}</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .countdown-container {
        @apply mb-8;
      }

      .countdown-grid {
        @apply flex items-center justify-center gap-2 md:gap-4;
      }

      .countdown-item {
        @apply flex flex-col items-center justify-center;
      }

      .countdown-value {
        @apply text-4xl md:text-5xl lg:text-6xl font-bold
               bg-clip-text text-transparent
               bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500
               mb-2;
        min-width: 80px;
        text-align: center;
      }

      .countdown-label {
        @apply text-xs md:text-sm font-semibold uppercase tracking-wider
               text-gray-600 dark:text-gray-400;
      }

      .countdown-separator {
        @apply text-3xl md:text-4xl lg:text-5xl font-bold
               bg-clip-text text-transparent
               bg-gradient-to-r from-primary-500 to-secondary-500
               pb-6;
      }

      @media (max-width: 640px) {
        .countdown-value {
          min-width: 60px;
          font-size: 2rem;
        }
      }
    `
  ]
})
export class CountdownComponent {
  private readonly destroyRef = inject(DestroyRef);
  
  // Target date: December 16th, 2026 at 00:00:00 UTC
  private readonly targetDate = new Date('2025-12-16T00:00:00Z');
  
  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  constructor() {
    // Calculate initial values
    this.updateCountdown();

    // Update every second
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateCountdown();
      });
  }

  formatNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }

  private updateCountdown(): void {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.days.set(days);
      this.hours.set(hours);
      this.minutes.set(minutes);
      this.seconds.set(seconds);
    } else {
      // Countdown has ended
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
    }
  }
}


import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'ngde-announcement-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isVisible()) {
      <section class="relative py-8 overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 animate-gradient-x">
        <!-- Animated background effect -->
        <div class="absolute inset-0 opacity-20">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5),transparent_50%)] animate-pulse-slow"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center">
            <!-- Main heading with glow effect -->
            <div class="mb-4">
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 animate-glow">
                🎉 Big Surprise Coming! 🎉
              </h2>
              <p class="text-lg md:text-xl text-white/90 font-medium">
                Come back on <span class="font-bold">Thursday, October 16th at 11:00 AM</span> (Berlin Time)
              </p>
              <p class="text-base md:text-lg text-white/80 mt-1">
                for an exclusive announcement that ticket buyers won't want to miss!
              </p>
            </div>

            <!-- Countdown Timer -->
            <div class="flex justify-center items-center gap-3 md:gap-6 mt-6">
              <div class="countdown-box">
                <div class="countdown-value">{{ timeRemaining().days }}</div>
                <div class="countdown-label">Days</div>
              </div>
              <div class="countdown-separator">:</div>
              <div class="countdown-box">
                <div class="countdown-value">{{ timeRemaining().hours }}</div>
                <div class="countdown-label">Hours</div>
              </div>
              <div class="countdown-separator">:</div>
              <div class="countdown-box">
                <div class="countdown-value">{{ timeRemaining().minutes }}</div>
                <div class="countdown-label">Minutes</div>
              </div>
              <div class="countdown-separator">:</div>
              <div class="countdown-box">
                <div class="countdown-value">{{ timeRemaining().seconds }}</div>
                <div class="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative animated elements -->
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
      </section>
    }
  `,
  styles: [`
    @keyframes gradient-x {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.2),
                     0 0 15px rgba(255, 255, 255, 0.15);
      }
      50% {
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.3),
                     0 0 20px rgba(255, 255, 255, 0.2);
      }
    }

    @keyframes pulse-slow {
      0%, 100% {
        opacity: 0.15;
      }
      50% {
        opacity: 0.25;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(-20px) translateX(20px);
      }
    }

    @keyframes float-delayed {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(20px) translateX(-20px);
      }
    }

    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 8s ease infinite;
    }

    .animate-glow {
      animation: glow 4s ease-in-out infinite;
    }

    .animate-pulse-slow {
      animation: pulse-slow 6s ease-in-out infinite;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-float-delayed {
      animation: float-delayed 8s ease-in-out infinite;
    }

    .countdown-box {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      padding: 1rem 1.25rem;
      min-width: 70px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
                  0 0 20px rgba(255, 255, 255, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .countdown-box:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15),
                  0 0 30px rgba(255, 255, 255, 0.5);
    }

    @media (min-width: 768px) {
      .countdown-box {
        padding: 1.5rem 2rem;
        min-width: 100px;
        border-radius: 16px;
      }
    }

    .countdown-value {
      font-size: 2rem;
      font-weight: bold;
      color: #e40341;
      line-height: 1;
    }

    @media (min-width: 768px) {
      .countdown-value {
        font-size: 3rem;
      }
    }

    .countdown-label {
      font-size: 0.75rem;
      color: #4b5563;
      margin-top: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    @media (min-width: 768px) {
      .countdown-label {
        font-size: 0.875rem;
      }
    }

    .countdown-separator {
      color: white;
      font-size: 2rem;
      font-weight: bold;
      line-height: 1;
      padding-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
      .countdown-separator {
        font-size: 3rem;
        padding-bottom: 2rem;
      }
    }
  `]
})
export class AnnouncementBannerComponent implements OnInit, OnDestroy {
  private intervalId?: number;
  private targetDate!: Date;

  timeRemaining = signal<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  isVisible = signal<boolean>(true);

  ngOnInit(): void {
    // October 16th, 2025 at 11:00 Berlin time (CEST is UTC+2)
    // Creating date in UTC and adjusting for Berlin timezone
    this.targetDate = new Date('2025-10-16T09:00:00.000Z'); // 11:00 CEST = 09:00 UTC

    this.updateCountdown();
    this.intervalId = window.setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown(): void {
    const now = new Date();
    const timeDiff = this.targetDate.getTime() - now.getTime();

    // Hide banner if the target date has passed
    if (timeDiff <= 0) {
      this.isVisible.set(false);
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    this.timeRemaining.set({
      days,
      hours,
      minutes,
      seconds
    });
  }
}

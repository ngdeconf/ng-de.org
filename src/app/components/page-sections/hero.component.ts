import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative h-screen min-h-[800px] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-950 dark:via-black dark:to-gray-950"
    >
      <!-- Angular-inspired geometric background -->
      <div class="absolute inset-0 z-0 opacity-20">
        <canvas #angularShapes class="w-full h-full"></canvas>
      </div>

      <!-- Animated grid overlay -->
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="grid-pattern w-full h-full"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 z-0">
        <div #particles class="particles-container"></div>
      </div>

      <!-- Gradient overlay -->
      <div
        class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-0"
      ></div>

      <!-- Main content -->
      <div
        class="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center"
      >
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12"
        >
          <!-- Text content -->
          <div class="lg:w-1/2 text-center lg:text-left mt-20 lg:mt-0">
            <div class="flex items-center justify-center lg:justify-start mb-8">
              <div class="relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-[#e40341] via-[#f034e0] to-[#921bf2] rounded-full blur-lg opacity-70 animate-pulse"
                ></div>
                <div
                  class="relative bg-gray-900 dark:bg-black rounded-full p-1"
                >
                  <img
                    src="assets/logo.svg"
                    alt="NG-DE Logo"
                    class="h-16 w-16"
                  />
                </div>
              </div>
              <h1
                class="ml-4 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
              >
                <span class="relative inline-block">
                  <span
                    class="absolute -inset-1 bg-gradient-to-r from-[#e40341] via-[#f034e0] to-[#921bf2] blur-lg opacity-50"
                  ></span>
                  <span
                    class="relative bg-clip-text text-transparent bg-gradient-to-r from-[#e40341] via-[#f034e0] to-[#921bf2] animate-gradient-x"
                    >NG-DE</span
                  >
                </span>
              </h1>
            </div>

            <h2 class="text-3xl md:text-4xl text-white font-bold mb-8">
              <span class="block mb-2">Berlin 2025</span>
              <span class="block text-xl md:text-2xl font-light text-gray-300"
                >The Angular Community Conference</span
              >
            </h2>

            <div class="space-y-4 mb-12 text-gray-300">
              <div
                class="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:text-white"
              >
                <div
                  class="bg-gradient-to-r from-[#e40341] to-[#f034e0] p-[1px] rounded-lg group-hover:p-[2px] transition-all duration-300"
                >
                  <div
                    class="bg-gray-900 dark:bg-black p-2 rounded-lg flex items-center justify-center"
                  >
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <span class="font-medium">November 5-7, 2025</span>
              </div>

              <div
                class="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:text-white"
              >
                <div
                  class="bg-gradient-to-r from-[#f034e0] to-[#921bf2] p-[1px] rounded-lg group-hover:p-[2px] transition-all duration-300"
                >
                  <div
                    class="bg-gray-900 dark:bg-black p-2 rounded-lg flex items-center justify-center"
                  >
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <span class="font-medium">GLS Campus, Berlin</span>
              </div>

              <div
                class="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:text-white"
              >
                <div
                  class="bg-gradient-to-r from-[#921bf2] to-[#2192d1] p-[1px] rounded-lg group-hover:p-[2px] transition-all duration-300"
                >
                  <div
                    class="bg-gray-900 dark:bg-black p-2 rounded-lg flex items-center justify-center"
                  >
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <span class="font-medium">Workshops & Conference</span>
              </div>
            </div>

            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a href="#tickets" class="relative group overflow-hidden">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#e40341] via-[#f034e0] to-[#921bf2] group-hover:from-[#921bf2] group-hover:via-[#f034e0] group-hover:to-[#e40341] transition-all duration-500"
                ></div>
                <div
                  class="relative px-8 py-4 bg-transparent backdrop-blur-sm text-white font-medium rounded-md text-center border border-white/20 transform group-hover:scale-105 transition-all duration-300"
                >
                  Get Tickets
                  <div
                    class="absolute -right-12 -bottom-8 w-20 h-20 blur-2xl bg-[#e40341] rounded-full opacity-50 group-hover:opacity-70 transition-all duration-300"
                  ></div>
                </div>
              </a>

              <a href="#speakers" class="relative group">
                <div
                  class="relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-md border border-white/10 hover:border-white/30 text-center transform group-hover:translate-y-[-2px] transition-all duration-300"
                >
                  Speakers
                </div>
              </a>
            </div>
          </div>

          <!-- Visual element -->
          <div class="lg:w-1/2 flex justify-center">
            <div class="relative">
              <!-- Glowing background for the shield -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#e40341]/30 via-[#921bf2]/20 to-[#2192d1]/30 rounded-2xl blur-2xl transform scale-110 animate-pulse-slow"
              ></div>

              <!-- Angular shield -->
              <div
                class="relative glass-card p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center transform hover:scale-[1.01] transition-all duration-500"
              >
                <div
                  class="angular-shield mb-8 w-32 h-32 md:w-48 md:h-48 relative"
                >
                  <div
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 256 272"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full"
                      preserveAspectRatio="xMidYMid"
                    >
                      <path
                        d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
                        fill="#E23237"
                      />
                      <path
                        d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"
                        fill="#B52E31"
                      />
                      <path
                        d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
                        fill="#FFF"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  class="countdown-grid grid grid-cols-4 gap-4 w-full max-w-sm"
                >
                  <div
                    class="countdown-item flex flex-col items-center p-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
                  >
                    <span class="text-2xl md:text-3xl font-bold text-white"
                      >125</span
                    >
                    <span class="text-xs text-gray-400">DAYS</span>
                  </div>
                  <div
                    class="countdown-item flex flex-col items-center p-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
                  >
                    <span class="text-2xl md:text-3xl font-bold text-white"
                      >16</span
                    >
                    <span class="text-xs text-gray-400">HOURS</span>
                  </div>
                  <div
                    class="countdown-item flex flex-col items-center p-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
                  >
                    <span class="text-2xl md:text-3xl font-bold text-white"
                      >43</span
                    >
                    <span class="text-xs text-gray-400">MINS</span>
                  </div>
                  <div
                    class="countdown-item flex flex-col items-center p-3 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
                  >
                    <span class="text-2xl md:text-3xl font-bold text-white"
                      >22</span
                    >
                    <span class="text-xs text-gray-400">SECS</span>
                  </div>
                </div>

                <div class="mt-8 flex flex-col items-center">
                  <div class="stat-counters flex space-x-6 md:space-x-12 mb-6">
                    <div class="flex flex-col items-center">
                      <span class="text-2xl md:text-4xl font-bold text-white"
                        >20+</span
                      >
                      <span class="text-sm text-gray-400">Speakers</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <span class="text-2xl md:text-4xl font-bold text-white"
                        >15+</span
                      >
                      <span class="text-sm text-gray-400">Workshops</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <span class="text-2xl md:text-4xl font-bold text-white"
                        >500+</span
                      >
                      <span class="text-sm text-gray-400">Attendees</span>
                    </div>
                  </div>

                  <div class="tech-tags flex flex-wrap justify-center gap-2">
                    <span
                      class="px-3 py-1 rounded-full text-xs bg-[#e40341]/20 text-[#e40341] border border-[#e40341]/20"
                      >Angular</span
                    >
                    <span
                      class="px-3 py-1 rounded-full text-xs bg-[#f034e0]/20 text-[#f034e0] border border-[#f034e0]/20"
                      >TypeScript</span
                    >
                    <span
                      class="px-3 py-1 rounded-full text-xs bg-[#921bf2]/20 text-[#921bf2] border border-[#921bf2]/20"
                      >RxJS</span
                    >
                    <span
                      class="px-3 py-1 rounded-full text-xs bg-[#2192d1]/20 text-[#2192d1] border border-[#2192d1]/20"
                      >NgRx</span
                    >
                    <span
                      class="px-3 py-1 rounded-full text-xs bg-[#e40341]/20 text-[#e40341] border border-[#e40341]/20"
                      >Signals</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span class="text-white/70 text-sm mb-2">Scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes gradient-x {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 5s ease infinite;
      }

      .animate-pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      .grid-pattern {
        background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
        background-size: 40px 40px;
      }

      .glass-card {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      }

      .countdown-item {
        transition: all 0.3s ease;
      }

      .countdown-item:hover {
        transform: translateY(-5px);
        background-color: rgba(255, 255, 255, 0.1);
      }

      .angular-shield {
        transition: all 0.5s ease;
      }

      .angular-shield:hover {
        transform: rotate(5deg) scale(1.05);
      }
    `
  ]
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('angularShapes') angularShapes!: ElementRef<HTMLCanvasElement>;
  @ViewChild('particles') particles!: ElementRef<HTMLDivElement>;

  private animationFrameId: number = 0;
  private particlesArray: any[] = [];
  private canvasContext: CanvasRenderingContext2D | null = null;

  constructor(private conferenceService: ConferenceService) {}

  ngAfterViewInit() {
    this.initCanvas();
    this.initParticles();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private initCanvas() {
    const canvas = this.angularShapes.nativeElement;
    this.canvasContext = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw initial shapes
    if (this.canvasContext) {
      this.drawAngularShapes();
    }
  }

  private initParticles() {
    const particlesContainer = this.particles.nativeElement;
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random size between 2-6px
      const size = Math.random() * 4 + 2;

      // Set styles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      // Random color from our palette
      const colors = ['#e40341', '#f034e0', '#921bf2', '#2192d1'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();

      // Random movement
      const vx = Math.random() * 0.2 - 0.1;
      const vy = Math.random() * 0.2 - 0.1;

      this.particlesArray.push({
        element: particle,
        x,
        y,
        vx,
        vy
      });

      particlesContainer.appendChild(particle);
    }
  }

  private drawAngularShapes() {
    if (!this.canvasContext) return;

    const ctx = this.canvasContext;
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw angular-inspired shapes
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 100 + 50;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.random() * Math.PI * 2);

      // Draw an Angular-inspired shape (shield-like)
      const colors = ['#e40341', '#f034e0', '#921bf2', '#2192d1'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      ctx.fillStyle = color;
      ctx.globalAlpha = 0.1;

      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }
  }

  private animate() {
    // Update particles
    this.particlesArray.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary check
      if (particle.x < 0 || particle.x > 100) particle.vx *= -1;
      if (particle.y < 0 || particle.y > 100) particle.vy *= -1;

      // Apply new position
      particle.element.style.left = `${particle.x}%`;
      particle.element.style.top = `${particle.y}%`;
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

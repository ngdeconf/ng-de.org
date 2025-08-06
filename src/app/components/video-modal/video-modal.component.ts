import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  computed,
  inject,
  signal,
  DOCUMENT
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoModalData {
  videoId: string;
}

@Component({
  selector: 'ngde-video-modal',
  standalone: true,
  template: `
    <div
      role="dialog"
      aria-labelledby="video-modal-title"
      aria-modal="true"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      (click)="onBackdropClick($event)"
    >
      <div
        #modalContent
        class="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        role="document"
      >
        @if (!hasGdprConsent() && !gdprConsentStored()) {
        <div class="p-6 md:p-8">
          <h2
            id="video-modal-title"
            class="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Watch Conference Impressions
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            We'd love to show you our amazing conference impressions! To play
            this YouTube video, we need your permission to load content from
            YouTube. This helps us create a more engaging experience while
            respecting your privacy.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            By accepting, you'll allow YouTube to load the video player. Your
            choice will be remembered for future visits.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              (click)="approveGdprConsent()"
              class="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              aria-label="Accept and play video"
            >
              Accept & Play Video
            </button>
            <button
              (click)="closeModal()"
              class="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              aria-label="Decline and close"
            >
              No, thanks
            </button>
          </div>
        </div>
        } @else {
        <div class="relative pt-[56.25%]">
          @if (showVideo()) {
          <iframe
            [src]="videoUrl()"
            class="absolute top-0 left-0 w-full h-full"
            title="NG-DE Conference Impressions"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          }
        </div>
        }

        <button
          (click)="closeModal()"
          class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close modal"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class VideoModalComponent {
  private document = inject(DOCUMENT);
  private dialogRef = inject(DialogRef);
  private sanitizer = inject(DomSanitizer);
  private data = inject<VideoModalData>(DIALOG_DATA);

  @ViewChild('modalContent') modalContent!: ElementRef;

  private gdprConsent = signal<boolean>(false);
  private gdprConsentKey = 'ngde-youtube-consent';

  hasGdprConsent = computed(() => this.gdprConsent());
  showVideo = computed(() => this.hasGdprConsent() || this.gdprConsentStored());

  videoUrl = computed<SafeResourceUrl>(() => {
    const url = new URL(
      `https://www.youtube-nocookie.com/embed/${this.data.videoId}`
    );
    if (this.hasGdprConsent() || this.gdprConsentStored()) {
      url.searchParams.set('autoplay', '1');
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
  });

  constructor() {
    afterNextRender(() => {
      this.trapFocus();
      this.checkStoredConsent();
    });
  }

  gdprConsentStored(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(this.gdprConsentKey) === 'true';
  }

  approveGdprConsent(): void {
    this.gdprConsent.set(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.gdprConsentKey, 'true');
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  private checkStoredConsent(): void {
    if (this.gdprConsentStored()) {
      this.gdprConsent.set(true);
    }
  }

  private trapFocus(): void {
    const modal = this.modalContent.nativeElement;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length) {
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      modal.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable.focus();
              e.preventDefault();
            }
          }
        }

        if (e.key === 'Escape') {
          this.closeModal();
        }
      });

      firstFocusable.focus();
    }
  }
}

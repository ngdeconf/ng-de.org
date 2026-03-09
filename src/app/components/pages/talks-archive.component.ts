import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { Talk } from '../../models/models';
import { SpeakerService } from '../../services/speaker.service';
import { SpeakersComponent } from '../page-sections/speakers.component';

const YOUTUBE_PLAYLIST_URL =
  'https://www.youtube.com/watch?v=_l3Krgk6LSI&list=PLkdIZQ2JS3AesLFMWxU4ArzsfIW-5K4BK';

@Component({
  selector: 'ngde-talks-archive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SpeakersComponent],
  template: `
    @if (year() !== null) {
      <!-- Hero -->
      <section
        class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900"
        aria-labelledby="talks-heading"
      >
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1
              id="talks-heading"
              class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Watch {{ year() }} talks
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Over 20 talks are ready to watch—covering the latest Angular
              techniques, architecture, and AI.
            </p>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-10">
              Experience past NG-DE conference talks on YouTube and get a feel for
              what awaits you.
            </p>
            <a
              [href]="playlistUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 font-semibold py-3 px-6 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <!-- Speakers -->
      <ngde-speakers />

      <!-- Talks -->
      <section
        class="py-16 bg-white dark:bg-gray-950"
        aria-labelledby="archive-talks-heading"
      >
        <div class="container mx-auto px-4">
          <h2
            id="archive-talks-heading"
            class="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          >
            {{ year() }} talks
          </h2>
          @if (talks().length > 0) {
            <ul
              class="max-w-4xl mx-auto space-y-4"
              role="list"
            >
              @for (talk of talks(); track talk.id) {
                <li
                  class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <div class="flex flex-wrap items-baseline gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <span>{{ talk.time }}</span>
                    <span aria-hidden="true">·</span>
                    <span>{{ talk.room }}</span>
                    @if (speakerName(talk.speakerId); as name) {
                      <span aria-hidden="true">·</span>
                      <span>{{ name }}</span>
                    }
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ talk.title }}
                  </h3>
                  @if (talk.abstract) {
                    <p class="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
                      {{ talk.abstract }}
                    </p>
                  }
                </li>
              }
            </ul>
          } @else if (talksLoaded()) {
            <p class="text-center text-gray-500 dark:text-gray-400">
              No talks found for {{ year() }}.
            </p>
          }
        </div>
      </section>
    } @else {
      <section class="py-20 text-center" aria-live="polite">
        <p class="text-gray-600 dark:text-gray-400">Invalid year.</p>
      </section>
    }
  `
})
export class TalksArchiveComponent {
  readonly playlistUrl = YOUTUBE_PLAYLIST_URL;
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly speakerService = inject(SpeakerService);

  private readonly yearParam = toSignal(
    this.route.paramMap.pipe(map(p => p.get('year'))),
    { initialValue: null as string | null }
  );

  readonly year = computed(() => {
    const y = this.yearParam();
    if (y === null) return null;
    const n = Number(y);
    return Number.isNaN(n) ? null : n;
  });

  private readonly talksResult = toSignal(
    this.route.paramMap.pipe(
      switchMap(p => {
        const y = p.get('year');
        const n = y ? Number(y) : Number.NaN;
        if (Number.isNaN(n)) return of({ talks: [] as Talk[], loaded: true });
        return this.http.get<Talk[]>(`assets/talks-${n}.json`).pipe(
          map(talks => ({ talks, loaded: true })),
          catchError(() => of({ talks: [] as Talk[], loaded: true }))
        );
      })
    ),
    { initialValue: { talks: [] as Talk[], loaded: false } }
  );

  readonly talks = computed(() => this.talksResult().talks);
  readonly talksLoaded = computed(() => this.talksResult().loaded);

  speakerName(speakerId: string): string | null {
    const speaker = this.speakerService.getSpeakerById(speakerId);
    return speaker?.name ?? null;
  }
}

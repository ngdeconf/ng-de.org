import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection()
  ]
};

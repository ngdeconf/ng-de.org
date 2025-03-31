import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/page-sections/footer.component';
import { HeaderComponent } from './components/page-sections/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <app-header />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}

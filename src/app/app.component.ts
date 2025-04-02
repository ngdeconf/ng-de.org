import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/page-sections/footer.component';
import { TopNavigationComponent } from './components/page-sections/top-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavigationComponent, FooterComponent],
  template: `
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <app-top-navigation />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  standalone: true
})
export class AppComponent {}

import { Component } from '@angular/core';
import { WorkshopInformationComponent } from './workshop-information.component';

@Component({
  selector: 'ngde-workshops',
  imports: [WorkshopInformationComponent],
  template: `
    <section id="workshops" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Workshop Day
          </h2>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            November 5: Hands-on workshops to level up your Angular skills
          </p>
        </div>

        <ngde-workshop-information></ngde-workshop-information>
      </div>
    </section>
  `,
  standalone: true
})
export class WorkshopsComponent {}

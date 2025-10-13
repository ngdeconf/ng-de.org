import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/page-sections/footer.component';
import { TopNavigationComponent } from './components/page-sections/top-navigation.component';
import { FlashSaleService } from './services/flash-sale.service';

// Extend Window interface for TypeScript
declare global {
  interface Window {
    flashSale: {
      enable: () => void;
      disable: () => void;
      reset: () => void;
      status: () => boolean;
    };
  }
}

@Component({
  selector: 'ngde-root',
  imports: [RouterOutlet, TopNavigationComponent, FooterComponent],
  template: `
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <ngde-top-navigation />
      <main>
        <router-outlet />
      </main>
      <ngde-footer />
    </div>
  `
})
export class AppComponent {
  private flashSaleService = inject(FlashSaleService);

  constructor() {
    // Expose flash sale controls to window for easy testing
    if (typeof window !== 'undefined') {
      window.flashSale = {
        enable: () => {
          this.flashSaleService.setManualOverride(true);
          console.log('✅ Flash Sale ENABLED (manual override)');
          console.log('💡 Refresh the page or navigate to see changes');
        },
        disable: () => {
          this.flashSaleService.setManualOverride(false);
          console.log('❌ Flash Sale DISABLED (manual override)');
          console.log('💡 Refresh the page or navigate to see changes');
        },
        reset: () => {
          this.flashSaleService.setManualOverride(null);
          console.log('🔄 Flash Sale reset to time-based activation');
          console.log('📅 Active: Oct 16, 2025 11:00 AM - Oct 17, 2025 11:00 AM');
        },
        status: () => {
          const isActive = this.flashSaleService.isFlashSaleActive();
          const override = this.flashSaleService.getManualOverride();
          console.log('📊 Flash Sale Status:', isActive ? '✅ ACTIVE' : '❌ INACTIVE');
          console.log('🔧 Manual Override:', override === null ? 'None (time-based)' : override ? 'Enabled' : 'Disabled');
          return isActive;
        }
      };

      // Log instructions on startup
      console.log('🎯 Flash Sale Feature Testing:');
      console.log('  window.flashSale.enable()  - Force enable flash sale');
      console.log('  window.flashSale.disable() - Force disable flash sale');
      console.log('  window.flashSale.reset()   - Reset to time-based activation');
      console.log('  window.flashSale.status()  - Check current status');
    }
  }
}

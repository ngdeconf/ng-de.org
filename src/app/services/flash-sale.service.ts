import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashSaleService {
  // Flash Sale Period: October 16, 2025 11:00 AM - October 17, 2025 11:00 AM
  private readonly FLASH_SALE_START = new Date('2025-10-16T11:00:00+02:00'); // Berlin time (CEST)
  private readonly FLASH_SALE_END = new Date('2025-10-17T11:00:00+02:00'); // Berlin time (CEST)
  private readonly FLASH_SALE_DISCOUNT_URL = 'https://ti.to/ng-de/berlin-2025/discount/FlashSale';
  private readonly FLASH_SALE_DISCOUNT_PERCENT = 25;

  // Feature toggle for manual override (for testing)
  private manualOverride = signal<boolean | null>(null);
  private currentTime = signal(new Date());

  constructor() {
    // Update current time every minute
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.currentTime.set(new Date());
      }, 60000); // Update every minute
    }
  }

  /**
   * Returns whether the flash sale is currently active
   */
  isFlashSaleActive = computed(() => {
    // If manual override is set, use that
    if (this.manualOverride() !== null) {
      return this.manualOverride()!;
    }

    // Otherwise, check if current time is within flash sale period
    const now = this.currentTime();
    return now >= this.FLASH_SALE_START && now <= this.FLASH_SALE_END;
  });

  /**
   * Calculate the flash sale price (25% discount)
   */
  getFlashSalePrice(originalPrice: number): number {
    return Math.round(originalPrice * (1 - this.FLASH_SALE_DISCOUNT_PERCENT / 100));
  }

  /**
   * Get the discount amount
   */
  getDiscountAmount(originalPrice: number): number {
    return originalPrice - this.getFlashSalePrice(originalPrice);
  }

  /**
   * Get the discount URL for ticket purchases
   */
  getDiscountUrl(): string {
    return this.FLASH_SALE_DISCOUNT_URL;
  }

  /**
   * Get the discount percentage
   */
  getDiscountPercent(): number {
    return this.FLASH_SALE_DISCOUNT_PERCENT;
  }

  /**
   * Manual toggle for testing purposes
   * Pass true to force enable, false to force disable, null to use time-based logic
   */
  setManualOverride(enabled: boolean | null): void {
    this.manualOverride.set(enabled);
  }

  /**
   * Get current manual override state
   */
  getManualOverride(): boolean | null {
    return this.manualOverride();
  }
}

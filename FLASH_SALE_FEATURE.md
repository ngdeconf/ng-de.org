# Flash Sale Feature Documentation

## Overview

The Flash Sale feature provides a time-limited promotional discount on the Conference + Workshop bundle ticket. The feature automatically activates and deactivates based on a predefined schedule and includes visual enhancements with golden animations.

## Schedule

- **Start:** October 16, 2025 at 11:00 AM
- **End:** October 17, 2025 at 11:00 AM
- **Duration:** 24 hours
- **Discount:** 25% off the Conference + Workshop bundle ticket

## Features

### Automatic Activation
The flash sale automatically activates and deactivates based on the configured time period. No manual intervention is required during the actual sale.

### Visual Design
When the flash sale is active:

1. **Tickets Section (Bundle Ticket)**
   - Golden gradient badge: "⚡ FLASH SALE ⚡"
   - Golden border and glowing effect on the ticket card
   - Animated shine/flash effects
   - Discounted price displayed prominently (25% off)
   - Original price shown with strikethrough
   - Button changes to "Get Flash Sale Ticket" with golden styling
   - Links to discount URL: `https://ti.to/ng-de/berlin-2025/discount/FlashSale`

2. **Hero Section**
   - CTA button changes from "Get Tickets" to "⚡ Go to Flash Sale ⚡"
   - Golden gradient background with pulse animation
   - Button links to #tickets section (scroll to tickets)

### Animations
- **Pulse Effect:** Glowing golden shadow that pulses
- **Shine Effect:** Subtle animated light sweep across elements
- **Glow Effect:** Brightness animation on text and badges

## Developer Testing

The feature includes a convenient testing interface accessible via the browser console:

### Console Commands

```javascript
// Enable flash sale (regardless of date)
window.flashSale.enable()

// Disable flash sale
window.flashSale.disable()

// Reset to time-based activation (default behavior)
window.flashSale.reset()

// Check current status
window.flashSale.status()
```

### Testing Workflow

1. Open the application in your browser
2. Open browser DevTools (F12 or Cmd+Option+I)
3. Go to the Console tab
4. Run `window.flashSale.enable()` to activate the flash sale
5. Navigate to the homepage to see the changes
6. Verify the golden styling and animations
7. Click the "Go to Flash Sale" button to test scrolling
8. Verify the bundle ticket shows discounted pricing
9. Run `window.flashSale.disable()` or `window.flashSale.reset()` when done

**Note:** After toggling the flash sale, you may need to refresh the page or navigate to see all changes take effect.

## Technical Implementation

### Service
- **File:** `src/app/services/flash-sale.service.ts`
- **Purpose:** Manages flash sale state, timing, and pricing calculations
- **Key Methods:**
  - `isFlashSaleActive()`: Returns computed signal indicating if flash sale is active
  - `getFlashSalePrice(price)`: Calculates 25% discounted price
  - `setManualOverride(enabled)`: Manually enable/disable for testing

### Components Modified
1. **Tickets Component** (`src/app/components/page-sections/tickets.component.ts`)
   - Added flash sale badge
   - Updated pricing display
   - Added golden animations
   - Changed button URL for bundle ticket during flash sale

2. **Hero Component** (`src/app/components/page-sections/hero.component.ts`)
   - Updated CTA button text and styling
   - Added flash sale animations

3. **App Component** (`src/app/app.component.ts`)
   - Exposed flash sale controls to window object for testing

## Configuration

To modify the flash sale schedule, edit the constants in `flash-sale.service.ts`:

```typescript
private readonly FLASH_SALE_START = new Date('2025-10-16T11:00:00');
private readonly FLASH_SALE_END = new Date('2025-10-17T11:00:00');
```

To change the discount percentage:

```typescript
private readonly FLASH_SALE_DISCOUNT_PERCENT = 25; // Change to desired percentage
```

## Production Deployment

The feature is production-ready and will:
- Automatically activate at the scheduled time
- Display promotional styling only during the active period
- Automatically deactivate after the period ends
- Revert to standard styling and pricing outside the flash sale window

No manual intervention is needed for the actual flash sale event.

## Troubleshooting

### Flash sale not showing during the scheduled time
1. Check system time is correct
2. Verify the date/time constants in `flash-sale.service.ts`
3. Check browser console for the flash sale status using `window.flashSale.status()`

### Manual override not working
1. Ensure you're calling the correct method: `window.flashSale.enable()`
2. Refresh the page after enabling
3. Check console for confirmation messages

### Animations not visible
1. Ensure CSS is loading correctly
2. Check browser DevTools for CSS errors
3. Verify the flash-sale classes are being applied in the Elements inspector

## Future Enhancements

Potential improvements for future iterations:
- Countdown timer showing time remaining
- Email notification system for subscribers
- Multiple discount tiers
- A/B testing for different discount percentages
- Analytics tracking for conversion rates

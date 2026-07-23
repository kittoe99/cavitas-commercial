declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Ads page-view conversion (pricing landing). */
export function trackPricingPageViewConversion() {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: 'AW-18232432396/hFi8CLn9ycgcEIyu8_VD',
    value: 1.0,
    currency: 'USD',
  });
}

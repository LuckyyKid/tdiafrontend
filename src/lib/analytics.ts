/**
 * Analytics utility for tracking events to Google Tag Manager dataLayer
 * 
 * Usage:
 * import { trackEvent } from '@/lib/analytics';
 * trackEvent('event_name', { param1: 'value1', param2: 'value2' });
 */

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: eventName,
    ...params,
  });
}

/**
 * Track page views for single-page applications
 */
export function trackPageView(pagePath?: string, pageTitle?: string) {
  trackEvent('page_view_spa', {
    page_path: pagePath || window.location.pathname,
    page_title: pageTitle || document.title,
  });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaLabel: string, ctaLocation: string) {
  trackEvent('cta_click', {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
    page_path: window.location.pathname,
  });
}

/**
 * Track navigation clicks
 */
export function trackNavClick(navLabel: string, navLocation: string, destinationPath: string) {
  trackEvent('nav_click', {
    nav_label: navLabel,
    nav_location: navLocation,
    destination_path: destinationPath,
    page_path: window.location.pathname,
  });
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formId: string, formLocation: string) {
  trackEvent('form_submit', {
    form_id: formId,
    form_location: formLocation,
    page_path: window.location.pathname,
  });
}

/**
 * Track outbound link clicks
 */
export function trackOutboundClick(linkUrl: string, linkLabel: string) {
  trackEvent('outbound_click', {
    link_url: linkUrl,
    link_label: linkLabel,
    page_path: window.location.pathname,
  });
}

/**
 * Track UI interactions (tabs, accordions, etc.)
 */
export function trackUIInteraction(interactionType: string, interactionLabel: string) {
  trackEvent('ui_interaction', {
    interaction_type: interactionType,
    interaction_label: interactionLabel,
    page_path: window.location.pathname,
  });
}

/**
 * Meta Pixel tracking functions
 */

/**
 * Track Meta Pixel page views for SPA navigation
 */
export function trackMetaPageView() {
  if (typeof window === 'undefined') return;
  
  const fbq = (window as any).fbq;
  if (fbq) {
    fbq('track', 'PageView');
  }
}

/**
 * Track Meta Pixel custom events
 */
export function trackMetaEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  
  const fbq = (window as any).fbq;
  if (fbq) {
    fbq('track', eventName, params);
  }
}

/**
 * Track Meta Pixel lead event (for form submissions, bookings, etc.)
 */
export function trackMetaLead(params: Record<string, any> = {}) {
  trackMetaEvent('Lead', params);
}

/**
 * Track Meta Pixel conversion event (for thank you page)
 */
export function trackMetaConversion(params: Record<string, any> = {}) {
  trackMetaEvent('Purchase', params);
}

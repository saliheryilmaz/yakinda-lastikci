'use client';

export type AnalyticsEventName =
  | 'phone_click'
  | 'whatsapp_click'
  | 'location_click'
  | 'location_success'
  | 'lead_form_start'
  | 'lead_form_submit'
  | 'service_area_click';

type AnalyticsPayload = {
  event_category?: string;
  event_label?: string;
  page_path?: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined') return;

  const pagePath = window.location.pathname;
  const eventPayload = {
    event: name,
    page_path: pagePath,
    ...payload,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      page_path: pagePath,
      ...payload,
    });
  }
}


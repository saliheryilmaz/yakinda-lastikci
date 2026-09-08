'use client';

import { MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { defaultWhatsappMessage, siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';

function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function PhoneButton({
  label = 'Lastikçiyi Ara',
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={siteConfig.phoneHref}
      onClick={() => trackEvent('phone_click', { event_label: label })}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--cta)] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--cta-hover)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--cta-ring)] ${
        compact ? 'px-3 text-sm' : ''
      }`}
      aria-label={`${label}: ${siteConfig.phoneDisplay}`}
    >
      <Phone className="size-5" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsappButton({
  label = "WhatsApp'tan Yaz",
  message = defaultWhatsappMessage,
  compact = false,
}: {
  label?: string;
  message?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent('whatsapp_click', { event_label: label })}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white px-5 py-3 text-base font-semibold text-[var(--ink)] shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 ${
        compact ? 'px-3 text-sm' : ''
      }`}
      aria-label={label}
    >
      <MessageCircle className="size-5 text-emerald-600" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function LocationButton({
  label = 'Konumumu Gönder',
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  async function handleLocation() {
    trackEvent('location_click', { event_label: label });

    if (!navigator.geolocation) {
      window.open(
        whatsappUrl(`${defaultWhatsappMessage} Konumumu tarayicidan alamadim, ilcemi yazacagim.`),
        '_blank',
        'noopener,noreferrer',
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        trackEvent('location_success', { event_label: 'maps_link_created' });
        window.open(
          whatsappUrl(`${defaultWhatsappMessage} ${mapsUrl}`),
          '_blank',
          'noopener,noreferrer',
        );
      },
      () => {
        window.open(
          whatsappUrl(`${defaultWhatsappMessage} Konum izni veremedim, bulundugum ilceyi yazacagim.`),
          '_blank',
          'noopener,noreferrer',
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 9000,
        maximumAge: 0,
      },
    );
  }

  return (
    <button
      type="button"
      onClick={handleLocation}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-5 py-3 text-base font-semibold text-sky-950 transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 ${
        compact ? 'px-3 text-sm' : ''
      }`}
      aria-label={label}
    >
      {compact ? <Send className="size-5" aria-hidden="true" /> : <MapPin className="size-5" aria-hidden="true" />}
      <span>{label}</span>
    </button>
  );
}

export function HeroActions() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <PhoneButton />
      <WhatsappButton />
      <LocationButton />
    </div>
  );
}

export function MobileCtaBar() {
  return (
    <nav
      aria-label="Hizli iletisim"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/96 px-3 pb-[calc(env(safe-area-inset-bottom)+0.55rem)] pt-2 shadow-[0_-10px_30px_rgb(15_23_42/12%)] backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <PhoneButton label="Ara" compact />
        <WhatsappButton label="WhatsApp" compact />
        <LocationButton label="Konum" compact />
      </div>
    </nav>
  );
}


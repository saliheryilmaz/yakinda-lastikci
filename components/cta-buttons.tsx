'use client';

import { MapPin, Phone, Send } from 'lucide-react';
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 ${
        compact ? 'px-3 text-sm' : ''
      }`}
      style={{ backgroundColor: '#25D366' }}
      aria-label={label}
    >
      {/* WhatsApp resmi SVG ikonu */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-5 shrink-0 fill-white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
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
  function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 9000,
        maximumAge: 0,
      }),
    );
  }

  function openWhatsapp(message: string) {
    const url = whatsappUrl(message);
    // location.href ile aç — mobilde popup engeli yok
    window.location.href = url;
  }

  async function handleLocation() {
    trackEvent('location_click', { event_label: label });

    if (!navigator.geolocation) {
      openWhatsapp(`${defaultWhatsappMessage} Konumumu tarayicidan alamadim, ilcemi yazacagim.`);
      return;
    }

    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      trackEvent('location_success', { event_label: 'maps_link_created' });
      openWhatsapp(`${defaultWhatsappMessage} ${mapsUrl}`);
    } catch {
      openWhatsapp(`${defaultWhatsappMessage} Konum izni veremedim, bulundugum ilceyi yazacagim.`);
    }
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


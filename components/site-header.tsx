import Image from 'next/image';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PhoneButton } from '@/components/cta-buttons';

const topNavItems = [
  { href: '/mobil-lastikci', label: 'Hizmetler' },
  { href: '/istanbul/kadikoy-lastikci', label: 'Hizmet Bölgeleri' },
  { href: '/#nasil-calisir', label: 'Nasıl Çalışır?' },
  { href: '/#sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
];

const serviceLinks = [
  { href: '/mobil-lastikci', label: 'Mobil Lastikçi' },
  { href: '/7-24-lastikci', label: '7/24 Lastikçi' },
  { href: '/gece-lastikci', label: 'Gece Lastikçi' },
  { href: '/avrupa-yakasi-lastikci', label: 'Avrupa Yakası' },
  { href: '/yerinde-lastik-degisimi', label: 'Yerinde Hizmet' },
  { href: '/lastik-yol-yardim', label: 'Lastik Yol Yardım' },
  { href: '/patlak-lastik-yardimi', label: 'Patlak Lastik' },
  { href: '/lastik-tamiri', label: 'Lastik Tamiri' },
];

const otherNavItems = [
  { href: '/istanbul/kadikoy-lastikci', label: 'Hizmet Bölgeleri' },
  { href: '/#nasil-calisir', label: 'Nasıl Çalışır?' },
  { href: '/#sss', label: 'SSS' },
  { href: '/iletisim', label: 'İletişim' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/94 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.displayName} ana sayfa`}>
          <Image
            src="/images/yakindalogo.png"
            alt={`${siteConfig.displayName} logo`}
            width={40}
            height={40}
            className="size-10 rounded-lg object-contain"
            priority
          />
          <span>
            <span className="block text-base font-bold text-slate-950">{siteConfig.displayName}</span>
            <span className="block text-xs text-slate-500">Mobil lastikçi talep hattı</span>
          </span>
        </Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-6 lg:flex">
          {topNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PhoneButton label="Hemen Ara" compact />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.phoneHref}
            className="grid size-10 place-items-center rounded-lg bg-[var(--cta)] text-white"
            aria-label={`Telefonla ara: ${siteConfig.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <details className="group relative">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-slate-200 text-slate-900">
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">Menüyü aç</span>
            </summary>
            <div className="absolute right-0 mt-2 w-72 rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
              {/* Hizmetler bölümü */}
              <p className="mb-1 px-3 pt-1 text-xs font-bold uppercase tracking-wide text-slate-400">Hizmetler</p>
              <div className="grid grid-cols-2 gap-0.5">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    {item.label}
                  </Link>
                ))}
              </div>
              {/* Diğer sayfalar */}
              <div className="mt-2 border-t border-slate-100 pt-2">
                {otherNavItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}


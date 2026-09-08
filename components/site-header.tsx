import Link from 'next/link';
import { Menu, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PhoneButton } from '@/components/cta-buttons';

const navItems = [
  { href: '/mobil-lastikci', label: 'Hizmetler' },
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
          <span className="grid size-10 place-items-center rounded-lg bg-slate-950 text-white">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold text-slate-950">{siteConfig.displayName}</span>
            <span className="block text-xs text-slate-500">Mobil lastikçi talep hattı</span>
          </span>
        </Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
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
            <div className="absolute right-0 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}


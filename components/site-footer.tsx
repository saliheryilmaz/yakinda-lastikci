import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { siteConfig } from '@/config/site';
import { serviceAreas } from '@/data/service-areas';
import { services } from '@/data/services';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 pb-24 text-slate-200 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/images/yakindalogo.png"
              alt={`${siteConfig.displayName} logo`}
              width={36}
              height={36}
              className="size-9 rounded-lg object-contain"
            />
            <span className="text-lg font-bold text-white">{siteConfig.displayName}</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            İstanbul genelinde mobil lastikçi, lastik yol yardım ve yerinde lastik desteği için arama, WhatsApp ve konum paylaşımı odaklı talep akışı.
          </p>
          <p className="mt-4 text-sm text-slate-400">{siteConfig.phoneDisplay}</p>
        </div>
        <FooterColumn title="Hizmetler">
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              {service.h1}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Popüler bölgeler">
          {serviceAreas.slice(0, 8).map((area) => (
            <Link key={area.slug} href={`/istanbul/${area.slug}`}>
              {area.district} lastikçi
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title="Yasal ve iletişim">
          <Link href="/iletisim">İletişim</Link>
          <Link href="/kvkk-gizlilik-politikasi">KVKK / Gizlilik</Link>
          <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
          <Link href="/cerez-politikasi">Çerez Politikası</Link>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-500">
        © 2026 {siteConfig.displayName} · Web tasarım:{' '}
        <a href="https://www.instagram.com/meswebb/?hl=tr" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
          MESWEB
        </a>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-white">{title}</p>
      <div className="grid gap-2 text-sm text-slate-400 [&_a]:hover:text-white">{children}</div>
    </div>
  );
}

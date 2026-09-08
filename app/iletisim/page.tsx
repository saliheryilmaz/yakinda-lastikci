import { Mail, MapPin, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { HeroActions, MobileCtaBar } from '@/components/cta-buttons';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'İletişim',
  description:
    'Yakında Lastikçi telefon, WhatsApp, adres ve şirket bilgileri. Eksik işletme bilgileri merkezi config dosyasından güncellenebilir.',
  path: '/iletisim',
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-slate-950 py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">İletişim</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Lastik yol yardım talebi için telefon, WhatsApp veya konum paylaşımıyla iletişime geçin.
            </p>
            <div className="mt-7">
              <HeroActions />
            </div>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <Info icon={<Phone className="size-5" />} title="Telefon" text={siteConfig.phoneDisplay} />
            <Info icon={<Mail className="size-5" />} title="E-posta" text={siteConfig.email} />
            <Info icon={<MapPin className="size-5" />} title="Adres" text={siteConfig.address} />
            <Info icon={<MapPin className="size-5" />} title="Şirket" text={`${siteConfig.companyLegalName} / ${siteConfig.taxOffice} / ${siteConfig.taxNumber}`} />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}

function Info({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="flex gap-3 rounded-lg border border-slate-200 p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-700">{icon}</span>
      <div>
        <h2 className="font-semibold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
      </div>
    </article>
  );
}

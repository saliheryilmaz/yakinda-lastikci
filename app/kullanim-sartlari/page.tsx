import { MobileCtaBar } from '@/components/cta-buttons';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Kullanım Şartları',
  description: 'Yakında Lastikçi kullanım şartları taslak sayfası.',
  path: '/kullanim-sartlari',
});

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14">
        <article className="mx-auto max-w-3xl px-4 leading-8 text-slate-700 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-slate-950">Kullanım Şartları</h1>
          <p className="mt-5">
            {siteConfig.displayName}, mobil lastikçi talebi oluşturmayı kolaylaştıran bir iletişim yüzeyidir. Hizmet kapsamı, uygunluk, fiyat ve süre bilgileri telefon veya WhatsApp görüşmesinde netleşir.
          </p>
          <h2 className="mt-8 text-2xl font-bold text-slate-950">Eksik işletme bilgileri</h2>
          <p className="mt-3">
            Şirket unvanı, vergi bilgileri ve açık adres canlı yayın öncesinde config dosyasından güncellenmelidir.
          </p>
        </article>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}


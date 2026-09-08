import { MobileCtaBar } from '@/components/cta-buttons';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Çerez Politikası',
  description: 'Yakında Lastikçi çerez politikası ve ölçüm araçları taslak sayfası.',
  path: '/cerez-politikasi',
});

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14">
        <article className="mx-auto max-w-3xl px-4 leading-8 text-slate-700 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-slate-950">Çerez Politikası</h1>
          <p className="mt-5">
            Site, Google Tag Manager veya Google Analytics kimliği eklendiğinde dönüşüm ölçümü için gerekli teknik çerezleri kullanabilir.
          </p>
          <p className="mt-4">
            Mevcut değişkenler: NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GOOGLE_ADS_ID. Bu değerler boşsa takip scriptleri hata vermez.
          </p>
          <p className="mt-4">İşletme bilgileri canlı yayın öncesinde {siteConfig.companyLegalName} placeholder alanlarından güncellenmelidir.</p>
        </article>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}


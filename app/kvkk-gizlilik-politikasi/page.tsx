import { MobileCtaBar } from '@/components/cta-buttons';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'KVKK ve Gizlilik Politikası',
  description: 'Yakında Lastikçi KVKK ve gizlilik politikası taslak sayfası.',
  path: '/kvkk-gizlilik-politikasi',
});

export default function PrivacyPage() {
  return <LegalPage title="KVKK ve Gizlilik Politikası" />;
}

function LegalPage({ title }: { title: string }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-14">
        <article className="mx-auto max-w-3xl px-4 leading-8 text-slate-700 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-slate-950">{title}</h1>
          <p className="mt-5">
            Bu sayfa canlı yayından önce işletmenin gerçek unvanı, iletişim adresi, veri işleme amaçları ve saklama süreçleriyle hukuk danışmanı tarafından tamamlanmalıdır.
          </p>
          <p className="mt-4">
            Mevcut placeholder şirket bilgisi: {siteConfig.companyLegalName}, {siteConfig.address}.
          </p>
          <h2 className="mt-8 text-2xl font-bold text-slate-950">Konum verisi</h2>
          <p className="mt-3">
            Konum butonu yalnızca kullanıcı aksiyonuyla çalışır. Site konumu sürekli izlemez; kullanıcının onayıyla oluşan harita linki WhatsApp mesajına eklenir.
          </p>
        </article>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}


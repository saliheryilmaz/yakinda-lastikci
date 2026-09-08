import Link from 'next/link';
import { MobileCtaBar, PhoneButton, WhatsappButton } from '@/components/cta-buttons';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-20">
        <section className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase text-sky-700">404</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-950">Sayfa bulunamadı</h1>
          <p className="mt-4 text-slate-600">
            Aradığınız sayfa taşınmış olabilir. Acil lastik yardımı gerekiyorsa aşağıdaki aksiyonları kullanabilirsiniz.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <PhoneButton label="Lastikçiyi Ara" />
            <WhatsappButton label="WhatsApp'tan Yaz" />
          </div>
          <Link href="/" className="mt-6 inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            Ana sayfaya dön
          </Link>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}


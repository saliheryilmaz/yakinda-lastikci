import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { MobileCtaBar } from '@/components/cta-buttons';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { guides } from '@/data/guides';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Lastik Rehberi',
  description:
    'Patlak lastik, stepne, lastik basinci ve mobil lastikci hizmetleri hakkinda pratik ve guvenli rehberler.',
  path: '/rehber',
});

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-slate-950 py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'Ana sayfa', href: '/' }, { name: 'Rehber', href: '/rehber' }]} />
            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Lastik Rehberi</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Yolda lastik problemi yaşadığınızda ne yapacağınızı hızlıca anlamanıza yardımcı olan kısa rehberler.
            </p>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/rehber/${guide.slug}`} className="rounded-lg border border-slate-200 p-5 transition hover:border-sky-300 hover:shadow-sm">
                <p className="text-xs font-semibold uppercase text-sky-700">{guide.readingTime}</p>
                <h2 className="mt-2 text-lg font-semibold text-slate-950">{guide.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}


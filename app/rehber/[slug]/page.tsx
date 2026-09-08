import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HeroActions, MobileCtaBar } from '@/components/cta-buttons';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getGuide, guides } from '@/data/guides';
import { serviceAreas } from '@/data/service-areas';
import { services } from '@/data/services';
import { articleSchema, breadcrumbSchema, createMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: `/rehber/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const breadcrumbs = [
    { name: 'Ana sayfa', href: '/' },
    { name: 'Rehber', href: '/rehber' },
    { name: guide.title, href: `/rehber/${guide.slug}` },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <section className="bg-slate-950 py-12 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Breadcrumbs items={breadcrumbs} />
              <p className="mt-8 text-sm font-semibold uppercase text-sky-300">{guide.readingTime}</p>
              <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">{guide.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-300">{guide.description}</p>
            </div>
          </section>
          <section className="bg-white py-14">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
              <div className="max-w-3xl">
                {guide.sections.map((section) => (
                  <section key={section.heading} className="mb-9">
                    <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
                    <p className="mt-3 leading-8 text-slate-700">{section.body}</p>
                  </section>
                ))}
                <div className="rounded-lg bg-slate-50 p-5">
                  <h2 className="text-xl font-bold text-slate-950">Yardım talebi gerekirse</h2>
                  <p className="mt-2 text-slate-600">
                    Konumunuzu paylaşarak mobil lastikçi, lastik yol yardım veya yerinde lastik değişimi için hızlıca iletişime geçebilirsiniz.
                  </p>
                  <div className="mt-5">
                    <HeroActions />
                  </div>
                </div>
              </div>
              <aside className="space-y-5">
                <div className="rounded-lg border border-slate-200 p-5">
                  <h2 className="text-lg font-bold text-slate-950">İlgili hizmetler</h2>
                  <div className="mt-4 grid gap-3 text-sm font-medium text-slate-700">
                    {services.slice(0, 4).map((service) => (
                      <Link key={service.slug} href={`/${service.slug}`} className="hover:text-sky-700">
                        {service.h1}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 p-5">
                  <h2 className="text-lg font-bold text-slate-950">Popüler bölgeler</h2>
                  <div className="mt-4 grid gap-3 text-sm font-medium text-slate-700">
                    {serviceAreas.slice(0, 6).map((area) => (
                      <Link key={area.slug} href={`/istanbul/${area.slug}`} className="hover:text-sky-700">
                        {area.district} lastikçi
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <JsonLd data={[breadcrumbSchema(breadcrumbs), articleSchema({ title: guide.title, description: guide.description, date: guide.date, path: `/rehber/${guide.slug}` })]} />
    </>
  );
}


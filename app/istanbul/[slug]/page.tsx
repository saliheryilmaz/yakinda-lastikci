import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HeroActions, MobileCtaBar } from '@/components/cta-buttons';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getServiceArea, serviceAreas } from '@/data/service-areas';
import { services } from '@/data/services';
import { breadcrumbSchema, createMetadata, faqSchema, serviceSchema } from '@/lib/seo';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  return createMetadata({
    title: area.title,
    description: area.description,
    path: `/istanbul/${area.slug}`,
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const breadcrumbs = [
    { name: 'Ana sayfa', href: '/' },
    { name: 'İstanbul lastikçi', href: '/istanbul/kadikoy-lastikci' },
    { name: area.district, href: `/istanbul/${area.slug}` },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-slate-950 py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-8 max-w-4xl">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{area.h1}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{area.intro}</p>
              <div className="mt-7">
                <HeroActions />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
            <article>
              <h2 className="text-2xl font-bold text-slate-950">{area.district} içinde acil durumda ne yapılır?</h2>
              <p className="mt-3 leading-7 text-slate-600">{area.emergencyNote}</p>
              <p className="mt-3 leading-7 text-slate-600">{area.localContext}</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-bold text-slate-950">Yakın mahalle ve bölgeler</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.nearby.map((place) => (
                  <span key={place} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700">
                    {place}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">{area.district} için ilgili hizmetler</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((service) => (
                <Link key={service.slug} href={`/${service.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-sky-300">
                  {area.district} {service.h1}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">Sık sorulan sorular</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200">
              {area.faqs.map((faq) => (
                <details key={faq.question} className="p-5">
                  <summary className="cursor-pointer list-none font-semibold text-slate-950">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <JsonLd data={[breadcrumbSchema(breadcrumbs), serviceSchema(area.h1, area.description, `/istanbul/${area.slug}`), faqSchema(area.faqs)]} />
    </>
  );
}

import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HeroActions, MobileCtaBar } from '@/components/cta-buttons';
import { JsonLd } from '@/components/json-ld';
import { LeadForm } from '@/components/lead-form';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getService, services } from '@/data/services';
import { breadcrumbSchema, createMetadata, faqSchema, serviceSchema } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: 'Ana sayfa', href: '/' },
    { name: service.h1, href: `/${service.slug}` },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-slate-950 py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{service.h1}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{service.summary}</p>
                <div className="mt-7">
                  <HeroActions />
                </div>
              </div>
              <LeadForm compact />
            </div>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Bu hizmet kimin için?</h2>
              <p className="mt-3 leading-7 text-slate-600">{service.intent}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <article key={benefit} className="rounded-lg border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">{benefit}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">Talep akışı</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {service.steps.map((step, index) => (
                <article key={step} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-sky-700">Adım {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-950">Sık sorulan sorular</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200">
              {service.faqs.map((faq) => (
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
      <JsonLd data={[breadcrumbSchema(breadcrumbs), serviceSchema(service.h1, service.description, `/${service.slug}`), faqSchema(service.faqs)]} />
    </>
  );
}


import { notFound } from 'next/navigation';
import { HeroActions, MobileCtaBar } from '@/components/cta-buttons';
import { JsonLd } from '@/components/json-ld';
import { LeadForm } from '@/components/lead-form';
import { getService, services } from '@/data/services';
import { createMetadata, serviceSchema } from '@/lib/seo';

export function generateStaticParams() {
  return [{ slug: 'mobil-lastikci' }, { slug: 'en-yakin-lastikci' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/lp/${service.slug}`,
    canonicalPath: `/${service.slug}`,
    noindex: true,
  });
}

export default async function AdsLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug && ['mobil-lastikci', 'en-yakin-lastikci'].includes(item.slug));
  if (!service) notFound();

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-300">Reklam trafiği için hızlı sayfa</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">{service.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{service.summary}</p>
            <div className="mt-7">
              <HeroActions />
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {service.steps.map((step) => (
                <span key={step} className="rounded-lg border border-white/10 bg-white/8 p-3">
                  {step}
                </span>
              ))}
            </div>
          </div>
          <LeadForm compact />
        </section>
      </main>
      <MobileCtaBar />
      <JsonLd data={serviceSchema(service.h1, service.description, `/lp/${service.slug}`)} />
    </>
  );
}


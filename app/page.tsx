import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Clock, MapPin, ShieldCheck, Wrench } from 'lucide-react';
import { HeroActions, MobileCtaBar, PhoneButton, WhatsappButton } from '@/components/cta-buttons';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TrackedLink } from '@/components/tracked-link';
import { siteConfig } from '@/config/site';
import { guides } from '@/data/guides';
import { serviceAreas } from '@/data/service-areas';
import { services } from '@/data/services';
import { createMetadata, faqSchema, localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/seo';

const homeFaqs = [
  {
    question: 'Konumumu paylaşmadan talep oluşturabilir miyim?',
    answer:
      'Evet. Konum izni vermek istemezseniz bulunduğunuz ilçeyi telefon veya WhatsApp üzerinden yazabilirsiniz.',
  },
  {
    question: 'Telefon numarası nereden değiştirilecek?',
    answer:
      'Telefon, WhatsApp ve şirket bilgileri merkezi site config dosyasından güncellenir.',
  },
  {
    question: 'Sitede sahte yorum veya puan var mı?',
    answer:
      'Hayır. Doğrulanmamış yorum, yıldız puanı, fiyat veya süre iddiası kullanılmamıştır.',
  },
];

export const metadata = createMetadata({
  title: 'En Yakın Mobil Lastikçi - 7/24 Lastik Yol Yardım',
  description:
    'Lastiğiniz patladıysa veya yolda kaldıysanız konumunuza en yakın mobil lastikçi desteğine telefon, WhatsApp veya konum paylaşımıyla ulaşın.',
});

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-sky-100">
                <Clock className="size-4" aria-hidden="true" />
                {siteConfig.hours}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                En Yakın Mobil Lastikçi - 7/24 Lastik Yol Yardım
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Lastiğiniz patladıysa veya yolda kaldıysanız konumunuza en yakın mobil lastikçi ekibine hızlıca ulaşın.
              </p>
              <div className="mt-7">
                <HeroActions />
              </div>
              <div className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-5">
                {['7/24 Hizmet', 'Yerinde Müdahale', 'Hızlı Yönlendirme', 'İstanbul Geneli', 'Otomobil / SUV / Hafif Ticari'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-sky-300" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900">
                <Image
                  src={siteConfig.image}
                  alt="Mobil lastikçi ekibinin yol kenarında lastik müdahalesi"
                  width={1792}
                  height={768}
                  priority
                  className="aspect-[4/3] w-full object-cover lg:aspect-[7/5]"
                />
              </div>
              <div className="mt-4 rounded-lg border border-white/10 bg-white/8 p-4 text-sm text-slate-300">
                Gerçek süre, fiyat ve uygunluk bilgisi telefon veya WhatsApp görüşmesinde netleşir.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Acil lastik sorunu mu yaşıyorsunuz?</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                Aracı zorlamadan güvenli noktada durun. Konumunuzu paylaşarak veya ilçenizi söyleyerek talep akışını başlatın.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px]">
              <PhoneButton label="Şimdi Ara" />
              <WhatsappButton label="WhatsApp" />
            </div>
          </div>
        </section>

        <section id="nasil-calisir" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Nasıl çalışır?"
              title="Üç adımda lastikçi talebi"
              text="Acil durumda kullanıcıyı düşündürmeyen, kısa ve ölçülebilir bir dönüşüm akışı."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['Konumunu paylaş', 'Harita linki veya ilçe bilgisiyle bulunduğunuz noktayı netleştirin.', MapPin],
                ['Sorunu bildir', 'Patlak, inik, değişim veya jant/lastik sorununu kısaca anlatın.', AlertTriangle],
                ['En yakın lastikçiye ulaş', 'Telefon veya WhatsApp üzerinden uygun yönlendirmeyi alın.', Wrench],
              ].map(([title, text, Icon]) => (
                <article key={String(title)} className="rounded-lg border border-slate-200 bg-white p-5">
                  <Icon className="size-7 text-sky-700" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Mobil lastikçi ve yol yardım sayfaları"
              text="Her hizmet sayfası ayrı title, description, canonical, FAQ ve Service schema altyapısıyla çalışır."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{service.h1}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Hizmet bölgeleri"
              title="İstanbul ilçe landing page altyapısı"
              text="İlçe verileri merkezi yönetilir; her sayfada özgün yerel bağlam, yakın bölgeler, FAQ ve CTA bulunur."
              dark
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <TrackedLink
                  key={area.slug}
                  href={`/istanbul/${area.slug}`}
                  eventLabel={area.district}
                  className="rounded-lg border border-white/10 bg-white/6 p-4 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  {area.district} mobil lastikçi
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Güven"
              title="Acil hizmet sitesi gibi net, abartısız ve ölçülebilir"
              text="Sitede doğrulanmamış hız, fiyat, yorum veya puan iddiası yok. Eksik işletme bilgileri config içinde açık placeholder olarak durur."
            />
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                'Telefon numarası görünür ve tıklanabilir.',
                'Konum sadece kullanıcı aksiyonuyla alınır.',
                'KVKK, gizlilik, çerez ve kullanım şartları sayfaları hazır.',
                'Google Ads event isimleri merkezi helper üzerinden çalışır.',
              ].map((item) => (
                <p key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-sky-700" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Rehber"
              title="Lastik sorunları için faydalı içerikler"
              text="Blog altyapısı Article schema ve iç linkleme için hazırlandı."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {guides.slice(0, 4).map((guide) => (
                <Link key={guide.slug} href={`/rehber/${guide.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-sky-300">
                  <p className="text-xs font-semibold uppercase text-sky-700">{guide.readingTime}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">{guide.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
                </Link>
              ))}
            </div>
            <Link href="/rehber" className="mt-6 inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-900 hover:bg-white">
              Tüm rehberleri gör
            </Link>
          </div>
        </section>

        <section id="sss" className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="SSS" title="Sık sorulan sorular" text="Sayfada görünen sorular FAQPage schema ile eşleşir." />
            <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {homeFaqs.map((faq) => (
                <details key={faq.question} className="group p-5">
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-700 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div>
              <h2 className="text-3xl font-bold">Lastik sorununuzu bekletmeyin</h2>
              <p className="mt-2 max-w-2xl text-sky-50">
                Telefonla arayın, WhatsApp&apos;tan yazın veya konum linkinizi göndererek talebinizi netleştirin.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px]">
              <PhoneButton label="Lastikçiyi Ara" />
              <WhatsappButton label="WhatsApp" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <JsonLd data={[websiteSchema(), organizationSchema(), localBusinessSchema(), faqSchema(homeFaqs)]} />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p className={`text-sm font-bold uppercase ${dark ? 'text-sky-300' : 'text-sky-700'}`}>{eyebrow}</p>
      <h2 className={`mt-2 max-w-3xl text-3xl font-bold leading-tight ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      <p className={`mt-3 max-w-3xl text-base leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
    </div>
  );
}

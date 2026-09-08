Mobil lastikci, lastik yol yardim ve ilce bazli SEO landing page altyapisi icin hazirlanmis production odakli native Next.js projesi.

Vercel, repository icindeki `next`, `react`, `react-dom` bagimliliklarini ve standart `next build` scriptini otomatik algilayarak projeyi Next.js framework olarak deploy edebilir.

## Kurulum

```bash
npm install
npm run dev
```

Yerel adres varsayilan olarak `http://localhost:3000/` olur.

Production ciktisini yerelde gormek icin:

```bash
npm run build
npm run start
```

## Build ve Kontroller

```bash
npm run build
npm run lint
npx tsc --noEmit
```

## Environment Variables

`.env.example` dosyasini `.env.local` olarak kopyalayip ihtiyac duydugunuz kimlikleri ekleyin:

```bash
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
```

Bu degerler bossa site hata vermez; tracking scriptleri devreye girmez.

## Google Tag Manager

1. GTM container ID degerini alin.
2. `.env.local` icinde `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` olarak ekleyin.
3. GTM icinde su event adlarini conversion olarak yapilandirin: `phone_click`, `whatsapp_click`, `location_click`, `location_success`, `service_area_click`.

## Google Ads Conversion

Google Ads veya GTM tarafinda donusum aksiyonlarini yukaridaki event adlarina baglayin. Telefon aramalari `tel:` linkleriyle, WhatsApp aksiyonlari `wa.me` linkleriyle, konum gonderimi ise tarayici Geolocation API ile olusturulan Google Maps linkiyle olculur.

## Telefon ve WhatsApp Degistirme

Tum iletisim bilgileri `config/site.ts` icinde yonetilir:

```ts
phoneDisplay: 'TELEFON_NUMARASI_BURAYA',
phoneHref: 'tel:TELEFON_NUMARASI_BURAYA',
whatsappNumber: '905XXXXXXXXX',
```

Canli yayindan once telefon, WhatsApp, sirket unvani, adres ve vergi bilgilerini gercek degerlerle degistirin.

## Yeni Ilce Ekleme

`data/service-areas.ts` icine yeni kayit ekleyin:

```ts
{
  slug: 'ornek-ilce-lastikci',
  district: 'Ornek Ilce',
  title: 'Ornek Ilce Mobil Lastikci | Lastik Yol Yardim',
  description: '...',
  h1: 'Ornek Ilce Mobil Lastikci ve Lastik Yol Yardim',
  intro: '...',
  emergencyNote: '...',
  localContext: '...',
  nearby: ['Mahalle 1', 'Mahalle 2'],
  faqs: areaFaqs('Ornek Ilce'),
}
```

Sayfa otomatik olarak `/istanbul/ornek-ilce-lastikci` adresinde uretilir, sitemap'e eklenir.

## Yeni SEO Hizmet Sayfasi Olusturma

`data/services.ts` icine yeni hizmet kaydi ekleyin. Sayfa otomatik olarak `/{slug}` adresinde olusur ve sitemap'e girer.

## Rehber Icerigi Ekleme

`data/guides.ts` icine yeni makale kaydi ekleyin. Sayfa `/rehber/{slug}` adresinde Article schema ile yayinlanir.

## SEO Altyapisi

Projede metadata API, canonical URL, robots.txt, sitemap.xml, BreadcrumbList, WebSite, Organization, AutoRepair, Service, FAQPage ve Article schema yapilari bulunur. Reklam landing page'leri `/lp/*` altinda noindex ve ana hizmet sayfasina canonical verecek sekilde ayarlanmistir.

# Yakında Lastikçi

Mobil lastikçi, lastik yol yardım ve ilçe bazlı SEO landing page altyapısı için hazırlanmış production odaklı Vinext/Next.js projesi.

## Kurulum

```bash
npm install
npm run dev
```

Yerel adres varsayılan olarak `http://localhost:3000/` olur.

## Build ve Kontroller

```bash
npm run build
npm run lint
npx tsc --noEmit
```

## Environment Variables

`.env.example` dosyasını `.env.local` olarak kopyalayıp ihtiyaç duyduğunuz kimlikleri ekleyin:

```bash
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
```

Bu değerler boşsa site hata vermez; tracking scriptleri devreye girmez.

## Google Tag Manager

1. GTM container ID değerini alın.
2. `.env.local` içinde `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` olarak ekleyin.
3. GTM içinde şu event adlarını conversion olarak yapılandırın: `phone_click`, `whatsapp_click`, `location_click`, `location_success`, `service_area_click`.

## Google Ads Conversion

Google Ads veya GTM tarafında dönüşüm aksiyonlarını yukarıdaki event adlarına bağlayın. Telefon aramaları `tel:` linkleriyle, WhatsApp aksiyonları `wa.me` linkleriyle, konum gönderimi ise tarayıcı Geolocation API ile oluşturulan Google Maps linkiyle ölçülür.

## Telefon ve WhatsApp Değiştirme

Tüm iletişim bilgileri `config/site.ts` içinde yönetilir:

```ts
phoneDisplay: 'TELEFON_NUMARASI_BURAYA',
phoneHref: 'tel:TELEFON_NUMARASI_BURAYA',
whatsappNumber: '905XXXXXXXXX',
```

Canlı yayından önce telefon, WhatsApp, şirket unvanı, adres ve vergi bilgilerini gerçek değerlerle değiştirin.

## Yeni İlçe Ekleme

`data/service-areas.ts` içine yeni kayıt ekleyin:

```ts
{
  slug: 'ornek-ilce-lastikci',
  district: 'Örnek İlçe',
  title: 'Örnek İlçe Mobil Lastikçi | Lastik Yol Yardım',
  description: '...',
  h1: 'Örnek İlçe Mobil Lastikçi ve Lastik Yol Yardım',
  intro: '...',
  emergencyNote: '...',
  localContext: '...',
  nearby: ['Mahalle 1', 'Mahalle 2'],
  faqs: areaFaqs('Ornek Ilce'),
}
```

Sayfa otomatik olarak `/istanbul/ornek-ilce-lastikci` adresinde üretilir, sitemap'e eklenir.

## Yeni SEO Hizmet Sayfası Oluşturma

`data/services.ts` içine yeni hizmet kaydı ekleyin. Sayfa otomatik olarak `/{slug}` adresinde oluşur ve sitemap'e girer.

## Rehber İçeriği Ekleme

`data/guides.ts` içine yeni makale kaydı ekleyin. Sayfa `/rehber/{slug}` adresinde Article schema ile yayınlanır.

## SEO Altyapısı

Projede metadata API, canonical URL, robots.txt, sitemap.xml, BreadcrumbList, WebSite, Organization, AutoRepair, Service, FAQPage ve Article schema yapıları bulunur. Reklam landing page'leri `/lp/*` altında noindex ve ana hizmet sayfasına canonical verecek şekilde ayarlanmıştır.

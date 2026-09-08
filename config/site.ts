export const siteConfig = {
  name: 'Yakinda Lastikci',
  displayName: 'Yakında Lastikçi',
  domain: 'https://yakindalastikci.com.tr',
  description:
    'Konumunuza en yakin mobil lastikci destegine ulasin. Lastik patlamasi, lastik degisimi ve lastik yol yardim talepleri icin 7/24 arama ve WhatsApp akisi.',
  phoneDisplay: 'TELEFON_NUMARASI_BURAYA',
  phoneHref: 'tel:TELEFON_NUMARASI_BURAYA',
  whatsappNumber: '905XXXXXXXXX',
  email: 'E-POSTA_BURAYA',
  companyLegalName: 'SIRKET_UNVANI_BURAYA',
  taxOffice: 'VERGI_DAIRESI_BURAYA',
  taxNumber: 'VERGI_NUMARASI_BURAYA',
  address: 'ACIK_ADRES_BURAYA',
  city: 'Istanbul',
  country: 'TR',
  hours: '7/24 yardim talebi alinabilir',
  image: '/images/mobile-lastik-yardim.png',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
};

export const defaultWhatsappMessage =
  'Merhaba, mobil lastikci destegine ihtiyacim var. Konumum:';

export function absoluteUrl(path = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(cleanPath, siteConfig.domain).toString();
}


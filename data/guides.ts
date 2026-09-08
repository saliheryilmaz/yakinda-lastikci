import type { GuideArticle } from '@/types/content';

export const guides: GuideArticle[] = [
  {
    slug: 'lastik-patlarsa-ne-yapilir',
    title: 'Lastik Patlarsa Ne Yapılır?',
    description:
      'Yolda lastik patladiginda guvenli durus, reflektor kullanimi ve lastik yol yardim talebi icin pratik adimlar.',
    date: '2026-09-08',
    readingTime: '4 dk',
    sections: [
      {
        heading: 'Once araci guvenli noktaya alin',
        body:
          'Direksiyonu sert hareketlerle cevirmeden yavaslayin, dortlu ikazlari yakin ve mumkunse yol disinda gorunur bir noktada durun.',
      },
      {
        heading: 'Hasari zorlamadan degerlendirin',
        body:
          'Lastik tamamen inmisse araci kullanmaya devam etmek janta zarar verebilir. Stepne, subap ve yanak hasari bilgisini not edin.',
      },
      {
        heading: 'Konumla yardim talebi olusturun',
        body:
          'Bulundugunuz ilceyi ve harita linkini paylasmak mobil lastikci talebinin daha dogru anlasilmasina yardimci olur.',
      },
    ],
  },
  {
    slug: 'stepne-yoksa-ne-yapilir',
    title: 'Stepne Yoksa Ne Yapılır?',
    description:
      'Stepnesiz araclarda patlak lastik durumunda yapilabilecek guvenli adimlar ve mobil lastikci talep bilgileri.',
    date: '2026-09-08',
    readingTime: '3 dk',
    sections: [
      {
        heading: 'Araci kullanmaya devam etmeyin',
        body:
          'Run flat lastik yoksa patlak lastikle ilerlemek jant ve suspansiyon icin risk olusturabilir.',
      },
      {
        heading: 'Lastik olcusunu hazirlayin',
        body:
          'Lastik yanagindaki olcu bilgisi, uygun cozumun degerlendirilmesine yardimci olur.',
      },
      {
        heading: 'Konum ve arac tipini iletin',
        body:
          'Stepne olmadigini bastan belirtin; arac tipi ve bulundugunuz nokta talep surecinde en kritik bilgilerdir.',
      },
    ],
  },
  {
    slug: 'lastik-basinci-kac-olmali',
    title: 'Lastik Basıncı Kaç Olmalı?',
    description:
      'Lastik basinclari icin arac etiketi, kullanim kosullari ve dusuk basincin yol guvenligine etkileri.',
    date: '2026-09-08',
    readingTime: '4 dk',
    sections: [
      {
        heading: 'Dogru deger arac ureticisinin etiketindedir',
        body:
          'Kapi icinde, yakit kapagi bolgesinde veya kullanim kilavuzunda onerilen basinclar yer alir.',
      },
      {
        heading: 'Dusuk basinc isinma ve asinma yaratabilir',
        body:
          'Lastik inik gorunuyorsa uzun sure kullanmadan once basinc kontrolu veya yardim talebi dusunulmelidir.',
      },
      {
        heading: 'Soguk lastikte olcum daha dogrudur',
        body:
          'Uzun yol sonrasi yapilan olcumler yuksek cikabilir; mumkunse lastik sogukken kontrol edin.',
      },
    ],
  },
  {
    slug: 'lastik-neden-surekli-hava-kacirir',
    title: 'Lastik Neden Sürekli Hava Kaçırır?',
    description:
      'Subap, jant, delik ve lastik yaslanmasi gibi surekli hava kacirma nedenleri icin rehber.',
    date: '2026-09-08',
    readingTime: '4 dk',
    sections: [
      {
        heading: 'Subap veya jant kaynakli olabilir',
        body:
          'Gozle gorulur delik olmasa bile subap, jant kenari veya eski tamir noktasi hava kacagina neden olabilir.',
      },
      {
        heading: 'Yanak hasari ciddiye alinmalidir',
        body:
          'Lastik yanagindaki yarik ve balonlar genellikle tamirden cok degisim gerektirebilir.',
      },
      {
        heading: 'Belirtiyi talepte anlatin',
        body:
          'Lastigin ne kadar surede indigi ve hangi kosulda fark edildigi cozumun degerlendirilmesini kolaylastirir.',
      },
    ],
  },
  {
    slug: 'run-flat-lastik-patlarsa-ne-olur',
    title: 'Run Flat Lastik Patlarsa Ne Olur?',
    description:
      'Run flat lastik patladiginda mesafe, hiz ve guvenlik konusunda dikkat edilmesi gerekenler.',
    date: '2026-09-08',
    readingTime: '3 dk',
    sections: [
      {
        heading: 'Arac ureticisinin limitlerini kontrol edin',
        body:
          'Run flat lastikler sinirli mesafe ve hizda ilerlemeye izin verebilir; kesin limit aracin kilavuzunda yer alir.',
      },
      {
        heading: 'Uyari isigi ihmal edilmemelidir',
        body:
          'Basinc uyarisindan sonra lastigi zorlamak hasari buyutebilir.',
      },
      {
        heading: 'Yardim talebinde lastik tipini belirtin',
        body:
          'Run flat bilgisini paylasmak uygun ekipman ve cozum degerlendirmesi icin onemlidir.',
      },
    ],
  },
  {
    slug: 'yolda-lastik-degistirmek-guvenli-mi',
    title: 'Yolda Lastik Değiştirmek Güvenli mi?',
    description:
      'Yol kenarinda lastik degistirmenin riskleri, guvenli durus ve yardim talebi icin dikkat edilmesi gerekenler.',
    date: '2026-09-08',
    readingTime: '4 dk',
    sections: [
      {
        heading: 'Trafik riski her zaman onceliklidir',
        body:
          'Dar emniyet seridi, viraj veya karanlik noktada lastik degistirmeye calismak tehlikeli olabilir.',
      },
      {
        heading: 'Gorunurluk saglayin',
        body:
          'Dortlu ikaz, reflektor ve uygun mesafe guvenlik icin temel adimlardir.',
      },
      {
        heading: 'Emin degilseniz yardim isteyin',
        body:
          'Ekipman, zemin veya trafik kosulu uygun degilse mobil lastikci veya yol yardim talebi daha guvenlidir.',
      },
    ],
  },
  {
    slug: 'mobil-lastikci-nedir',
    title: 'Mobil Lastikçi Nedir?',
    description:
      'Mobil lastikci hizmetinin ne oldugu, hangi durumlarda talep edildigi ve konum paylasiminin neden onemli oldugu.',
    date: '2026-09-08',
    readingTime: '3 dk',
    sections: [
      {
        heading: 'Servis ihtiyacini bulundugunuz noktaya tasir',
        body:
          'Mobil lastikci, lastik sorununuzu servis noktasina gitmeden iletmenizi saglayan yerinde destek modelidir.',
      },
      {
        heading: 'Talebin net olmasi sureci iyilestirir',
        body:
          'Arac tipi, lastik olcusu, sorun tipi ve konum bilgisi talebin dogru anlasilmasina yardimci olur.',
      },
      {
        heading: 'Acil ve planli ihtiyaclara uygundur',
        body:
          'Patlak lastik, inik lastik, yerinde degisim veya hava kacagi gibi farkli durumlarda talep olusturulabilir.',
      },
    ],
  },
  {
    slug: 'lastik-yol-yardim-nasil-calisir',
    title: 'Lastik Yol Yardım Nasıl Çalışır?',
    description:
      'Lastik yol yardim talebinde konum paylasimi, sorun bildirimi ve iletisim adimlari nasil ilerler?',
    date: '2026-09-08',
    readingTime: '3 dk',
    sections: [
      {
        heading: 'Talep konumla baslar',
        body:
          'Bulundugunuz noktanin dogru anlasilmasi icin harita linki veya acik adres paylasilir.',
      },
      {
        heading: 'Sorun tipi belirlenir',
        body:
          'Patlak, inik, degisim ihtiyaci veya jant sorunu gibi bilgi talebin dogru yonlendirilmesini saglar.',
      },
      {
        heading: 'Iletisim kanali secilir',
        body:
          'Acil durumda telefon, detayli bilgi veya fotograf icin WhatsApp daha uygun olabilir.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}


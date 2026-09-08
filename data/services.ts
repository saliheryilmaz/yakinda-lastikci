import type { ServicePage } from '@/types/content';

export const services: ServicePage[] = [
  {
    slug: 'mobil-lastikci',
    title: 'Mobil Lastikci | Yerinde Lastik Servisi',
    h1: 'Mobil Lastikci Desteği',
    description:
      'Mobil lastikci destegiyle lastik sorununuz icin bulundugunuz konumdan telefon veya WhatsApp uzerinden yardim talebi olusturun.',
    summary:
      'Aracinizi hareket ettirmeden lastik sorununuzu anlatin, konumunuzu paylasin ve size uygun yonlendirme alin.',
    intent:
      'Bu sayfa, servis noktasina gitmeden bulundugu yerde lastik yardimi arayan kullanicilar icin hazirlandi.',
    benefits: [
      'Telefon ve WhatsApp ile hizli talep akisi',
      'Konum linkiyle daha net yonlendirme',
      'Otomobil, SUV ve hafif ticari icin uygun talep yapisi',
      'Lastik patlamasi, inmesi ve degisim ihtiyaclari icin net bilgilendirme',
    ],
    steps: ['Konumunuzu paylasin', 'Lastik sorununu kisaca bildirin', 'Size en yakin uygun ekibe ulasin'],
    faqs: [
      {
        question: 'Mobil lastikci nasil cagirilir?',
        answer:
          'Telefonla arayabilir, WhatsApp mesaji baslatabilir veya konumunuzu paylasarak talep olusturabilirsiniz.',
      },
      {
        question: 'Konum bilgim saklaniyor mu?',
        answer:
          'Konum butonu yalnizca sizin aksiyonunuzla calisir. Site konumunuzu surekli izlemez veya kaydetmez.',
      },
    ],
  },
  {
    slug: 'en-yakin-lastikci',
    title: 'En Yakin Lastikci | Konuma Gore Lastik Yardim',
    h1: 'En Yakın Lastikçiye Ulaşın',
    description:
      'En yakin lastikci aramanizda konumunuzu paylasarak mobil lastikci ve lastik yol yardim talebi olusturun.',
    summary:
      'Yolda kaldiginiz noktayi netlestirin, ihtiyacinizi belirtin ve telefon ya da WhatsApp ile yardim akisini baslatin.',
    intent:
      'Acil arama niyeti yuksek kullanicilar icin en kisa aksiyon yolu: arama, WhatsApp ve konum.',
    benefits: [
      'Ilk ekranda arama ve WhatsApp aksiyonlari',
      'Google Maps linkiyle konum aktarimi',
      'Ilce sayfalarina dogal gecis',
      'Tekrarsiz ve niyete uygun bilgilendirme',
    ],
    steps: ['Guvenli noktada durun', 'Konum linkinizi hazirlayin', 'Telefon veya WhatsApp ile iletisim kurun'],
    faqs: [
      {
        question: 'En yakin lastikci aramasinda konum gerekir mi?',
        answer:
          'Konum paylasmak zorunlu degildir ancak dogru yonlendirme icin bulundugunuz ilce veya harita linki yardimci olur.',
      },
      {
        question: 'Sadece fiyat almak icin yazabilir miyim?',
        answer:
          'Evet. Fiyat ve uygunluk bilgisi icin lastik olcusu, arac tipi ve bulundugunuz ilceyi paylasmaniz yeterlidir.',
      },
    ],
  },
  {
    slug: 'lastik-yol-yardim',
    title: 'Lastik Yol Yardim | Acil Lastik Destegi',
    h1: 'Lastik Yol Yardım Hizmeti',
    description:
      'Lastik yol yardim ihtiyacinizda patlak, inik veya hasarli lastik icin konumunuzdan yardim talebi olusturun.',
    summary:
      'Yolda lastik problemi yasadiginizda guvenli adimlarla talep acmaniz icin tasarlanmis lastik yardim akisi.',
    intent:
      'Araci yolda kalan ve hemen ne yapacagini bilmek isteyen suruculere odaklanir.',
    benefits: [
      'Acil durum icin sade karar akisi',
      'Sorun tipine gore kisa talep formu',
      'Konum paylasma alternatifi',
      'Guvenli bekleme ve iletisim onerileri',
    ],
    steps: ['Araci guvenli alana alin', 'Dortluleri yakin', 'Konum ve sorun bilgisini iletin'],
    faqs: [
      {
        question: 'Lastik patladiginda yola devam edilir mi?',
        answer:
          'Genellikle devam etmek janta ve lastige zarar verebilir. Guvenli bir noktada durup destek talep etmek daha dogrudur.',
      },
      {
        question: 'Stepne yoksa yardim talep edebilir miyim?',
        answer:
          'Evet. Stepne olmadigini bastan belirtmeniz, uygun cozumun daha dogru degerlendirilmesine yardimci olur.',
      },
    ],
  },
  {
    slug: '7-24-lastikci',
    title: '7/24 Lastikci | Gece Gunduz Lastik Yardimi',
    h1: '7/24 Lastikçi Talebi Oluşturun',
    description:
      'Gece veya gunduz lastik sorunu yasadiginizda 7/24 telefon ve WhatsApp uzerinden lastikci talebi olusturun.',
    summary:
      'Mesai saati disinda lastik sorunu yasayanlar icin hizli, sade ve net iletisim yollarini one cikarir.',
    intent:
      'Gece, hafta sonu veya tatil gunlerinde acil lastikci arayan kullanicilar icindir.',
    benefits: [
      'Sabit mobil CTA bari',
      'Tek tikla arama',
      'WhatsApp hazir mesaj destegi',
      'Ilce bazli sayfalara gecis',
    ],
    steps: ['Telefon CTA ile arayin', 'Ulasamazsaniz WhatsApp mesaji gonderin', 'Konum veya ilce bilgisini ekleyin'],
    faqs: [
      {
        question: 'Gece lastikci talebi olusturabilir miyim?',
        answer:
          'Evet. Site 7/24 talep akisi icin hazirlandi. Gercek uygunluk bilgisi telefon veya WhatsApp uzerinden netlesir.',
      },
      {
        question: 'Calisma saati bilgisi nereden degistirilir?',
        answer:
          'Calisma saati metni merkezi site config dosyasindan duzenlenebilir.',
      },
    ],
  },
  {
    slug: 'patlak-lastik-yardimi',
    title: 'Patlak Lastik Yardimi | Yolda Lastik Destegi',
    h1: 'Patlak Lastik Yardımı',
    description:
      'Patlak lastik sorunu yasiyorsaniz konumunuzu paylasarak mobil lastikci veya lastik yol yardim talebi baslatin.',
    summary:
      'Patlak lastik durumunda guvenli durus, sorun bildirimi ve yardim talebi tek akista toplanir.',
    intent:
      'Lastigi patlayan ve zarar buyumeden destek almak isteyen suruculere yoneliktir.',
    benefits: [
      'Patlak lastik icin net bilgi akisi',
      'Stepne var/yok durumunu not alan form',
      'Konum linkiyle hizli tarif',
      'Jant hasari riskine dair yalins bilgilendirme',
    ],
    steps: ['Araci zorlamayin', 'Lastigin durumunu kisaca tarif edin', 'Konumunuzu iletin'],
    faqs: [
      {
        question: 'Patlak lastikle ne kadar gidilebilir?',
        answer:
          'Bu lastigin tipine ve hasara baglidir. Emin degilseniz araci kullanmaya devam etmeyip yardim istemeniz daha guvenlidir.',
      },
      {
        question: 'Jant zarar gorduyse ne yapmaliyim?',
        answer:
          'Jantta egilme veya kirik supheleniyorsaniz bunu talepte belirtin; cozum buna gore degerlendirilmelidir.',
      },
    ],
  },
  {
    slug: 'yerinde-lastik-degisimi',
    title: 'Yerinde Lastik Degisimi | Mobil Lastik Servisi',
    h1: 'Yerinde Lastik Değişimi',
    description:
      'Yerinde lastik degisimi ihtiyaciniz icin bulundugunuz ilceyi, arac tipini ve konumunuzu paylasarak talep olusturun.',
    summary:
      'Planli veya acil lastik degisimi ihtiyacinda servis noktasina gitmeden talep acmaniza yardimci olur.',
    intent:
      'Ev, is yeri veya yol kenarinda lastik degisimi arayan kullanicilar icindir.',
    benefits: [
      'Arac tipi ve sorun tipi alanlari',
      'Ilce secimli kisa form',
      'Telefon ve WhatsApp alternatifleri',
      'Mevsimsel degisim taleplerine uygun mimari',
    ],
    steps: ['Arac tipinizi secin', 'Bulundugunuz ilceyi belirtin', 'Uygun iletisim kanalindan talep gonderin'],
    faqs: [
      {
        question: 'Yerinde lastik degisiminde hangi bilgi gerekir?',
        answer:
          'Arac tipi, lastik olcusu, bulundugunuz ilce ve varsa mevcut lastigin durumu yardimci olur.',
      },
      {
        question: 'Ev veya is yerinde talep acilabilir mi?',
        answer:
          'Evet. Konum ve erisim bilgilerini paylasmaniz durumun daha iyi degerlendirilmesini saglar.',
      },
    ],
  },
  {
    slug: 'lastik-tamiri',
    title: 'Lastik Tamiri | Mobil Lastikci Talebi',
    h1: 'Lastik Tamiri İçin Yardım Talebi',
    description:
      'Lastik tamiri gerektiren inme, hava kacirma veya patlak durumlarinda mobil lastikci talebi olusturun.',
    summary:
      'Tamir edilebilir durumlar ile degisim gerektirebilecek hasarlar icin dogru bilgi paylasimini kolaylastirir.',
    intent:
      'Lastigi hava kaciran veya patlak olup tamir ihtimali arastiran kullanicilar icin hazirlandi.',
    benefits: [
      'Hasar tipini acik anlatan talep formu',
      'Gorsel veya not paylasmaya uygun WhatsApp akisi',
      'Tamir/degisim ayrimina yardim eden icerik',
      'Gereksiz iddia veya fiyat vaadi icermeyen copy',
    ],
    steps: ['Lastigin nasil indigini belirtin', 'Varsa delik veya hasar konumunu anlatin', 'Talebi telefon veya WhatsApp ile acin'],
    faqs: [
      {
        question: 'Her patlak lastik tamir edilir mi?',
        answer:
          'Hayir. Yanak hasari, buyuk yirtik veya jant kaynakli sorunlarda degisim gerekebilir. Kesin karar kontrolle verilir.',
      },
      {
        question: 'Lastik surekli hava kaciriyorsa sebep ne olabilir?',
        answer:
          'Subap, jant, delik veya lastik yaslanmasi gibi nedenler olabilir. Talep acarken bunu belirtmeniz faydalidir.',
      },
    ],
  },
  {
    slug: 'gece-lastikci',
    title: 'Gece Lastikçi | Gece Saatlerinde Lastik Yardımı',
    h1: 'Gece Lastikçi Desteği',
    description:
      'Gece saatlerinde lastik sorunu yaşıyorsanız telefon veya WhatsApp üzerinden gece lastikçi talebi oluşturun.',
    summary:
      'Gece lastik problemi yaşayan sürücüler için hızlı iletişim yollarını öne çıkarır; arama ve WhatsApp aksiyonları ilk ekranda.',
    intent:
      'Gece geç saatlerde yolda kalan ve acil lastikçi arayan sürücüler için hazırlandı.',
    benefits: [
      'Gece erişilebilir iletişim kanalları',
      'Sabit mobil CTA barı ile tek tıkla arama',
      'WhatsApp hazır mesaj desteği',
      'Konum linkiyle güvenli bekleme noktası bildirimi',
    ],
    steps: ['Güvenli ve aydınlık noktada durun', 'Telefon veya WhatsApp ile talep açın', 'Konum ve araç bilgisini iletin'],
    faqs: [
      {
        question: 'Gece lastikçi bulmak zor mu?',
        answer:
          'Uygunluk saate ve bölgeye göre değişir. Telefon veya WhatsApp üzerinden talep açarak gerçek bilgiyi alabilirsiniz.',
      },
      {
        question: 'Gece lastik yardımı için önceden bilgi vermem gerekiyor mu?',
        answer:
          'Hayır. Araç tipi, lastik ölçüsü ve konumunuzu talep anında paylaşmanız yeterlidir.',
      },
    ],
  },
  {
    slug: 'avrupa-yakasi-lastikci',
    title: 'Avrupa Yakası Lastikçi | Mobil Lastik Hizmeti',
    h1: 'Avrupa Yakası Lastikçi',
    description:
      'Avrupa Yakası\'nda lastik sorunu yaşıyorsanız konumunuzu paylaşarak mobil lastikçi talebi oluşturun.',
    summary:
      'Avrupa Yakası ilçelerinde lastik yardımı için telefon veya WhatsApp üzerinden hızlıca talep açın.',
    intent:
      'Avrupa Yakası\'nda yolda kalan ve en yakın mobil lastikçiye ulaşmak isteyen sürücüler için hazırlandı.',
    benefits: [
      'Avrupa Yakası ilçe sayfalarına kolay erişim',
      'Telefon ve WhatsApp ile hızlı talep akışı',
      'Konum linkiyle daha net yönlendirme',
      'Otomobil, SUV ve hafif ticari için uygun talep yapısı',
    ],
    steps: ['Güvenli noktada durun', 'İlçenizi veya konum linkinizi hazırlayın', 'Telefon veya WhatsApp ile iletişim kurun'],
    faqs: [
      {
        question: 'Avrupa Yakası\'nın tüm ilçelerinde hizmet var mı?',
        answer:
          'Gerçek kapsama bilgisi telefon veya WhatsApp üzerinden netleşir. İlçenizi belirterek talep açabilirsiniz.',
      },
      {
        question: 'Avrupa Yakası\'nda gece lastikçi talebi açılabilir mi?',
        answer:
          'Evet. 7/24 talep akışı için telefon ve WhatsApp üzerinden iletişim kurabilirsiniz.',
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}


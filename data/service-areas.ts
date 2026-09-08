import type { ServiceArea } from '@/types/content';

const areaFaqs = (district: string) => [
  {
    question: `${district} icin mobil lastikci talebi nasil olusturulur?`,
    answer:
      'Telefonla arayabilir, WhatsApp uzerinden yazabilir veya konumunuzu paylasarak talep akisini baslatabilirsiniz.',
  },
  {
    question: `${district} lastik yol yardim icin hangi bilgileri vermeliyim?`,
    answer:
      'Bulundugunuz nokta, arac tipi, sorun tipi ve varsa lastik olcusu talebin daha net degerlendirilmesine yardimci olur.',
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'kadikoy-lastikci',
    district: 'Kadıköy',
    title: 'Kadikoy Mobil Lastikci | 7/24 Lastik Yol Yardim',
    description:
      "Kadikoy'de mobil lastikci ve lastik yol yardim talebi. Lastiginiz patladiysa konumunuzu paylasin, size en yakin lastikciye ulasin.",
    h1: 'Kadıköy Mobil Lastikçi ve 7/24 Lastik Yol Yardım',
    intro:
      "Kadikoy'de sahil yolu, E-5 baglantilari ve yogun mahalle trafigi lastik arizasinda hizli iletisim ihtiyacini artirir.",
    emergencyNote:
      'Araciniz akisi engelliyorsa once guvenli bir noktaya gecin, ardindan konum linkinizi telefon veya WhatsApp ile iletin.',
    localContext:
      'Moda, Fenerbahce, Bostanci ve Kozyatagi taraflarinda adres tarifi yerine harita linki paylasmak hatali yonlendirme riskini azaltir.',
    nearby: ['Moda', 'Fenerbahçe', 'Bostancı', 'Kozyatağı'],
    faqs: areaFaqs('Kadikoy'),
  },
  {
    slug: 'atasehir-lastikci',
    district: 'Ataşehir',
    title: 'Atasehir Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Atasehir'de mobil lastikci, yerinde lastik degisimi ve acil lastik yol yardim talepleri icin hizli iletisim.",
    h1: 'Ataşehir Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Atasehir'de site otoparklari, ofis bolgeleri ve TEM baglantilari nedeniyle konumun net paylasilmasi onemlidir.",
    emergencyNote:
      'Kapali otopark veya site icindeyseniz giris kapisi bilgisini talep notuna ekleyin.',
    localContext:
      'Barbaros, Ataturk, Kucukbakkalkoy ve Ferhatpasa bolgelerinde arac erisim noktasi talep surecini kolaylastirir.',
    nearby: ['Barbaros', 'Atatürk', 'Küçükbakkalköy', 'Ferhatpaşa'],
    faqs: areaFaqs('Atasehir'),
  },
  {
    slug: 'maltepe-lastikci',
    district: 'Maltepe',
    title: 'Maltepe Mobil Lastikci | 7/24 Lastik Yardim',
    description:
      "Maltepe'de patlak lastik, lastik degisimi ve mobil lastikci talebi icin telefon, WhatsApp ve konum paylasimi.",
    h1: 'Maltepe Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      'Maltepe sahil hattindan E-5 cikislarina kadar lastik sorunu yasadiginiz noktayi harita linkiyle iletmek daha pratiktir.',
    emergencyNote:
      'Yol kenarinda beklerken reflektor ve dortlu ikaz kullanin; talepte arac tipinizi belirtin.',
    localContext:
      'Cevizli, Altaycesme, Zumrutevler ve Kucukyali cevresinde mahalle adi ile birlikte konum linki paylasabilirsiniz.',
    nearby: ['Cevizli', 'Altayçeşme', 'Zümrütevler', 'Küçükyalı'],
    faqs: areaFaqs('Maltepe'),
  },
  {
    slug: 'kartal-lastikci',
    district: 'Kartal',
    title: 'Kartal Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Kartal'da mobil lastikci destegi icin konumunuzu paylasin; patlak lastik ve yolda lastik degisimi taleplerinizi iletin.",
    h1: 'Kartal Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Kartal'da sahil yolu, sanayi cevresi ve D-100 aksinda lastik arizasi yasayan suruculer icin sade talep akisi kuruldu.",
    emergencyNote:
      'D-100 veya sahil yolu uzerindeyseniz yon bilgisini ve en yakin cikisi eklemek yardimci olur.',
    localContext:
      'Yakacik, Orhantepe, Cevizli ve Ugur Mumcu bolgelerinde konum paylasimi adres anlatimindan daha guvenilir olur.',
    nearby: ['Yakacık', 'Orhantepe', 'Cevizli', 'Uğur Mumcu'],
    faqs: areaFaqs('Kartal'),
  },
  {
    slug: 'pendik-lastikci',
    district: 'Pendik',
    title: 'Pendik Mobil Lastikci | Acil Lastik Yardimi',
    description:
      "Pendik'te mobil lastikci ve lastik yol yardim icin hizli arama, WhatsApp ve konum paylasimli talep akisi.",
    h1: 'Pendik Mobil Lastikçi ve Acil Lastik Yardımı',
    intro:
      'Pendik, havaalani baglantisi ve sahil yolu trafigiyle lastik sorununda konum bilgisinin kritik oldugu ilcelerden biridir.',
    emergencyNote:
      'Otoban baglantisinda kaldiginizda arac konumunu netlestirip guvenli mesafede bekleyin.',
    localContext:
      'Kurtkoy, Kaynarca, Gozdagi ve Camcesme cevresinde bulundugunuz site veya yol adi talebi netlestirir.',
    nearby: ['Kurtköy', 'Kaynarca', 'Gözdağı', 'Çamçeşme'],
    faqs: areaFaqs('Pendik'),
  },
  {
    slug: 'tuzla-lastikci',
    district: 'Tuzla',
    title: 'Tuzla Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Tuzla'da mobil lastikci, lastik tamiri ve yerinde lastik degisimi talepleri icin telefon ve WhatsApp.",
    h1: 'Tuzla Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Tuzla'da sanayi, tersane ve E-5 baglantilarinda lastik arizasi yasadiginizda konumu net iletmek sureci kolaylastirir.",
    emergencyNote:
      'Sanayi veya site girisindeyseniz guvenlik/giris kapisi bilgisini not alanina yazin.',
    localContext:
      'Aydinli, Icmeler, Orhanli ve Postane tarafinda arac erisim noktasi talep icin onemli olabilir.',
    nearby: ['Aydınlı', 'İçmeler', 'Orhanlı', 'Postane'],
    faqs: areaFaqs('Tuzla'),
  },
  {
    slug: 'uskudar-lastikci',
    district: 'Üsküdar',
    title: 'Uskudar Mobil Lastikci | 7/24 Lastik Yol Yardim',
    description:
      "Uskudar'da mobil lastikci ve lastik yol yardim talebi. Konumunuzu paylasin, telefon veya WhatsApp ile ulasin.",
    h1: 'Üsküdar Mobil Lastikçi ve 7/24 Lastik Yol Yardım',
    intro:
      "Uskudar'da sahil hatti, kopru baglantilari ve yokuşlu mahallelerde lastik sorunu hizli karar gerektirir.",
    emergencyNote:
      'Dar sokakta veya egimli noktada kaldiginizda aracin guvenli konumda oldugundan emin olun.',
    localContext:
      'Altunizade, Acibadem, Bulgurlu ve Kuzguncuk bolgelerinde yol tarifi yerine harita linki daha net sonuc verir.',
    nearby: ['Altunizade', 'Acıbadem', 'Bulgurlu', 'Kuzguncuk'],
    faqs: areaFaqs('Uskudar'),
  },
  {
    slug: 'umraniye-lastikci',
    district: 'Ümraniye',
    title: 'Umraniye Mobil Lastikci | Acil Lastikci',
    description:
      "Umraniye'de acil lastikci, mobil lastik servisi ve lastik yol yardim talepleri icin hizli iletisim sayfasi.",
    h1: 'Ümraniye Mobil Lastikçi ve Acil Lastikçi',
    intro:
      'Umraniye is merkezleri, site bolgeleri ve TEM baglantilariyla mobil lastikci aramalarinda yogun talep alan bir ilcedir.',
    emergencyNote:
      'Kapali otopark veya plaza girisinde kaldiginizda kat ve blok bilgisini ekleyin.',
    localContext:
      'Dudullu, Ihlamurkuyu, Yamanevler ve Serifali cevresinde konum + giris tarifi talebi hizlandirir.',
    nearby: ['Dudullu', 'Ihlamurkuyu', 'Yamanevler', 'Şerifali'],
    faqs: areaFaqs('Umraniye'),
  },
  {
    slug: 'cekmekoy-lastikci',
    district: 'Çekmeköy',
    title: 'Cekmekoy Mobil Lastikci | Yerinde Lastik Yardimi',
    description:
      "Cekmekoy'de mobil lastikci ve yerinde lastik degisimi icin telefon, WhatsApp ve konum destekli talep akisi.",
    h1: 'Çekmeköy Mobil Lastikçi ve Yerinde Lastik Yardımı',
    intro:
      "Cekmekoy'de orman yolu, site bolgeleri ve yeni yerlesim akslarinda dogru konum paylasimi ozellikle onemlidir.",
    emergencyNote:
      'Adres tarifiniz zorsa Google Maps linki ve en yakin bilinen nokta bilgisini birlikte iletin.',
    localContext:
      'Tasdelen, Alemdag, Madenler ve Hamidiye cevresinde mahalle bilgisi talep formunda yer alabilir.',
    nearby: ['Taşdelen', 'Alemdağ', 'Madenler', 'Hamidiye'],
    faqs: areaFaqs('Cekmekoy'),
  },
  {
    slug: 'sancaktepe-lastikci',
    district: 'Sancaktepe',
    title: 'Sancaktepe Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Sancaktepe'de lastik yol yardim ve mobil lastikci talebi icin konumunuzu paylasarak iletisime gecin.",
    h1: 'Sancaktepe Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      'Sancaktepe ana arterleri ve site yerlesimleri nedeniyle lastik arizasinda net konum bilgisi pratiklik saglar.',
    emergencyNote:
      'Araciniz yol ustundeyse guvenlik onlemini alin, sorun tipini tek cumleyle iletin.',
    localContext:
      'Samandira, Sarigazi, Yenidogan ve Emek tarafinda bulundugunuz cadde veya site adi yardimci olur.',
    nearby: ['Samandıra', 'Sarıgazi', 'Yenidoğan', 'Emek'],
    faqs: areaFaqs('Sancaktepe'),
  },
  {
    slug: 'beykoz-lastikci',
    district: 'Beykoz',
    title: 'Beykoz Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Beykoz'da mobil lastikci ve lastik yol yardim icin konum paylasimli arama ve WhatsApp aksiyonlari.",
    h1: 'Beykoz Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Beykoz'da sahil yolu, orman akslari ve genis mahalle dagilimi nedeniyle konum linki talep icin cok degerlidir.",
    emergencyNote:
      'Kirsal veya orman yolu uzerindeyseniz en yakin tabela, cikis veya isletme bilgisini de ekleyin.',
    localContext:
      'Kavacik, Pasabahce, Cengelkoy hattina yakin cikislar ve Riva yolu gibi noktalar icin harita linki kullanin.',
    nearby: ['Kavacık', 'Paşabahçe', 'Anadoluhisarı', 'Riva'],
    faqs: areaFaqs('Beykoz'),
  },
  {
    slug: 'bakirkoy-lastikci',
    district: 'Bakırköy',
    title: 'Bakirkoy Mobil Lastikci | Acil Lastik Yardimi',
    description:
      "Bakirkoy'de mobil lastikci, patlak lastik yardimi ve yerinde lastik degisimi talepleri icin hizli iletisim.",
    h1: 'Bakırköy Mobil Lastikçi ve Acil Lastik Yardımı',
    intro:
      'Bakirkoy sahil, AVM ve hastane cevrelerinde lastik sorunu yasadiginizda arac erisim bilgisini net paylasin.',
    emergencyNote:
      'Kapali otoparkta kaldiginizda yukseklik siniri ve kat bilgisini talep notuna ekleyin.',
    localContext:
      'Atakoy, Yesilkoy, Incirli ve Osmaniye cevresinde konum linki ile birlikte blok/giris bilgisi faydali olur.',
    nearby: ['Ataköy', 'Yeşilköy', 'İncirli', 'Osmaniye'],
    faqs: areaFaqs('Bakirkoy'),
  },
  {
    slug: 'bahcelievler-lastikci',
    district: 'Bahçelievler',
    title: 'Bahcelievler Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Bahcelievler'de mobil lastikci ve lastik yol yardim hizmet talebi icin telefon, WhatsApp ve konum aksiyonlari.",
    h1: 'Bahçelievler Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Bahcelievler'de E-5, metrobüs aksı ve mahalle içi yoğunluk lastik arizasinda dogru tarif ihtiyacini artirir.",
    emergencyNote:
      'Yogun caddede bekliyorsaniz arac konumunu ve gidis yonunu belirtin.',
    localContext:
      'Sirinevler, Yenibosna, Kocasinan ve Cumhuriyet cevresinde cadde bilgisi talep akisini netlestirir.',
    nearby: ['Şirinevler', 'Yenibosna', 'Kocasinan', 'Cumhuriyet'],
    faqs: areaFaqs('Bahcelievler'),
  },
  {
    slug: 'bagcilar-lastikci',
    district: 'Bağcılar',
    title: 'Bagcilar Mobil Lastikci | 7/24 Lastikci',
    description:
      "Bagcilar'da 7/24 lastikci talebi, mobil lastik servisi ve patlak lastik yardimi icin hizli aksiyonlar.",
    h1: 'Bağcılar Mobil Lastikçi ve 7/24 Lastikçi',
    intro:
      'Bagcilar sanayi, is merkezi ve mahalle trafigiyle lastik arizalarinda net konum paylasiminin onemli oldugu bir bolgedir.',
    emergencyNote:
      'Dar sokakta veya rampada kaldiginizda guvenli bekleme noktasina gecmeyi onceliklendirin.',
    localContext:
      'Gunesli, Mahmutbey, Kirazli ve Demirkapi cevresinde bina veya tesis adi talebe eklenebilir.',
    nearby: ['Güneşli', 'Mahmutbey', 'Kirazlı', 'Demirkapı'],
    faqs: areaFaqs('Bagcilar'),
  },
  {
    slug: 'basaksehir-lastikci',
    district: 'Başakşehir',
    title: 'Basaksehir Mobil Lastikci | Yerinde Lastik Degisimi',
    description:
      "Basaksehir'de mobil lastikci ve yerinde lastik degisimi icin ilce, arac tipi ve konum bilgisiyle talep olusturun.",
    h1: 'Başakşehir Mobil Lastikçi ve Yerinde Lastik Değişimi',
    intro:
      'Basaksehir genis bulvarlari, site yerlesimleri ve otoyol baglantilariyla talepte acik konum bilgisini gerekli kilar.',
    emergencyNote:
      'Site veya rezidans icindeyseniz blok, kapı ve güvenlik girisi bilgisini belirtin.',
    localContext:
      'Kayasehir, Bahcesehir, Ikitelli ve Altinsehir bolgelerinde harita linki yanina aciklama eklemek faydalidir.',
    nearby: ['Kayaşehir', 'Bahçeşehir', 'İkitelli', 'Altınşehir'],
    faqs: areaFaqs('Basaksehir'),
  },
  {
    slug: 'beylikduzu-lastikci',
    district: 'Beylikdüzü',
    title: 'Beylikduzu Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Beylikduzu'nde mobil lastikci ve lastik yol yardim talebi icin WhatsApp, telefon ve konum paylasimi.",
    h1: 'Beylikdüzü Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Beylikduzu'nde E-5, marina ve site bolgeleri lastik sorunu yasayan suruculer icin farkli erisim kosullari yaratir.",
    emergencyNote:
      'Kapali otopark veya site alani icindeyseniz arac erisim detaylarini talepte paylasin.',
    localContext:
      'Adnan Kahveci, Baris, Kavakli ve Gurpinar cevresinde konum linki servis noktasini netlestirir.',
    nearby: ['Adnan Kahveci', 'Barış', 'Kavaklı', 'Gürpınar'],
    faqs: areaFaqs('Beylikduzu'),
  },
  {
    slug: 'avcilar-lastikci',
    district: 'Avcılar',
    title: 'Avcilar Mobil Lastikci | Acil Lastik Yol Yardim',
    description:
      "Avcilar'da patlak lastik, mobil lastikci ve lastik yol yardim talepleri icin donusum odakli iletisim.",
    h1: 'Avcılar Mobil Lastikçi ve Acil Lastik Yol Yardım',
    intro:
      "Avcilar'da sahil, universite ve E-5 akslarinda lastik problemi yasandiginda konum aktarimi hizli anlasilmayi saglar.",
    emergencyNote:
      'E-5 uzerindeyseniz gidis yonu ve en yakin metrobüs duragi bilgisi yardimci olabilir.',
    localContext:
      'Ambarli, Denizkoskler, Firuzkoy ve Cihangir tarafinda mahalle bilgisi talebi destekler.',
    nearby: ['Ambarlı', 'Denizköşkler', 'Firuzköy', 'Cihangir'],
    faqs: areaFaqs('Avcilar'),
  },
  {
    slug: 'esenyurt-lastikci',
    district: 'Esenyurt',
    title: 'Esenyurt Mobil Lastikci | 7/24 Lastikci',
    description:
      "Esenyurt'ta mobil lastikci, 7/24 lastikci ve yerinde lastik degisimi taleplerinizi konumla iletin.",
    h1: 'Esenyurt Mobil Lastikçi ve 7/24 Lastikçi',
    intro:
      'Esenyurt genis yerlesim alani ve site yogunlugu nedeniyle konum linki paylasiminin cok faydali oldugu ilcelerden biridir.',
    emergencyNote:
      'Site icinde kaldiginizda blok, ada, giris kapisi veya güvenlik noktasi bilgisini ekleyin.',
    localContext:
      'Akbati cevresi, Cumhuriyet, Mehtercesme ve Incirtepe tarafinda adresi harita linkiyle destekleyin.',
    nearby: ['Cumhuriyet', 'Mehterçeşme', 'İncirtepe', 'Saadetdere'],
    faqs: areaFaqs('Esenyurt'),
  },
  {
    slug: 'kucukcekmece-lastikci',
    district: 'Küçükçekmece',
    title: 'Kucukcekmece Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Kucukcekmece'de mobil lastikci ve lastik yol yardim icin konum paylasimli hizli talep olusturun.",
    h1: 'Küçükçekmece Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Kucukcekmece'de basin ekspres, E-5 ve gol cevresi rotalarda lastik arizasi yasandiginda nokta tarifi onem kazanir.",
    emergencyNote:
      'Baglanti yolunda kaldiginizda hangi yonde oldugunuzu ve en yakin cikisi belirtin.',
    localContext:
      'Halkali, Sefakoy, Atakent ve Kanarya cevresinde konum linki talebin netlesmesini saglar.',
    nearby: ['Halkalı', 'Sefaköy', 'Atakent', 'Kanarya'],
    faqs: areaFaqs('Kucukcekmece'),
  },
  {
    slug: 'buyukcekmece-lastikci',
    district: 'Büyükçekmece',
    title: 'Buyukcekmece Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Buyukcekmece'de mobil lastikci ve lastik yol yardim talepleri icin telefon, WhatsApp ve konum aksiyonlari.",
    h1: 'Büyükçekmece Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Buyukcekmece'de sahil, yazlik bolgeler ve genis mesafeler nedeniyle dogru konum paylasimi talebin temelidir.",
    emergencyNote:
      'Ana yoldan uzakta kaldiysaniz harita linkine ek olarak en yakin bilinen noktayi yazin.',
    localContext:
      'Mimaroba, Kumburgaz, Celaliye ve Dizdariye cevresinde mahalle ve site adi talebi netlestirir.',
    nearby: ['Mimaroba', 'Kumburgaz', 'Celaliye', 'Dizdariye'],
    faqs: areaFaqs('Buyukcekmece'),
  },
  {
    slug: 'sisli-lastikci',
    district: 'Şişli',
    title: 'Sisli Mobil Lastikci | Acil Lastikci',
    description:
      "Sisli'de acil lastikci ve mobil lastik yol yardim talepleri icin hizli arama, WhatsApp ve konum paylasimi.",
    h1: 'Şişli Mobil Lastikçi ve Acil Lastikçi',
    intro:
      "Sisli'de yogun trafik, tek yonler ve otopark yapisi lastik yardim talebinde net erisim bilgisini gerekli kilar.",
    emergencyNote:
      'Dar sokak veya otoparkta kaldiginizda arac erisimi icin kat ve giris bilgisini ekleyin.',
    localContext:
      'Mecidiyekoy, Nisantasi, Bomonti ve Fulya tarafinda sokak adi ve yon bilgisi yardimci olur.',
    nearby: ['Mecidiyeköy', 'Nişantaşı', 'Bomonti', 'Fulya'],
    faqs: areaFaqs('Sisli'),
  },
  {
    slug: 'besiktas-lastikci',
    district: 'Beşiktaş',
    title: 'Besiktas Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Besiktas'ta mobil lastikci, patlak lastik yardimi ve 7/24 lastik yol yardim talebi icin iletisime gecin.",
    h1: 'Beşiktaş Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Besiktas'ta sahil, kopru baglantisi ve yogun mahalle dokusu lastik probleminde hizli konum paylasimini onemli kilar.",
    emergencyNote:
      'Kopru baglanti yollarinda kaldiginizda guvenli noktaya gecip gidis yonunuzu belirtin.',
    localContext:
      'Levent, Etiler, Ortakoy ve Akatlar cevresinde konum linki ile talep olusturabilirsiniz.',
    nearby: ['Levent', 'Etiler', 'Ortaköy', 'Akatlar'],
    faqs: areaFaqs('Besiktas'),
  },
  {
    slug: 'sariyer-lastikci',
    district: 'Sarıyer',
    title: 'Sariyer Mobil Lastikci | Yerinde Lastik Yardimi',
    description:
      "Sariyer'de mobil lastikci ve yerinde lastik degisimi talepleri icin telefon, WhatsApp ve konum paylasimi.",
    h1: 'Sarıyer Mobil Lastikçi ve Yerinde Lastik Yardımı',
    intro:
      "Sariyer'de sahil yolu, orman yollari ve site bolgeleri lastik arizasinda erisim bilgisini kritik hale getirir.",
    emergencyNote:
      'Uzun yol veya orman cevresinde kaldiginizda en yakin tabela veya cikis bilgisini de belirtin.',
    localContext:
      'Maslak, Istinye, Zekeriyakoy ve Tarabya cevresinde harita linki talep icin en net yoldur.',
    nearby: ['Maslak', 'İstinye', 'Zekeriyaköy', 'Tarabya'],
    faqs: areaFaqs('Sariyer'),
  },
  {
    slug: 'kagithane-lastikci',
    district: 'Kağıthane',
    title: 'Kagithane Mobil Lastikci | Acil Lastik Yardimi',
    description:
      "Kagithane'de mobil lastikci ve acil lastik yardimi icin konum destekli telefon ve WhatsApp aksiyonlari.",
    h1: 'Kağıthane Mobil Lastikçi ve Acil Lastik Yardımı',
    intro:
      "Kagithane'de tunel, TEM baglantisi ve yokuşlu mahallelerde lastik sorunu yasandiginda net nokta tarifi onemlidir.",
    emergencyNote:
      'Yol kenarinda beklerken arac guvenligini saglayin ve bulundugunuz yonu belirtin.',
    localContext:
      'Seyrantepe, Caglayan, Gultepe ve Hamidiye cevresinde cadde ve giris bilgisi talebi destekler.',
    nearby: ['Seyrantepe', 'Çağlayan', 'Gültepe', 'Hamidiye'],
    faqs: areaFaqs('Kagithane'),
  },
  {
    slug: 'eyupsultan-lastikci',
    district: 'Eyüpsultan',
    title: 'Eyupsultan Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Eyupsultan'da mobil lastikci ve lastik yol yardim talepleri icin hizli arama, WhatsApp ve konum paylasimi.",
    h1: 'Eyüpsultan Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Eyupsultan'da Alibeykoy, Kemerburgaz ve ana yol akslari arasinda lastik sorunu yasandiginda konum kritik olur.",
    emergencyNote:
      'Kemerburgaz veya orman yolu cevresinde en yakin bilinen noktayi talebe ekleyin.',
    localContext:
      'Alibeykoy, Gokturk, Rami ve Yesilpinar bolgelerinde mahalle + harita linki kullanin.',
    nearby: ['Alibeyköy', 'Göktürk', 'Rami', 'Yeşilpınar'],
    faqs: areaFaqs('Eyupsultan'),
  },
  {
    slug: 'fatih-lastikci',
    district: 'Fatih',
    title: 'Fatih Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Fatih'te mobil lastikci, patlak lastik ve yerinde lastik yardimi icin telefon ve WhatsApp uzerinden talep olusturun.",
    h1: 'Fatih Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Fatih'te tarihi yarimada trafigi, tek yonler ve otopark kisitlari lastik yardiminda erisim bilgisini on plana cikarir.",
    emergencyNote:
      'Dar sokakta kaldiginizda arac erisimi icin sokak adi ve uygun bekleme noktasini belirtin.',
    localContext:
      'Aksaray, Findikzade, Eminonu ve Balat tarafinda konum linki yaninda kisa tarif faydali olur.',
    nearby: ['Aksaray', 'Fındıkzade', 'Eminönü', 'Balat'],
    faqs: areaFaqs('Fatih'),
  },
  {
    slug: 'zeytinburnu-lastikci',
    district: 'Zeytinburnu',
    title: 'Zeytinburnu Mobil Lastikci | Acil Lastikci',
    description:
      "Zeytinburnu'nda acil lastikci ve mobil lastik yol yardim talebi icin konumunuzu paylasarak iletisime gecin.",
    h1: 'Zeytinburnu Mobil Lastikçi ve Acil Lastikçi',
    intro:
      "Zeytinburnu'nda sahil yolu, E-5 ve sanayi cevresi lastik arizalarinda hizli iletisim ihtiyacini artirir.",
    emergencyNote:
      'Ana arterde kaldiginizda gidis yonu ve en yakin cikis bilgisini iletin.',
    localContext:
      'Merkezefendi, Kazlicesme, Veliefendi ve Seyitnizam cevresinde konum linki talebi kolaylastirir.',
    nearby: ['Merkezefendi', 'Kazlıçeşme', 'Veliefendi', 'Seyitnizam'],
    faqs: areaFaqs('Zeytinburnu'),
  },
  {
    slug: 'bayrampasa-lastikci',
    district: 'Bayrampaşa',
    title: 'Bayrampasa Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Bayrampasa'da mobil lastikci, yerinde lastik degisimi ve lastik yol yardim talepleri icin hizli aksiyonlar.",
    h1: 'Bayrampaşa Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Bayrampasa'da otogar, sanayi ve baglanti yollari cevresinde lastik problemi yasandiginda konum bilgisi onemlidir.",
    emergencyNote:
      'Otogar veya sanayi alaninda kaldiginizda kapi, peron veya blok bilgisini not edin.',
    localContext:
      'Kocatepe, Yildirim, Terazidere ve Muratpasa cevresinde harita linki ile talep olusturabilirsiniz.',
    nearby: ['Kocatepe', 'Yıldırım', 'Terazidere', 'Muratpaşa'],
    faqs: areaFaqs('Bayrampasa'),
  },
  {
    slug: 'gaziosmanpasa-lastikci',
    district: 'Gaziosmanpaşa',
    title: 'Gaziosmanpasa Mobil Lastikci | 7/24 Lastikci',
    description:
      "Gaziosmanpasa'da 7/24 lastikci, mobil lastikci ve acil lastik yardimi taleplerinizi telefon veya WhatsApp ile iletin.",
    h1: 'Gaziosmanpaşa Mobil Lastikçi ve 7/24 Lastikçi',
    intro:
      "Gaziosmanpasa'da mahalle ici yogunluk ve ana yol baglantilari lastik yardim talebinde net adres bilgisini gerekli kilar.",
    emergencyNote:
      'Yol uzerinde kaldiginizda arac guvenligini saglayip konum linkinizi paylasin.',
    localContext:
      'Karadeniz, Mevlana, Pazariçi ve Yenimahalle cevresinde mahalle + cadde bilgisi kullanilabilir.',
    nearby: ['Karadeniz', 'Mevlana', 'Pazariçi', 'Yenimahalle'],
    faqs: areaFaqs('Gaziosmanpasa'),
  },
  {
    slug: 'sultangazi-lastikci',
    district: 'Sultangazi',
    title: 'Sultangazi Mobil Lastikci | Lastik Yol Yardim',
    description:
      "Sultangazi'de mobil lastikci ve lastik yol yardim talepleri icin konum paylasimli arama ve WhatsApp akisi.",
    h1: 'Sultangazi Mobil Lastikçi ve Lastik Yol Yardım',
    intro:
      "Sultangazi'de ana arterler, sanayi cevresi ve mahalle yollarinda lastik sorunu yasandiginda hizli talep akisi gerekir.",
    emergencyNote:
      'Gidis yonu, en yakin cadde ve varsa is yeri/site adini talebe ekleyin.',
    localContext:
      'Habibler, Cebeci, Esentepe ve Zubeyde Hanim cevresinde konum linki kullanmak dogru yonlendirme saglar.',
    nearby: ['Habibler', 'Cebeci', 'Esentepe', 'Zübeyde Hanım'],
    faqs: areaFaqs('Sultangazi'),
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}


import { Language } from "./translations";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  process: string[];
  benefits: string[];
  duration: string;
}

const servicesData: Record<Language, Service[]> = {
  en: [
    {
      id: "hollywood-smile",
      title: "Hollywood Smile Design",
      description:
        "A customized smile makeover using digital design to create perfect harmony with your facial features.",
      image: "/hollywood-smile.webp",
      fullDescription:
        "Our Hollywood Smile Design is a comprehensive aesthetic treatment that aims to give you the perfect smile you've always dreamed of. Using advanced Digital Smile Design (DSD) technology, we analyze your facial structure, lip line, and personality to design a smile that is uniquely yours. This treatment often involves a combination of veneers, crowns, and sometimes gingival aesthetics to achieve optimal results.",
      process: [
        "Initial Consultation & 3D Scanning",
        "Digital Smile Design & Mock-up",
        "Teeth Preparation (Minimal invasive)",
        "Trial Fitting",
        "Final Bonding & Polishing",
      ],
      benefits: [
        "Perfectly aligned and white teeth",
        "Boost in self-confidence",
        "Custom-designed for your face",
        "Long-lasting results",
      ],
      duration: "5-7 Days",
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      description:
        "Permanent solution for missing teeth using top-grade titanium implants.",
      image: "/implant.jpg",
      fullDescription:
        "Dental implants are the gold standard for replacing missing teeth. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth. We use premium brands like Straumann and Nobel Biocare to ensure longevity and biocompatibility. The implant acts as a replacement for the tooth root, preventing bone loss and maintaining facial structure.",
      process: [
        "Consultation & CT Scan",
        "Implant Placement Surgery",
        "Healing Period (Osseointegration)",
        "Abutment Placement",
        "Crown/Bridge Attachment",
      ],
      benefits: [
        "Looks and feels like natural teeth",
        "Prevents bone loss",
        "Durability (can last a lifetime)",
        "Improved speech and eating",
      ],
      duration: "2 Visits (3-6 Months apart)",
    },
    {
      id: "laser-whitening",
      title: "Laser Teeth Whitening",
      description:
        "Instant and safe whitening for a brighter smile in just one hour.",
      image: "/laser-teeth-whitening.webp",
      fullDescription:
        "Our professional laser teeth whitening treatment is the fastest way to brighten your smile. We use the latest laser technology to activate a high-concentration whitening gel, removing deep stains and discoloration caused by coffee, tea, smoking, or aging. It is safe, effective, and delivers immediate results up to 8 shades lighter.",
      process: [
        "Dental Cleaning",
        "Gum Protection Application",
        "Whitening Gel Application",
        "Laser Activation (3-4 cycles)",
        "Fluoride Application for sensitivity",
      ],
      benefits: [
        "Immediate results",
        "Safe for enamel",
        "Removes stubborn stains",
        "Boosts confidence",
      ],
      duration: "1 Hour",
    },
    {
      id: "zirconia-crowns",
      title: "Zirconia Crowns",
      description:
        "Metal-free, highly durable, and aesthetic crowns that look completely natural.",
      image: "/zirkonyum.webp",
      fullDescription:
        "Zirconia crowns are the perfect blend of strength and aesthetics. Unlike traditional metal-fused crowns, Zirconia is biocompatible and allows light to pass through, mimicking the translucency of natural teeth. They are ideal for both front and back teeth due to their extreme durability and natural appearance.",
      process: [
        "Tooth Preparation",
        "Digital Impression",
        "Temporary Crown Placement",
        "Laboratory Fabrication (CAD/CAM)",
        "Final Cementation",
      ],
      benefits: [
        "Superior aesthetics",
        "High strength",
        "Biocompatible (no metal)",
        "No dark lines at gum level",
      ],
      duration: "3-5 Days",
    },
    {
      id: "invisalign",
      title: "Invisalign",
      description:
        "Clear aligners to straighten your teeth discreetly without metal braces.",
      image: "/invisalign.webp",
      fullDescription:
        "Invisalign offers a modern approach to straightening teeth using a custom-made series of aligners created for you and only you. These aligner trays are made of smooth, comfortable and virtually invisible plastic that you wear over your teeth. Wearing the aligners will gradually and gently shift your teeth into place, based on the exact movements your dentist plans out for you.",
      process: [
        "3D Scan & Simulation",
        "Custom Aligner Fabrication",
        "Fitting & Attachments",
        "Regular Check-ups (can be remote)",
        "Retainers",
      ],
      benefits: [
        "Virtually invisible",
        "Removable for eating/cleaning",
        "Comfortable",
        "Predictable results",
      ],
      duration: "6-18 Months",
    },
    {
      id: "full-mouth-rehab",
      title: "Full Mouth Rehab",
      description:
        "Complete restoration of function and aesthetics for complex cases.",
      image: "/full-mouth.jpeg",
      fullDescription:
        "Full mouth rehabilitation is a highly individualized treatment plan used to restore the health, function, and appearance of the entire mouth. This is ideal for patients with severe tooth wear, multiple missing teeth, or advanced gum disease. It combines various treatments like implants, crowns, veneers, and bridges to rebuild your smile from the foundation up.",
      process: [
        "Comprehensive Diagnosis",
        "Treatment Planning",
        "Surgical Phase (if needed)",
        "Restorative Phase",
        "Final Adjustments",
      ],
      benefits: [
        "Restored chewing function",
        "Pain relief",
        "Total aesthetic transformation",
        "Improved overall health",
      ],
      duration: "Varies (Custom Plan)",
    },
  ],
  tr: [
    {
      id: "hollywood-smile",
      title: "Hollywood Gülüş Tasarımı",
      description:
        "Yüz özelliklerinizle mükemmel uyum sağlamak için dijital tasarım kullanılarak yapılan kişiye özel gülüş estetiği.",
      image: "/hollywood-smile.webp",
      fullDescription:
        "Hollywood Gülüş Tasarımı, her zaman hayalini kurduğunuz mükemmel gülüşe sahip olmanızı hedefleyen kapsamlı bir estetik tedavidir. Gelişmiş Dijital Gülüş Tasarımı (DSD) teknolojisini kullanarak, yüz yapınızı, dudak hattınızı ve karakterinizi analiz ediyor ve tamamen size özel bir gülüş tasarlıyoruz. Bu tedavi genellikle ideal sonucu elde etmek için yaprak porselenler (lamina), kronlar ve bazen diş eti estetiğini içerir.",
      process: [
        "İlk Muayene & 3D Tarama",
        "Dijital Gülüş Tasarımı & Mock-up",
        "Diş Hazırlığı (Minimal invaziv)",
        "Prova",
        "Final Yapıştırma & Parlatma",
      ],
      benefits: [
        "Mükemmel sıralanmış beyaz dişler",
        "Özgüven artışı",
        "Yüzünüze özel tasarım",
        "Uzun ömürlü sonuçlar",
      ],
      duration: "5-7 Gün",
    },
    {
      id: "dental-implants",
      title: "Diş İmplantları",
      description:
        "Eksik dişler için üst kalite titanyum implantlar ile kalıcı çözüm.",
      image: "/implant.jpg",
      fullDescription:
        "Diş implantları, eksik dişlerin telafisi için altın standarttır. Doğal dişlerinizle eşleşecek şekilde yapılan sabit veya hareketli protezler için güçlü bir temel oluştururlar. Uzun ömürlülük ve biyouyumluluk sağlamak için Straumann ve Nobel Biocare gibi premium markalar kullanıyoruz. İmplant, diş kökünün yerini alarak kemik erimesini önler ve yüz yapısını korur.",
      process: [
        "Muayene & Tomografi",
        "İmplant Cerrahi İşlemi",
        "İyileşme Süreci (Osseointegrasyon)",
        "Abutment Yerleşimi",
        "Kron/Köprü Takılması",
      ],
      benefits: [
        "Doğal diş gibi hissettirir",
        "Kemik erimesini önler",
        "Dayanıklılık (ömür boyu kullanılabilir)",
        "Konuşma ve yemede iyileşme",
      ],
      duration: "2 Ziyaret (3-6 Ay arayla)",
    },
    {
      id: "laser-whitening",
      title: "Lazer Diş Beyazlatma",
      description:
        "Sadece bir saatte daha parlak bir gülüş için anında ve güvenli beyazlatma.",
      image: "/laser-teeth-whitening.webp",
      fullDescription:
        "Profesyonel lazer diş beyazlatma tedavimiz, gülüşünüzü parlatmanın en hızlı yoludur. Yüksek konsantrasyonlu beyazlatma jelini aktive etmek için en son lazer teknolojisini kullanıyoruz; kahve, çay, sigara veya yaşlanma kaynaklı derin lekeleri gideriyoruz. Güvenli, etkili ve 8 tona kadar daha açık renk sağlayan anında sonuçlar sunar.",
      process: [
        "Diş Temizliği",
        "Diş Eti Koruması",
        "Beyazlatma Jeli Uygulaması",
        "Lazer Aktivasyonu (3-4 döngü)",
        "Hassasiyet için Florür Uygulaması",
      ],
      benefits: [
        "Anında sonuç",
        "Diş minesine zarar vermez",
        "İnatçı lekeleri giderir",
        "Özgüveni artırır",
      ],
      duration: "1 Saat",
    },
    {
      id: "zirconia-crowns",
      title: "Zirkonyum Kronlar",
      description:
        "Tamamen doğal görünen, metal içermeyen, son derece dayanıklı ve estetik kaplamalar.",
      image: "/zirkonyum.webp",
      fullDescription:
        "Zirkonyum kaplamalar, güç ve estetiğin mükemmel birleşimidir. Geleneksel metal destekli porselenlerin aksine, Zirkonyum biyouyumludur ve ışığın geçmesine izin vererek doğal dişlerin şeffaflığını taklit eder. Aşırı dayanıklılıkları ve doğal görünümleri nedeniyle hem ön hem de arka dişler için idealdirler.",
      process: [
        "Diş Hazırlığı",
        "Dijital Ölçü",
        "Geçici Kron Takılması",
        "Laboratuvar Üretimi (CAD/CAM)",
        "Final Simantasyon",
      ],
      benefits: [
        "Üstün estetik",
        "Yüksek dayanıklılık",
        "Biyouyumlu (metal yok)",
        "Diş eti seviyesinde morluk olmaz",
      ],
      duration: "3-5 Gün",
    },
    {
      id: "invisalign",
      title: "Şeffaf Plak (Invisalign)",
      description:
        "Metal teller olmadan dişlerinizi gizlice düzeltmek için şeffaf plaklar.",
      image: "/invisalign.webp",
      fullDescription:
        "Invisalign, sadece sizin için üretilen özel bir plak serisi kullanarak dişleri düzeltmek için modern bir yaklaşım sunar. Bu plaklar, dişlerinizin üzerine taktığınız pürüzsüz, rahat ve neredeyse görünmez plastikten yapılmıştır. Plakları takmak, diş hekiminizin sizin için planladığı kesin hareketlere dayanarak dişlerinizi yavaşça ve nazikçe yerine kaydıracaktır.",
      process: [
        "3D Tarama & Simülasyon",
        "Özel Plak Üretimi",
        "Uyumlama & Ataşmanlar",
        "Düzenli Kontroller (uzaktan olabilir)",
        "Pekiştirme",
      ],
      benefits: [
        "Neredeyse görünmez",
        "Yemek/temizlik için çıkarılabilir",
        "Konforlu",
        "Öngörülebilir sonuçlar",
      ],
      duration: "6-18 Ay",
    },
    {
      id: "full-mouth-rehab",
      title: "Full Ağız Rehabilitasyonu",
      description:
        "Karmaşık vakalar için fonksiyon ve estetiğin tam restorasyonu.",
      image: "/full-mouth.jpeg",
      fullDescription:
        "Tam ağız rehabilitasyonu, tüm ağzın sağlığını, fonksiyonunu ve görünümünü geri kazandırmak için kullanılan son derece kişiselleştirilmiş bir tedavi planıdır. Bu, şiddetli diş aşınması, çoklu diş kaybı veya ileri diş eti hastalığı olan hastalar için idealdir. Gülüşünüzü temelden yeniden inşa etmek için implantlar, kronlar, laminalar ve köprüler gibi çeşitli tedavileri birleştirir.",
      process: [
        "Kapsamlı Teşhis",
        "Tedavi Planlaması",
        "Cerrahi Faz (gerekirse)",
        "Restoratif Faz",
        "Final Düzenlemeler",
      ],
      benefits: [
        "Çiğneme fonksiyonunun geri kazanılması",
        "Ağrı giderme",
        "Tam estetik dönüşüm",
        "Genel sağlıkta iyileşme",
      ],
      duration: "Değişken (Özel Plan)",
    },
  ],
  de: [
    {
      id: "hollywood-smile",
      title: "Hollywood Smile Design",
      description:
        "Ein individuelles Lächeln-Makeover mit digitalem Design für perfekte Harmonie mit Ihren Gesichtszügen.",
      image: "/hollywood-smile.webp",
      fullDescription:
        "Unser Hollywood Smile Design ist eine umfassende ästhetische Behandlung, die darauf abzielt, Ihnen das perfekte Lächeln zu schenken, von dem Sie immer geträumt haben. Mit fortschrittlicher Digital Smile Design (DSD) Technologie analysieren wir Ihre Gesichtsstruktur, Lippenlinie und Persönlichkeit, um ein Lächeln zu entwerfen, das einzigartig für Sie ist. Diese Behandlung umfasst oft eine Kombination aus Veneers, Kronen und manchmal Zahnfleischästhetik für optimale Ergebnisse.",
      process: [
        "Erstberatung & 3D-Scan",
        "Digitales Lächeln-Design & Mock-up",
        "Zahnvorbereitung (Minimalinvasiv)",
        "Anprobe",
        "Endgültige Befestigung & Polieren",
      ],
      benefits: [
        "Perfekt ausgerichtete und weiße Zähne",
        "Steigerung des Selbstvertrauens",
        "Individuell für Ihr Gesicht entworfen",
        "Langanhaltende Ergebnisse",
      ],
      duration: "5-7 Tage",
    },
    {
      id: "dental-implants",
      title: "Zahnimplantate",
      description:
        "Dauerhafte Lösung für fehlende Zähne mit hochwertigen Titanimplantaten.",
      image: "/implant.jpg",
      fullDescription:
        "Zahnimplantate sind der Goldstandard für den Ersatz fehlender Zähne. Sie bieten ein starkes Fundament für feste oder herausnehmbare Ersatzzähne, die so angefertigt sind, dass sie Ihren natürlichen Zähnen entsprechen. Wir verwenden Premiummarken wie Straumann und Nobel Biocare, um Langlebigkeit und Biokompatibilität zu gewährleisten. Das Implantat ersetzt die Zahnwurzel, verhindert Knochenschwund und erhält die Gesichtsstruktur.",
      process: [
        "Beratung & CT-Scan",
        "Implantationschirurgie",
        "Heilungsphase (Osseointegration)",
        "Abutment-Platzierung",
        "Krone/Brücke Befestigung",
      ],
      benefits: [
        "Sieht aus und fühlt sich an wie natürliche Zähne",
        "Verhindert Knochenschwund",
        "Haltbarkeit (kann ein Leben lang halten)",
        "Verbessertes Sprechen und Essen",
      ],
      duration: "2 Besuche (3-6 Monate Abstand)",
    },
    {
      id: "laser-whitening",
      title: "Laser-Zahnaufhellung",
      description:
        "Sofortige und sichere Aufhellung für ein strahlenderes Lächeln in nur einer Stunde.",
      image: "/laser-teeth-whitening.webp",
      fullDescription:
        "Unsere professionelle Laser-Zahnaufhellung ist der schnellste Weg, Ihr Lächeln aufzuhellen. Wir verwenden modernste Lasertechnologie, um ein hochkonzentriertes Bleaching-Gel zu aktivieren und tiefe Flecken und Verfärbungen durch Kaffee, Tee, Rauchen oder Alterung zu entfernen. Es ist sicher, effektiv und liefert sofortige Ergebnisse, die bis zu 8 Nuancen heller sind.",
      process: [
        "Zahnreinigung",
        "Zahnfleischschutz",
        "Aufhellungsgel-Anwendung",
        "Laseraktivierung (3-4 Zyklen)",
        "Fluoridanwendung bei Empfindlichkeit",
      ],
      benefits: [
        "Sofortige Ergebnisse",
        "Sicher für den Zahnschmelz",
        "Entfernt hartnäckige Flecken",
        "Steigert das Selbstvertrauen",
      ],
      duration: "1 Stunde",
    },
    {
      id: "zirconia-crowns",
      title: "Zirkonkronen",
      description:
        "Metallfreie, hochbeständige und ästhetische Kronen, die völlig natürlich aussehen.",
      image: "/zirkonyum.webp",
      fullDescription:
        "Zirkonkronen sind die perfekte Mischung aus Stärke und Ästhetik. Im Gegensatz zu traditionellen metallverblendeten Kronen ist Zirkon biokompatibel und lässt Licht durch, was die Transluzenz natürlicher Zähne nachahmt. Sie sind aufgrund ihrer extremen Haltbarkeit und ihres natürlichen Aussehens ideal für Front- und Backenzähne.",
      process: [
        "Zahnvorbereitung",
        "Digitaler Abdruck",
        "Provisorische Kronenplatzierung",
        "Laborfertigung (CAD/CAM)",
        "Endgültige Zementierung",
      ],
      benefits: [
        "Überlegene Ästhetik",
        "Hohe Festigkeit",
        "Biokompatibel (kein Metall)",
        "Keine dunklen Linien am Zahnfleischrand",
      ],
      duration: "3-5 Tage",
    },
    {
      id: "invisalign",
      title: "Invisalign",
      description:
        "Transparente Schienen, um Ihre Zähne diskret ohne Metallspangen zu begradigen.",
      image: "/invisalign.webp",
      fullDescription:
        "Invisalign bietet einen modernen Ansatz zur Zahnkorrektur mit einer maßgeschneiderten Reihe von Schienen, die nur für Sie erstellt werden. Diese Schienen bestehen aus glattem, bequemem und praktisch unsichtbarem Kunststoff, den Sie über Ihren Zähnen tragen. Das Tragen der Schienen verschiebt Ihre Zähne allmählich und sanft an die richtige Stelle, basierend auf den genauen Bewegungen, die Ihr Zahnarzt für Sie plant.",
      process: [
        "3D-Scan & Simulation",
        "Individuelle Schienenfertigung",
        "Anpassung & Attachments",
        "Regelmäßige Kontrollen (auch remote)",
        "Retainer",
      ],
      benefits: [
        "Praktisch unsichtbar",
        "Herausnehmbar zum Essen/Reinigen",
        "Bequem",
        "Vorhersehbare Ergebnisse",
      ],
      duration: "6-18 Monate",
    },
    {
      id: "full-mouth-rehab",
      title: "Komplettsanierung",
      description:
        "Vollständige Wiederherstellung von Funktion und Ästhetik für komplexe Fälle.",
      image: "/full-mouth.jpeg",
      fullDescription:
        "Eine Komplettsanierung ist ein hochgradig individueller Behandlungsplan, der verwendet wird, um die Gesundheit, Funktion und das Aussehen des gesamten Mundes wiederherzustellen. Dies ist ideal für Patienten mit starker Zahnabnutzung, mehreren fehlenden Zähnen oder fortgeschrittener Zahnfleischerkrankung. Es kombiniert verschiedene Behandlungen wie Implantate, Kronen, Veneers und Brücken, um Ihr Lächeln von Grund auf neu aufzubauen.",
      process: [
        "Umfassende Diagnose",
        "Behandlungsplanung",
        "Chirurgische Phase (falls erforderlich)",
        "Restaurative Phase",
        "Letzte Anpassungen",
      ],
      benefits: [
        "Wiederhergestellte Kaufunktion",
        "Schmerzlinderung",
        "Totale ästhetische Transformation",
        "Verbesserte allgemeine Gesundheit",
      ],
      duration: "Variiert (Individueller Plan)",
    },
  ],
};

// Export the services array for the current language
// Since we can't switch imports dynamically in Client Components easily without a hook,
// we'll export the whole object and a helper, or just the object.
// The components using this will need to use `useLanguage` and select the array.

export const getServices = (lang: Language) => {
    return servicesData[lang] || servicesData.en;
};

// Keep default export for backwards compatibility during refactor, defaulting to English
export const services = servicesData.en;
export default servicesData;

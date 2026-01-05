import { Language } from "./translations";

export interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<Language, FAQItem[]> = {
  en: [
    {
      question: "Do you offer accommodation and transfers?",
      answer:
        "Yes, for our international patients, we offer all-inclusive packages that include VIP airport transfers and accommodation in 5-star hotels nearby. Our team handles all the logistics so you can focus on your treatment and holiday.",
    },
    {
      question: "How long does a Hollywood Smile treatment take?",
      answer:
        "Typically, a complete Hollywood Smile transformation takes about 5 to 7 days. This includes the initial consultation, 3D design, preparation, trial fitting, and the final bonding of your veneers or crowns.",
    },
    {
      question: "Is the dental implant procedure painful?",
      answer:
        "No. The procedure is performed under local anesthesia, so you won't feel any pain during the surgery. For anxious patients, we also offer sedation options. Post-procedure discomfort is usually minimal and manageable with standard painkillers.",
    },
    {
      question: "Do you provide a warranty for treatments?",
      answer:
        "Absolutely. We stand by the quality of our work. Our dental implants come with a lifetime warranty, and our veneers and crowns typically have a 5-10 year warranty, provided that regular check-ups and oral hygiene norms are followed.",
    },
    {
      question: "Can I get a consultation online before travelling?",
      answer:
        "Yes! We offer free online consultations. You can send us your X-rays and photos via WhatsApp or Email. Dt. Mete and our team will analyze them and provide you with a preliminary treatment plan and cost estimate.",
    },
    {
      question: "What technology do you use?",
      answer:
        "Ruby Dental is equipped with the latest digital dentistry technology, including 3D intraoral scanners, CAD/CAM milling machines for same-day crowns, laser dentistry tools, and digital X-ray systems for precise diagnostics.",
    },
    {
      question: "How much can I save compared to the UK/US/EU?",
      answer:
        "Patients typically save up to 70% on dental treatments compared to prices in the UK, US, or Europe, without compromising on quality materials or expertise.",
    },
  ],
  tr: [
    {
      question: "Konaklama ve transfer hizmeti sunuyor musunuz?",
      answer:
        "Evet, uluslararası hastalarımız için VIP havaalanı transferleri ve yakındaki 5 yıldızlı otellerde konaklamayı içeren her şey dahil paketler sunuyoruz. Ekibimiz tüm lojistiği halleder, böylece siz tedavinize ve tatilinize odaklanabilirsiniz.",
    },
    {
      question: "Hollywood Gülüşü tedavisi ne kadar sürer?",
      answer:
        "Genellikle, tam bir Hollywood Gülüşü dönüşümü yaklaşık 5 ila 7 gün sürer. Bu süreç ilk muayene, 3D tasarım, hazırlık, prova ve lamine veya kronların son yapıştırma işlemini içerir.",
    },
    {
      question: "Diş implantı işlemi ağrılı mıdır?",
      answer:
        "Hayır. İşlem lokal anestezi altında yapılır, bu nedenle ameliyat sırasında herhangi bir ağrı hissetmezsiniz. Kaygılı hastalarımız için sedasyon seçeneklerimiz de mevcuttur. İşlem sonrası rahatsızlık genellikle minimaldir ve standart ağrı kesicilerle yönetilebilir.",
    },
    {
      question: "Tedaviler için garanti veriyor musunuz?",
      answer:
        "Kesinlikle. Yaptığımız işin kalitesinin arkasındayız. Diş implantlarımız ömür boyu garantilidir, kaplamalarımız ve kronlarımız ise düzenli kontrollerin ve ağız hijyeni kurallarının takip edilmesi koşuluyla genellikle 5-10 yıl garantilidir.",
    },
    {
      question: "Seyahat etmeden önce online konsültasyon alabilir miyim?",
      answer:
        "Evet! Ücretsiz online konsültasyon sunuyoruz. Röntgenlerinizi ve fotoğraflarınızı WhatsApp veya E-posta yoluyla bize gönderebilirsiniz. Dt. Mete ve ekibimiz bunları analiz edecek ve size ön tedavi planı ve maliyet tahmini sunacaktır.",
    },
    {
      question: "Hangi teknolojileri kullanıyorsunuz?",
      answer:
        "Ruby Dental, 3D ağız içi tarayıcılar, aynı gün kronlar için CAD/CAM kazıma cihazları, lazer diş hekimliği araçları ve hassas teşhis için dijital röntgen sistemleri dahil olmak üzere en son dijital diş hekimliği teknolojisiyle donatılmıştır.",
    },
    {
      question: "İngiltere/ABD/AB'ye kıyasla ne kadar tasarruf edebilirim?",
      answer:
        "Hastalar genellikle İngiltere, ABD veya Avrupa'daki fiyatlara kıyasla diş tedavilerinde %70'e varan tasarruf sağlarlar, hem de malzeme kalitesinden veya uzmanlıktan ödün vermeden.",
    },
  ],
  de: [
    {
      question: "Bieten Sie Unterkunft und Transfers an?",
      answer:
        "Ja, für unsere internationalen Patienten bieten wir All-inclusive-Pakete an, die VIP-Flughafentransfers und Unterkunft in 5-Sterne-Hotels in der Nähe beinhalten. Unser Team kümmert sich um die gesamte Logistik, damit Sie sich auf Ihre Behandlung und Ihren Urlaub konzentrieren können.",
    },
    {
      question: "Wie lange dauert eine Hollywood-Smile-Behandlung?",
      answer:
        "In der Regel dauert eine komplette Hollywood-Smile-Transformation etwa 5 bis 7 Tage. Dies umfasst die Erstberatung, das 3D-Design, die Vorbereitung, die Anprobe und das endgültige Einsetzen Ihrer Veneers oder Kronen.",
    },
    {
      question: "Ist das Zahnimplantatverfahren schmerzhaft?",
      answer:
        "Nein. Der Eingriff wird unter örtlicher Betäubung durchgeführt, sodass Sie während der Operation keine Schmerzen verspüren. Für ängstliche Patienten bieten wir auch Sedierungsoptionen an. Beschwerden nach dem Eingriff sind in der Regel minimal und mit Standard-Schmerzmitteln behandelbar.",
    },
    {
      question: "Geben Sie eine Garantie auf Behandlungen?",
      answer:
        "Absolut. Wir stehen für die Qualität unserer Arbeit. Unsere Zahnimplantate haben eine lebenslange Garantie, und unsere Veneers und Kronen haben in der Regel eine Garantie von 5-10 Jahren, vorausgesetzt, regelmäßige Kontrollen und Mundhygienevorgaben werden eingehalten.",
    },
    {
      question: "Kann ich vor der Reise eine Online-Beratung erhalten?",
      answer:
        "Ja! Wir bieten kostenlose Online-Beratungen an. Sie können uns Ihre Röntgenbilder und Fotos per WhatsApp oder E-Mail senden. Dt. Mete und unser Team werden diese analysieren und Ihnen einen vorläufigen Behandlungsplan und Kostenvoranschlag erstellen.",
    },
    {
      question: "Welche Technologie verwenden Sie?",
      answer:
        "Ruby Dental ist mit der neuesten digitalen Zahnmedizin-Technologie ausgestattet, einschließlich 3D-Intraoralscannern, CAD/CAM-Fräsmaschinen für Kronen am selben Tag, Laser-Zahnmedizin-Tools und digitalen Röntgensystemen für präzise Diagnostik.",
    },
    {
      question: "Wie viel kann ich im Vergleich zu UK/US/EU sparen?",
      answer:
        "Patienten sparen in der Regel bis zu 70% bei Zahnbehandlungen im Vergleich zu Preisen in Großbritannien, den USA oder Europa, ohne Kompromisse bei Materialqualität oder Fachwissen einzugehen.",
    },
  ],
};

export const getFaqs = (lang: Language) => {
  return faqData[lang] || faqData.en;
};

export default faqData;

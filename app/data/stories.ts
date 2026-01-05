import { Language } from "./translations";

export interface Story {
  id: string;
  title?: string;
  name?: string;
  quote?: string;
  desc?: string;
  duration?: string;
  isFeatured: boolean;
}

const storiesData: Record<Language, Story[]> = {
  en: [
    {
      id: "peF6M69mqio",
      title: "Journalist Derek Myers' Journey",
      quote:
        "The transparency and professional approach at Ruby Dental eliminated all my fears about dental tourism.",
      desc: "Renowned US journalist Derek Myers shares why he chose Ruby Dental for his smile makeover. Comparing global options like Colombia and Canada, he highlights how our government-certified safety standards, transparent pricing, and warm family atmosphere surpassed his expectations.",
      isFeatured: true,
    },
    { id: "2", name: "Michael's Implants", duration: "3:45", isFeatured: false },
    { id: "3", name: "Sarah's Invisalign", duration: "2:15", isFeatured: false },
    { id: "4", name: "David's Recovery", duration: "4:20", isFeatured: false },
  ],
  tr: [
    {
      id: "peF6M69mqio",
      title: "Gazeteci Derek Myers'ın Yolculuğu",
      quote:
        "Ruby Dental'deki şeffaflık ve profesyonel yaklaşım, diş turizmi konusundaki tüm korkularımı yok etti.",
      desc: "Ünlü ABD'li gazeteci Derek Myers, gülüş tasarımı için neden Ruby Dental'i seçtiğini paylaşıyor. Kolombiya ve Kanada gibi küresel seçenekleri karşılaştırarak, devlet onaylı güvenlik standartlarımızın, şeffaf fiyatlandırmamızın ve sıcak aile ortamımızın beklentilerini nasıl aştığını vurguluyor.",
      isFeatured: true,
    },
    { id: "2", name: "Michael - İmplant Tedavisi", duration: "3:45", isFeatured: false },
    { id: "3", name: "Sarah - Şeffaf Plak", duration: "2:15", isFeatured: false },
    { id: "4", name: "David - İyileşme Süreci", duration: "4:20", isFeatured: false },
  ],
  de: [
    {
      id: "peF6M69mqio",
      title: "Die Reise des Journalisten Derek Myers",
      quote:
        "Die Transparenz und der professionelle Ansatz bei Ruby Dental haben alle meine Ängste vor dem Zahntourismus beseitigt.",
      desc: "Der renommierte US-Journalist Derek Myers erzählt, warum er sich für Ruby Dental für sein Lächeln-Makeover entschieden hat. Im Vergleich zu globalen Optionen wie Kolumbien und Kanada hebt er hervor, wie unsere staatlich zertifizierten Sicherheitsstandards, transparenten Preise und die warme familiäre Atmosphäre seine Erwartungen übertroffen haben.",
      isFeatured: true,
    },
    { id: "2", name: "Michael - Zahnimplantate", duration: "3:45", isFeatured: false },
    { id: "3", name: "Sarah - Invisalign", duration: "2:15", isFeatured: false },
    { id: "4", name: "David - Genesung", duration: "4:20", isFeatured: false },
  ],
};

export const getStories = (lang: Language) => {
  return storiesData[lang] || storiesData.en;
};

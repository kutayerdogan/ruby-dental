"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getServices } from "../data/treatments";

export const Treatments = () => {
  const { language, t } = useLanguage();
  const allServices = getServices(language);
  const services = allServices.filter(
    (s) => s.id !== "invisalign" && s.id !== "full-mouth-rehab"
  );

  return (
    <section id="treatments" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase mb-3 block">
              {t("treatments.subtitle")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-none">
              {t("treatments.title")}
            </h2>
          </div>
          <Link
            href="/treatments"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            {t("treatments.detailedGuide")}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/treatments?id=${service.id}`}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-ruby-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-ruby-primary/20 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-ruby-primary text-xs font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {t("treatments.comprehensiveCare")}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 line-clamp-2 md:line-clamp-none opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {t("treatments.bookConsultation")}{" "}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

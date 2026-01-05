"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Doctors = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      name: "Dt. Kağan",
      role: t("doctors.roles.chiefSurgeon"),
      img: "/dtmete.jpg",
    },
    {
      name: "Dt. Mete",
      role: t("doctors.roles.orthodontist"),
      img: "/dtmete.jpg",
    },
    {
      name: "Dt. Yakut",
      role: t("doctors.roles.cosmeticSpecialist"),
      img: "/dtmete.jpg",
    },
  ];

  return (
    <section id="doctors" className="py-16 md:py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase">
            {t("doctors.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            {t("doctors.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden glass-panel border-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white">{doc.name}</h3>
                  <p className="text-ruby-primary font-medium mb-4">
                    {doc.role}
                  </p>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <a
                      href="https://www.instagram.com/meteyakutt?igsh=MXUybWRmdXp0eWI1cQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-ruby-primary hover:text-white transition-colors text-white"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

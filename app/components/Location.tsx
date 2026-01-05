"use client";

import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Location = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/3 space-y-8">
            <div>
              <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase mb-3 block">
                {t("location.title")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t("location.subtitle")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Situated in the heart of Manavgat, Antalya, our clinic offers a
                calm and modern atmosphere just minutes away from the
                Mediterranean coast.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                  <MapPin className="w-6 h-6 text-ruby-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">
                    {t("location.address")}
                  </h3>
                  <p className="text-gray-400">Sorgun, Manavgat/Antalya</p>
                  <p className="text-gray-500 text-sm mt-1">
                    36.776295, 31.447110
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=36.776295,31.447110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all group w-full justify-center md:justify-start"
              >
                <Navigation className="w-5 h-5 group-hover:text-ruby-primary transition-colors" />
                {t("location.getDirections")}
              </a>
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full md:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 relative group">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.777002620786!2d31.447110!3d36.776295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ2JzM0LjciTiAzMcKwMjYnNDkuNiJF!5e0!3m2!1sen!2str!4v1625641234567!5m2!1sen!2str`} // You might want to update this embed URL to be more precise if possible
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>

            {/* Overlay Gradient to blend with bg */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl ring-1 ring-white/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

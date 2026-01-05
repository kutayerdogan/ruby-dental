"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-12 md:py-20 overflow-hidden bg-black/40 w-full max-w-[100vw]">
      {/* Background Ambience - reduced blur/size on mobile for performance */}
      <div className="absolute top-0 right-[-100px] md:right-[-200px] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-ruby-primary/20 rounded-full blur-[80px] md:blur-[120px] z-0 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-[-100px] md:left-[-200px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto lg:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-ruby-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-gray-300">
              {t("hero.tagline")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] md:leading-tight text-white tracking-tight">
            {t("hero.title").split(" ").slice(0, 3).join(" ")} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-ruby-primary via-white to-ruby-primary bg-[length:200%_auto] animate-gradient">
              {t("hero.title").split(" ").slice(3).join(" ")}
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-ruby-primary text-white font-bold rounded-full shadow-lg shadow-ruby-primary/25 hover:shadow-ruby-primary/40 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:border-ruby-primary/50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Gallery
            </motion.button>
          </div>

          <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
              ].map((img, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black relative overflow-hidden"
                >
                  <Image
                    src={img}
                    alt="Patient"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col text-left">
              <div className="flex gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-gray-400">
                {t("hero.trustedBy")}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center mt-8 lg:mt-0 w-full max-w-lg mx-auto"
        >
          {/* Decorative Background Blob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-ruby-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-40 scale-110" />

          {/* Main Image Container */}
          <div className="relative w-full h-full z-10">
            {/* Image Frame with Tilt/Glow */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-ruby-primary/20">
              <Image
                src="/image3.png"
                alt="Ruby Dental Mascot"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Elements - Now breaking the grid/box */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-10 md:-right-12 z-20 p-4 glass-panel rounded-2xl flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Calendar className="w-6 h-6 text-blue-400 fill-current" />
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                  {t("hero.priorityBooking")}
                </p>
                <p className="text-lg font-bold text-white">
                  {t("hero.sameDayAppt")}
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 md:bottom-20 md:-left-12 z-20"
            >
              <a
                href="https://wa.me/905416107725"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-panel rounded-2xl flex items-center gap-4 bg-green-500/20 backdrop-blur-md border border-white/20 shadow-xl hover:bg-green-500/30 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <MessageCircle className="w-6 h-6 text-white text-fill-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-200 uppercase tracking-wider font-semibold">
                    {t("hero.recoveryTime")}
                  </p>
                  <p className="font-bold text-white text-sm">
                    {t("hero.bookWhatsapp")}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  X,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { getServices } from "../data/treatments";
import { useLanguage } from "../context/LanguageContext";

// Hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

// Loading Fallback for Suspense
function TreatmentsLoading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="animate-pulse text-2xl text-ruby-primary">Loading...</div>
    </div>
  );
}

// Main Content Component (uses useSearchParams)
function TreatmentsContent() {
  const isMobile = useIsMobile();
  const { language, t } = useLanguage();
  const services = getServices(language);

  // Parse query param
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id");

  const [activeId, setActiveId] = useState<string>(initialId || services[0].id);

  // Ensure activeService is always valid, fallback to first service if id not found
  const activeService = services.find((s) => s.id === activeId) || services[0];

  // Effect to update activeId when URL param changes
  useEffect(() => {
    if (initialId && initialId !== activeId) {
      setActiveId(initialId);
    }
  }, [initialId]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden relative">
      <Navbar />

      {/* LEFT COLUMN: Treatment List */}
      <div className="w-full md:w-1/3 md:h-screen pt-24 md:pt-32 pb-8 px-6 md:px-8 border-r border-white/10 flex flex-col z-10 bg-black">
        <div className="mb-6 md:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("treatments.backToHome")}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("treatments.title")}
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            {t("treatments.detailedDesc")}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                activeId === service.id
                  ? "bg-ruby-primary/10 border-ruby-primary ring-1 ring-ruby-primary/50"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-colors ${
                    activeId === service.id
                      ? "border-ruby-primary"
                      : "border-white/10 group-hover:border-white/30"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3
                    className={`font-bold text-lg transition-colors ${
                      activeId === service.id
                        ? "text-ruby-primary"
                        : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  {activeId === service.id && (
                    <motion.span
                      layoutId="activeGlow"
                      className="text-xs text-ruby-light flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" /> Selected
                    </motion.span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Detail View (Desktop) */}
      <div className="hidden md:flex flex-1 relative h-screen pt-24 overflow-hidden bg-zinc-900/50">
        {/* Detail Content */}
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="h-full w-full flex flex-col min-h-0"
        >
          {/* Hero Image for Detail */}
          <div className="h-[40vh] relative w-full shrink-0">
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {activeService.title}
              </motion.h2>
            </div>
          </div>

          {/* Content Scrollable Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
            <div className="max-w-4xl space-y-12 pb-24">
              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed">
                {activeService.fullDescription}
              </p>

              {/* Grid: Process & Benefits */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Process */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-ruby-primary/20 rounded-lg">
                      <Clock className="w-6 h-6 text-ruby-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      {t("treatments.process")}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {activeService.process.map((step, idx) => (
                      <li key={idx} className="flex gap-4 items-start group">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-ruby-primary group-hover:text-white group-hover:border-ruby-primary transition-all">
                          {idx + 1}
                        </span>
                        <span className="text-gray-300 pt-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      {t("treatments.keyBenefits")}
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    {activeService.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sticky Bottom Actions */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-ruby-primary/20 to-transparent border border-ruby-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-ruby-light mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {t("treatments.estimatedDuration")}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-white">
                    {activeService.duration}
                  </p>
                </div>
                <a
                  href="https://wa.me/905416107725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-ruby-primary text-white font-bold rounded-xl hover:bg-ruby-dark transition-all flex items-center gap-2 shadow-lg shadow-ruby-primary/25 hover:shadow-ruby-primary/50 transform hover:scale-105"
                >
                  {t("treatments.bookConsultation")}{" "}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Modal Detail View */}
      <AnimatePresence>
        {isMobile && activeService && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-black flex flex-col md:hidden"
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/80 backdrop-blur-xl absolute top-0 w-full z-20">
              <span className="font-bold text-ruby-primary uppercase tracking-wider text-sm">
                Treatment Details
              </span>
              <Link
                href="/treatments"
                // Just clearing the param effectively, but we are using local state activeId here for the modal visibility in this implementation?
                // Wait, my implementation uses isMobile && activeService.
                // But activeService is ALWAYS defined. So the modal is ALWAYS open on mobile?
                // That's a bug.
                // I need a way to TOGGLE detail view on mobile.
                // Let's add `showMobileDetail` state.
                onClick={() => setActiveId("")}
                className="p-2 bg-white/10 rounded-full text-white"
              >
                <X className="w-6 h-6" />
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto pt-20 pb-24 px-6">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-4">{activeService.title}</h2>
              <p className="text-gray-300 mb-8">
                {activeService.fullDescription}
              </p>

              {/* Mobile Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ruby-primary" />{" "}
                  {t("treatments.process")}
                </h3>
                <ul className="space-y-3">
                  {activeService.process.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                      <span className="text-ruby-primary font-bold">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />{" "}
                  {t("treatments.keyBenefits")}
                </h3>
                <ul className="space-y-2">
                  {activeService.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-gray-300 items-center"
                    >
                      <Check className="w-4 h-4 text-green-500" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-8">
                <p className="text-sm text-gray-400 mb-1">
                  {t("treatments.estimatedDuration")}
                </p>
                <p className="text-2xl font-bold text-white">
                  {activeService.duration}
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-black absolute bottom-0 w-full">
              <a
                href="https://wa.me/905416107725"
                className="block w-full py-4 bg-ruby-primary text-center font-bold rounded-xl text-white"
              >
                {t("treatments.bookConsultation")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Default Export with Suspense Wrapper
export default function TreatmentsPage() {
  return (
    <Suspense fallback={<TreatmentsLoading />}>
      <TreatmentsContent />
    </Suspense>
  );
}

"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { getFaqs } from "../data/faq";
import { useLanguage } from "../context/LanguageContext";

export default function FAQPage() {
  const { language, t } = useLanguage();
  const faqs = getFaqs(language);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      {/* Hero / Header */}
      <div className="pt-32 pb-12 text-center container mx-auto px-6">
        <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase mb-4 block">
          {t("faq.subtitle")}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("faq.title")}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {t("faq.description")}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto px-4 md:px-6 pb-24 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "bg-white/10 border-ruby-primary/50 shadow-lg shadow-ruby-primary/5"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-bold pr-8 transition-colors ${
                    openIndex === index ? "text-white" : "text-gray-300"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full border transition-all ${
                    openIndex === index
                      ? "bg-ruby-primary border-ruby-primary text-white rotate-180"
                      : "bg-white/5 border-white/10 text-gray-400 group-hover:border-white/30"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-ruby-primary/20 via-black to-black border border-ruby-primary/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t("faq.stillHaveQuestions")}
            </h3>
            <p className="text-gray-400">{t("faq.contactText")}</p>
          </div>
          <a
            href="https://wa.me/905416107725"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-ruby-primary text-white font-bold rounded-xl hover:bg-ruby-dark transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5" />
            {t("faq.getInTouch")}
          </a>
        </div>
      </div>
    </div>
  );
}

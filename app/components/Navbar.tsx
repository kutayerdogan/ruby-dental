"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.treatments"), href: "/treatments" },
    { name: t("navbar.gallery"), href: "/gallery" },
    { name: t("navbar.faq"), href: "/faq" },
  ];

  const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "tr", label: "TR", flag: "🇹🇷" },
    { code: "de", label: "DE", flag: "🇩🇪" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/50 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-white"
          >
            RUBY<span className="text-ruby-primary">DENTAL</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
                    language === lang.code
                      ? "bg-ruby-primary text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <Link
              href="/#contact"
              className="px-6 py-2 bg-ruby-primary hover:bg-ruby-dark text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-ruby-primary/50"
            >
              {t("navbar.bookNow")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col gap-8 items-center text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white hover:text-ruby-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-4 mt-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`p-3 rounded-full text-lg font-bold transition-all border ${
                        language === lang.code
                          ? "bg-ruby-primary text-white border-ruby-primary"
                          : "text-gray-400 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {lang.label} {lang.flag}
                    </button>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-4 bg-ruby-primary text-white font-bold rounded-full w-full"
                >
                  {t("navbar.bookNow")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

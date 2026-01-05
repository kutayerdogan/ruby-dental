"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
// Helper Component for Gallery Items
const GalleryItem = ({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-ruby-primary/20 transition-all duration-300 bg-white/5"
    onClick={onClick}
  >
    <Image
      src={src}
      alt="Clinic Gallery"
      width={0}
      height={0}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ width: "100%", height: "auto" }}
      className="transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <ZoomIn className="w-8 h-8 text-white" />
    </div>
  </motion.div>
);

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="container mx-auto px-6 h-full flex flex-col pt-32 pb-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("gallery.backToHome")}
          </Link>
          <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase block mb-2">
            {t("gallery.ourFacility")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("gallery.title")}
          </h1>
          <p className="text-gray-400 max-w-2xl">{t("gallery.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Left */}
          <div className="flex flex-col gap-6">
            {["/gemini/1.png", "/gemini/4.png"].map((src, index) => (
              <GalleryItem
                key={src}
                src={src}
                index={index}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>

          {/* Column 2: Middle */}
          <div className="flex flex-col gap-27">
            {["/gemini/2.png", "/gemini/3.png", "/gemini/5.png"].map(
              (src, index) => (
                <GalleryItem
                  key={src}
                  src={src}
                  index={index + 2}
                  onClick={() => setSelectedImage(src)}
                />
              )
            )}
          </div>

          {/* Column 3: Right */}
          <div className="flex flex-col gap-6">
            {["/gemini/7.png", "/gemini/6.png"].map((src, index) => (
              <GalleryItem
                key={src}
                src={src}
                index={index + 5}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

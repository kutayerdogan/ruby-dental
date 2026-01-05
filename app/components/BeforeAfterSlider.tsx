"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

// Individual Slider Component
const CompareImage = ({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, rect.width)
    );
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden cursor-ew-resize border-2 border-white/10 shadow-xl select-none group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={before}
          alt={`Before ${alt}`}
          fill
          className="object-cover filter grayscale-[0.5]"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-bold text-xs pointer-events-none">
          BEFORE
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={after} alt={`After ${alt}`} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-ruby-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-white font-bold text-xs pointer-events-none">
          AFTER
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-ruby-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <div className="flex gap-[-2px]">
            <ChevronsLeft className="w-3 h-3 text-white" />
            <ChevronsRight className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BeforeAfterSlider = () => {
  const cases = [
    {
      id: 1,
      before: "/before1.png",
      after: "/after1.png",
      title: "Cosmetic Veneers",
      desc: "Complete smile makeover transformation.",
    },
    {
      id: 2,
      before: "/before2.png",
      after: "/after2.png",
      title: "Dental Implants",
      desc: "Restoring function and aesthetics.",
    },
    // Add more mock cases if needed or reuse
    {
      id: 3,
      before: "/before1.png",
      after: "/after1.png",
      title: "Teeth Whitening",
      desc: "Professional whitening results.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-ruby-primary to-ruby-light">
              Results
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg">
            Swipe through our patient success stories and see the difference
            precise care makes.
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-ruby-primary hover:border-ruby-primary transition-all text-white group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-ruby-primary hover:border-ruby-primary transition-all text-white group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scrolling Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="container mx-auto px-6 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth flex gap-6 md:gap-8 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // For Firefox/IE
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {cases.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] flex flex-col gap-5"
          >
            <CompareImage
              before={item.before}
              after={item.after}
              alt={item.title}
            />
            <div className="px-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-ruby-primary"></span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm pl-11">{item.desc}</p>
            </div>
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="w-1 shrink-0" />
      </div>

      {/* Custom Scrollbar/Indicator */}
      <div className="container mx-auto px-6 mt-4 flex items-center justify-center gap-4">
        <div className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-ruby-primary glow-ruby"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.max(10, scrollProgress)}%` }} // Min width so it's visible
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </section>
  );
};

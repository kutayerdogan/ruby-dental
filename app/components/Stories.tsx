"use client";

import { useState } from "react";
import { Play, ArrowRight, Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getStories } from "../data/stories";

export const Stories = () => {
  const { language, t } = useLanguage();
  const stories = getStories(language);

  const featuredVideo = stories.find((s) => s.isFeatured) || stories[0];
  const otherStories = stories.filter((s) => !s.isFeatured);

  return (
    <section className="py-16 md:py-24 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            {t("stories.title")}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Video & Playlist */}
          <div className="flex flex-col gap-8">
            {/* Main Video Player */}
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl shadow-ruby-primary/10 group">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}?rel=0&modestbranding=1`}
                title="Patient Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* More Stories List */}
            <div className="space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                {t("stories.moreStories")}
                <span className="h-px flex-1 bg-white/10"></span>
              </h4>
              <div className="grid gap-3">
                {otherStories.map((story) => (
                  <div
                    key={story.id}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-ruby-primary/10 border border-white/5 hover:border-ruby-primary/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-ruby-primary group-hover:text-white transition-colors">
                        <Play className="w-3 h-3 fill-current" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {story.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {story.duration}
                    </span>
                  </div>
                ))}
              </div>

              <button className="text-ruby-primary hover:text-white transition-colors text-sm font-bold flex items-center gap-2 mt-2">
                View All Stories on YouTube <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Story Content */}
          <div className="relative p-8 md:p-12 glass-panel rounded-3xl bg-white/5 border border-white/10 h-full flex flex-col justify-center">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-ruby-primary/20 rotate-180" />

            <h3 className="text-3xl font-bold text-white mb-6 pr-12">
              {featuredVideo.title}
            </h3>
            <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8 relative z-10 font-light leading-relaxed">
              "{featuredVideo.quote}"
            </blockquote>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-base">
                {featuredVideo.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

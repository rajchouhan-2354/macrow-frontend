import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FeaturedWork() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="featured-work" className="py-24 bg-macrow-white text-macrow-textDark relative border-t border-macrow-borderLight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-macrow-lightSurface border border-macrow-borderLight mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-macrow-red animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-macrow-black uppercase font-semibold">
              Featured Work
            </span>
            <span className="w-2 h-2 rounded-full bg-macrow-red" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-bold text-macrow-black tracking-tight">
            Creative Productions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-macrow-textDarkMuted font-sans leading-relaxed">
            Our latest commercial for Hampton — exploring the lonely journey of startup founders and the power of community.
          </p>
        </div>

        {/* --- LARGE FEATURED HERO CASE STUDY CARD (Secondary 30% Black Container) --- */}
        <div className="max-w-5xl mx-auto mb-10 bg-macrow-black text-macrow-white rounded-2xl md:rounded-3xl border border-macrow-borderDark shadow-2xl overflow-hidden group">
          {/* Top Video Preview Player Frame */}
          <div className="relative aspect-[16/9] w-full bg-macrow-darker overflow-hidden">
            {isVideoPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Featured Commercial"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80"
                  alt="Hampton - Crazy Lonely Journey"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-macrow-black via-transparent to-macrow-darker/60" />

                {/* Top Video Player Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-macrow-black/80 px-3 py-1.5 rounded-full border border-macrow-borderDark backdrop-blur-md">
                    <div className="w-5 h-5 rounded-full bg-macrow-red flex items-center justify-center font-western text-xs text-white font-bold">
                      M
                    </div>
                    <span className="text-xs font-semibold text-macrow-white font-sans">
                      Hampton — Crazy Lonely Journey
                    </span>
                  </div>

                  <span className="bg-macrow-red text-macrow-white font-bold text-xs px-3 py-1 rounded-full shadow">
                    Latest Project
                  </span>
                </div>

                {/* Big Red Play Button (10% Accent) */}
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-14 bg-macrow-red hover:bg-macrow-brassLight rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group/btn"
                  aria-label="Play Featured Video"
                >
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1" />
                </button>

                {/* Bottom Video Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-macrow-white/80 font-mono z-10">
                  <span>Watch on MACROW Studio</span>
                  <span className="bg-macrow-black/80 px-2.5 py-1 rounded border border-macrow-borderDark text-[10px]">
                    [REPLACE WITH REAL CASE STUDY ASSET]
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Bottom Card Content Box */}
          <div className="p-8 sm:p-10 bg-macrow-surface border-t border-macrow-borderDark">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
              <span className="text-macrow-red font-bold uppercase tracking-wider">Commercial</span>
              <span className="text-macrow-textLightMuted">•</span>
              <span className="text-macrow-white">Client: Hampton</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold text-macrow-white tracking-tight">
              The Lonely Journey
            </h3>

            <p className="mt-3 text-sm sm:text-base text-macrow-white/80 font-sans leading-relaxed max-w-3xl">
              A powerful commercial exploring the isolation that startup founders face and how joining Hampton's community can transform that journey. This piece captures the emotional weight of entrepreneurship and the relief that comes with finding your tribe.
            </p>

            {/* 4-Column Metadata Grid */}
            <div className="mt-8 pt-6 border-t border-macrow-borderDark grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="text-[10px] font-mono text-macrow-textLightMuted uppercase block">Industry</span>
                <span className="text-xs font-semibold text-macrow-white mt-1 block">Community Platform</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-macrow-textLightMuted uppercase block">Style</span>
                <span className="text-xs font-semibold text-macrow-white mt-1 block">Narrative Drama</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-macrow-textLightMuted uppercase block">Tone</span>
                <span className="text-xs font-semibold text-macrow-white mt-1 block">Emotional Journey</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-macrow-textLightMuted uppercase block">Format</span>
                <span className="text-xs font-semibold text-macrow-white mt-1 block">Digital Commercial</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

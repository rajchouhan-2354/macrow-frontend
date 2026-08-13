import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    id: 1,
    title: "BEST FILM & GROWTH",
    subtitle: "Global Marcomm Awards 2025",
    type: "light",
  },
  {
    id: 2,
    title: "AUDIENCE CHOICE",
    subtitle: "Commercial Showcase",
    type: "light",
  },
  {
    id: 3,
    title: "INNOVATION AWARD",
    subtitle: "AI & Tech Integration",
    type: "frame-dark",
  },
  {
    id: 4,
    title: "DIRECTOR'S CHOICE",
    subtitle: "Brand Storytelling",
    type: "frame-dark",
  },
  {
    id: 5,
    title: "CREATIVE EXCELLENCE",
    subtitle: "Strategic Impact",
    type: "filled-dark",
  },
  {
    id: 6,
    title: "RISING TALENT",
    subtitle: "Global Outlaw Studio",
    type: "light",
  },
];

function LaurelWreath({ title, subtitle, isDark = false }) {
  const strokeColor = isDark ? '#f1f1f1' : '#111111';
  const textColor = isDark ? 'text-macrow-white' : 'text-macrow-black';

  return (
    <div className="relative flex flex-col items-center justify-center p-6 text-center w-full h-full min-h-[190px]">
      {/* Laurel Wreath SVG Vector */}
      <svg className="w-40 h-32 opacity-85" viewBox="0 0 200 150" fill="none">
        {/* Left Laurel Strand */}
        <path d="M50,115 C35,85 40,48 72,25" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M38,95 C24,92 20,82 32,80 C36,87 40,92 38,95 Z" fill={strokeColor} />
        <path d="M42,75 C28,70 24,60 36,60 C40,66 43,72 42,75 Z" fill={strokeColor} />
        <path d="M50,55 C38,48 36,38 46,40 C50,47 52,52 50,55 Z" fill={strokeColor} />
        <path d="M62,38 C52,28 52,18 61,22 C64,30 64,35 62,38 Z" fill={strokeColor} />
        <path d="M74,27 C68,16 72,8 78,14 C78,22 76,27 74,27 Z" fill={strokeColor} />

        {/* Right Laurel Strand */}
        <path d="M150,115 C165,85 160,48 128,25" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M162,95 C176,92 180,82 168,80 C164,87 160,92 162,95 Z" fill={strokeColor} />
        <path d="M158,75 C172,70 176,60 164,60 C160,66 157,72 158,75 Z" fill={strokeColor} />
        <path d="M150,55 C162,48 164,38 154,40 C150,47 148,52 150,55 Z" fill={strokeColor} />
        <path d="M138,38 C148,28 148,18 139,22 C136,30 136,35 138,38 Z" fill={strokeColor} />
        <path d="M126,27 C132,16 128,8 122,14 C122,22 124,27 126,27 Z" fill={strokeColor} />
      </svg>

      {/* Centered Award Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <span className={`text-xs font-bold font-mono tracking-widest uppercase max-w-[130px] leading-tight ${textColor}`}>
          {title}
        </span>
        {subtitle && (
          <span className="text-[10px] font-sans mt-1.5 text-macrow-red font-semibold">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Recognition() {
  return (
    <section className="py-24 bg-macrow-white text-macrow-textDark relative border-t border-b border-macrow-borderLight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-macrow-lightSurface border border-macrow-borderLight mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-macrow-red animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-macrow-black uppercase font-semibold">
              Recognition & Achievement
            </span>
            <span className="w-2 h-2 rounded-full bg-macrow-red" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-bold text-macrow-black tracking-tight">
            Awards & Recognition
          </h2>

          <p className="mt-4 text-base sm:text-lg text-macrow-textDarkMuted font-sans leading-relaxed">
            Celebrated excellence in AI-powered film, strategy, marcomm & technology growth.
          </p>
        </div>

        {/* 6 Laurel Wreath Award Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Type 1: Clean White/Surface Card */}
              {award.type === 'light' && (
                <div className="bg-macrow-lightSurface text-macrow-black rounded-2xl shadow-card-light border border-macrow-borderLight transition-transform duration-300 group-hover:-translate-y-1">
                  <LaurelWreath title={award.title} subtitle={award.subtitle} isDark={false} />
                </div>
              )}

              {/* Type 2: Dark Frame Outer Border (Secondary 30% Black element) */}
              {award.type === 'frame-dark' && (
                <div className="bg-macrow-black p-3 rounded-3xl border-2 border-macrow-black shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="bg-macrow-lightSurface text-macrow-black rounded-xl border border-macrow-borderLight">
                    <LaurelWreath title={award.title} subtitle={award.subtitle} isDark={false} />
                  </div>
                </div>
              )}

              {/* Type 3: Filled Dark Card (Secondary 30% Black element) */}
              {award.type === 'filled-dark' && (
                <div className="bg-macrow-black p-3 rounded-3xl border-2 border-macrow-black shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="bg-macrow-surface text-macrow-white rounded-xl border border-macrow-red/40">
                    <LaurelWreath title={award.title} subtitle={award.subtitle} isDark={true} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const row1Cards = [
  {
    id: 1,
    title: "Campaign & Ad Content",
    desc: "Multi-platform video campaigns ready for every channel — YouTube, TikTok, Instagram, and beyond.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tilt: "-rotate-2",
    tag: "HOSTED IN LAB"
  },
  {
    id: 2,
    title: "Brand Films & Stories",
    desc: "Cinematic brand videos that capture your essence and connect with audiences on an emotional level.",
    image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-1",
    tag: "HOSTED IN LAB"
  },
  {
    id: 3,
    title: "Trailers & Promos",
    desc: "High impact teasers that hook viewers instantly — perfect for launches, events, and announcements.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tilt: "-rotate-1",
    tag: "HOSTED IN LAB"
  }
];

const row2Cards = [
  {
    id: 4,
    title: "Short-Form Films",
    desc: "Festival-ready mini-movies up to 5 minutes — ideal for brand storytelling, events, and premium content.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-2",
    tag: "HOSTED IN LAB"
  },
  {
    id: 5,
    title: "Animation & Motion",
    desc: "Stylized animated content that explains complex ideas without needing live action.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tilt: "-rotate-2",
    tag: "HOSTED IN LAB"
  },
  {
    id: 6,
    title: "Social Content",
    desc: "Thumb-stopping vertical videos delivered in batches to keep your feed consistently engaging.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-1",
    tag: "HOSTED IN LAB"
  }
];

function RopeLineWithBolts() {
  return (
    <div className="relative w-full flex items-center my-6">
      {/* Left Metallic Bolt */}
      <div className="w-7 h-7 rounded-full bg-stone-400 border-4 border-stone-800 shadow-xl flex items-center justify-center shrink-0 z-20">
        <div className="w-2 h-2 rounded-full bg-stone-900" />
      </div>

      {/* Center Rope Cable */}
      <div className="flex-1 h-3 bg-amber-900 border-y border-amber-950 shadow-inner relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-amber-950 via-amber-800 to-amber-950 opacity-80" />
        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 12">
          <path d="M0,6 C30,0 60,12 90,6 C120,0 150,12 180,6 C210,0 240,12 270,6 C300,0 330,12 360,6 C390,0 420,12 450,6 C480,0 510,12 540,6 C570,0 600,12 630,6 C660,0 690,12 720,6 C750,0 780,12 810,6 C840,0 870,12 900,6 C930,0 960,12 990,6 C1020,0 1050,12 1080,6 C1110,0 1140,12 1170,6 C1200,0 1230,12 1260,6" fill="none" stroke="#C9A44C" strokeWidth="2" strokeDasharray="6 3" />
        </svg>
      </div>

      {/* Right Metallic Bolt */}
      <div className="w-7 h-7 rounded-full bg-stone-400 border-4 border-stone-800 shadow-xl flex items-center justify-center shrink-0 z-20">
        <div className="w-2 h-2 rounded-full bg-stone-900" />
      </div>
    </div>
  );
}

function PolaroidCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col transform ${item.tilt} hover:rotate-0 transition-all duration-300 cursor-pointer hover:z-30 hover:-translate-y-2`}
    >
      {/* Wooden Clothespin Clip */}
      <div className="relative w-full flex justify-center z-20 -mb-4">
        <div className="w-5 h-9 bg-amber-200 rounded-sm border border-amber-800 shadow-md flex flex-col items-center justify-between p-0.5 group-hover:scale-110 transition-transform">
          <div className="w-full h-1 bg-amber-700 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-900" />
          <div className="w-full h-1 bg-amber-800" />
        </div>
      </div>

      {/* Polaroid White Photo Frame (Matching Screenshot) */}
      <div className="bg-macrow-cream text-macrow-darker p-4 rounded-sm shadow-2xl border-2 border-stone-300 flex flex-col justify-between min-h-[380px]">
        {/* Image Slot */}
        <div className="relative aspect-[4/3] bg-stone-900 rounded-xs overflow-hidden border border-stone-300">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white/40 border border-white/60" />
        </div>

        {/* Text Content */}
        <div className="mt-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-lg text-stone-900 leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 text-xs font-sans text-stone-700 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Footer Tag */}
          <div className="mt-4 pt-2 border-t border-stone-300 text-right">
            <span className="text-[9px] font-mono text-stone-500 font-bold uppercase tracking-wider">
              {item.tag}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhatWeDevelop() {
  return (
    <section id="what-we-develop" className="py-24 bg-macrow-dark relative border-b border-macrow-borderDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header (Matching Screenshot) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-macrow-surface border border-macrow-brass/30 mb-4 shadow">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-macrow-cream uppercase">
              Fresh from the Darkroom
            </span>
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-bold text-macrow-cream tracking-tight">
            What We Develop
          </h2>

          <p className="mt-4 text-base sm:text-lg text-macrow-textMain/80 font-sans leading-relaxed">
            Developed with precision, delivered with passion.
          </p>
        </div>

        {/* --- ROW 1: ROPE LINE + 3 HANGING POLAROID CARDS --- */}
        <div className="mb-12">
          <RopeLineWithBolts />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-2">
            {row1Cards.map((card) => (
              <PolaroidCard key={card.id} item={card} />
            ))}
          </div>
        </div>

        {/* --- ROW 2: ROPE LINE + 3 HANGING POLAROID CARDS --- */}
        <div className="mb-16">
          <RopeLineWithBolts />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-2">
            {row2Cards.map((card) => (
              <PolaroidCard key={card.id} item={card} />
            ))}
          </div>
        </div>

        {/* Centered Darkroom Caption Note (Matching Screenshot) */}
        <p className="text-center text-xs font-serif italic text-macrow-textMuted max-w-2xl mx-auto leading-relaxed">
          "Each piece is carefully developed in our creative darkroom, ensuring every detail captures the essence of your vision with precision and artistic flair."
        </p>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const row1Cards = [
  {
    id: 1,
    title: "Campaign & Ad Content",
    desc: "Multi-platform video campaigns ready for every channel—YouTube, TikTok, Instagram, and beyond.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-0",
    tag: "M0232 L58"
  },
  {
    id: 2,
    title: "Brand Films & Stories",
    desc: "Cinematic brand videos that capture your essence and connect with audiences on an emotional level.",
    image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-0",
    tag: "M0232 L58"
  },
  {
    id: 3,
    title: "Trailers & Promos",
    desc: "High-impact teasers that hook viewers instantly—perfect for launches, events, and announcements.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-0",
    tag: "M0232 L58"
  }
];

const row2Cards = [
  {
    id: 4,
    title: "Short-Form Films",
    desc: "Festival-ready mini-movies up to 5 minutes—ideal for investors, events, and premium content.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-0",
    tag: "M0232 L58"
  },
  {
    id: 5,
    title: "Animation & Motion",
    desc: "Stylized animated content that explains complex ideas without needing live actors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-0",
    tag: "M0232 L58"
  },
  {
    id: 6,
    title: "Social Content",
    desc: "Thumb-stopping vertical videos delivered in batches to keep your feed consistently engaging.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-2",
    tag: "M0232 L58"
  }
];

function RopeLineWithBolts() {
  return (
    <div className="relative w-full flex items-center my-6">
      {/* Left Metallic Bolt */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 border-4 border-slate-800 shadow-xl flex items-center justify-center shrink-0 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-inner" />
      </div>

      {/* Center Wood/Brown Rod */}
      <div className="flex-1 h-3.5 bg-[#6B3E11] border-y-2 border-[#3A1E03] shadow-lg relative z-10" />

      {/* Right Metallic Bolt */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 border-4 border-slate-800 shadow-xl flex items-center justify-center shrink-0 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-inner" />
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
      <div className="relative w-full flex justify-center z-20 -mb-3">
        <div className="w-4 h-9 bg-[#E3C28A] rounded-sm shadow-md flex flex-col items-center justify-center relative overflow-hidden border border-[#C29F62]">
          {/* Metal Spring in middle */}
          <div className="w-full h-2.5 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-200 border-y border-slate-500 absolute top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Polaroid White Photo Frame */}
      <div className="bg-[#FAFAFA] text-black p-3.5 pb-4 rounded shadow-2xl flex flex-col justify-between w-full relative">
        {/* Image Slot */}
        <div className="relative aspect-[4/3] bg-black rounded-sm overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white/20 border border-white/30 shadow-sm" />
        </div>

        {/* Text Content */}
        <div className="mt-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-[16px] text-[#1c1917] leading-snug">
              {item.title}
            </h3>
            <p className="mt-1.5 text-[11px] font-sans text-[#78716c] leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Footer Tag */}
          <div className="mt-3 pt-2 text-right">
            <span className="text-[7px] font-mono text-[#9ca3af] uppercase tracking-widest font-bold">
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
    <section id="what-we-develop" className="py-24 bg-[#0d0906] relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2a1b12]/60 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E5484D]" />
            <span className="text-[10px] font-mono tracking-widest text-[#EEDDA8] uppercase font-bold">
              Fresh from the Darkroom
            </span>
            <span className="w-2 h-2 rounded-full bg-[#B58C34]" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#FDEECA] tracking-tight">
            What We Develop
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#D4B872] font-semibold leading-relaxed">
            Developed with precision, delivered with passion
          </p>
        </div>

        {/* --- ROW 1: ROPE LINE + 3 HANGING POLAROID CARDS --- */}
        <div className="mb-14">
          <RopeLineWithBolts />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-1 px-4">
            {row1Cards.map((card) => (
              <PolaroidCard key={card.id} item={card} />
            ))}
          </div>
        </div>

        {/* --- ROW 2: ROPE LINE + 3 HANGING POLAROID CARDS --- */}
        <div className="mb-20">
          <RopeLineWithBolts />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-1 px-4">
            {row2Cards.map((card) => (
              <PolaroidCard key={card.id} item={card} />
            ))}
          </div>
        </div>

        {/* Centered Darkroom Caption Note */}
        <p className="text-center text-[10px] font-serif text-[#A38A52] max-w-2xl mx-auto leading-relaxed px-4">
          Each piece is carefully developed in our creative darkroom, ensuring every detail captures the essence of<br className="hidden sm:block" /> your vision with precision and artistic flair.
        </p>

      </div>
    </section>
  );
}

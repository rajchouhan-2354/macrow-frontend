import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star } from 'lucide-react';

const outlaws = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Head of Strategy & Growth",
    bounty: "Turning vague briefs into hyper-scalable market monopolies.",
    reward: "$50,000 ARR Boost",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    tilt: "-rotate-2",
    badge: "FOUNDER & STRATEGIST",
  },
  {
    id: 2,
    name: "Rohan Varma",
    role: "Creative & Brand Director",
    bounty: "Crafting iconic brand narratives that outshine noisy markets.",
    reward: "100% Brand Recall",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-2",
    badge: "CREATIVE OUTLAW",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Lead Systems & Tech Architect",
    bounty: "Architecting zero-downtime platforms and automated growth engines.",
    reward: "99.99% Uptime",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    tilt: "-rotate-1",
    badge: "TECH MARSHAL",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "Director of Performance & Data",
    bounty: "Exposing false metrics and enforcing total multi-touch truth.",
    reward: "4.2x ROAS Floor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    tilt: "rotate-3",
    badge: "DATA HUNTER",
  },
];

export default function MeetTheOutlaws() {
  return (
    <section id="outlaws" className="py-28 bg-macrow-white text-macrow-textDark relative border-b border-macrow-borderLight overflow-hidden">
      {/* Background Wanted Notice Silhouette Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none flex justify-around items-center">
        <Star className="w-96 h-96 text-macrow-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-western tracking-widest text-macrow-red uppercase flex items-center justify-center gap-2 font-bold">
            <Shield className="w-4 h-4 text-macrow-red" />
            // The Crew Behind the Growth
          </span>
          <h2 className="text-4xl sm:text-6xl font-western text-macrow-black mt-2 tracking-wide">
            Meet the Outlaws
          </h2>
          <p className="mt-4 text-base sm:text-lg text-macrow-textDarkMuted font-sans">
            A battle-tested collective of strategists, creatives, engineers, and growth operators.
          </p>
        </div>

        {/* Wanted Poster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outlaws.map((outlaw, idx) => (
            <motion.div
              key={outlaw.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              tabIndex={0}
              className={`group relative bg-white text-macrow-black rounded-sm p-5 border-4 border-macrow-black shadow-wanted cursor-pointer transform ${outlaw.tilt} hover:rotate-0 focus:rotate-0 hover:scale-105 focus:scale-105 hover:border-macrow-red transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-macrow-red`}
            >
              {/* Pin Header Graphic */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-macrow-red border-2 border-macrow-black shadow flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Distressed WANTED Banner */}
              <div className="text-center border-b-2 border-macrow-black/20 pb-3 pt-1">
                <span className="font-western text-3xl sm:text-4xl tracking-widest text-macrow-red block leading-none">
                  WANTED
                </span>
                <span className="text-[10px] font-typewriter font-bold tracking-widest text-macrow-black block mt-1 uppercase">
                  FOR GROWTH EXCELLENCE · {outlaw.badge}
                </span>
              </div>

              {/* Person Sepia Portrait */}
              <div className="mt-4 relative aspect-[4/4] bg-macrow-black border-2 border-macrow-black overflow-hidden rounded-xs">
                <img
                  src={outlaw.image}
                  alt={outlaw.name}
                  className="w-full h-full object-cover filter contrast-125 brightness-95 group-hover:brightness-105 transition-all duration-500"
                />
                {/* Replacement marker */}
                <span className="absolute bottom-2 left-2 bg-macrow-black/90 text-white text-[9px] font-mono px-2 py-0.5 rounded border border-white/20">
                  [REPLACE WITH REAL TEAM BIO]
                </span>
              </div>

              {/* Name & Title */}
              <div className="mt-4 text-center">
                <h3 className="font-western text-2xl text-macrow-black leading-tight">
                  {outlaw.name}
                </h3>
                <p className="text-xs font-sans font-bold text-macrow-red mt-0.5 uppercase tracking-wide">
                  {outlaw.role}
                </p>
              </div>

              {/* Tongue-in-cheek Bounty Line */}
              <div className="mt-4 p-3 bg-macrow-lightSurface rounded border border-dashed border-macrow-borderLight text-center">
                <p className="text-[11px] font-sans italic text-macrow-black leading-snug">
                  <span className="font-bold text-macrow-red font-typewriter">WANTED FOR:</span> "{outlaw.bounty}"
                </p>
              </div>

              {/* Reward Line */}
              <div className="mt-4 border-t-2 border-macrow-black/20 pt-2 text-center flex items-center justify-between font-typewriter text-xs font-bold text-macrow-black">
                <span>REWARD:</span>
                <span className="text-white bg-macrow-red px-2 py-0.5 rounded font-bold shadow-sm">
                  {outlaw.reward}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

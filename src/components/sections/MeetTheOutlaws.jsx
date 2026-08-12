import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Star } from 'lucide-react';

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
    <section id="outlaws" className="py-28 bg-macrow-darker relative border-b border-macrow-borderDark overflow-hidden">
      {/* Background Wanted Notice Silhouette Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none flex justify-around items-center">
        <Star className="w-96 h-96 text-macrow-brass" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-western tracking-widest text-macrow-brass uppercase flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-macrow-brass" />
            // The Crew Behind the Growth
          </span>
          <h2 className="text-4xl sm:text-6xl font-western text-macrow-cream mt-2 tracking-wide">
            Meet the Outlaws
          </h2>
          <p className="mt-4 text-base sm:text-lg text-macrow-textMain/80 font-sans">
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
              className={`group relative bg-macrow-cream text-macrow-darker rounded-sm p-5 border-4 border-macrow-rope shadow-wanted cursor-pointer transform ${outlaw.tilt} hover:rotate-0 focus:rotate-0 hover:scale-105 focus:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-macrow-brass`}
            >
              {/* Pin Header Graphic */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-macrow-brass border-2 border-macrow-dark shadow flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-macrow-darker" />
              </div>

              {/* Distressed WANTED Banner */}
              <div className="text-center border-b-2 border-macrow-rope pb-3 pt-1">
                <span className="font-western text-3xl sm:text-4xl tracking-widest text-macrow-rope block leading-none">
                  WANTED
                </span>
                <span className="text-[10px] font-typewriter font-bold tracking-widest text-stone-700 block mt-1 uppercase">
                  FOR GROWTH EXCELLENCE · {outlaw.badge}
                </span>
              </div>

              {/* Person Sepia Portrait */}
              <div className="mt-4 relative aspect-[4/4] bg-stone-900 border-2 border-macrow-rope overflow-hidden rounded-xs">
                <img
                  src={outlaw.image}
                  alt={outlaw.name}
                  className="w-full h-full object-cover filter sepia contrast-125 brightness-90 group-hover:sepia-0 group-hover:brightness-100 group-focus:sepia-0 transition-all duration-500"
                />
                {/* Replacement marker */}
                <span className="absolute bottom-2 left-2 bg-macrow-darker/90 text-macrow-cream text-[9px] font-mono px-2 py-0.5 rounded border border-macrow-brass/30">
                  [REPLACE WITH REAL TEAM BIO]
                </span>
              </div>

              {/* Name & Title */}
              <div className="mt-4 text-center">
                <h3 className="font-western text-2xl text-stone-900 leading-tight">
                  {outlaw.name}
                </h3>
                <p className="text-xs font-sans font-bold text-macrow-rope mt-0.5 uppercase tracking-wide">
                  {outlaw.role}
                </p>
              </div>

              {/* Tongue-in-cheek Bounty Line */}
              <div className="mt-4 p-3 bg-macrow-parchment rounded border border-dashed border-macrow-rope/40 text-center">
                <p className="text-[11px] font-sans italic text-stone-800 leading-snug">
                  <span className="font-bold text-macrow-rope font-typewriter">WANTED FOR:</span> "{outlaw.bounty}"
                </p>
              </div>

              {/* Reward Line */}
              <div className="mt-4 border-t-2 border-macrow-rope pt-2 text-center flex items-center justify-between font-typewriter text-xs font-bold text-macrow-rope">
                <span>REWARD:</span>
                <span className="text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
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

import React from 'react';
import { motion } from 'framer-motion';
import { Film, RefreshCw } from 'lucide-react';

const stages = [
  {
    num: "01",
    name: "Understand",
    sub: "Business model, market, constraints, current data.",
    icon: "🔍"
  },
  {
    num: "02",
    name: "Strategize",
    sub: "Turn findings into a clear plan and system priorities.",
    icon: "🎯"
  },
  {
    num: "03",
    name: "Build",
    sub: "Construct the assets, tech platforms and channel systems.",
    icon: "🛠️"
  },
  {
    num: "04",
    name: "Communicate",
    sub: "Shape the positioning, creative message and narrative.",
    icon: "📣"
  },
  {
    num: "05",
    name: "Launch",
    sub: "Execute orchestrated rollout into competitive markets.",
    icon: "🚀"
  },
  {
    num: "06",
    name: "Measure",
    sub: "Instrument and read what is actually happening in real-time.",
    icon: "📊"
  },
  {
    num: "07",
    name: "Optimize",
    sub: "Refine creative & channels based on evidence, not assumptions.",
    icon: "⚡"
  },
  {
    num: "08",
    name: "Scale",
    sub: "Compound what works across expansion markets & products.",
    icon: "📈"
  }
];

export default function StoryboardProcess() {
  return (
    <section id="storyboard" className="py-24 bg-macrow-white text-macrow-textDark relative border-b border-macrow-borderLight overflow-hidden">
      {/* Film Strip Background Motif */}
      <div className="absolute inset-x-0 top-0 h-4 bg-macrow-lightMuted flex items-center justify-around opacity-60">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-sm bg-macrow-red/40" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-western tracking-widest text-macrow-red uppercase inline-flex items-center gap-2 font-bold">
            <Film className="w-4 h-4 text-macrow-red" />
            // Methodology & Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-macrow-black mt-2">
            A Glimpse Into Our Storyboard Development Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-macrow-textDarkMuted font-sans">
            The 8-stage Growth Loop: how MACROW turns complex business goals into predictable compounding outcomes.
          </p>
        </div>

        {/* Storyboard Grid / Timeline Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-macrow-lightSurface rounded-xl p-6 border-2 border-dashed border-macrow-borderLight hover:border-macrow-red transition-all duration-300 shadow-card-light flex flex-col justify-between"
            >
              {/* Film Strip Frame Sprocket Holes */}
              <div className="absolute top-2 left-2 right-2 flex justify-between opacity-40">
                <div className="w-1.5 h-1.5 bg-macrow-black rounded-xs" />
                <div className="w-1.5 h-1.5 bg-macrow-black rounded-xs" />
              </div>

              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="font-western text-2xl text-macrow-red">
                    {stage.num}
                  </span>
                  <span className="text-2xl">{stage.icon}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-macrow-black group-hover:text-macrow-red transition-colors">
                  {stage.name}
                </h3>

                <p className="mt-2 text-xs text-macrow-textDarkMuted font-sans leading-relaxed">
                  {stage.sub}
                </p>
              </div>

              {/* Connecting Step Indicator */}
              <div className="mt-6 pt-3 border-t border-macrow-borderLight flex items-center justify-between text-[11px] text-macrow-textDarkMuted font-mono font-semibold">
                <span>STAGE {stage.num} / 08</span>
                <span className="text-macrow-red group-hover:underline transition-colors">
                  {index < 7 ? "NEXT STAGE →" : "LOOP COMPOUND"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop Caption Banner (Secondary 30% Black Container) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 rounded-2xl bg-macrow-black text-macrow-white border border-macrow-red/40 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 shadow-xl"
        >
          <div className="w-12 h-12 rounded-full bg-macrow-red/15 border border-macrow-red/50 flex items-center justify-center shrink-0">
            <RefreshCw className="w-6 h-6 text-macrow-red animate-spin-slow" />
          </div>
          <div className="text-left">
            <h4 className="text-base font-bold font-display text-macrow-white">
              Continuous Evidence Accumulation
            </h4>
            <p className="text-xs text-macrow-white/85 font-sans mt-0.5">
              "Not a funnel with an end. A loop that gets sharper every cycle because evidence accumulates."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

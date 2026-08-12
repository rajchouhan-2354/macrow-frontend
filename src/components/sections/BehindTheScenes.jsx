import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Sparkles, RefreshCw, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

const filmFrames = [
  {
    num: "01",
    title: "Concept & Script",
    desc: "Scene by scene draft with dialogues, key messages, and tone codes.",
    status: "COMPLETE",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    num: "02",
    title: "Look & Storyboard",
    desc: "Art direction selection, character design, and visual frame testing.",
    status: "COMPLETE",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
  },
  {
    num: "03",
    title: "Build & Systems",
    desc: "Constructing high-conviction video assets, landing engines, and tech pipelines.",
    status: "IN PROGRESS",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
  },
  {
    num: "04",
    title: "Communicate & Launch",
    desc: "Deploying creative narrative across targeted distribution channels.",
    status: "NEXT UP",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  },
  {
    num: "05",
    title: "Measure & Scale",
    desc: "Instrumenting real-time evidence gathering for continuous compounding.",
    status: "LOOP",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
  }
];

const storyboardNodes = [
  {
    category: "Forest Run",
    shots: [
      { title: "Forest Trail", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80" },
      { title: "Misty Canopy", img: "https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=300&q=80" },
      { title: "Deep Woods", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80" },
    ]
  },
  {
    category: "Desolate Landscape",
    shots: [
      { title: "Barren Land", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80" },
      { title: "Burnt Horizon", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80" },
      { title: "Twilight Peak", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" },
    ]
  },
  {
    category: "Character Focus",
    shots: [
      { title: "Hoodie Figure", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
      { title: "Anxious Glance", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
      { title: "Surprise Focus", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
    ]
  },
  {
    category: "Action Sequence",
    shots: [
      { title: "Tree Climb", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80" },
      { title: "Wolf Chase", img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=300&q=80" },
      { title: "Cliff Overlook", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=300&q=80" },
    ]
  }
];

export default function BehindTheScenes() {
  const [activeFrame, setActiveFrame] = useState(0);

  return (
    <section className="py-24 bg-macrow-dark relative border-t border-b border-macrow-borderDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header (Matching Screenshot) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-macrow-surface border border-macrow-brass/30 mb-4 shadow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-macrow-cream uppercase">
              Behind the Scenes
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-bold text-macrow-cream tracking-tight">
            How We Create Magic
          </h2>

          <p className="mt-4 text-base sm:text-lg text-macrow-textMain/80 font-sans leading-relaxed">
            Watch our process unfold frame by frame.
          </p>
        </div>

        {/* --- FILM STRIP HORIZONTAL REEL CONTAINER (Matching Screenshot) --- */}
        <div className="bg-macrow-surface rounded-2xl md:rounded-3xl border-2 border-macrow-borderDark shadow-2xl p-6 md:p-8 relative overflow-hidden mb-12">
          {/* Top Film Sprocket Holes Strip */}
          <div className="w-full flex items-center justify-between opacity-30 pb-4 border-b border-macrow-borderDark/60 mb-6 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-macrow-cream border border-macrow-dark" />
            ))}
          </div>

          {/* Horizontal Frames Carousel / Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {filmFrames.map((frame, index) => (
              <motion.div
                key={frame.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveFrame(index)}
                className={`group cursor-pointer rounded-xl bg-macrow-darker border transition-all duration-300 p-4 flex flex-col justify-between ${
                  activeFrame === index
                    ? 'border-macrow-brass shadow-gold-glow scale-[1.02]'
                    : 'border-macrow-borderDark hover:border-macrow-brass/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-western text-xl text-macrow-brass">
                      {frame.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-macrow-surface text-macrow-cream border border-macrow-borderDark">
                      {frame.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-macrow-cream group-hover:text-macrow-brass transition-colors">
                    {frame.title}
                  </h3>

                  <p className="mt-2 text-xs text-macrow-textMain/80 font-sans leading-relaxed">
                    {frame.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-macrow-borderDark/60 flex items-center justify-between text-[10px] font-mono text-macrow-brass">
                  <span>FRAME {frame.num}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Film Sprocket Holes Strip */}
          <div className="w-full flex items-center justify-between opacity-30 pt-6 mt-6 border-t border-macrow-borderDark/60 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-macrow-cream border border-macrow-dark" />
            ))}
          </div>
        </div>

        {/* --- STATS BADGE STRIP (Matching Screenshot) --- */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-macrow-surface border border-macrow-borderDark shadow-xl text-xs font-mono">
            <span className="flex items-center gap-2 text-macrow-cream">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              24 FPS
            </span>
            <span className="text-macrow-borderDark">|</span>
            <span className="flex items-center gap-2 text-macrow-cream">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              5-7 Days Sprint
            </span>
            <span className="text-macrow-borderDark">|</span>
            <span className="flex items-center gap-2 text-macrow-cream">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Cinema Quality
            </span>
          </div>
        </div>

        {/* --- STORYBOARD DEVELOPMENT PROCESS MATRIX CANVAS (Matching Screenshot) --- */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-macrow-textMuted uppercase tracking-widest">
              A glimpse into our storyboard development process
            </span>
          </div>

          <div className="bg-macrow-darker rounded-3xl border-2 border-macrow-borderDark p-6 md:p-8 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {storyboardNodes.map((cat) => (
                <div key={cat.category} className="space-y-4">
                  <div className="bg-macrow-surface px-3 py-1.5 rounded border border-macrow-borderDark text-xs font-mono font-bold text-macrow-brass text-center">
                    {cat.category}
                  </div>

                  <div className="space-y-3">
                    {cat.shots.map((shot) => (
                      <div
                        key={shot.title}
                        className="group relative aspect-[16/10] rounded-lg overflow-hidden bg-macrow-surface border border-macrow-borderDark hover:border-macrow-brass transition-all duration-300 shadow"
                      >
                        <img
                          src={shot.img}
                          alt={shot.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-macrow-darker via-transparent to-transparent opacity-80" />
                        <span className="absolute bottom-1.5 left-2 text-[10px] font-mono text-macrow-cream font-semibold">
                          {shot.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs font-serif italic text-macrow-textMuted">
            "Diverse scenarios, characters, and styles — all generated through our growth & creative system"
          </p>
        </div>

      </div>
    </section>
  );
}

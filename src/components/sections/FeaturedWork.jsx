import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Play, Film, Sparkles, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Scaling a SaaS Platform Across 3 Global Markets",
    client: "CloudScale Inc.",
    industry: "SaaS & Technology",
    category: "SaaS & Technology",
    style: "Growth Engine",
    tone: "High Conviction",
    format: "Multi-Region GTM",
    outcome: "3.4x ARR expansion & unified multi-region growth engine in 9 months.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Product Strategy", "Performance", "GTM"],
  },
  {
    id: 2,
    title: "Omnichannel Brand Transformation & D2C Revenue Engine",
    client: "LuxeWear Global",
    industry: "D2C & Retail",
    category: "D2C",
    style: "Narrative Film",
    tone: "Premium & Cinematic",
    format: "Omnichannel Campaign",
    outcome: "210% increase in repeat customer LTV via tailored brand storytelling.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Brand Identity", "E-commerce", "Retention"],
  },
  {
    id: 3,
    title: "Patient Acquisition & Telehealth Experience Platform",
    client: "PulseHealth",
    industry: "Healthcare",
    category: "Healthcare",
    style: "Compliant UX",
    tone: "Empathetic & Trusted",
    format: "Digital Platform",
    outcome: "Reduced cost per acquisition by 42% while scaling compliant funnel.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["HealthTech", "Marcomm", "UX Design"],
  },
  {
    id: 4,
    title: "Institutional Wealth Portal & Automated Lead Scoring",
    client: "Aegis Capital",
    industry: "Finance & Fintech",
    category: "Finance",
    style: "Enterprise Portal",
    tone: "Authoritative",
    format: "Intake System",
    outcome: "$140M+ inbound pipeline qualified through intelligent intake engine.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    tags: ["Fintech", "Automation", "Lead Scoring"],
  },
  {
    id: 5,
    title: "Luxury Real Estate Digital Footprint & VR Storyboarding",
    client: "Veritas Estates",
    industry: "Real Estate",
    category: "Real Estate",
    style: "3D Motion",
    tone: "Aspirational",
    format: "VR Showroom",
    outcome: "Pre-sold 65% of commercial development prior to groundbreaking.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tags: ["Real Estate", "3D Motion", "Campaigns"],
  },
  {
    id: 6,
    title: "Industrial Manufacturing IoT & B2B Content Engine",
    client: "Atlas Robotics",
    industry: "Manufacturing",
    category: "Manufacturing",
    style: "Technical Authority",
    tone: "Industrial Power",
    format: "B2B Content Hub",
    outcome: "Positioned enterprise firm as market authority across EMEA.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    tags: ["Industrial", "B2B Marketing", "Systems"],
  },
];

const categories = ["All", "SaaS & Technology", "D2C", "Healthcare", "Finance", "Real Estate", "Manufacturing"];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="featured-work" className="py-24 bg-macrow-dark relative border-t border-macrow-borderDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Section Header (Matching Reference Screenshot) */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-macrow-surface border border-macrow-brass/30 mb-4 shadow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-macrow-cream uppercase">
              Featured Work
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-400" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-bold text-macrow-cream tracking-tight">
            Creative Productions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-macrow-textMain/80 font-sans leading-relaxed">
            Our latest commercial for Hampton — exploring the lonely journey of startup founders and the power of community.
          </p>
        </div>

        {/* --- LARGE FEATURED HERO CASE STUDY CARD (Matching Screenshot) --- */}
        <div className="max-w-5xl mx-auto mb-10 bg-macrow-surface rounded-2xl md:rounded-3xl border border-macrow-borderDark shadow-2xl overflow-hidden group">
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
                <div className="absolute inset-0 bg-gradient-to-t from-macrow-surface via-transparent to-macrow-darker/60" />

                {/* Top Video Player Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-macrow-darker/80 px-3 py-1.5 rounded-full border border-macrow-borderDark backdrop-blur-md">
                    <div className="w-5 h-5 rounded-full bg-macrow-brass flex items-center justify-center font-western text-xs text-macrow-darker font-bold">
                      M
                    </div>
                    <span className="text-xs font-semibold text-macrow-cream font-sans">
                      Hampton — Crazy Lonely Journey
                    </span>
                  </div>

                  <span className="bg-macrow-brass text-macrow-darker font-bold text-xs px-3 py-1 rounded-full shadow">
                    Latest Project
                  </span>
                </div>

                {/* Big Red YouTube Play Button */}
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-14 bg-red-600 hover:bg-red-500 rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group/btn"
                  aria-label="Play Featured Video"
                >
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1" />
                </button>

                {/* Bottom Video Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-macrow-cream/80 font-mono z-10">
                  <span>Watch on MACROW Studio</span>
                  <span className="bg-macrow-darker/80 px-2.5 py-1 rounded border border-macrow-borderDark">
                    [REPLACE WITH REAL CASE STUDY ASSET]
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Bottom Card Content Box (Matching Screenshot Metadata Grid) */}
          <div className="p-8 sm:p-10 bg-macrow-surface border-t border-macrow-borderDark/80">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
              <span className="text-macrow-brass font-bold uppercase tracking-wider">Commercial</span>
              <span className="text-macrow-textMuted">•</span>
              <span className="text-macrow-textMain">Client: Hampton</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold text-macrow-cream tracking-tight">
              The Lonely Journey
            </h3>

            <p className="mt-3 text-sm sm:text-base text-macrow-textMain/80 font-sans leading-relaxed max-w-3xl">
              A powerful commercial exploring the isolation that startup founders face and how joining Hampton's community can transform that journey. This piece captures the emotional weight of entrepreneurship and the relief that comes with finding your tribe.
            </p>

            {/* 4-Column Metadata Grid (Matching Reference Image) */}
            <div className="mt-8 pt-6 border-t border-macrow-borderDark/60 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="text-[10px] font-mono text-macrow-textMuted uppercase block">Industry</span>
                <span className="text-xs font-semibold text-macrow-cream mt-1 block">Community Platform</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-macrow-textMuted uppercase block">Style</span>
                <span className="text-xs font-semibold text-macrow-cream mt-1 block">Narrative Drama</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-macrow-textMuted uppercase block">Tone</span>
                <span className="text-xs font-semibold text-macrow-cream mt-1 block">Emotional Journey</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-macrow-textMuted uppercase block">Format</span>
                <span className="text-xs font-semibold text-macrow-cream mt-1 block">Digital Commercial</span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}

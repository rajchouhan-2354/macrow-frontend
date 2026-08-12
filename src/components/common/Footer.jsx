import React from 'react';
import { Linkedin, Twitter, Instagram, ArrowUp, Shield } from 'lucide-react';
import TornDivider from './TornDivider';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-macrow-darker text-macrow-textMain relative pt-12 pb-8 border-t border-macrow-borderDark overflow-hidden">
      {/* Top Rope Border Motif */}
      <div className="absolute top-0 left-0 right-0">
        <TornDivider type="rope" className="my-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-macrow-borderDark/60">
          {/* Brand Column (Spans 2 on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded bg-macrow-surface border border-macrow-brass/40 flex items-center justify-center font-western text-2xl text-macrow-brass">
                  M
                </div>
                <span className="font-western text-3xl text-macrow-cream tracking-wider">
                  MACROW
                </span>
              </a>

              <p className="text-xs font-western text-macrow-brass tracking-widest uppercase mb-3">
                Digital · Marcomm · Technology · Growth
              </p>

              <p className="text-sm text-macrow-textMuted max-w-sm font-sans leading-relaxed">
                A global Digital, Marcomm and Technology growth partner for businesses at every stage. We observe first, plan as one system, and execute for compounding outcomes.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded bg-macrow-surface border border-macrow-borderDark hover:border-macrow-brass text-macrow-cream hover:text-macrow-brass flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded bg-macrow-surface border border-macrow-borderDark hover:border-macrow-brass text-macrow-cream hover:text-macrow-brass flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded bg-macrow-surface border border-macrow-borderDark hover:border-macrow-brass text-macrow-cream hover:text-macrow-brass flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Capabilities Column */}
          <div>
            <h4 className="font-western text-base text-macrow-cream mb-4 uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-macrow-textMuted font-sans">
              <li><a href="#what-we-develop" className="hover:text-macrow-brass transition-colors">Digital Strategy</a></li>
              <li><a href="#what-we-develop" className="hover:text-macrow-brass transition-colors">Marcomm & Brand</a></li>
              <li><a href="#what-we-develop" className="hover:text-macrow-brass transition-colors">Technology & AI</a></li>
              <li><a href="#what-we-develop" className="hover:text-macrow-brass transition-colors">Data & Instrumentation</a></li>
              <li><a href="#what-we-develop" className="hover:text-macrow-brass transition-colors">Growth & Scaling</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-western text-base text-macrow-cream mb-4 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-macrow-textMuted font-sans">
              <li><a href="#featured-work" className="hover:text-macrow-brass transition-colors">Brand Building</a></li>
              <li><a href="#featured-work" className="hover:text-macrow-brass transition-colors">Lead Generation Engine</a></li>
              <li><a href="#featured-work" className="hover:text-macrow-brass transition-colors">Business Growth System</a></li>
              <li><a href="#featured-work" className="hover:text-macrow-brass transition-colors">Digital Transformation</a></li>
              <li><a href="#featured-work" className="hover:text-macrow-brass transition-colors">Workflow Automation</a></li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-western text-base text-macrow-cream mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-macrow-textMuted font-sans">
              <li><a href="#storyboard" className="hover:text-macrow-brass transition-colors">8-Stage Growth Loop</a></li>
              <li><a href="#featured-work" className="hover:text-macrow-brass transition-colors">Case Studies</a></li>
              <li><a href="#outlaws" className="hover:text-macrow-brass transition-colors">Meet the Outlaws</a></li>
              <li><a href="#contact" className="hover:text-macrow-brass transition-colors">Start a Conversation</a></li>
              <li><a href="#" className="hover:text-macrow-brass transition-colors">Ahmedabad HQ</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Location Banner */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-macrow-borderDark/60 text-xs text-macrow-textMuted font-sans">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Ahmedabad, Gujarat, India — Working with businesses across global markets.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-macrow-brass hover:underline focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-macrow-textMuted">
          <p>© 2026 MACROW. All rights reserved.</p>
          <p className="text-macrow-brass/80">Built in India. Designed for the world.</p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-macrow-darker">
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90 contrast-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-a-modern-city-at-night-42898-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle Dark Vignette for Text Contrast at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-macrow-darker via-macrow-darker/40 to-transparent opacity-90" />
      </div>

      {/* One-Liner Text in Bottom-Left Corner */}
      <div className="absolute bottom-10 sm:bottom-14 left-6 sm:left-12 lg:left-16 z-20 max-w-2xl">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-macrow-cream tracking-tight leading-[1.15]"
        >
          Growth belongs to those who{' '}
          <span className="font-western text-macrow-brass italic font-normal underline decoration-macrow-brass/40 decoration-wavy underline-offset-8">
            observe first.
          </span>
        </motion.h1>
      </div>

      {/* Audio Mute/Unmute Toggle */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-10 right-6 sm:right-12 z-30 p-3 rounded-full bg-macrow-surface/70 border border-macrow-borderDark text-macrow-cream hover:text-macrow-brass hover:border-macrow-brass transition-all backdrop-blur-md shadow-lg"
        title={isMuted ? "Unmute Video" : "Mute Video"}
        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-macrow-brass" />}
      </button>

    </section>
  );
}

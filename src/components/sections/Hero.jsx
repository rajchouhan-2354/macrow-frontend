import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
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
    <section className="relative w-full h-screen overflow-hidden bg-macrow-black">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
      </div>

      {/* One-Liner Text in Bottom-Left Corner */}
      <div className="absolute bottom-10 sm:bottom-14 left-6 sm:left-12 lg:left-16 z-20 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-macrow-white tracking-tight leading-[1.15]"
        >
          Growth belongs to those who{' '}
          <span className="font-western text-macrow-red italic font-normal underline decoration-macrow-red/50 decoration-wavy underline-offset-8">
            observe first.
          </span>
        </motion.h1>
      </div>

      {/* Audio Mute/Unmute Toggle */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-10 right-6 sm:right-12 z-30 p-3 rounded-full bg-macrow-black/70 border border-white/20 text-macrow-white hover:text-macrow-red hover:border-macrow-red transition-all backdrop-blur-md shadow-lg"
        title={isMuted ? "Unmute Video" : "Mute Video"}
        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-macrow-red" />}
      </button>
    </section>
  );
}

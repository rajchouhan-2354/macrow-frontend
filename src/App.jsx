import React from 'react';
import GrainOverlay from './components/common/GrainOverlay';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import FeaturedWork from './components/sections/FeaturedWork';
import Recognition from './components/sections/Recognition';
import BehindTheScenes from './components/sections/BehindTheScenes';
import StoryboardProcess from './components/sections/StoryboardProcess';
import WhatWeDevelop from './components/sections/WhatWeDevelop';
import MeetTheOutlaws from './components/sections/MeetTheOutlaws';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import TornDivider from './components/common/TornDivider';

export default function App() {
  return (
    <div className="relative min-h-screen bg-macrow-dark text-macrow-textMain overflow-x-hidden">
      {/* Film Grain Texture Overlay */}
      <GrainOverlay />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Featured Work */}
        <FeaturedWork />

        <TornDivider type="rope" />

        {/* Section 3: Recognition & Achievements */}
        <Recognition />

        {/* Section 4: Behind the Scenes Carousel */}
        <BehindTheScenes />

        <TornDivider type="rope" />

        {/* Section 5: Storyboard Process (8-Stage Growth Loop) */}
        <StoryboardProcess />

        {/* Section 6: What We Develop (Hanging Rope Gallery) */}
        <WhatWeDevelop />

        <TornDivider type="rope" />

        {/* Section 7: Meet the Outlaws (Wanted Posters Grid) */}
        <MeetTheOutlaws />

        {/* Section 8: Let's Create Together (Contact Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

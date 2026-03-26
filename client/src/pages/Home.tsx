/**
 * Meet Ashley — Desert Bloom Design
 * Organic Naturalism: warm terracotta, sage green, cream
 * Fonts: Playfair Display (display), DM Sans (body), Caveat (handwritten)
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import OriginStory from "@/components/OriginStory";
import CareerTimeline from "@/components/CareerTimeline";
import XFTeamSection from "@/components/XFTeamSection";
import FunFacts from "@/components/FunFacts";
import ByTheNumbers from "@/components/ByTheNumbers";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream relative overflow-x-hidden" style={{ backgroundColor: 'oklch(0.97 0.01 85)' }}>
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <OriginStory />
      <CareerTimeline />
      <XFTeamSection />
      <FunFacts />
      <ByTheNumbers />
      <ContactSection />
    </div>
  );
}

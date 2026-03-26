import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const taglines = [
  "Plant mom of 25+",
  "Dog mom to Pippin",
  "Globe-trotter (7 countries & counting)",
  "The one who keeps the COO's world spinning",
  "Fulbright Fellow turned tech ops leader",
  "Arizona roots, global reach",
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const tagline = taglines[currentTagline];
    if (isTyping) {
      if (displayText.length < tagline.length) {
        const timeout = setTimeout(() => {
          setDisplayText(tagline.slice(0, displayText.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTagline]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663239052636/8rWWX2rK7UYPVKCU7RTqps/hero-bg-oAg7zX4yqpS73SFYSjCBNm.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.97 0.01 85 / 0.3), oklch(0.97 0.01 85 / 0.7))' }} />
      </div>

      <div className="relative z-10 container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-handwritten text-xl md:text-2xl mb-4" style={{ color: 'oklch(0.55 0.08 145)' }}>
            Hey there, I'm
          </p>
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
            style={{ color: 'oklch(0.28 0.04 55)' }}
          >
            Ashley
            <span className="block text-5xl md:text-6xl lg:text-7xl font-medium italic mt-1" style={{ color: 'oklch(0.62 0.14 45)' }}>
              Baugh
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-12 md:h-14 flex items-center justify-center"
        >
          <p className="font-handwritten text-2xl md:text-3xl" style={{ color: 'oklch(0.45 0.06 55)' }}>
            {displayText}
            <span className="animate-pulse ml-0.5" style={{ color: 'oklch(0.62 0.14 45)' }}>|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="#origins"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'oklch(0.62 0.14 45)',
              color: 'oklch(0.97 0.01 85)',
            }}
          >
            Get to know me
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
              <path d="M8 3v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative leaf SVGs */}
      <motion.div
        className="absolute top-20 left-8 opacity-20"
        animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <path d="M40 0C40 0 80 40 60 100C60 100 40 60 20 100C20 100 0 40 40 0Z" fill="oklch(0.65 0.08 145 / 0.4)" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-12 opacity-15"
        animate={{ rotate: [0, -8, 8, 0], y: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
          <path d="M30 0C30 0 60 30 45 75C45 75 30 45 15 75C15 75 0 30 30 0Z" fill="oklch(0.62 0.14 45 / 0.3)" />
        </svg>
      </motion.div>
    </section>
  );
}

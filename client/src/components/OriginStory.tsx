import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const origins = [
  {
    id: "arizona",
    label: "Arizona, USA",
    emoji: "🌵",
    description: "Where it all started. Grew up in the desert, attended an international high school, and learned to say hello in Navajo. Arizona shaped my love for diverse cultures and wide-open thinking.",
    position: { top: "38%", left: "16%" },
  },
  {
    id: "claremont",
    label: "Claremont, CA",
    emoji: "🎓",
    description: "Claremont McKenna College — BA in International Relations & Anthropology, Cum Laude. Wrote an honors thesis called 'XOXO: A Linguistic Analysis of Electronic Flirtation.' Yes, really.",
    position: { top: "38%", left: "13%" },
  },
  {
    id: "madrid",
    label: "Madrid, Spain",
    emoji: "🇪🇸",
    description: "Studied abroad at Universidad San Pablo through Hamilton College's program. Full Spanish language immersion. This is where my love for international living really took root.",
    position: { top: "35%", left: "44%" },
  },

  {
    id: "honduras",
    label: "Honduras",
    emoji: "💚",
    description: "Davis Projects for Peace — led a Maternal Public Health Program in Intibuca. One of the most meaningful experiences of my life, working directly with communities in need.",
    position: { top: "46%", left: "23%" },
  },
];

export default function OriginStory() {
  const [activePin, setActivePin] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="origins" className="py-24 md:py-32 relative" ref={sectionRef}>
      {/* Section header */}
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-handwritten text-xl mb-2" style={{ color: 'oklch(0.62 0.14 45)' }}>
            chapter one
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'oklch(0.28 0.04 55)' }}>
            Where I Come From
          </h2>
          <p className="font-body text-lg max-w-2xl" style={{ color: 'oklch(0.45 0.04 55)' }}>
            From the Arizona desert to the world stage — my story is one of curiosity, 
            cultural immersion, and always saying yes to the next adventure.
          </p>
        </motion.div>
      </div>

      {/* World map with pins */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundColor: 'oklch(0.96 0.01 85)' }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663239052636/8rWWX2rK7UYPVKCU7RTqps/world-map-fo6nFj7oMs6Qvd7aBkZNGH.webp"
            alt="World map showing Ashley's journey"
            className="w-full h-auto"
          />

          {/* Interactive pins */}
          {origins.map((origin, i) => (
            <motion.button
              key={origin.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
              className="absolute group"
              style={{ top: origin.position.top, left: origin.position.left }}
              onClick={() => setActivePin(activePin === origin.id ? null : origin.id)}
            >
              <div className="relative">
                {/* Pulse ring */}
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: 'oklch(0.62 0.14 45 / 0.3)' }}
                />
                {/* Pin dot */}
                <span
                  className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-base shadow-lg transition-transform duration-300 hover:scale-125"
                  style={{ backgroundColor: 'oklch(0.62 0.14 45)', color: 'white' }}
                >
                  {origin.emoji}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Story cards below the map */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {origins.map((origin, i) => (
            <motion.div
              key={origin.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg ${
                activePin === origin.id ? 'ring-2 shadow-lg' : ''
              }`}
              style={{
                backgroundColor: 'oklch(0.99 0.005 85)',
                borderColor: activePin === origin.id ? 'oklch(0.62 0.14 45)' : 'transparent',
                // ring color handled by className
              }}
              onClick={() => setActivePin(activePin === origin.id ? null : origin.id)}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{origin.emoji}</span>
                <h3 className="font-display text-lg font-semibold" style={{ color: 'oklch(0.28 0.04 55)' }}>
                  {origin.label}
                </h3>
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.04 55)' }}>
                {origin.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

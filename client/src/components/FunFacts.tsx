import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const funFacts = [
  {
    emoji: "🐕",
    title: "Pippin",
    subtitle: "Dog Mom Life",
    detail: "Meaning 'Smaller than an Apple Seed', Pippin is my 13 pound adventure buddy, couch companion, and the real boss of the house.",
    color: "oklch(0.72 0.14 70)",
    bgColor: "oklch(0.72 0.14 70 / 0.08)",
  },
  {
    emoji: "🪴",
    title: "25+ Plants",
    subtitle: "Plant Parent",
    detail: "Monstera, pothos, snake plants, succulents... my apartment is basically a greenhouse. Each one has survived my travel schedule, which is the real achievement.",
    color: "oklch(0.65 0.08 145)",
    bgColor: "oklch(0.65 0.08 145 / 0.08)",
  },
  {
    emoji: "🔴",
    title: "Red Light Therapy",
    subtitle: "Health Hacker",
    detail: "Always exploring the latest in wellness and biohacking. Red light therapy and sleep optimization are my current obsessions — it's the little optimizations that add up.",
    color: "oklch(0.62 0.14 45)",
    bgColor: "oklch(0.62 0.14 45 / 0.08)",
  },
  {
    emoji: "✈️",
    title: "7 Countries in 2026",
    subtitle: "Globe-Trotter",
    detail: "And it's only March. Every trip is a chance to learn something new about how people connect.",
    color: "oklch(0.55 0.15 260)",
    bgColor: "oklch(0.55 0.15 260 / 0.08)",
  },
  {
    emoji: "🗣️",
    title: "Navajo & Spanish",
    subtitle: "Language Lover",
    detail: "I can introduce myself in Navajo (from my international high school in Arizona) and speak functional Spanish from my time in Madrid.",
    color: "oklch(0.72 0.08 15)",
    bgColor: "oklch(0.72 0.08 15 / 0.08)",
  },
  {
    emoji: "👶",
    title: "Godmother to Lily",
    subtitle: "Chosen Family",
    detail: "Lily is my best friend from high school's daughter. Being her godmother is one of my proudest titles.",
    color: "oklch(0.65 0.12 330)",
    bgColor: "oklch(0.65 0.12 330 / 0.08)",
  },
  {
    emoji: "📝",
    title: "Thesis in Linguistic Anthropology",
    subtitle: "Academic Fun",
    detail: "My honors thesis was called 'XOXO: A Linguistic Analysis of Electronic Flirtation.' I studied how college students flirt through text and Facebook (yes, really).",
    color: "oklch(0.62 0.14 45)",
    bgColor: "oklch(0.62 0.14 45 / 0.08)",
  },
  {
    emoji: "🌎",
    title: "APAC to LATAM",
    subtitle: "Global Ops",
    detail: "My work spans every major region — coordinating executive visits, events, and meetings from Singapore to São Paulo. The sun never sets on my calendar.",
    color: "oklch(0.65 0.08 145)",
    bgColor: "oklch(0.65 0.08 145 / 0.08)",
  },
];

export default function FunFacts() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section
      id="fun-facts"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ backgroundColor: 'oklch(0.95 0.01 85)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663239052636/8rWWX2rK7UYPVKCU7RTqps/fun-facts-bg-jBwtoYWRzDm4TiBWHyEJ3n.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-handwritten text-xl mb-2" style={{ color: 'oklch(0.62 0.14 45)' }}>
            chapter four
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'oklch(0.28 0.04 55)' }}>
            The Human Side
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.45 0.04 55)' }}>
            Because there's way more to me than a job title. 
            Click any card to flip it and learn more.
          </p>
        </motion.div>

        {/* Fun fact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {funFacts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className="perspective-1000"
            >
              <div
                className="relative w-full h-52 cursor-pointer transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped.has(i) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
                onClick={() => toggleFlip(i)}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center backface-hidden"
                  style={{
                    backgroundColor: fact.bgColor,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <span className="text-4xl mb-3">{fact.emoji}</span>
                  <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'oklch(0.28 0.04 55)' }}>
                    {fact.title}
                  </h3>
                  <p className="font-handwritten text-sm" style={{ color: fact.color }}>
                    {fact.subtitle}
                  </p>
                  <p className="font-body text-xs mt-3 opacity-50">tap to flip</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl p-5 flex items-center justify-center text-center"
                  style={{
                    backgroundColor: 'oklch(0.99 0.005 85)',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    border: `2px solid ${fact.color}`,
                  }}
                >
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.35 0.04 55)' }}>
                    {fact.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const leaders = [
  {
    name: "Javier Oliván",
    title: "Chief Operating Officer",
    origin: "Sabiñánigo, Spain",
    background: "Founding member of Facebook's legendary Growth team. Joined in 2007 as head of international growth, oversaw expansion into new markets and languages worldwide. Stanford MBA. Previously at Siemens (Munich) and NTT Data (Tokyo). Succeeded Sheryl Sandberg as COO in 2022.",
    values: ["Data-driven growth", "International perspective", "Behind-the-scenes excellence"],
    emoji: "🇪🇸",
  },
  {
    name: "Naomi Gleit",
    title: "Head of Product",
    origin: "New York, NY",
    background: "Employee #29 at Facebook — the longest-serving executive besides Mark Zuckerberg. Joined in 2005 and helped grow the platform from 1 million to over 3 billion users. Stanford BA. Created the famous 'Naomi-isms' — frameworks that define how Meta builds products.",
    values: ["Extreme Clarity", "PM as Conductor", "Understand, Identify, Execute"],
    emoji: "🎯",
  },
  {
    name: "Alex Schultz",
    title: "CMO & VP of Analytics",
    origin: "London, UK",
    background: "Built and runs Meta's data science and data engineering teams. Instrumental in growing Facebook, Instagram, and Messenger to 1B+ users each. Led the company rebrand from Facebook to Meta. Author of 'Click Here: The Art and Science of Digital Marketing.' Cambridge physicist turned growth legend.",
    values: ["North Star metrics", "Data storytelling", "Growth playbooks"],
    emoji: "🇬🇧",
  },
];

const naomiisms = [
  {
    title: "Understand, Identify, Execute",
    description: "The go-to framework: first deeply understand the problem, then identify the right solution, then execute with precision. Reduces guesswork and builds confidence.",
    icon: "🔍",
  },
  {
    title: "Extreme Clarity",
    description: "Eliminate ambiguity in everything — communication, goals, ownership, timelines. If it's not crystal clear, it's not clear enough.",
    icon: "💎",
  },
  {
    title: "PM as Conductor",
    description: "A PM is like the conductor of an orchestra. The team is the orchestra with many different functions. The conductor doesn't play every instrument — they make the whole ensemble perform beautifully together.",
    icon: "🎵",
  },
  {
    title: "Canonical Everything",
    description: "Create single sources of truth. One doc, one dashboard, one place where the answer lives. No hunting, no conflicting versions.",
    icon: "📋",
  },
  {
    title: "Simplifiers",
    description: "The best solutions are the simplest ones. Complexity is the enemy of execution. Always ask: can this be simpler?",
    icon: "✨",
  },
  {
    title: "People and Process",
    description: "Great outcomes require both great people and great processes. Invest in both — neither alone is sufficient.",
    icon: "🤝",
  },
  {
    title: "Building a Bench",
    description: "Develop talent and build depth on your team. The strongest organizations have people ready to step up at every level.",
    icon: "🌱",
  },
];

export default function XFTeamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [expandedIsmIndex, setExpandedIsmIndex] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwritten text-xl mb-2" style={{ color: 'oklch(0.62 0.14 45)' }}>
            chapter three
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'oklch(0.28 0.04 55)' }}>
            Cross-Meta Foundations
          </h2>
          <p className="font-body text-lg max-w-3xl" style={{ color: 'oklch(0.45 0.04 55)' }}>
            The XF org under Javier Oliván oversees Central Products, MAGIC, Monetization, Sales, 
            and Partnerships. Our team's culture is built on the foundation laid by three remarkable leaders 
            — and their shared DNA of international growth, data orientation, and relentless clarity.
          </p>
        </motion.div>

        {/* Team illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663239052636/8rWWX2rK7UYPVKCU7RTqps/meta-office-WCaDJPRWbBGmjdFetcxbCF.webp"
            alt="Collaborative workspace illustration"
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        {/* Leader cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="group p-6 md:p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: 'oklch(0.99 0.005 85)', border: '1px solid oklch(0.90 0.02 60)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{leader.emoji}</span>
                <div>
                  <h3 className="font-display text-xl font-bold" style={{ color: 'oklch(0.28 0.04 55)' }}>
                    {leader.name}
                  </h3>
                  <p className="font-body text-sm font-medium" style={{ color: 'oklch(0.62 0.14 45)' }}>
                    {leader.title}
                  </p>
                </div>
              </div>
              <p className="font-handwritten text-sm mb-4" style={{ color: 'oklch(0.55 0.02 60)' }}>
                From {leader.origin}
              </p>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'oklch(0.45 0.04 55)' }}>
                {leader.background}
              </p>
              <div className="flex flex-wrap gap-2">
                {leader.values.map((value) => (
                  <span
                    key={value}
                    className="px-3 py-1 rounded-full text-xs font-medium font-body"
                    style={{
                      backgroundColor: 'oklch(0.92 0.02 145)',
                      color: 'oklch(0.35 0.06 145)',
                    }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Naomi-isms section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: 'oklch(0.28 0.04 55)' }}>
              The Naomi-isms
            </h3>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.45 0.04 55)' }}>
              Frameworks that define how our team thinks, builds, and operates. 
              Created by Naomi Gleit and adopted across Meta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {naomiisms.map((ism, i) => (
              <motion.div
                key={ism.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                className="p-5 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md group"
                style={{
                  backgroundColor: expandedIsmIndex === i ? 'oklch(0.62 0.14 45 / 0.08)' : 'oklch(0.95 0.01 85)',
                  border: expandedIsmIndex === i ? '1px solid oklch(0.62 0.14 45 / 0.3)' : '1px solid transparent',
                }}
                onClick={() => setExpandedIsmIndex(expandedIsmIndex === i ? null : i)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{ism.icon}</span>
                  <h4 className="font-display text-base font-semibold" style={{ color: 'oklch(0.28 0.04 55)' }}>
                    {ism.title}
                  </h4>
                </div>
                <AnimatePresence>
                  {expandedIsmIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="font-body text-sm leading-relaxed overflow-hidden"
                      style={{ color: 'oklch(0.45 0.04 55)' }}
                    >
                      {ism.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                {expandedIsmIndex !== i && (
                  <p className="font-body text-xs mt-1" style={{ color: 'oklch(0.65 0.03 60)' }}>
                    Click to learn more
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

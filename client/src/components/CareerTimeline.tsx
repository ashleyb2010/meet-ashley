import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "Claremont McKenna College",
    role: "Graduated Cum Laude",
    description: "BA in International Relations & Anthropology. Research assistant at the Center for Human Rights Leadership.",
    accent: "oklch(0.65 0.08 145)",
    side: "left" as const,
  },
  {
    year: "2007–2010",
    title: "Social Venture Partners Arizona",
    role: "Communications Associate",
    description: "Started my career in philanthropy — organizing seminars, writing newsletters, and helping match nonprofits with consulting partners. This is where I discovered my love for connecting people and making things happen.",
    accent: "oklch(0.72 0.08 15)",
    side: "right" as const,
  },
  {
    year: "2011–2013",
    title: "National Bank of Arizona",
    role: "Assistant to Director, Wealth Strategies",
    description: "Managed scheduling and communications for an Executive VP. Quarterbacked marketing events, client entertainment, and corporate sponsorships. My first taste of executive support.",
    accent: "oklch(0.62 0.14 45)",
    side: "left" as const,
  },
  {
    year: "Feb 2013",
    title: "Joined Facebook (now Meta)",
    role: "Admin Assistant, HR (Contract)",
    description: "The beginning of a 12+ year journey. Started as a contract admin supporting three HR Business Partners. Helped juggle calendars, manage meetings and plan a global team offsite.",
    accent: "oklch(0.65 0.08 145)",
    side: "right" as const,
  },
  {
    year: "Oct 2013–Feb 2021",
    title: "Executive Assistant, Growth",
    role: "Supporting the VP of Growth",
    description: "Eight years supporting a VP with a team of 600+ across five global offices and four product groups. Orchestrated complex international travel, led product cycle logistics, drafted CEO briefings, and mentored a team of dozens of admins.",
    accent: "oklch(0.72 0.14 70)",
    side: "left" as const,
  },
  {
    year: "Feb 2021–Present",
    title: "Executive Operations, Office of the COO",
    role: "Supporting the COO of Meta",
    description: "I support our COO across an org of 35,000+ employees. I grew and manage a global team of EAs, program managers, and project managers. I orchestrate regional visits across APAC, EMEA, the Americas, and Latin America. I manage executive presence at the World Economic Forum, Cannes, Mobile World Congress, and Sun Valley. I build the infrastructure that makes the office - and the org - run.",
    accent: "oklch(0.62 0.14 45)",
    side: "right" as const,
  },
];

function TimelineItem({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative flex items-start gap-4 md:gap-8 mb-12 md:mb-16 ${
      milestone.side === "right" ? "md:flex-row-reverse" : ""
    }`}>
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: milestone.side === "left" ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1 md:w-[calc(50%-2rem)]"
      >
        <div
          className="p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
          style={{ backgroundColor: 'oklch(0.99 0.005 85)' }}
        >
          {/* Accent bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-r"
            style={{ backgroundColor: milestone.accent }}
          />
          <div className="pl-4">
            <span
              className="font-handwritten text-lg font-semibold"
              style={{ color: milestone.accent }}
            >
              {milestone.year}
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold mt-1 mb-1" style={{ color: 'oklch(0.28 0.04 55)' }}>
              {milestone.title}
            </h3>
            <p className="font-body text-sm font-medium mb-3" style={{ color: 'oklch(0.55 0.02 60)' }}>
              {milestone.role}
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.04 55)' }}>
              {milestone.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot - visible on md+ */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
        style={{
          backgroundColor: 'oklch(0.97 0.01 85)',
          borderColor: milestone.accent,
        }}
      />

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function CareerTimeline() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="career"
      className="py-24 md:py-32 relative"
      ref={sectionRef}
      style={{ backgroundColor: 'oklch(0.95 0.01 85)' }}
    >
      {/* Subtle botanical pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663239052636/8rWWX2rK7UYPVKCU7RTqps/botanical-pattern-R4cfTGFRcX2zVWxRnKNsHT.webp)`,
          backgroundSize: '400px',
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
            chapter two
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'oklch(0.28 0.04 55)' }}>
            The Journey So Far
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.45 0.04 55)' }}>
            From philanthropy in Arizona to the Office of the COO at Meta — 
            every step taught me something new about people, operations, and making big things happen.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: 'oklch(0.85 0.03 60)' }}
          />

          {milestones.map((milestone, i) => (
            <TimelineItem key={i} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

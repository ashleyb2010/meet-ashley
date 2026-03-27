/**
 * Day in the Life — Interactive Agenda
 * Desert Bloom Design: terracotta, sage, cream, amber
 * Styled as a realistic daily calendar/agenda
 */
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface AgendaItem {
  time: string;
  duration: string;
  title: string;
  type: "meeting" | "focus" | "sync" | "prep";
  attendees?: string[];
  description: string;
  details?: string[];
  icon: string;
  color: string;
}

const agenda: AgendaItem[] = [
  {
    time: "7:30 AM",
    duration: "30 min",
    title: "Staffer Briefing",
    type: "meeting",
    attendees: ["Support Team"],
    description: "Get the support team aligned on everything happening today and the days ahead.",
    details: [
      "Review Javi's schedule for the day and flag any conflicts",
      "Align on prep needed for upcoming meetings",
      "Surface any urgent requests or open items",
      "Coordinate coverage across time zones",
    ],
    icon: "☀️",
    color: "oklch(0.72 0.14 70)",
  },
  {
    time: "8:00 AM",
    duration: "30 min",
    title: "Email & Comms Workblock",
    type: "focus",
    description: "Triage the inbox, respond to urgent items, and clear the path for the day.",
    details: [
      "Process overnight emails from EMEA and APAC teams",
      "Flag items that need Javi's direct attention",
      "Draft responses and route requests to the right people",
      "Update task trackers and follow up on outstanding items",
    ],
    icon: "📧",
    color: "oklch(0.65 0.08 145)",
  },
  {
    time: "8:30 AM",
    duration: "60 min",
    title: "Product Review",
    type: "meeting",
    attendees: ["Product Team", "Engineering Leads", "Design"],
    description: "Help plan and orchestrate product review sessions where teams present progress, blockers, and upcoming milestones.",
    details: [
      "Example: The Messaging team presents their Q2 roadmap update",
      "Review key metrics and user engagement trends",
      "Discuss cross-functional dependencies and timelines",
      "Capture action items and ensure follow-ups are assigned",
    ],
    icon: "📊",
    color: "oklch(0.62 0.14 45)",
  },
  {
    time: "9:30 AM",
    duration: "30 min",
    title: "Comms Sync",
    type: "sync",
    attendees: ["Comms Team"],
    description: "Align on any upcoming communications — from internal posts to external speaking engagements.",
    details: [
      "Review drafts for upcoming Workplace posts",
      "Prep talking points for any speaking events",
      "Coordinate messaging across internal and external channels",
      "Flag any media or press-related items",
    ],
    icon: "📣",
    color: "oklch(0.55 0.15 260)",
  },
  {
    time: "10:00 AM",
    duration: "30 min",
    title: "Security Sync",
    type: "sync",
    attendees: ["Security Analysts"],
    description: "Sync with security analysts on online presence monitoring and upcoming travel security.",
    details: [
      "Review any flagged online activity or mentions",
      "Discuss security protocols for upcoming travel",
      "Coordinate with advance teams for international trips",
      "Update threat assessment for upcoming public events",
    ],
    icon: "🔒",
    color: "oklch(0.45 0.04 55)",
  },
  {
    time: "10:30 AM",
    duration: "45 min",
    title: "Core Team Meeting with Javi",
    type: "meeting",
    attendees: ["Javi", "HR Lead", "Product Manager", "EA", "Me"],
    description: "Lead the inner circle syncs on everything happening across the org — readouts, upcoming priorities, and decisions needed.",
    details: [
      "Readouts from each function on key developments",
      "Review upcoming decisions that need Javi's input",
      "Align on priorities for the week ahead",
      "Flag any people or organizational matters",
    ],
    icon: "🤝",
    color: "oklch(0.72 0.08 15)",
  },
  {
    time: "11:15 AM",
    duration: "45 min",
    title: "AI Tooling Workblock",
    type: "focus",
    description: "Dedicated time to explore and learn about AI tools that can make the team more efficient.",
    details: [
      "Test new AI productivity tools and workflows",
      "Evaluate how AI can streamline briefing prep",
      "Document learnings and share with the support team",
      "Stay ahead of the curve on internal AI initiatives",
    ],
    icon: "🤖",
    color: "oklch(0.65 0.08 145)",
  },
  {
    time: "12:00 PM",
    duration: "45 min",
    title: "1:1 with Amanda — Cannes Prep",
    type: "meeting",
    attendees: ["Amanda"],
    description: "Deep-dive planning session for Javi's presence at the Cannes Lions International Festival of Creativity.",
    details: [
      "Review the full event brief and Javi's schedule at Cannes",
      "Finalize meeting requests and partner engagements",
      "Coordinate travel logistics — flights, hotels, ground transport",
      "Prep briefing docs for each session and bilateral meeting",
      "Align on staffing and on-the-ground support plan",
    ],
    icon: "🇫🇷",
    color: "oklch(0.62 0.14 45)",
  },
  {
    time: "1:30 PM",
    duration: "30 min",
    title: "External Meeting Brief Review",
    type: "prep",
    description: "Final review of the briefing packet for an upcoming external meeting to make sure Javi has everything he needs.",
    details: [
      "Verify all background context on external attendees",
      "Confirm talking points and key objectives",
      "Ensure supporting materials are formatted and ready",
      "Flag any sensitivities or topics to avoid",
    ],
    icon: "📋",
    color: "oklch(0.72 0.14 70)",
  },
  {
    time: "2:00 PM",
    duration: "60 min",
    title: "Email & Follow-ups Workblock",
    type: "focus",
    description: "Afternoon block to clear the inbox, close loops, and make sure nothing falls through the cracks.",
    details: [
      "Respond to afternoon emails and requests",
      "Follow up on action items from today's meetings",
      "Confirm logistics for tomorrow's schedule",
      "Update shared trackers and project docs",
    ],
    icon: "✉️",
    color: "oklch(0.65 0.08 145)",
  },
  {
    time: "3:00 PM",
    duration: "45 min",
    title: "Morning Brief Prep",
    type: "prep",
    description: "The day ends by preparing Javi's morning brief — the email waiting for him when he wakes up in Europe.",
    details: [
      "📅 Tomorrow's schedule overview with key context for each meeting",
      "📖 Pre-read materials and prep docs attached and summarized",
      "🔍 Background context on attendees and topics",
      "🚩 Scheduling flags — conflicts, travel windows, buffer needs",
      "❓ Open & urgent questions that need his decision",
      "📰 Relevant news, media mentions, or industry updates",
      "✅ Status updates on key projects and action items",
    ],
    icon: "🌅",
    color: "oklch(0.62 0.14 45)",
  },
];

const typeColors: Record<string, { bg: string; text: string; label: string }> = {
  meeting: { bg: "oklch(0.62 0.14 45 / 0.12)", text: "oklch(0.62 0.14 45)", label: "Meeting" },
  focus: { bg: "oklch(0.65 0.08 145 / 0.12)", text: "oklch(0.65 0.08 145)", label: "Focus Time" },
  sync: { bg: "oklch(0.55 0.15 260 / 0.12)", text: "oklch(0.55 0.15 260)", label: "Sync" },
  prep: { bg: "oklch(0.72 0.14 70 / 0.12)", text: "oklch(0.72 0.14 70)", label: "Prep" },
};

function AgendaCard({ item, index, isInView }: { item: AgendaItem; index: number; isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const typeStyle = typeColors[item.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
      className="relative group"
    >
      {/* Time connector line */}
      {index < agenda.length - 1 && (
        <div
          className="absolute left-[3.25rem] top-16 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: 'oklch(0.88 0.02 60)' }}
        />
      )}

      <div
        className="flex gap-4 md:gap-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Time column */}
        <div className="flex-shrink-0 w-[4.5rem] md:w-[6.5rem] pt-4">
          <p className="font-handwritten text-base md:text-lg font-semibold text-right" style={{ color: item.color }}>
            {item.time}
          </p>
          <p className="font-body text-[10px] md:text-xs text-right" style={{ color: 'oklch(0.55 0.02 60)' }}>
            {item.duration}
          </p>
        </div>

        {/* Dot on the timeline */}
        <div className="hidden md:flex flex-shrink-0 items-start pt-5">
          <motion.div
            className="w-3 h-3 rounded-full border-2 z-10"
            style={{ borderColor: item.color, backgroundColor: isExpanded ? item.color : 'oklch(0.97 0.01 85)' }}
            whileHover={{ scale: 1.4 }}
          />
        </div>

        {/* Card */}
        <div
          className={`flex-1 rounded-xl p-4 md:p-5 transition-all duration-300 mb-3 ${
            isExpanded ? 'shadow-md' : 'shadow-sm hover:shadow-md'
          }`}
          style={{
            backgroundColor: isExpanded ? 'oklch(0.99 0.005 85)' : 'oklch(0.99 0.005 85)',
            border: isExpanded ? `1px solid ${item.color}40` : '1px solid oklch(0.92 0.01 60)',
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-xl md:text-2xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-display text-base md:text-lg font-semibold" style={{ color: 'oklch(0.28 0.04 55)' }}>
                    {item.title}
                  </h4>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium font-body"
                    style={{ backgroundColor: typeStyle.bg, color: typeStyle.text }}
                  >
                    {typeStyle.label}
                  </span>
                </div>
                {item.attendees && (
                  <p className="font-body text-xs mt-1" style={{ color: 'oklch(0.55 0.02 60)' }}>
                    with {item.attendees.join(", ")}
                  </p>
                )}
              </div>
            </div>

            {/* Expand indicator */}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm mt-1 flex-shrink-0"
              style={{ color: 'oklch(0.55 0.02 60)' }}
            >
              ▼
            </motion.span>
          </div>

          <p className="font-body text-sm mt-2 leading-relaxed" style={{ color: 'oklch(0.45 0.04 55)' }}>
            {item.description}
          </p>

          <AnimatePresence>
            {isExpanded && item.details && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="mt-4 pt-4"
                  style={{ borderTop: '1px dashed oklch(0.88 0.02 60)' }}
                >
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-body text-sm" style={{ color: 'oklch(0.45 0.04 55)' }}>
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function DayInTheLife() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="day"
      className="py-24 md:py-32 relative"
      ref={sectionRef}
      style={{ backgroundColor: 'oklch(0.95 0.01 85)' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(oklch(0.55 0.02 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.02 60) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-handwritten text-xl mb-2" style={{ color: 'oklch(0.62 0.14 45)' }}>
            a typical tuesday
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'oklch(0.28 0.04 55)' }}>
            A Day in the Life
          </h2>
          <p className="font-body text-lg max-w-2xl" style={{ color: 'oklch(0.45 0.04 55)' }}>
            No two days are exactly alike, but here's what a typical day looks like 
            when you're keeping the COO's world running. Click any block to see more.
          </p>
        </motion.div>

        {/* Calendar header bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center gap-4 mb-8 px-4 py-3 rounded-xl"
          style={{ backgroundColor: 'oklch(0.99 0.005 85)', border: '1px solid oklch(0.90 0.02 60)' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">📅</span>
            <span className="font-display text-base font-semibold" style={{ color: 'oklch(0.28 0.04 55)' }}>
              Tuesday
            </span>
          </div>
          <div className="flex gap-3 ml-auto">
            {Object.entries(typeColors).map(([key, style]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: style.text }}
                />
                <span className="font-body text-xs hidden sm:inline" style={{ color: 'oklch(0.55 0.02 60)' }}>
                  {style.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Agenda items */}
        <div className="max-w-4xl mx-auto">
          {agenda.map((item, i) => (
            <AgendaCard key={i} item={item} index={i} isInView={isInView} />
          ))}
        </div>

        {/* End of day note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-handwritten text-xl" style={{ color: 'oklch(0.62 0.14 45)' }}>
            ...and tomorrow, we do it all again ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}

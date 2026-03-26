import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "Years at Meta", sublabel: "Since February 2013", color: "oklch(0.62 0.14 45)" },
  { value: 35000, suffix: "+", label: "Org Size", sublabel: "Employees supported", color: "oklch(0.65 0.08 145)" },
  { value: 7, suffix: "", label: "Countries in 2026", sublabel: "And counting...", color: "oklch(0.72 0.14 70)" },
  { value: 25, suffix: "+", label: "Plant Babies", sublabel: "All thriving (mostly)", color: "oklch(0.65 0.08 145)" },
  { value: 5, suffix: "", label: "Global Offices", sublabel: "Coordinated regularly", color: "oklch(0.72 0.08 15)" },
  { value: 4, suffix: "", label: "Major Events", sublabel: "WEF, Cannes, MWC, Sun Valley", color: "oklch(0.62 0.14 45)" },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted = value >= 1000 ? `${(count / 1000).toFixed(count >= value ? 0 : 0)}k` : count.toString();
  const displayValue = value >= 1000 && count >= value ? `${(value / 1000).toFixed(0)}k` : value >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();

  return (
    <span>
      {displayValue}{suffix}
    </span>
  );
}

export default function ByTheNumbers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-handwritten text-xl mb-2" style={{ color: 'oklch(0.62 0.14 45)' }}>
            by the numbers
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: 'oklch(0.28 0.04 55)' }}>
            A Few Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ backgroundColor: 'oklch(0.99 0.005 85)' }}
            >
              <div
                className="font-display text-4xl md:text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="font-body text-sm font-semibold mb-1" style={{ color: 'oklch(0.28 0.04 55)' }}>
                {stat.label}
              </p>
              <p className="font-handwritten text-xs" style={{ color: 'oklch(0.55 0.02 60)' }}>
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

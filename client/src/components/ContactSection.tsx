import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="connect"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ backgroundColor: 'oklch(0.28 0.04 55)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, oklch(0.62 0.14 45 / 0.5), transparent)' }} />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-handwritten text-xl mb-4" style={{ color: 'oklch(0.75 0.10 45)' }}>
            that's me!
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'oklch(0.97 0.01 85)' }}>
            Let's Connect
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'oklch(0.80 0.01 85)' }}>
            Whether you want to chat about global operations, swap plant care tips, 
            or just say hello — I'd love to hear from you. The best things in my career 
            have come from unexpected conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:baugh.ashley@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: 'oklch(0.62 0.14 45)',
              color: 'oklch(0.97 0.01 85)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Say Hello
          </a>
          <a
            href="https://www.linkedin.com/in/ashleybaugh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body text-sm font-semibold transition-all duration-300 hover:scale-105 border"
            style={{
              borderColor: 'oklch(0.62 0.14 45 / 0.5)',
              color: 'oklch(0.75 0.10 45)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </motion.div>

        {/* Fun sign-off */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <p className="font-handwritten text-lg" style={{ color: 'oklch(0.55 0.02 60)' }}>
            Made with 🌵 🪴 and a lot of ☕
          </p>
        </motion.div>
      </div>

      {/* Floating leaf decorations */}
      <motion.div
        className="absolute bottom-10 left-10 opacity-10"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="100" height="140" viewBox="0 0 80 120" fill="none">
          <path d="M40 0C40 0 80 40 60 100C60 100 40 60 20 100C20 100 0 40 40 0Z" fill="oklch(0.65 0.08 145)" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-20 right-16 opacity-10"
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
          <path d="M30 0C30 0 60 30 45 75C45 75 30 45 15 75C15 75 0 30 30 0Z" fill="oklch(0.62 0.14 45)" />
        </svg>
      </motion.div>
    </section>
  );
}

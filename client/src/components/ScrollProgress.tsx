import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / totalHeight;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* Vine stem */}
      <div className="relative w-1 h-64 rounded-full overflow-hidden" style={{ backgroundColor: 'oklch(0.90 0.03 145)' }}>
        <div
          className="absolute bottom-0 left-0 w-full rounded-full transition-all duration-150 ease-out"
          style={{
            height: `${progress * 100}%`,
            backgroundColor: 'oklch(0.65 0.08 145)',
          }}
        />
      </div>
      {/* Leaf decorations along the vine */}
      {[0, 0.2, 0.4, 0.6, 0.8, 1].map((pos, i) => (
        <div
          key={i}
          className="absolute transition-all duration-300"
          style={{
            top: `${pos * 100}%`,
            right: i % 2 === 0 ? '-8px' : 'auto',
            left: i % 2 !== 0 ? '-8px' : 'auto',
            opacity: progress >= pos ? 1 : 0.3,
            transform: `scale(${progress >= pos ? 1 : 0.6}) rotate(${i % 2 === 0 ? '-30' : '30'}deg)`,
          }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M1 9C1 9 3 1 13 1C13 1 7 3 1 9Z"
              fill={progress >= pos ? 'oklch(0.65 0.08 145)' : 'oklch(0.82 0.05 145)'}
              stroke="oklch(0.55 0.06 145)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import useTextDecrypt from "../hooks/useTextDecrypt.js";
import { useT } from "../i18n/LanguageContext.jsx";

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="w-10 h-10 flex items-center justify-center border border-line text-cream2 hover:border-red hover:text-red transition-all duration-300 rounded-full"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === "left"
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 6 15 12 9 18" />
        }
      </svg>
    </button>
  );
}

function DotNav({ count, active, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Slide ${i + 1}`}
          className="relative py-4 cursor-pointer"
        >
          <motion.span
            className={`block h-1.5 rounded-full transition-colors duration-300 ${
              i === active ? "bg-red" : "bg-line hover:bg-cream2/40"
            }`}
            animate={{ width: i === active ? 32 : 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </button>
      ))}
    </div>
  );
}

export default function Problem() {
  const { t } = useT();
  const painPoints = t("problem.items");
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const timerRef = useRef(null);

  const currentPoint = painPoints[activeIndex];
  const { displayText } = useTextDecrypt(currentPoint.title, isInView);

  const goTo = useCallback((i) => {
    setActiveIndex(i);
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + painPoints.length) % painPoints.length);
  }, [activeIndex, painPoints.length, goTo]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % painPoints.length);
  }, [activeIndex, painPoints.length, goTo]);

  useEffect(() => {
    if (!isInView || isPaused.current) return;
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % painPoints.length);
      }
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isInView, painPoints.length]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] flex items-center py-24 lg:py-32 bg-carbon border-t border-line"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs tracking-[0.42em] text-red uppercase"
        >
          {t("problem.tag")}
        </motion.span>

        <div className="mt-8 min-h-[3em]">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-heading text-cream leading-tight tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {displayText}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="mt-6 min-h-[4em]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-base text-cream2 font-body leading-relaxed max-w-2xl mx-auto"
            >
              {currentPoint.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <ArrowButton direction="left" onClick={prev} />
          <DotNav count={painPoints.length} active={activeIndex} onSelect={goTo} />
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

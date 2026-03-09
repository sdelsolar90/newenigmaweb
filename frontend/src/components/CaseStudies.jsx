import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import useCountUp from "../hooks/useCountUp.js";

const METRIC_DATA = [
  { value: 40, suffix: "%" },
  { value: 70, suffix: "%" },
  { value: 12, suffix: "" },
];

function MetricCounter({ value, suffix }) {
  const countRef = useCountUp(value, { duration: 1500, suffix });
  return (
    <span
      ref={countRef}
      className="font-heading text-5xl md:text-7xl text-red tracking-tight"
    >
      0
    </span>
  );
}

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="w-10 h-10 border border-line hover:border-red/40 flex items-center justify-center text-cream2 hover:text-red transition-all duration-200"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {direction === "left" ? (
          <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function CaseStudies() {
  const { t } = useT();
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const timerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  const items = t("caseStudies.items");
  const current = items[activeIndex];
  const metric = METRIC_DATA[activeIndex];

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % METRIC_DATA.length);
      }
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  function goTo(i) {
    setActiveIndex(i);
    resetTimer();
  }

  return (
    <section
      className="py-24 lg:py-32 bg-carbon"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            {t("caseStudies.tag")}
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-cream leading-tight">
            {t("caseStudies.title")}{" "}
            <em className="italic">{t("caseStudies.titleItalic")}</em>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center bg-carbon2 border border-line p-8 md:p-12"
            >
              <div className="text-center md:text-left">
                <MetricCounter key={`m-${activeIndex}`} value={metric.value} suffix={metric.suffix} />
                <span className="block font-mono text-xs tracking-[0.15em] text-red uppercase mt-2">
                  {current.metricLabel}
                </span>
              </div>

              <div>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4 text-red/10">
                  <path d="M0 24V14.4C0 6.4 5.6 1.6 12.8 0l1.6 3.2C8.8 5.6 7.2 9.6 6.4 12H12v12H0zm18.4 0V14.4c0-8 5.6-12.8 12.8-14.4l1.6 3.2c-5.6 2.4-7.2 6.4-8 8.8h5.6v12H18.4z" fill="currentColor" />
                </svg>
                <p className="font-body text-base text-cream leading-relaxed mb-6">
                  {current.quote}
                </p>
                <div className="pt-5 border-t border-line">
                  <span className="block font-heading text-sm tracking-tight text-cream">{current.name}</span>
                  <span className="block font-body text-xs text-cream2 mt-0.5">
                    {current.role} · {current.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {METRIC_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-red w-6" : "bg-line hover:bg-cream2/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ArrowButton
                direction="left"
                onClick={() => goTo((activeIndex - 1 + METRIC_DATA.length) % METRIC_DATA.length)}
              />
              <ArrowButton
                direction="right"
                onClick={() => goTo((activeIndex + 1) % METRIC_DATA.length)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

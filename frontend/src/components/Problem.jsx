import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import useTextDecrypt from "../hooks/useTextDecrypt.js";

const PAIN_POINTS = [
  {
    title: "Contratar un equipo IT interno es caro",
    description: "Un solo desarrollador, un administrador de sistemas y un especialista en seguridad pueden superar los $8,000/mes en costos salariales.",
  },
  {
    title: "Freelancers sin compromiso",
    description: "Responden cuando quieren, desaparecen a mitad de proyecto y no entienden tu negocio. Cada nuevo freelancer empieza de cero.",
  },
  {
    title: "La tecnología avanza, tu empresa se queda",
    description: "Mientras tu competencia automatiza procesos y usa IA, tú sigues resolviendo todo manualmente y perdiendo horas cada semana.",
  },
  {
    title: "Vulnerabilidades sin detectar",
    description: "Sin un equipo de seguridad, tu web, correos y datos de clientes están expuestos. Un ataque puede costarte el negocio entero.",
  },
];

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
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
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-1.5 rounded-full transition-colors duration-300 ${
            i === active ? "bg-red" : "bg-line hover:bg-cream2/40"
          }`}
          animate={{ width: i === active ? 32 : 8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      ))}
    </div>
  );
}

export default function Problem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const timerRef = useRef(null);

  const currentPoint = PAIN_POINTS[activeIndex];
  const { displayText } = useTextDecrypt(currentPoint.title, isInView);

  const goTo = useCallback((i) => {
    setActiveIndex(i);
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + PAIN_POINTS.length) % PAIN_POINTS.length);
  }, [activeIndex, goTo]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % PAIN_POINTS.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (!isInView || isPaused.current) return;
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % PAIN_POINTS.length);
      }
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isInView]);

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
          El problema
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
          <DotNav count={PAIN_POINTS.length} active={activeIndex} onSelect={goTo} />
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

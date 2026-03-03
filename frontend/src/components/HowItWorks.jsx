import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from "motion/react";
import useTextDecrypt from "../hooks/useTextDecrypt.js";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description: "Analizamos tu ecosistema digital actual: web, servidores, correo, seguridad, procesos y herramientas. Identificamos vulnerabilidades, oportunidades de mejora y dónde la tecnología puede ahorrarte tiempo y dinero.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan personalizado",
    description: "Diseñamos una hoja de ruta adaptada a tu empresa, tus objetivos y tu presupuesto. No vendemos paquetes genéricos: cada plan se construye alrededor de lo que realmente necesitas hoy y lo que vas a necesitar mañana.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h8M8 9h2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Acompañamiento continuo",
    description: "Nos convertimos en tu equipo IT. Gestionamos tu infraestructura, resolvemos incidencias, implementamos mejoras y te mantenemos a la vanguardia. Tú te enfocas en hacer crecer tu negocio, nosotros nos encargamos de la tecnología.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

function DesktopStep({ step, index, progress }) {
  const stepCount = STEPS.length;
  const start = index / stepCount;
  const mid = (index + 0.3) / stepCount;
  const end = (index + 1) / stepCount;

  const opacity = useTransform(progress, [start, mid, end], [0, 1, index === stepCount - 1 ? 1 : 0]);
  const y = useTransform(progress, [start, mid, end], [40, 0, index === stepCount - 1 ? 0 : -20]);

  const [decryptTrigger, setDecryptTrigger] = useState(false);
  const { displayText } = useTextDecrypt(step.number, decryptTrigger, { interval: 50, stagger: 40 });

  useMotionValueEvent(progress, "change", (v) => {
    if (v >= start + 0.05 && !decryptTrigger) setDecryptTrigger(true);
  });

  const markerFill = useTransform(progress, [start, mid], [0, 1]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-[120px_1fr] gap-12 items-center">
        <div className="text-right">
          <span className="font-mono text-6xl text-red/30 leading-none">
            {decryptTrigger ? displayText : step.number}
          </span>
        </div>
        <div>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-red/10 text-red flex items-center justify-center shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="font-heading text-2xl text-cream mb-3">{step.title}</h3>
              <p className="font-body text-sm text-cream2 leading-relaxed max-w-lg">{step.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DesktopHowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 px-6"
        >
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            Cómo funciona
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight tracking-tight">
            De cero a equipo IT{" "}
            <em className="italic">en tres pasos</em>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto w-full px-6 mb-8 relative">
          <div className="h-0.5 bg-line w-full rounded-full relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-red rounded-full"
              style={{ scaleX, transformOrigin: "left" }}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0">
            {STEPS.map((_, i) => {
              const pos = (i + 0.5) / STEPS.length;
              return (
                <StepMarker key={i} progress={scrollYProgress} threshold={pos} style={{ left: `${pos * 100}%`, position: "absolute" }} />
              );
            })}
          </div>
        </div>

        <div className="relative flex-1">
          {STEPS.map((step, i) => (
            <DesktopStep key={step.number} step={step} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepMarker({ progress, threshold, style }) {
  const scale = useTransform(progress, [threshold - 0.1, threshold], [0.5, 1]);
  const bg = useTransform(progress, [threshold - 0.1, threshold], ["#2A2A2C", "#C44A20"]);

  return (
    <motion.div
      className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{ ...style, scale, backgroundColor: bg }}
    />
  );
}

function MobileStepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative bg-carbon3 border border-line p-6 hover:border-red/20 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-4xl text-red/20">
          {step.number}
        </span>
        <div className="w-12 h-12 bg-red/10 text-red flex items-center justify-center group-hover:bg-red group-hover:text-cream transition-all duration-300">
          {step.icon}
        </div>
      </div>
      <h3 className="font-heading text-xl text-cream mb-3">{step.title}</h3>
      <p className="font-body text-sm text-cream2 leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

function MobileHowItWorks() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <div className="py-16 bg-carbon2">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            Cómo funciona
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-cream leading-tight tracking-tight">
            De cero a equipo IT{" "}
            <em className="italic">en tres pasos</em>
          </h2>
          <p className="mt-5 text-base text-cream2 font-body leading-relaxed">
            Un proceso simple y transparente. Sin contratos de permanencia, sin sorpresas.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {STEPS.map((step, index) => (
            <MobileStepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-carbon2">
      {isMobile ? <MobileHowItWorks /> : <DesktopHowItWorks />}
    </section>
  );
}

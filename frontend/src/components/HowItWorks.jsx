import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EnigmaIsotipo } from "./EnigmaLogo.jsx";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description: "Analizamos tu ecosistema digital actual: web, servidores, correo, seguridad, procesos y herramientas. Identificamos vulnerabilidades y oportunidades de mejora.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan personalizado",
    description: "Diseñamos una hoja de ruta adaptada a tu empresa, tus objetivos y tu presupuesto. Cada plan se construye alrededor de lo que realmente necesitas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h8M8 9h2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Acompañamiento continuo",
    description: "Nos convertimos en tu equipo IT. Gestionamos tu infraestructura, resolvemos incidencias e implementamos mejoras. Tú creces, nosotros nos encargamos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex-1 group"
    >
      <div className="bg-carbon3 border border-line p-6 h-full hover:border-red/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,74,32,0.08)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red/10 text-red flex items-center justify-center shrink-0 group-hover:bg-red group-hover:text-cream transition-all duration-300">
            {step.icon}
          </div>
          <span className="font-mono text-xs text-red/40">{step.number}</span>
        </div>
        <h3 className="font-heading text-lg text-cream mb-2">{step.title}</h3>
        <p className="font-body text-sm text-cream2 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

function TimelineConnector({ index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.2 }}
      className="hidden md:flex flex-col items-center gap-0 shrink-0 self-stretch py-6"
    >
      <div className="flex-1 w-px bg-gradient-to-b from-transparent via-red/30 to-red/30" />
      <EnigmaIsotipo size={28} variant="dark" className="shrink-0 animate-rotor-idle" />
      <div className="flex-1 w-px bg-gradient-to-b from-red/30 via-red/30 to-transparent" />
    </motion.div>
  );
}

function MobileTimeline() {
  return (
    <div className="flex flex-col gap-0">
      {STEPS.map((step, i) => (
        <div key={step.number}>
          <StepCard step={step} index={i} />
          {i < STEPS.length - 1 && (
            <div className="flex justify-center py-3">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-4 bg-red/20" />
                <EnigmaIsotipo size={22} variant="dark" className="animate-rotor-idle" />
                <div className="w-px h-4 bg-red/20" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="py-20 bg-carbon2">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight tracking-tight">
            De cero a equipo IT{" "}
            <em className="italic">en tres pasos</em>
          </h2>
          <p className="mt-4 text-base text-cream2 font-body leading-relaxed max-w-2xl mx-auto">
            Un proceso simple y transparente. Sin contratos de permanencia, sin sorpresas.
          </p>
        </motion.div>

        <div className="hidden md:flex items-stretch gap-0">
          {STEPS.map((step, i) => (
            <div key={step.number} className="contents">
              <StepCard step={step} index={i} />
              {i < STEPS.length - 1 && <TimelineConnector index={i} />}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <MobileTimeline />
        </div>
      </div>
    </section>
  );
}

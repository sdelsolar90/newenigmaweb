import { useRef } from "react";
import { motion, useInView } from "motion/react";

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

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative bg-card-light border border-border-light shadow-sm shadow-indigo/5 p-8 h-full hover:border-indigo/30 hover:shadow-md hover:shadow-indigo/8 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-4xl font-bold text-indigo/20">
          {step.number}
        </span>
        <div className="w-12 h-12 rounded-sm bg-indigo/10 text-indigo-light flex items-center justify-center group-hover:bg-indigo group-hover:text-off-white transition-all duration-300">
          {step.icon}
        </div>
      </div>
      <h3 className="font-heading text-xl font-bold text-text-dark mb-3">{step.title}</h3>
      <p className="font-body text-sm text-muted leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-content">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase">
            Cómo funciona
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-[800] text-text-dark leading-tight tracking-tight">
            De cero a equipo IT{" "}
            <span className="text-indigo">en tres pasos</span>
          </h2>
          <p className="mt-5 text-lg text-muted font-body leading-relaxed">
            Un proceso simple y transparente. Sin contratos de permanencia, sin sorpresas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-border-light">
          {STEPS.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

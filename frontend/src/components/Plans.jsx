import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const PLANS = [
  {
    name: "Esencial",
    tagline: "Para empresas que necesitan una base tecnológica sólida",
    features: [
      "Web gestionada",
      "Servidores & cloud",
      "Correo corporativo",
      "Ciberseguridad básica",
      "1h consultoría mensual",
      "Soporte por tickets",
    ],
    cta: "Empezar con Esencial",
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Para empresas que quieren automatizar y escalar",
    badge: "Más popular",
    features: [
      "Todo lo del plan Esencial",
      "Ciberseguridad avanzada",
      "Automatizaciones (Zapier, Make, n8n)",
      "2h consultoría mensual",
      "Soporte prioritario",
    ],
    cta: "Empezar con Pro",
    highlighted: true,
  },
  {
    name: "IA",
    tagline: "Para empresas que quieren liderar con inteligencia artificial",
    features: [
      "Todo lo del plan Pro",
      "Agente de IA personalizado incluido",
      "Dashboard con datos en tiempo real",
      "4h consultoría mensual",
      "Soporte dedicado",
    ],
    cta: "Empezar con IA",
    highlighted: false,
  },
];

function PlanCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative p-8 flex flex-col h-full transition-all duration-300 ${
        plan.highlighted
          ? "bg-void text-off-white border-2 border-indigo shadow-2xl shadow-indigo/15 lg:scale-105 z-10"
          : "bg-card-light text-text-dark border border-border-light hover:border-indigo/30 shadow-sm shadow-indigo/5"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-sm bg-indigo font-mono text-[0.65rem] tracking-[0.12em] text-off-white uppercase font-semibold">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`font-heading text-2xl font-[800] tracking-tight ${plan.highlighted ? "text-off-white" : "text-text-dark"}`}>{plan.name}</h3>
        <p className={`mt-2 text-sm font-body leading-relaxed ${plan.highlighted ? "text-muted" : "text-muted"}`}>
          {plan.tagline}
        </p>
      </div>

      <div className={`py-5 border-y mb-6 ${plan.highlighted ? "border-border" : "border-border-light"}`}>
        <span className={`font-mono text-[0.65rem] tracking-[0.15em] uppercase ${plan.highlighted ? "text-indigo-soft" : "text-indigo"} font-medium`}>
          Precio personalizado
        </span>
        <p className="text-xs mt-1 text-muted">
          Según las necesidades de tu empresa
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-indigo-soft" : "text-indigo"}`}>
              <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={`text-sm font-body ${plan.highlighted ? "text-text" : "text-text-dark/80"}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contacto"
        className={`block text-center py-3.5 rounded-sm font-body text-sm font-semibold transition-all duration-300 ${
          plan.highlighted
            ? "bg-indigo text-off-white hover:bg-indigo-deep hover:shadow-lg hover:shadow-indigo/25 hover:-translate-y-0.5"
            : "border-2 border-indigo text-indigo hover:bg-indigo hover:text-off-white hover:border-indigo"
        }`}
      >
        {plan.cta}
      </Link>
    </motion.div>
  );
}

export default function Plans() {
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
          <span className="inline-block px-4 py-1.5 rounded-sm bg-indigo/10 font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase mb-4">
            Planes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-[800] tracking-tight text-text-dark leading-tight">
            Un plan para cada etapa{" "}
            <span className="text-indigo">de tu empresa</span>
          </h2>
          <p className="mt-5 text-lg text-muted font-body leading-relaxed">
            Empieza con lo que necesitas hoy y escala cuando estés listo.
            Sin contratos de permanencia, sin letra pequeña.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-border-light items-stretch max-w-5xl mx-auto">
          {PLANS.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/planes"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-indigo hover:text-indigo-deep transition-colors duration-200"
          >
            Comparar planes en detalle
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

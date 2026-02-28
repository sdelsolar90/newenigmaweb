import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const PAIN_POINTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Contratar un equipo IT interno es caro",
    description: "Un solo desarrollador, un administrador de sistemas y un especialista en seguridad pueden superar los $8,000/mes en costos salariales.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Freelancers sin compromiso",
    description: "Responden cuando quieren, desaparecen a mitad de proyecto y no entienden tu negocio. Cada nuevo freelancer empieza de cero.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "La tecnología avanza, tu empresa se queda",
    description: "Mientras tu competencia automatiza procesos y usa IA, tú sigues resolviendo todo manualmente y perdiendo horas cada semana.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Vulnerabilidades sin detectar",
    description: "Sin un equipo de seguridad, tu web, correos y datos de clientes están expuestos. Un ataque puede costarte el negocio entero.",
  },
];

function AnimatedCard({ point, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative p-6 bg-surface border border-border hover:border-indigo/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-sm bg-indigo/10 text-indigo-light flex items-center justify-center mb-4 group-hover:bg-indigo group-hover:text-off-white transition-all duration-300">
        {point.icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-off-white mb-2">{point.title}</h3>
      <p className="font-body text-sm text-muted leading-relaxed">{point.description}</p>
    </motion.div>
  );
}

export default function Problem() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-void border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase">
            El problema
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-[800] text-off-white leading-tight tracking-tight">
            Tu empresa necesita tecnología,{" "}
            <span className="text-indigo-light">pero las opciones actuales no funcionan</span>
          </h2>
          <p className="mt-5 text-lg text-muted font-body leading-relaxed">
            Las PYMEs se enfrentan al mismo dilema: necesitan un equipo IT completo pero no pueden pagar uno.
            Las alternativas disponibles dejan vacíos que cuestan dinero, tiempo y oportunidades.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {PAIN_POINTS.map((point, index) => (
            <AnimatedCard key={index} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

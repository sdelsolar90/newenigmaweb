import { useRef } from "react";
import { motion, useInView } from "motion/react";

const TESTIMONIALS = [
  {
    quote: "Antes gastábamos en un desarrollador freelance, otro para el servidor y otro para el correo. Con Enigma tenemos todo integrado, con mejor calidad y por menos de lo que pagábamos antes.",
    name: "Carlos Mendoza",
    role: "Director General",
    company: "Importaciones del Pacífico",
    metric: "40%",
    metricLabel: "reducción en costos IT",
  },
  {
    quote: "El agente de IA que nos implementaron atiende el 70% de las consultas de nuestros clientes de forma automática. Nuestro equipo de ventas ahora se enfoca en cerrar negocios, no en responder las mismas preguntas.",
    name: "María Elena Torres",
    role: "Gerente Comercial",
    company: "Clínica Dental Sonrisa",
    metric: "70%",
    metricLabel: "consultas automatizadas",
  },
  {
    quote: "Después de la auditoría de seguridad encontraron vulnerabilidades críticas que no sabíamos que teníamos. Nos evitaron un problema serio. Ahora dormimos tranquilos sabiendo que alguien cuida nuestra infraestructura.",
    name: "Roberto Álvarez",
    role: "CEO",
    company: "LegalTech Solutions",
    metric: "12",
    metricLabel: "vulnerabilidades corregidas",
  },
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative bg-surface border border-border hover:border-indigo/20 hover:shadow-lg hover:shadow-indigo/5 transition-all duration-300 flex flex-col p-8"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="w-16 h-16 bg-indigo/10 border border-indigo/20 flex items-center justify-center">
          <span className="font-heading text-2xl font-[800] tracking-tight text-indigo-light">{testimonial.metric}</span>
        </div>
        <div>
          <span className="block font-mono text-[0.65rem] tracking-[0.15em] text-indigo uppercase">{testimonial.metricLabel}</span>
        </div>
      </div>

      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4 text-indigo/20">
        <path d="M0 24V14.4C0 6.4 5.6 1.6 12.8 0l1.6 3.2C8.8 5.6 7.2 9.6 6.4 12H12v12H0zm18.4 0V14.4c0-8 5.6-12.8 12.8-14.4l1.6 3.2c-5.6 2.4-7.2 6.4-8 8.8h5.6v12H18.4z" fill="currentColor" />
      </svg>

      <p className="font-body text-sm text-text leading-relaxed flex-1 mb-6">
        {testimonial.quote}
      </p>

      <div className="pt-5 border-t border-border">
        <span className="block font-heading text-sm font-[800] tracking-tight text-off-white">{testimonial.name}</span>
        <span className="block font-body text-xs text-muted mt-0.5">
          {testimonial.role} · {testimonial.company}
        </span>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-sm bg-indigo/10 font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase mb-4">
            Casos de éxito
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-[800] tracking-tight text-off-white leading-tight">
            Empresas que ya tienen{" "}
            <span className="text-indigo-light">su equipo IT con Enigma</span>
          </h2>
          <p className="mt-5 text-lg text-muted font-body leading-relaxed">
            Resultados reales de empresas que dejaron de improvisar con su tecnología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

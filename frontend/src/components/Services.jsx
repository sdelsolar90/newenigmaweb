import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Desarrollo Web",
    description: "WordPress, WooCommerce y aplicaciones web a medida con código. Desde landing pages hasta plataformas completas, rápidas, seguras y hechas para convertir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: "Servidores & Cloud",
    description: "AWS, cPanel, CloudPanel y administración Linux. Tu infraestructura siempre disponible, rápida y escalable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Correo & Google Workspace",
    description: "Implementación y migración de correo corporativo. Gmail empresarial, Drive, Calendar y todas las herramientas de Google.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: "Ciberseguridad",
    description: "Auditorías, firewalls, análisis de vulnerabilidades y protección continua. Protege tus datos, los de tus clientes y tu reputación.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Automatización & APIs",
    description: "CRM, ERP, webhooks, Zapier, Make y n8n. Conectamos tus herramientas y automatizamos procesos que hoy te roban horas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
  {
    title: "Agentes de IA",
    description: "Chatbots y agentes entrenados con los datos de tu negocio. Atienden clientes, procesan ventas y automatizan tareas internas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect x="2" y="8" width="20" height="14" rx="2" /><path d="M6 12h.01M18 12h.01" /><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
      </svg>
    ),
  },
  {
    title: "Consultoría 360°",
    description: "Diagnóstico integral de tu ecosistema digital. Identificamos oportunidades, diseñamos la estrategia y te acompañamos en la ejecución.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group p-6 bg-surface border border-border hover:border-indigo/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-sm bg-indigo/10 text-indigo-light flex items-center justify-center mb-5 group-hover:bg-indigo group-hover:text-off-white transition-all duration-300">
        {service.icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-off-white mb-2">{service.title}</h3>
      <p className="font-body text-sm text-muted leading-relaxed">{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
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
            Servicios
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-[800] text-off-white leading-tight tracking-tight">
            Todo lo que tu empresa necesita,{" "}
            <span className="text-indigo-light">en un solo equipo</span>
          </h2>
          <p className="mt-5 text-lg text-muted font-body leading-relaxed">
            Cada servicio puede contratarse por separado o como parte de un plan integral.
            Adaptamos la solución a tu realidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
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
            to="/servicios"
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-indigo-light hover:text-indigo-soft transition-colors duration-200"
          >
            Ver todos los servicios en detalle
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

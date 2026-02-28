import { Link } from "react-router-dom";
import { motion } from "motion/react";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-light/6 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo/4 rounded-full blur-[180px]" />
    </div>
  );
}

function StatItem({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <span className="block font-heading text-3xl md:text-4xl font-[800] text-off-white tracking-tight">{value}</span>
      <span className="block font-mono text-[0.6rem] text-muted uppercase tracking-[0.1em] mt-1">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-void overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo-light uppercase">
              Beyond the obvious · Lima — Barcelona
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 font-heading text-4xl sm:text-5xl lg:text-7xl font-[800] text-off-white leading-[0.95] tracking-tight"
          >
            El área IT completa de tu empresa,{" "}
            <span className="bg-gradient-to-r from-indigo-soft to-indigo-light bg-clip-text text-transparent">
              sin los costos de tenerla interna
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-body"
          >
            Desarrollo web, servidores, ciberseguridad, automatización e inteligencia artificial.
            Todo lo que necesitas para competir con tecnología, en un solo equipo dedicado a tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm font-mono text-[0.7rem] uppercase tracking-[0.1em] text-off-white bg-indigo hover:bg-indigo-deep transition-all duration-300"
            >
              Agenda tu diagnóstico gratuito
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/planes"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted border border-border hover:border-indigo/40 hover:text-indigo-light transition-all duration-300"
            >
              Conoce nuestros planes
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-border pt-10"
        >
          <StatItem value="+5" label="Años de experiencia" delay={0.8} />
          <StatItem value="+50" label="Proyectos entregados" delay={0.9} />
          <StatItem value="2" label="Países operando" delay={1.0} />
          <StatItem value="24/7" label="Soporte disponible" delay={1.1} />
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import InteractiveRotor from "./InteractiveRotor.jsx";
import useTextDecrypt from "../hooks/useTextDecrypt.js";

function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #F0EDE6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-carbon2/60 rounded-full blur-[180px]" />
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
      <span className="block font-heading text-3xl md:text-4xl text-cream tracking-tight">{value}</span>
      <span className="block font-mono text-[0.6rem] text-cream2 uppercase tracking-[0.1em] mt-1">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 800);
    const t3 = setTimeout(() => setStage(3), 1200);
    const t4 = setTimeout(() => setStage(4), 2500);
    const t5 = setTimeout(() => setStage(5), 3000);
    const t6 = setTimeout(() => setStage(6), 3500);
    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, []);

  const headline = "Transformamos la complejidad de tu negocio en sistemas que simplemente funcionan.";
  const { displayText } = useTextDecrypt(headline, stage >= 3);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-carbon overflow-hidden">
      <DotGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
                Beyond the obvious
              </span>
            </motion.div>

            <div className="mt-6">
              <h1
                className="font-heading text-[clamp(34px,4.5vw,56px)] text-cream leading-[1.12] tracking-tight"
                style={{ minHeight: "3.5em" }}
              >
                {stage >= 3 ? (
                  <>
                    {displayText.split("simplemente").map((part, i) =>
                      i === 0 ? (
                        <span key={i}>{part}</span>
                      ) : (
                        <span key={i}>
                          <em className="italic">simplemente</em>
                          {part}
                        </span>
                      )
                    )}
                  </>
                ) : (
                  <span className="opacity-0">{headline}</span>
                )}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={stage >= 4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mt-6 text-base sm:text-lg text-cream2 max-w-xl leading-relaxed font-body mx-auto lg:mx-0"
            >
              Desarrollo web, servidores, ciberseguridad, automatización e inteligencia artificial.
              Todo lo que necesitas para competir con tecnología, en un solo equipo dedicado a tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stage >= 5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] text-cream bg-red hover:bg-red2 transition-all duration-300"
              >
                Agenda tu diagnóstico gratuito
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/planes"
                className="inline-flex items-center gap-2 px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] text-cream2 border border-line hover:border-red/40 hover:text-red transition-all duration-300"
              >
                Conoce nuestros planes
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={stage >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <InteractiveRotor size={400} mobileSize={250} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={stage >= 6 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-line pt-10"
        >
          <StatItem value="+5" label="Años de experiencia" delay={3.6} />
          <StatItem value="+50" label="Proyectos entregados" delay={3.7} />
          <StatItem value="2" label="Países operando" delay={3.8} />
          <StatItem value="24/7" label="Soporte disponible" delay={3.9} />
        </motion.div>
      </div>
    </section>
  );
}

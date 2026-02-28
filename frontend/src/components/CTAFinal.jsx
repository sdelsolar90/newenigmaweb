import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-void relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-deep/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-indigo/30 bg-indigo/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo-soft uppercase">Diagnóstico gratuito y sin compromiso</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-[800] tracking-tight text-off-white leading-tight">
            Tu empresa merece tecnología de primer nivel.{" "}
            <span className="bg-gradient-to-r from-indigo-light to-indigo-soft bg-clip-text text-transparent">
              Hagamos que suceda.
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted font-body leading-relaxed max-w-2xl mx-auto">
            Agenda una sesión de diagnóstico gratuita con nuestro equipo. Analizamos tu situación actual,
            identificamos oportunidades y te proponemos un plan concreto. Sin compromisos, sin letra pequeña.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-body text-base font-semibold text-off-white bg-indigo hover:bg-indigo-deep hover:shadow-xl hover:shadow-indigo/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Agenda tu diagnóstico gratuito
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="https://wa.me/51959561015?text=Hola%2C%20me%20interesa%20agendar%20un%20diagn%C3%B3stico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-body text-base font-semibold text-text border border-border hover:border-indigo/30 hover:bg-indigo/5 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

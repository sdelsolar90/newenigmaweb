import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const PLANS = [
  {
    name: "Esencial",
    tagline: "La base tecnológica que toda empresa necesita",
    features: { "Web gestionada": true, "Servidores & cloud": true, "Correo corporativo": true, "Ciberseguridad básica": true, "Ciberseguridad avanzada": false, "Automatizaciones": false, "Agente de IA personalizado": false, "Dashboard en tiempo real": false, "Consultoría mensual": "1 hora", "Soporte": "Por tickets" },
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Automatiza, protege y escala tu operación",
    badge: "Más popular",
    features: { "Web gestionada": true, "Servidores & cloud": true, "Correo corporativo": true, "Ciberseguridad básica": true, "Ciberseguridad avanzada": true, "Automatizaciones": true, "Agente de IA personalizado": false, "Dashboard en tiempo real": false, "Consultoría mensual": "2 horas", "Soporte": "Prioritario" },
    highlighted: true,
  },
  {
    name: "IA",
    tagline: "Lidera tu industria con inteligencia artificial",
    features: { "Web gestionada": true, "Servidores & cloud": true, "Correo corporativo": true, "Ciberseguridad básica": true, "Ciberseguridad avanzada": true, "Automatizaciones": true, "Agente de IA personalizado": true, "Dashboard en tiempo real": true, "Consultoría mensual": "4 horas", "Soporte": "Dedicado" },
    highlighted: false,
  },
];

const FEATURE_KEYS = ["Web gestionada", "Servidores & cloud", "Correo corporativo", "Ciberseguridad básica", "Ciberseguridad avanzada", "Automatizaciones", "Agente de IA personalizado", "Dashboard en tiempo real", "Consultoría mensual", "Soporte"];

const FAQ = [
  { question: "¿Hay contratos de permanencia?", answer: "No. Todos nuestros planes son mensuales y puedes cancelar en cualquier momento. Creemos que la mejor forma de retenerte es dándote un servicio excelente, no atándote con contratos." },
  { question: "¿Puedo cambiar de plan después?", answer: "Sí, puedes escalar o reducir tu plan en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación." },
  { question: "¿Qué pasa con mi web y datos si cancelo?", answer: "Todo es tuyo. Te entregamos acceso completo a tu web, servidores, correo y cualquier desarrollo que hayamos hecho. No retenemos nada." },
  { question: "¿Los precios son iguales para Perú y España?", answer: "Los precios se adaptan al mercado local. Agenda un diagnóstico y te enviamos una propuesta personalizada según tu ubicación y necesidades." },
  { question: "¿Puedo contratar servicios sueltos sin un plan?", answer: "Sí. Todos nuestros servicios pueden contratarse de forma independiente. Los planes son la opción más conveniente si necesitas varios servicios, pero no es obligatorio." },
];

function FeatureCell({ value }) {
  if (value === true) {
    return (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="mx-auto text-red">
        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="mx-auto text-cream2/30">
        <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return <span className="font-body text-sm text-cream font-medium">{value}</span>;
}

function FAQItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.details
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group border-b border-line"
    >
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none font-heading text-base text-cream hover:text-red transition-colors duration-200">
        {item.question}
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-4 text-cream2 group-open:rotate-180 transition-transform duration-300">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-5 font-body text-sm text-cream2 leading-relaxed pr-8">
        {item.answer}
      </p>
    </motion.details>
  );
}

export default function PlansPage() {
  const tableRef = useRef(null);
  const isTableInView = useInView(tableRef, { once: true, margin: "-80px" });

  return (
    <>
      <title>Planes y Precios | Enigma Developers</title>
      <meta name="description" content="Planes de suscripción mensual para tener tu equipo IT completo: Esencial, Pro e IA. Sin contratos de permanencia, sin letra pequeña." />
      <meta property="og:title" content="Planes y Precios | Enigma Developers" />
      <meta property="og:description" content="Elige el plan que mejor se adapta a tu empresa. Desde la base tecnológica hasta inteligencia artificial personalizada." />
      <link rel="canonical" href="https://enigmasac.com/planes" />

      <section className="pt-32 pb-16 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-red2/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight text-cream leading-tight"
          >
            Un plan para cada{" "}
            <em className="italic text-red">etapa de tu empresa</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Contrata servicios puntuales o elige un plan mensual con todo incluido. Sin contratos de permanencia, sin letra pequeña.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-carbon2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-carbon border border-line"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-red uppercase">
                Servicio puntual
              </span>
              <h3 className="mt-3 font-heading text-xl text-cream tracking-tight">
                ¿Necesitas algo específico?
              </h3>
              <p className="mt-2 text-sm text-cream2 font-body leading-relaxed">
                Todos nuestros servicios pueden contratarse de forma individual. Una web, una migración de correo, una auditoría de seguridad — lo que necesites, sin suscripción.
              </p>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
              >
                Ver servicios
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-carbon border border-red/30"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-red uppercase">
                Plan mensual
              </span>
              <h3 className="mt-3 font-heading text-xl text-cream tracking-tight">
                ¿Quieres un equipo IT dedicado?
              </h3>
              <p className="mt-2 text-sm text-cream2 font-body leading-relaxed">
                Nuestros planes agrupan varios servicios en una suscripción mensual con soporte continuo. Elige el nivel que necesitas hoy y escala cuando quieras.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
              >
                Agenda tu diagnóstico
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            {PLANS.map((plan, pi) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pi * 0.1 }}
                className={`p-6 ${plan.highlighted ? "bg-red/10 border-2 border-red" : "bg-carbon border border-line"}`}
              >
                <div className="text-center mb-6">
                  {plan.badge && (
                    <span className="inline-block px-3 py-1 bg-red text-cream text-xs font-mono tracking-[0.2em] uppercase mb-3">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="font-heading text-2xl tracking-tight text-cream">{plan.name}</h3>
                  <p className={`mt-1 text-xs font-body ${plan.highlighted ? "text-red" : "text-cream2"}`}>
                    {plan.tagline}
                  </p>
                  <span className="block mt-3 text-sm font-mono text-red">Precio personalizado</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {FEATURE_KEYS.map((feature) => {
                    const val = plan.features[feature];
                    return (
                      <li key={feature} className="flex items-center justify-between gap-3 py-2 border-b border-line/50">
                        <span className="font-body text-sm text-cream2">{feature}</span>
                        {val === true ? (
                          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="shrink-0 text-red">
                            <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : val === false ? (
                          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="shrink-0 text-cream2/30">
                            <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <span className="font-body text-sm text-cream font-medium shrink-0">{val}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to="/contacto"
                  className={`block w-full py-3 text-center font-mono text-xs uppercase tracking-[0.1em] transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-red text-cream hover:bg-red2"
                      : "border border-line text-red hover:bg-red hover:text-cream"
                  }`}
                >
                  Empezar con {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            ref={tableRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isTableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-6 pr-6 w-1/4" />
                  {PLANS.map((plan) => (
                    <th key={plan.name} className="py-6 px-4 text-center w-1/4">
                      <div className={`p-6 ${plan.highlighted ? "bg-red/10 border-2 border-red" : "bg-carbon3 border border-line"}`}>
                        {plan.badge && (
                          <span className="inline-block px-3 py-1 bg-red text-cream text-xs font-mono tracking-[0.2em] uppercase mb-3">
                            {plan.badge}
                          </span>
                        )}
                        <h3 className="font-heading text-2xl tracking-tight text-cream">{plan.name}</h3>
                        <p className={`mt-2 text-xs font-body ${plan.highlighted ? "text-red" : "text-cream2"}`}>
                          {plan.tagline}
                        </p>
                        <div className="mt-4">
                          <span className="text-sm font-mono text-red">
                            Precio personalizado
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_KEYS.map((feature) => (
                  <tr key={feature} className="border-b border-line">
                    <td className="py-4 pr-6 font-body text-sm text-cream font-medium">{feature}</td>
                    {PLANS.map((plan) => (
                      <td key={`${plan.name}-${feature}`} className="py-4 px-4 text-center">
                        <FeatureCell value={plan.features[feature]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="pt-8" />
                  {PLANS.map((plan) => (
                    <td key={plan.name} className="pt-8 px-4 text-center">
                      <Link
                        to="/contacto"
                        className={`inline-block w-full py-3 font-mono text-xs uppercase tracking-[0.1em] transition-all duration-300 ${
                          plan.highlighted
                            ? "bg-red text-cream hover:bg-red2"
                            : "border border-line text-red hover:bg-red hover:text-cream"
                        }`}
                      >
                        Empezar con {plan.name}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="bg-carbon2 border border-line p-8">
            {FAQ.map((item, index) => (
              <FAQItem key={item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

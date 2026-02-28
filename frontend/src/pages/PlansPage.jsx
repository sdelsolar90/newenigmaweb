import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const PLANS = [
  {
    name: "Esencial",
    tagline: "La base tecnológica que toda empresa necesita",
    features: {
      "Web gestionada": true,
      "Servidores & cloud": true,
      "Correo corporativo": true,
      "Ciberseguridad básica": true,
      "Ciberseguridad avanzada": false,
      "Automatizaciones": false,
      "Agente de IA personalizado": false,
      "Dashboard en tiempo real": false,
      "Consultoría mensual": "1 hora",
      "Soporte": "Por tickets",
    },
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Automatiza, protege y escala tu operación",
    badge: "Más popular",
    features: {
      "Web gestionada": true,
      "Servidores & cloud": true,
      "Correo corporativo": true,
      "Ciberseguridad básica": true,
      "Ciberseguridad avanzada": true,
      "Automatizaciones": true,
      "Agente de IA personalizado": false,
      "Dashboard en tiempo real": false,
      "Consultoría mensual": "2 horas",
      "Soporte": "Prioritario",
    },
    highlighted: true,
  },
  {
    name: "IA",
    tagline: "Lidera tu industria con inteligencia artificial",
    features: {
      "Web gestionada": true,
      "Servidores & cloud": true,
      "Correo corporativo": true,
      "Ciberseguridad básica": true,
      "Ciberseguridad avanzada": true,
      "Automatizaciones": true,
      "Agente de IA personalizado": true,
      "Dashboard en tiempo real": true,
      "Consultoría mensual": "4 horas",
      "Soporte": "Dedicado",
    },
    highlighted: false,
  },
];

const FEATURE_KEYS = [
  "Web gestionada",
  "Servidores & cloud",
  "Correo corporativo",
  "Ciberseguridad básica",
  "Ciberseguridad avanzada",
  "Automatizaciones",
  "Agente de IA personalizado",
  "Dashboard en tiempo real",
  "Consultoría mensual",
  "Soporte",
];

const FAQ = [
  {
    question: "¿Hay contratos de permanencia?",
    answer: "No. Todos nuestros planes son mensuales y puedes cancelar en cualquier momento. Creemos que la mejor forma de retenerte es dándote un servicio excelente, no atándote con contratos.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí, puedes escalar o reducir tu plan en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación.",
  },
  {
    question: "¿Qué pasa con mi web y datos si cancelo?",
    answer: "Todo es tuyo. Te entregamos acceso completo a tu web, servidores, correo y cualquier desarrollo que hayamos hecho. No retenemos nada.",
  },
  {
    question: "¿Los precios son iguales para Perú y España?",
    answer: "Los precios se adaptan al mercado local. Agenda un diagnóstico gratuito y te enviamos una propuesta personalizada según tu ubicación y necesidades.",
  },
  {
    question: "¿Puedo contratar servicios sueltos sin un plan?",
    answer: "Sí. Todos nuestros servicios pueden contratarse de forma independiente. Los planes son la opción más conveniente si necesitas varios servicios, pero no es obligatorio.",
  },
];

function FeatureCell({ value }) {
  if (value === true) {
    return (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="mx-auto text-indigo-light">
        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="mx-auto text-muted/30">
        <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return <span className="font-body text-sm text-text font-medium">{value}</span>;
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
      className="group border-b border-border"
    >
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none font-heading text-base font-semibold text-off-white hover:text-indigo-light transition-colors duration-200">
        {item.question}
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-4 text-muted group-open:rotate-180 transition-transform duration-300">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-5 font-body text-sm text-muted leading-relaxed pr-8">
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

      <section className="pt-32 pb-16 bg-void relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-deep/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-[800] tracking-tight text-off-white leading-tight"
          >
            Un plan para cada{" "}
            <span className="bg-gradient-to-r from-indigo-light to-indigo-soft bg-clip-text text-transparent">
              etapa de tu empresa
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-muted font-body max-w-2xl mx-auto leading-relaxed"
          >
            Precios personalizados según tus necesidades. Sin contratos de permanencia, sin letra pequeña.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            ref={tableRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isTableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-6 pr-6 w-1/4" />
                  {PLANS.map((plan) => (
                    <th key={plan.name} className="py-6 px-4 text-center w-1/4">
                      <div className={`p-6 ${plan.highlighted ? "bg-indigo/10 border-2 border-indigo" : "bg-surface2 border border-border"}`}>
                        {plan.badge && (
                          <span className="inline-block px-3 py-1 rounded-sm bg-indigo text-off-white text-xs font-heading font-bold tracking-[0.2em] uppercase mb-3">
                            {plan.badge}
                          </span>
                        )}
                        <h3 className="font-heading text-2xl font-[800] tracking-tight text-off-white">{plan.name}</h3>
                        <p className={`mt-2 text-xs font-body ${plan.highlighted ? "text-indigo-soft" : "text-muted"}`}>
                          {plan.tagline}
                        </p>
                        <div className="mt-4">
                          <span className={`text-sm font-mono ${plan.highlighted ? "text-indigo-light" : "text-indigo"}`}>
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
                  <tr key={feature} className="border-b border-border">
                    <td className="py-4 pr-6 font-body text-sm text-text font-medium">{feature}</td>
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
                        className={`inline-block w-full py-3 rounded-sm font-body text-sm font-semibold transition-all duration-300 ${
                          plan.highlighted
                            ? "bg-indigo text-off-white hover:bg-indigo-deep hover:shadow-lg hover:shadow-indigo/25"
                            : "border border-indigo text-indigo-light hover:bg-indigo hover:text-off-white"
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

      <section className="py-20 bg-void">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-[800] tracking-tight text-off-white text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="bg-surface border border-border p-8">
            {FAQ.map((item, index) => (
              <FAQItem key={item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const SERVICES_DETAIL = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    subtitle: "Tu presencia digital, hecha para convertir",
    description: "No hacemos webs bonitas que no sirven. Diseñamos y desarrollamos desde sitios WordPress hasta aplicaciones web completas con código a medida. Rápidas, seguras, optimizadas para SEO y pensadas para convertir visitantes en clientes.",
    features: [
      "WordPress y WooCommerce para tiendas online",
      "Aplicaciones web a medida (React, Node.js, Python, etc.)",
      "Plataformas, dashboards y sistemas internos personalizados",
      "Diseño responsive y optimizado para móviles",
      "SEO técnico integrado desde la estructura",
      "Velocidad de carga optimizada (Core Web Vitals)",
      "Integración con CRM, ERP y herramientas del negocio",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    id: "servidores-cloud",
    title: "Servidores & Cloud",
    subtitle: "Infraestructura que no te deja tirado",
    description: "Gestionamos tus servidores y tu infraestructura cloud para que tu web y tus aplicaciones estén siempre disponibles. Monitoreo 24/7, backups automáticos y escalado cuando lo necesitas.",
    features: [
      "Amazon Web Services (AWS)",
      "Administración de cPanel y CloudPanel",
      "Servidores Linux (Ubuntu, CentOS, Debian)",
      "Backups automáticos y planes de recuperación",
      "Monitoreo y alertas en tiempo real",
      "Migración de servidores sin downtime",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" />
      </svg>
    ),
  },
  {
    id: "correo",
    title: "Correo & Google Workspace",
    subtitle: "Correo profesional que funciona",
    description: "Implementamos y migramos tu correo corporativo a Google Workspace. Tu equipo trabaja con Gmail, Drive, Calendar y Meet, con soporte continuo y sin perder ni un email en el proceso.",
    features: [
      "Gmail empresarial con dominio propio",
      "Google Drive con almacenamiento compartido",
      "Calendar, Meet y herramientas colaborativas",
      "Migración desde cualquier proveedor sin pérdida de datos",
      "Configuración de DNS, SPF, DKIM y DMARC",
      "Capacitación al equipo para aprovechar todas las herramientas",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad",
    subtitle: "Protege lo que más importa",
    description: "Auditamos tu infraestructura, identificamos vulnerabilidades y las corregimos antes de que alguien las explote. Protección continua para tu web, tus servidores, tus correos y los datos de tus clientes.",
    features: [
      "Auditorías de seguridad completas",
      "Análisis de vulnerabilidades web y de servidores",
      "Configuración de firewalls y WAF",
      "Certificados SSL y hardening de servidores",
      "Protección contra malware, ransomware y phishing",
      "Plan de respuesta a incidentes",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "automatizacion",
    title: "Automatización & APIs",
    subtitle: "Deja de hacer manualmente lo que la tecnología puede hacer sola",
    description: "Conectamos tus herramientas entre sí y automatizamos los procesos repetitivos que le roban horas a tu equipo. Desde notificaciones automáticas hasta flujos completos de ventas y operaciones.",
    features: [
      "Integración de CRM y ERP",
      "Automatizaciones con Zapier, Make y n8n",
      "Webhooks y APIs personalizadas",
      "Sincronización de datos entre plataformas",
      "Flujos automáticos de ventas y facturación",
      "Reportes y dashboards automatizados",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
  {
    id: "agentes-ia",
    title: "Agentes de IA Personalizados",
    subtitle: "Inteligencia artificial que conoce tu negocio",
    description: "Desarrollamos agentes de IA entrenados con los datos de tu empresa. No son chatbots genéricos: entienden tus productos, tus procesos y tu tono de comunicación. Atienden clientes, procesan ventas y automatizan tareas internas.",
    features: [
      "Agentes entrenados con datos de tu negocio",
      "Atención al cliente automatizada 24/7",
      "Asistentes de ventas que conocen tu catálogo",
      "Automatización de procesos internos con IA",
      "Integración con WhatsApp, web y otras plataformas",
      "Dashboard de métricas y conversaciones",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect x="2" y="8" width="20" height="14" rx="2" /><path d="M6 12h.01M18 12h.01" /><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
      </svg>
    ),
  },
  {
    id: "consultoria",
    title: "Consultoría 360°",
    subtitle: "Estrategia tecnológica con visión de negocio",
    description: "Analizamos tu ecosistema digital completo, identificamos oportunidades de mejora y diseñamos una hoja de ruta tecnológica alineada con tus objetivos de negocio. No vendemos tecnología por vender: recomendamos lo que realmente necesitas.",
    features: [
      "Diagnóstico integral del ecosistema digital",
      "Análisis de herramientas y procesos actuales",
      "Hoja de ruta tecnológica personalizada",
      "Evaluación de proveedores y herramientas",
      "Acompañamiento en la implementación",
      "Sesiones de consultoría con especialistas",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
];

function ServiceSection({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`py-20 scroll-mt-24 ${isEven ? "bg-void" : "bg-content"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
          <div className={!isEven ? "lg:order-2" : ""}>
            <div className={`inline-flex w-14 h-14 rounded-sm items-center justify-center mb-6 ${isEven ? "bg-indigo/10 border border-indigo/20 text-indigo-light" : "bg-indigo/10 border border-indigo/20 text-indigo"}`}>
              {service.icon}
            </div>
            <h2 className={`font-heading text-3xl sm:text-4xl font-[800] tracking-tight leading-tight ${isEven ? "text-off-white" : "text-text-dark"}`}>
              {service.title}
            </h2>
            <p className={`mt-2 font-heading font-bold text-sm tracking-wide ${isEven ? "text-indigo-light" : "text-indigo"}`}>{service.subtitle}</p>
            <p className={`mt-4 font-body leading-relaxed ${isEven ? "text-muted" : "text-muted"}`}>{service.description}</p>
          </div>

          <div className={!isEven ? "lg:order-1" : ""}>
            <div className={`p-8 ${isEven ? "bg-surface2 border border-border" : "bg-card-light border border-border-light"}`}>
              <h3 className={`font-heading font-bold text-[0.65rem] tracking-[0.2em] uppercase mb-6 ${isEven ? "text-indigo" : "text-indigo"}`}>
                Qué incluye
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className={`mt-0.5 shrink-0 ${isEven ? "text-indigo-light" : "text-indigo"}`}>
                      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`text-sm font-body ${isEven ? "text-text/70" : "text-muted"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <title>Servicios | Enigma Developers</title>
      <meta name="description" content="Desarrollo web, servidores cloud, ciberseguridad, automatización, agentes de IA y consultoría 360°. Todos los servicios IT que tu empresa necesita." />
      <meta property="og:title" content="Servicios | Enigma Developers" />
      <meta property="og:description" content="Servicios tecnológicos integrales para PYMEs: desarrollo web, cloud, ciberseguridad, automatización e inteligencia artificial." />
      <link rel="canonical" href="https://enigmasac.com/servicios" />

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
            Servicios que cubren{" "}
            <span className="bg-gradient-to-r from-indigo-light to-indigo-soft bg-clip-text text-transparent">
              todo lo que necesitas
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-muted font-body max-w-2xl mx-auto leading-relaxed"
          >
            Cada servicio puede contratarse individualmente o como parte de un plan integral.
            Lo importante no es la herramienta, sino resolver el problema de tu negocio.
          </motion.p>
        </div>
      </section>

      {SERVICES_DETAIL.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <section className="py-20 bg-indigo">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-[800] tracking-tight text-off-white leading-tight">
            ¿No sabes qué servicios necesitas?
          </h2>
          <p className="mt-4 text-lg text-off-white/70 font-body">
            Agenda un diagnóstico gratuito y te ayudamos a identificar exactamente qué necesita tu empresa.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-sm font-body text-base font-semibold text-indigo bg-off-white hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Agenda tu diagnóstico gratuito
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

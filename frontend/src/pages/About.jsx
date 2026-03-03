import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const TIMELINE = [
  { year: "2019", title: "Nace Enigma", description: "Fundamos Enigma Developers en Lima, Perú, como una agencia de desarrollo web y hosting." },
  { year: "2020", title: "Crecimiento en pandemia", description: "La digitalización forzada por el COVID nos trajo decenas de empresas que necesitaban presencia online urgente." },
  { year: "2021", title: "Expansión de servicios", description: "Incorporamos ciberseguridad, administración de servidores cloud y consultoría tecnológica integral." },
  { year: "2022", title: "Presencia en Europa", description: "Abrimos operaciones en Barcelona, España, atendiendo empresas en ambos continentes." },
  { year: "2023", title: "Era de la automatización", description: "Integramos servicios de automatización con Zapier, Make y n8n para optimizar procesos de nuestros clientes." },
  { year: "2024", title: "Inteligencia artificial", description: "Lanzamos nuestro servicio de agentes de IA personalizados, entrenados con datos de cada negocio." },
  { year: "2025", title: "Tu equipo IT", description: "Evolucionamos al modelo de suscripción: ser el área IT completa de las empresas que confían en nosotros." },
];

const VALUES = [
  {
    title: "Compromiso real",
    description: "No desaparecemos después de entregar. Somos tu equipo, no un proveedor más.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 20.64l7.64-7.64.78-.77a5.4 5.4 0 0 0 0-7.65z" /></svg>,
  },
  {
    title: "Transparencia total",
    description: "Precios claros, procesos documentados y acceso completo a todo lo que hacemos por ti.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    title: "Soluciones prácticas",
    description: "No vendemos tecnología por vender. Recomendamos lo que realmente resuelve tu problema.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  },
  {
    title: "Mejora continua",
    description: "La tecnología evoluciona y nosotros contigo. Siempre buscamos cómo darte más valor.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex items-start gap-6 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 bg-red/10 border border-red/20 flex items-center justify-center text-red font-mono text-xs z-10">
          {item.year}
        </div>
        <div className="w-px flex-1 bg-line mt-2" />
      </div>
      <div className="pt-2 pb-6">
        <h3 className="font-heading text-lg text-cream">{item.title}</h3>
        <p className="mt-1 font-body text-sm text-cream2 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

function ValueCard({ value, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-6 bg-carbon3 border border-line hover:border-red/20 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-red/10 border border-red/20 text-red flex items-center justify-center mb-4">
        {value.icon}
      </div>
      <h3 className="font-heading text-lg text-cream mb-2">{value.title}</h3>
      <p className="font-body text-sm text-cream2 leading-relaxed">{value.description}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <title>Nosotros | Enigma Developers</title>
      <meta name="description" content="Más de 5 años creando soluciones tecnológicas desde Lima y Barcelona. Conoce la historia, el equipo y los valores de Enigma Developers." />
      <meta property="og:title" content="Nosotros | Enigma Developers" />
      <meta property="og:description" content="Desde 2019 ayudando a empresas a competir con tecnología. Presentes en Lima, Perú y Barcelona, España." />
      <link rel="canonical" href="https://enigmasac.com/nosotros" />

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
            Tecnología con{" "}
            <em className="italic text-red">visión de negocio</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Más de 5 años ayudando a empresas a competir con tecnología.
            Desde Lima y Barcelona, para toda Latinoamérica y España.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
                Nuestra historia
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight mb-6">
                De agencia digital a equipo IT integral
              </h2>
              <div className="space-y-4 font-body text-cream2 leading-relaxed">
                <p>
                  Enigma nació en 2019 en Lima, Perú, como una agencia de desarrollo web y hosting. Con el tiempo, nuestros clientes empezaron a pedirnos más: servidores, seguridad, correo, automatizaciones.
                </p>
                <p>
                  Nos dimos cuenta de que las PYMEs no necesitan proveedores sueltos que resuelvan problemas aislados. Necesitan un equipo completo que entienda su negocio y gestione toda su tecnología de forma integral.
                </p>
                <p>
                  Hoy operamos desde Lima y Barcelona, atendemos empresas en toda Latinoamérica y España, y ofrecemos todo lo que un área IT interna haría — pero sin los costos de tenerla en planilla.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              {TIMELINE.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-carbon2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
              Nuestros valores
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight">
              Lo que nos define como equipo
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {VALUES.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
              Dónde estamos
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight">
              Dos ciudades, un solo equipo
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line max-w-4xl mx-auto">
            <div className="p-8 bg-carbon2">
              <div className="w-12 h-12 bg-red/10 border border-red/20 text-red flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-heading text-xl tracking-tight text-cream mb-2">Lima, Perú</h3>
              <p className="font-body text-sm text-cream2 leading-relaxed">
                Sede principal. Desde aquí atendemos toda Latinoamérica con un equipo de desarrollo, servidores y soporte técnico.
              </p>
              <a href="tel:+51959561015" className="inline-flex items-center gap-2 mt-4 text-sm text-red font-mono">
                +51 959 561 015
              </a>
            </div>
            <div className="p-8 bg-carbon2">
              <div className="w-12 h-12 bg-red/10 border border-red/20 text-red flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-heading text-xl tracking-tight text-cream mb-2">Barcelona, España</h3>
              <p className="font-body text-sm text-cream2 leading-relaxed">
                Nuestra base en Europa. Atendemos empresas en España y la Unión Europea con cercanía y horario local.
              </p>
              <a href="tel:+34656663992" className="inline-flex items-center gap-2 mt-4 text-sm text-red font-mono">
                +34 656 663 992
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="mt-4 text-base text-cream/70 font-body">
            Agenda una llamada sin compromiso. Te contamos cómo podemos ayudar a tu empresa.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-red bg-cream hover:bg-white transition-all duration-300"
          >
            Agenda tu diagnóstico
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

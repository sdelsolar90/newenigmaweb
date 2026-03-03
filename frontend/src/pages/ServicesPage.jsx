import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";
import useTextDecrypt from "../hooks/useTextDecrypt";
import use3DTilt from "../hooks/use3DTilt";
import { EnigmaIsotipo } from "../components/EnigmaLogo";

const SERVICE_ICONS = [
  {
    id: "desarrollo-web",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    id: "servidores-cloud",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg>,
  },
  {
    id: "correo",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  },
  {
    id: "ciberseguridad",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
  },
  {
    id: "automatizacion",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>,
  },
  {
    id: "agentes-ia",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect x="2" y="8" width="20" height="14" rx="2" /><path d="M6 12h.01M18 12h.01" /><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" /></svg>,
  },
  {
    id: "consultoria",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
  },
];

const COUNT = SERVICE_ICONS.length;

function AnimatedCheck({ visible, delay }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-red">
      <path
        d="M4 8l3 3 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="20"
        strokeDashoffset={visible ? 0 : 20}
        style={{ transition: `stroke-dashoffset 0.4s ease ${delay}s` }}
      />
    </svg>
  );
}

function ServiceContent({ service }) {
  const { t } = useT();
  const [active, setActive] = useState(false);
  useEffect(() => { setActive(true); }, []);

  const { displayText } = useTextDecrypt(service.title, active);
  const { ref: tiltRef, style: tiltStyle, handlers: tiltHandlers } = use3DTilt({ max: 6 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex w-14 h-14 items-center justify-center mb-4 bg-red/10 border border-red/20 text-red"
        >
          {service.icon}
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-px w-20 bg-red origin-left mb-4"
        />
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-cream">
          {displayText || service.title}
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-3 font-mono text-xs tracking-[0.42em] text-red uppercase"
        >
          {service.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 font-body leading-relaxed text-cream2 max-w-lg"
        >
          {service.description}
        </motion.p>
      </div>

      <div style={{ perspective: "800px" }}>
        <motion.div
          ref={tiltRef}
          style={tiltStyle}
          {...tiltHandlers}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 bg-carbon2 border border-line hover:border-red/30 hover:shadow-[0_0_60px_rgba(196,74,32,0.18)] transition-all duration-500"
        >
          <h3 className="font-mono text-xs tracking-[0.42em] uppercase mb-6 text-red">
            {t("servicesPage.whatIncludes")}
          </h3>
          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + 0.07 * i, duration: 0.35 }}
                className="flex items-start gap-3"
              >
                <AnimatedCheck visible={active} delay={0.3 + 0.07 * i} />
                <span className="text-sm font-body text-cream2">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProgressNav({ activeIndex, onSelect, services }) {
  const { t } = useT();

  return (
    <nav
      aria-label={t("servicesPage.navAria")}
      className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1"
    >
      {services.map((s, i) => (
        <button
          key={s.id}
          onClick={() => onSelect(i)}
          aria-label={`${s.title} — ${i + 1} / ${COUNT}`}
          className="group flex items-center gap-3 py-1.5 cursor-pointer"
        >
          <span
            className={`font-mono text-[10px] tracking-wider transition-all duration-300 ${
              i === activeIndex ? "text-red" : "text-cream/20 group-hover:text-cream/50"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={`h-px transition-all duration-300 ${
              i === activeIndex
                ? "w-10 bg-red"
                : "w-4 bg-cream/10 group-hover:w-6 group-hover:bg-cream/30"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}

function MobileServiceSection({ service, index }) {
  const { t } = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { displayText } = useTextDecrypt(service.title, isInView);
  const number = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={service.id}
      className={`relative py-20 scroll-mt-24 overflow-hidden ${isEven ? "bg-carbon" : "bg-carbon2"}`}
    >
      <span className="absolute top-4 right-4 font-heading text-[5rem] leading-none opacity-[0.05] text-cream select-none pointer-events-none">
        {number}
      </span>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex w-12 h-12 items-center justify-center mb-4 bg-red/10 border border-red/20 text-red"
        >
          {service.icon}
        </motion.div>
        <h2 className="font-heading text-2xl sm:text-3xl tracking-tight leading-tight text-cream">
          {displayText || service.title}
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-2 font-mono text-xs tracking-[0.42em] text-red uppercase"
        >
          {service.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-4 font-body text-sm leading-relaxed text-cream2"
        >
          {service.description}
        </motion.p>

        <div className="mt-8 p-6 bg-carbon3 border border-line">
          <h3 className="font-mono text-xs tracking-[0.42em] uppercase mb-5 text-red">{t("servicesPage.whatIncludes")}</h3>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + 0.07 * i }}
                className="flex items-start gap-3"
              >
                <AnimatedCheck visible={isInView} delay={0.15 + 0.07 * i} />
                <span className="text-sm font-body text-cream2">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { lang, t } = useT();
  const canonical = lang === "es" ? "https://enigmasac.com/servicios" : "https://enigmasac.com/en/services";

  const services = SERVICE_ICONS.map((s, i) => ({ ...s, ...t("servicesPage.detail")[i] }));

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const heroPrefix = t("servicesPage.heroPrefix");
  const heroAccent = t("servicesPage.heroAccent");
  const { displayText: prefixDecrypted, isComplete: prefixDone } = useTextDecrypt(heroPrefix, heroInView);
  const { displayText: accentDecrypted } = useTextDecrypt(heroAccent, prefixDone);

  const scrollRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(0, Math.min(Math.floor(v * COUNT), COUNT - 1));
    if (idx !== activeIndexRef.current) {
      activeIndexRef.current = idx;
      setActiveIndex(idx);
    }
  });

  const scrollToService = useCallback((idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const targetScroll = containerTop + (idx / COUNT) * (el.offsetHeight - window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const idx = services.findIndex((s) => s.id === hash);
    if (idx === -1) return;
    setTimeout(() => scrollToService(idx), 100);
  }, [scrollToService]);

  const activeService = services[activeIndex];
  const number = String(activeIndex + 1).padStart(2, "0");

  return (
    <>
      <title>{t("meta.services.title")}</title>
      <meta name="description" content={t("meta.services.description")} />
      <meta property="og:title" content={t("meta.services.ogTitle")} />
      <meta property="og:description" content={t("meta.services.ogDescription")} />
      <link rel="canonical" href={canonical} />

      <section ref={heroRef} className="pt-32 pb-20 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red2/10 rounded-full blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <EnigmaIsotipo size={48} className="mx-auto mb-6 opacity-40" />
          </motion.div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight text-cream leading-tight">
            {prefixDecrypted || heroPrefix}
            <em className="italic text-red">{accentDecrypted || heroAccent}</em>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-32 bg-gradient-to-r from-transparent via-red to-transparent mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-base text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            {t("servicesPage.heroDescription")}
          </motion.p>
        </div>
      </section>

      <div
        ref={scrollRef}
        className="hidden lg:block relative bg-carbon"
        style={{ height: `${COUNT * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[200px] bg-red/8 pointer-events-none"
            animate={{
              left: activeIndex % 2 === 0 ? "5%" : "55%",
              top: activeIndex % 2 === 0 ? "15%" : "45%",
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #F0EDE6 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.04, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 -translate-y-1/2 right-[12%] font-heading text-[16rem] xl:text-[20rem] leading-none text-cream select-none pointer-events-none"
            >
              {number}
            </motion.span>
          </AnimatePresence>

          <div className="absolute bottom-12 left-10 opacity-[0.03] animate-rotor-idle pointer-events-none">
            <EnigmaIsotipo size={160} />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 pr-24 xl:pr-32">
            <AnimatePresence mode="wait">
              <ServiceContent key={activeIndex} service={activeService} />
            </AnimatePresence>
          </div>

          <ProgressNav activeIndex={activeIndex} onSelect={scrollToService} services={services} />
        </div>
      </div>

      <div className="lg:hidden">
        {services.map((service, i) => (
          <MobileServiceSection key={service.id} service={service} index={i} />
        ))}
      </div>

      <section className="py-20 bg-red">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight">
            {t("servicesPage.ctaTitle")}
          </h2>
          <p className="mt-4 text-base text-cream/70 font-body">
            {t("servicesPage.ctaDescription")}
          </p>
          <LocaleLink
            to="/contacto"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-red bg-cream hover:bg-white transition-all duration-300"
          >
            {t("servicesPage.ctaButton")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
        </div>
      </section>
    </>
  );
}

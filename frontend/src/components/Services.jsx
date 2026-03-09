import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";
import { EnigmaIsotipo } from "./EnigmaLogo.jsx";
import useTextDecrypt from "../hooks/useTextDecrypt.js";

const SERVICES = [
  {
    id: "desarrollo-web",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    id: "servidores-cloud",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" />
      </svg>
    ),
  },
  {
    id: "correo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "ciberseguridad",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "automatizacion",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
  {
    id: "agentes-ia",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect x="2" y="8" width="20" height="14" rx="2" /><path d="M6 12h.01M18 12h.01" /><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
      </svg>
    ),
  },
  {
    id: "consultoria",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
];

const COUNT = SERVICES.length;
const STEP = 360 / COUNT;

function RotorIcon({ service, index, springRotation, radius, isActive, onSelect, iconSize }) {
  const angle = index * STEP;
  const counterRotation = useTransform(springRotation, (r) => -r - angle);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        transform: `rotate(${angle}deg) translateY(-${radius}px)`,
      }}
    >
      <motion.button
        onClick={() => onSelect(index)}
        aria-label={service.id}
        style={{
          rotate: counterRotation,
          width: iconSize,
          height: iconSize,
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: isActive ? 1.15 : 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className={`flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200 ${
          isActive
            ? "bg-red text-cream shadow-lg shadow-red/30"
            : "bg-carbon3 border border-line text-cream2 hover:border-red/30 hover:text-red"
        }`}
      >
        {service.icon}
      </motion.button>
    </div>
  );
}

export default function Services() {
  const { t } = useT();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const prevActive = useRef(0);

  const ringRotation = useMotionValue(0);
  const springRotation = useSpring(ringRotation, { damping: 25, stiffness: 150 });

  const headlineText = t("services.headline");
  const { displayText } = useTextDecrypt(headlineText, isHeaderInView);

  const items = t("services.items");
  const activeService = SERVICES[active];
  const { displayText: decryptedTitle } = useTextDecrypt(items[active].title, true, { interval: 30, stagger: 20 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function selectService(newIndex) {
    let delta = newIndex - prevActive.current;
    if (delta > COUNT / 2) delta -= COUNT;
    if (delta < -COUNT / 2) delta += COUNT;
    ringRotation.set(ringRotation.get() - delta * STEP);
    prevActive.current = newIndex;
    setActive(newIndex);
  }

  const containerSize = isMobile ? 290 : 420;
  const iconRadius = isMobile ? 115 : 165;
  const iconSize = isMobile ? 40 : 48;
  const isotipoSize = isMobile ? 100 : 140;
  const innerInset = isMobile ? 75 : 110;

  return (
    <section className="pt-24 lg:pt-32 pb-10 lg:pb-12 bg-carbon border-t border-line">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            {t("services.tag")}
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight tracking-tight">
            {isHeaderInView ? displayText : headlineText}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base text-cream2 font-body leading-relaxed"
          >
            {t("services.description")}
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative" style={{ width: containerSize, height: containerSize }}>
            <div className="absolute inset-0 rounded-full border border-line/40" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 12L1 0h14L8 12z" fill="#C44A20" />
              </svg>
            </div>

            <motion.div className="absolute inset-0" style={{ rotate: springRotation }}>
              {SERVICES.map((service, index) => (
                <RotorIcon
                  key={service.id}
                  service={service}
                  index={index}
                  springRotation={springRotation}
                  radius={iconRadius}
                  isActive={index === active}
                  onSelect={selectService}
                  iconSize={iconSize}
                />
              ))}
            </motion.div>

            <div
              className="absolute rounded-full border border-line/20 flex items-center justify-center overflow-hidden"
              style={{ top: innerInset, left: innerInset, right: innerInset, bottom: innerInset }}
            >
              <div className="absolute animate-rotor-idle opacity-[0.04]">
                <EnigmaIsotipo size={isotipoSize} variant="dark" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 bg-red/10 text-red flex items-center justify-center rounded-lg">
                    {activeService.icon}
                  </div>
                  <span className="font-heading text-sm md:text-base text-cream text-center px-2 leading-tight">
                    {decryptedTitle}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full max-w-md mt-8 border border-line/30 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-cream2 font-body leading-relaxed mb-4">
                  {items[active].description}
                </p>
                <LocaleLink
                  to={`/servicios#${activeService.id}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
                >
                  {t("services.viewDetail")}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </LocaleLink>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <LocaleLink
            to="/servicios"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
          >
            {t("services.viewAll")}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";
import useTextDecrypt from "../hooks/useTextDecrypt.js";
import use3DTilt from "../hooks/use3DTilt.js";

const PLAN_META = [
  { highlighted: false },
  { highlighted: true },
  { highlighted: false },
];

function PlanCard({ plan, meta, index, t }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { ref: tiltRef, style: tiltStyle, handlers } = use3DTilt({ max: 5, scale: 1.02 });

  return (
    <div ref={ref}>
      <motion.div
        ref={tiltRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 }}
        style={{ ...tiltStyle, transformPerspective: 800 }}
        {...handlers}
        className={`relative p-8 flex flex-col h-full transition-all duration-300 ${
          meta.highlighted
            ? "bg-carbon border-2 border-red shadow-2xl shadow-red/10 z-10 animate-[glow-pulse_3s_ease-in-out_infinite]"
            : "bg-carbon3 border border-line hover:border-red/20"
        }`}
      >
        {meta.highlighted && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 bg-red font-mono text-xs tracking-[0.12em] text-cream uppercase">
              {t("plans.badge")}
            </span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-heading text-2xl tracking-tight text-cream">{plan.name}</h3>
          <p className="mt-2 text-sm font-body leading-relaxed text-cream2">
            {plan.tagline}
          </p>
        </div>

        <div className="py-5 border-y border-line mb-6">
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-red">
            {t("plans.customPrice")}
          </span>
          <p className="text-xs mt-1 text-cream2">
            {t("plans.customPriceNote")}
          </p>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature, fi) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: fi * 0.05 }}
              className="flex items-start gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-red">
                <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-body text-cream2">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <LocaleLink
          to="/contacto"
          className={`block text-center py-3.5 font-mono text-xs uppercase tracking-[0.1em] transition-all duration-300 ${
            meta.highlighted
              ? "bg-red text-cream hover:bg-red2"
              : "border border-line text-cream2 hover:border-red hover:text-red"
          }`}
        >
          {plan.cta}
        </LocaleLink>
      </motion.div>
    </div>
  );
}

export default function Plans() {
  const { t } = useT();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  const headlineText = t("plans.headline");
  const { displayText } = useTextDecrypt(headlineText, isHeaderInView);

  const plans = t("plans.items");

  return (
    <section className="py-24 lg:py-32 bg-carbon2">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            {t("plans.tag")}
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-cream leading-tight">
            {isHeaderInView ? displayText : headlineText}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base text-cream2 font-body leading-relaxed"
          >
            {t("plans.description")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} meta={PLAN_META[index]} index={index} t={t} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <LocaleLink
            to="/planes"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
          >
            {t("plans.compare")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}

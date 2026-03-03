import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";

const PLAN_META = [
  { highlighted: false, features: [true, true, true, true, false, false, false, false, "1hora", "tickets"] },
  { highlighted: true, features: [true, true, true, true, true, true, false, false, "2horas", "prioritario"] },
  { highlighted: false, features: [true, true, true, true, true, true, true, true, "4horas", "dedicado"] },
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
  const { lang, t } = useT();
  const tableRef = useRef(null);
  const isTableInView = useInView(tableRef, { once: true, margin: "-80px" });
  const canonical = lang === "es" ? "https://enigmasac.com/planes" : "https://enigmasac.com/en/plans";

  const plans = t("plansPage.plans");
  const featureKeys = t("plansPage.featureKeys");
  const featureValues = t("plansPage.featureValues");
  const faq = t("plansPage.faq");

  return (
    <>
      <title>{t("meta.plans.title")}</title>
      <meta name="description" content={t("meta.plans.description")} />
      <meta property="og:title" content={t("meta.plans.ogTitle")} />
      <meta property="og:description" content={t("meta.plans.ogDescription")} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }) }}
      />

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
            {t("plansPage.heroTitle")}{" "}
            <em className="italic text-red">{t("plansPage.heroTitleItalic")}</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            {t("plansPage.heroDescription")}
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
                {t("plansPage.punctualTag")}
              </span>
              <h3 className="mt-3 font-heading text-xl text-cream tracking-tight">
                {t("plansPage.punctualTitle")}
              </h3>
              <p className="mt-2 text-sm text-cream2 font-body leading-relaxed">
                {t("plansPage.punctualDescription")}
              </p>
              <LocaleLink
                to="/servicios"
                className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
              >
                {t("plansPage.punctualCta")}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LocaleLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-carbon border border-red/30"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-red uppercase">
                {t("plansPage.monthlyTag")}
              </span>
              <h3 className="mt-3 font-heading text-xl text-cream tracking-tight">
                {t("plansPage.monthlyTitle")}
              </h3>
              <p className="mt-2 text-sm text-cream2 font-body leading-relaxed">
                {t("plansPage.monthlyDescription")}
              </p>
              <LocaleLink
                to="/contacto"
                className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-[0.1em] text-red hover:text-cream transition-colors duration-200"
              >
                {t("plansPage.monthlyCta")}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LocaleLink>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            {PLAN_META.map((meta, pi) => (
              <motion.div
                key={plans[pi].name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pi * 0.1 }}
                className={`p-6 ${meta.highlighted ? "bg-red/10 border-2 border-red" : "bg-carbon border border-line"}`}
              >
                <div className="text-center mb-6">
                  {plans[pi].badge && (
                    <span className="inline-block px-3 py-1 bg-red text-cream text-xs font-mono tracking-[0.2em] uppercase mb-3">
                      {plans[pi].badge}
                    </span>
                  )}
                  <h3 className="font-heading text-2xl tracking-tight text-cream">{plans[pi].name}</h3>
                  <p className={`mt-1 text-xs font-body ${meta.highlighted ? "text-red" : "text-cream2"}`}>
                    {plans[pi].tagline}
                  </p>
                  <span className="block mt-3 text-sm font-mono text-red">{t("plansPage.customPrice")}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {featureKeys.map((feature, fi) => {
                    const val = meta.features[fi];
                    const displayVal = typeof val === "string" ? featureValues[val] : val;
                    return (
                      <li key={feature} className="flex items-center justify-between gap-3 py-2 border-b border-line/50">
                        <span className="font-body text-sm text-cream2">{feature}</span>
                        {displayVal === true ? (
                          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="shrink-0 text-red">
                            <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : displayVal === false ? (
                          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="shrink-0 text-cream2/30">
                            <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <span className="font-body text-sm text-cream font-medium shrink-0">{displayVal}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <LocaleLink
                  to="/contacto"
                  className={`block w-full py-3 text-center font-mono text-xs uppercase tracking-[0.1em] transition-all duration-300 ${
                    meta.highlighted
                      ? "bg-red text-cream hover:bg-red2"
                      : "border border-line text-red hover:bg-red hover:text-cream"
                  }`}
                >
                  {t("plansPage.startWith")} {plans[pi].name}
                </LocaleLink>
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
                  {PLAN_META.map((meta, pi) => (
                    <th key={plans[pi].name} className="py-6 px-4 text-center w-1/4">
                      <div className={`p-6 ${meta.highlighted ? "bg-red/10 border-2 border-red" : "bg-carbon3 border border-line"}`}>
                        {plans[pi].badge && (
                          <span className="inline-block px-3 py-1 bg-red text-cream text-xs font-mono tracking-[0.2em] uppercase mb-3">
                            {plans[pi].badge}
                          </span>
                        )}
                        <h3 className="font-heading text-2xl tracking-tight text-cream">{plans[pi].name}</h3>
                        <p className={`mt-2 text-xs font-body ${meta.highlighted ? "text-red" : "text-cream2"}`}>
                          {plans[pi].tagline}
                        </p>
                        <div className="mt-4">
                          <span className="text-sm font-mono text-red">
                            {t("plansPage.customPrice")}
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((feature, fi) => (
                  <tr key={feature} className="border-b border-line">
                    <td className="py-4 pr-6 font-body text-sm text-cream font-medium">{feature}</td>
                    {PLAN_META.map((meta, pi) => {
                      const val = meta.features[fi];
                      const displayVal = typeof val === "string" ? featureValues[val] : val;
                      return (
                        <td key={`${plans[pi].name}-${feature}`} className="py-4 px-4 text-center">
                          <FeatureCell value={displayVal} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="pt-8" />
                  {PLAN_META.map((meta, pi) => (
                    <td key={plans[pi].name} className="pt-8 px-4 text-center">
                      <LocaleLink
                        to="/contacto"
                        className={`inline-block w-full py-3 font-mono text-xs uppercase tracking-[0.1em] transition-all duration-300 ${
                          meta.highlighted
                            ? "bg-red text-cream hover:bg-red2"
                            : "border border-line text-red hover:bg-red hover:text-cream"
                        }`}
                      >
                        {t("plansPage.startWith")} {plans[pi].name}
                      </LocaleLink>
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
            {t("plansPage.faqTitle")}
          </h2>
          <div className="bg-carbon2 border border-line p-8">
            {faq.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";

const VALUE_ICONS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 20.64l7.64-7.64.78-.77a5.4 5.4 0 0 0 0-7.65z" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
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

function ValueCard({ value, icon, index }) {
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
        {icon}
      </div>
      <h3 className="font-heading text-lg text-cream mb-2">{value.title}</h3>
      <p className="font-body text-sm text-cream2 leading-relaxed">{value.description}</p>
    </motion.div>
  );
}

export default function About() {
  const { lang, t } = useT();
  const timeline = t("aboutPage.timeline");
  const values = t("aboutPage.values");
  const canonical = lang === "es" ? "https://enigmasac.com/nosotros" : "https://enigmasac.com/en/about";

  return (
    <>
      <title>{t("meta.about.title")}</title>
      <meta name="description" content={t("meta.about.description")} />
      <meta property="og:title" content={t("meta.about.ogTitle")} />
      <meta property="og:description" content={t("meta.about.ogDescription")} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      <link rel="canonical" href={canonical} />

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
            {t("aboutPage.heroTitle")}{" "}
            <em className="italic text-red">{t("aboutPage.heroTitleItalic")}</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            {t("aboutPage.heroDescription")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
                {t("aboutPage.historyTag")}
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight mb-6">
                {t("aboutPage.historyTitle")}
              </h2>
              <div className="space-y-4 font-body text-cream2 leading-relaxed">
                <p>{t("aboutPage.historyP1")}</p>
                <p>{t("aboutPage.historyP2")}</p>
                <p>{t("aboutPage.historyP3")}</p>
              </div>
            </div>

            <div className="lg:pl-8">
              {timeline.map((item, index) => (
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
              {t("aboutPage.valuesTag")}
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight">
              {t("aboutPage.valuesTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} icon={VALUE_ICONS[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
              {t("aboutPage.locationTag")}
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl tracking-tight text-cream leading-tight">
              {t("aboutPage.locationTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line max-w-4xl mx-auto">
            <div className="p-8 bg-carbon2">
              <div className="w-12 h-12 bg-red/10 border border-red/20 text-red flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-heading text-xl tracking-tight text-cream mb-2">{t("aboutPage.limaTitle")}</h3>
              <p className="font-body text-sm text-cream2 leading-relaxed">
                {t("aboutPage.limaDescription")}
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
              <h3 className="font-heading text-xl tracking-tight text-cream mb-2">{t("aboutPage.barcelonaTitle")}</h3>
              <p className="font-body text-sm text-cream2 leading-relaxed">
                {t("aboutPage.barcelonaDescription")}
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
            {t("aboutPage.ctaTitle")}
          </h2>
          <p className="mt-4 text-base text-cream/70 font-body">
            {t("aboutPage.ctaDescription")}
          </p>
          <LocaleLink
            to="/contacto"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-red bg-cream hover:bg-white transition-all duration-300"
          >
            {t("aboutPage.ctaButton")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
        </div>
      </section>
    </>
  );
}

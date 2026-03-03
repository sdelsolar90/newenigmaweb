import { motion } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";

function renderSection(section, index, sections, info) {
  const isLast = index === sections.length - 1;

  return (
    <div key={index}>
      <h2 className="font-heading text-lg font-semibold text-cream mb-4">{section.title}</h2>

      {section.type === "info" && (
        <ul className="space-y-2">
          <li><span className="text-cream">{info.labelRazon}</span> {info.razonSocial}</li>
          <li><span className="text-cream">{info.labelRuc}</span> {info.ruc}</li>
          <li><span className="text-cream">{info.labelDomicilio}</span> {info.domicilio}</li>
          <li><span className="text-cream">{info.labelEmail}</span> {info.email}</li>
          <li><span className="text-cream">{info.labelWeb}</span> {info.web}</li>
        </ul>
      )}

      {section.text && <p>{section.text}</p>}

      {section.paragraphs && section.paragraphs.map((p, i) => (
        <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>
      ))}

      {section.intro && <p className={section.items || section.browserLinks ? "mb-3" : ""}>{section.intro}</p>}

      {section.subsections && (
        <div className="space-y-6">
          {section.subsections.map((sub, si) => (
            <div key={si}>
              <h3 className="font-heading text-base font-semibold text-cream mb-2">{sub.title}</h3>
              {sub.intro && <p className={sub.items ? "mb-3" : ""}>{sub.intro}</p>}
              {sub.items && (
                <ul className="space-y-1.5 list-disc list-inside">
                  {sub.items.map((item, ii) => <li key={ii}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {section.items && (
        <ul className={`space-y-${section.intro ? "1.5" : "3"} list-disc list-inside`}>
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}

      {section.browserLinks && (
        <ul className="space-y-2">
          {section.browserLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-red hover:text-red transition-colors">{link.name}</a>
            </li>
          ))}
        </ul>
      )}

      {section.outro && <p className="mt-3">{section.outro}</p>}

      {isLast && !section.type && (
        <ul className="mt-3 space-y-2">
          <li><span className="text-cream">{info.labelEmailShort}</span> <a href="mailto:hello@enigmasac.com" className="text-red hover:text-red transition-colors">hello@enigmasac.com</a></li>
          <li><span className="text-cream">{info.labelPhonePeru}</span> +51 959 561 015</li>
          <li><span className="text-cream">{info.labelPhoneSpain}</span> +34 656 663 992</li>
        </ul>
      )}
    </div>
  );
}

export default function CookiePolicy() {
  const { lang, t } = useT();
  const page = t("cookiesPage");
  const info = t("companyInfo");
  const meta = t("meta.cookies");

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`https://enigmasac.com${lang === "es" ? "/cookies" : "/en/cookies"}`} />

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
            className="font-heading text-4xl sm:text-5xl tracking-tight text-cream leading-tight"
          >
            {page.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-sm text-cream2 font-body"
          >
            {page.lastUpdatedPrefix || "Last updated:"} {page.lastUpdated}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-carbon2 border border-line p-8 sm:p-12 space-y-10 font-body text-sm text-cream2 leading-relaxed">
            {page.sections.map((section, i) => renderSection(section, i, page.sections, info))}
          </div>
        </div>
      </section>
    </>
  );
}

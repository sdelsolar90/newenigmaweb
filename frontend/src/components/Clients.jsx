import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";

const CLIENTS = [
  { name: "Bernal Dental Clinic", domain: "bernaldentalclinic.com", logo: "/clients/bernal-dental-clinic.png" },
  { name: "Psicologamente", domain: "psicologamente.pe", logo: "/clients/psicologamente.png" },
  { name: "Ebombo", domain: "ebombo.com", logo: "/clients/ebombo.webp" },
  { name: "Mara Intimates", domain: "maraintimates.com", logo: "/clients/mara-intimates.svg" },
  { name: "El Piombino", domain: "elpiombino.com", logo: "/clients/el-piombino.png" },
];

export default function Clients() {
  const { t } = useT();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-12 lg:py-16 bg-carbon">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            {t("clients.tag")}
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-cream leading-tight">
            {t("clients.title")}{" "}
            <em className="italic">{t("clients.titleItalic")}</em>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {CLIENTS.map((client, i) => (
            <motion.a
              key={client.domain}
              href={`https://${client.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-center h-12 md:h-14"
            >
              <div className="client-logo-wrap h-full w-[140px] md:w-[170px]">
                <img
                  src={client.logo}
                  alt={client.name}
                  width={170}
                  height={56}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
                <div
                  className="client-logo-color"
                  style={{
                    WebkitMaskImage: `url(${client.logo})`,
                    maskImage: `url(${client.logo})`,
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <LocaleLink
            to="/clientes"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-cream2 border border-line hover:border-red hover:text-red transition-all duration-300"
          >
            {t("clients.viewAll")}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}

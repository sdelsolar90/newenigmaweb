import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";

const ALL_CLIENTS = [
  { name: "Bernal Dental Clinic", domain: "bernaldentalclinic.com", logo: "/clients/bernal-dental-clinic.png", useFilter: true },
  { name: "Psicológamente", domain: "psicologamente.pe", logo: "/clients/psicologamente.png" },
  { name: "Ebombo", domain: "ebombo.com", logo: "/clients/ebombo.webp" },
  { name: "Mara Intimates", domain: "maraintimates.com", logo: "/clients/mara-intimates.svg" },
  { name: "El Piombino", domain: "elpiombino.com", logo: "/clients/el-piombino.png" },
  { name: "Black Tiger", domain: "blacktiger.pe", logo: "/clients/black-tiger.webp" },
  { name: "Birck SAC", domain: "bricksac.com", logo: "/clients/brick-sac.png" },
  { name: "Casa Naiaco", domain: "casanaiaco.com", logo: "/clients/casa-naiaco.png" },
  { name: "Golootza", domain: "golootza.com", logo: "/clients/golootza.png" },
  { name: "Grupo Omen", domain: "grupoomen.com", logo: "/clients/grupo-omen.png" },
  { name: "G Studio", domain: "gstudio.es", logo: "/clients/gstudio.webp" },
  { name: "Indebooks", domain: "indebooks.lat" },
  { name: "Iniciativa", domain: "iniciativa.pe", logo: "/clients/iniciativa.png" },
  { name: "Innvoice", domain: "innvoice.pe", logo: "/clients/innvoice.png" },
  { name: "Kila Design", domain: "kiladesignpe.com", logo: "/clients/kila-design.png" },
  { name: "Qala Diseño", domain: "qaladiseno.pe", logo: "/clients/qala-diseno.png" },
  { name: "Secreto Inca Co.", domain: "secretoincaco.pe", logo: "/clients/secreto-inca.png" },
  { name: "Soldevilla", domain: "soldevilla.pe", logo: "/clients/soldevilla.png" },
  { name: "Tangram", domain: "tangram.com.pe", logo: "/clients/tangram.png" },
];

const CONTACTS = [0, 18, 36, 90, 108, 162, 180, 198, 216, 270, 288, 324, 342];

function ClientRotor({ client, index, rowIndex }) {
  const isReverse = rowIndex % 2 === 1;
  const hasLink = !!client.domain;
  const animDelay = index * 0.05;

  const rotor = (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: isReverse ? 60 : -60 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: animDelay, ease: [0.22, 1, 0.36, 1] }}
      className={`gear-wrapper flex flex-col items-center gap-4 group ${hasLink ? "cursor-pointer" : ""}`}
    >
      <div className={isReverse ? "gear-spin-reverse" : "gear-spin"}>
        <svg
          width="90"
          height="90"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle
            cx="60" cy="60" r="54"
            strokeWidth="2.5"
            stroke="currentColor"
            className="text-cream/30 group-hover:text-red transition-colors duration-300"
          />

          <circle cx="60" cy="60" r="44" className="fill-red/80 group-hover:fill-red transition-colors duration-300" />

          {CONTACTS.map((angle) => (
            <rect
              key={angle}
              x="57.5" y="2" width="5" height="3" rx="1"
              className="fill-cream/40 group-hover:fill-cream transition-colors duration-300"
              transform={`rotate(${angle} 60 60)`}
            />
          ))}

          <g transform="rotate(-60 60 60)">
            <rect x="58" y="8" width="4" height="14" rx="2" className="fill-metal/50 group-hover:fill-metal transition-colors duration-300" />
            <polygon points="60,6 56,12 64,12" className="fill-metal/50 group-hover:fill-metal transition-colors duration-300" />
          </g>

          <circle
            cx="60" cy="60" r="28"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-cream/30 group-hover:text-cream/60 fill-carbon transition-colors duration-300"
          />
          <circle
            cx="60" cy="60" r="11"
            strokeWidth="1.5"
            stroke="currentColor"
            className="fill-red/80 group-hover:fill-red text-cream/40 group-hover:text-cream/70 transition-colors duration-300"
          />
          <circle cx="60" cy="60" r="3" className="fill-cream/40 group-hover:fill-cream transition-colors duration-300" />
          <line x1="57" y1="60" x2="63" y2="60" stroke="#1C1C1E" strokeWidth="1" />
        </svg>
      </div>

      {client.logo ? (
        <div className="relative h-8 w-[110px]">
          {client.useFilter ? (
            <div className="client-logo-wrap h-full w-full">
              <img src={client.logo} alt={client.name} width={110} height={32} loading="lazy" className="h-full w-full object-contain" />
              <div
                className="client-logo-color"
                style={{
                  WebkitMaskImage: `url(${client.logo})`,
                  maskImage: `url(${client.logo})`,
                }}
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 bg-cream/40 group-hover:bg-red group-hover:opacity-100 transition-all duration-300"
              style={{
                WebkitMaskImage: `url(${client.logo})`,
                maskImage: `url(${client.logo})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          )}
        </div>
      ) : (
        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-cream2/50 group-hover:text-red text-center leading-tight transition-colors duration-300 max-w-[120px]">
          {client.name}
        </span>
      )}
    </motion.div>
  );

  if (hasLink) {
    return (
      <a
        href={`https://${client.domain}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={client.name}
      >
        {rotor}
      </a>
    );
  }

  return rotor;
}

export default function ClientsPage() {
  const { lang, t } = useT();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const canonical = lang === "es" ? "https://enigmasac.com/clientes" : "https://enigmasac.com/en/clients";

  const getRowIndex = (index) => {
    if (typeof window === "undefined") return 0;
    const w = window.innerWidth;
    const cols = w >= 1280 ? 5 : w >= 1024 ? 4 : w >= 768 ? 3 : 2;
    return Math.floor(index / cols);
  };

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-carbon min-h-screen">
      <title>{t("meta.clients.title")}</title>
      <meta name="description" content={t("meta.clients.description")} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      <link rel="canonical" href={canonical} />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20 lg:mb-24"
        >
          <span className="font-mono text-xs tracking-[0.42em] text-red uppercase">
            {t("clientsPage.tag")}
          </span>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight text-cream leading-tight">
            {t("clientsPage.title")}{" "}
            <em className="italic">{t("clientsPage.titleItalic")}</em>
          </h1>
          <p className="mt-6 font-body text-base text-cream2 leading-relaxed max-w-xl mx-auto">
            {t("clientsPage.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 justify-items-center">
          {ALL_CLIENTS.map((client, i) => (
            <ClientRotor
              key={client.name}
              client={client}
              index={i}
              rowIndex={getRowIndex(i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-cream2/30 uppercase">
            +{ALL_CLIENTS.length} {t("clientsPage.counter")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

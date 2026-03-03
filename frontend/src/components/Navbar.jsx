import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EnigmaLogotype } from "./EnigmaLogo.jsx";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";
import { localePath, getEquivalentPath } from "../i18n/routes.js";

const NAV_KEYS = [
  { routeKey: "home", labelKey: "nav.home" },
  { routeKey: "services", labelKey: "nav.services" },
  { routeKey: "plans", labelKey: "nav.plans" },
  { routeKey: "clients", labelKey: "nav.clients" },
  { routeKey: "about", labelKey: "nav.about" },
  { routeKey: "contact", labelKey: "nav.contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, t, setLang } = useT();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherLang = lang === "es" ? "en" : "es";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-nav/95 backdrop-blur-lg border-b border-line shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-[1600px] mx-auto px-10 flex items-center justify-between lg:justify-between justify-center">
        <LocaleLink to="/" aria-label={t("nav.logoAria")}>
          <EnigmaLogotype variant="dark" />
        </LocaleLink>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_KEYS.map(({ routeKey, labelKey }) => {
            const to = localePath(routeKey, lang);
            const isActive = location.pathname === to;
            return (
              <LocaleLink
                key={routeKey}
                to={localePath(routeKey, "es")}
                className={`relative font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200
                  ${isActive ? "text-red" : "text-cream2 hover:text-red"}
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-red after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {t(labelKey)}
              </LocaleLink>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(otherLang)}
            className="font-mono text-xs uppercase tracking-[0.1em] text-cream2 hover:text-red transition-colors duration-200 flex items-center gap-1.5"
          >
            <span className={lang === "es" ? "text-red" : ""}>ES</span>
            <span className="text-line">/</span>
            <span className={lang === "en" ? "text-red" : ""}>EN</span>
          </button>
          <LocaleLink
            to="/contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-cream bg-red hover:bg-red2 transition-all duration-300"
          >
            {t("nav.cta")}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </LocaleLink>
        </div>
      </div>
    </nav>
  );
}

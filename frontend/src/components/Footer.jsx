import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";
import { EnigmaLogotype } from "./EnigmaLogo.jsx";

const SERVICE_ROUTES = [
  "/servicios#desarrollo-web",
  "/servicios#servidores-cloud",
  "/servicios#correo",
  "/servicios#ciberseguridad",
  "/servicios#automatizacion",
  "/servicios#agentes-ia",
  "/servicios#consultoria",
];

const COMPANY_ROUTES = ["/nosotros", "/clientes", "/planes", "/contacto"];

export default function Footer() {
  const { lang, t } = useT();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nav border-t border-line">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <LocaleLink to="/" className="inline-block">
              <EnigmaLogotype variant="dark" />
            </LocaleLink>
            <p className="mt-5 text-sm text-cream2 font-body leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/51959561015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon2 border border-line hover:border-red/30 text-cream2 hover:text-red flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a
                href="https://www.facebook.com/enigmadevsac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon2 border border-line hover:border-red/30 text-cream2 hover:text-red flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a
                href="https://instagram.com/enigmasac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon2 border border-line hover:border-red/30 text-cream2 hover:text-red flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a
                href="https://github.com/enigmasac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon2 border border-line hover:border-red/30 text-cream2 hover:text-red flex items-center justify-center transition-all duration-200"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.42em] text-red uppercase mb-5">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-3">
              {t("footer.services").map((label, i) => (
                <li key={i}>
                  <LocaleLink to={SERVICE_ROUTES[i]} className="font-body text-sm text-cream2 hover:text-red transition-colors duration-200">
                    {label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.42em] text-red uppercase mb-5">{t("footer.companyTitle")}</h4>
            <ul className="space-y-3">
              {t("footer.company").map((label, i) => (
                <li key={i}>
                  <LocaleLink to={COMPANY_ROUTES[i]} className="font-body text-sm text-cream2 hover:text-red transition-colors duration-200">
                    {label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.42em] text-red uppercase mb-5">{t("footer.contactTitle")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@enigmasac.com" className="flex items-center gap-3 font-body text-sm text-cream2 hover:text-red transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  hello@enigmasac.com
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-cream2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <div className="space-y-1">
                  <a href="tel:+51959561015" className="block hover:text-red transition-colors duration-200">{t("footer.phonePeru")}</a>
                  <a href="tel:+34656663992" className="block hover:text-red transition-colors duration-200">{t("footer.phoneSpain")}</a>
                </div>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-cream2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <div className="space-y-1">
                  <span className="block">{t("footer.locationPeru")}</span>
                  <span className="block">{t("footer.locationSpain")}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <LocaleLink to="/privacidad" className="font-body text-xs text-cream2 hover:text-cream transition-colors duration-200">
              {t("footer.privacy")}
            </LocaleLink>
            <LocaleLink to="/terminos" className="font-body text-xs text-cream2 hover:text-cream transition-colors duration-200">
              {t("footer.terms")}
            </LocaleLink>
            <LocaleLink to="/cookies" className="font-body text-xs text-cream2 hover:text-cream transition-colors duration-200">
              {t("footer.cookiePolicy")}
            </LocaleLink>
            {lang === "es" && (
              <LocaleLink to="/libro-reclamaciones" className="font-body text-xs text-cream2 hover:text-cream transition-colors duration-200">
                {t("footer.complaints")}
              </LocaleLink>
            )}
          </div>
          <p className="font-body text-xs text-cream2">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

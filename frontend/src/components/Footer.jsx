import { Link } from "react-router-dom";
import { EnigmaLogotype } from "./EnigmaLogo.jsx";

const FOOTER_LINKS = {
  servicios: [
    { label: "Desarrollo Web", to: "/servicios#desarrollo-web" },
    { label: "Servidores & Cloud", to: "/servicios#servidores-cloud" },
    { label: "Correo & Google Workspace", to: "/servicios#correo" },
    { label: "Ciberseguridad", to: "/servicios#ciberseguridad" },
    { label: "Automatización & APIs", to: "/servicios#automatizacion" },
    { label: "Agentes de IA", to: "/servicios#agentes-ia" },
    { label: "Consultoría 360°", to: "/servicios#consultoria" },
  ],
  empresa: [
    { label: "Nosotros", to: "/nosotros" },
    { label: "Planes", to: "/planes" },
    { label: "Contacto", to: "/contacto" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void border-t border-border">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <EnigmaLogotype variant="dark" />
            </Link>
            <p className="mt-5 text-sm text-muted font-body leading-relaxed max-w-xs">
              El área IT completa de tu empresa, sin los costos de tenerla interna. Desde Lima y Barcelona para toda Latinoamérica y España.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/51959561015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-surface border border-border hover:border-indigo/30 text-muted hover:text-indigo-light flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a
                href="https://www.facebook.com/enigmadevsac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-surface border border-border hover:border-indigo/30 text-muted hover:text-indigo-light flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a
                href="https://instagram.com/enigmasac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-surface border border-border hover:border-indigo/30 text-muted hover:text-indigo-light flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase mb-5">Servicios</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-muted hover:text-indigo-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase mb-5">Empresa</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-muted hover:text-indigo-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[0.65rem] tracking-[0.2em] text-indigo uppercase mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@enigmasac.com" className="flex items-center gap-3 font-body text-sm text-muted hover:text-indigo-light transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  hello@enigmasac.com
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <div className="space-y-1">
                  <span className="block">+51 959 561 015 (Perú)</span>
                  <span className="block">+34 656 663 992 (España)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <div className="space-y-1">
                  <span className="block">Lima, Perú</span>
                  <span className="block">Barcelona, España</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-6">
            <Link to="/privacidad" className="font-body text-xs text-muted hover:text-text transition-colors duration-200">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="font-body text-xs text-muted hover:text-text transition-colors duration-200">
              Términos de servicio
            </Link>
            <Link to="/cookies" className="font-body text-xs text-muted hover:text-text transition-colors duration-200">
              Política de cookies
            </Link>
            <Link to="/libro-reclamaciones" className="font-body text-xs text-muted hover:text-text transition-colors duration-200">
              Libro de reclamaciones
            </Link>
          </div>
          <p className="font-body text-xs text-muted">
            &copy; {currentYear} Enigma Developers S.A.C. &middot; RUC 20605632875 &middot; Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

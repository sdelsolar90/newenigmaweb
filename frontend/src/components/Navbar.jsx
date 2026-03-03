import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { EnigmaLogotype } from "./EnigmaLogo.jsx";

const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/planes", label: "Planes" },
  { to: "/clientes", label: "Clientes" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-nav/95 backdrop-blur-lg border-b border-line shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-[1600px] mx-auto px-10 flex items-center justify-between lg:justify-between justify-center">
        <Link to="/" aria-label="Enigma Developers - Inicio">
          <EnigmaLogotype variant="dark" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200
                  ${isActive ? "text-red" : "text-cream2 hover:text-red"}
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-red after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-cream bg-red hover:bg-red2 transition-all duration-300"
          >
            Hablemos
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

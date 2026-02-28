import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "enigma-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  function handleChoice(value) {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border shadow-lg shadow-void/60"
        >
          <div className="max-w-5xl mx-auto px-6 pr-24 sm:pr-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-body text-sm text-muted leading-relaxed flex-1">
              Utilizamos cookies esenciales y de analítica para mejorar tu experiencia.
              Consulta nuestra{" "}
              <Link to="/cookies" className="text-indigo-light hover:text-indigo-soft transition-colors underline underline-offset-2">
                política de cookies
              </Link>{" "}
              para más información.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleChoice("rejected")}
                className="font-body text-sm text-muted hover:text-text border border-border hover:border-indigo/30 px-4 py-2 transition-all duration-200 cursor-pointer"
              >
                Rechazar
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="font-body text-sm text-off-white bg-indigo hover:bg-indigo-deep px-4 py-2 transition-all duration-200 cursor-pointer"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

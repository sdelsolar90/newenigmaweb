import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageContext.jsx";
import LocaleLink from "../i18n/LocaleLink.jsx";

const STORAGE_KEY = "enigma-cookie-consent";

export default function CookieConsent() {
  const { t } = useT();
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
          className="fixed bottom-0 left-0 right-0 z-[60] bg-carbon2 border-t border-line shadow-lg shadow-carbon/60"
        >
          <div className="max-w-5xl mx-auto px-6 pr-24 sm:pr-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-body text-sm text-cream2 leading-relaxed flex-1">
              {t("cookieConsent.message")}{" "}
              {t("cookieConsent.learnMore")}{" "}
              <LocaleLink to="/cookies" className="text-red hover:text-cream transition-colors underline underline-offset-2">
                {t("cookieConsent.policyLink")}
              </LocaleLink>{" "}
              {t("cookieConsent.moreInfo")}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleChoice("rejected")}
                className="font-body text-sm text-cream2 hover:text-cream border border-line hover:border-red/30 px-4 py-2 transition-all duration-200 cursor-pointer"
              >
                {t("cookieConsent.reject")}
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="font-body text-sm text-cream bg-red hover:bg-red2 px-4 py-2 transition-all duration-200 cursor-pointer"
              >
                {t("cookieConsent.accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

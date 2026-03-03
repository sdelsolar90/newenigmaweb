import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, getEquivalentPath } from "./routes.js";
import es from "./locales/es.json";
import en from "./locales/en.json";

const translations = { es, en };

function resolveDotPath(obj, key) {
  return key.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) return acc[part];
    return undefined;
  }, obj);
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const langFromPath = getLangFromPath(location.pathname);
  const [lang, setLangState] = useState(langFromPath);

  useEffect(() => {
    const detected = getLangFromPath(location.pathname);
    if (detected !== lang) {
      setLangState(detected);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const saved = localStorage.getItem("enigma-lang");
    if (saved === "en") {
      navigate("/en", { replace: true });
    }
  }, []);

  function t(key) {
    const value = resolveDotPath(translations[lang], key);
    return value !== undefined ? value : key;
  }

  function setLang(targetLang) {
    if (targetLang === lang) return;
    localStorage.setItem("enigma-lang", targetLang);
    const currentFull = location.pathname + (location.hash || "");
    const equivalent = getEquivalentPath(currentFull, targetLang);
    setLangState(targetLang);
    document.documentElement.lang = targetLang;
    navigate(equivalent);
  }

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useT must be used within a LanguageProvider");
  return context;
}

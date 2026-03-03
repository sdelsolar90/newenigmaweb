import { useEffect, useState } from "react";
import { useT } from "../i18n/LanguageContext.jsx";
import Hero from "../components/Hero.jsx";
import Partners from "../components/Partners.jsx";
import Problem from "../components/Problem.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Services from "../components/Services.jsx";

import Clients from "../components/Clients.jsx";
import CTAFinal from "../components/CTAFinal.jsx";
import { EnigmaIsotipo } from "../components/EnigmaLogo.jsx";

function ScrollRotor() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setRotation(progress * 720);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-40 opacity-30 pointer-events-none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <EnigmaIsotipo size={28} variant="dark" />
    </div>
  );
}

export default function Home() {
  const { lang, t } = useT();
  const canonical = lang === "es" ? "https://enigmasac.com" : "https://enigmasac.com/en";

  return (
    <>
      <title>{t("meta.home.title")}</title>
      <meta name="description" content={t("meta.home.description")} />
      <meta property="og:title" content={t("meta.home.ogTitle")} />
      <meta property="og:description" content={t("meta.home.ogDescription")} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      <link rel="canonical" href={canonical} />
      <ScrollRotor />
      <Hero />
      <Partners />
      <Problem />
      <HowItWorks />
      <Services />
      <Clients />
      <CTAFinal />
    </>
  );
}

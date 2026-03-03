import { useEffect, useState } from "react";
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
  return (
    <>
      <title>Enigma Developers | Tu área IT sin costos internos</title>
      <meta name="description" content="El área IT completa de tu empresa, sin los costos de tenerla interna. Desarrollo web, servidores, ciberseguridad, automatización e inteligencia artificial para PYMEs." />
      <meta property="og:title" content="Enigma Developers | Tu área IT sin costos internos" />
      <meta property="og:description" content="Soluciones tecnológicas integrales para PYMEs. Desarrollo web, cloud, ciberseguridad, automatización e inteligencia artificial." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://enigmasac.com" />
      <link rel="canonical" href="https://enigmasac.com" />
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

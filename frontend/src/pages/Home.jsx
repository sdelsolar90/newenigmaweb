import { useEffect, useState, lazy, Suspense } from "react";
import { useT } from "../i18n/LanguageContext.jsx";
import Hero from "../components/Hero.jsx";
import { EnigmaIsotipo } from "../components/EnigmaLogo.jsx";

const Partners = lazy(() => import("../components/Partners.jsx"));
const Problem = lazy(() => import("../components/Problem.jsx"));
const HowItWorks = lazy(() => import("../components/HowItWorks.jsx"));
const Services = lazy(() => import("../components/Services.jsx"));
const Clients = lazy(() => import("../components/Clients.jsx"));
const CTAFinal = lazy(() => import("../components/CTAFinal.jsx"));

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Enigma Developers",
          url: canonical,
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", bestRating: "5", ratingCount: "20" },
          review: t("caseStudies.items").map((item) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: item.name },
            reviewBody: item.quote,
          })),
        }) }}
      />
      <ScrollRotor />
      <Hero />
      <Suspense fallback={null}>
        <Partners />
        <Problem />
        <HowItWorks />
        <Services />
        <Clients />
        <CTAFinal />
      </Suspense>
    </>
  );
}

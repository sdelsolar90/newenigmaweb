import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { LanguageProvider, useT } from "./i18n/LanguageContext.jsx";
import { ROUTE_MAP } from "./i18n/routes.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppBubble from "./components/WhatsAppBubble.jsx";
import CookieConsent from "./components/CookieConsent.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
import Home from "./pages/Home.jsx";

const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));
const PlansPage = lazy(() => import("./pages/PlansPage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.jsx"));
const ClientsPage = lazy(() => import("./pages/ClientsPage.jsx"));
const ComplaintBook = lazy(() => import("./pages/ComplaintBook.jsx"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-line border-t-red rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const BASE = "https://enigmasac.com";

const JSONLD_ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enigma Developers",
  legalName: "Enigma Developers S.A.C.",
  url: "https://enigmasac.com",
  logo: "https://enigmasac.com/brand/enigma-logotype-dark.svg",
  image: "https://enigmasac.com/og-image.png",
  description: "Soluciones tecnológicas integrales para PYMEs. Desarrollo web, cloud, ciberseguridad, automatización e inteligencia artificial.",
  foundingDate: "2020",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+51-959-561-015",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
      areaServed: ["PE", "ES"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+34-656-663-992",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
      areaServed: ["ES"],
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  ],
  sameAs: [
    "https://www.facebook.com/enigmadevsac",
    "https://instagram.com/enigmasac",
  ],
  email: "hello@enigmasac.com",
};

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_ORG) }}
    />
  );
}

function OgImage() {
  return (
    <>
      <meta property="og:image" content="https://enigmasac.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://enigmasac.com/og-image.png" />
    </>
  );
}

function HreflangTags() {
  const { pathname } = useLocation();
  const { lang } = useT();

  const pathWithoutHash = pathname.split("#")[0];
  const esRoutes = ROUTE_MAP.es;
  const enRoutes = ROUTE_MAP.en;

  const routeKey = Object.keys(lang === "en" ? enRoutes : esRoutes).find(
    (k) => (lang === "en" ? enRoutes : esRoutes)[k] === pathWithoutHash
  );

  if (!routeKey) return null;

  const esPath = esRoutes[routeKey];
  const enPath = enRoutes[routeKey];

  if (!esPath || !enPath) {
    return (
      <link rel="alternate" hrefLang="es" href={`${BASE}${esPath || pathname}`} />
    );
  }

  return (
    <>
      <link rel="alternate" hrefLang="es" href={`${BASE}${esPath}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE}${enPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE}${esPath}`} />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/planes" element={<PlansPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/terminos" element={<TermsOfService />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/libro-reclamaciones" element={<ComplaintBook />} />

      <Route path="/en" element={<Home />} />
      <Route path="/en/services" element={<ServicesPage />} />
      <Route path="/en/plans" element={<PlansPage />} />
      <Route path="/en/clients" element={<ClientsPage />} />
      <Route path="/en/about" element={<About />} />
      <Route path="/en/contact" element={<Contact />} />
      <Route path="/en/privacy" element={<PrivacyPolicy />} />
      <Route path="/en/terms" element={<TermsOfService />} />
      <Route path="/en/cookies" element={<CookiePolicy />} />
    </Routes>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <HreflangTags />
        <OgImage />
        <StructuredData />
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <AppRoutes />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppBubble />
        <MobileBottomNav />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

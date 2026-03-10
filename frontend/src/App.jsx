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

const JSONLD_GRAPH = [
  {
    "@type": "Organization",
    "@id": "https://enigmasac.com/#organization",
    name: "Enigma Developers",
    legalName: "Enigma Developers S.A.C.",
    url: "https://enigmasac.com",
    logo: {
      "@type": "ImageObject",
      url: "https://enigmasac.com/favicon.svg",
      width: 64,
      height: 64,
    },
    image: "https://enigmasac.com/og-image.png",
    description: "Soluciones tecnológicas integrales para PYMEs. Desarrollo web, cloud, ciberseguridad, automatización e inteligencia artificial.",
    foundingDate: "2019",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    knowsLanguage: ["es", "en"],
    slogan: "Tu área IT sin costos internos",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+51-959-561-015",
        contactType: "sales",
        availableLanguage: ["Spanish", "English"],
        areaServed: ["PE", "BO", "EC", "CO", "CL", "MX"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+34-656-663-992",
        contactType: "sales",
        availableLanguage: ["Spanish", "English"],
        areaServed: ["ES", "PT"],
      },
    ],
    address: [
      { "@type": "PostalAddress", addressLocality: "Lima", addressRegion: "Lima", addressCountry: "PE" },
      { "@type": "PostalAddress", addressLocality: "Barcelona", addressRegion: "Cataluña", addressCountry: "ES" },
    ],
    sameAs: [
      "https://www.facebook.com/enigmadevsac",
      "https://instagram.com/enigmasac",
      "https://github.com/enigmasac",
    ],
    email: "hello@enigmasac.com",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "WordPress, WooCommerce, and custom web applications" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Servers & Cloud", description: "AWS, cPanel, CloudPanel, and Linux administration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Email", description: "Business Gmail, Drive, Calendar implementation and migration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity", description: "Audits, firewalls, vulnerability analysis, and continuous protection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automation", description: "CRM, ERP, webhooks, Zapier, Make, and n8n integrations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agents", description: "Custom chatbots and agents trained with your business data" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "360° IT Consulting", description: "Comprehensive assessment, strategy design, and execution support" } },
      ],
    },
  },
  {
    "@type": "LocalBusiness",
    "@id": "https://enigmasac.com/#lima",
    name: "Enigma Developers - Lima",
    parentOrganization: { "@id": "https://enigmasac.com/#organization" },
    url: "https://enigmasac.com",
    telephone: "+51-959-561-015",
    email: "hello@enigmasac.com",
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressRegion: "Lima", addressCountry: "PE" },
    geo: { "@type": "GeoCoordinates", latitude: -12.0464, longitude: -77.0428 },
    areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: -12.0464, longitude: -77.0428 }, geoRadius: "5000km" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    priceRange: "$$",
  },
  {
    "@type": "LocalBusiness",
    "@id": "https://enigmasac.com/#barcelona",
    name: "Enigma Developers - Barcelona",
    parentOrganization: { "@id": "https://enigmasac.com/#organization" },
    url: "https://enigmasac.com",
    telephone: "+34-656-663-992",
    email: "hello@enigmasac.com",
    address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressRegion: "Cataluña", addressCountry: "ES" },
    geo: { "@type": "GeoCoordinates", latitude: 41.3874, longitude: 2.1686 },
    areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 41.3874, longitude: 2.1686 }, geoRadius: "2000km" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    priceRange: "$$",
  },
  {
    "@type": "WebSite",
    "@id": "https://enigmasac.com/#website",
    url: "https://enigmasac.com",
    name: "Enigma Developers",
    publisher: { "@id": "https://enigmasac.com/#organization" },
    inLanguage: ["es", "en"],
  },
];

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": JSONLD_GRAPH }) }}
    />
  );
}

function BreadcrumbSchema() {
  const { pathname } = useLocation();
  const { lang, t } = useT();

  const pathWithoutHash = pathname.split("#")[0];
  const routes = ROUTE_MAP[lang];
  const routeKey = Object.keys(routes).find((k) => routes[k] === pathWithoutHash);

  if (!routeKey || routeKey === "home") return null;

  const labelMap = {
    services: "nav.services",
    plans: "nav.plans",
    clients: "nav.clients",
    about: "nav.about",
    contact: "nav.contact",
    privacy: "footer.privacy",
    terms: "footer.terms",
    cookies: "footer.cookiePolicy",
    complaints: "footer.complaints",
  };

  const label = t(labelMap[routeKey] || routeKey);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Enigma Developers", item: `${BASE}${lang === "en" ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: label, item: `${BASE}${pathWithoutHash}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
        <BreadcrumbSchema />
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

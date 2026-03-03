import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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
  const { pathname } = window.location;
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
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
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppBubble />
      <MobileBottomNav />
      <CookieConsent />
    </div>
  );
}

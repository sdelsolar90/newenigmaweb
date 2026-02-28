import Hero from "../components/Hero.jsx";
import Partners from "../components/Partners.jsx";
import Problem from "../components/Problem.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Services from "../components/Services.jsx";
import Plans from "../components/Plans.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import CTAFinal from "../components/CTAFinal.jsx";

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
      <Hero />
      <Partners />
      <Problem />
      <HowItWorks />
      <Services />
      <Plans />
      <CaseStudies />
      <CTAFinal />
    </>
  );
}

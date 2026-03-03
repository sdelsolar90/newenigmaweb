import { motion } from "motion/react";

const LAST_UPDATED = "28 de febrero de 2026";

export default function CookiePolicy() {
  return (
    <>
      <title>Política de Cookies | Enigma Developers</title>
      <meta name="description" content="Política de cookies de Enigma Developers S.A.C. Conoce qué cookies utilizamos, su finalidad y cómo gestionarlas." />
      <link rel="canonical" href="https://enigmasac.com/cookies" />

      <section className="pt-32 pb-16 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-red2/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl tracking-tight text-cream leading-tight"
          >
            Política de Cookies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-sm text-cream2 font-body"
          >
            Última actualización: {LAST_UPDATED}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-carbon2 border border-line p-8 sm:p-12 space-y-10 font-body text-sm text-cream2 leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">1. ¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tablet o teléfono móvil) cuando los visitas. Se utilizan para recordar tus preferencias, mejorar tu experiencia de navegación y, en algunos casos, recopilar información estadística sobre el uso del sitio.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">2. Responsable del uso de cookies</h2>
              <ul className="space-y-2">
                <li><span className="text-cream">Razón social:</span> Enigma Developers S.A.C.</li>
                <li><span className="text-cream">RUC:</span> 20605632875</li>
                <li><span className="text-cream">Domicilio fiscal:</span> Lima, Perú</li>
                <li><span className="text-cream">Correo electrónico:</span> hello@enigmasac.com</li>
                <li><span className="text-cream">Sitio web:</span> https://enigmasac.com</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">3. Tipos de cookies que utilizamos</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-base font-semibold text-cream mb-2">Cookies esenciales</h3>
                  <p className="mb-3">Son necesarias para el funcionamiento básico del sitio web y no pueden desactivarse. Incluyen:</p>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Cookies de sesión para mantener la navegación activa</li>
                    <li>Cookies de consentimiento para recordar tu elección sobre el uso de cookies</li>
                    <li>Cookies de seguridad para proteger contra accesos no autorizados</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-base font-semibold text-cream mb-2">Cookies de analítica</h3>
                  <p className="mb-3">Nos permiten medir y analizar el comportamiento de los usuarios en nuestro sitio web para mejorar nuestros servicios. Incluyen:</p>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Número de visitantes y páginas más consultadas</li>
                    <li>Tiempo de permanencia en cada página</li>
                    <li>Origen del tráfico (motor de búsqueda, enlace directo, red social)</li>
                    <li>Dispositivo y navegador utilizado</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">4. Finalidad de las cookies</h2>
              <p className="mb-3">Las cookies que utilizamos tienen las siguientes finalidades:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Garantizar el correcto funcionamiento del sitio web</li>
                <li>Recordar las preferencias y elecciones del usuario</li>
                <li>Recopilar información estadística anónima sobre el uso del sitio</li>
                <li>Mejorar la experiencia de navegación y la calidad de nuestros contenidos</li>
                <li>Analizar el rendimiento y la eficacia de nuestras páginas</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">5. Duración de las cookies</h2>
              <p className="mb-3">Según su duración, las cookies que utilizamos se clasifican en:</p>
              <ul className="space-y-3 list-disc list-inside">
                <li><span className="text-cream">Cookies de sesión:</span> se eliminan automáticamente al cerrar el navegador.</li>
                <li><span className="text-cream">Cookies persistentes:</span> permanecen en tu dispositivo durante un período determinado o hasta que las elimines manualmente. Las cookies de consentimiento se conservan durante 12 meses. Las cookies de analítica pueden conservarse hasta 24 meses.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">6. Gestión de cookies desde el navegador</h2>
              <p className="mb-3">Puedes configurar tu navegador para bloquear, eliminar o recibir avisos sobre las cookies. A continuación, te indicamos cómo hacerlo en los navegadores más utilizados:</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-red hover:text-red transition-colors">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-red hover:text-red transition-colors">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-red hover:text-red transition-colors">Safari</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-red hover:text-red transition-colors">Microsoft Edge</a>
                </li>
              </ul>
              <p className="mt-3">Ten en cuenta que la desactivación de cookies puede afectar el funcionamiento de algunas funciones del sitio web.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">7. Modificaciones</h2>
              <p>Enigma Developers S.A.C. se reserva el derecho de modificar esta política de cookies en cualquier momento. Las actualizaciones se publicarán en esta misma página con la fecha de última actualización.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">8. Contacto</h2>
              <p>Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:</p>
              <ul className="mt-3 space-y-2">
                <li><span className="text-cream">Email:</span> <a href="mailto:hello@enigmasac.com" className="text-red hover:text-red transition-colors">hello@enigmasac.com</a></li>
                <li><span className="text-cream">Teléfono (Perú):</span> +51 959 561 015</li>
                <li><span className="text-cream">Teléfono (España):</span> +34 656 663 992</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

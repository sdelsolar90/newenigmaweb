import { motion } from "motion/react";

const LAST_UPDATED = "28 de febrero de 2026";

export default function PrivacyPolicy() {
  return (
    <>
      <title>Política de Privacidad | Enigma Developers</title>
      <meta name="description" content="Política de privacidad de Enigma Developers S.A.C. Conoce cómo recopilamos, usamos y protegemos tus datos personales." />
      <link rel="canonical" href="https://enigmasac.com/privacidad" />

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
            Política de Privacidad
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
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">1. Responsable del tratamiento</h2>
              <ul className="space-y-2">
                <li><span className="text-cream">Razón social:</span> Enigma Developers S.A.C.</li>
                <li><span className="text-cream">RUC:</span> 20605632875</li>
                <li><span className="text-cream">Domicilio fiscal:</span> Lima, Perú</li>
                <li><span className="text-cream">Correo electrónico:</span> hello@enigmasac.com</li>
                <li><span className="text-cream">Sitio web:</span> https://enigmasac.com</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">2. Datos que recopilamos</h2>
              <p className="mb-3">Recopilamos los datos personales que nos proporcionas voluntariamente a través de nuestros formularios de contacto y diagnóstico:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de la empresa</li>
                <li>Mensaje o descripción de necesidades</li>
              </ul>
              <p className="mt-3">Adicionalmente, nuestro sitio web puede recopilar de forma automática datos de navegación como dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">3. Finalidad del tratamiento</h2>
              <p className="mb-3">Los datos recopilados se utilizan exclusivamente para:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Responder a consultas y solicitudes de contacto</li>
                <li>Gestionar solicitudes de diagnóstico digital gratuito</li>
                <li>Enviar propuestas comerciales relacionadas con nuestros servicios</li>
                <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
                <li>Cumplir con obligaciones legales aplicables</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">4. Base legal</h2>
              <p>El tratamiento de tus datos se realiza con base en tu consentimiento expreso al completar nuestros formularios, así como en el interés legítimo de Enigma Developers S.A.C. para gestionar las relaciones comerciales. En el caso de clientes, la base legal incluye la ejecución del contrato de servicios.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">5. Conservación de datos</h2>
              <p>Los datos personales se conservarán mientras exista una relación comercial o durante el tiempo necesario para cumplir las finalidades indicadas. Una vez finalizada la relación, los datos se conservarán durante los plazos legales establecidos por la normativa peruana y/o europea aplicable.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">6. Compartición de datos</h2>
              <p className="mb-3">No vendemos, alquilamos ni compartimos tus datos personales con terceros, salvo en los siguientes casos:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Proveedores de servicios tecnológicos necesarios para la operación (hosting, correo electrónico, analítica web)</li>
                <li>Cumplimiento de obligaciones legales o requerimientos de autoridades competentes</li>
                <li>Con tu consentimiento previo y expreso</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">7. Seguridad</h2>
              <p>Implementamos medidas técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Esto incluye el uso de conexiones cifradas (SSL/TLS), control de accesos y políticas internas de seguridad de la información.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">8. Derechos del titular</h2>
              <p className="mb-3">De acuerdo con la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) y el Reglamento General de Protección de Datos (RGPD) de la Unión Europea, tienes derecho a:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la supresión de tus datos</li>
                <li>Oponerte al tratamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Revocar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-3">Para ejercer estos derechos, envía un correo a <a href="mailto:hello@enigmasac.com" className="text-red hover:text-red transition-colors">hello@enigmasac.com</a> indicando tu solicitud y datos de identificación.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">9. Cookies</h2>
              <p>Este sitio web puede utilizar cookies propias y de terceros para mejorar la experiencia de navegación y recopilar estadísticas de uso. Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">10. Modificaciones</h2>
              <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta misma página con la fecha de última actualización.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-cream mb-4">11. Contacto</h2>
              <p>Si tienes preguntas sobre esta política de privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos en:</p>
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

import { motion } from "motion/react";

const LAST_UPDATED = "28 de febrero de 2026";

export default function TermsOfService() {
  return (
    <>
      <title>Términos de Servicio | Enigma Developers</title>
      <meta name="description" content="Términos y condiciones de uso de los servicios de Enigma Developers S.A.C. Conoce las reglas que rigen nuestra relación comercial." />
      <link rel="canonical" href="https://enigmasac.com/terminos" />

      <section className="pt-32 pb-16 bg-void relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-deep/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl font-[800] tracking-tight text-off-white leading-tight"
          >
            Términos de Servicio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-sm text-muted font-body"
          >
            Última actualización: {LAST_UPDATED}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-void">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surface border border-border p-8 sm:p-12 space-y-10 font-body text-sm text-muted leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">1. Identificación</h2>
              <ul className="space-y-2">
                <li><span className="text-text">Razón social:</span> Enigma Developers S.A.C.</li>
                <li><span className="text-text">RUC:</span> 20605632875</li>
                <li><span className="text-text">Domicilio fiscal:</span> Lima, Perú</li>
                <li><span className="text-text">Correo electrónico:</span> hello@enigmasac.com</li>
                <li><span className="text-text">Sitio web:</span> https://enigmasac.com</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">2. Objeto</h2>
              <p>Los presentes términos regulan el uso del sitio web enigmasac.com y la contratación de los servicios ofrecidos por Enigma Developers S.A.C., incluyendo desarrollo web, administración de servidores y cloud, correo corporativo, ciberseguridad, automatización, agentes de inteligencia artificial y consultoría tecnológica.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">3. Aceptación</h2>
              <p>El acceso y uso de este sitio web, así como la contratación de cualquiera de nuestros servicios, implica la aceptación plena de estos términos y condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar este sitio ni contratar nuestros servicios.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">4. Servicios</h2>
              <p className="mb-3">Enigma Developers S.A.C. ofrece servicios tecnológicos que pueden contratarse de forma individual o mediante planes de suscripción mensual. Los servicios incluyen, entre otros:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Diseño y desarrollo de sitios web y aplicaciones</li>
                <li>Administración de servidores e infraestructura cloud</li>
                <li>Implementación y gestión de correo corporativo (Google Workspace)</li>
                <li>Auditorías y protección de ciberseguridad</li>
                <li>Automatización de procesos e integración de APIs</li>
                <li>Desarrollo de agentes de inteligencia artificial personalizados</li>
                <li>Consultoría tecnológica integral</li>
              </ul>
              <p className="mt-3">El alcance específico de cada servicio se detalla en la propuesta comercial o acuerdo de servicio correspondiente.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">5. Precios y pagos</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Los precios de nuestros servicios son personalizados según las necesidades de cada cliente y se comunican de forma clara en la propuesta comercial.</li>
                <li>Los planes de suscripción se facturan mensualmente. El pago debe realizarse dentro de los primeros 5 días del ciclo de facturación.</li>
                <li>Aceptamos transferencias bancarias, pagos con tarjeta y otros medios según la ubicación del cliente.</li>
                <li>Los precios no incluyen impuestos, salvo que se indique expresamente.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">6. Duración y cancelación</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Los planes de suscripción son mensuales y pueden cancelarse en cualquier momento sin penalización.</li>
                <li>La cancelación debe comunicarse con al menos 10 días de anticipación al siguiente ciclo de facturación.</li>
                <li>Los servicios contratados de forma individual se rigen por los plazos establecidos en el acuerdo correspondiente.</li>
                <li>En caso de cancelación, el cliente mantiene acceso a su web, datos, servidores, correo y cualquier desarrollo realizado.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">7. Propiedad intelectual</h2>
              <p className="mb-3">La propiedad intelectual se rige por las siguientes reglas:</p>
              <ul className="space-y-3 list-disc list-inside">
                <li>El código fuente, diseños y desarrollos realizados para el cliente son propiedad del cliente una vez completado el pago correspondiente.</li>
                <li>La marca, logotipo, diseño y contenido del sitio web enigmasac.com son propiedad exclusiva de Enigma Developers S.A.C.</li>
                <li>Las herramientas, frameworks y componentes reutilizables desarrollados por Enigma Developers S.A.C. de forma genérica pueden ser utilizados en otros proyectos.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">8. Obligaciones del cliente</h2>
              <p className="mb-3">El cliente se compromete a:</p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Facilitar los accesos y credenciales necesarios para la prestación de los servicios</li>
                <li>Realizar los pagos en los plazos acordados</li>
                <li>No utilizar los servicios contratados para actividades ilícitas</li>
                <li>Respetar la propiedad intelectual de terceros</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">9. Limitación de responsabilidad</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Enigma Developers S.A.C. no se hace responsable de interrupciones en los servicios causadas por terceros, fuerza mayor o circunstancias fuera de su control.</li>
                <li>La responsabilidad máxima de Enigma Developers S.A.C. se limita al monto total pagado por el cliente en los últimos 3 meses por los servicios afectados.</li>
                <li>No nos hacemos responsables del contenido publicado por el cliente en su sitio web o plataformas.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">10. Confidencialidad</h2>
              <p>Ambas partes se comprometen a mantener la confidencialidad de la información sensible compartida durante la relación comercial. Esta obligación se mantiene vigente incluso después de la finalización de los servicios.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">11. Modificaciones</h2>
              <p>Enigma Developers S.A.C. se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones se publicarán en esta página y, en caso de cambios significativos, se notificará a los clientes activos por correo electrónico.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">12. Legislación aplicable</h2>
              <p>Estos términos se rigen por las leyes de la República del Perú. Para clientes ubicados en la Unión Europea, se aplicarán adicionalmente las disposiciones de protección al consumidor del país de residencia del cliente. Cualquier controversia se resolverá ante los tribunales competentes de Lima, Perú, salvo acuerdo distinto entre las partes.</p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-off-white mb-4">13. Contacto</h2>
              <p>Para consultas sobre estos términos de servicio, puedes contactarnos en:</p>
              <ul className="mt-3 space-y-2">
                <li><span className="text-text">Email:</span> <a href="mailto:hello@enigmasac.com" className="text-indigo-light hover:text-indigo-soft transition-colors">hello@enigmasac.com</a></li>
                <li><span className="text-text">Teléfono (Perú):</span> +51 959 561 015</li>
                <li><span className="text-text">Teléfono (España):</span> +34 656 663 992</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

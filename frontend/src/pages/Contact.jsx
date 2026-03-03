import { useState } from "react";
import { motion } from "motion/react";

const API_URL = import.meta.env.VITE_API_URL || "/api";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  type: "contact",
};

function InputField({ label, name, type = "text", required = false, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-medium text-cream mb-1.5">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-line bg-carbon3 font-body text-sm text-cream placeholder:text-cream2/50 focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-all duration-200"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const endpoint = form.type === "diagnosis" ? "/leads" : "/contact";
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <title>Contacto | Enigma Developers</title>
      <meta name="description" content="Contacta con Enigma Developers. Agenda tu diagnóstico digital gratuito o envíanos tu consulta. Respondemos en menos de 24 horas." />
      <meta property="og:title" content="Contacto | Enigma Developers" />
      <meta property="og:description" content="Agenda un diagnóstico gratuito o envíanos tu consulta. Lima, Perú y Barcelona, España." />
      <link rel="canonical" href="https://enigmasac.com/contacto" />

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
            className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight text-cream leading-tight"
          >
            Hablemos de{" "}
            <em className="italic text-red">tu proyecto</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Cuéntanos qué necesitas. Respondemos en menos de 24 horas.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="bg-carbon2 border border-line p-8"
              >
                <div className="flex gap-2 mb-8 p-1 bg-carbon3 border border-line">
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: "contact" }))}
                    className={`flex-1 py-2.5 font-body text-sm font-medium transition-all duration-200 ${
                      form.type === "contact"
                        ? "bg-red text-cream"
                        : "text-cream2 hover:text-cream"
                    }`}
                  >
                    Contacto general
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: "diagnosis" }))}
                    className={`flex-1 py-2.5 font-body text-sm font-medium transition-all duration-200 ${
                      form.type === "diagnosis"
                        ? "bg-red text-cream"
                        : "text-cream2 hover:text-cream"
                    }`}
                  >
                    Diagnóstico gratuito
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Nombre" name="name" required value={form.name} onChange={handleChange} />
                  <InputField label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
                  <InputField label="Teléfono" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                  <InputField label="Empresa" name="company" value={form.company} onChange={handleChange} />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block font-body text-sm font-medium text-cream mb-1.5">
                    {form.type === "diagnosis" ? "Cuéntanos sobre tu empresa y qué necesitas" : "Mensaje"}{" "}
                    <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-line bg-carbon3 font-body text-sm text-cream placeholder:text-cream2/50 focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 py-4 font-mono text-xs uppercase tracking-[0.25em] text-cream bg-red hover:bg-red2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : form.type === "diagnosis" ? (
                    "Solicitar diagnóstico gratuito"
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>

                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-body text-center"
                  >
                    {form.type === "diagnosis"
                      ? "Recibimos tu solicitud. Te contactaremos en menos de 24 horas para agendar tu diagnóstico."
                      : "Mensaje enviado correctamente. Te responderemos en menos de 24 horas."}
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-body text-center"
                  >
                    Hubo un error al enviar. Intenta de nuevo o contáctanos directamente por WhatsApp.
                  </motion.div>
                )}
              </motion.form>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="space-y-6"
              >
                <div className="p-6 bg-carbon2 border border-line">
                  <h3 className="font-heading text-lg text-cream mb-4">Escríbenos directamente</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/51959561015?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20Enigma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-carbon3 border border-line hover:border-red/20 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      </div>
                      <div>
                        <span className="block font-body text-sm font-semibold text-cream group-hover:text-red transition-colors">WhatsApp</span>
                        <span className="block font-body text-xs text-cream2">Respuesta inmediata</span>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@enigmasac.com"
                      className="flex items-center gap-4 p-4 bg-carbon3 border border-line hover:border-red/20 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-red/10 border border-red/20 text-red flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      </div>
                      <div>
                        <span className="block font-body text-sm font-semibold text-cream group-hover:text-red transition-colors">Email</span>
                        <span className="block font-body text-xs text-cream2">hello@enigmasac.com</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-carbon2 border border-line">
                  <h3 className="font-heading text-lg text-cream mb-4">Teléfonos</h3>
                  <div className="space-y-3">
                    <a href="tel:+51959561015" className="flex items-center gap-3 font-body text-sm text-cream2 hover:text-red transition-colors">
                      <span className="px-2 py-0.5 bg-red/10 border border-red/20 text-xs font-mono text-red">PE</span>
                      +51 959 561 015
                    </a>
                    <a href="tel:+34656663992" className="flex items-center gap-3 font-body text-sm text-cream2 hover:text-red transition-colors">
                      <span className="px-2 py-0.5 bg-red/10 border border-red/20 text-xs font-mono text-red">ES</span>
                      +34 656 663 992
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-carbon3 border border-line">
                  <h3 className="font-heading text-lg text-cream mb-2">¿Prefieres que te llamemos?</h3>
                  <p className="font-body text-sm text-cream2 leading-relaxed">
                    Déjanos tus datos en el formulario y selecciona "Diagnóstico gratuito". Te contactamos nosotros en menos de 24 horas.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

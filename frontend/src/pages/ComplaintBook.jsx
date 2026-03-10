import { useState } from "react";
import { motion } from "motion/react";

import { executeRecaptcha } from "../utils/loadRecaptcha.js";

const API_URL = import.meta.env.VITE_API_URL || "/api";

const INITIAL_FORM = {
  name: "",
  documentType: "DNI",
  documentNumber: "",
  address: "",
  phone: "",
  email: "",
  isMinor: false,
  guardianName: "",
  type: "reclamo",
  serviceDescription: "",
  amountClaimed: "",
  detail: "",
  consumerRequest: "",
};

function InputField({ label, name, type = "text", required = false, value, onChange, ...props }) {
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
        {...props}
      />
    </div>
  );
}

function SelectField({ label, name, required = false, value, onChange, children }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-medium text-cream mb-1.5">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-line bg-carbon3 font-body text-sm text-cream focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-all duration-200"
      >
        {children}
      </select>
    </div>
  );
}

function TextAreaField({ label, name, required = false, value, onChange, rows = 4 }) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-sm font-medium text-cream mb-1.5">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-line bg-carbon3 font-body text-sm text-cream placeholder:text-cream2/50 focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-all duration-200 resize-none"
      />
    </div>
  );
}

export default function ComplaintBook() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [complaintId, setComplaintId] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const recaptchaToken = await executeRecaptcha("SUBMIT");
      const payload = {
        ...form,
        amountClaimed: form.amountClaimed ? Number(form.amountClaimed) : null,
        recaptchaToken,
      };

      const res = await fetch(`${API_URL}/complaints`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al enviar");

      const data = await res.json();
      setComplaintId(data.id);
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  const typeLabel = form.type === "reclamo" ? "reclamo" : "queja";

  return (
    <>
      <title>Libro de Reclamaciones | Enigma Developers</title>
      <meta name="description" content="Libro de Reclamaciones virtual de Enigma Developers S.A.C. conforme a la Ley N° 29571 y el D.S. N° 011-2011-PCM." />
      <meta property="og:title" content="Libro de Reclamaciones | Enigma Developers" />
      <meta property="og:description" content="Registra tu reclamo o queja. Enigma Developers S.A.C., RUC 20605632875." />
      <link rel="canonical" href="https://enigmasac.com/libro-reclamaciones" />

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
            Libro de{" "}
            <span className="bg-gradient-to-r from-red to-red bg-clip-text text-transparent">
              Reclamaciones
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-cream2 font-body max-w-2xl mx-auto leading-relaxed"
          >
            Conforme al Artículo 150° de la Ley N° 29571, Código de Protección y Defensa del Consumidor.
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
                <h2 className="font-heading text-lg font-semibold text-cream mb-6">Datos del consumidor</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <InputField label="Nombre completo" name="name" required value={form.name} onChange={handleChange} />
                  </div>
                  <SelectField label="Tipo de documento" name="documentType" required value={form.documentType} onChange={handleChange}>
                    <option value="DNI">DNI</option>
                    <option value="CE">Carné de extranjería</option>
                    <option value="PASSPORT">Pasaporte</option>
                  </SelectField>
                  <InputField label="Número de documento" name="documentNumber" required value={form.documentNumber} onChange={handleChange} />
                  <div className="sm:col-span-2">
                    <InputField label="Domicilio" name="address" required value={form.address} onChange={handleChange} />
                  </div>
                  <InputField label="Teléfono" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
                  <InputField label="Email" name="email" type="email" required value={form.email} onChange={handleChange} />
                </div>

                <div className="mt-5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isMinor"
                      checked={form.isMinor}
                      onChange={handleChange}
                      className="w-4 h-4 border-line bg-carbon3 text-red focus:ring-red/30 accent-red"
                    />
                    <span className="font-body text-sm text-cream">Soy menor de edad</span>
                  </label>
                </div>

                {form.isMinor && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4"
                  >
                    <InputField label="Nombre del padre, madre o tutor" name="guardianName" required value={form.guardianName} onChange={handleChange} />
                  </motion.div>
                )}

                <hr className="my-8 border-line" />

                <h2 className="font-heading text-lg font-semibold text-cream mb-4">Tipo de registro</h2>
                <div className="flex gap-2 mb-8 p-1 bg-carbon3 border border-line">
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: "reclamo" }))}
                    className={`flex-1 py-2.5 font-body text-sm font-medium transition-all duration-200 ${
                      form.type === "reclamo"
                        ? "bg-red text-cream"
                        : "text-cream2 hover:text-cream"
                    }`}
                  >
                    Reclamo
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: "queja" }))}
                    className={`flex-1 py-2.5 font-body text-sm font-medium transition-all duration-200 ${
                      form.type === "queja"
                        ? "bg-red text-cream"
                        : "text-cream2 hover:text-cream"
                    }`}
                  >
                    Queja
                  </button>
                </div>

                <p className="font-body text-xs text-cream2 mb-6">
                  {form.type === "reclamo"
                    ? "Reclamo: disconformidad relacionada con los productos o servicios."
                    : "Queja: disconformidad con la atención recibida, no relacionada con el producto o servicio."}
                </p>

                <h2 className="font-heading text-lg font-semibold text-cream mb-6">Detalle del bien o servicio contratado</h2>

                <div className="space-y-5">
                  <TextAreaField label="Descripción del producto o servicio" name="serviceDescription" required value={form.serviceDescription} onChange={handleChange} />
                  <InputField label="Monto reclamado (S/)" name="amountClaimed" type="number" value={form.amountClaimed} onChange={handleChange} min="0" step="0.01" />
                </div>

                <hr className="my-8 border-line" />

                <h2 className="font-heading text-lg font-semibold text-cream mb-6">
                  Detalle del {typeLabel}
                </h2>

                <div className="space-y-5">
                  <TextAreaField label={`Descripción del ${typeLabel}`} name="detail" required value={form.detail} onChange={handleChange} />
                  <TextAreaField label="Pedido del consumidor (resolución esperada)" name="consumerRequest" required value={form.consumerRequest} onChange={handleChange} />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-sm font-body text-base font-semibold text-cream bg-red hover:bg-red2 hover:shadow-lg hover:shadow-red/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    `Registrar ${typeLabel}`
                  )}
                </button>

                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-body text-center"
                  >
                    <p className="font-semibold">Registro enviado correctamente.</p>
                    <p className="mt-1">
                      Tu número de {typeLabel} es <strong>#{complaintId}</strong>. Recibirás una confirmación por email.
                      El plazo máximo de respuesta es de 30 días calendario.
                    </p>
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

                <p className="mt-4 text-[10px] text-cream2/50 font-body leading-relaxed">
                  Este sitio está protegido por reCAPTCHA y aplican la{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidad</a> y los{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Términos de Servicio</a> de Google.
                </p>
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
                  <h3 className="font-heading text-lg font-semibold text-cream mb-4">Datos del proveedor</h3>
                  <ul className="space-y-3 font-body text-sm text-cream2">
                    <li><strong className="text-cream">Razón social:</strong> Enigma Developers S.A.C.</li>
                    <li><strong className="text-cream">RUC:</strong> 20605632875</li>
                    <li><strong className="text-cream">Domicilio:</strong> Lima, Perú</li>
                    <li><strong className="text-cream">Email:</strong> hello@enigmasac.com</li>
                    <li><strong className="text-cream">Web:</strong> enigmasac.com</li>
                  </ul>
                </div>

                <div className="p-6 bg-carbon2 border border-line">
                  <h3 className="font-heading text-lg font-semibold text-cream mb-4">Plazo de respuesta</h3>
                  <p className="font-body text-sm text-cream2 leading-relaxed">
                    De acuerdo con el Artículo 24° del D.S. N° 011-2011-PCM, el proveedor dará respuesta al reclamo o queja en un plazo máximo de <strong className="text-cream">30 días calendario</strong>, contados desde la fecha de registro.
                  </p>
                </div>

                <div className="p-6 bg-carbon3 border border-line">
                  <h3 className="font-heading text-lg font-semibold text-cream mb-4">Reclamo vs. Queja</h3>
                  <div className="space-y-4 font-body text-sm text-cream2 leading-relaxed">
                    <div>
                      <strong className="text-cream">Reclamo:</strong> Disconformidad relacionada con los productos o servicios adquiridos o contratados con el proveedor.
                    </div>
                    <div>
                      <strong className="text-cream">Queja:</strong> Disconformidad no relacionada con el producto o servicio, sino con la atención al público por parte del proveedor.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { z } from "zod";
import { prisma } from "../db.js";
import { sendEmail } from "../mail.js";

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(200).optional().default(""),
  message: z.string().min(10).max(5000),
});

export async function submitLead(req, res) {
  const result = leadSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Datos inválidos",
      details: result.error.flatten().fieldErrors,
    });
  }

  const { name, email, phone, company, message } = result.data;

  try {
    const lead = await prisma.lead.create({
      data: { name, email, phone, company, message, source: "diagnosis" },
    });

    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: `Nueva solicitud de diagnóstico: ${name} — ${company || "Sin empresa"}`,
      html: `
        <h2>Nueva solicitud de diagnóstico gratuito</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Empresa:</strong> ${company || "No proporcionada"}</p>
        <hr />
        <p><strong>Descripción:</strong></p>
        <p>${message}</p>
      `,
    });

    await sendEmail({
      to: email,
      subject: "Tu diagnóstico gratuito está en camino — Enigma Developers",
      html: `
        <h2>Hola ${name},</h2>
        <p>Recibimos tu solicitud de diagnóstico gratuito. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas para agendar la sesión.</p>
        <p><strong>¿Qué incluye el diagnóstico?</strong></p>
        <ul>
          <li>Análisis de tu web, servidores y correo</li>
          <li>Evaluación de seguridad básica</li>
          <li>Identificación de oportunidades de mejora</li>
          <li>Propuesta personalizada sin compromiso</li>
        </ul>
        <p>Si necesitas una respuesta más rápida:</p>
        <p><a href="https://wa.me/51959561015">WhatsApp: +51 959 561 015</a></p>
        <br />
        <p>Saludos,<br />Equipo Enigma Developers</p>
      `,
    });

    res.status(201).json({ message: "Solicitud de diagnóstico recibida", id: lead.id });
  } catch (error) {
    console.error("Error en lead:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
}

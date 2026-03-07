import { z } from "zod";
import { prisma } from "../db.js";
import { sendEmail } from "../mail.js";
import { confirmationEmail } from "../emailTemplate.js";

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(6).max(30),
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
      html: confirmationEmail({ name, message, id: lead.id }),
    });

    res.status(201).json({ message: "Solicitud de diagnóstico recibida", id: lead.id });
  } catch (error) {
    console.error("Error en lead:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
}

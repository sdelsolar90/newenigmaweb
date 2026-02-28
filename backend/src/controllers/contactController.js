import { z } from "zod";
import { prisma } from "../db.js";
import { sendEmail } from "../mail.js";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(200).optional().default(""),
  message: z.string().min(10).max(5000),
});

export async function submitContact(req, res) {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Datos inválidos",
      details: result.error.flatten().fieldErrors,
    });
  }

  const { name, email, phone, company, message } = result.data;

  try {
    const contact = await prisma.contact.create({
      data: { name, email, phone, company, message },
    });

    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Empresa:</strong> ${company || "No proporcionada"}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    await sendEmail({
      to: email,
      subject: "Recibimos tu mensaje — Enigma Developers",
      html: `
        <h2>Hola ${name},</h2>
        <p>Recibimos tu mensaje correctamente. Nuestro equipo te responderá en menos de 24 horas.</p>
        <p>Si necesitas una respuesta más rápida, puedes escribirnos por WhatsApp:</p>
        <p><a href="https://wa.me/51959561015">+51 959 561 015</a></p>
        <br />
        <p>Saludos,<br />Equipo Enigma Developers</p>
      `,
    });

    res.status(201).json({ message: "Mensaje enviado correctamente", id: contact.id });
  } catch (error) {
    console.error("Error en contacto:", error);
    res.status(500).json({ error: "Error al procesar el mensaje" });
  }
}

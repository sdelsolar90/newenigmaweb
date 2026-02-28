import { z } from "zod";
import { prisma } from "../db.js";
import { sendEmail } from "../mail.js";

const complaintSchema = z.object({
  name: z.string().min(2).max(200),
  documentType: z.enum(["DNI", "CE", "PASSPORT"]),
  documentNumber: z.string().min(4).max(30),
  address: z.string().min(5).max(500),
  phone: z.string().min(6).max(30),
  email: z.string().email().max(200),
  isMinor: z.boolean().default(false),
  guardianName: z.string().max(200).optional().default(""),
  type: z.enum(["reclamo", "queja"]),
  serviceDescription: z.string().min(10).max(5000),
  amountClaimed: z.number().positive().optional().nullable(),
  detail: z.string().min(10).max(5000),
  consumerRequest: z.string().min(10).max(5000),
});

export async function submitComplaint(req, res) {
  const result = complaintSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Datos inválidos",
      details: result.error.flatten().fieldErrors,
    });
  }

  const data = result.data;

  try {
    const complaint = await prisma.complaint.create({
      data: {
        name: data.name,
        documentType: data.documentType,
        documentNumber: data.documentNumber,
        address: data.address,
        phone: data.phone,
        email: data.email,
        isMinor: data.isMinor,
        guardianName: data.guardianName,
        type: data.type,
        serviceDescription: data.serviceDescription,
        amountClaimed: data.amountClaimed ?? undefined,
        detail: data.detail,
        consumerRequest: data.consumerRequest,
      },
    });

    const typeLabel = data.type === "reclamo" ? "Reclamo" : "Queja";

    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: `Libro de Reclamaciones — ${typeLabel} #${complaint.id}: ${data.name}`,
      html: `
        <h2>Nuevo ${typeLabel} — #${complaint.id}</h2>
        <h3>Datos del consumidor</h3>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Documento:</strong> ${data.documentType} ${data.documentNumber}</p>
        <p><strong>Domicilio:</strong> ${data.address}</p>
        <p><strong>Teléfono:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.isMinor ? `<p><strong>Menor de edad — Apoderado:</strong> ${data.guardianName}</p>` : ""}
        <hr />
        <h3>Detalle del bien o servicio</h3>
        <p>${data.serviceDescription}</p>
        ${data.amountClaimed ? `<p><strong>Monto reclamado:</strong> S/ ${data.amountClaimed}</p>` : ""}
        <hr />
        <h3>Detalle del ${typeLabel.toLowerCase()}</h3>
        <p>${data.detail}</p>
        <h3>Pedido del consumidor</h3>
        <p>${data.consumerRequest}</p>
      `,
    });

    await sendEmail({
      to: data.email,
      subject: `Confirmación de ${typeLabel} #${complaint.id} — Enigma Developers`,
      html: `
        <h2>Hola ${data.name},</h2>
        <p>Hemos registrado tu ${typeLabel.toLowerCase()} con el número <strong>#${complaint.id}</strong>.</p>
        <p>De acuerdo con el Código de Protección y Defensa del Consumidor (Ley N° 29571), daremos respuesta a tu ${typeLabel.toLowerCase()} en un plazo máximo de <strong>30 días calendario</strong>.</p>
        <br />
        <p><strong>Proveedor:</strong> Enigma Developers S.A.C.</p>
        <p><strong>RUC:</strong> 20605632875</p>
        <br />
        <p>Saludos,<br />Equipo Enigma Developers</p>
      `,
    });

    res.status(201).json({ message: "Registro enviado correctamente", id: complaint.id });
  } catch (error) {
    console.error("Error en libro de reclamaciones:", error);
    res.status(500).json({ error: "Error al procesar el registro" });
  }
}

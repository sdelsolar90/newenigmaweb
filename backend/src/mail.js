import nodemailer from "nodemailer";

const port = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  ...(process.env.SMTP_PASS
    ? { auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } }
    : { auth: false, tls: { rejectUnauthorized: false } }),
});

export async function sendEmail({ to, subject, html }) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Error al enviar email:", error);
  }
}

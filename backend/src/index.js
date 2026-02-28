import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { prisma } from "./db.js";
import contactRoutes from "./routes/contact.js";
import leadsRoutes from "./routes/leads.js";
import complaintsRoutes from "./routes/complaints.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost",
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10kb" }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Demasiadas solicitudes, intenta de nuevo más tarde." },
});

app.use("/api", apiLimiter);

app.use("/api/contact", contactRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/api/complaints", complaintsRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

async function start() {
  try {
    await prisma.$connect();
    console.log("Conectado a PostgreSQL");

    app.listen(PORT, () => {
      console.log(`Backend corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

start();

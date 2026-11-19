
import express from "express";
import cors from "cors";
import "dotenv/config";
import { Resend } from "resend";
import { rateLimit } from "express-rate-limit";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json({ limit: "20kb" }));

const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "Cisne Digital" });
});

app.post("/api/contact", limit, async (req, res) => {
  const { nombre, correo, negocio, mensaje } = req.body ?? {};

  if (
    ![nombre, correo, negocio, mensaje].every(
      value => typeof value === "string" &&
      value.trim().length > 0
    ) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) ||
    nombre.length > 100 ||
    correo.length > 254 ||
    negocio.length > 120 ||
    mensaje.length > 3000
  ) {
    return res.status(400).json({
      error: "Revisa los datos del formulario."
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: correo,
      subject: "Nueva cotización - Cisne Digital",
      text: [
        `Nombre: ${nombre}`,
        `Correo: ${correo}`,
        `Negocio: ${negocio}`,
        "",
        `Mensaje:\n${mensaje}`
      ].join("\n")
    });

    if (error) throw error;

    res.json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({
      error: "No se pudo enviar la solicitud."
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API iniciada en puerto ${PORT}`);
});

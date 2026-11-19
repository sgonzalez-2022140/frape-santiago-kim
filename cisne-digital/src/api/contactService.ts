
import { apiRequest } from "./apiClient";

import type {
  ContactFormData,
  ContactRequest,
  ContactResponse,
} from "../types/contact";

export const contactService = {
  async sendContact(
    form: ContactFormData
  ): Promise<ContactResponse> {

    const payload: ContactRequest = {
      nombre: form.nombre.trim(),
      correo: form.correo.trim(),
      negocio: form.negocio.trim(),

      mensaje: [
        `Servicio solicitado: ${form.servicio || "No especificado"}`,
        "",
        "Descripción del proyecto:",
        form.mensaje.trim(),
      ].join("\n"),
    };

    return apiRequest<ContactResponse>("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};


import { useState } from "react";

import { contactService } from "../api/contactService";
import type { ContactFormData } from "../types/contact";

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendContact = async (
    form: ContactFormData
  ): Promise<boolean> => {
    if (loading) return false;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await contactService.sendContact(form);

      if (!response.success) {
        throw new Error(
          response.error || "No se pudo enviar la solicitud."
        );
      }

      setSuccess(true);
      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error inesperado."
      );

      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setSuccess(false);
    setError("");
  };

  return {
    loading,
    success,
    error,
    sendContact,
    resetStatus,
  };
}

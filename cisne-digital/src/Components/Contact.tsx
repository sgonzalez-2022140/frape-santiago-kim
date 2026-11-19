
import { useState, type FormEvent } from "react";
import { useContact } from "../hook/useContact";
import {
  Mail,
  UserRound,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

import "../Components/styles/Contact.css";

type ContactProps = {
  selectedPlan?: string;
};

type ContactForm = {
  nombre: string;
  correo: string;
  negocio: string;
  servicio: string;
  mensaje: string;
};

const initialForm: ContactForm = {
  nombre: "",
  correo: "",
  negocio: "",
  servicio: "",
  mensaje: "",
};

export default function Contact({
  selectedPlan = "",
}: ContactProps) {
  const [form, setForm] = useState<ContactForm>({
    ...initialForm,
    servicio: selectedPlan,
  });

 const {
  loading,
  success,
  error,
  sendContact,
} = useContact();


  const updateField = (
    field: keyof ContactForm,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  
const handleSubmit = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const enviado = await sendContact(form);

  if (enviado) {
    setForm({
      ...initialForm,
      servicio: selectedPlan,
    });
  }
};


  return (
    <section id="contacto" className="cisne-contact">
      <div className="cisne-contact-container">

        <div className="cisne-contact-info">
          <span className="cisne-contact-eyebrow">
            HABLEMOS DE TU PROYECTO
          </span>

          <h2>
            Hagamos realidad
            <span> tu próxima gran idea.</span>
          </h2>

          <p>
            Cuéntanos sobre tu negocio y lo que necesitas.
            Te ayudaremos a encontrar una solución digital
            que se adapte a tus objetivos.
          </p>

          <div className="cisne-contact-benefits">
            <div>
              <CheckCircle2 size={19} />
              <span>Atención personalizada</span>
            </div>
            <div>
              <CheckCircle2 size={19} />
              <span>Propuesta según tu proyecto</span>
            </div>
            <div>
              <CheckCircle2 size={19} />
              <span>Diseños modernos y responsivos</span>
            </div>
          </div>

          <div className="cisne-contact-brand">
            <img src="/logo.png" alt="Logo Cisne Digital" />
            <div>
              <strong>Cisne Digital</strong>
              <span>Diseño web con propósito.</span>
            </div>
          </div>
        </div>

        <div className="cisne-contact-card">
          <div className="cisne-contact-card-header">
            <h3>Solicita tu cotización</h3>
            <p>Completa tus datos y nos pondremos en contacto.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="cisne-form-row">
              <div className="cisne-form-group">
                <label htmlFor="cisne-nombre">
                  <UserRound size={16} />
                  Tu nombre
                </label>

                <input
                  id="cisne-nombre"
                  type="text"
                  placeholder="Nombre completo"
                  autoComplete="name"
                  maxLength={100}
                  required
                  value={form.nombre}
                  onChange={(e) =>
                    updateField("nombre", e.target.value)
                  }
                />
              </div>

              <div className="cisne-form-group">
                <label htmlFor="cisne-correo">
                  <Mail size={16} />
                  Correo electrónico
                </label>

                <input
                  id="cisne-correo"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  value={form.correo}
                  onChange={(e) =>
                    updateField("correo", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="cisne-form-group">
              <label htmlFor="cisne-negocio">
                <Building2 size={16} />
                Nombre del negocio
              </label>

              <input
                id="cisne-negocio"
                type="text"
                placeholder="Ej. Cafetería El Cisne"
                maxLength={120}
                required
                value={form.negocio}
                onChange={(e) =>
                  updateField("negocio", e.target.value)
                }
              />
            </div>

            <div className="cisne-form-group">
              <label htmlFor="cisne-servicio">
                ¿Qué tipo de página necesitas?
              </label>

              <select
                id="cisne-servicio"
                value={form.servicio}
                onChange={(e) =>
                  updateField("servicio", e.target.value)
                }
              >
                <option value="">Selecciona un servicio</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Página empresarial">
                  Página empresarial
                </option>
                <option value="Catálogo digital">
                  Catálogo digital
                </option>
                <option value="Tienda en línea">
                  Tienda en línea
                </option>
                <option value="Sistema personalizado">
                  Sistema personalizado
                </option>
                <option value="Otro">Otro proyecto</option>
              </select>
            </div>

            <div className="cisne-form-group">
              <label htmlFor="cisne-mensaje">
                <MessageSquare size={16} />
                Cuéntanos tu idea
              </label>

              <textarea
                id="cisne-mensaje"
                rows={5}
                placeholder="Cuéntanos qué hace tu negocio y qué te gustaría tener en tu página web..."
                maxLength={2800}
                required
                value={form.mensaje}
                onChange={(e) =>
                  updateField("mensaje", e.target.value)
                }
              />
            </div>

            {success && (
              <div className="cisne-form-success" role="status">
                <CheckCircle2 size={19} />
                ¡Solicitud enviada! Nos pondremos en contacto contigo.
              </div>
            )}

            {error && (
              <div className="cisne-form-error" role="alert">
                <AlertCircle size={19} />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="cisne-contact-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={19} className="cisne-spin" />
                  Enviando solicitud...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar cotización
                </>
              )}
            </button>

            <p className="cisne-contact-privacy">
              Tus datos se utilizarán únicamente para
              responder a tu solicitud.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

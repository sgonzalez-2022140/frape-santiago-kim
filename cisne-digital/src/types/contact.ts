
export interface ContactFormData {
  nombre: string;
  correo: string;
  negocio: string;
  servicio: string;
  mensaje: string;
}

export interface ContactRequest {
  nombre: string;
  correo: string;
  negocio: string;
  mensaje: string;
}

export interface ContactResponse {
  success: boolean;
  error?: string;
}

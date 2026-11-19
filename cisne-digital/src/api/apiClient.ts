const API_URL = import.meta.env.VITE_API_URL;


export class ApiError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);

    this.name = "ApiError";
    this.status = status;
  }
}


export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!API_URL) {
    throw new ApiError(
      "No se configuró VITE_API_URL en el .env",
      0
    );
  }

  const baseURL = API_URL.replace(/\/+$/, "");
  const path = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  let response: Response;

  try {
    response = await fetch(`${baseURL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  } catch {
    throw new ApiError(
      "No se pudo conectar con el backend Express.",
      0
    );
  }

  const data: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    let message = "Error al procesar la solicitud.";

    if (
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof data.error === "string"
    ) {
      message = data.error;
    }

    throw new ApiError(message, response.status);
  }

  return data as T;
}

// lib/api.ts
export interface AuthResponse {
  token: string;
  // añade aquí más campos si tu backend los devuelve
}

/**
 * Envía una petición POST con JSON y devuelve los datos tipados.
 * @param path Ruta relativa al API.
 * @param body Cuerpo de la petición, como objeto.
 */
export async function postJSON<T>(
  path: string,
  body: unknown
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error ?? "Error en la petición");
  }
  return res.json();
}

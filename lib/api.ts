// lib/api.ts
export interface AuthResponse {
  token: string;
  // añade aquí más campos si tu backend los devuelve
}

export async function postJSON<T>(
  path: string,
  body: any
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`, // aquí armamos la URL completa
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Error en la petición");
  }
  return res.json();
}

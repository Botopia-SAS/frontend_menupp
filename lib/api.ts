// lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Hace una petición cualquiera (GET, POST, PUT, DELETE…), 
 * añade headers + JSON body y comprueba errores.
 */
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  // Recupera el token (si existe) desde localStorage
  let token: string | null = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

  // Construye los headers por defecto
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) ?? {}),
  };

  // Si hay token, lo añadimos
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  // Si no es 2xx, extrae el error y lo lanza
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as any).error || res.statusText);
  }

  // Por defecto parsea JSON
  return res.json();
}

/**
 * POST con JSON
 * @param path Ruta relativa (ej: '/auth/login')
 * @param body Objeto a serializar como JSON
 */
export function postJSON<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/**
 * GET (o cualquier petición sin body)
 * @param path Ruta relativa (ej: '/profile')
 */
export function getJSON<T>(path: string): Promise<T> {
  return request<T>(path, { method: 'GET' });
}

export interface AuthResponse {
  token: string;
  // …otros campos que devuelva tu /auth/login o /auth/register
}

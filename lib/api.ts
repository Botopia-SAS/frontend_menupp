// lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

interface ApiError { error?: string; }

/**
 * Hace un fetch y lanza un Error si status >= 400.
 * Incluye siempre las cookies (HttpOnly token).
 */
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: 'include',              // ← aquí permitimos cookies
    headers: {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) ?? {}),
    },
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as ApiError;
    throw new Error(body.error ?? res.statusText);
  }

  return res.json();
}

/** POST JSON helper */
export function postJSON<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/** GET JSON helper */
export function getJSON<T>(path: string): Promise<T> {
  return request<T>(path, {
    method: 'GET',
  });
}
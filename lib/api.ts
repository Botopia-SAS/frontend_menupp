import { supabase } from './supabaseClient';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface ApiError { error?: string }

/**
 * Hace un fetch y lanza un Error si status >= 400.
 * Incluye siempre las cookies (HttpOnly token) y el Bearer token de Supabase.
 */
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  // 1️⃣ Recupera la sesión de Supabase
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log('[API] Supabase session:', session);

  const token = session?.access_token;
  console.log('[API] Using token:', token);

  // 2️⃣ Construye los headers, inyectando Authorization si hay token
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...((options.headers as Record<string, string>) ?? {}),
  };

  const url = `${API_BASE}${path}`;
  console.log('[API] Fetching:', url, 'Options:', { ...options, headers });

  // 3️⃣ Lanza la petición con cookies y headers correctos
  const res = await fetch(url, {
    ...options,
    credentials: 'include',
    headers,
  });

  console.log('[API] Response status:', res.status);
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as ApiError;
    console.error('[API] Error body:', body);
    throw new Error(body.error ?? res.statusText);
  }

  const json = await res.json();
  console.log('[API] Response JSON:', json);
  return json;
}

/** POST JSON helper */
export function postJSON<T>(path: string, body: unknown): Promise<T> {
  return request<T>(`/api/settings${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/** GET JSON helper */
export function getJSON<T>(path: string): Promise<T> {
  return request<T>(`/api/settings${path}`, {
    method: 'GET',
  });
}

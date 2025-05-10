import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1>Bienvenido {session?.user?.email}</h1>
      <form action="/logout" method="post">
        <button type="submit" className="ml-4 underline">
          Cerrar sesión
        </button>
      </form>
    </main>
  );
}

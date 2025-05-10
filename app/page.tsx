import { redirect } from "next/navigation";
import LoginForm from "@/components/Auth/LoginForm";
import { supabase } from "@/lib/supabase"; // O `createClient()` si usas una factory

export default async function HomePage() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}

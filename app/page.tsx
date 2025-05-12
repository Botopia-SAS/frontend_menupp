"use client";

import { useRouter } from "next/navigation";
import LoginForm from "@/components/Auth/LoginForm";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}

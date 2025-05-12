"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/Auth/LoginForm";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </main>
  );
}

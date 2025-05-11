"use client";
import { useState } from "react";
import { postJSON, AuthResponse } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await postJSON<AuthResponse>("/auth/login", { email, password });
      // Guarda el token y redirige
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#111827] flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <h1 className="text-5xl font-bold text-[#EF4444] text-center mb-2">
          menüpp
        </h1>
        <p className="text-white text-center mb-8 font-semibold">
          Ingresa a tu cuenta
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Input Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-[#9CA3AF] outline-none"
            />
            {!email && (
              <>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#EF4444]">
                  <AlertCircle size={20} />
                </div>
                <p className="text-[#EF4444] text-sm mt-1">
                  Este campo es requerido
                </p>
              </>
            )}
          </div>

          {/* Input Contraseña */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-[#9CA3AF] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Mensaje de error */}
          {error && <p className="text-[#EF4444] text-sm">{error}</p>}

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#818CF8] text-white font-semibold hover:opacity-90 transition"
          >
            Iniciar sesión
          </button>

          {/* Link registro */}
          <p className="text-white text-center text-sm">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="underline hover:text-[#EF4444]">
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

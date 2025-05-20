'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterForm() {
  const [restaurante, setRestaurante] = useState('')
  const [telefono, setTelefono]       = useState('')
  const [email, setEmail]             = useState('')
  const [password, setPassword]       = useState('')
  const [showPass, setShowPass]       = useState(false)
  const [error, setError]             = useState<string | null>(null)
  const [success, setSuccess]         = useState(false)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name: restaurante, phone: telefono },
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
      setTimeout(() => router.push('/login'), 1500)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#1c0049] flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <h1 className="text-5xl font-bold text-[#9759c0] text-center mb-2">
          menüpp
        </h1>
        <p className="text-[#460770] text-center mb-8 font-semibold">
          Crea tu cuenta
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            placeholder="Nombre del restaurante"
            value={restaurante}
            onChange={e => setRestaurante(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-[#9CA3AF] outline-none"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-[#9CA3AF] outline-none"
          />

          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-[#9CA3AF] outline-none"
          />

          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
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

          {error && <p className="text-[#EF4444] text-sm">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm">
              Cuenta creada. Revisa tu correo para confirmar y redirigiendo...
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#818CF8] text-white font-semibold hover:opacity-90 transition"
          >
            Crear cuenta
          </button>

          <p className="text-[#460770] text-center text-sm">
            ¿Ya tienes cuenta?{' '}
            <a href="/login" className="underline hover:text-[#EF4444]">
              Inicia sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

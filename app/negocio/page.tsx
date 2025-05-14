'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getJSON, postJSON } from '@/lib/api'
import DatosBasicos from './components/DatosBasicos'
import RedesSociales from './components/RedesSociales'
import Encuestas from './components/Encuestas'

export default function MarcaPage() {
  const router = useRouter()

  // 1) Estados para cada bloque
  const [datos, setDatos] = useState({
    name: '',
    logo_url: '',
    country_code: '',
    currency_code: '',
    timezone: '',
    language: '',
  })
  const [redes, setRedes] = useState({
    instagram: '',
    facebook: '',
    website: '',
    youtube: '',
    tiktok: '',
  })
  const [encuestas, setEncuestas] = useState({
    general_url: '',
    orders_url: '',
    reservations_url: '',
  })
  const [loading, setLoading] = useState(true)

  // 2) Al montar, traemos los datos existentes
  useEffect(() => {
    Promise.all([
      getJSON<{ settings: typeof datos }>('/settings/brand'),
      getJSON<{ settings: typeof redes }>('/settings/social'),
      getJSON<{ settings: typeof encuestas }>('/settings/surveys'),
    ])
      .then(([r1, r2, r3]) => {
        if (r1.settings) setDatos(r1.settings)
        if (r2.settings) setRedes(r2.settings)
        if (r3.settings) setEncuestas(r3.settings)
      })
      .catch(() => {
        // si no hay filas aún, lo ignoramos
      })
      .finally(() => setLoading(false))
  }, [])

  // 3) Guardar todo cuando presionen el botón
  const handleSave = async () => {
    await Promise.all([
      postJSON('/settings/brand', datos),
      postJSON('/settings/social', redes),
      postJSON('/settings/surveys', encuestas),
    ])
    // opcional: notificar o refrescar
    router.refresh()
  }

  if (loading) {
    return <p className="pt-6">Cargando configuración…</p>
  }

  return (
    <div className="pt-6">
      <h1 className="text-2xl font-bold mb-6">Tu marca</h1>

      {/* Contenedor alineado a la izquierda */}
      <div className="w-full max-w-2xl pl-0 space-y-6">
        {/* 4) Pasamos data y setter a cada componente */}
        <DatosBasicos
          data={datos}
          onChange={(newState) => setDatos((prev) => ({ ...prev, ...newState }))}
        />
        <RedesSociales
          data={redes}
          onChange={(newState) => setRedes((prev) => ({ ...prev, ...newState }))}
        />
        <Encuestas
          data={encuestas}
          onChange={(newState) =>
            setEncuestas((prev) => ({ ...prev, ...newState }))
          }
        />

        <button
          onClick={handleSave}
          className="w-full bg-[#98a8f8] hover:bg-[#7f8dee] text-white font-semibold py-3 rounded-full shadow-md transition"
        >
          GUARDAR
        </button>
      </div>
    </div>
  )
}

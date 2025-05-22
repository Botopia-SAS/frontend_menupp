'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getJSON, postJSON } from '@/lib/api'
import { DatosBasicos } from '../components'
import { RedesSociales } from '../components'
import { Encuestas} from '../components'

type Brand  = { name: string; logo_url: string; country_code: string; currency_code: string; timezone: string; language: string }
type Social = { instagram: string; facebook: string; website: string; youtube: string; tiktok: string }
type Survey = { general_url: string; orders_url: string; reservations_url: string }

export default function MarcaPage() {
  const router = useRouter()

  // 1) Estados
  const [datos, setDatos]       = useState<Brand> ({ name:'', logo_url:'', country_code:'', currency_code:'', timezone:'', language:'' })
  const [redes, setRedes]       = useState<Social>({ instagram:'', facebook:'', website:'', youtube:'', tiktok:'' })
  const [encuestas, setEncuestas] = useState<Survey>({ general_url:'', orders_url:'', reservations_url:'' })
  const [loading, setLoading]   = useState(true)
  const [saving, setSaving]     = useState(false)

  // 2) GET al montar
  useEffect(() => {
    async function load() {
      try {
        const [marca, social, survey] = await Promise.all([
          getJSON<Brand>('/brand'),
          getJSON<Social>('/social'),
          getJSON<Survey>('/survey'),
        ])
        if (marca) setDatos(marca)
        if (social) setRedes(social)
        if (survey) setEncuestas(survey)
      } catch (e) {
        // si aún no existen filas salta aquí, lo ignoramos
        console.debug('No existen aún datos', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // 3) Guardar todo
  const handleSave = async () => {
    setSaving(true)
    try {
      await Promise.all([
        postJSON<Brand>('/brand', datos),
        postJSON<Social>('/social', redes),
        postJSON<Survey>('/survey', encuestas),
      ])
      // refresca el cache de Next.js (opcional)
      router.refresh()
      alert('¡Configuración guardada!')
    } catch (err: unknown) {
      console.error(err)
      const msg = err instanceof Error ? err.message : 'Error guardando'
      alert('Error guardando: ' + msg)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="pt-6">Cargando configuración…</p>

  return (
    <div className="pt-6 pb-16 md:pb-0 max-w-2xl ml-0 space-y-6">
      <h1 className="text-2xl font-bold">Tu marca</h1>

      <DatosBasicos
        data={datos}
        onChange={(upd) => setDatos(prev => ({ ...prev, ...upd }))}
      />

      <RedesSociales
        data={redes}
        onChange={(upd) => setRedes(prev => ({ ...prev, ...upd }))}
      />

      <Encuestas
        data={encuestas}
        onChange={(upd) => setEncuestas(prev => ({ ...prev, ...upd }))}
      />

      <button
        disabled={saving}
        onClick={handleSave}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded disabled:opacity-50"
      >
        {saving ? 'Guardando…' : 'Guardar cambios'}
      </button>
    </div>
  )
}

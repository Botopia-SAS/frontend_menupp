'use client'

import LogoUploader from './LogoUploader'

type Props = {
  data: {
    name: string
    logo_url: string
    country_code: string
    currency_code: string
    timezone: string
    language: string
  }
  onChange: (
    newState: Partial<{
      name: string
      logo_url: string
      country_code: string
      currency_code: string
      timezone: string
      language: string
    }>
  ) => void
}

export default function DatosBasicos({ data, onChange }: Props) {
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => onChange({ [e.target.name]: e.target.value })

  return (
    <div className="bg-[#fcfcfc] p-6 rounded-2xl shadow space-y-6 border border-[#fafafa]">
      <h2 className="text-lg font-semibold text-black">Datos básicos</h2>
      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Nombre
          </label>
          <input
            name="name"
            value={data.name}
            onChange={handle}
            type="text"
            placeholder="Ej. Pollería Irreverente"
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-black"
          />
        </div>

        {/* Logo */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Logo
          </label>
          <LogoUploader
            imageUrl={data.logo_url}
            onChange={url => onChange({ logo_url: url })}
          />
        </div>

        {/* País */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            País
          </label>
          <select
            name="country_code"
            value={data.country_code}
            onChange={handle}
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-black"
          >
            <option value="">Selecciona país</option>
            <option value="CO">🇨🇴 Colombia</option>
            <option value="MX">🇲🇽 México</option>
          </select>
        </div>

        {/* Moneda */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Moneda
          </label>
          <select
            name="currency_code"
            value={data.currency_code}
            onChange={handle}
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-black"
          >
            <option value="">Selecciona moneda</option>
            <option value="COP">COP - Peso colombiano ($)</option>
            <option value="MXN">MXN - Peso mexicano ($)</option>
          </select>
        </div>

        {/* Zona horaria */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Zona horaria
          </label>
          <select
            name="timezone"
            value={data.timezone}
            onChange={handle}
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-black"
          >
            <option value="">Selecciona zona</option>
            <option value="America/Bogota">America/Bogota</option>
            <option value="America/Mexico_City">America/Mexico_City</option>
          </select>
        </div>

        {/* Idioma */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Idioma
          </label>
          <select
            name="language"
            value={data.language}
            onChange={handle}
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-black"
          >
            <option value="">Selecciona idioma</option>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>
    </div>
  )
}

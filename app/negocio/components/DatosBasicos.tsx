export default function DatosBasicos() {
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
            type="text"
            placeholder="Ej. Pollería Irreverente"
            className="w-full border border-gray-400 rounded-md px-4 py-2 text-black"
          />
        </div>

        {/* Logo (placeholder por ahora) */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Logo
          </label>
          <div className="w-full h-[200px] bg-gray-200 rounded-md flex items-center justify-center text-sm text-gray-500">
            Vista previa del logo
          </div>
          <p className="text-xs text-black mt-1">
            Dimensiones recomendadas: 720x360px
          </p>
        </div>

        {/* País */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            País
          </label>
          <select className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-400">
            <option value="colombia">🇨🇴 Colombia</option>
            <option value="mexico">🇲🇽 México</option>
          </select>
        </div>

        {/* Moneda */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Moneda
          </label>
          <select className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-400">
            <option>COP - Peso colombiano ($)</option>
            <option>MXN - Peso mexicano ($)</option>
          </select>
        </div>

        {/* Zona horaria */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Zona horaria
          </label>
          <select className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-400">
            <option>America/Bogota</option>
            <option>America/Mexico_City</option>
          </select>
        </div>

        {/* Idioma */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Idioma
          </label>
          <select className="w-full border border-gray-400 rounded-md px-4 py-2 text-gray-400">
            <option>Español</option>
            <option>Inglés</option>
          </select>
        </div>
      </div>
    </div>
  );
}

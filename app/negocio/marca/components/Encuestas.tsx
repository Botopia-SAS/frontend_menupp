export default function Encuestas() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Encuestas de satisfacción</h2>

      <div>
        <label className="block text-sm font-medium">Encuesta general</label>
        <input
          type="url"
          placeholder="https://"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Encuesta para pedidos
        </label>
        <input
          type="url"
          placeholder="https://"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Encuesta para reservas
        </label>
        <input
          type="url"
          placeholder="https://"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
    </div>
  );
}

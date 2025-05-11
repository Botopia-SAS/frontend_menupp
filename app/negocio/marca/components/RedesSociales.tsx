export default function RedesSociales() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-lg font-semibold">Redes sociales</h2>

      <div>
        <label className="block text-sm font-medium">Instagram</label>
        <input
          type="text"
          placeholder="@"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Facebook</label>
        <input
          type="text"
          placeholder="@"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Website</label>
        <input
          type="url"
          placeholder="https://"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Youtube</label>
        <input
          type="url"
          placeholder="https://"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Tiktok</label>
        <input
          type="text"
          placeholder="@"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
    </div>
  );
}

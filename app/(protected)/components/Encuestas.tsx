'use client'

type Props = {
  data: {
    general_url: string
    orders_url: string
    reservations_url: string
  }
  onChange: (
    newState: Partial<{
      general_url: string
      orders_url: string
      reservations_url: string
    }>
  ) => void
}

export default function Encuestas({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ [e.target.name]: e.target.value })

  return (
    <div className="bg-[#fdfdfd] p-6 rounded-xl shadow-sm space-y-4 text-black">
      <h2 className="text-lg font-semibold">Encuestas de satisfacción</h2>

      <div>
        <label className="block text-sm font-medium">Encuesta general</label>
        <input
          name="general_url"
          value={data.general_url}
          onChange={handleChange}
          type="url"
          placeholder="https://"
          className="w-full border border-gray-400 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Encuesta para pedidos
        </label>
        <input
          name="orders_url"
          value={data.orders_url}
          onChange={handleChange}
          type="url"
          placeholder="https://"
          className="w-full border border-gray-400 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Encuesta para reservas
        </label>
        <input
          name="reservations_url"
          value={data.reservations_url}
          onChange={handleChange}
          type="url"
          placeholder="https://"
          className="w-full border border-gray-400 rounded-md px-4 py-2"
        />
      </div>
    </div>
  )
}

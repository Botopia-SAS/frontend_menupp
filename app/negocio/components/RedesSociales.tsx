'use client'

type Props = {
  data: {
    instagram: string
    facebook: string
    website: string
    youtube: string
    tiktok: string
  }
  onChange: (
    newState: Partial<{
      instagram: string
      facebook: string
      website: string
      youtube: string
      tiktok: string
    }>
  ) => void
}

export default function RedesSociales({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ [e.target.name]: e.target.value })

  const fields = [
    { name: 'instagram', label: 'Instagram', type: 'text', placeholder: '@' },
    { name: 'facebook', label: 'Facebook', type: 'text', placeholder: '@' },
    { name: 'website', label: 'Website', type: 'url', placeholder: 'https://' },
    { name: 'youtube', label: 'Youtube', type: 'url', placeholder: 'https://' },
    { name: 'tiktok', label: 'Tiktok', type: 'text', placeholder: '@' },
  ] as const

  return (
    <div className="bg-[#fdfdfd] p-6 rounded-xl shadow-sm space-y-4 text-black">
      <h2 className="text-lg font-semibold">Redes sociales</h2>
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium">
            {field.label}
          </label>
          <input
            name={field.name}
            value={data[field.name]}
            onChange={handleChange}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border border-gray-400 rounded-md px-4 py-2"
          />
        </div>
      ))}
    </div>
  )
}

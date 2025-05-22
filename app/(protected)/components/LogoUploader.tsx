// app/(protected)/components/LogoUploader.tsx
'use client'

// 1) Primero extendemos el tipo global de `window`
declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        options: {
          cloudName: string
          uploadPreset: string
          sources: Array<'local' | 'url'>
          multiple: boolean
          cropping: boolean
        },
        callback: (
          error: unknown,
          result: { event: string; info: { secure_url: string } }
        ) => void
      ) => { open: () => void }
    }
  }
}

import { useEffect } from 'react'
import { Eye, Edit3, Trash2 } from 'lucide-react'

type Props = {
  imageUrl: string
  onChange: (url: string) => void
  defaultImageUrl?: string
}

export default function LogoUploader({
  imageUrl,
  onChange,
  defaultImageUrl = '/images/placeholder-720x360.png',
}: Props) {
  useEffect(() => {
    if (!document.getElementById('cloudinary-widget')) {
      const s = document.createElement('script')
      s.src = 'https://widget.cloudinary.com/v2.0/global/all.js'
      s.id = 'cloudinary-widget'
      document.body.appendChild(s)
    }
  }, [])

  const openWidget = () => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!

    // 2) Ya no hace falta @ts-ignore
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset: preset,
        sources: ['local', 'url'],
        multiple: false,
        cropping: true,
      },
      // 3) Reemplazamos `any` por `unknown` y un tipo concreto para `result`
      (_error, result) => {
        if (result.event === 'success') {
          onChange(result.info.secure_url)
        }
      }
    )
    widget.open()
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-md">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75"
          style={{
            backgroundImage: `url(${imageUrl || defaultImageUrl})`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center space-x-4 z-10">
          {imageUrl && (
            <button
              onClick={() => window.open(imageUrl, '_blank')}
              className="p-3 bg-indigo-600 rounded-full text-white shadow-md hover:scale-105 transition-transform"
            >
              <Eye className="w-6 h-6" />
            </button>
          )}
          <button
            onClick={openWidget}
            className="p-3 bg-indigo-600 rounded-full text-white shadow-md hover:scale-105 transition-transform"
          >
            <Edit3 className="w-6 h-6" />
          </button>
          {imageUrl && (
            <button
              onClick={() => onChange('')}
              className="p-3 bg-indigo-600 rounded-full text-white shadow-md hover:scale-105 transition-transform"
            >
              <Trash2 className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-500 text-center">
        Dimensiones recomendadas: 720 × 360px
      </p>
    </div>
  )
}

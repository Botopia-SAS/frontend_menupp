// components/MarketingSection.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  HomeIcon,
  StarIcon,
  PlayIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from 'lucide-react'
import MobileMockup from '@/components/Menus/MobileMockup'

const regions = ['Marca', 'Bogotá']
const homepageAds = ['/ads/ad1.png', '/ads/ad2.png', '/ads/ad3.png']

export default function MarketingSection() {
  const [region, setRegion] = useState(regions[0])
  const [adIndex, setAdIndex] = useState(0)

  return (
    <div className="p-6 min-h-screen">
      {/* Selector de Región */}
      <div className="flex flex-wrap gap-2 mb-8">
        {regions.map(r => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`px-4 py-2 font-medium rounded-md transition ${
              region === r ? 'bg-black text-white' : 'bg-white text-gray-800'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Fila 1: Homepage + mockup (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start lg:-mb-60">
        {/* Homepage */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 border-transparent border-2 bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <HomeIcon size={20} />
              <h2 className="text-lg font-bold">Homepage</h2>
            </div>
            <button className="flex items-center space-x-1 text-black">
              <PlayIcon size={16} />
              <span>Previsualizando...</span>
            </button>
          </div>
          {/* horizontal scroll only on sm/md */}
          <div className="flex gap-4 pb-2 overflow-x-auto flex-nowrap lg:flex-wrap lg:overflow-visible">
            {homepageAds.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Anuncio ${i + 1}`}
                width={96}
                height={160}
                className="rounded-lg object-cover flex-shrink-0"
              />
            ))}
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <PlusIcon size={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Mockup móvil - SOLO desktop */}
        <div className="hidden md:flex md:col-span-1 justify-center">
          <MobileMockup className="w-70">
            <div className="relative w-full h-full">
              <button className="absolute top-4 left-4 bg-purple-700 p-2 rounded-full">
                <ChevronLeftIcon color="#fff" />
              </button>
              <button className="absolute top-4 right-4 p-3 rounded-full">
                <XIcon color="#fff" />
              </button>

              <Image
                src={homepageAds[adIndex]}
                alt="Vista previa"
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />

              <button
                onClick={() => setAdIndex((adIndex + 1) % homepageAds.length)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                <ChevronRightIcon color="#fff" />
              </button>

              <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center">
                <button className="px-6 py-2 border border-yellow-500 rounded-full text-white mb-2 font-medium">
                  Califícanos
                </button>
                <div className="flex space-x-2">
                  {homepageAds.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === adIndex ? 'bg-white' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </MobileMockup>
        </div>
      </div>

      {/* Fila 2: Califícanos */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 border-2 border-transparent bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <StarIcon size={20} />
              <h2 className="text-lg font-bold">Califícanos</h2>
            </div>
            <button className="flex items-center space-x-1 text-black">
              <PlayIcon size={16} />
              <span>Previsualizar</span>
            </button>
          </div>
          {/* horizontal scroll only on sm/md */}
          <div className="flex gap-4 pb-2 overflow-x-auto flex-nowrap lg:flex-wrap lg:overflow-visible">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <PlusIcon size={24} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mockup móvil - SOLO mobile/tablet */}
      <div className="flex md:hidden justify-center">
        <MobileMockup className="w-70 mb-8">
          <div className="relative w-full h-full">
            <button className="absolute top-4 left-4 bg-purple-700 p-2 rounded-full">
              <ChevronLeftIcon color="#fff" />
            </button>
            <button className="absolute top-4 right-4 p-3 rounded-full">
              <XIcon color="#fff" />
            </button>

            <Image
              src={homepageAds[adIndex]}
              alt="Vista previa"
              className="w-full h-full object-cover"
              layout="fill"
              objectFit="cover"
            />

            <button
              onClick={() => setAdIndex((adIndex + 1) % homepageAds.length)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              <ChevronRightIcon color="#fff" />
            </button>

            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center">
              <button className="px-6 py-2 border border-yellow-500 rounded-full text-white mb-2 font-medium">
                Califícanos
              </button>
              <div className="flex space-x-2">
                {homepageAds.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === adIndex ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </MobileMockup>
      </div>
    </div>
  )
}

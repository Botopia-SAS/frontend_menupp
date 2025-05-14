'use client'

import React, { useState } from 'react'
import {
 
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
  const [region, setRegion] = useState<string>(regions[0])
  const [adIndex, setAdIndex] = useState<number>(0)

  return (
    <div className="p-6">
      {/* Región */}
      <div className="flex space-x-4 mb-8">
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

      {/* Contenedor general centrado */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* === Fila 1: Homepage + Mockup === */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Homepage */}
       {/* === Fila 2: Califícanos === */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <StarIcon size={20} />
              <h2 className="text-lg font-semibold">Califícanos</h2>
            </div>
            <button className="flex items-center space-x-1 text-blue-500">
              <PlayIcon size={16} />
              <span>Previsualizar</span>
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {/** 1 slot con + y 4 vacíos */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-40 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                {i === 0 && <PlusIcon size={32} />}
              </div>
            ))}
          </div>
        </div>

          {/* Mockup móvil */}
          <div className="flex justify-center">
            <MobileMockup className="w-64">
              <div className="relative w-full h-full bg-black">
                {/* Top nav */}
                <button className="absolute top-4 left-4 bg-purple-700 p-2 rounded-full">
                  <ChevronLeftIcon color="#fff" />
                </button>
                <button className="absolute top-4 right-4 p-2 rounded-full">
                  <XIcon color="#fff" />
                </button>

                {/* Imagen */}
                <img
                  src={homepageAds[adIndex]}
                  alt="Vista previa"
                  className="w-full h-full object-contain"
                />

                {/* Next */}
                <button
                  onClick={() => setAdIndex((adIndex + 1) % homepageAds.length)}
                  className="absolute inset-y-0 right-2 flex items-center"
                >
                  <ChevronRightIcon color="#fff" />
                </button>

                {/* Footer controls */}
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

        {/* === Fila 2: Califícanos === */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <StarIcon size={20} />
              <h2 className="text-lg font-semibold">Califícanos</h2>
            </div>
            <button className="flex items-center space-x-1 text-blue-500">
              <PlayIcon size={16} />
              <span>Previsualizar</span>
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {/** 1 slot con + y 4 vacíos */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-40 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                {i === 0 && <PlusIcon size={32} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
